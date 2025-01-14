"use strict";

class RoomBoards {
	static #btnDialogCancel = '[data-testid="dialog-cancel"]';
	static #btnDialogConfirm = '[data-testid="dialog-confirm"]';
	static #boardMenuActionDelete = '[data-testid="kebab-menu-action-delete"]';
	static #mainPageArea = '[id="main-content"]';
	static #roomBoardTitleOnPage = '[data-testid="board-title"]';
	static #boardMenuIcon = '[data-testid="board-menu-icon"]';
	static #btnBoardMenuActionEdit = '[data-testid="kebab-menu-action-edit"]';
	static #dialogAddMultiColumnBoard = '[data-testid="dialog-add-multi-column-board"]';
	static #dialogAddSingleColumnBoard = '[data-testid="dialog-add-single-column-board"]';
	static #boardLayoutDialogTitle = '[data-testid="board-layout-dialog-title"]';

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
		});
	}
	seeGivenRoomBoardTitle(boardTitle) {
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
		cy.get(RoomBoards.#btnBoardMenuActionEdit).click();
	}
}

export default RoomBoards;
