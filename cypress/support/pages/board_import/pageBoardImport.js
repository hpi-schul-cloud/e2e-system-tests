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
	static #importError = '[data-testid="board-import-error"]';

	waitForBoardImportApi() {
		this.#waitForJobsRoute(12);
		// The jobs route answers also when the import is off, so only the config shows the flag.
		cy.request("/api/v3/config/public").then(({ body }) => {
			expect(
				body.FEATURE_BOARD_IMPORT_ENABLED,
				"FEATURE_BOARD_IMPORT_ENABLED"
			).to.eq(true);
		});
	}

	// The board import API runs in its own pod, which can still start up on a new namespace.
	#waitForJobsRoute(triesLeft) {
		cy.request({
			url: `${BoardImport.#jobsUrl}/000000000000000000000000`,
			failOnStatusCode: false,
		}).then(({ status }) => {
			if (BoardImport.#gatewayErrorStatuses.includes(status) && triesLeft > 1) {
				cy.wait(10000).then(() => this.#waitForJobsRoute(triesLeft - 1));

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

	// The room page does not load the board that the import worker created.
	reloadPage() {
		cy.reload();
	}

	seeBoardImportJobHasStatus(expectedStatus, timeoutInSeconds) {
		// Polling sees a short-lived status only by chance, so only a final status is reliable.
		expect(BoardImport.#finalStatuses).to.include(expectedStatus);
		expect(timeoutInSeconds).to.be.a("number");
		// The dialog shows an error and no status when the start of the import fails.
		cy.get(`${BoardImport.#jobStatus}, ${BoardImport.#importError}`, {
			timeout: timeoutInSeconds * 1000,
		}).then(($elements) => {
			expect(
				$elements.filter(BoardImport.#importError).text().trim(),
				"error in the board import dialog"
			).to.be.empty;
		});
		// A job with a final status never changes, so the test stops at once.
		cy.get(BoardImport.#jobStatus, { timeout: timeoutInSeconds * 1000 })
			.should(($status) => {
				expect($status.text().trim()).to.be.oneOf(BoardImport.#finalStatuses);
			})
			.then(($status) => {
				expect($status.text().trim(), "status of the board import job").to.eq(
					expectedStatus
				);
			});
	}
}
export default BoardImport;
