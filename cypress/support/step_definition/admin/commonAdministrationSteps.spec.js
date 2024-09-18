const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Management from "../../pages/admin/pageAdministration";

const management = new Management();

When("I click the toggle switch to enable student visibility for teachers", () => {
	management.enableStudentVisibilityForTeacher();
});

Then("I disable the video conference", () => {
	management.disableTeamsVideoConferenceByAdmin();
});

Then("I click on button Save admin settings", () => {
	management.clickOnAdminSettingsSave();
});

Then("I enable the video conference", () => {
	management.enableTeamsVideoConferenceByAdmin();
});

When("I click on sub menu school and see new admin page", () => {
	management.clickOnSchoolAdministrationInSideMenu();
});

When("I click on administration in menu", () => {
	management.openAdministrationInMenu();
});

When("I click on general settings panel", () => {
	management.clickGeneralSettingsPanel();
});

When("I click on account migration panel", () => {
	management.clickAccountMigrationPanel();
});

When("I click on external tools panel", () => {
	management.clickExternalToolsPanel();
});

When("I click save general settings button", () => {
	management.clickSaveGeneralSettingsButton();
});

When("I go to {string} administration", (role) => {
	management.navigateToUserAdministration(role);
});

When("I go to team administration", () => {
	management.navigateToTeamAdministration();
});

When("I go to legacy course administration", () => {
	management.navigateToLegacyCourseAdministration();
});

When("I click on FAB", () => {
	management.clickOnFAB();
});

When("I click on Add User in opened FAB for {string}", (role) => {
	management.clickOnAddUserInFAB(role);
});
