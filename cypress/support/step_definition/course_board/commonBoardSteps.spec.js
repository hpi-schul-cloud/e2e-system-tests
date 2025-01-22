import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Board from "../../pages/course_board/pageBoard";

const board = new Board();

When("I click on the board", () => {
	board.clickOnCourseBoardCardInCourseDetailPage();
});

When("I click on three dot menu in the card", () => {
	board.clickOnThreeDotOnCard();
});

When("I select the option Edit in three dot menu on the card", () => {
	board.selectEditInThreeDotMenu();
});

When("I select the option Copy link to card in three dot menu on the card", () => {
	board.selectCopyLinkToCardInThreeDotMenu();
});

When("I click the edit button in three dot menu on the element", () => {
	board.clickEditButtonInThreeDotMenu();
});

When("I click the delete button in three dot menu on the element", () => {
	board.clickDeleteButtonInThreeDotMenu();
});

When("I click on the button Remove on the Modal", () => {
	board.clickOnConfirmInModal();
});

When("I click on plus icon to add card in column", () => {
	board.clickPlusIconToAddCardInColumn();
});

When("I click on the button three dot menu in course board", () => {
	board.clickOnThreeDotMenuInCourseBoardTitle();
});

When("I click on plus icon to add content into card", () => {
	board.clickPlusIconToAddContentIntoCard();
});

When("I click on the option Publish in three dot menu in course board", () => {
	board.clickPublishOptionInThreeDotMenuInCourseBoard();
});

Then("I see the chip Draft in the course board", () => {
	board.seeDraftChipOnCourseBoard();
});

Then("I do not see the chip Draft in the course board", () => {
	board.doNotSeeDraftChipOnCourseBoard();
});

When("I click on three dot menu in the board header", () => {
	board.clickOnThreeDotMenuInBoardHeader();
});

When("I enter {string} to board card text element", (textContent) => {
	board.enterTextToTextFieldInCard(textContent);
});

Then("I see {string} in board card text element", (textContent) => {
	board.seeTextInTextFieldInCard(textContent);
});

Then("I see a whiteboard on the board", () => {
	board.seeWhiteboardOnPage();
});

Then("I select whiteboard from the menu", () => {
	board.selectWhiteboardFromMenu();
});

Then("I see a board card", () => {
	board.seeBoardCard();
});

When("I open the link to a board card", () => {
	board.openBoardCardLink();
});

When("I click on the page outside of the card", () => {
	board.clickOutsideTheCardToSaveTheCard();
});

Then("I see the focused board card", () => {
	board.seeFocusedBoardCard();
});