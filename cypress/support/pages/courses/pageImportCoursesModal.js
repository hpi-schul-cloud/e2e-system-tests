"use strict";

class ImportCourseModal {
	static #importShareCourseDialog = '[data-testid="import-dialog"]';
	static #importShareCourseToolsInfo = '[data-testid="import-dialog-warnings"]';
	static #importShareCourseNameInputDiv = '[data-testid="import-dialog-name-input"]';
	static #importShareCourseNameInputField = '[data-testid="import-dialog-name-input"]';
	static #importShareCourseDialogConfirmButton = '[data-testid="import-modal-confirm"]';
	static #importDialogConfirmButton = '[data-testid="import-dialog-confirm"]';
	static #importShareCourseDialogTitle = '[data-testid="import-modal-title"]';
	static #importCourseDialogTitle = '[data-testid="import-dialog-title"]';
	static #importShareCourseDialogFilesInfo =
		'[data-testid="import-modal-coursefiles-info"]';
	static #importShareCourseDialogExternalToolsInfo =
		'[data-testid="import-modal-external-tools-protected-parameter-info"]';
	static #importShareTopicDialogDropdown = '[data-testid="import-destination-select"]';
	static #importShareTopicDialogDropdownOption = '[role="option"]';

	seeImportShareCourseDialogBox() {
		cy.get(ImportCourseModal.#importShareCourseDialog).should("be.visible");
	}

	seeImportShareCourseToolsInfo() {
		cy.get(ImportCourseModal.#importShareCourseToolsInfo).should("be.visible");
		cy.get(
			`${ImportCourseModal.#importShareCourseDialogTitle}, ${ImportCourseModal.#importCourseDialogTitle}`
		).should("be.visible");
	}

	enterCourseNameForImportCourse(input) {
		cy.get(ImportCourseModal.#importShareCourseNameInputDiv).should("be.visible");
		cy.get(ImportCourseModal.#importShareCourseNameInputDiv).clear();
		cy.get(ImportCourseModal.#importShareCourseNameInputDiv).type(input);
	}

	clickOnConfirmButtonInImportShareCourseDialog() {
		cy.get(
			`${ImportCourseModal.#importShareCourseDialogConfirmButton}, ${ImportCourseModal.#importDialogConfirmButton}`
		).click();
	}

	visitSavedShareCourseUrl() {
		cy.get("@importShareCourseUrl").then((url) => {
			cy.visit(url);
		});
	}

	seeDefaultCourseNameForImportCourse(defaultCourseName) {
		cy.get(ImportCourseModal.#importShareCourseNameInputField).should("be.visible");
		cy.get(ImportCourseModal.#importShareCourseNameInputField)
			.find("input")
			.should("have.value", defaultCourseName);
	}

	seeImportDropDownDialogBox() {
		cy.get(ImportCourseModal.#importShareTopicDialogDropdown).click();
	}

	selectCourseFromDropdown(courseName) {
		cy.get(ImportCourseModal.#importShareTopicDialogDropdown).click();
		cy.get(ImportCourseModal.#importShareTopicDialogDropdownOption)
			.contains(courseName)
			.click({ force: true });
		cy.get(ImportCourseModal.#importShareTopicDialogDropdown).should(
			"contain.text",
			courseName
		);
	}
}

export default ImportCourseModal;
