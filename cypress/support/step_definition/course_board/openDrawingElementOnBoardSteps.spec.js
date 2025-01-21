const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Board from "../../pages/course_board/pageBoard";

const board = new Board();

When("I click on open Drawing Element", () => {
	board.clickOnOpenTldrawDrawingElement();
});

When("I click on the whiteboard element", () => {
	board.clickOnWhiteboardElement();
});
