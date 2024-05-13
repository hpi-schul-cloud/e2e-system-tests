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

When("I click the add external tool button", () => {
	management.clickAddExternalTool();
});

Then("I can select the tool {string} from available tools", (toolName) => {
	management.addExternalTool(toolName);
});

When("I can save external tool configuration", () => {
	management.saveExternalTool();
});

Then("I can deactivate the tool", () => {
	management.deactivateTool();
});

Then("I can activate the tool", () => {
	management.activateTool();
});

Then("I can see {string} is active in tool table", (toolName) => {
	management.checkActivatedTool(toolName);
});

Then("I can see {string} is deactivated in tool table", (toolName) => {
	management.checkDeactivatedTool(toolName);
});

Then("I can fill required parameter", () => {
	management.fillInParameter();
});

Then("I see the external tool deletion dialog information text", () => {
	management.seeExternalToolDeletionDialogInfoText();
});

Then("I see the external tool deletion dialog title", () => {
	management.seeExternalToolDeletionDialogTitle();
});

Then("I see at least one external tool", () => {
	management.seeOneOrMoreExternalTools();
});

Then("I can see the tool {string} in external tools table", (toolname) => {
	management.seeExternalToolStatus(toolname);
});

Then("I can click on edit button to edit the tool {string}", (toolName) => {
	management.clickOnEditButton(toolName);
});

Then("I can click on delete button to delete the tool {string}", (toolName) => {
	management.clickDeleteButtonOnTool(toolName);
});

Then("I can confirm deletion on deletion dialog", () => {
	management.clickOnConfirmInToolUsageDialog();
});
