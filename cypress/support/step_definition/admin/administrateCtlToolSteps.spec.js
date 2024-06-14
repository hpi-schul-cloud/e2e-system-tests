import Management from "../../pages/admin/pageAdministration";
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

const management = new Management();

When("I click on delete external tool button", () => {
	management.clickDeleteExternalToolButton();
});

When("I click on cancel external tool deletion button", () => {
	management.clickCancelExternalToolDeletionButton();
});

Then("I see the external tools table", () => {
	management.seeExternalToolTable();
});

Then("I see the external tools table is empty", () => {
	management.seeEmptyExternalToolTable();
});

Then("I see the external tools configuration page", () => {
	management.seeExternalToolConfigurationPage();
});

Then("I see the tool configuration infotext", () => {
	management.seeToolConfigurationInfoText();
});

Then("I see the external tool configuration page title", () => {
	management.seeExternalToolConfiguratorPageTitle();
});

Then("I see tool {string} is selected", (toolName) => {
	management.seeSelectedExternalTool(toolName);
});

Then("I see custom parameter input field {string} contains {string}", (paramName, value) => {
	management.seeCustomParameterFormContains(paramName, value);
});

Then("I do not see the tool {string} in external tools table", (toolName) => {
	management.toolIsNotVisibleInExternalToolTable(toolName);
});

Then("I see an error alert", () => {
	management.seeToolErrorAlert();
});

Then("I do not see external tool {string} in the tool selection", (toolName) => {
	management.externalToolIsNotVisibleInToolSelection(toolName);
});

Then("I see the deactivate checkbox is {string}", (value) => {
	management.seeDeactivatedCheckBox(value);
	if(value === "checked"){
		management.seeDeactivatedCheckBoxIsChecked()
	} else if(value === "not checked"){
		management.seeDeactivatedCheckBoxIsNotChecked()
	}
});

When("I click the add external tool button", () => {
	management.clickAddExternalTool();
});

When("I select the tool {string} from available tools", (toolName) => {
	management.addExternalTool(toolName);
});

When("I click on save external tool button", () => {
	management.saveExternalTool();
});

When("I deactivate the tool", () => {
	management.deactivateTool();
});

When("I activate the tool", () => {
	management.activateTool();
});

Then("I see the tool {string} is active in tools table", (toolName) => {
	management.checkActivatedTool(toolName);
});

Then("I see the tool {string} is deactivated in external tools table", (toolName) => {
	management.checkDeactivatedTool(toolName);
});

Then("I see the external tool deletion dialog information text", () => {
	management.seeExternalToolDeletionDialogInfoText();
});

Then("I see the external tool deletion dialog title", () => {
	management.seeExternalToolDeletionDialogTitle();
});

Then("I see the tool {string} in external tools table", (toolname) => {
	management.seeExternalTool(toolname);
});

When("I click on edit button of tool {string}", (toolName) => {
	management.clickOnEditButton(toolName);
});

When("I click on delete button of tool {string}", (toolName) => {
	management.clickDeleteButtonOnTool(toolName);
});

When("I confirm deletion on deletion dialog", () => {
	management.clickOnConfirmInToolUsageDialog();
});

When("I enter {string} in required custom parameter input field {string}", (value, paramName) => {
	management.fillInCustomParameter(paramName, value);
});

When("I enter {string} in optional custom parameter input field {string}", (value, paramName) => {
	management.fillInCustomParameter(paramName, value);
});
