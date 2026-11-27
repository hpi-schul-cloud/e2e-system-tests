"use strict";

/**
 * Exercises the cookie-credential CSRF protection of the schulcloud-server and the
 * file-storage. cy.request() is sent from Node, so the browser does not add
 * Sec-Fetch-Site, Origin or Referer. Each request sets exactly the browser headers
 * the scenario asks for, while the jwt cookie of the logged-in session is attached
 * automatically.
 */
class CsrfProtection {
	static #csrfMessage = "Cross-site cookie-credentialed request is forbidden";
	static #foreignOrigin = "https://csrf-attacker.example";
	static #lastResponseAlias = "csrfProtectionResponse";
	static #observedResponses = [];

	static #resolveOrigin(origin, publicOrigin) {
		switch (origin) {
			case "public":
				return publicOrigin;
			case "public-over-http":
				return publicOrigin.replace(/^https:/, "http:");
			case "public-with-other-port":
				return `${publicOrigin}:8443`;
			case "foreign":
				return CsrfProtection.#foreignOrigin;
			default:
				return origin;
		}
	}

	static #isCsrfRejection(method, status, body) {
		if (status !== 403) {
			return false;
		}

		// HEAD responses have no body, so a 403 is the only signal available.
		if (method.toUpperCase() === "HEAD") {
			return true;
		}

		return body?.message === CsrfProtection.#csrfMessage;
	}

	#withPublicOrigin(callback) {
		cy.location("origin").then((publicOrigin) => callback(publicOrigin));
	}

	#send(method, path, headers) {
		cy.request({
			method: method.toUpperCase(),
			url: path,
			headers,
			body: ["GET", "HEAD"].includes(method.toUpperCase()) ? undefined : {},
			failOnStatusCode: false,
			followRedirect: false,
		}).then((response) => {
			cy.wrap({ method, path, status: response.status, body: response.body }).as(
				CsrfProtection.#lastResponseAlias
			);
		});
	}

	sendCookieRequestWithFetchSite(method, path, fetchSite) {
		this.#send(method, path, { "Sec-Fetch-Site": fetchSite });
	}

	sendCookieRequestWithOrigin(method, path, origin) {
		this.#withPublicOrigin((publicOrigin) => {
			this.#send(method, path, {
				Origin: CsrfProtection.#resolveOrigin(origin, publicOrigin),
			});
		});
	}

	sendCookieRequestWithReferer(method, path, referer) {
		this.#withPublicOrigin((publicOrigin) => {
			const refererOrigin = CsrfProtection.#resolveOrigin(referer, publicOrigin);
			this.#send(method, path, { Referer: `${refererOrigin}/rooms` });
		});
	}

	sendCookieRequestWithForeignOriginAndPublicReferer(method, path) {
		this.#withPublicOrigin((publicOrigin) => {
			this.#send(method, path, {
				Origin: CsrfProtection.#foreignOrigin,
				Referer: `${publicOrigin}/rooms`,
			});
		});
	}

	sendCookieRequestWithForeignOriginAndForwardedHeaders(method, path) {
		this.#send(method, path, {
			Origin: CsrfProtection.#foreignOrigin,
			"X-Forwarded-Host": new URL(CsrfProtection.#foreignOrigin).host,
			"X-Forwarded-Proto": "https",
		});
	}

	sendCookieRequestWithoutBrowserHeaders(method, path) {
		this.#send(method, path, {});
	}

	sendBearerRequestWithFetchSite(method, path, fetchSite) {
		cy.getCookie("jwt")
			.should("exist")
			.then((cookie) => {
				this.#send(method, path, {
					Authorization: `Bearer ${cookie.value}`,
					"Sec-Fetch-Site": fetchSite,
				});
			});
	}

	seeRequestRejectedByCsrfProtection() {
		cy.get(`@${CsrfProtection.#lastResponseAlias}`).then(
			({ method, status, body }) => {
				expect(
					CsrfProtection.#isCsrfRejection(method, status, body),
					`expected a CSRF rejection, got ${status} ${JSON.stringify(body)}`
				).to.equal(true);
			}
		);
	}

	seeRequestNotRejectedByCsrfProtection() {
		cy.get(`@${CsrfProtection.#lastResponseAlias}`).then(
			({ method, status, body }) => {
				expect(
					CsrfProtection.#isCsrfRejection(method, status, body),
					`expected no CSRF rejection, got ${status} ${JSON.stringify(body)}`
				).to.equal(false);
			}
		);
	}

	seeResponseStatus(expectedStatus) {
		cy.get(`@${CsrfProtection.#lastResponseAlias}`)
			.its("status")
			.should("eq", expectedStatus);
	}

	observeApiResponses() {
		CsrfProtection.#observedResponses.length = 0;

		// req.on("response") keeps the request propagating to the aliased intercepts of other steps.
		cy.intercept({ pathname: /^\/api\/v3\// }, (req) => {
			req.on("response", (res) => {
				CsrfProtection.#observedResponses.push({
					method: req.method,
					path: new URL(req.url).pathname,
					status: res.statusCode,
					body: res.body,
				});
			});
		});
	}

	seeNoObservedCsrfRejections() {
		cy.wrap(CsrfProtection.#observedResponses).then((responses) => {
			const rejected = responses.filter(({ method, status, body }) =>
				CsrfProtection.#isCsrfRejection(method, status, body)
			);

			expect(
				rejected.map(({ method, path }) => `${method} ${path}`),
				"API requests rejected by the CSRF protection"
			).to.be.empty;
		});
	}

	seeObservedSuccessfulRequest(method, pathPart) {
		cy.wrap(null, { timeout: 30000 }).should(() => {
			const match = CsrfProtection.#observedResponses.find(
				(response) =>
					response.method === method.toUpperCase() &&
					response.path.includes(pathPart)
			);

			expect(match, `${method} request to ${pathPart}`).to.exist;
			expect(match.status, `${method} ${match.path}`).to.be.within(200, 399);
		});
	}
}

export default CsrfProtection;
