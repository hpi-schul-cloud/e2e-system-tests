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
	static #deleteOptionOnVideoConferenceElementDialog =
		'[data-testid="kebab-menu-action-delete"]';
	static #deleteConfirmationDialogForVideoConferenceElement =
		'[data-testid="dialog-title"]';
	static #deleteButtonOnVideoConferenceElementDialog = '[data-testid="dialog-confirm"]';
	static #ThreeDotButtonInCard = '[data-testid="card-menu-btn-0-0"]';
	static #editOptionInCardThreeDot = '[data-testid="kebab-menu-action-edit"]';

	clickOnThreeDotInCard() {
		cy.get(RoomBoards.#ThreeDotButtonInCard)
			//three dot has same data-testid and needs to be located inside the parent element
			.find(RoomBoards.#globalCommonThreeDotButton)
			.click();
	}

	clickEditOptionInCardThreeDot() {
		cy.get(RoomBoards.#editOptionInCardThreeDot).click();
	}

	clickThreeDotMenuInVideoConferenceElement() {
		cy.get(RoomBoards.#videoConferenceElement)
			//three dot has same data-testid and needs to be located inside the parent element
			.find(RoomBoards.#globalCommonThreeDotButton)
			.click();
	}

	clickDeleteOptionInThreeDotMenu() {
		cy.get(RoomBoards.#deleteOptionOnVideoConferenceElementDialog).click();
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
			.find('input[type="checkbox"]') // Find the checkbox inside the parent options
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

	verifyMultiColumnCopiedBoardTileVisibleOnRoomDetailsPage() {
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
