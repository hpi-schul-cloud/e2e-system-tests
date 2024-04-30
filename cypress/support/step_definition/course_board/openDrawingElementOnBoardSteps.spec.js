const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Board from "../../pages/course_board/pageBoard";

const board = new Board();

When("I click on open Drawing Element", () => {
	board.clickOnOpenTldrawDrawingElement();
	cy.wait("@tldrawRequest").then((interception) => {
		assert.isTrue(interception.response.statusCode === 200, "Status code is 200");
	});
});
