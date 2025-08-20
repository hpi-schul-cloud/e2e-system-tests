"use strict";

class ShareCourseModal {
	static #shareCourseDialog = '[data-testid="share-dialog"]';
	static #shareCourseDialogInfoTextTitle = '[data-testid="share-options-info-text"]';
	static #shareCourseDialogInfoTextContainer =
		'[data-testid="share-options-table-header"]';
	static #shareCourseDialogPersonalDataInfo =
		'[data-testid="share-options-personal-data-text"]';
	static #shareCourseDialogExternalToolsInfo =
		'[data-testid="share-modal-external-tools-info"]';
	static #shareCourseDialogToolProtectedParamsInfo =
		'[data-testid="share-modal-external-tools-protected-parameter-info"]';
	static #shareCourseDialogFilesInfo = '[data-testid="share-modal-coursefiles-info"]';
	static #shareCourseDialogSchoolInternalCheckBox = '[data-testid="isSchoolInternal"]';
	static #shareCourseDialogExpiryDateCheckBox = '[data-testid="hasExpiryDate"]';
	static #shareCourseResultUrlTextBox = '[data-testid="share-course-result-url"]';
	static #dialogNextButton = '[data-testid="dialog-next"]';
	static #shareCourseDialogMailButton = '[data-testid="shareMailAction"]';
	static #shareCourseDialogCopyLinkButton = '[data-testid="copyAction"]';
	static #shareCourseDialogQrCodeButton = '[data-testid="qrCodeAction"]';
	static #shareCourseDialogCloseButton = '[data-testid="dialog-close"]';
	static #shareCourseQRCodeScanner = '[data-testid="qrCode"]';
	static #checkboxInput = 'input[type="checkbox"]';

	seeShareCourseDialogBox() {
		cy.get(ShareCourseModal.#shareCourseDialog).should("be.visible");
	}

	seeInfoTextInShareCourseDialog() {
		cy.get(ShareCourseModal.#shareCourseDialogInfoTextTitle).should("be.visible");
		cy.get(ShareCourseModal.#shareCourseDialogInfoTextContainer).should("be.visible");
		cy.get(ShareCourseModal.#shareCourseDialogPersonalDataInfo).should("be.visible");
		cy.get(ShareCourseModal.#shareCourseDialogExternalToolsInfo).should("be.visible");
		cy.get(ShareCourseModal.#shareCourseDialogToolProtectedParamsInfo).should(
			"be.visible"
		);
		cy.get(ShareCourseModal.#shareCourseDialogFilesInfo).should("be.visible");
	}

	seeSchoolInternalCheckBoxAsChecked() {
		cy.get(ShareCourseModal.#shareCourseDialogSchoolInternalCheckBox).should(
			"be.visible"
		);
		cy.get(ShareCourseModal.#shareCourseDialogSchoolInternalCheckBox)
			.find(ShareCourseModal.#checkboxInput)
			.should("be.checked");
	}

	seeExpiryDateCheckBoxAsChecked() {
		cy.get(ShareCourseModal.#shareCourseDialogExpiryDateCheckBox).should(
			"be.visible"
		);
		cy.get(ShareCourseModal.#shareCourseDialogSchoolInternalCheckBox)
			.find(ShareCourseModal.#checkboxInput)
			.should("be.checked");
	}

	uncheckSchoolInternalCheckBoxInShareCourseDialog() {
		cy.get(ShareCourseModal.#shareCourseDialogSchoolInternalCheckBox)
			.find(ShareCourseModal.#checkboxInput)
			.uncheck();
	}

	clickContinueButtonInDialog() {
		cy.get(ShareCourseModal.#dialogNextButton).click();
	}

	seeCopyUrlInShareCourseResultDialog() {
		cy.get(ShareCourseModal.#shareCourseResultUrlTextBox).should("be.visible");
	}

	saveTheUrlInShareCourseResultDialog() {
		cy.get(ShareCourseModal.#shareCourseResultUrlTextBox)
			.find(".v-field__input")
			.invoke("attr", "value")
			.then((value) => {
				cy.wrap(value).as("importShareCourseUrl");
			});
	}

	seeMailButtonInShareCourseResultDialog() {
		cy.get(ShareCourseModal.#shareCourseDialogMailButton).should("be.visible");
	}

	seeCopyLinkButtonInShareCourseResultDialog() {
		cy.get(ShareCourseModal.#shareCourseDialogCopyLinkButton).should("be.visible");
	}

	seeQrCodeButtonInShareCourseResultDialog() {
		cy.get(ShareCourseModal.#shareCourseDialogQrCodeButton).should("be.visible");
	}

	clickQrCodeButtonInShareCourseResultDialog() {
		cy.get(ShareCourseModal.#shareCourseDialogQrCodeButton).click();
	}

	clickCloseButtonInShareCourseResultDialog() {
		cy.get(ShareCourseModal.#shareCourseDialogCloseButton).click();
	}

	seeQrCodeScannerInShareCourseResultDialog() {
		cy.get(ShareCourseModal.#shareCourseQRCodeScanner).should("be.visible");
	}

	seeDescriptionInShareDialog() {
		cy.get(ShareCourseModal.#shareCourseDialogInfoTextTitle).should("be.visible");
		cy.get(ShareCourseModal.#shareCourseDialogInfoTextContainer).should("be.visible");
	}
	convertStringToCamelCase(string) {
		return string
			.replace(/(?:^\w|[A-Z]|\b\w)/g, (match, index) =>
				index === 0 ? match.toLowerCase() : match.toUpperCase()
			)
			.replace(/\s+/g, "");
	}

	checkCheckboxStatus(
		parentSelector,
		childSelector = ShareCourseModal.#checkboxInput,
		expectedState
	) {
		cy.get(parentSelector)
			.should("be.visible")
			.find(childSelector)
			.then(($checkbox) => {
				const currentState =
					expectedState === "checked" ? "be.checked" : "not.be.checked";
				cy.wrap($checkbox).should(currentState);
			});
	}

	toggleCheckboxShareDialogBox(
		parentSelector,
		childSelector = ShareCourseModal.#checkboxInput,
		action
	) {
		cy.get(parentSelector)
			.find(childSelector)
			.then(($checkbox) => {
				cy.wrap($checkbox)[action === "check" ? "check" : "uncheck"]({
					force: true,
				});
			});
	}

	checkSchoolInternalCheckBoxState(expectedState) {
		this.checkCheckboxStatus(
			ShareCourseModal.#shareCourseDialogSchoolInternalCheckBox,
			ShareCourseModal.#checkboxInput,
			expectedState
		);
	}

	toggleSchoolInternalCheckBoxInShareDialog(action) {
		this.toggleCheckboxShareDialogBox(
			ShareCourseModal.#shareCourseDialogSchoolInternalCheckBox,
			ShareCourseModal.#checkboxInput,
			action
		);
	}

	clickContinueButtonInShareDialog() {
		cy.get(ShareCourseModal.#dialogNextButton).click();
	}

	checkExpiryDateCheckBoxState(expectedState) {
		this.checkCheckboxStatus(
			ShareCourseModal.#shareCourseDialogExpiryDateCheckBox,
			ShareCourseModal.#checkboxInput,
			expectedState
		);
	}

	seeShareOptionButtonCourseDialog(buttonName) {
		const normalizeSelector = this.convertStringToCamelCase(buttonName);
		cy.get(`[data-testid=${normalizeSelector}Action]`).should("be.visible");
	}
}

export default ShareCourseModal;
