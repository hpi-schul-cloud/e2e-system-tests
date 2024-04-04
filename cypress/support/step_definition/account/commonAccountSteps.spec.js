const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Account from "../../pages/account/pageAccount";

const account = new Account();

When("I go to my account settings", () => {
	account.navigateToAccountSettingsSection();
});

Then("I see my email is editable", () => {
	account.verifyEmailEditable(true);
});

Then("I see my email is not editable", () => {
	account.verifyEmailEditable(false);
});
