"use strict";

class Board {
  static #courseContenttab = '[data-testid="learnContent-tab"]';
  static #cardCourseBoardInCouseContent = '[data-testid="room-board-card"]';
  static #courseBoardTitleOnPage = '[data-testid="course-board-title"]';
  static #welcomeDefaultCardInColumn = '[data-testid="event-handle"]';
  static #addNewColumnButton = '[data-testid="add-column"]';
  static #addColumnTitleInput = '[data-testid="column-title-1"]';
  static #addNewCardButtonInColumn = '[data-testid="add-card-1"]';
  static #mainPageArea = '[id="main-content"]';
  static #editOptionColumnThreeDot = '[data-testid="column-menu-btn-1"]';
  static #threeDotMenuInColumn = '[data-testid="column-menu-btn-1"]';
  static #deleteOptionColumnThreeDot =
    '[data-testid="board-menu-action-delete"]';
  static #columnDeleteButtonInModal = '[data-testid="dialog-confirm"]';

  doNotSeeColumnAfterDeletion() {
    cy.get(Board.#addColumnTitleInput).should("not.exist");
  }

  clickOnDeleteColumnModal() {
    cy.get(Board.#columnDeleteButtonInModal).click();
  }

  seeDeleteConfirmationModal() {
    cy.get(Board.#deleteColumnModal).should("exist");
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
    cy.get(Board.#courseContenttab).click();
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

  enterNewColumnTitle(newColumnName) {
    cy.get(Board.#addColumnTitleInput)
      .wait(1000)
      .realType(newColumnName)
      .wait(500);
  }

  clickOutsideTheColumnToSaveTheCOlumn() {
    cy.get(Board.#mainPageArea).click("center");
  }

  //seeNewlyCreatedColumn(newColumnName) {
  //cy.get(Board.#addColumnTitleInput).contains(newColumnName)
  //}

  clickOnAddNewCardButton() {
    cy.get(Board.#addNewCardButtonInColumn).click({ multiple: true });
  }
}
export default Board;
