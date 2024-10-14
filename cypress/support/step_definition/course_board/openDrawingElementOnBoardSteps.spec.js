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

When("I select external tools from the menu", () => {
	board.selectExternalToolsFromMenu();
});

Then("I see an external tool element with tool {string}", (toolName) => {
	board.seeExternalToolElementWithTool(toolName);
});

Then("I see preferred tool {string} in the menu", (toolName) => {
	board.seePreferredExternalToolInMenu(toolName);
});

Then("I select preferred tool {string} from the menu", (toolName) => {
	board.selectPreferredExternalToolFromMenu(toolName);
});

Then("I do not see preferred tool {string} in the menu", (toolName) => {
	board.preferredExternalToolIsNotVisibleInMenu(toolName);
});
