import { defineStep } from "@badeball/cypress-cucumber-preprocessor";
import { getUserCredentials } from "../../custom_commands/login.helper";
const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Management from "../../pages/login_management/pageLoginManagement";

const management = new Management();

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

defineStep(
	"I am logging with email {string} and password {string}",
	(username, password) => {
		cy.tryClickOnElement('[data-testid="submit-cloud-site"]');
		cy.writeToInput('[data-testid="username-email"]', username);
		cy.writeToInput('[data-testid="password-email"]', password);
		cy.clickOnElement('[data-testid="submit-login-email"');
	}
);

defineStep("I am changing my password back for {string}", (user) => {
	const env = Cypress.env();
	const [, password] = getUserCredentials(user);

	cy.writeToInput("input[data-testid='firstlogin_password']", env[password]);
	cy.writeToInput("input[data-testid='firstlogin_password_control']", env[password]);
	cy.clickOnElement("button[id='nextSection']");
});

defineStep("I am on the dashboard page", () => {
	cy.location("pathname").should("equal", "/dashboard");
});
