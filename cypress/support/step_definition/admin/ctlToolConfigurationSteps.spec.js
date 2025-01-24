import ToolConfiguration from "../../pages/admin/pageToolConfiguration";
const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const toolConfiguration = new ToolConfiguration();

Then("I see the context external tool configuration page", () => {
	toolConfiguration.seeContextExternalToolConfiguratorPage();
});

Then("I see the school external tool configuration page", () => {
	toolConfiguration.seeExternalToolConfiguratorPage();
});

Then("I see the school external tool configuration infotext", () => {
	toolConfiguration.seeToolConfigurationInfoText();
});

When("I click on save external tool button", () => {
	toolConfiguration.saveExternalToolButton();
});

Then("I do not see tool {string} in the tool selection", (toolName) => {
	toolConfiguration.toolIsNotVisibleInToolSelection(toolName);
});

When("I select the tool {string} from available tools", (toolName) => {
	toolConfiguration.addExternalTool(toolName);
});

Then("I see tool {string} is selected", (toolName) => {
	toolConfiguration.seeSelectedExternalTool(toolName);
});

When("I insert the external tool link {string}", (toolLink) => {
	toolConfiguration.insertToolLink(toolLink);
});

When("I deactivate the tool", () => {
	toolConfiguration.deactivateTool();
});

When("I activate the tool", () => {
	toolConfiguration.activateTool();
});

Then("I see the deactivate checkbox is checked", () => {
	toolConfiguration.seeDeactivatedCheckBoxIsChecked()
});

Then("I see the deactivate checkbox is not checked", () => {
	toolConfiguration.seeDeactivatedCheckBoxIsNotChecked()
});

Then("I see an error alert", () => {
	toolConfiguration.seeToolErrorAlert();
});

When("I enter {string} in display name field", (toolName) => {
	toolConfiguration.fillInToolDisplayName(toolName);
});

When("I select {string} in required protected custom parameter selection", (value) => {
	toolConfiguration.selectProtectedCustomParameterOption(value);
})

When("I enter {string} in required custom parameter field {string}", (value, paramName) => {
	toolConfiguration.fillInCustomParameter(paramName, value);
});

When("I enter {string} in optional custom parameter field {string}", (value, paramName) => {
	toolConfiguration.fillInCustomParameter(paramName, value);
});

Then("I see custom parameter input field {string} contains {string}", (paramName, value) => {
	toolConfiguration.seeCustomParameterFormContains(paramName, value);
});
