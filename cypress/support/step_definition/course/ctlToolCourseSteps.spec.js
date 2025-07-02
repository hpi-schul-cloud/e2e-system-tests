const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Courses from "../../pages/course/pageCourses";

const courses = new Courses();

When("I click on the tools tab", () => {
	courses.navigateToToolsTab();
});

Then("I see the button to add a tool", () => {
	courses.seeAddNewToolFAB();
});

Then("I do not see the button to add a tool", () => {
	courses.seeNotAddNewToolFAB();
});

When("I click on the button to add a tool", () => {
	courses.clickOnAddNewToolFAB();
});

Then("I see the tool {string} in the tool overview", (toolName) => {
	courses.checkIfToolIsVisibleInToolTable(toolName);
});

Then("I do not see tool {string} in the tool overview", (toolName) => {
	courses.checkIfToolIsNotVisibleInToolTable(toolName);
});

Then("I see the domain of {string} in the tool overview", (toolName) => {
	courses.seeToolDomain(toolName);
});

When("I click on the tool {string}", (toolName) => {
	courses.clickOnTool(toolName);
});

Then("I see the delete tool dialog", () => {
	courses.seeDeleteDialog();
});

When("I confirm the delete tool dialog", () => {
	courses.confirmDeleteToolDialog();
});

When("I click on add tool", () => {
	courses.clickOnSaveTool();
});

When("I click on three dot menu of the tool {string}", (toolName) => {
	courses.clickThreeDotMenuOnTool(toolName);
});

When("I click on delete button of the tool {string}", (toolName) => {
	courses.clickOnDeleteButton(toolName);
});

Then("I see {int} tools", (count) => {
	courses.seeNumberOfTools(count);
});

Then("I see the tool {string} is not marked as incomplete", (toolName) => {
	courses.seeToolIsNotMarkedAsIncomplete(toolName);
});

Then("I see the tool {string} is marked as incomplete", (toolName) => {
	courses.seeToolIsMarkedAsIncomplete(toolName);
});

Then("I see the tool {string} is marked as deactivated", (toolName) => {
	courses.seeToolIsMarkedAsDeactivated(toolName);
});

Then("I see the tool {string} is not marked as deactivated", (toolName) => {
	courses.seeToolIsNotMarkedAsDeactivated(toolName);
});

Then("I see the tool {string} is marked as incomplete operational", (toolName) => {
	courses.seeToolIsMarkedAsIncompleteOperational(toolName);
});

Then("I see the tool {string} is not marked as incomplete operational", (toolName) => {
	courses.seeToolIsNotMarkedAsIncompleteOperational(toolName);
});

Then("I see an error dialog", () => {
	courses.checkIfErrorDialogIsOpen();
});

When("I click on the tool edit button", () => {
	courses.clickOnToolEditButton();
});

When("I click on the tool delete button", () => {
	courses.clickOnToolDeleteButton();
});

When("I lauch tool {string} with given url {string}", (toolName, url) => {
	courses.launchTool(toolName, url);
});

Then("I see tool {string} was launched", (toolName) => {
	courses.toolWasLaunched(toolName);
});
