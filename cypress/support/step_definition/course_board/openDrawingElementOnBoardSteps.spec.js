const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Board from "../../pages/course_board/pageBoard";

const board = new Board();

When("I click on open Drawing Element", () => {
	board.clickOnOpenTldrawDrawingElement();
	// cy.wait("@tldrawRequest").then((interception) => {
	// 	assert.isTrue(interception.response.statusCode === 200, "Status code is 200");
	// });
});

When("I click on plus icon to add card in column", () => {
	board.clickPlusIconToAddCardInColumn();
	// cy.get('[data-testid="column-0-add-card-btn"]').click();
});

When("I click on plus icon to add content into card", () => {
	board.clickPlusIconToAddContentIntoCard();
	// cy.get('[data-testid="add-element-btn"]').click();
});

Then("I select whiteboard from the menu", () => {
	board.selectWhiteboardFromMenu();
	// cy.get('[data-testid="create-element-drawing-element"]').click();
});

When("I click on the option Publish in three dot menu in course board", () => {
	board.clickPublishOptionInThreeDotMenuInCourseBoard();
	// cy.get('[data-testid="board-menu-action-publish"]').click();
});
