"use strict";

class BoardImport {
	static #jobsUrl = "/api/v3/board-import/jobs";
	static #jobIdAlias = "boardImportJobId";

	startBoardImportViaApi(link) {
		// Relative URLs resolve against baseUrl, like the cy.visit() calls (cy.login sets it).
		cy.request({ method: "POST", url: BoardImport.#jobsUrl, body: { link } }).then(
			({ status, body }) => {
				expect(status).to.eq(201);
				expect(body.id).to.be.a("string").that.is.not.empty;
				expect(body.status).to.eq("waiting");
				cy.wrap(body.id).as(BoardImport.#jobIdAlias);
			}
		);
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
