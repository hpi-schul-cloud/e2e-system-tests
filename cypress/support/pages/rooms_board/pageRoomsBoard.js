"use strict";

class RoomBoards {
	static #btnDialogCancel = '[data-testid="dialog-cancel"]';
	static #btnDialogConfirm = '[data-testid="dialog-confirm"]';
	static #boardMenuActionDelete = '[data-testid="kebab-menu-action-delete"]';
	static #addNewColumnButton = '[data-testid="add-column"]';
	static #mainPageArea = '[id="main-content"]';
	static #roomBoardTitleOnPage = '[data-testid="board-title"]';
	static #btnBoardMenuActionRename = '[data-testid="kebab-menu-action-rename"]';
	static #dialogAddMultiColumnBoard = '[data-testid="dialog-add-multi-column-board"]';
	static #dialogAddSingleColumnBoard = '[data-testid="dialog-add-single-column-board"]';
	static #boardLayoutDialogTitle = '[data-testid="board-layout-dialog-title"]';
	static #breadcrumbToRoomNavigationFromBoard = '[data-testid="breadcrumb-1"]';
	static #multiColumnBoardSelector = '[data-testid="board-open-button-0"]';
	static #copyOptionSelector = '[data-testid="kebab-menu-action-copy"]';
	static #chipDraftSelector = '[data-testid="board-draft-chip"]';
	static #publishMenuSelector = '[data-testid="kebab-menu-action-publish"]';
	static #singleColumnBoardSelector = '[data-testid="board-grid-title-1"]';
	static #multiColumnBoardTileSelector = '[data-testid="board-grid-title-0"]';
	static #singleColumnBoardTileSelector = '[data-testid="board-grid-title-1"]';
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
	static #deleteOptionOnCardElementThreeDot =
		'[data-testid="kebab-menu-action-delete"]';
	static #deleteConfirmationDialogForVideoConferenceElement =
		'[data-testid="dialog-title"]';
	static #deleteButtonOnDeletionDialog = '[data-testid="dialog-confirm"]';
	static #threeDotButtonInCard = '[data-testid="card-menu-btn-0-0"]';
	static #editOptionInCardThreeDot = '[data-testid="kebab-menu-action-edit"]';
	static #shareImportSettingsDialog = '[data-testid="dialog-title"]';
	static #editingSettingsDialog = '[data-testid="dialog-edit-settings"]';
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
	static #chipEditableForAllSelector = '[data-testid="board-editable-chip"]';
	static #shareInformationBox = '[data-testid="share-options-info-text"]';
	static #cancelButtonInShareModal = '[data-testid="dialog-cancel"]';
	static #sharedBoardResultUrlTextBox = '[data-testid="share-course-result-url"]';
	static #shareImportAlert = '[data-testid="alert-text"]';
	static #editingSettingsAlert = '[class="alert-text"]';
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
	static #ThreeDotEditOptionTool = '[data-testid="kebab-menu-action"]';
	static #H5PPage = '[data-testid="skip-link"]';
	static #titleAlert = '[role="alert"]';
	static #fileTitleInCardInput = '[data-testid="file-name-input"]';
	static #createDocumentButtonInFileFolder =
		'[data-testid="fab-button-create-document"]';
	static #dialogCreateDocumentInFileFolder = '[data-testid="collabora-file-dialog"]';
	static #dialogCreateDocumentTitleInFileFolder = '[data-testid="dialog-title"]';
	static #dialogSelectDocumentTypeFileFolder =
		'[data-testid="collabora-file-form-type"]';
	static #dialogFileNameFileFolder = '[data-testid="collabora-file-form-filename"]';
	static #dialogCreateButton = '[data-testid="dialog-confirm"]';
	static #boardFolderDownloadButton =
		'[data-testid="board-folder-element-download-button"]';
	static #boardContentElementBar = '[data-testid="content-element-bar-board"]';
	// Img tag is assigned as it's down in the DOM by vuetify
	static #fullScreenImageElement = "img";
	static #lightBoxParentElementImagePreview = '[data-testid="light-box"]';
	static #videoPreviewOnCard = '[data-testid="video-thumbnail-in-card"]';
	static #videoPlayer = '[data-testid="video-player"]';
	static #audioPreviewOnCard = '[data-testid="audio-thumbnail-in-card"]';
	static #inputTextFieldCard = '[data-testid="rich-text-edit-0-0"]';
	static #cardContentText = '[data-testid="rich-text-display-0-0"]';
	static #cardContentTextForStudent = '[data-testid="rich-text-display-0-1"]';
	// Tricky to be assigned data-testid here in the ckeditor inline toolbar
	static #inlineCkToolbar = ".ck-balloon-panel";
	static #elementEtherpadInBoard = '[data-testid="collaborative-text-editor-element"]';
	static #parentClassEtherpadThreeDot = ".three-dot-menu";
	static #folderPageMessageEmptyFolder = '[data-testid="empty-state"]';
	static #addFileButton = '[data-testid="fab-add-files"] .v-btn';
	static #uploadProgressMessage = '[data-testid="upload-progress"]';
	static #dataTable = '[data-testid="data-table"]';
	static #titleOnCardElement = '[data-testid="content-element-title-slot"]';
	static #linkInputField = '[data-testid="input-link"]';
	static #linkElementOnCard = '[data-testid="board-link-element"]';
	static #linkSaveButton = '[data-testid="save-link-in-card"]';
	static #multiActionMenuInHeader = '[data-testid="multi-action-menu"]';
	static #renameInputInDialog = '[data-testid="rename-dialog-input"]';
	static #folderTitleInCardInput = '[data-testid="folder-title-text-field-in-card"]';
	static #boardTitlePattern = '[data-testid^="board-title-"]';
	static #parameterDisplayNameBettermarks = '[data-testid="parameter-display-name"]';
	static #bettermarksToolDomainUrl =
		'[data-testid="board-external-tool-element-domain"]';
	static #body = "body";
	static #duplicatedCardPosition = '[data-testid="board-card-0-1"]';
	static #firstCardPositionInRoomBoard = '[data-testid="board-card-0-0"]';
	static #secondCardPositionInRoomBoard = '[data-testid="board-card-0-2"]';

	static #importSelectRoom = '[data-testid="import-card-select-room"]';
	static #importSelectBoard = '[data-testid="import-card-select-board"]';
	static #importSelectColumn = '[data-testid="import-card-select-column"]';
	static #importSubmitButton = '[data-testid="dialog-confirm"]';
	static #inputCardTitle = '[data-testid="card-title"]';
	static #moveCardSelectBoard = '[data-testid="move-card-select-board"]';
	static #moveCardSelectRoom = '[data-testid="move-card-select-room"]';
	static #moveCardSelectColumn = '[data-testid="move-card-select-column"]';

	verifyCardPresentOnTargetBoard(cardTitle) {
		cy.get(RoomBoards.#duplicatedCardPosition).dblclick();
		cy.get(RoomBoards.#inputCardTitle)
			.should("be.visible")
			.and("contain.text", cardTitle);
	}

	verifyCardNotPresentOnSourceBoard() {
		cy.get(RoomBoards.#inputCardTitle).should("not.exist");
	}

	selectColumnInMoveCardModal(columnName) {
		cy.get(RoomBoards.#moveCardSelectColumn).should("be.visible").click();
		cy.get('div[role="listbox"]')
			.should("be.visible")
			.contains('[role="option"]', columnName)
			.click();
	}

	selectRoomInMoveCardModal(roomName) {
		cy.get(RoomBoards.#moveCardSelectRoom).should("be.visible").click();
		cy.get('div[role="listbox"]')
			.should("be.visible")
			.contains('[role="option"]', roomName)
			.click();
	}

	selectBoardInMoveCardModal(boardTitle) {
		cy.get(RoomBoards.#moveCardSelectBoard).should("be.visible").click();

		cy.get('div[role="listbox"]')
			.should("be.visible")
			.contains('[role="option"]', boardTitle)
			.click();
	}

	enterCardTitleInBoard(cardTitle) {
		cy.get(RoomBoards.#inputCardTitle).should("be.visible").clear().type(cardTitle);
	}

	selectRoomInImportModal(roomName) {
		cy.get(RoomBoards.#importSelectRoom).should("be.visible").click();

		cy.get('div[role="listbox"]')
			.should("be.visible")
			.contains('[role="option"]', roomName)
			.click();
	}

	selectBoardInImportModal(boardTitle) {
		cy.get(RoomBoards.#importSelectBoard).should("be.visible").click();

		cy.get('div[role="listbox"]')
			.should("be.visible")
			.contains('[role="option"]', boardTitle)
			.click();
	}

	selectColumnInImportModal(columnName) {
		cy.get(RoomBoards.#importSelectColumn).should("be.visible").click();

		cy.get('div[role="listbox"]')
			.should("be.visible")
			.contains('[role="option"]', columnName)
			.click();
	}

	clickImportButtonInModal() {
		cy.get(RoomBoards.#importSubmitButton)
			.should("be.visible")
			.and("not.be.disabled")
			.click();
	}

	copyCardURLInModal() {
		cy.get(RoomBoards.#urlInputBoxCopyBoard)
			.parent()
			.find('input[type="text"]')
			.should("be.visible")
			.invoke("val")
			.then((cardUrl) => {
				expect(cardUrl).to.be.a("string").and.not.be.empty;

				// store for later use in the test
				cy.wrap(cardUrl).as("copiedCardURL");

				// stub clipboard for this window
				cy.window().then((win) => {
					if (!win.navigator.clipboard) {
						// optional: create a fake clipboard if not present
						win.navigator.clipboard = { writeText: () => Promise.resolve() };
					}

					cy.stub(win.navigator.clipboard, "writeText")
						.as("writeCardTextStub")
						.resolves();
				});

				// click on "Copy link" (card share)
				cy.get(RoomBoards.#copyLinkOption).click();

				// assert clipboard was used correctly
				cy.get("@writeCardTextStub").should("be.calledOnce");
				cy.get("@writeCardTextStub").should("be.calledWith", cardUrl);
			});
	}

	openSharedCardURL() {
		cy.get("@copiedCardURL").then((cardUrl) => {
			// basic sanity check so we fail early with a clear message
			expect(cardUrl, "shared card URL").to.be.a("string").and.not.be.empty;

			// if your app returns relative URLs like "/board/abc", cy.visit handles that
			cy.visit(cardUrl);
			cy.wait(500);
		});
	}

	verifyLinkElementInDuplicatedCard() {
		cy.get(RoomBoards.#duplicatedCardPosition)
			.find(RoomBoards.#linkElementOnCard)
			.should("exist");
	}

	verifyEtherpadElementInDuplicatedCard() {
		cy.get(RoomBoards.#duplicatedCardPosition)
			.find(RoomBoards.#elementEtherpadInBoard)
			.should("exist");
	}

	verifyFolderElementInDuplicatedCard() {
		cy.get(RoomBoards.#duplicatedCardPosition)
			.find(RoomBoards.#folderElementSelector)
			.should("exist");
	}

	verifyImageElementInDuplicatedCard() {
		cy.get(RoomBoards.#duplicatedCardPosition)
			.find(RoomBoards.#thumbnailImageOnCard)
			.should("exist");
	}

	verifySecondCardMovedToThirdPosition() {
		cy.get(RoomBoards.#secondCardPositionInRoomBoard).should("exist");
	}

	seeDuplicatedCardBelowOriginal() {
		// assert both cards exist
		cy.get(RoomBoards.#firstCardPositionInRoomBoard).should("exist");
		cy.get(RoomBoards.#duplicatedCardPosition).should("exist");

		// assert DOM order: duplicated card follows the original node in the DOM
		cy.get(RoomBoards.#firstCardPositionInRoomBoard).then(($original) => {
			cy.get(RoomBoards.#duplicatedCardPosition).then(($duplicate) => {
				expect(
					$original[0].compareDocumentPosition($duplicate[0]) &
						Node.DOCUMENT_POSITION_FOLLOWING
				).to.be.greaterThan(
					0,
					"Expected duplicated card to follow the original card in the DOM"
				);
			});
		});

		// scroll the original card into view and assert it's visible
		cy.get(RoomBoards.#firstCardPositionInRoomBoard)
			.scrollIntoView()
			.should("be.visible");

		// scroll the duplicated card into view and assert it's visible
		cy.get(RoomBoards.#duplicatedCardPosition).scrollIntoView().should("be.visible");

		// assert layout position: duplicated card is rendered below the original
		cy.get(RoomBoards.#firstCardPositionInRoomBoard).then(($original) => {
			const originalBottom =
				$original[0].getBoundingClientRect().bottom + window.scrollY;

			cy.get(RoomBoards.#duplicatedCardPosition).then(($duplicate) => {
				const duplicateTop =
					$duplicate[0].getBoundingClientRect().top + window.scrollY;

				expect(duplicateTop).to.be.greaterThan(
					originalBottom,
					"Expected duplicated card to appear visually below the original card"
				);
			});
		});
	}

	clickOnCardThreeDotAction(actionName) {
		cy.get(`[data-testid="kebab-menu-action-${actionName}"]`).should("exist").click();
	}

	clickOutsideBBBDialogBox() {
		cy.get(RoomBoards.#body).click("topLeft");
	}

	verifyBettermarksToolNotInCards() {
		cy.get(RoomBoards.#titleOnCardElement).should("not.exist");
	}

	openThreeDotMenuForExternalTool() {
		cy.get(RoomBoards.#threeDotMenuSelector).click();
	}

	selectBettermarksSettingOption() {
		cy.get(RoomBoards.#ThreeDotEditOptionTool).click();
	}

	enterToolDisplayName(toolName) {
		cy.get(RoomBoards.#parameterDisplayNameBettermarks).clear().type(toolName);
	}

	verifyBettermarksToolAddedInCard(bettermarksTitle, bettermarksDomainUrl) {
		// check bettermarks title
		cy.get(RoomBoards.#titleOnCardElement)
			.should("be.visible")
			.and("contain.text", bettermarksTitle);

		// check bettermarks domain url
		cy.get(RoomBoards.#bettermarksToolDomainUrl)
			.should("be.visible")
			.and("contain.text", bettermarksDomainUrl);
	}

	enterLinkInLinkElement(linkName) {
		cy.get(RoomBoards.#linkInputField).type(linkName);
	}

	clickSaveButtonToSaveLinkInCard() {
		cy.get(RoomBoards.#linkSaveButton).click();
	}

	verifyAddNewColumnButtonInRoomBoard(shouldExist = true) {
		shouldExist
			? cy.get(RoomBoards.#addNewColumnButton).should("be.visible").should("exist")
			: cy.get(RoomBoards.#addNewColumnButton).should("not.exist");
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
			.find(RoomBoards.#threeDotMenuSelector)
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

	verifyTextElementNotInCard() {
		cy.wait(500);
		cy.get(RoomBoards.#cardContentText).should("not.exist");
	}

	verifyTextElementNotInCardForStudent() {
		cy.wait(500);
		cy.get(RoomBoards.#cardContentTextForStudent).should("not.exist");
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

	verifyTextInCardForStudent(text) {
		cy.get(RoomBoards.#cardContentTextForStudent).should("contain.text", text);
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
			.should("be.visible")
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
			.should("be.visible")
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

	verifyOptionInEditingSettingsModal(option) {
		cy.get(`[data-testid=edit-settings-option-${option}]`).should("be.visible");
	}

	verifyOptionIsSelectedInEditingSettingsModal(option) {
		const options = {
			noneditable: "1",
			editable: "2",
		};
		cy.get(`[data-testid=edit-settings-option-${options[option]}]`)
			.find('input[type="radio"]')
			.should("be.checked");
	}

	clickOptionInEditingSettingsModal(option) {
		const options = {
			noneditable: "1",
			editable: "2",
		};
		cy.get(`[data-testid=edit-settings-option-${options[option]}]`)
			.find('input[type="radio"]')
			.check();
	}

	verifyShareInformationBox() {
		cy.get(RoomBoards.#shareInformationBox).should("be.visible");
	}

	verifyCancelButtonInShareModal() {
		cy.get(RoomBoards.#cancelButtonInShareModal).should("be.visible");
	}

	verifyButtonInEditingSettingsModal(buttonText) {
		const button = {
			Close: "cancel",
			Save: "save",
			Cancel: "cancel",
		};
		cy.get(`[data-testid=edit-settings-${button[buttonText]}-btn]`).should(
			"be.visible"
		);
	}

	seeWarningModalForUnpublishedBoard() {
		cy.get(RoomBoards.#editingSettingsAlert).should("be.visible");
	}

	verifyImportDialog() {
		cy.get(RoomBoards.#shareImportSettingsDialog).should("be.visible");
	}

	clickButtonInEditingSettingsModal(buttonText) {
		const button = {
			Close: "cancel",
			Save: "save",
			Cancel: "cancel",
		};
		cy.get(`[data-testid=edit-settings-${button[buttonText]}-btn]`).click();
	}

	selectRoomForImport() {
		cy.get(RoomBoards.#shareImportSettingsDialog).should("exist");
		cy.get(RoomBoards.#roomSelectionBoxModal)
			// navigate to the room name as a first option and press enter
			.type("{downarrow}{enter}");
	}

	seeZipFileWithDatePrefixIsSavedInDownloads(fileName) {
		const today = new Date();
		const yyyy = today.getFullYear();
		const mm = String(today.getMonth() + 1).padStart(2, "0");
		const dd = String(today.getDate()).padStart(2, "0");
		const decodedFileName = decodeURIComponent(fileName);
		const zipFileName = `${yyyy}${mm}${dd}_${decodedFileName}.zip`;
		const prefix = `${yyyy}${mm}${dd}_${decodeURIComponent(fileName)}`;
		cy.readFile(`cypress/downloads/${prefix}.zip`, "binary", {
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
		cy.get(RoomBoards.#shareImportSettingsDialog).should("be.visible");
	}

	seeEditingSettingsDialog() {
		cy.get(RoomBoards.#editingSettingsDialog).should("be.visible");
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
		cy.get(RoomBoards.#shareImportSettingsDialog).should("be.visible");
	}

	verifyShareViaEmailOption() {
		cy.get(RoomBoards.#shareEmailOption).should("be.visible");
	}

	verifyCopyLinkOption() {
		cy.get(RoomBoards.#copyLinkOption).should("be.visible");
	}

	verifyEditingSettingOption(option) {
		cy.get(`[data-testid="kebab-menu-action-${option}"]`).should("be.visible");
	}

	verifyFirstOptionHasDefaultSettingLabel(option, label) {
		cy.get(`[data-testid=edit-settings-option-${option}]`)
			.should("be.visible")
			.within((element) => {
				cy.get(element)
					.find("label")
					.contains("span", label)
					.should("contain", label);
			});
	}

	verifyScanQRCodeOption() {
		cy.get(RoomBoards.#scanQRCodeOption).should("be.visible");
	}

	seeChipEditableForAll() {
		cy.get(RoomBoards.#chipEditableForAllSelector).should("be.visible");
	}

	seeNoChipEditableForAll() {
		cy.get(RoomBoards.#chipEditableForAllSelector).should("not.exist");
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
			// Three dot has same data-testid and needs to be located inside the parent element
			.find(RoomBoards.#globalCommonThreeDotInCardElement)
			.click();
		cy.wait(1000);
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
		cy.get(RoomBoards.#deleteOptionOnCardElementThreeDot).first().click();
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

	doNotSeeVideoConferenceStartDaialog() {
		cy.get(RoomBoards.#videoConferenceModal).should("not.exist");
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

	clickOnBoard(boardName) {
		cy.get(RoomBoards.#boardTitlePattern).each((element) => {
			if (element.text() === boardName) {
				cy.wrap(element).click();
			}
		});
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
		cy.get(RoomBoards.#folderElementSelector)
			.should("exist")
			.should("contain", title);
	}

	seeFolderElementWithSizeAndNumberOfFiles(folderDetails) {
		cy.get(RoomBoards.#folderDetails).should("contain.text", folderDetails);
	}

	seeFolderElementWithSizeAndNumberOfFiles(folderDetails) {
		cy.get(RoomBoards.#folderDetails).should("contain.text", folderDetails);
	}

	clickFolderElementWithTitle(title) {
		cy.contains(RoomBoards.#titleOnCardElement, title)
			.should("be.visible")
			.parents(RoomBoards.#folderElementSelector)
			.find(RoomBoards.#boardContentElementBar)
			.click();
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
			year: "numeric", // 4-digit year
			day: "2-digit",
			month: "2-digit",
		});
		cy.get(`[data-testid="content-modified-at-${fileName}"]`).should(
			"contain",
			displayedDate
		);
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
				cy.get(element)
					.find("th")
					.contains("span", label)
					.should("contain", label);
			});
		});
	}

	clickOnTableHeaderLink(label) {
		cy.get(RoomBoards.#dataTable).within((element) => {
			cy.get(element)
				.find("th")
				.contains("span", label)
				.should("contain", label)
				.click();
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
		cy.get(`[data-testid="select-checkbox-${fileName}"]`)
			.find("div div input")
			.check();
	}

	uncheckCheckboxOfFile(fileName) {
		cy.get(`[data-testid="select-checkbox-${fileName}"]`)
			.find("div div input")
			.uncheck();
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
		cy.get(RoomBoards.#folderTitleInCardInput)
			.find("input")
			.eq(0)
			.clear()
			.type(newName);
	}

	clearFolderNameInCard() {
		cy.get(RoomBoards.#folderTitleInCardInput).find("input").eq(0).clear();
	}

	clickOnH5PElement() {
		cy.window().then((win) => {
			cy.stub(win, "open")
				.callsFake((url) => {
					cy.visit(url);
				})
				.as("windowOpen");
		});
		cy.get(RoomBoards.#H5PElementSelector).click();
		//cy.get(RoomBoards.#H5PElementSelector).invoke("removeAttr", "target").click(); It still opens a new tab
	}

	clickOnEditOptionInH5PThreeDotMenu() {
		cy.window().then((win) => {
			cy.stub(win, "open")
				.callsFake((url) => {
					cy.visit(url);
				})
				.as("windowOpen");
		});
		cy.get(RoomBoards.#ThreeDotEditOptionTool).click();
	}

	seeH5PPage() {
		cy.get(RoomBoards.#H5PPage, { timeout: 2000000 }).should("be.visible");
		cy.get('iframe[class*="h5p-editor-iframe"]').should("exist").and("be.visible");
	}

	copyFilePathOfImageFileFromFolder(fileName) {
		cy.get(`[data-testid="file-preview-${fileName}"]`)
			.find("img")
			.should("be.visible")
			.and(($img) => {
				expect($img).to.have.attr("src").not.empty;
				expect($img[0].naturalWidth).to.be.greaterThan(0);
			})
			.invoke("attr", "src")
			.then((fileUrl) => {
				cy.wrap(fileUrl).as(`copiedFileURL_${fileName}`);
			});
	}

	copyFilePathOfImageFileFromCard(fileName) {
		cy.get(RoomBoards.#thumbnailImageOnCard)
			.find("img")
			.should("be.visible")
			.and(($img) => {
				expect($img).to.have.attr("src").not.empty;
				expect($img[0].naturalWidth).to.be.greaterThan(0);
			})
			.invoke("attr", "src")
			.then((fileUrl) => {
				cy.wrap(fileUrl).as(`copiedFileURL_${fileName}`);
			});
	}

	verifyImageFileRessourceAvailable(fileName) {
		cy.get(`@copiedFileURL_${fileName}`).then((imageUrl) => {
			cy.request({
				url: imageUrl,
				encoding: "binary",
				failOnStatusCode: false,
			}).then((response) => {
				expect(response.status).to.eq(200);
				expect(response.headers["content-type"]).to.match(/image|webp/i);
			});
		});
	}

	verifyImageFileRessourceNotAvailable(fileName) {
		cy.get(`@copiedFileURL_${fileName}`).then((imageUrl) => {
			const check = () => {
				cy.request({
					url: imageUrl,
					encoding: "binary",
					failOnStatusCode: false,
				}).then((response) => {
					if ([403, 404].includes(response.status)) {
						expect(response.status).to.be.oneOf([403, 404]);
					} else {
						cy.wait(500).then(check);
					}
				});
			};

			check();
		});
	}

	clickCollaboraFile(fileName) {
		cy.window().then((win) => {
			cy.stub(win, "open").as("windowOpen");
		});
		cy.get(RoomBoards.#titleOnCardElement).contains(fileName).click();
		cy.get("@windowOpen")
			.should("have.been.called")
			.then((stub) => {
				const url = stub.getCall(0).args[0];
				cy.visit(url); // force Cypress into same tab
				cy.wait(5000);
			});
	}

	verifyXlsxFileUploaded() {
		cy.get(RoomBoards.#titleOnCardElement).should("be.visible");
	}

	verifyNameFieldErrorMessage(errormessage) {
		cy.get(RoomBoards.#folderTitleInCardInput).within(() => {
			cy.get(RoomBoards.#titleAlert)
				.should("be.visible")
				.and("contain.text", errormessage);
		});
	}

	verifyFileFieldErrorMessage(errormessage) {
		cy.get(RoomBoards.#fileTitleInCardInput).within(() => {
			cy.get(RoomBoards.#titleAlert)
				.should("be.visible")
				.and("contain.text", errormessage);
		});
	}

	enterFileNameInBoardCard(newFileName) {
		cy.get(RoomBoards.#fileTitleInCardInput)
			.find("input")
			.type(newFileName, { delay: 10 }) // sometimes the typing is too fast for the input field.
			.blur() // focus out/blur event to save the name
			.invoke("val")
			.then((val) => {
				// remove any extension at the end (e.g: .docx, .pdf, .jpg, etc.) as per the feature behaviour
				const removeExtension = (name) => name.replace(/\.[^/.]+$/, "");
				const actualBaseName = removeExtension(val);
				const expectedBaseName = removeExtension(newFileName);
				expect(actualBaseName).to.eq(expectedBaseName);

				//wait and verify via API response for the name of the file to be updated in the backend as well
				cy.wait("@renameFile").then(({ response }) => {
					expect(response.statusCode).to.eq(200);
					expect(response.body.name).to.eq(newFileName);
				});
			});
	}

	clearFileField(fieldType) {
		const normalizedField = fieldType.trim().toLowerCase();
		cy.get(RoomBoards.#parentContainerSelector)
			.find(`[data-testid="file-${normalizedField}-input"]`)
			.should("exist")
			.find("input, textarea")
			.first()
			.should("be.visible")
			.clear()
			.should("have.value", "");
	}

	clickCollaboraFileInFileFolder(fileName) {
		cy.window().then((win) => {
			cy.stub(win, "open").as("windowOpen");
		});
		cy.get(`[data-testid="name-${fileName}"]`).click();
		cy.get("@windowOpen")
			.should("have.been.called")
			.then((stub) => {
				const url = stub.getCall(0).args[0];
				cy.visit(url); // force Cypress into same tab
				cy.wait(5000);
			});
	}

	clickCreateDocumentButtonInFileFolder() {
		cy.get(RoomBoards.#createDocumentButtonInFileFolder).click();
	}

	seeDialogBoxForCreateDocumentInFileFolder() {
		cy.get(RoomBoards.#dialogCreateDocumentInFileFolder).should("be.visible");
		cy.get(RoomBoards.#dialogCreateDocumentTitleInFileFolder)
			.should("be.visible")
			.should("contain.text", "Dokument erstellen");
	}

	selectDocumentTypeInCreateDocumentFileFolder(documentType) {
		cy.get(RoomBoards.#dialogSelectDocumentTypeFileFolder).click();
		cy.contains(documentType).click();
		cy.get(RoomBoards.#dialogSelectDocumentTypeFileFolder).should(
			"contain.text",
			documentType
		);
	}

	enterFileNameInCreateDocumentDialogFileFolder(fileName) {
		cy.get(RoomBoards.#dialogFileNameFileFolder).find("input").type(fileName);
	}

	clickCreateButtonInDocumentDialogFileFolder() {
		cy.window().then((win) => {
			cy.stub(win, "open").as("windowOpen");
		});
		cy.get(RoomBoards.#dialogCreateButton).click();
		cy.get("@windowOpen")
			.should("have.been.called")
			.then((stub) => {
				const url = stub.getCall(0).args[0];
				cy.visit(url); // force Cypress into same tab in file folder
				cy.wait(5000);
			});
	}

	clickCreateButtonInCreateDocumentDialog() {
		cy.get(RoomBoards.#dialogCreateButton).click();
	}

	clickFolderDownloadButtonOnBoardcard() {
		cy.get(RoomBoards.#folderElementSelector)
			.find(RoomBoards.#boardFolderDownloadButton)
			.click();
	}
}
export default RoomBoards;
