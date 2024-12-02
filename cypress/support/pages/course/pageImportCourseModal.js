"use strict"

class ImportCourseModal {

	static #importShareCourseDialog = '[data-testid="import-modal"]'
	static #importShareCourseToolsInfo = '[data-testid="import-modal-external-tools-info"]'
	static #importShareCourseNameInput = '[data-testid="import-modal-name-input"]'
	static #dialogConfirmButton = '[data-testid="dialog-confirm"]';

	seeImportShareCourseDialogBox() {
		cy.get(ImportCourseModal.#importShareCourseDialog).should("exist");
	}

	seeImportShareCourseToolsInfo() {
		cy.get(ImportCourseModal.#importShareCourseToolsInfo).should("exist");
	}

	enterCourseNameForImportCourse(input) {
		cy.get(ImportCourseModal.#importShareCourseNameInput).should("exist");
		cy.get(ImportCourseModal.#importShareCourseNameInput).clear();
		cy.get(ImportCourseModal.#importShareCourseNameInput).type(input);
	}

	clickOnConfirmButtonInDialog() {
		cy.get(ImportCourseModal.#dialogConfirmButton).click();
	}

	visitSavedShareCourseUrl() {
		cy.visit(Cypress.env('importShareCourseUrl'));
	}
}

export default ImportCourseModal;
