"use strict";

class BoardImport {
	static #jobsUrl = "/api/v3/board-import/jobs";
	static #jobIdAlias = "boardImportJobId";
	static #pollIntervalInMs = 1000;
	static #maxPolls = 30;

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

	seeBoardImportJobIsCreatedViaApi() {
		cy.get(`@${BoardImport.#jobIdAlias}`).then((jobId) => {
			cy.request({ url: `${BoardImport.#jobsUrl}/${jobId}` }).then(
				({ status, body }) => {
					expect(status).to.eq(200);
					expect(body.id).to.eq(jobId);
				}
			);
		});
	}

	seeBoardImportJobIsFinishedViaApi() {
		cy.get(`@${BoardImport.#jobIdAlias}`).then((jobId) => {
			this.#pollUntilJobIsFinished(jobId, BoardImport.#maxPolls);
		});
	}

	#pollUntilJobIsFinished(jobId, remainingPolls) {
		cy.request({ url: `${BoardImport.#jobsUrl}/${jobId}` }).then(({ body }) => {
			if (body.status === "finished") {
				return;
			}

			// A failed job never gets the status finished, so the test stops at once.
			expect(body.status).to.be.oneOf(["waiting", "running"]);
			expect(
				remainingPolls,
				"remaining polls of the board import job"
			).to.be.greaterThan(0);

			cy.wait(BoardImport.#pollIntervalInMs);
			this.#pollUntilJobIsFinished(jobId, remainingPolls - 1);
		});
	}
}
export default BoardImport;
