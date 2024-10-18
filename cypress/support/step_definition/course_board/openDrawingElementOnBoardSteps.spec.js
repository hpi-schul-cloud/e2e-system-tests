const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Board from "../../pages/course_board/pageBoard";

const board = new Board();

When("I click on open Drawing Element", () => {
	board.clickOnOpenTldrawDrawingElement();
});

Then("I select whiteboard from the menu", () => {
	board.selectWhiteboardFromMenu();
});

