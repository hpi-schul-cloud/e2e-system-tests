import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Board from "../../pages/course_board/pageBoard";

const board = new Board();

Then("I see an external tool element with tool {string}", (toolName) => {
	board.seeExternalToolElementWithTool(toolName);
});

When("I click on three dot menu of external tool element {string}", (toolName) => {
	board.clickThreeDotMenuOnExternalToolElementWithTool(toolName);
});

When("I select external tools from the menu", () => {
	board.selectExternalToolsFromMenu();
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

Then("I see external tool element with tool {string} is not marked as incomplete", (toolName) => {
	board.seeToolIsNotMarkedAsIncomplete(toolName);
});

Then("I see external tool element with tool {string} is not marked as incomplete operational", (toolName) => {
	board.seeToolIsNotMarkedAsIncompleteOperational(toolName);
});

Then("I see external tool element with tool {string} is marked as incomplete", (toolName) => {
	board.seeToolIsMarkedAsIncomplete(toolName);
});

Then("I see external tool element with tool {string} is marked as incomplete operational", (toolName) => {
	board.seeToolIsMarkedAsIncompleteOperational(toolName);
});

When("I click on external tool element with tool {string}", (toolName) => {
	board.clickExternalToolElementWithTool(toolName);
});

Then("I see an external tool element with tool {string} is marked as deactivated", (toolName) => {
	board.seeToolIsMarkedAsDeactivated(toolName);
});

Then("I see an external tool element with tool {string} is not marked as deactivated", (toolName) => {
	board.seeToolIsNotMarkedAsDeactivated(toolName);
});
