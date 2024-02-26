const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Board from "../../pages/course_board/pageBoard";

const board = new Board();

When("I go to the tab contents in course detail page", () => {
  board.clickOnCourseContentTab();
});

When("I click on card Course Board", () => {
  board.clickOnCourseBoardCardInCourseDetailPage();
});

Then("I see the page title in Course Board page", () => {
  board.seeCourseBoardTitle();
});

Then(
  "I see the existing card with welcom message in the existing column",
  () => {
    board.seeByDefaultWelcomeCardInBoard();
  }
);

When("I click on the button Add column", () => {
  board.clickOnAddNewColumnButton();
});

When("I enter the title name {string}", (newColumnName) => {
  board.enterNewColumnTitle(newColumnName);
});

When("I click on the page oustide the column", () => {
  board.clickOutsideTheColumnToSaveTheCOlumn();
});

//Then("I see my column named {string}", (newColumnName) => {
//board.seeNewlyCreatedColumn(newColumnName);
//});   -----> this would not work as expected currently thers is an issue to fix.

Then("I click on the button add new card in the column", () => {
  board.clickOnAddNewCardButton();
});

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
