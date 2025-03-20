"use strict";

class RoomBoards {
	static #btnDialogCancel = '[data-testid="dialog-cancel"]';
	static #btnDialogConfirm = '[data-testid="dialog-confirm"]';
	static #boardMenuActionDelete = '[data-testid="kebab-menu-action-delete"]';
	static #mainPageArea = '[id="main-content"]';
	static #roomBoardTitleOnPage = '[data-testid="board-title"]';
	static #boardMenuIcon = '[data-testid="board-menu-icon"]';
	static #btnBoardMenuActionRename = '[data-testid="kebab-menu-action-rename"]';
	static #dialogAddMultiColumnBoard = '[data-testid="dialog-add-multi-column-board"]';
	static #dialogAddSingleColumnBoard = '[data-testid="dialog-add-single-column-board"]';
	static #boardLayoutDialogTitle = '[data-testid="board-layout-dialog-title"]';
	static #breadcrumbToRoomNavigationFromBoard = '[data-testid="breadcrumb-1"]';
	static #multiColumnBoardSelector = '[data-testid="board-tile-subtitle-0"]';
	static #copyOptionSelector = '[data-testid="kebab-menu-action-copy"]';
	static #chipDraftSelector = '[data-testid="board-draft-chip"]';
	static #publishMenuSelector = '[data-testid="kebab-menu-action-publish"]';
	static #singleColumnBoardSelector = '[data-testid="board-tile-title-1"]';
	static #multiColumnCopiedBoardSelector = '[data-testid="board-tile-title-2"]';
	static #singleColumnCopiedBoardSelector = '[data-testid="board-tile-title-3"]';
	static #elementSelectionDialog = '[data-testid="element-type-selection"]';
	static #closeDialogButton = '[data-testid="dialog-close"]';
	static #videoConferenceTitleInput = '[data-testid="video-conference-element-title"]';
	static #saveButton = '[data-testid="save-video-conference-title-button"]';
	static #videoConferenceElement = '[data-testid="board-video-conference-element"]';
	static #videoConferenceModal = '[data-testid="video-conference-config-dialog"]';
	static #createVideoConferenceButton = '[data-testid="dialog-create"]';
	static #moderatorApprovalCheckbox =
		'[data-testid="moderator-must-approve-join-requests"]';
	static #cancelButtonInVideoConferenceModal = '[data-testid="dialog-cancel"]';
	static #globalCommonThreeDotButton = '[data-testid="board-menu-icon"]';
	static #deleteOptionOnCardElementThreeDot =
		'[data-testid="kebab-menu-action-delete"]';
	static #deleteConfirmationDialogForVideoConferenceElement =
		'[data-testid="dialog-title"]';
	static #deleteButtonOnVideoConferenceElementDialog = '[data-testid="dialog-confirm"]';
	static #threeDotButtonInCard = '[data-testid="card-menu-btn-0-0"]';
	static #editOptionInCardThreeDot = '[data-testid="kebab-menu-action-edit"]';
	static #shareSettingsDialog = '[data-testid="dialog-content"]';
	static #sameSchoolCheckbox = '[data-testid="isSchoolInternal"]';
	static #days21Checkbox = '[data-testid="hasExpiryDate"]';
	static #continueButton = '[data-testid="dialog-next"]';
	static #shareEmailOption = '[data-testid="shareMailAction"]';
	static #copyLinkOption = '[data-testid="copyAction"]';
	static #urlInputBoxCopyBoard = '[data-testid="share-course-result-url"]';
	static #scanQRCodeOption = '[data-testid="qrCodeAction"]';
	static #roomSelectionBoxModal = '[data-testid="import-destination-select"]';
	static #continueButtonInImportModal = '[data-testid="dialog-next"]';
	static #boardNameInput = '[data-testid="import-modal-name-input"]';
	static #importButton = '[data-testid="dialog-confirm"]';
	static #shareModalTitle = '[data-testid="dialog-title"]';
	static #shareInformationBox = '[data-testid="share-options-info-text"]';
	static #cancelButtonInShareModal = '[data-testid="dialog-cancel"]';
	static #sharedBoardResultUrlTextBox = '[data-testid="share-course-result-url"]';
	static #shareImportAlert = '[data-testid="alert-text"]';
	static #checkBoxCopyShareBoardModal = 'input[type="checkbox"]';

	static #inputAttachFile = 'input[type="file"]';
	static #uploadedFileTiltleInCard = '[data-testid="content-element-title-slot"]';
	static #downloadFileIconSelector =
		'[data-testid="board-file-element-edit-menu-download"]';
	static #fileElementSelector = '[data-testid="board-file-element"]';
	static #threeDotMenuSelector = '[data-testid="element-menu-button-0-0-1"]';
	static #mainContentSelector = "#main-content";
	static #fileCaptionInputSelector = '[data-testid="file-caption-input"]';
	static #parentContainerSelector = ".d-flex.flex-column";
	static #fileAltTextInputSelector = '[data-testid="file-alttext-input"]';
	static #downloadButtonOnFullImage = '[data-testid="light-box-download-btn"]';
	static #closeButtonSelectorOnFullImage = '[data-testid="light-box-close-btn"]';
	static #thumbnailImageOnCard = 'div[role="button"].focusable-container'; // data-testid to be defined in FE?
	static #fullScreenImageElement = 'div[aria-modal="true"] img'; // data-testid to be defined in FE?
	static #videoPreviewOnCard = "div.video-container video"; // data-testid to be defined in FE? <video />
	static #audioPreviewOnCard = 'audio[loading="lazy"]'; // data-testid to be defined in FE? <audio />

	verifyVideoFileInCard() {
		cy.get(RoomBoards.#videoPreviewOnCard).should("be.visible");
	}

	verifyAudioFileInCard() {
		cy.get(RoomBoards.#audioPreviewOnCard).should("be.visible");
	}

	verifyImageFileUploaded() {
		cy.get(RoomBoards.#thumbnailImageOnCard).should("be.visible");
	}

	verifyCardImageInFullScreen() {
		cy.get(RoomBoards.#fullScreenImageElement, { timeout: 10000 })
			.should("be.visible")
			.and(($fullScreen) => {
				// ensure the image has loaded properly in fullcreen
				expect($fullScreen[0].naturalWidth).to.be.greaterThan(0);
			});

		// verify close button is also visible on the fullscreen image
		cy.get(RoomBoards.#downloadButtonOnFullImage).should("exist");

		// verify download button is also visible on the fullscreen image
		cy.get(RoomBoards.#closeButtonSelectorOnFullImage).should("exist");
	}

	enterImageAltTextIncard(altText) {
		// select the parent element with the given classes
		cy.get(RoomBoards.#parentContainerSelector)
			// find the input field within that parent
			.find(RoomBoards.#fileAltTextInputSelector)
			.click();
		// select the same parent again
		cy.get(RoomBoards.#parentContainerSelector)
			// find the input field again
			.find(RoomBoards.#fileAltTextInputSelector)
			// type the alt text
			.type(altText);
		//click outside the card to save the alt text
		cy.get(RoomBoards.#mainContentSelector).click();
	}

	verifyDocxFileUploaded() {
		cy.get(RoomBoards.#uploadedFileTiltleInCard).should("be.visible");
	}

	shouldNotSeeFileElement() {
		cy.get(RoomBoards.#fileElementSelector).should("not.exist");
	}

	clickThreeDotMenuInFileElement() {
		cy.get(RoomBoards.#threeDotMenuSelector).click();
	}

	downloadFileIcon() {
		cy.get(RoomBoards.#downloadFileIconSelector).should("be.visible").click();
	}

	uploadFileInCard(fileName) {
		// attach the file from the fixtures folder
		cy.get(RoomBoards.#inputAttachFile).attachFile(fileName);
		// intercept the file upload API call and wait for the API request to complete
		cy.wait("@fileUploadRequest").then((interception) => {
			// ensure the API request was successful
			expect(interception.response.statusCode).to.eq(201);
		});
	}

	clickOutsideToSaveCard() {
		// click outside the card to save it
		cy.get(RoomBoards.#mainContentSelector).click();
	}

	enterCaption(captionText) {
		// select the parent element with the given classes
		cy.get(RoomBoards.#parentContainerSelector)
			// find the input field within that parent
			.find(RoomBoards.#fileCaptionInputSelector)
			.click();
		// select the same parent again
		cy.get(RoomBoards.#parentContainerSelector)
			// find the input field again
			.find(RoomBoards.#fileCaptionInputSelector)
			// type the caption text
			.type(captionText);
		//click outside the card to save the caption
		cy.get(RoomBoards.#mainContentSelector).click();
	}

	verifyPdfUploaded() {
		cy.get(RoomBoards.#uploadedFileTiltleInCard).should("be.visible");
	}

	clickOnImageThumbnailInCard() {
		cy.get(RoomBoards.#thumbnailImageOnCard).click();
		cy.wait(500);
	}

	clickDownloadIconOnFullScreenImage() {
		cy.get(RoomBoards.#downloadButtonOnFullImage).click();
	}

	clickCloseButtonOnFullScreenImage() {
		cy.get(RoomBoards.#closeButtonSelectorOnFullImage).click();
	}

	uncheckLinkValidForSameSchool() {
		cy.get(RoomBoards.#sameSchoolCheckbox).click();
		cy.get(RoomBoards.#sameSchoolCheckbox)
			.find(RoomBoards.#checkBoxCopyShareBoardModal)
			.should("not.be.checked");
	}

	verifyShareImportBoardAlert() {
		cy.wait(500);
		cy.get(RoomBoards.#shareImportAlert).should("be.visible");
	}

	verifySharedBoardResultUrlTextBox() {
		cy.get(RoomBoards.#sharedBoardResultUrlTextBox).should("be.visible");
	}

	verifyShareModalTitle() {
		cy.get(RoomBoards.#shareModalTitle).should("be.visible");
	}

	verifyShareInformationBox() {
		cy.get(RoomBoards.#shareInformationBox).should("be.visible");
	}

	verifyCancelButtonInShareModal() {
		cy.get(RoomBoards.#cancelButtonInShareModal).should("be.visible");
	}

	verifyImportSharedBoardModal() {
		cy.get(RoomBoards.#shareSettingsDialog).should("be.visible");
	}

	selectRoomForImport() {
		// Go to parent element
		cy.get(RoomBoards.#shareSettingsDialog)
			// Locate the selection input of the room name
			.find(RoomBoards.#roomSelectionBoxModal)
			// Navigate to the room name as a first option and press enter
			.type("{downarrow}{enter}");
	}

	clickContinueOnImportModal() {
		cy.get(RoomBoards.#continueButtonInImportModal).click();
	}

	enterNewBoardNameForImport(roomNameTarget) {
		cy.get(RoomBoards.#boardNameInput).clear().type(roomNameTarget);
	}

	clickImportOnModal() {
		cy.get(RoomBoards.#importButton).click();
	}

	seeShareSettingsDialog() {
		cy.get(RoomBoards.#shareSettingsDialog).should("be.visible");
	}

	verifySameSchoolLinkCheckboxChecked() {
		cy.get(RoomBoards.#sameSchoolCheckbox)
			// Move to the parent container holding the checkbox
			.parent()
			.find(RoomBoards.#checkBoxCopyShareBoardModal)
			.should("be.checked");
	}

	verify21DaysLinkCheckboxChecked() {
		cy.get(RoomBoards.#days21Checkbox)
			// Move to the parent container holding the checkbox
			.parent()
			.find(RoomBoards.#checkBoxCopyShareBoardModal)
			.should("be.checked");
	}

	clickContinueButtonInShareSettingsDialog() {
		cy.get(RoomBoards.#continueButton).click();
	}

	verifyShareViaModal() {
		cy.get(RoomBoards.#shareSettingsDialog).should("be.visible");
	}

	verifyShareViaEmailOption() {
		cy.get(RoomBoards.#shareEmailOption).should("be.visible");
	}

	verifyCopyLinkOption() {
		cy.get(RoomBoards.#copyLinkOption).should("be.visible");
	}

	verifyScanQRCodeOption() {
		cy.get(RoomBoards.#scanQRCodeOption).should("be.visible");
	}

	copyBoardURLInModal() {
		cy.get(RoomBoards.#urlInputBoxCopyBoard)
			.parent()
			.find('input[type="text"]')
			.should("be.visible")
			.invoke("val")
			.then((boardUrl) => {
				expect(boardUrl).to.be.a("string").and.not.be.empty;
				cy.wrap(boardUrl).as("copiedURL");
				cy.window().then((win) => {
					cy.stub(win.navigator.clipboard, "writeText")
						.as("writeTextStub")
						.resolves();
				});
				cy.get(RoomBoards.#copyLinkOption).click();
				cy.get("@writeTextStub").should("be.calledOnce");
				cy.get("@writeTextStub").should("be.calledWith", boardUrl);
			});
	}

	openSharedBoardURL() {
		cy.get("@copiedURL").then((boardUrl) => {
			cy.visit(boardUrl);
			// Wait for 500 msec for any JavaScript actions to complete
			cy.wait(500);
		});
	}

	clickOnThreeDotInCard() {
		cy.get(RoomBoards.#threeDotButtonInCard)
			//Three dot has same data-testid and needs to be located inside the parent element
			.find(RoomBoards.#globalCommonThreeDotButton)
			.click();
		cy.get(RoomBoards.#editOptionInCardThreeDot).should("be.visible");
	}

	clickEditOptionInCardThreeDot() {
		cy.get(RoomBoards.#editOptionInCardThreeDot).click();
	}

	clickThreeDotMenuInVideoConferenceElement() {
		cy.get(RoomBoards.#videoConferenceElement)
			//Three dot has same data-testid and needs to be located inside the parent element
			.find(RoomBoards.#globalCommonThreeDotButton)
			.click();
	}

	clickDeleteOptionInThreeDotMenu() {
		cy.get(RoomBoards.#deleteOptionOnCardElementThreeDot).click();
	}

	verifyDeleteConfirmationDialogVisible() {
		cy.get(RoomBoards.#deleteConfirmationDialogForVideoConferenceElement).should(
			"be.visible"
		);
	}

	clickDeleteButtonInConfirmationDialog() {
		cy.get(RoomBoards.#deleteButtonOnVideoConferenceElementDialog).click();
	}

	verifyVideoConferenceElementNotVisible() {
		cy.get(RoomBoards.#videoConferenceElement).should("not.exist");
	}

	clickCancelButtonInVideoConferenceCreationModal() {
		cy.get(RoomBoards.#cancelButtonInVideoConferenceModal).click();
	}

	verifyModeratorApprovalCheckboxCheckedInBBBModal() {
		cy.get(RoomBoards.#moderatorApprovalCheckbox)
			// Find the checkbox inside the parent options
			.find(RoomBoards.#checkBoxCopyShareBoardModal)
			.should("be.checked");
	}

	seeElementSelectionDialog() {
		cy.get(RoomBoards.#elementSelectionDialog).should("be.visible");
	}

	clickCloseButtonOnElementSelectionDialog() {
		cy.get(RoomBoards.#closeDialogButton).click();
	}

	doNotSeeElementSelectionDialog() {
		cy.get(RoomBoards.#elementSelectionDialog).should("not.exist");
	}

	enterVideoConferenceTitle(videoConferenceTitle) {
		cy.get(RoomBoards.#videoConferenceTitleInput).clear().type(videoConferenceTitle);
	}

	clickSaveButtonOrPressEnterToSaveVideoConferenceTitle() {
		cy.get(RoomBoards.#saveButton).click();
	}

	verifyVideoConferenceElementAddedInCard() {
		cy.get(RoomBoards.#videoConferenceElement).should("be.visible");
	}

	clickVideoConferenceElementInCard() {
		cy.get(RoomBoards.#videoConferenceElement).click();
	}

	seeVideoConferenceStartDaialog() {
		cy.get(RoomBoards.#videoConferenceModal).should("be.visible");
	}

	seeCreateButtonInVideoConferenceDialog() {
		cy.get(RoomBoards.#createVideoConferenceButton).should("be.visible");
	}

	verifyMultiColumnCopiedOrSharedBoardTileVisibleOnRoomDetailsPage() {
		cy.get(RoomBoards.#multiColumnCopiedBoardSelector).should("be.visible");
	}

	verifySingleColumnCopiedBoardTileVisibleOnRoomDetailsPage() {
		cy.get(RoomBoards.#singleColumnCopiedBoardSelector).should("be.visible");
	}

	clickSingleColumnBoardInRoomDetailPage() {
		cy.get(RoomBoards.#singleColumnBoardSelector).click();
	}

	clickMenuPublish() {
		cy.get(RoomBoards.#publishMenuSelector).click();
	}

	verifyDraftChipNotVisible() {
		cy.get(RoomBoards.#chipDraftSelector).should("not.exist");
	}

	clickMultiColumnBoardInRoomDetailPage() {
		cy.get(RoomBoards.#multiColumnBoardSelector).click();
	}

	clickOptionCopy() {
		cy.get(RoomBoards.#copyOptionSelector).click();
	}

	verifyChipDraftVisible() {
		cy.get(RoomBoards.#chipDraftSelector).should("be.visible");
	}

	clickOnBreadcrumbToNavigateToRoomDetail() {
		cy.get(RoomBoards.#breadcrumbToRoomNavigationFromBoard).click();
	}

	clearAndType(selector, newTitle) {
		cy.get(selector)
			.first()
			.then((element) => {
				const currentTitle = element.val();
				if (currentTitle) {
					cy.wrap(element).type("{backspace}".repeat(currentTitle.length));
				}
				cy.wrap(element).type(newTitle);
			});
	}
	seeColumnBoardDialogBox() {
		cy.get(RoomBoards.#boardLayoutDialogTitle).should("be.visible");
	}
	clickOnButtonToAddMultiColumnBoard() {
		cy.get(RoomBoards.#dialogAddMultiColumnBoard).click();
	}
	clickOnButtonToAddSingleColumnBoard() {
		cy.get(RoomBoards.#dialogAddSingleColumnBoard).click();
	}
	seeNewRoomBoardCreatePage() {
		cy.url().should("include", "/board");
	}
	doNotSeeNewRoomBoardCreatePage() {
		cy.url().should("not.include", "/board");
	}
	enterRoomBoardTitle(boardTitle) {
		cy.get(RoomBoards.#roomBoardTitleOnPage).within(() => {
			this.clearAndType("input", boardTitle);
			// Press Esc after typing, it works this way to save the title in a stable way.
			cy.get("input").type("{esc}");
			cy.wait(1000);
		});
	}

	seeUpdatedRoomBoardTitle(boardTitle) {
		cy.get(RoomBoards.#roomBoardTitleOnPage)
			.find("input")
			.should("have.value", boardTitle);
	}
	clickOutsideTheTitleToSaveTheModifiedTitle() {
		cy.get(RoomBoards.#mainPageArea).click("bottom");
	}
	clickOnDeleteInBoardMenu() {
		cy.get(RoomBoards.#boardMenuActionDelete).click();
	}
	seeBoardOnRoomDetailPage(boardName) {
		cy.contains(boardName).should("exist");
	}
	doNotSeeBoardOnRoomDetailPage(boardName) {
		cy.contains(boardName).should("not.exist");
	}
	seeBtnDialogCancel() {
		cy.get(RoomBoards.#btnDialogCancel).should("be.visible");
	}
	clickOnBtnDialogCancel() {
		cy.get(RoomBoards.#btnDialogCancel).click();
	}
	seeBtnDialogConfirmDelete() {
		cy.get(RoomBoards.#btnDialogConfirm).should("be.visible");
	}
	clickBtnDialogConfirmDelete() {
		cy.get(RoomBoards.#btnDialogConfirm).click();
	}
	clickOnThreeDotMenuInRoomBoardTitle() {
		cy.get(RoomBoards.#boardMenuIcon).click();
	}
	clickOnEditInBoardMenu() {
		cy.get(RoomBoards.#btnBoardMenuActionRename).click();
	}
}

export default RoomBoards;
