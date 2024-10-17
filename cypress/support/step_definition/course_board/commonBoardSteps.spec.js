import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Board from "../../pages/course_board/pageBoard";

const board = new Board();

When("I click on three dot menu in the card", () => {
	board.clickOnThreeDotOnCard();
});

When("I select the option Edit in three dot menu on the card", () => {
	board.selectEditInThreeDotMenu();
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

When("I click on plus icon to add content into card", () => {
	board.clickPlusIconToAddContentIntoCard();
});

Then("I click on the option Publish in three dot menu in course board", () => {
	board.clickPublishOptionInThreeDotMenuInCourseBoard();
});





