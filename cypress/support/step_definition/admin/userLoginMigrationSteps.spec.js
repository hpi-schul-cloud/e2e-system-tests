const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import UserLoginMigration from "../../pages/admin/pageUserLoginMigration";

const userLoginMigration = new UserLoginMigration();

When("the school of the admin has an official school number", () => {
	userLoginMigration.prepareSchoolWithOfficialSchoolNumber();
});

Then("I see no user login migration and the original school features via API", () => {
	userLoginMigration.verifyNoMigration();
});

Then("I see a running user login migration which is {string} via API", (mandatory) => {
	userLoginMigration.verifyRunningMigration(mandatory === "mandatory");
});

When("I remember the user login migration", () => {
	userLoginMigration.rememberMigrationId();
});

Then("I see a new user login migration via API", () => {
	userLoginMigration.verifyNewMigrationWasStarted();
});

When("I watch the user login migration requests", () => {
	userLoginMigration.interceptMigrationRequests();
});

Then("the user login migration request {string} was successful", (action) => {
	userLoginMigration.waitForMigrationRequest(action);
});

When("I uncheck the migration mandatory switch", () => {
	userLoginMigration.uncheckMigrationMandatorySwitch();
});

When("I reload the page and open the account migration panel", () => {
	userLoginMigration.reloadAndOpenMigrationPanel();
});
