const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");
import CsrfProtection from "../../pages/security/pageCsrfProtection";

const csrfProtection = new CsrfProtection();

// EXTERNAL COMMON STEP DEFINITIONS
// ================================
// External defined steps can be found here:
// -----------------------------------------
// --> \step_definition\authentication\loginStep.spec.js
// --> \step_definition\common_helper\prePostConditionSteps.spec.js
// --> \step_definition\rooms\roomsSteps.spec.js
// --> \step_definition\rooms_board\roomsBoardSteps.spec.js

// Paths may contain the placeholder ':unknownId', which is replaced by an id that does not exist.
const UNKNOWN_ID = "000000000000000000000000";
const resolvePath = (path) => path.replaceAll(":unknownId", UNKNOWN_ID);

When(
	"I send a cookie-authenticated {string} request to {string} with Sec-Fetch-Site {string}",
	(method, path, fetchSite) => {
		csrfProtection.sendCookieRequestWithFetchSite(
			method,
			resolvePath(path),
			fetchSite
		);
	}
);

When(
	"I send a cookie-authenticated {string} request to {string} with Origin {string}",
	(method, path, origin) => {
		csrfProtection.sendCookieRequestWithOrigin(method, resolvePath(path), origin);
	}
);

When(
	"I send a cookie-authenticated {string} request to {string} with Referer {string}",
	(method, path, referer) => {
		csrfProtection.sendCookieRequestWithReferer(method, resolvePath(path), referer);
	}
);

When(
	"I send a cookie-authenticated {string} request to {string} with a foreign Origin and a public Referer",
	(method, path) => {
		csrfProtection.sendCookieRequestWithForeignOriginAndPublicReferer(
			method,
			resolvePath(path)
		);
	}
);

When(
	"I send a cookie-authenticated {string} request to {string} with a foreign Origin and forwarded headers",
	(method, path) => {
		csrfProtection.sendCookieRequestWithForeignOriginAndForwardedHeaders(
			method,
			resolvePath(path)
		);
	}
);

When(
	"I send a cookie-authenticated {string} request to {string} without browser origin headers",
	(method, path) => {
		csrfProtection.sendCookieRequestWithoutBrowserHeaders(method, resolvePath(path));
	}
);

When(
	"I send a bearer-authenticated {string} request to {string} with Sec-Fetch-Site {string}",
	(method, path, fetchSite) => {
		csrfProtection.sendBearerRequestWithFetchSite(
			method,
			resolvePath(path),
			fetchSite
		);
	}
);

Then("the request is rejected by the CSRF protection", () => {
	csrfProtection.seeRequestRejectedByCsrfProtection();
});

Then("the request is not rejected by the CSRF protection", () => {
	csrfProtection.seeRequestNotRejectedByCsrfProtection();
});

Then("I see the response status {int}", (status) => {
	csrfProtection.seeResponseStatus(status);
});

Given("API responses are observed for CSRF rejections", () => {
	csrfProtection.observeApiResponses();
});

Then("no API request was rejected by the CSRF protection", () => {
	csrfProtection.seeNoObservedCsrfRejections();
});

Then("I see a successful {string} API request to {string}", (method, pathPart) => {
	csrfProtection.seeObservedSuccessfulRequest(method, pathPart);
});
