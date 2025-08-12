"use strict";

class ImportCourseModal {
	static #importShareCourseDialog = '[data-testid="import-modal"]';
	static #importShareCourseToolsInfo =
		'[data-testid="import-modal-external-tools-info"]';
	static #importShareCourseNameInputDiv = '[data-testid="import-modal-name-input"]';
	static #importShareCourseNameInputField =
		'div[data-testid="import-modal-name-input"] input[class="v-field__input"]';
	static #importShareCourseDialogConfirmButton = '[data-testid="dialog-confirm"]';
	static #importShareCourseDialogTitle = '[data-testid="dialog-title"]';
	static #importShareCourseDialogTableHeader =
		'[data-testid="import-options-table-header"]';
	static #importShareCourseDialogPersonalData =
		'[data-testid="import-options-personal-data-text"]';
	static #importShareCourseDialogFilesInfo =
		'[data-testid="import-modal-coursefiles-info"]';
	static #importShareCourseDialogExternalToolsInfo =
		'[data-testid="import-modal-external-tools-protected-parameter-info"]';
	static #importShareTopicDialog = '[data-testid="dialog-content"]';
	static #importShareTopicDialogDropdown = '[data-testid="import-destination-select"]';

	seeImportShareCourseDialogBox() {
		cy.get(ImportCourseModal.#importShareCourseDialog).should("be.visible");
	}

	seeImportShareCourseToolsInfo() {
		cy.get(ImportCourseModal.#importShareCourseToolsInfo).should("be.visible");
		cy.get(ImportCourseModal.#importShareCourseDialogTitle).should("be.visible");
		cy.get(ImportCourseModal.#importShareCourseDialogTableHeader).should(
			"be.visible"
		);
		cy.get(ImportCourseModal.#importShareCourseDialogPersonalData).should(
			"be.visible"
		);
		cy.get(ImportCourseModal.#importShareCourseDialogFilesInfo).should("be.visible");
		cy.get(ImportCourseModal.#importShareCourseDialogExternalToolsInfo).should(
			"be.visible"
		);
	}

	enterCourseNameForImportCourse(input) {
		cy.get(ImportCourseModal.#importShareCourseNameInputDiv).should("be.visible");
		cy.get(ImportCourseModal.#importShareCourseNameInputDiv).clear();
		cy.get(ImportCourseModal.#importShareCourseNameInputDiv).type(input);
	}

	clickOnConfirmButtonInImportShareCourseDialog() {
		cy.get(ImportCourseModal.#importShareCourseDialogConfirmButton).click();
	}

	visitSavedShareCourseUrl() {
		cy.get("@importShareCourseUrl").then((url) => {
			cy.visit(url);
		});
	}

	seeDefaultCourseNameForImportCourse(defaultCourseName) {
		cy.get(ImportCourseModal.#importShareCourseNameInputDiv).should("be.visible");
		cy.get(ImportCourseModal.#importShareCourseNameInputField).should("be.visible");
		cy.get(ImportCourseModal.#importShareCourseNameInputField)
			.invoke("attr", "value")
			.then((value) => {
				expect(value).to.equal(defaultCourseName);
			});
	}

	seeImportShareTopicDialogBox() {
		cy.get(ImportCourseModal.#importShareTopicDialog).should("be.visible");
	}

	seeImportDropDownTopicDialogBox() {
		cy.get(ImportCourseModal.#importShareTopicDialogDropdown).click();
	}

	selectCourseFromDropdown(courseName) {
		cy.get('[data-testid="import-destination-select"]').click();
		cy.get(".v-overlay-container .v-list-item-title")
			.contains(courseName)
			.click({ force: true });
		cy.get(".v-select__selection-text").should("contain.text", courseName);
	}
}

export default ImportCourseModal;
