"use strict";

class RoomBoards {
	static #btnDialogCancel = '[data-testid="dialog-cancel"]';
	static #btnDialogConfirm = '[data-testid="dialog-confirm"]';
	static #boardMenuActionDelete = '[data-testid="kebab-menu-action-delete"]';
	static #mainPageArea = '[id="main-content"]';
	static #roomBoardTitleOnPage = '[data-testid="board-title"]';
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
	static #multiColumnBoardTileSelector = '[data-testid="board-tile-title-0"]';
	static #singleColumnBoardTileSelector = '[data-testid="board-tile-title-1"]';
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
	static #globalCommonThreeDotInCardElement = '[data-testid="board-menu-icon"]';
	static #threeDotInBoardTitle = '[data-testid="board-menu-btn"]';
	static #deleteOptionOnCardElementThreeDot = '[data-testid="kebab-menu-action-delete"]';
	static #deleteConfirmationDialogForVideoConferenceElement =
		'[data-testid="dialog-title"]';
	static #deleteButtonOnDeletionDialog = '[data-testid="dialog-confirm"]';
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
	static #downloadFileIconSelector =
		'[data-testid="board-file-element-edit-menu-download"]';
	static #fileElementSelector = '[data-testid="board-file-element"]';
	static #folderElementSelector = '[data-testid="board-folder-element"]';
	static #folderPageTitle = '[data-testid="folder-title"]';
	static #threeDotMenuSelector = '[data-testid="element-menu-button-0-0-1"]';
	static #mainContentSelector = "#main-content";
	static #fileCaptionInputSelector = '[data-testid="file-caption-input"]';
	static #parentContainerSelector = ".d-flex.flex-column";
	static #fileAltTextInputSelector = '[data-testid="file-alttext-input"]';
	static #downloadButtonOnFullImage = '[data-testid="light-box-download-btn"]';
	static #closeButtonSelectorOnFullImage = '[data-testid="light-box-close-btn"]';
	static #thumbnailImageOnCard = '[data-testid="image-thumbnail-in-card"]';
	static #H5PElementSelector = '[data-testid="board-hp5-element"]';
	static #folderDetails = '[data-testid="file-statistic"]';
	static #ThreeDotButtonH5P = '[data-testid="kebab-menu-action"]';
	static #H5PPage = '[data-testid="skip-link"]';
	// Img tag is assigned as it's down in the DOM by vuetify
	static #fullScreenImageElement = "img";
	static #lightBoxParentElementImagePreview = '[data-testid="light-box"]';
	static #videoPreviewOnCard = '[data-testid="video-thumbnail-in-card"]';
	static #videoPlayer = '[data-testid="video-player"]';
	static #audioPreviewOnCard = '[data-testid="audio-thumbnail-in-card"]';
	static #inputTextFieldCard = '[data-testid="rich-text-edit-0-0"]';
	static #cardContentText = '[data-testid="rich-text-display-0-0"]';
	// Tricky to be assigned data-testid here in the ckeditor inline toolbar
	static #inlineCkToolbar = ".ck-balloon-panel";
	static #elementEtherpadInBoard = '[data-testid="collaborative-text-editor-element"]';
	static #threeDotOnEtherpad = '[data-testid="element-menu-button-0-0-1"]';
	static #parentClassEtherpadThreeDot = ".three-dot-menu";
	static #folderPageMessageEmptyFolder = '[data-testid="empty-state"]';
	static #addFileButton = '[data-testid="fab-add-files"]';
	static #uploadProgressMessage = '[data-testid="upload-progress"]';
	static #dataTable = '[data-testid="data-table"]';
	static #titleOnCardElement = '[data-testid="content-element-title-slot"]';
	static #linkInputField = '[data-testid="input-link"]';
	static #linkElementOnCard = '[data-testid="board-link-element"]';
	static #linkSaveButton = '[data-testid="save-link-in-card"]';
	static #multiActionMenuInHeader = '[data-testid="multi-action-menu"]';
	static #renameInputInDialog = '[data-testid="rename-dialog-input"]';
	static #folderTitleInCardInput = '[data-testid="folder-title-text-field-in-card"]';
	static #approveFolderNameBtnInCard = '[data-testid="save-folder-title-in-card"]';
	static #lightBoxImagePreview = '[data-testid="image-preview"]';

	enterLinkInLinkElement(linkName) {
		cy.get(RoomBoards.#linkInputField).type(linkName);
	}

	clickSaveButtonToSaveLinkInCard() {
		cy.get(RoomBoards.#linkSaveButton).click();
	}

	verifyLinkElementClickableInRoomBoard() {
		cy.get(RoomBoards.#linkElementOnCard).should("be.visible");
	}

	clickOnThreeDotOnLinkElement() {
		cy.get(RoomBoards.#parentClassEtherpadThreeDot)
			.find(RoomBoards.#globalCommonThreeDotInCardElement)
			.click();
	}

	verifyLinkElementIsNotVisible() {
		cy.get(RoomBoards.#linkElementOnCard).should("not.exist");
	}

	seeLinkElementInRoomBoard() {
		cy.get(RoomBoards.#titleOnCardElement).should("be.visible");
	}

	verifyEtherpadIsVisibleOnCard() {
		cy.get(RoomBoards.#elementEtherpadInBoard).should("exist");
		cy.get(RoomBoards.#titleOnCardElement).should("exist");
	}

	verifyEtherpadIsClickableInBoard() {
		cy.get(RoomBoards.#elementEtherpadInBoard).should("exist");

		cy.window().then((win) => {
			cy.stub(win, "open").as("clickStub");
		});

		cy.get(RoomBoards.#elementEtherpadInBoard).click();

		cy.get("@clickStub").should("have.been.calledOnce");
	}

	seeH5PElementInRoomBoard(title) {
		cy.get(RoomBoards.#H5PElementSelector).should("exist").should("contain", title);
	}

	verifyH5PElementIsNotVisible() {
		cy.get(RoomBoards.#H5PElementSelector).should("not.exist");
	}

	clickOnThreeDotOnEtherpad() {
		cy.get(RoomBoards.#parentClassEtherpadThreeDot)
			.find(RoomBoards.#threeDotOnEtherpad)
			.click();
	}

	verifyEtherpadIsNotVisibleOnCard() {
		cy.get(RoomBoards.#elementEtherpadInBoard).should("not.exist");
		cy.get(RoomBoards.#titleOnCardElement).should("not.exist");
	}

	setAndCheckCKEditorContent($editor, text) {
		const editorInstance = $editor[0]?.ckeditorInstance;
		if (!editorInstance) {
			throw new Error("CKEditor instance not found.");
		}
		editorInstance.setData(text);
	}

	removeTextFromTextElement() {
		// Ensure CKEditor is available before proceeding the test
		cy.wait(500);
		cy.get(RoomBoards.#inputTextFieldCard, { timeout: 10000 }).should("be.visible");

		cy.get(RoomBoards.#inputTextFieldCard).then(($editor) => {
			this.setAndCheckCKEditorContent($editor, "");
		});
	}

	verifyTextElementNotInCard() {
		cy.wait(500);
		cy.get(RoomBoards.#cardContentText).should("not.exist");
	}

	enterTextInTextElement(text) {
		// CKEditor to be available before proceeding the test
		cy.get(RoomBoards.#inputTextFieldCard, { timeout: 10000 })
			.click("bottomRight")
			.should("be.visible");

		// Assert that the CKEditor toolbar becomes visible
		cy.get(RoomBoards.#inlineCkToolbar).should("exist").and("be.visible");

		cy.get(RoomBoards.#inputTextFieldCard).then(($editor) => {
			this.setAndCheckCKEditorContent($editor, text);
		});
	}

	verifyTextInCard(text) {
		cy.get(RoomBoards.#cardContentText).should("contain.text", text);
	}

	reEnterTextInTextElement(text) {
		// CKEditor to be available before further proceeding the test
		cy.wait(500);
		cy.get(RoomBoards.#inputTextFieldCard, { timeout: 10000 }).should("be.visible");

		cy.get(RoomBoards.#inputTextFieldCard).then(($editor) => {
			this.setAndCheckCKEditorContent($editor, text);
		});
	}

	verifyVideoFileInCard() {
		cy.get(RoomBoards.#videoPreviewOnCard).should("exist");
	}

	verifyAudioFileInCard() {
		cy.get(RoomBoards.#audioPreviewOnCard).should("exist");
	}

	verifyImageFileUploadedAsThumbnail() {
		cy.get(RoomBoards.#thumbnailImageOnCard).should("exist");
	}

	verifyImageInLightbox() {
		cy.get(RoomBoards.#lightBoxParentElementImagePreview)
			.find(RoomBoards.#fullScreenImageElement)
			.should("be.visible")
			.and(($fullScreen) => {
				// Ensure the image has loaded properly in fullscreen
				expect($fullScreen[0].naturalWidth).to.be.greaterThan(0);
			});

		// Verify close button is also visible on the fullscreen image
		cy.get(RoomBoards.#downloadButtonOnFullImage).should("exist");

		// Verify download button is also visible on the fullscreen image
		cy.get(RoomBoards.#closeButtonSelectorOnFullImage).should("exist");
	}

	verifyAudioPlayer() {
		cy.get(RoomBoards.#audioPreviewOnCard).should("exist");
	}

	verifyVideoPlayer() {
		cy.get(RoomBoards.#videoPlayer).should("exist");
	}

	enterImageAltTextInCard(altText) {
		// Select the parent class
		cy.get(RoomBoards.#parentContainerSelector)
			// Find the input field element within the parent class
			.find(RoomBoards.#fileAltTextInputSelector)
			.click()
			.type(altText);
	}

	verifyDocxFileUploaded() {
		cy.get(RoomBoards.#titleOnCardElement).should("be.visible");
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
		// Attach the file from the fixtures folder
		cy.get(RoomBoards.#inputAttachFile).attachFile(fileName);
		// Intercept the file upload API call and wait for the API request to be successfully completed
		cy.wait("@fileUploadRequest_api").then((interception) => {
			expect(interception.response.statusCode).to.eq(201);
		});
	}

	uploadFileInFolder(fileName) {
		// Attach the file from the fixtures folder
		cy.get(RoomBoards.#inputAttachFile).attachFile(fileName);
		// Intercept the file upload API call and wait for the API request to be successfully completed
		cy.wait("@fileUploadRequest_api").then((interception) => {
			expect(interception.response.statusCode).to.eq(201);
		});
	}

	uploadMultipleFilesInFolder(uploadFiles) {
		const files = uploadFiles
			.replace(/[\[\]"]/g, "")
			.split(", ")
			.map((opt) => opt.trim());
		files.forEach((file) => {
			// Attach the file from the fixtures folder
			cy.get(RoomBoards.#inputAttachFile).attachFile(file);
		});
		// Intercept the file upload API call and wait for the API request to be successfully completed
		cy.wait("@fileUploadRequest_api").then((interception) => {
			expect(interception.response.statusCode).to.eq(201);
		});
	}

	clickOutsideToSaveCard() {
		cy.get(RoomBoards.#mainContentSelector).click();
	}

	enterCaption(captionText) {
		// Select the parent class
		cy.get(RoomBoards.#parentContainerSelector)
			// Find the input field element within the parent class
			.find(RoomBoards.#fileCaptionInputSelector)
			.click()
			.type(captionText);
	}

	verifyPdfUploaded() {
		cy.get(RoomBoards.#titleOnCardElement).should("be.visible");
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

	seeZipFileWithDatePrefixIsSavedInDownloads(fileName) {
		const today = new Date();
		const yyyy = today.getFullYear();
		let mm = today.getMonth() + 1;
		let dd = today.getDate();
		if (dd < 10) dd = "0" + dd;
		if (mm < 10) mm = "0" + mm;
		let zipFileName = yyyy + mm + dd + "_" + fileName + ".zip";
		cy.readFile(`cypress/downloads/${zipFileName}`, "binary", {
			timeout: 15000,
		}).should((buffer) => expect(buffer.length).to.be.gt(100));
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
					cy.stub(win.navigator.clipboard, "writeText").as("writeTextStub").resolves();
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
			// Three dot has same data-testid and needs to be located inside the parent element
			.find(RoomBoards.#globalCommonThreeDotInCardElement)
			.click();
		cy.get(RoomBoards.#editOptionInCardThreeDot).should("be.visible");
	}

	clickEditOptionInCardThreeDot() {
		cy.get(RoomBoards.#editOptionInCardThreeDot).click();
	}

	clickThreeDotMenuInVideoConferenceElement() {
		cy.get(RoomBoards.#videoConferenceElement)
			// Three dot has same data-testid and needs to be located inside the parent element
			.find(RoomBoards.#globalCommonThreeDotInCardElement)
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
		cy.get(RoomBoards.#deleteButtonOnDeletionDialog).click();
		// Refresh the page to let the UI re-render properly in case of some external tools like Etherpad.
		cy.reload();
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

	verifyMultiColumnBoardTileVisibleOnRoomDetailsPage() {
		cy.get(RoomBoards.#multiColumnBoardTileSelector).should("be.visible");
	}

	verifySingleColumnBoardTileVisibleOnRoomDetailsPage() {
		cy.get(RoomBoards.#singleColumnBoardTileSelector).should("be.visible");
	}

	verifySingleColumnBoardTileNotVisibleOnRoomDetailsPage() {
		cy.get(RoomBoards.#singleColumnBoardTileSelector).should("not.exist");
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
			this.clearAndType("textarea", boardTitle);
			cy.wait(1000);
		});
	}

	seeUpdatedRoomBoardTitle(boardTitle) {
		cy.get(RoomBoards.#roomBoardTitleOnPage).should("include.text", boardTitle);
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
		cy.get(RoomBoards.#threeDotInBoardTitle).click();
	}
	clickOnEditInBoardMenu() {
		cy.get(RoomBoards.#btnBoardMenuActionRename).click();
	}

	seeFolderElementWithTitle(title) {
		cy.get(RoomBoards.#folderElementSelector).should("exist").should("contain", title);
	}

	seeFolderElementWithSizeAndNumberOfFiles(folderDetails) {
		cy.get(RoomBoards.#folderDetails).should("contain.text", folderDetails);
	}

	seeFolderElementWithSizeAndNumberOfFiles(folderDetails) {
		cy.get(RoomBoards.#folderDetails).should("contain.text", folderDetails);
	}

	clickFolderElementWithTitle(title) {
		cy.get(RoomBoards.#folderElementSelector).should("contain", title).click();
	}

	seeFolderPageWithTitle(title) {
		cy.get(RoomBoards.#folderPageTitle).should("contain", title);
	}

	seeMessageEmptyFolder() {
		cy.get(RoomBoards.#folderPageMessageEmptyFolder).should("exist");
	}

	seeBtnAddFile() {
		cy.get(RoomBoards.#addFileButton).should("exist");
	}

	seeFileInFolderList(fileName, fileSize) {
		//cy.get(`[data-testid="filename-${fileName}"]`).should("contain", fileSize); data-testid not yet implemented
		cy.get(`[data-testid="size-${fileName}"]`).should("contain", fileSize);
	}

	seeMultipleFilesInFolderList(uploadedFiles) {
		const files = uploadedFiles
			.replace(/[\[\]"]/g, "")
			.split(", ")
			.map((opt) => opt.trim());
		files.forEach((file) => {
			cy.get(`[data-testid="size-${file}"]`).should("exist");
		});
	}

	doNotSeeMultipleFilesInFolderList(filesToCheck) {
		const files = filesToCheck
			.replace(/[\[\]"]/g, "")
			.split(", ")
			.map((opt) => opt.trim());
		files.forEach((file) => {
			cy.get(`[data-testid="size-${file}"]`).should("not.exist");
		});
	}

	seeFileCreationDateToday(fileName) {
		const today = new Date();
		let displayedDate = today.toLocaleString("de-DE", {
			year: "2-digit",
			day: "2-digit",
			month: "2-digit",
		});
		cy.get(`[data-testid="created-at-${fileName}"]`).should("contain", displayedDate);
	}

	seeFileProgressMessage() {
		cy.get(RoomBoards.#uploadProgressMessage).should("exist");
	}

	seeHeaderLinksToChangeOrder(headerOrderlabels) {
		// this line done following things:
		// - first remove brackets and quotes if passed
		// - second split into an array based on ", "
		// - and in the last trim spaces
		const headerlabels = headerOrderlabels
			.replace(/[\[\]"]/g, "")
			.split(", ")
			.map((opt) => opt.trim());
		headerlabels.forEach((label) => {
			cy.get(RoomBoards.#dataTable).within((element) => {
				cy.get(element).find("th").contains("span", label).should("contain", label);
			});
		});
	}

	clickOnTableHeaderLink(label) {
		cy.get(RoomBoards.#dataTable).within((element) => {
			cy.get(element).find("th").contains("span", label).should("contain", label).click();
		});
	}

	checkOrderOfFirstTwoElements(firstElement, secondElement) {
		cy.get(RoomBoards.#dataTable)
			.find("tbody tr")
			.then((rows) => {
				cy.wrap(rows[0]).should("contain", firstElement);
				cy.wrap(rows[1]).should("contain", secondElement);
			});
	}

	checkCheckboxOfFile(fileName) {
		cy.get(`[data-testid="select-checkbox-${fileName}"]`).find("div div input").check();
	}

	uncheckCheckboxOfFile(fileName) {
		cy.get(`[data-testid="select-checkbox-${fileName}"]`).find("div div input").uncheck();
	}

	seeFileCheckboxesAreChecked(files) {
		const fileNames = files
			.replace(/[\[\]"]/g, "")
			.split(", ")
			.map((opt) => opt.trim());
		fileNames.forEach((fileName) => {
			cy.get(`[data-testid="select-checkbox-${fileName}"]`)
				.find("div div input")
				.should("be.checked");
		});
	}

	seeFileCheckboxesAreUnchecked(files) {
		const fileNames = files
			.replace(/[\[\]"]/g, "")
			.split(", ")
			.map((opt) => opt.trim());
		fileNames.forEach((fileName) => {
			cy.get(`[data-testid="select-checkbox-${fileName}"]`)
				.find("div div input")
				.should("not.be.checked");
		});
	}

	openThreeDotMenuForFileInFolder(fileName) {
		cy.get(`[data-testid="kebab-menu-${fileName}"]`).click();
	}

	openThreeDotMenuForFolderInCard() {
		cy.get(RoomBoards.#folderElementSelector)
			.find(`[data-testid="board-menu-icon"]`)
			.click();
	}

	openThreeDotMenuForH5PInCard() {
		cy.get(RoomBoards.#H5PElementSelector)
			.find(`[data-testid="board-menu-icon"]`)
			.click();
	}

	checkNumberOfCheckedFilesInFileFolder(expectedNumber) {
		cy.get(RoomBoards.#multiActionMenuInHeader).should("contain", expectedNumber);
	}

	seeModalRenameElement() {
		cy.get(RoomBoards.#renameInputInDialog).should("be.visible");
	}

	enterNewElementNameInDialog(newName) {
		cy.get(RoomBoards.#renameInputInDialog).clear().type(newName);
	}

	clearNewElementNameInDialog() {
		cy.get(RoomBoards.#renameInputInDialog).clear();
	}

	clickOnFileNameInFolder(fileName) {
		cy.get(`[data-testid="name-${fileName}"]`).click();
	}

	enterFolderNameInBoardCard(newName) {
		cy.get(RoomBoards.#folderTitleInCardInput).find("input").eq(0).clear().type(newName);
	}

	approveFolderNameInCard() {
		cy.get(RoomBoards.#approveFolderNameBtnInCard).click();
	}

	clearFolderNameInCard() {
		cy.get(RoomBoards.#folderTitleInCardInput).find("input").eq(0).clear();
	}

	clickOnH5PElement() {

		cy.window().then((win) => {
  		cy.stub(win, 'open').callsFake((url) => {
   		 cy.visit(url);
 		 }).as('windowOpen');
		});
		cy.get(RoomBoards.#H5PElementSelector).click();
		//cy.get(RoomBoards.#H5PElementSelector).invoke("removeAttr", "target").click(); It still opens a new tab

	}

	clickOnEditOptionInH5PThreeDotMenu() {
		cy.window().then((win) => {
  		cy.stub(win, 'open').callsFake((url) => {
   		 cy.visit(url);
 		 }).as('windowOpen');
		});
		cy.get(RoomBoards.#ThreeDotButtonH5P).click();
	}

	seeH5PPage() {
		cy.get(RoomBoards.#H5PPage, { timeout: 2000000 }).should('be.visible');
		cy.get('iframe[class*="h5p-editor-iframe"]')
  .should('exist')
  .and('be.visible');

	}

	goBackToBoardPage() {
		cy.go('back');
	}

	copyFilePathOfImageFile(imageFileName) {
		cy.get(RoomBoards.#lightBoxImagePreview)
			.find("img")
			.invoke("attr", "src")
			.then((fileUrl) => {
				cy.wrap(fileUrl).as("copiedFileURL");
			});
		cy.get("@copiedFileURL").then((imageUrl) => {
			cy.request({
				url: imageUrl,
				encoding: "binary",
			}).then((response) => {
				expect(response.status).to.eq(200);
				expect(response.headers["content-type"]).to.match(/image|webp/i);
			});
		});
	}
}

export default RoomBoards;
