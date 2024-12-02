"use strict"

class ShareCourseModal {
	static #shareCourseDialog = '[data-testid="share-dialog"]'
	static #shareCourseDialogInfoTextTitle = '[data-testid="share-options-info-text"]';
	static #shareCourseDialogInfoTextContainer = '[data-testid="share-options-table-header"]';
	static #shareCourseDialogPersonalDataInfo = '[data-testid="share-options-personal-data-text"]';
	static #shareCourseDialogExternalToolsInfo = '[data-testid="share-modal-external-tools-info"]';
	static #shareCourseDialogSchoolInternalCheckBox = '[data-testid="isSchoolInternal"]';
	static #shareCourseDialogExpiryDateCheckBox = '[data-testid="hasExpiryDate"]';
	static #shareCourseResultUrlTextBox = '[data-testid="share-course-result-url"]';
	static #dialogNextButton = '[data-testid="dialog-next"]';

	seeShareCourseDialogBox() {
		cy.get(ShareCourseModal.#shareCourseDialog).should("exist");
	}

	seeInfoTextInShareCourseDialog() {
		cy.get(ShareCourseModal.#shareCourseDialogInfoTextTitle).should("exist");
		cy.get(ShareCourseModal.#shareCourseDialogInfoTextContainer).should("exist");
		cy.get(ShareCourseModal.#shareCourseDialogPersonalDataInfo).should("exist");
		cy.get(ShareCourseModal.#shareCourseDialogExternalToolsInfo).should("exist");
	}

	seeSchoolInternalCheckBoxAsChecked() {
		cy.get(ShareCourseModal.#shareCourseDialogSchoolInternalCheckBox).should("exist");
		cy.get(ShareCourseModal.#shareCourseDialogSchoolInternalCheckBox)
			.find('input[type="checkbox"]')
			.should("be.checked");
	}

	seeExpiryDateCheckBoxAsChecked() {
		cy.get(ShareCourseModal.#shareCourseDialogExpiryDateCheckBox).should("exist");
		cy.get(ShareCourseModal.#shareCourseDialogSchoolInternalCheckBox)
			.find('input[type="checkbox"]')
			.should("be.checked");
	}

	uncheckSchoolInternalCheckBoxInShareCourseDialog() {
		cy.get(ShareCourseModal.#shareCourseDialogSchoolInternalCheckBox)
			.find('input[type="checkbox"]')
			.uncheck();
	}

	clickContinueButtonInDialog() {
		cy.get(ShareCourseModal.#dialogNextButton).click();
	}

	seeCopyUrlInShareCourseResultDialog() {
		cy.get(ShareCourseModal.#shareCourseResultUrlTextBox).should("exist");
	}

	saveTheUrlInShareCourseResultDialog() {
		cy.get(ShareCourseModal.#shareCourseResultUrlTextBox)
			.find(".v-field__input")
			.invoke("attr", "value")
			.then((value) => {
				Cypress.env('importShareCourseUrl', value);
			});
	}
}

export default ShareCourseModal;
