import { defineStep } from "@badeball/cypress-cucumber-preprocessor";

defineStep(
	"I am logging with email {string} and password {string}",
	(username, password) => {
		cy.tryClickOnElement('[data-testid="submit-cloud-site"]');
		cy.writeToInput('[data-testid="username-email"]', username);
		cy.writeToInput('[data-testid="password-email"]', password);
		cy.clickOnElement('[data-testid="submit-login-email"');
	}
);

defineStep("I am changing my password to {string}", (password) => {
	// Skipping welcome page
	cy.clickOnElement("button[id='nextSection']");

	// Skipping email confirmation page
	cy.clickOnElement("button[id='nextSection']");

	// Entering new password
	cy.writeToInput("input[id='password']", password);
	cy.writeToInput("input[id='password_control']", password);
	cy.clickOnElement("button[id='nextSection']");

	// Skipping first steps page
	cy.clickOnElement("[data-testid='btn_schul-cloud_erkunden']");
});

defineStep("I am on the dashboard page", () => {
	cy.location("pathname").should("equal", "/dashboard");
});
