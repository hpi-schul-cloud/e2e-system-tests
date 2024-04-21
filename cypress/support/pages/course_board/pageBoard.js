"use strict";

class Board {
	static #courseContentTab = '[data-testid="learnContent-tab"]';
	static #cardCourseBoardInCouseContent = '[data-testid="room-board-card-0"]';
	static #courseBoardTitleOnPage = '[data-testid="board-title"]';
	static #welcomeDefaultCardInColumn = '[data-testid="event-handle"]';
	static #addNewColumnButton = '[data-testid="add-column"]';
	static #addColumnTitleInput = '[data-testid="column-title-1"]';
	static #addNewCardButtonInColumn = 'button>span span[data-testid="add-card"]';
	static #mainPageArea = '[id="main-content"]';
	static #editOptionColumnThreeDot = '[data-testid="board-menu-action-edit"]';
	static #threeDotMenuInColumn = '[data-testid="column-menu-btn-1"]';
	static #deleteOptionColumnThreeDot = '[data-testid="board-menu-action-delete"]';
	static #columnDeleteButtonInModal = '[data-testid="dialog-confirm"]';
	static #deleteDialogBox = '[data-testid="dialog-title"]';
	static #columnPlaceholder = '[placeholder="Spalte 2"]';
	static #drawingElement = '.drawing-element-content';

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

	clickOnCourseBoardCardInCourseDetailPage(index) {
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

	enterNewColumnTitle(newColumnName) {
		cy.get(Board.#addColumnTitleInput).wait(1000).realType(newColumnName).wait(500);
	}

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

	enterEditedColumnTitle(newColumnName) {
		this.recursivelyDeleteTextFromTextArea();

		cy.wait(500);
		cy.get(Board.#addColumnTitleInput).wait(1000).realType(newColumnName).wait(500);
	}

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
		cy.get(Board.#addNewCardButtonInColumn).eq(1).click({
			force: true,
		});
	}
}
export default Board;
