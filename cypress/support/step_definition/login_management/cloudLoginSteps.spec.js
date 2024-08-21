import { defineStep } from "@badeball/cypress-cucumber-preprocessor";
import { getUserCredentials } from "../../custom_commands/login.helper";

defineStep("I am logged in as {string} on {string}", (user, environment) => {
	cy.apiLogin(user, environment);
});

defineStep("I am on the login page on {string}", (environment) => {
	cy.clearCookies();
	cy.visitPage(environment, "/login");
});

defineStep("I am logging in as {string}", (user) => {
	const env = Cypress.env();
	const [username, password] = getUserCredentials(user);

	cy.tryClickOnElement('[data-testid="submit-cloud-site"]');
	cy.tryClickOnElement("button[class*='btn-hide-providers']");
	cy.writeToInput('[data-testid="username-email"]', env[username]);
	cy.writeToInput('[data-testid="password-email"]', env[password]);
	cy.clickOnElement('[data-testid="submit-login-email"');
});

defineStep("I will be redirected to the dashboard", () => {
	cy.url().should("contain", "/dashboard");
});

defineStep("I will be able to logout", () => {
	cy.clickOnElement('[data-testid="initials"');
	cy.clickOnElement('[data-testid="logout"');
});
