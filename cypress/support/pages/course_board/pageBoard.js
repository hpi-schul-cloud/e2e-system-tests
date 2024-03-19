"use strict";

class Board {
  static #courseContentTab = '[data-testid="learnContent-tab"]';
  static #cardCourseBoardInCouseContent = '[data-testid="room-board-card"]';
  static #boardTitle = '[data-testid="board-title"]';
  static #welcomeDefaultCardInColumn = '[data-testid="event-handle"]';
  static #addNewColumnButton = '[data-testid="add-column"]';
  static #addColumnTitleInputPrefix = 'column-title-';
  static #addColumnTitleInput = '[data-testid="column-title-0"]';
  static #addNewCardButtonInColumn = '[data-testid="add-card-1"]';
  static #mainPageArea = '[id="main-content"]';
  static #editOptionColumnThreeDot = '[data-testid="column-menu-btn-1"]';
  static #threeDotMenuInColumn = '[data-testid="column-menu-btn-1"]';
  static #deleteOptionColumnThreeDot = '[data-testid="board-menu-action-delete"]';
  static #columnDeleteButtonInModal = '[data-testid="dialog-confirm"]';
  static #deleteDialogBox = '[data-testid="dialog-title"]';
  static #threeDotMenuInBoardTitle = '[data-testid="board-menu-btn"]';
  static #boardTitleMenuOptionEdit = '[data-testid="board-menu-action-edit"]';
  static #boardTitleMenuOptionPublish = '[data-testid="board-menu-action-publish"]';


  doNotSeeColumnAfterDeletion() {
    cy.get(Board.#addColumnTitleInput).should("not.exist");
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

  seeByDefaultWelcomeCardInBoard() {
    cy.get(Board.#welcomeDefaultCardInColumn).should("exist");
  }

  clickOnAddNewColumnButton() {
    cy.get(Board.#addNewColumnButton).click();
  }

  enterNewColumnTitle(newColumnName, columnPosition) {
    const columnTitleToChange = '[data-testid="' + Board.#addColumnTitleInputPrefix + columnPosition + '"]'
    cy.get(columnTitleToChange)
      .wait(1000)
      .realType(newColumnName)
      .wait(500);
  }

  clickOutsideTheColumnToSaveTheColumn() {
    cy.get(Board.#mainPageArea).click("center");
  }

  //seeNewlyCreatedColumn(newColumnName) {
  //cy.get(Board.#addColumnTitleInput).contains(newColumnName)
  //}

  clickOnAddNewCardButton() {
    cy.get(Board.#addNewCardButtonInColumn).click({ multiple: true });
  }

  clickOnThreeDotOnBoardTitle() {
    cy.get(Board.#threeDotMenuInBoardTitle).click();
  }

  selectEditInBoardThreeDotMenu() {
    cy.get(Board.#boardTitleMenuOptionEdit).click();
  }

  enterNewBoardTitle(newBoardTitle) {
    cy.get(Board.#boardTitle)
      .find('input')
      .clear()
      .wait(1000)
      .realType(newBoardTitle)
      .wait(500);
  }

  seeCourseBoardTitle(courseBoardTitle) {
    cy.get(Board.#boardTitle)
      .parent('div')
      .find('span')
      .contains(courseBoardTitle)
  }
}
export default Board;
