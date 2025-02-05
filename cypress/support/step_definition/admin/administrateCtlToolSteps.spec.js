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

Then("I do not see the tool {string} in external tools table", (toolName) => {
	management.toolIsNotVisibleInExternalToolTable(toolName);
});

When("I click the add external tool button", () => {
	management.clickAddExternalTool();
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

Then("I see the tool {string} in external tools table has no context restriction", (toolName) =>{
	management.seeToolHasNoContextRestriction(toolName);
})

Then("I see the tool {string} in external tools table has context restriction {string}", (toolName, contextRestriction) =>{
	management.seeToolHasContextRestriction(toolName,contextRestriction);
})
