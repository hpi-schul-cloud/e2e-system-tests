"use strict";

class RoomBoards {
	static #btnDialogCancel = '[data-testid="confirm-dialog-cancel"]';
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
	static #elementSelectionCancelButton =
		'[data-testid="element-type-selection-cancel"]';
	static #videoConferenceTitleInput = '[data-testid="video-conference-element-title"]';
	static #videoConferenceElement = '[data-testid="board-video-conference-element"]';
	static #videoConferenceElementCreate =
		'[data-testid="board-video-conference-element-create"]';
	static #videoConferenceModal = '[data-testid="video-conference-config-dialog"]';
	static #createVideoConferenceButton =
		'[data-testid="video-conference-config-dialog-confirm"]';
	static #moderatorApprovalCheckbox =
		'[data-testid="moderator-must-approve-join-requests"]';
	static #cancelButtonInVideoConferenceModal =
		'[data-testid="video-conference-config-dialog-cancel"]';
	static #globalCommonThreeDotInCardElement = '[data-testid="board-menu-icon"]';
	static #threeDotInBoardTitle = '[data-testid="board-menu-btn"]';
	static #threeDotInLinkElement = '[data-testid="board-menu-button"]';
	static #threeDotInUploadFileElement = '[data-testid="board-menu-button"]';
	static #deleteOptionOnCardElementThreeDot =
		'[data-testid="kebab-menu-action-delete"]';
	static #threeDotButtonInCard = '[data-testid="card-menu-btn-0-0"]';
	static #editOptionInCardThreeDot = '[data-testid="kebab-menu-action-edit"]';
	static #importCardDialogTitle = '[data-testid="select-destination-modal-title"]';
	static #importModalTitle = '[data-testid="import-modal-title"]';
	static #editingSettingsDialog = '[data-testid="dialog-edit-settings"]';
	static #sameSchoolCheckbox = '[data-testid="isSchoolInternal"]';
	static #days21Checkbox = '[data-testid="hasExpiryDate"]';
	static #continueButton = '[data-testid="share-dialog-confirm"]';
	static #shareEmailOption = '[data-testid="shareMailAction"]';
	static #copyLinkOption = '[data-testid="copyAction"]';
	static #urlInputBoxCopyBoard = '[data-testid="share-course-result-url"]';
	static #scanQRCodeOption = '[data-testid="qrCodeAction"]';
	static #roomSelectionBoxModal = '[data-testid="import-destination-select"]';
	static #continueButtonInImportModal = '[data-testid="import-dialog-confirm"]';
	static #boardNameInput = '[data-testid="import-dialog-name-input"]';
	static #moveButtonOnMoveDialog = '[data-testid="move-card-dialog-confirm"]';
	static #shareModalTitleOnMovingCard = '[data-testid="move-card-dialog-title"]';
	static #chipEditableForAllSelector = '[data-testid="board-editable-chip"]';
	static #shareInformationBox = '[data-testid="share-options-info-text"]';
	static #cancelButtonInShareModal = '[data-testid="share-dialog-cancel"]';
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
	static #folderTrashPageTitle = '[data-testid="folder-trash-title"]';
	static #trashInfoAlert = '[data-testid="trash-info-alert"]';
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
	static #dialogCreateDocumentTitleInFileFolder =
		'[data-testid="collabora-file-dialog-title"]';
	static #dialogSelectDocumentTypeFileFolder =
		'[data-testid="collabora-file-form-type"]';
	static #dialogFileNameFileFolder = '[data-testid="collabora-file-form-filename"]';
	static #dialogCreateButton = '[data-testid="collabora-file-dialog-confirm"]';
	static #boardContentElementBar = '[data-testid="content-element-bar-board"]';
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
	static #parentClassEtherpadThreeDot = ".three-dot-menu";
	static #folderPageMessageEmptyFolder = '[data-testid="empty-state"]';
	static #addFileButton = '[data-testid="fab-add-files"] .v-btn';
	static #uploadProgressMessage = '[data-testid="upload-progress"]';
	static #dataTable = '[data-testid="data-table"]';
	static #titleOnCardElement = '[data-testid="content-element-title-slot"]';
	static #linkInputField = '[data-testid="input-link"]';
	static #linkElementOnCard = '[data-testid="board-link-element"]';
	static #emptyElementOnCard = '[data-testid="board-empty-element"]';
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
	static #cardDetailViewToolbar = '[id="card-detail-view-toolbar"]';
	static #toolbarViewButton = '[data-testid="toolbar-view-button"]';
	static #closeDetailViewButton = '[data-testid="close-detail-view-button"]';
	static #importSelectRoom = '[data-testid="import-card-select-room"]';
	static #importSelectBoard = '[data-testid="import-card-select-board"]';
	static #importSelectColumn = '[data-testid="import-card-select-column"]';
	static #inputCardTitle = '[data-testid="card-title"]';
	static #moveCardSelectBoard = '[data-testid="move-card-select-board"]';
	static #moveCardSelectRoom = '[data-testid="move-card-select-room"]';
	static #moveCardSelectColumn = '[data-testid="move-card-select-column"]';
	static #confirmButtonOnModal = '[data-testid="rename-folder-dialog-confirm"]';
	static #confirmRenamingFileButtonOnModal =
		'[data-testid="rename-file-dialog-confirm"]';
	static #globalDialogConfirmButton = '[data-testid="import-modal-confirm"]';
	static #confirmDialogConfirm = '[data-testid="confirm-dialog-confirm"]';
	static #importCardDialogConfirm = '[data-testid="import-card-dialog-confirm"]';
	static #globalShareDialogTitle = '[data-testid="share-dialog-title"]';
	static #confirmDialogTitle = '[data-testid="confirm-dialog-title"]';
	static #selectDestinationModalTitle = '[data-testid="import-dialog-title"]';
	static #deleteFileDialogConfirm = '[data-testid="delete-file-dialog-confirm"]';
	static #showTrashBinLink = '[data-testid="trash-link"]';
	static #dialogTitle = '[data-testid="dialog-title"]';
	static #shareDialogTitle = '[data-testid="share-dialog-title"]';
	static #importModalConfirm = '[data-testid="import-dialog-confirm"]';
	static #dialogConfirm = '[data-testid="dialog-confirm"]';
	static #importCardDialog = '[data-testid="import-card-dialog"]';
	static #importDialogTitle = '[data-testid="select-destination-modal-title"]';
	static #trashPageMenuButton = '[data-testid="folder-trash-menu"]';
	static #permanentDeleteDialog = '[data-testid="purge-files-dialog"]';
	static #permanentDeleteFileModalTitle = '[data-testid="purge-files-dialog-title"]';
	static #permanentDeleteWarningCheckbox =
		'[data-testid="purge-files-dialog-checkbox"]';
	static #permanentDeleteConfirmButton = '[data-testid="purge-files-dialog-confirm"]';
	static #importRoomsModalTitle = '[data-testid="import-dialog-title"]';
	static #shareInfoCopyrightDataProtection =
		'[data-testid="share-info-copyright-data-protection"]';
	static #lightboxCard = '[data-testid="board-card--1--1"]';
	static #addContentIntoCardButton = '[data-testid="add-element-btn"]';
	static #openDetailViewButton = '[data-testid="open-detail-view-btn"]';
	static #detailViewToolbar = "#card-detail-view-toolbar";
	static #toolbarEditButton = '[data-testid="toolbar-edit-button"]';
	static #closeElementDetailViewButton = '[data-testid="close-detail-view-button"]';
	static #externalToolsInBoard = '[data-testid^="board-external-tool-element-"]';
	static #alertLinkButton = '[data-testid="alert-link"]';
	static #checkboxImportRoomList = 'input[type="checkbox"]';
	static #listboxRoomsSelection = 'div[role="listbox"]';
	static #importColumnDialog = '[data-testid="import-column-dialog"]';
	static #importColumnSelectRoom = '[data-testid="import-column-select-room"]';
	static #importColumnSelectBoard = '[data-testid="import-column-select-board"]';
	static #importColumnDialogConfirm = '[data-testid="import-column-dialog-confirm"]';

	verifyCardTitleInBoard(cardTitle) {
		cy.get(RoomBoards.#inputCardTitle)
			.filter(":visible")
			.should(($titles) => {
				const cardTitles = [...$titles].map((title) => title.textContent.trim());
				expect(cardTitles).to.include(cardTitle);
			});
	}

	verifyCardTitleNotInBoard(cardTitle) {
		cy.get(RoomBoards.#inputCardTitle)
			.filter(":visible")
			.should(($titles) => {
				const cardTitles = [...$titles].map((title) => title.textContent.trim());
				expect(cardTitles).not.to.include(cardTitle);
			});
	}

	verifyCardInsertedAboveCard(newCardTitle, existingCardTitle) {
		cy.get(RoomBoards.#inputCardTitle)
			// use all visible titles to avoid hidden elements that may be present in the DOM but not visible to the user
			.filter(":visible")
			.should(($titles) => {
				const cardTitles = [...$titles].map((title) => title.textContent.trim());

				expect(cardTitles).to.include(newCardTitle);
				expect(cardTitles).to.include(existingCardTitle);
				// a smaller index means the new card appears above the existing card.
				expect(cardTitles.indexOf(newCardTitle)).to.be.lessThan(
					cardTitles.indexOf(existingCardTitle)
				);
			});
	}

	selectTwoRoomsForBoardImport(roomName1, roomName2) {
		cy.get(
			`${RoomBoards.#dialogTitle}, ${RoomBoards.#selectDestinationModalTitle}`
		).should("exist");
		cy.get(RoomBoards.#roomSelectionBoxModal).click();
		// wait for the listbox to be visible before interacting with it
		cy.get(RoomBoards.#listboxRoomsSelection)
			.should("be.visible")
			.within(() => {
				// select first room
				cy.contains('[role="option"]', roomName1)
					.find(RoomBoards.#checkboxImportRoomList)
					.check({ force: true });
				// select second room
				cy.contains('[role="option"]', roomName2)
					.find(RoomBoards.#checkboxImportRoomList)
					.check({ force: true });
			});
		// close the dropdown
		cy.get(RoomBoards.#selectDestinationModalTitle).click();
	}

	clickAlertMessageLinkButton() {
		cy.get(RoomBoards.#shareImportAlert).within(() => {
			cy.get(RoomBoards.#alertLinkButton).click();
		});
	}

	verifyTargetBoardDetailsPage(boardNameTarget) {
		cy.get(RoomBoards.#roomBoardTitleOnPage)
			.should("be.visible")
			.contains(boardNameTarget);
	}

	clickDetailedViewIconInLinkElement() {
		cy.get(RoomBoards.#openDetailViewButton).click();
	}

	verifyDetailedViewOfLinkElementIsVisible() {
		cy.get(RoomBoards.#detailViewToolbar)
			.should("be.visible")
			.and("contain.text", "Vollansicht");
		cy.get(RoomBoards.#closeElementDetailViewButton).should("be.visible");
	}

	verifyLinkURLInDetailedView(expectedURL) {
		cy.get(RoomBoards.#linkElementOnCard)
			.should("be.visible")
			.and("have.attr", "href", expectedURL);
	}

	verifyLinkURLInEditDetailedView(expectedURL) {
		cy.get(RoomBoards.#linkInputField)
			.filter(":visible")
			.first()
			.find("textarea, input")
			.first()
			.should("have.value", expectedURL);
	}

	clickEditButtonInLinkDetailedView() {
		cy.get(RoomBoards.#toolbarEditButton).should("be.visible").click();
		cy.get(RoomBoards.#linkInputField).should("be.visible");
	}

	clickShowButtonInLinkDetailedView() {
		cy.get(RoomBoards.#toolbarViewButton).should("be.visible").click();
		cy.get(RoomBoards.#linkElementOnCard).should("be.visible");
	}

	clickCloseButtonInLinkDetailedView() {
		cy.get(RoomBoards.#closeElementDetailViewButton).should("be.visible").click();
	}

	clickDetailedViewIconInVideoConferenceElement() {
		cy.get(RoomBoards.#openDetailViewButton).click();
	}

	verifyDetailedViewOfVideoConferenceElementIsVisible() {
		cy.get(RoomBoards.#detailViewToolbar)
			.should("be.visible")
			.and("contain.text", "Vollansicht");
		cy.get(RoomBoards.#closeElementDetailViewButton).should("be.visible");
	}

	verifyVideoConferenceTitleInDetailedView(expectedTitle) {
		cy.get(RoomBoards.#videoConferenceElement)
			.should("be.visible")
			.and("contain.text", expectedTitle);
	}

	verifyVideoConferenceTitleInEditDetailedView(expectedTitle) {
		cy.get(RoomBoards.#videoConferenceTitleInput)
			.filter(":visible")
			.first()
			.find("textarea, input")
			.first()
			.should("have.value", expectedTitle);
	}

	clickEditButtonInVideoConferenceDetailedView() {
		cy.get(RoomBoards.#toolbarEditButton).should("be.visible").click();
		cy.get(RoomBoards.#videoConferenceTitleInput).should("be.visible");
	}

	clickShowButtonInVideoConferenceDetailedView() {
		cy.get(RoomBoards.#toolbarViewButton).should("be.visible").click();
		cy.get(RoomBoards.#videoConferenceElement).should("be.visible");
	}

	clickCloseButtonInVideoConferenceDetailedView() {
		cy.get(RoomBoards.#closeElementDetailViewButton).should("be.visible").click();
	}

	dragBoardFromPositionToPosition(boardTitle, fromPosition, toPosition) {
		const source = `[data-testid="board-grid-item-${fromPosition}"]`;
		const target = `[data-testid="board-grid-item-${toPosition}"]`;

		cy.get(source).should("be.visible").and("contain.text", boardTitle);

		cy.get(source).drag(target, { force: true });
		cy.get(target).click({ force: true });

		cy.get(target).should("contain.text", boardTitle);
		cy.wait(1000);
	}

	verifyBoardAtPosition(boardTitle, position) {
		cy.get(`[data-testid="board-grid-item-${position}"]`)
			.should("be.visible")
			.and("contain.text", boardTitle);
	}

	clickOnConfirmOnModalForDeletion() {
		cy.get(RoomBoards.#deleteFileDialogConfirm).click();
	}

	clickOnImportButtonInImportCardModal() {
		cy.get(RoomBoards.#importCardDialogConfirm).click();
	}

	clickOnConfirmOnModal() {
		cy.get(RoomBoards.#confirmButtonOnModal).click();
	}

	clickOnConfirmRenamingFileInModal() {
		cy.get(RoomBoards.#confirmRenamingFileButtonOnModal).click();
	}

	verifyCardPresentOnTargetBoard(cardTitle) {
		cy.get(RoomBoards.#duplicatedCardPosition).scrollIntoView().should("exist");
		cy.get(RoomBoards.#inputCardTitle).should("contain.text", cardTitle);
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
		cy.wait(500);
		cy.get(RoomBoards.#inputCardTitle)
			.filter(":visible")
			.find("textarea, input")
			.first()
			.clear()
			.type(cardTitle);
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
		cy.get(RoomBoards.#globalDialogConfirmButton)
			.should("be.visible")
			.and("not.be.disabled")
			.click();
	}

	clickShowTrashBinLink() {
		cy.get(RoomBoards.#showTrashBinLink)
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

	clickCancelButton() {
		cy.get('[data-testid="cancel-button"]').click();
	}

	verifyEmptyExternalToolElement() {
		cy.get(RoomBoards.#emptyElementOnCard).should("be.visible");
	}

	verifyEmptyExternalToolElementIsNotVisible() {
		cy.get(RoomBoards.#emptyElementOnCard).should("not.exist");
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

	editLinkInLinkElement(newLinkName) {
		cy.get(RoomBoards.#linkInputField).type(
			"{selectall}{backspace}{selectall}{backspace}"
		);
		cy.get(RoomBoards.#linkInputField).type(newLinkName);
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
		cy.get(RoomBoards.#threeDotInLinkElement)
			.find(RoomBoards.#globalCommonThreeDotInCardElement)
			.click();
	}

	verifyLinkElementIsNotVisible() {
		cy.get(RoomBoards.#linkElementOnCard).should("not.exist");
	}

	seeLinkElementInRoomBoard() {
		cy.get(RoomBoards.#titleOnCardElement).should("be.visible");
	}

	verifyLinkURLInLinkElement(expectedURL) {
		cy.get(RoomBoards.#linkElementOnCard)
			.should("be.visible")
			.and("have.attr", "href", expectedURL);
	}

	verifyEmptyLinkElement() {
		cy.get(RoomBoards.#emptyElementOnCard).should("be.visible");
	}

	verifyEmptyLinkElementIsNotVisible() {
		cy.get(RoomBoards.#emptyElementOnCard).should("not.exist");
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

	verifyEmptyH5PElement() {
		cy.get(RoomBoards.#emptyElementOnCard).should("be.visible");
	}

	verifyEmptyH5PElementIsNotVisible() {
		cy.get(RoomBoards.#emptyElementOnCard).should("not.exist");
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
		cy.wait(500);
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

	clickThreeDotMenuInUploadFileElement() {
		cy.get(RoomBoards.#threeDotInUploadFileElement)
			.find(RoomBoards.#globalCommonThreeDotInCardElement)
			.click();
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
		cy.wait(500);
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

	verifyEmptyFileElement() {
		cy.get(RoomBoards.#emptyElementOnCard).should("be.visible");
	}

	verifyEmptyFileElementIsNotVisible() {
		cy.get(RoomBoards.#emptyElementOnCard).should("not.exist");
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

	clickOnFullscreenIconOfCard() {
		cy.get('[data-testid="open-detail-view-btn"]').first().click();
	}

	seeCardDetailViewLightboxWithTitle(title) {
		cy.get(RoomBoards.#cardDetailViewToolbar)
			.should("be.visible")
			.and("contain.text", title);
	}

	seeEtherpadInLightbox() {
		cy.get(RoomBoards.#cardDetailViewToolbar).should("be.visible");
		cy.get(RoomBoards.#elementEtherpadInBoard).should("be.visible");
	}

	seeFolderInLightbox(folderName) {
		cy.get(RoomBoards.#cardDetailViewToolbar).should("be.visible");
		cy.get(RoomBoards.#folderElementSelector)
			.should("be.visible")
			.and("contain.text", folderName);
	}

	doNotSeeFolderInLightbox(folderName) {
		cy.get(RoomBoards.#cardDetailViewToolbar).should("be.visible");
		cy.contains(RoomBoards.#folderElementSelector, folderName).should("not.exist");
	}

	seeFileInLightbox(fileName) {
		cy.get(RoomBoards.#cardDetailViewToolbar).should("be.visible");
		const ext = fileName.split(".").pop().toLowerCase();
		const videoExts = ["mp4", "webm", "ogg", "mov", "avi"];
		const audioExts = ["mp3", "wav", "aac", "flac"];
		if (videoExts.includes(ext)) {
			cy.get(RoomBoards.#videoPreviewOnCard).should("exist");
		} else if (audioExts.includes(ext)) {
			cy.get(RoomBoards.#audioPreviewOnCard).should("exist");
		} else {
			cy.get(
				`[data-testid="board-file-element"] img[src*="${encodeURIComponent(fileName)}"], [data-testid="board-file-element"] img[src*="${fileName}"]`
			).should("exist");
		}
	}

	uncheckLinkValidForSameSchool() {
		cy.get(RoomBoards.#sameSchoolCheckbox).find('[type="checkbox"]').uncheck();
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
		cy.get("body").then(($body) => {
			if ($body.find(RoomBoards.#shareModalTitleOnMovingCard).length > 0) {
				cy.get(RoomBoards.#shareModalTitleOnMovingCard).should("be.visible");
			} else {
				cy.get(
					`${RoomBoards.#globalShareDialogTitle}:visible, ${RoomBoards.#dialogTitle}:visible, ${RoomBoards.#shareDialogTitle}:visible`
				).should("exist");
			}
		});
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
		cy.get("body").then(($body) => {
			if ($body.find(RoomBoards.#shareInfoCopyrightDataProtection).length > 0) {
				cy.get(RoomBoards.#shareInfoCopyrightDataProtection).should("be.visible");
			}
		});
	}

	verifyCancelButtonInShareModal() {
		cy.get(RoomBoards.#cancelButtonInShareModal).should("be.visible");
	}

	verifyButtonInEditingSettingsModal(buttonText) {
		const button = {
			// close button is named 'cancel' in the data-testid
			Close: "cancel",
			Save: "confirm",
			Cancel: "cancel",
		};
		cy.get(`[data-testid=dialog-edit-settings-${button[buttonText]}]`).should(
			"be.visible"
		);
	}

	seeWarningModalForUnpublishedBoard() {
		cy.get(RoomBoards.#editingSettingsAlert).should("be.visible");
	}

	verifyImportDialog() {
		cy.get(
			`${RoomBoards.#importRoomsModalTitle}, ${RoomBoards.#importDialogTitle}, ${RoomBoards.#importCardDialogTitle}, ${RoomBoards.#importModalTitle}, ${RoomBoards.#importCardDialog}`
		).should("be.visible");
	}

	clickButtonInEditingSettingsModal(buttonText) {
		const button = {
			// close button is named 'cancel' in the data-testid
			Close: "cancel",
			Save: "confirm",
			Cancel: "cancel",
		};
		cy.get(`[data-testid=dialog-edit-settings-${button[buttonText]}]`).click();
	}

	selectRoomForImport() {
		cy.get(
			`${RoomBoards.#dialogTitle}, ${RoomBoards.#selectDestinationModalTitle}`
		).should("exist");
		cy.get(RoomBoards.#roomSelectionBoxModal)
			// navigate to the room name as a first option and press enter
			.type("{downarrow}{enter}");
	}

	clickContinueOnImportModal() {
		cy.get(RoomBoards.#continueButtonInImportModal).click();
	}

	enterNewBoardNameForImport(roomNameTarget) {
		cy.get(RoomBoards.#boardNameInput).clear().type(roomNameTarget);
	}

	clickImportOnModal() {
		cy.get(
			`${RoomBoards.#globalDialogConfirmButton}, ${RoomBoards.#dialogConfirm}, ${RoomBoards.#importModalConfirm}`
		).click();
	}

	clickOnMoveButtonInMoveCardModal() {
		cy.get(RoomBoards.#moveButtonOnMoveDialog).click();
	}

	seeShareSettingsDialog() {
		cy.get(
			`${RoomBoards.#globalShareDialogTitle}:visible, ${RoomBoards.#dialogTitle}:visible, ${RoomBoards.#shareDialogTitle}:visible`
		).should("exist");
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
		cy.get(
			`${RoomBoards.#globalShareDialogTitle}:visible, ${RoomBoards.#dialogTitle}:visible, ${RoomBoards.#shareDialogTitle}:visible`
		).should("exist");
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
				cy.get(element).find("label").contains(label).should("contain", label);
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

	navigateToSharedURL() {
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
		cy.get(RoomBoards.#videoConferenceElementCreate)
			// Three dot has same data-testid and needs to be located inside the parent element
			.find(RoomBoards.#globalCommonThreeDotInCardElement)
			.click();
	}

	clickDeleteOptionInThreeDotMenu() {
		cy.get(RoomBoards.#deleteOptionOnCardElementThreeDot).first().click();
	}

	verifyDeleteConfirmationDialogVisible() {
		cy.get("body").then(($body) => {
			if ($body.find(RoomBoards.#globalShareDialogTitle).length > 0) {
				cy.get(RoomBoards.#globalShareDialogTitle).should("be.visible");
			} else if ($body.find(RoomBoards.#confirmDialogTitle).length > 0) {
				cy.get(RoomBoards.#confirmDialogTitle).should("be.visible");
			} else {
				throw new Error("No confirmation dialog title found.");
			}
		});
	}

	clickDeleteButtonInConfirmationDialog() {
		cy.get("body").then(($body) => {
			if ($body.find(RoomBoards.#globalDialogConfirmButton).length > 0) {
				cy.get(RoomBoards.#globalDialogConfirmButton).click();
			} else if ($body.find(RoomBoards.#confirmDialogConfirm).length > 0) {
				cy.get(RoomBoards.#confirmDialogConfirm)
					.click()
					.then(() => {
						cy.get(RoomBoards.#externalToolsInBoard).should("not.exist");
					});
			} else {
				throw new Error("No confirm button found in dialog.");
			}
		});

		cy.wait(1000);
		// refresh the page to let the UI re-render properly in case of some external tools like etherpad.
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
		cy.get(
			`${RoomBoards.#closeDialogButton}, ${RoomBoards.#elementSelectionCancelButton}`
		).click();
	}

	doNotSeeElementSelectionDialog() {
		cy.get(RoomBoards.#elementSelectionDialog).should("not.exist");
	}

	enterVideoConferenceTitle(videoConferenceTitle) {
		cy.get(RoomBoards.#videoConferenceTitleInput).clear().type(videoConferenceTitle);
	}

	verifyTitleInVideoConferenceElement(expectedTitle) {
		cy.get(RoomBoards.#videoConferenceElement)
			.should("be.visible")
			.and("contain", expectedTitle);
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
		cy.get(RoomBoards.#roomBoardTitleOnPage).should("be.visible");
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
		cy.wait(1000);
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
		cy.get(
			`${RoomBoards.#globalDialogConfirmButton}, ${RoomBoards.#confirmDialogConfirm}`
		).should("be.visible");
	}

	clickBtnDialogConfirmDelete() {
		cy.get("body").then(($body) => {
			if ($body.find(RoomBoards.#globalDialogConfirmButton).length > 0) {
				cy.get(RoomBoards.#globalDialogConfirmButton).click();
			} else if ($body.find(RoomBoards.#confirmDialogConfirm).length > 0) {
				cy.get(RoomBoards.#confirmDialogConfirm).click();
			} else {
				throw new Error("No confirm delete button found in dialog.");
			}
		});
	}

	clickOnThreeDotMenuInRoomBoardTitle() {
		cy.wait(1000);
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

	seeTrashBinPageForFolder(folderName) {
		cy.get(RoomBoards.#folderTrashPageTitle)
			.should("be.visible")
			.and("contain", `Papierkorb: ${folderName}`);
	}

	seeTrashInfoAlert(message) {
		cy.get(RoomBoards.#trashInfoAlert)
			.should("be.visible")
			.and("contain.text", message);
	}

	seeNoDataTable() {
		cy.get(RoomBoards.#dataTable).should("not.exist");
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

	seeFileDateToday(fileName, dataTestId) {
		const today = new Date();
		const day = today.getDate();
		const month = today.getMonth() + 1;
		const year = today.getFullYear();
		const displayedDatePattern = new RegExp(`\\b0?${day}\\.0?${month}\\.${year}\\b`);
		cy.get(`[data-testid="${dataTestId}-${fileName}"]`)
			.invoke("text")
			.should((text) => {
				expect(text.trim()).to.match(displayedDatePattern);
			});
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
		cy.get(RoomBoards.#fileElementSelector).should("contain.text", fileName).click();
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

	verifyPptxFileUploaded() {
		cy.get(RoomBoards.#titleOnCardElement).should("be.visible");
	}

	verifyLightboxInEditMode() {
		cy.get(RoomBoards.#toolbarViewButton).should("be.visible");
	}

	verifyLightboxInViewMode() {
		cy.get(RoomBoards.#toolbarEditButton).should("be.visible");
	}

	verifyEditButtonNotVisibleInLightbox() {
		cy.get(RoomBoards.#cardDetailViewToolbar).should("be.visible");
		cy.get(RoomBoards.#toolbarEditButton).should("not.exist");
	}

	verifyLightboxNotVisible() {
		cy.get(RoomBoards.#cardDetailViewToolbar).should("not.exist");
	}

	clickOnFirstThreeDotInLightboxCard() {
		cy.get('[data-testid="board-card--1--1"]')
			.find(RoomBoards.#globalCommonThreeDotInCardElement)
			.first()
			.click();
	}

	clickEditButtonInHeader() {
		cy.get("body").then(($body) => {
			if ($body.find(RoomBoards.#toolbarEditButton).length > 0) {
				cy.get(RoomBoards.#toolbarEditButton).click();
			}
		});
	}

	clickViewButtonInHeader() {
		cy.get(RoomBoards.#toolbarViewButton).click();
	}

	clickCloseButtonInLightbox() {
		cy.get(RoomBoards.#closeDetailViewButton).click();
	}

	copyCurrentFullscreenCardURL() {
		cy.get(RoomBoards.#cardDetailViewToolbar).should("be.visible");
		cy.url().then((url) => {
			expect(url).to.be.a("string").and.not.be.empty;
			cy.wrap(url).as("copiedFullscreenCardURL");
		});
	}

	openCopiedFullscreenCardURL() {
		cy.get("@copiedFullscreenCardURL").then((url) => {
			expect(url, "copied fullscreen card URL").to.be.a("string").and.not.be.empty;
			cy.visit(url);
		});
	}

	verifyTrashTitleMenuVisible() {
		cy.get(RoomBoards.#trashPageMenuButton).should("be.visible");
	}

	verifyTrashTitleMenuNotVisible() {
		cy.get(RoomBoards.#trashPageMenuButton).should("not.exist");
	}

	clickTrashTitleMenu() {
		cy.get(RoomBoards.#trashPageMenuButton).click();
	}

	verifyPermanentDeleteConfirmationDialog(fileCount) {
		cy.get(RoomBoards.#permanentDeleteDialog).should("be.visible");
		cy.get(RoomBoards.#permanentDeleteFileModalTitle)
			.should("be.visible")
			.and("contain.text", fileCount);
	}

	verifyPermanentDeleteConfirmButtonDisabled() {
		cy.get(RoomBoards.#permanentDeleteConfirmButton).should("be.disabled");
	}

	clickWarningCheckboxInPermanentDeleteDialog() {
		cy.get(RoomBoards.#permanentDeleteWarningCheckbox)
			.find('input[type="checkbox"]')
			.check();
	}

	verifyPermanentDeleteConfirmButtonEnabled() {
		cy.get(RoomBoards.#permanentDeleteConfirmButton).should("not.be.disabled");
	}

	clickConfirmInPermanentDeleteDialog() {
		cy.get(RoomBoards.#permanentDeleteConfirmButton).click();
	}

	clickPlusIconInLightboxToAddContentIntoCard() {
		//cy.get(RoomBoards.#lightboxCard).scrollTo("bottom");
		cy.get(RoomBoards.#lightboxCard)
			.find(RoomBoards.#addContentIntoCardButton)
			.should("exist")
			.click();
	}

	clickColumnMenuBtnAtPosition(index) {
		cy.get(`[data-testid="column-menu-btn-${index}"]`).click();
		cy.wait(1000);
	}

	clickOnColumnThreeDotAction(actionName) {
		cy.get(`[data-testid="kebab-menu-action-${actionName}-column"]`)
			.should("exist")
			.click();
	}

	copyColumnURLInModal() {
		cy.get(RoomBoards.#urlInputBoxCopyBoard)
			.parent()
			.find('input[type="text"]')
			.should("be.visible")
			.invoke("val")
			.then((columnUrl) => {
				expect(columnUrl).to.be.a("string").and.not.be.empty;
				cy.wrap(columnUrl).as("copiedColumnURL");
				cy.window().then((win) => {
					if (!win.navigator.clipboard) {
						win.navigator.clipboard = { writeText: () => Promise.resolve() };
					}
					cy.stub(win.navigator.clipboard, "writeText")
						.as("writeColumnTextStub")
						.resolves();
				});
				cy.get(RoomBoards.#copyLinkOption).click();
				cy.get("@writeColumnTextStub").should("be.calledOnce");
				cy.get("@writeColumnTextStub").should("be.calledWith", columnUrl);
			});
	}

	openSharedColumnURL() {
		cy.get("@copiedColumnURL").then((columnUrl) => {
			expect(columnUrl, "shared column URL").to.be.a("string").and.not.be.empty;
			cy.visit(columnUrl);
			cy.wait(500);
		});
	}

	verifyImportColumnDialogVisible() {
		cy.get(RoomBoards.#importColumnDialog).should("be.visible");
	}

	selectRoomInImportColumnModal(roomName) {
		cy.get(RoomBoards.#importColumnSelectRoom).should("be.visible").click();
		cy.get('div[role="listbox"]')
			.should("be.visible")
			.contains('[role="option"]', roomName)
			.click();
	}

	selectBoardInImportColumnModal(boardTitle) {
		cy.get(RoomBoards.#importColumnSelectBoard).should("be.visible").click();
		cy.get('div[role="listbox"]')
			.should("be.visible")
			.contains('[role="option"]', boardTitle)
			.click();
	}

	clickImportButtonInImportColumnModal() {
		cy.get(RoomBoards.#importColumnDialog)
			.find(RoomBoards.#importColumnDialogConfirm)
			.should("be.visible")
			.and("not.be.disabled")
			.click();
	}
}
export default RoomBoards;
