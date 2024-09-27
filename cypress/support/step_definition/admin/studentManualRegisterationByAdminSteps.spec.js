import { defineStep } from "@badeball/cypress-cucumber-preprocessor";
const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Management from "../../pages/admin/pageAdministration";

const management = new Management();

Then("I logout from the application", () => {
	management.logoutFromApplication();
});
Then("I see the page download access data with info table", () => {
	management.seeTheLastStepPageSummaryManualRegistration();
});

When("I visit the url {string}", (namespace) => {
	management.visitUrlForFirstLogin(namespace);
});

When("I enter the email generated during user creation", () => {
	management.enterEmailOnFirstLogin();
});

When("I enter the password {string}", (userPassword) => {
	management.enterPasswordOnFirstLogin(userPassword);
});

When("I click on the button Login", () => {
	management.clickOnLoginButtonForFirstLogin();
});

Then("I see the first login page section 1", () => {
	management.seeSectionOneFirstLoginPageOndBC();
});

When("I click on the button Next in section 1", () => {
	management.clickOnNextButtonOnFirstLoginSectionOne();
});

Then("I see the section 2", () => {
	management.seeSectionTwoFirstLoginPageOndBC();
});

When("I click on the button Next in section 2", () => {
	management.clickOnNextButtonOnFirstLoginSectionTwo();
});

Then("I see the section 3", () => {
	management.seeSectionThreeFirstLoginPageOndBC();
});

Then("I re enter the new password {string}", (reEnterPassword) => {
	management.reEnterPasswordOnManualRegistration(reEnterPassword);
});

When("I click on the button Next in section 3", () => {
	management.clickOnNextButtonOnFirstLoginSectionThree();
});

Then("I enter new password {string}", (setNewPassword) => {
	management.setNewPasswordOnFirstLogin(setNewPassword);
});

Then("I see the section 4", () => {
	management.seeSectionFourFirstLoginPageOndBC();
});

Then("I click on the button Start immediately in section 4", () => {
	management.clickOnStartImmediateButtonOnFirstLoginSectionFourse();
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

Then("I enter the initial password {string}", (manual_password) => {
	management.enterPasswordOnManualRegistration(manual_password);
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
	management.clickOnCancelRegarlessOnModalButton();
});

Then("I am on the students management page", () => {
	management.beingOnStudentManagementOverview();
});

When("I navigate to the students management page", () => {
	management.navigateToStudentManagementOverview();
});

defineStep("Student {string} with email {string} was created", (firstname, email) => {
	cy.clearOutInput("input[data-testid='searchbar']");
	cy.writeToInput("input[data-testid='searchbar']", firstname);
	cy.contains("tr", email)
		.find("[data-testid='edit_student_button']")
		.should("be.visible");
});

defineStep("Changing parents and students consent", () => {
	// Only on DBC can we modify the consent
	if (Cypress.config().baseUrl.includes("dbc")) {
		cy.clickOnElement("button[id='edit-consent']");

		cy.get("input[name='parent_form']").first().clickOnElement();
		cy.clickOnElement("input[name='parent_privacyConsent']");
		cy.clickOnElement("input[name='parent_termsOfUseConsent']");

		cy.get("input[name='student_form']").first().clickOnElement();
		cy.clickOnElement("input[name='student_privacyConsent']");
		cy.clickOnElement("input[name='student_termsOfUseConsent']");
	}
});
