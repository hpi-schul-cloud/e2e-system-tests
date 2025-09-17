const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Management from "../../pages/admin/pageAdministration";

const management = new Management();

Then(
	"I see the same date of birth for student in the user table which is assigned while creating the student user",
	() => {
		management.seeTheAssignedBirthDateInUserTable();
	}
);

Then("I logout from the application", () => {
	management.logoutFromApplication();
});
Then("I see the page download access data with info table", () => {
	management.seeTheLastStepPageSummaryManualRegistration();
});

When("I enter the email assigned during user creation", () => {
	management.enterEmailOnFirstLogin();
});

When("I enter the password", () => {
	management.enterPasswordOnFirstLogin();
});

When("I click on the button Login", () => {
	management.clickOnLoginButtonForFirstLogin();
});

Then("I see the first login page section 1", () => {
	management.seeSectionOneFirstLoginPage();
});

When("I click on the button Next in section 1", () => {
	management.clickOnNextButtonOnFirstLoginSectionOne();
});

Then("I see the section 2", () => {
	management.seeSectionTwoFirstLoginPage();
});

When("I click on the button Next in section 2", () => {
	management.clickOnNextButtonOnFirstLoginSectionTwo();
});

Then("I see the section 3", () => {
	management.seeSectionThreeFirstLoginPage();
});

Then("I re enter the new password", () => {
	management.reEnterPasswordOnManualRegistration();
});

When("I click on the button Next to proceed", () => {
	management.clickOnNextButtonOnFirstLoginSectionThree();
});

Then("I set a new password", () => {
	management.setNewPasswordOnFirstLogin();
});

Then("I click on the button Get started now in section 4", () => {
	management.clickOnStartImmediateButtonOnFirstLoginSectionFour();
});

Then("I see the dashboard", () => {
	management.seeDashboardAfterFirstLogin();
});

When("I select student {string} with email {string}", (firstname, userEmail) => {
	management.selectStudentOnStudentOverview(firstname, userEmail);
});

When("I click on the button Actions", () => {
	management.clickOnActionsOnStudentOverview();
});

When("I click on the option Manual Registration", () => {
	management.clickOnManualRegistrationOption();
});

Then("I see the page Manual Registration", () => {
	management.seeManualRegistrationPage();
});

When("I clear the default assigned password", () => {
	management.clearDefaultPasswordInManualRegistration();
});

Then("I enter the initial password", () => {
	management.enterPasswordOnManualRegistration();
});

When("I click on the button Apply data", () => {
	management.clickOnApplyDataButton();
});

When("I click on the checkbox to confirm the consent", () => {
	management.clickOnConsentCheckBox();
});
When("I click on the button Register users", () => {
	management.clickOnRegisterUserButton();
});

When("I click on the button Abbrechen", () => {
	management.clickOnCancelButton();
});

When("I click on the button Trotzdem abbrechen on the confirmation modal", () => {
	management.clickOnCancelRegardlessOnModalButton();
});

Then("I am on the students management page", () => {
	management.beingOnStudentManagementOverview();
});

When("I navigate to the students management page", () => {
	management.navigateToStudentManagementOverview();
});
