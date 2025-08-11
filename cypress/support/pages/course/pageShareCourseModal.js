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
	static #shareTopicCourseDialog = '[data-testid="dialog-content"]';
	static #DescriptionTextTopicCourseDialog = '[data-testid="share-options-info-text"]';
	static #shareInfoTextTopicCourseDialog = '[data-testid="share-options-table-header"]';
	static #shareTopicDialogSchoolInternalCheckBox = '[data-testid="isSchoolInternal"]';
	static #shareTopicDialogExpiryDateCheckBox = '[data-testid="hasExpiryDate"]';
	static #dialogContinueTopicButton = '[data-testid="dialog-next"]';

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
			.find('input[type="checkbox"]')
			.should("be.checked");
	}

	seeExpiryDateCheckBoxAsChecked() {
		cy.get(ShareCourseModal.#shareCourseDialogExpiryDateCheckBox).should(
			"be.visible"
		);
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

	seeTopicShareCourseDialogBox() {
		cy.get(ShareCourseModal.#shareTopicCourseDialog).should("be.visible");
	}

	seeTopicDescriptionInShareDialog() {
		cy.get(ShareCourseModal.#DescriptionTextTopicCourseDialog).should("be.visible");
		cy.get(ShareCourseModal.#shareInfoTextTopicCourseDialog).should("be.visible");
	}

	seeTopicSchoolInternalCheckBoxAsCheckedInShareDialog() {
		cy.get(ShareCourseModal.#shareTopicDialogSchoolInternalCheckBox).should(
			"be.visible"
		);
		cy.get(ShareCourseModal.#shareTopicDialogSchoolInternalCheckBox)
			.find('input[type="checkbox"]')
			.should("be.checked");
	}

	seeTopicExpiryDateCheckBoxAsCheckedInShareDialog() {
		cy.get(ShareCourseModal.#dialogContinueTopicButton).should("be.visible");
		cy.get(ShareCourseModal.#shareTopicDialogExpiryDateCheckBox)
			.find('input[type="checkbox"]')
			.should("be.checked");
	}

	uncheckSchoolInternalCheckBoxInShareTopicDialog() {
		cy.get(ShareCourseModal.#shareTopicDialogSchoolInternalCheckBox)
			.find('input[type="checkbox"]')
			.uncheck();
	}

	clickContinueButtonInShareTopicDialog() {
		cy.get(ShareCourseModal.#dialogContinueTopicButton).click();
	}
}

export default ShareCourseModal;
