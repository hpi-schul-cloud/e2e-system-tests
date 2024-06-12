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

Then("I see the tool configuration page title", () => {
	courses.seeContextExternalToolConfiguratorPageTitle();
});

When("I click on the tool configuration selection", () => {
	courses.clickOnToolConfigurationSelect();
});

Then("I see the tool {string} in the tool overview", (toolName) => {
	courses.checkIfToolIsVisibleInToolTable(toolName);
});

Then("I do not see tool {string} in the tool overview", (toolName) => {
	courses.checkIfToolIsNotVisibleInToolTable(toolName);
});

Then("I do not see tool {string} in the tool selection", (toolName) => {
	courses.schoolExternalToolIsNotVisibleInToolSelection(toolName);
});

Then("I see the error dialog of {string}", (toolName) => {
	courses.checkIfOutdatedDialogIsOpen(toolName);
});


// When("I launch the tool {string}", (toolName) => {
// 	courses.clickOnTool(toolName);
// });

When("I click on the tool {string}", (toolName) => {
	courses.clickOnTool(toolName);
});

// When("I launch the tool {string} and go back", (toolName) => {
// 	courses.clickOnToolAndReturn(toolName);
// });

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

When("I click on the tool edit button of {string}", (toolName) => {
	courses.clickOnToolEditButton(toolName);
});

When("I click on the tool delete of {string}", (toolName) => {
	courses.clickOnToolDeleteButton(toolName);
});

When("I fill out the required value", () => {
	courses.editMissingToolParameterValue();
});

When("I confirm the update", () => {
	courses.clickOnConfirmButton();
});

When("I select {string} in required protected custom parameter selection", (value) => {
	courses.editProtectedCustomParameter(value);
})

When("I enter {string} in required custom parameter field {string}", (value, paramName) => {
	courses.fillInCustomParameter(paramName, value);
});

When("I enter {string} in optional custom parameter field {string}", (value, paramName) => {
	courses.fillInCustomParameter(paramName, value);
});

When("I enter {string} in display name field", (toolName) => {
	courses.fillInDisplayName(toolName);
});
