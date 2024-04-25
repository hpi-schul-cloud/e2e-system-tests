"use strict";

class Board {
	static #courseContentTab = '[data-testid="learnContent-tab"]';
	static #cardCourseBoardInCouseContent = '[data-testid="room-board-card-0"]';
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
	static #drawingElement = '.drawing-element-content';
	static #columnPlaceholder = '[placeholder="Spalte 1"]';
	static #newColumnBoardFABInCOurseDetail = '[data-testid="fab_button_add_board"]';
	static #threeDotInCourseBoardTitle = '[data-testid="board-menu-icon"]';
	static #editOptionInThreeDotCourseBoardTitle = '[data-testid="board-menu-action-edit"]';
	static #courseBoardTitle = '[data-testid="board-title"]';
	static #draftChipInCourseBoardName = '[data-testid="board-title"]';

	clickOnFABToCreateNewColumnBoard() {
		cy.get(Board.#newColumnBoardFABInCOurseDetail).click();
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
		cy.get(Board.#drawingElement).should('exist').click();
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
	}

	selectEditInColumnThreeDotMenu() {
		cy.get(Board.#editOptionColumnThreeDot).click();
	}

	clickOnCourseContentTab() {
		cy.get(Board.#courseContentTab).click();
	}

	clickOnCourseBoardCardInCourseDetailPage() {
		cy.get(Board.#cardCourseBoardInCouseContent).click();
	}

	seeCourseBoardTitle() {
		cy.get(Board.#courseBoardTitleOnPage).should("exist");
	}

	seeByDefaultWelcomeCardInBoard() {
		cy.get(Board.#welcomeDefaultCardInColumn).should("exist");
	}

	clickOnAddNewColumnButton() {
		cy.get(Board.#addNewColumnButton).click();
	}

	enterColumnTitleInCourseBoard(columnTitle) {
		cy.get(Board.#addColumnTitleInput).type("{backspace}".repeat(30));
		cy.get(Board.#addColumnTitleInput).wait(1000).realType(columnTitle).wait(500);
	}

	/* Commented out because it's being handled in the same another method -> enterColumnTitleInCourseBoard()
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
	*/

	/* Commented out because it's being handled in the same another method -> enterColumnTitleInCourseBoard()
	enterEditedColumnTitle(newColumnName) {
		this.recursivelyDeleteTextFromTextArea();
		cy.wait(500);
		cy.get(Board.#addColumnTitleInput).wait(1000).realType(newColumnName).wait(500);
	}
	*/

	clickOutsideTheColumnToSaveTheColumn() {
		cy.get(Board.#mainPageArea).click("center");
	}

	seeNewlyCreatedColumn(newColumnName) {
		cy.wait(1000);
		cy.window().then((win) => {
			const textareaValue = win.document.querySelector(Board.#columnPlaceholder).value;
			expect(textareaValue).to.equal(newColumnName);
		});
	}

	clickOnAddNewCardButton() {
		cy.get(Board.#addNewCardButtonInColumn).click();
	}
}
export default Board;
