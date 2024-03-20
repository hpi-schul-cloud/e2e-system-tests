const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Board from "../../pages/course_board/pageBoard";

const board = new Board();

When("I go to the tab contents in course detail page", () => {
  board.clickOnCourseContentTab();
});

When("I click on card Course Board", () => {
  board.clickOnCourseBoardCardInCourseDetailPage();
});

Then(
  "I see the existing card with welcome message in the existing column",
  () => {
    board.seeByDefaultWelcomeCardInBoard();
  }
);

When("I click on the button Add column", () => {
  board.clickOnAddNewColumnButton();
});

When("I enter the column title name {string} on position {string}", (newColumnName, columnPosition) => {
  board.enterNewColumnTitle(newColumnName, columnPosition);
});

When("I click on the page outside of the column", () => {
  board.clickOutsideTheColumnToSaveTheColumn();
});

Then("I see my column named {string} for column with position {string}", (newColumnName, columnPosition) => {
  board.seeTitleOfColumn(newColumnName, columnPosition);
});

Then(
  "I click on the button with the Icon Plus to add a new card in the column with position {string}", (columnPosition) => {
    board.clickOnAddNewCardButton(columnPosition);
  }
);

When("I click on three dot menu in the column", () => {
  board.clickOnThreeDotOnColumn();
});

When("I select the Edit option in the drop down menu", () => {
  board.selectEditInColumnThreeDotMenu();
});

When("I select the Delete option in the drop down", () => {
  board.clickOnDeleteColumnInMenu();
});

Then("I see the confirmation Modal", () => {
  board.seeDeleteConfirmationModal();
});

When("I click on the button Remove on the Modal", () => {
  board.clickOnDeleteColumnModal();
});

Then("I do not see the column", () => {
  board.doNotSeeColumnAfterDeletion();
});

When("I click on 3-dot-menu for Board title", () => {
  board.clickOnThreeDotOnBoardTitle();
});

When("I select the option Edit for board title", () => {
  board.selectEditInBoardThreeDotMenu();
});

When("I enter new board title {string}", (newBoardTitle) => {
  board.enterNewBoardTitle(newBoardTitle);
});

Then("I see the course board title is {string}", (courseBoardTitle) => {
  board.seeCourseBoardTitle(courseBoardTitle);
});
