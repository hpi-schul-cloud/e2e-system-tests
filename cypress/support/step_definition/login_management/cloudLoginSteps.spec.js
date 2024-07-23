import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { getUserCredentials } from "../../custom_commands/login.helper";

Given("I am on the login page on {string}", (environment) => {
	cy.visitPage(environment, "/login");
});

When("I am logging in as {string}", (user) => {
	const env = Cypress.env();
	const [username, password] = getUserCredentials(user);

	cy.tryClickOnElement('[data-testid="submit-cloud-site"]');
	cy.writeToInput('[data-testid="username-email"]', env[username]);
	cy.writeToInput('[data-testid="password-email"]', env[password]);
	cy.clickOnElement('[data-testid="submit-login-email"');
});

Then("I will be redirected to the dashboard", () => {
	cy.url().should("contain", "/dashboard");
});

Then("I will be able to logout", () => {
	cy.clickOnElement('[data-testid="initials"');
	cy.clickOnElement('[data-testid="logout"');
});
