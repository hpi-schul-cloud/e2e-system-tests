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
	static #editOptionThreeDot = '[data-testid="board-menu-action-edit"]';
	static #threeDotMenuInColumn = '[data-testid="column-menu-btn-0"]';
	static #threeDotMenuInCard = '[data-testid="card-menu-btn"]';
	static #threeDotMenuOnDeletedElement = '[data-testid="deleted-element-menu-btn"]';
	static #deleteOptionThreeDot = '[data-testid="board-menu-action-delete"]';
	static #confirmButtonInModal = '[data-testid="dialog-confirm"]';
	static #deleteDialogBox = '[data-testid="dialog-title"]';
	static #drawingElement = '[data-testid="drawing-element"]';
	static #columnPlaceholder = '[placeholder="Spalte 1"]';
	static #newColumnBoardFABInCourseDetail = '[data-testid="fab_button_add_board"]';
	static #threeDotInCourseBoardTitle = '[data-testid="board-menu-icon"]';
	static #editOptionInThreeDotCourseBoardTitle =
		'[data-testid="board-menu-action-edit"]';
	static #courseBoardTitle = '[data-testid="board-title"]';
	static #draftChipInCourseBoardName = '[data-testid="board-title"]';
	static #addCardInColumnButton = '[data-testid="column-0-add-card-btn"]';
	static #addContentIntoCardButton = '[data-testid="add-element-btn"]';
	static #selectWhiteboardFromMenu = '[data-testid="create-element-drawing-element"]';
	static #selectExternalToolsFromMenu =
		'[data-testid="create-element-external-tool-container"]';
	static #externalToolElement = '[data-testid="board-external-tool-element"]';
	static #deletedElement = '[data-testid="board-deleted-element"]';
	static #boardMenuActionPublish = '[data-testid="board-menu-action-publish"]';

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

	canNotSeeDeletedElements() {
		cy.get(Board.#deletedElement).should("not.be.visible");
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

	enterCourseBoardTitle(boardTitle) {
		cy.get(Board.#courseBoardTitle).type("{backspace}".repeat(11)).type(boardTitle);
	}

	seeCourseBoardName(boardName) {
		cy.get(Board.#courseBoardTitle).contains(boardName);
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

	clickOnConfirmInModal() {
		cy.get(Board.#confirmButtonInModal).click();
	}

	seeDeleteConfirmationModal() {
		cy.get(Board.#deleteDialogBox).should("exist");
	}

	selectDeleteInThreeDotMenu() {
		cy.get(Board.#deleteOptionThreeDot).click();
	}

	clickOnThreeDotOnColumn() {
		cy.get(Board.#threeDotMenuInColumn).click();
		cy.get(Board.#editOptionThreeDot).should("be.visible");
	}

	clickOnThreeDotOnCard() {
		cy.get(Board.#threeDotMenuInCard).click();
		cy.get(Board.#editOptionThreeDot).should("be.visible");
	}

	clickOnThreeDotOnDeletedElement() {
		cy.get(Board.#threeDotMenuOnDeletedElement).click();
		cy.get(Board.#deleteOptionThreeDot).should("be.visible");
	}

	selectEditInThreeDotMenu() {
		cy.get(Board.#editOptionThreeDot).click();
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
		cy.get(Board.#addColumnTitleInput).type("{backspace}".repeat(30));
		cy.wait(500);
		cy.get(Board.#addColumnTitleInput).wait(1000).realType(columnTitle).wait(500);
	}

	/*  Commented out because it's being handled in the same another method -> enterColumnTitleInCourseBoard()
	recursivelyDeleteTextFromTextArea() {
		cy.window().then((win) => {
			const textArea = win.document.querySelector(Board.#columnPlaceholder);
			const textAreaValue = textArea.value;

			if (textAreaValue.length > 0) {
				cy.get(Board.#addColumnTitleInput)
					.wait(100)
					.realType(`{backspace}`)
					.wait(100)
					.then(() => {
						textArea.value = textAreaValue.slice(0, -1);
					});
				this.recursivelyDeleteTextFromTextArea();
			} else {
				cy.log(`Cleared text area`);
			}
		});
	}

	Commented out because it's being handled in the same another method -> enterColumnTitleInCourseBoard()
	enterEditedColumnTitle(newColumnName) {
		this.recursivelyDeleteTextFromTextArea();
		cy.wait(500);
		cy.get(Board.#addColumnTitleInput).wait(1000).realType(newColumnName).wait(500);
	} */

	clickOutsideTheColumnToSaveTheColumn() {
		cy.get(Board.#mainPageArea).click("center");
	}

	seeNewlyCreatedColumn(newColumnName) {
		cy.wait(1000);
		cy.window().then((win) => {
			const textareaValue = win.document.querySelector(
				Board.#columnPlaceholder
			).value;
			expect(textareaValue).to.equal(newColumnName);
		});
	}

	clickOnAddNewCardButton() {
		cy.get(Board.#addNewCardButtonInColumn).click();
	}
}
export default Board;
