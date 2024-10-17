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
