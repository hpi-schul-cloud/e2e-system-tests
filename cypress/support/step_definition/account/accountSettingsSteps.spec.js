const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Account from "../../pages/account/pageAccount";

const account = new Account();

When("I enter my current password on the login page", () => {
	account.enterCurrentPasswordOnLoginAfterChangingEmailInAccountSettings();
});

When("I enter my updated email", () => {
	account.enterUpdatedEmailAfterSavingInAccountSettings();
});

When("I remember my current email", () => {
	account.rememberCurrentEmailOnUserSettingsPage();
});

When("I enter my previous email", () => {
	account.enterPreviousEmailOnLoginPage();
});

Then("I see my updated email in the account settings after reload", () => {
	account.reloadAccountSettingsAndVerifyUpdatedEmail();
});

When("I enter my current password", () => {
	account.enterCurrentPasswordOnUserSettingsPage();
});

When("I change my email to a new email", () => {
	account.enterNewEmailOnUserSettingsPage();
});

When("I click on the button Save Account Settings", () => {
	account.clickOnSaveAccountSettingsButton();
});

Then("I see the message successful", () => {
	account.seeSuccessMessageOnAccountSettingsPage();
});

When("I click on the checkbox Activate visibility in the central directory", () => {
	account.clickOnCheckboxDirectoryVisibility();
});

When("I click on the button Save Visibility Settings", () => {
	account.clickOnSaveVisibilitySettingsButton();
});
