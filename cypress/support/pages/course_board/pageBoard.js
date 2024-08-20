"use strict";

class Board {
	static #courseContentTab = '[data-testid="learnContent-tab"]';
	static #cardCourseBoardInCourseContent = '[data-testid="room-board-card-0"]';
	static #courseBoardTitleOnPage = '[data-testid="board-title"]';
	static #welcomeDefaultCardInColumn = '[data-testid="event-handle"]';
	static #addNewColumnButton = '[data-testid="add-column"]';
	static #addColumnTitleInput = '[data-testid="column-title-0"]';
	static #addNewCardButtonInColumn = '[data-testid="column-0-add-card-btn"]';
	static #mainPageArea = '[id="main-content"]';
	static #editOptionColumnThreeDot = '[data-testid="board-menu-action-edit"]';
	static #threeDotMenuInColumn = '[data-testid="column-menu-btn-0"]';
	static #deleteOptionColumnThreeDot = '[data-testid="board-menu-action-delete"]';
	static #columnDeleteButtonInModal = '[data-testid="dialog-confirm"]';
	static #deleteDialogBox = '[data-testid="dialog-title"]';
	static #drawingElement = '[data-testid="drawing-element"]';
	static #columnPlaceholder = '[placeholder="Spalte 1"]';
	static #newColumnBoardFABInCourseDetail = '[data-testid="fab_button_add_board"]';
	static #threeDotInCourseBoardTitle = '[data-testid="board-menu-icon"]';
	static #editOptionInThreeDotCourseBoardTitle = '[data-testid="board-menu-action-edit"]';
	static #draftChipInCourseBoardName = '[data-testid="board-draft-chip"]';
	static #addCardInColumnButton = '[data-testid="column-0-add-card-btn"]';
	static #addContentIntoCardButton = '[data-testid="add-element-btn"]';
	static #selectWhiteboardFromMenu = '[data-testid="create-element-drawing-element"]';
	static #selectExternalToolsFromMenu =
		'[data-testid="create-element-external-tool-container"]';
	static #externalToolElement = '[data-testid="board-external-tool-element"]';
	static #boardMenuActionPublish = '[data-testid="board-menu-action-publish"]';
	static #boardLayoutDialogBoxTitle = '[data-testid="board-layout-dialog-title"]';
	static #multiColumnBoardOptionInDialogBox =
		'[data-testid="dialog-add-multi-column-board"]';
	static #singleColumnBoardOptionInDialogBox =
		'[data-testid="dialog-add-single-column-board"]';

	clickPlusIconToAddCardInColumn() {
		cy.get(Board.#addCardInColumnButton).click();
	}

	clickPlusIconToAddContentIntoCard() {
		cy.get(Board.#addContentIntoCardButton).click();
	}

	selectWhiteboardFromMenu() {
		cy.get(Board.#selectWhiteboardFromMenu).click();
	}

	selectExternalToolsFromMenu() {
		cy.get(Board.#selectExternalToolsFromMenu).click();
	}

	seeExternalToolElementWithTool(toolName) {
		cy.get(Board.#externalToolElement)
			.find(".content-element-title")
			.should("contain.text", toolName);
	}

	clickPublishOptionInThreeDotMenuInCourseBoard() {
		cy.get(Board.#boardMenuActionPublish).click();
	}

	clickOnFABToCreateNewColumnBoard() {
		cy.get(Board.#newColumnBoardFABInCourseDetail).click();
	}

	seeNewCourseBoardCreatePage() {
		cy.url().should("include", "/board");
	}

	clickOnThreeDotMenuInCourseBoardTitle() {
		cy.get(Board.#threeDotInCourseBoardTitle).click();
	}

	clickOnEditInThreeDotCourseBoardTitle() {
		cy.get(Board.#editOptionInThreeDotCourseBoardTitle).click();
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

	enterCourseBoardTitle(boardTitle) {
		cy.get(Board.#courseBoardTitleOnPage).within(() => {
			this.clearAndType("input", boardTitle);
		});
	}

	seeCourseBoardName(boardName) {
		cy.get(Board.#courseBoardTitleOnPage).contains(boardName);
	}

	seeDarftChipOnCourseBoard() {
		cy.get(Board.#draftChipInCourseBoardName).should("exist");
	}

	doNotSeeColumnAfterDeletion() {
		cy.get(Board.#addColumnTitleInput).should("not.exist");
	}

	clickOnOpenTldrawDrawingElement() {
		cy.get(Board.#drawingElement).should("exist").click();
		cy.wait("@tldrawRequest").then((interception) => {
			assert.isTrue(interception.response.statusCode === 200, "Status code is 200");
		});
	}

	clickOnDeleteColumnModal() {
		cy.get(Board.#columnDeleteButtonInModal).click();
	}

	seeDeleteConfirmationModal() {
		cy.get(Board.#deleteDialogBox).should("exist");
	}

	clickOnDeleteColumnInMenu() {
		cy.get(Board.#deleteOptionColumnThreeDot).click();
	}

	clickOnThreeDotOnColumn() {
		cy.get(Board.#threeDotMenuInColumn).click();
		cy.get(Board.#editOptionColumnThreeDot).should("be.visible");
	}

	selectEditInColumnThreeDotMenu() {
		cy.get(Board.#editOptionColumnThreeDot).click();
	}

	clickOnCourseContentTab() {
		cy.get(Board.#courseContentTab).click();
	}

	clickOnCourseBoardCardInCourseDetailPage() {
		cy.get(Board.#cardCourseBoardInCourseContent).click();
	}

	seeCourseBoardTitle() {
		cy.get(Board.#courseBoardTitleOnPage).should("exist");
	}

	seeByDefaultWelcomeCardInBoard() {
		cy.get(Board.#welcomeDefaultCardInColumn).should("exist");
	}

	clickOnAddNewColumnButton() {
		cy.get(Board.#addNewColumnButton).click();
		cy.get(Board.#addColumnTitleInput).should("be.visible").should("exist");
	}

	enterColumnTitleInCourseBoard(columnTitle) {
		cy.get(Board.#addColumnTitleInput).within(() => {
			this.clearAndType("textarea", columnTitle);
		});
	}

	clickOutsideTheColumnToSaveTheColumn() {
		cy.get(Board.#mainPageArea).click("center");
	}

	seeNewlyCreatedColumn(newColumnName) {
		cy.wait(1000);
		cy.get(Board.#addColumnTitleInput)
			.find("textarea")
			.should("be.visible")
			.should("have.attr", "value", newColumnName);
	}

	clickOnAddNewCardButton() {
		cy.get(Board.#addNewCardButtonInColumn).click();
	}

	seeColumnBoardDialogBox() {
		cy.get(Board.#boardLayoutDialogBoxTitle).should("be.visible");
	}

	seeMultiColumnBoardOptionInDialogBox() {
		cy.get(Board.#multiColumnBoardOptionInDialogBox).should("be.visible");
	}

	seeSingleColumnBoardOptionInDialogBox() {
		cy.get(Board.#singleColumnBoardOptionInDialogBox).should("be.visible");
	}

	clickOnMultiColumnBoardOptionInDialogBox() {
		cy.get(Board.#multiColumnBoardOptionInDialogBox).click();
	}
}
export default Board;
