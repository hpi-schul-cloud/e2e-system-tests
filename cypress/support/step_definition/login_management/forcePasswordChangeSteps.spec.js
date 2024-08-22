import { defineStep } from "@badeball/cypress-cucumber-preprocessor";
import { getUserCredentials } from "../../custom_commands/login.helper";

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
