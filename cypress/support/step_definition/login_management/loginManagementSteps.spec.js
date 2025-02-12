const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Login_Management from "../../pages/login_management/pageLoginManagement";

const loginManagement = new Login_Management();

Then("I see the forgot password dialog is visible", () => {
	loginManagement.showUpElementsOnDialog();
});

Then("I see the username label is visible", () => {
	loginManagement.checkUsernameLabel();
});

Then("I see the email input field is visible", () => {
	loginManagement.checkEmailInput();
});

Then("I see the info message is visible", () => {
	loginManagement.checkInfoMessage();
});

Then("I see the submit button is visible", () => {
	loginManagement.checkSubmitButton();
});

Then("I see the cancel button is visible", () => {
	loginManagement.checkCancelButton();
});

Then("I see the title of the dialog is visible", () => {
	loginManagement.checkTitleOfDialog();
});

Then("I see the Reset Password dialog", () => {
	loginManagement.showUpElementsOnDialog();
});

When("I clear email section and submit the request", () => {
	loginManagement.submitRequestWithoutEmail();
});

Then("I still see the email input box that request is not submitted", () => {
	loginManagement.seeEmailInputOnSubmittingRequestWithoutEnteringEmail();
});

When("I enter invalid email", () => {
	loginManagement.enterInvalidEmailOrUsername(true);
});

When("I enter invalid username", () => {
	loginManagement.enterInvalidEmailOrUsername(false);
});

Then("I enter invalid password", () => {
	loginManagement.enterInvalidPassword();
});

Then("I see error message", () => {
	loginManagement.assertErrorMessageDisplay();
});

Then("I see form validation message", () => {
	loginManagement.assertFormValidationMessageDisplay();
});

Then("I see email field is visible and empty", () => {
	loginManagement.assertEmailFieldIsVisibleAndEmpty();
});

When("I click button Submit", () => {
	loginManagement.clickOnSubmitButton();
});

Then("I see password field is visible and empty", () => {
	loginManagement.assertPasswordFieldIsVisibleAndEmpty();
});

When("I enter email", () => {
	loginManagement.enterEmail();
});

When("I enter password", () => {
	loginManagement.enterPassword();
});

Then("I see current password field is visible and empty", () => {
	loginManagement.assertCurrentPwdFieldVisibleAndEmpty();
});

Then("I see new and repeat password field is visible and empty", () => {
	loginManagement.assertNewAndRepeatPasswordFieldVisibleAndEmpty();
});

When("I enter current password", () => {
	loginManagement.enterCurrentPassword();
});

When("I enter new password and repeat it in the next field in user settings", () => {
	loginManagement.enterNewPasswordInAllFields();
});

When("I click on save button in user settings", () => {
	loginManagement.clickOnSubmitButtonInUserSettings();
});

Then("I see success message", () => {
	loginManagement.assertSuccessMessageIsDisplay();
});

When("I click on the initials", () => {
	loginManagement.clickOnInitials();
});

When("I logout", () => {
	loginManagement.clickOnLogoutBtn();
});

When("I enter new password", () => {
	loginManagement.enterNewPassword();
});

When("I enter new password in user setting", () => {
	loginManagement.enterNewPasswordInUserSettings();
});

When("I enter old password and repeat it in the next field in user settings", () => {
	loginManagement.enterOldPasswordInUserSettings();
});

When("I wait for 15 seconds", () => {
	loginManagement.waitFor15Seconds();
});

When("I click on the option button for the login via LDAP", () => {
	loginManagement.clickOnLdapLoginOption();
});

When("I select the LDAP school {string}", (ldapSchoolName) => {
	loginManagement.selectLdapSchoolOnLoginPage(ldapSchoolName);
});

When("I enter LDAP user name for {string} on {string}", (user, namespace) => {
	loginManagement.enterLdapUserName(user, namespace);
});

When("I enter LDAP password {string} on {string}", (user, namespace) => {
	loginManagement.enterLdapUserPassword(user, namespace);
});

When("I click on the button LDAP login on {string}", (namespace) => {
	loginManagement.clickOnLdapLoginButton(namespace);
});
