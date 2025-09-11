const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Management from "../../pages/admin/pageAdministration";

const management = new Management();

//Scenario: Adding a new user

When("I visit the login page", () => {
	management.visitUrlForFirstLogin();
});

When(
	"I fill out the user creation form for {string} {string} with email {string}",
	(forename, surname, email) => {
		management.fillUserCreationForm(forename, surname, email);
	}
);

When("I click on add button to add {string}", (role) => {
	management.clickOnAddButton(role);
});

Then("I can see the user with email {string} in the table", (email) => {
	management.userIsVisibleInTable(email);
});

//Scenario: Editing a new user

When("I enter {string} email {string} in search input field", (role, keyword) => {
	management.enterNameForSearch(role, keyword);
});

When("I change username to {string} {string}", (firstname, surname) => {
	management.changeUsername(firstname, surname);
});

When("I change email to {string}", (newEmail) => {
	management.changeEmail(newEmail);
});

When("I click save changes button", () => {
	management.clickSaveButton();
});

// Scenario: Deleting an user

When("I click edit {string} button for {string}", (role, email) => {
	management.clickEditUserButton(role, email);
});

When(
	"I click delete user button to delete user with last name '<user_last_name>'lastname {string}",
	(surname) => {
		management.deleteUser(surname);
	}
);

When("I click on delete button in pop up", () => {
	management.clickUserDeleteButtonInModal();
});

Then("I can not see user {string} in the table", (email) => {
	management.userIsNotVisibleInTable(email);
});

When("I click delete user button", () => {
	management.clickDeleteButton();
});
When("I enter the initial generated password", () => {
	management.enterInitialPasswordAsStudentAfterRegistration();
});

Then("I click on the button Generate Personal Registration Link for student", () => {
	management.generateRegistrationLinkForStudent();
});

Then("I click on the button Next to proceed to the age selection", () => {
	management.clickOnNextForAgeSelection();
});

When("I select the age over 16 years for registration", () => {
	management.selectAgeOnRegistrationProcess();
});

Then(
	"I click on the button Next to proceed to the personal data information page",
	() => {
		management.clickOnNextToProceedToPersonalRegistrationData();
	}
);

Then("I see the page user data summary", () => {
	management.seeUserSummaryOnRegistrationFinalPage();
});

When("I click on the button Next on the section 1", () => {
	management.clickOnNextOnSectionOneTeacherFirstLogin();
});
Then("I see my email", () => {
	management.seeEmailOnFirstLoginSectionTwoPage();
});

When("I click on the button Next on the section 2", () => {
	management.clickOnNextOnSectionTwoTeacherFirstLogin();
});
When("I click on the button Get started right away on the section 3", () => {
	management.clickOnGetStartedOnSectionThreeTeacherFirstLogin();
});

When("I enter the set password", () => {
	management.enterNewSetPasswordAsTeacher();
});

Then("I see the summary page", () => {
	management.seeSummaryOnTeacherRegistration();
});

Then("I click on the button Next to proceed to next step", () => {
	management.clickOnNextButtonOnTeacherRegistration();
});
Then(
	"I click again on the button Next to proceed to the personal data information page",
	() => {
		management.clickOnNextButtonOnTeacherRegistration();
	}
);
Then("I set a new password on personal data page", () => {
	management.setNewPasswordAsTeacherOnRegistration();
});

Then("I click on the button Generate Personal Registration Link for teacher", () => {
	management.generateRegistrationLinkForTeacher();
});

Then("I see my assigned Email", () => {
	management.seeEmailOnFirstLoginSectionTwoPage();
});

When("I click on the button Change password", () => {
	management.clickOnChanagePasswordByAdmin();
});
Then("I see the pop-up window", () => {
	management.seeChangePasswordDialogForAdmin();
});
Then("I enter a new password in the pop-up window", () => {
	management.enterNewPasswordForUserByAdmin();
});
Then("I click on the button Save", () => {
	management.clickOnSaveAfterChangingPasswordByAdmin();
});
Then("I see the success message", () => {
	management.seeSuccessMessageAfterChangingPasswordByAdmin();
});

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
