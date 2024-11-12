const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Management from "../../pages/login_management/pageLoginManagement";

const management = new Management();

Then("I see my assigned Email", () => {
	management.seeEmailOnFisrtLoginSectionTwoPage();
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
	management.seeSuccessMessageAfterChangingPasswordByPassword();
});
