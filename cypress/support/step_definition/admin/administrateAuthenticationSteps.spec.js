import Management from "../../pages/admin/pageAdministration";
const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const management = new Management();

When("I click on authentication panel", () => {
	management.clickOnAuthenticationPanel();
});

Then("I see a systems table", () => {
	management.seeSystemTable();
});

Then("I see system {string} of type {string} in the system table", (systemName, systemType) => {
	management.seeSystemInTable(systemName, systemType);
});

When("I click on the edit button of system {string}", (systemName) => {
	management.clickEditButtonOfSystem(systemName);
});

Then("I see the provisioning options page", () => {
	management.seeProvisioningOptionsPage();
});

Then("I see 4 checkboxes with assigned default values", () => {
	management.seeCheckboxesWithDefaultValues();
});

When("I check all checkboxes", () => {
	management.checkAllBoxes();
});

When("I click the cancel button on the provisioning options page", () => {
	management.clickOnProvisioningOptionsCancelButton();
});

When("I click the save button on the provisioning options page", () => {
	management.clickOnProvisioningOptionsSaveButton();
});

Then("I see all 4 checkboxes are checked", () => {
	management.seeAllCheckboxesAreChecked();
});

When("I set the checkboxes to default values", () => {
	management.resetCheckboxValues();
});

When("I uncheck all checkboxes", () => {
	management.uncheckAllBoxes();
});

Then("I see a warning dialog", () => {
	management.seeDialog();
});

When("I confirm the dialog", () => {
	management.confirmDialog();
});

Then("I see all 4 checkboxes are unchecked", () => {
	management.seeAllCheckboxesAreUnchecked();
});
