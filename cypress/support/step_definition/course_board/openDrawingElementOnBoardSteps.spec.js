const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Board from "../../pages/course_board/pageBoard";

const board = new Board();

When("I click on open Drawing Element", () => {
	board.clickOnOpenTldrawDrawingElement();
});

When("I click on plus icon to add card in column", () => {
	board.clickPlusIconToAddCardInColumn();
});

When("I click on plus icon to add content into card", () => {
	board.clickPlusIconToAddContentIntoCard();
});

Then("I select whiteboard from the menu", () => {
	board.selectWhiteboardFromMenu();
});

Then("I click on the option Publish in three dot menu in course board", () => {
	board.clickPublishOptionInThreeDotMenuInCourseBoard();
});
