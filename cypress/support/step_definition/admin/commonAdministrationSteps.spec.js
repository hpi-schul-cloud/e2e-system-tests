const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Management from "../../pages/admin/pageAdministration";

const management = new Management();

Then("I click on the button Next to proceed to the registration pin step", () => {
	management.clickOnNextToProceedToRegistrationPinPage();
});

Then(
	"I click on the button Send and Get Started to successfully complete the registration process",
	() => {
		management.clickOnSendAndGetStartedOnRegistration();
	}
);

Then(
	"I retrieve the registration pin to enter it into the form for {string}",
	(environment) => {
		management.retrieveAndEnterRegistrationPinViaApi(environment);
	}
);

When("I request a new registration pin", () => {
	management.requestRegistrationPin();
});

When("I accept the privacy and terms of use consents", () => {
	management.acceptingConsentOnRegistrationProcess();
});

When("I click on the button Next to proceed to the next step", () => {
	management.clickOnNextOnRegistrationPage();
});

When("I choose the language for the registration process", () => {
	management.chooseLanguageOnRegistrationProcess();
});

Then("I visit to the generated registration link", () => {
	management.openAndVisitToRegistrationPage();
});

Then("I see my first name {string}", (firstName) => {
	management.seeFirstNameOnRegistrationPage(firstName);
});

Then("I see my last name {string}", (lastName) => {
	management.seeLastNameOnRegistrationPage(lastName);
});

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
