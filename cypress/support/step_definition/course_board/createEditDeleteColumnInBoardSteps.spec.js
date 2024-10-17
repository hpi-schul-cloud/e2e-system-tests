const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Board from "../../pages/course_board/pageBoard";

const board = new Board();

When("I click on the button FAB New Column Board", () => {
	board.clickOnFABToCreateNewColumnBoard();
});

Then("I see the page Course Board detail", () => {
	board.seeNewCourseBoardCreatePage();
});

When("I click on the button three dot menu in course board", () => {
	board.clickOnThreeDotMenuInCourseBoardTitle();
});

When("I click on the option Edit in three dot menu in course board", () => {
	board.clickOnEditInThreeDotCourseBoardTitle();
});

Then("I enter the course board title {string}", (boardTitle) => {
	board.enterCourseBoardTitle(boardTitle);
});

Then("I see the course Board name {string}", (boardName) => {
	board.seeCourseBoardName(boardName);
});

Then("I see the chip Draft in the course board", () => {
	board.seeDraftChipOnCourseBoard();
});

When("I go to the tab contents in course detail page", () => {
	board.clickOnCourseContentTab();
});

When("I click on card Course Board", () => {
	board.clickOnCourseBoardCardInCourseDetailPage();
});

Then("I see the page title in Course Board page", () => {
	board.seeCourseBoardTitle();
});

Then("I see the existing card with welcome message in the existing column", () => {
	board.seeByDefaultWelcomeCardInBoard();
});

When("I click on the button Add column in the course board", () => {
	board.clickOnAddNewColumnButton();
});

When("I enter the title name {string} in the column", (columnTitle) => {
	board.enterColumnTitleInCourseBoard(columnTitle);
});

When("I enter the edited title name {string} in the column", (editedColumnName) => {
	board.enterEditedColumnTitle(editedColumnName);
});

When("I click on the page outside of the column", () => {
	board.clickOutsideTheColumnToSaveTheColumn();
});

Then("I see my column named {string}", (newColumnName) => {
	board.seeNewlyCreatedColumn(newColumnName);
});

Then("I click on the button with the Icon Plus to add a new card in the column", () => {
	board.clickOnAddNewCardButton();
});

When("I click on three dot menu in the column", () => {
	board.clickOnThreeDotOnColumn();
});

When("I select the option Edit in three dot menu in the column", () => {
	board.selectEditInThreeDotMenu();
});

When("I select the option Delete in three dot menu in the column", () => {
	board.selectDeleteInThreeDotMenu();
});

Then("I see the confirmation Modal", () => {
	board.seeDeleteConfirmationModal();
});

Then("I do not see the column", () => {
	board.doNotSeeColumnAfterDeletion();
});

Then("I see a dialog box for column board", () => {
	board.seeColumnBoardDialogBox();
});

Then("I see in dialog box option for multi-column board", () => {
	board.seeMultiColumnBoardOptionInDialogBox();
});

Then("I see in dialog box option for single column board", () => {
	board.seeSingleColumnBoardOptionInDialogBox();
});

When("I choose multi-column board in the dialog box", () => {
	board.clickOnMultiColumnBoardOptionInDialogBox();
});
