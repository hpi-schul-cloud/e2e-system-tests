const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Management from "../../pages/admin/pageAdministration";
import { defineStep } from "@badeball/cypress-cucumber-preprocessor";

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

When("I navigate to new school admin page via sub menu", () => {
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

defineStep(
	"Created teacher {string} {string} with email {string}",
	(firstname, lastname, email) => {
		cy.visit("/administration/teachers");
		cy.writeToInput("input[data-testid='searchbar']", firstname);
		cy.contains("tr", email).should("not.exist");
		cy.visit("/administration/teachers/new");
		cy.location("pathname").should("equal", "/administration/teachers/new");
		cy.writeToInput("[data-testid='input_create-user_firstname']", firstname);
		cy.writeToInput("[data-testid='input_create-user_lastname']", lastname);
		cy.writeToInput("[data-testid='input_create-user_email']", email);
		cy.clickOnElement("[data-testid='button_create-user_submit']");
		cy.location("pathname").should("equal", "/administration/teachers");
	}
);

defineStep(
	"Going to teacher edit page for {string} with email {string}",
	(firstname, email) => {
		cy.clearOutInput("input[data-testid='searchbar']");
		cy.writeToInput("input[data-testid='searchbar']", firstname);
		cy.contains("tr", email)
			.find("[data-testid='edit_teacher_button']")
			.clickOnElement();
	}
);
