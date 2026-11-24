"use strict";

class BoardImport {
	static #jobsUrl = "/api/v3/board-import/jobs";
	static #jobIdAlias = "boardImportJobId";
	static #pollIntervalInMs = 1000;
	static #finalStatuses = ["finished", "failed"];

	startBoardImportViaApi(link, triesLeft = 12) {
		// Relative URLs resolve against baseUrl, like the cy.visit() calls (cy.login sets it).
		cy.request({
			method: "POST",
			url: BoardImport.#jobsUrl,
			body: { link },
			failOnStatusCode: false,
		}).then(({ status, body }) => {
			// The board import API runs in its own pod, which can still start up on a new namespace.
			if ([502, 503, 504].includes(status) && triesLeft > 1) {
				cy.wait(10000).then(() =>
					this.startBoardImportViaApi(link, triesLeft - 1)
				);

				return;
			}

			expect(status).to.eq(201);
			expect(body.id).to.be.a("string").that.is.not.empty;
			expect(body.status).to.eq("waiting");
			cy.wrap(body.id).as(BoardImport.#jobIdAlias);
		});
	}

	seeBoardImportJobHasStatusViaApi(expectedStatus, timeoutInSeconds) {
		// Polling sees a short-lived status only by chance, so only a final status is reliable.
		expect(BoardImport.#finalStatuses).to.include(expectedStatus);
		expect(timeoutInSeconds).to.be.a("number");
		cy.get(`@${BoardImport.#jobIdAlias}`).then((jobId) => {
			const deadline = Date.now() + timeoutInSeconds * 1000;
			this.#pollUntilJobHasStatus(jobId, expectedStatus, deadline);
		});
	}

	#pollUntilJobHasStatus(jobId, expectedStatus, deadline) {
		cy.request({
			url: `${BoardImport.#jobsUrl}/${jobId}`,
			retryOnStatusCodeFailure: true,
		}).then(({ status, body }) => {
			expect(status).to.eq(200);
			expect(body.id).to.eq(jobId);
			if (body.status === expectedStatus) {
				return;
			}

			// A job with a final status never changes, so the test stops at once.
			const isFinalStatus = BoardImport.#finalStatuses.includes(body.status);
			if (isFinalStatus || Date.now() >= deadline) {
				expect(body.status, "status of the board import job").to.eq(
					expectedStatus
				);
			}

			cy.wait(BoardImport.#pollIntervalInMs);
			this.#pollUntilJobHasStatus(jobId, expectedStatus, deadline);
		});
	}
}
export default BoardImport;
