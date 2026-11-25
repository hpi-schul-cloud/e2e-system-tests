"use strict";

class BoardImport {
	static #jobsUrl = "/api/v3/board-import/jobs";
	static #finalStatuses = ["finished", "failed"];
	static #gatewayErrorStatuses = [502, 503, 504];
	static #importBoardButtonInRoom = '[data-testid="import-board-button"]';
	static #importDialog = '[data-testid="board-import-dialog"]';
	static #linkInput = '[data-testid="board-import-link"] input';
	static #importButton = '[data-testid="board-import-dialog-confirm"]';
	static #closeButton = '[data-testid="board-import-dialog-cancel"]';
	static #jobStatus = '[data-testid="board-import-job-status"]';

	// The board import API runs in its own pod, which can still start up on a new namespace.
	waitForBoardImportApi(triesLeft = 12) {
		cy.request({
			url: `${BoardImport.#jobsUrl}/000000000000000000000000`,
			failOnStatusCode: false,
		}).then(({ status }) => {
			if (BoardImport.#gatewayErrorStatuses.includes(status) && triesLeft > 1) {
				cy.wait(10000).then(() => this.waitForBoardImportApi(triesLeft - 1));

				return;
			}

			expect(status, "status of the board import API").to.not.be.oneOf(
				BoardImport.#gatewayErrorStatuses
			);
		});
	}

	clickOnImportBoardButtonInRoom() {
		cy.get(BoardImport.#importBoardButtonInRoom).click();
	}

	seeBoardImportDialog() {
		cy.get(BoardImport.#importDialog).should("be.visible");
	}

	enterLinkInBoardImportDialog(link) {
		cy.get(BoardImport.#linkInput).clear().type(link);
	}

	clickOnImportButtonInBoardImportDialog() {
		cy.get(BoardImport.#importButton).click();
	}

	closeBoardImportDialog() {
		cy.get(BoardImport.#closeButton).click();
		cy.get(BoardImport.#importDialog).should("not.exist");
	}

	seeBoardImportJobHasStatus(expectedStatus, timeoutInSeconds) {
		// Polling sees a short-lived status only by chance, so only a final status is reliable.
		expect(BoardImport.#finalStatuses).to.include(expectedStatus);
		expect(timeoutInSeconds).to.be.a("number");
		// A job with a final status never changes, so the test stops at once.
		cy.get(BoardImport.#jobStatus, { timeout: timeoutInSeconds * 1000 })
			.invoke("text")
			.should((text) => {
				expect(text.trim()).to.be.oneOf(BoardImport.#finalStatuses);
			})
			.then((text) => {
				expect(text.trim(), "status of the board import job").to.eq(
					expectedStatus
				);
			});
	}
}
export default BoardImport;
