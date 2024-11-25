const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Account from "../../pages/account/pageAccount";

const account = new Account();

When("I enter my current password", () => {
	account.enterCurrentPasswordOnUserSettingPage();
});

When("I change my email to a new email", () => {
	account.enterNewEmailOnUserSettingsPage();
});

When("I click on the button Save Account Settings", () => {
	account.clickOnSaveAccountSettingButton();
});

Then("I see the message successful", () => {
	account.seeSuccessMessageOnAccountSettingPage();
});
