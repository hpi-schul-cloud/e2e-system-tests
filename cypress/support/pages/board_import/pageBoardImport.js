"use strict";

class BoardImport {
	static #jobsUrl = "/api/v3/board-import/jobs";
	static #jobIdAlias = "boardImportJobId";

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
}
export default BoardImport;
