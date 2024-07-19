import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { getUserCredentials } from "../../custom_commands/login.helper";

Given("I am logged in as {string} on {string}", (user, environment) => {
	const env = Cypress.env();
	const environmentUpperCased = environment.toUpperCase();
	const link = Cypress.config("baseUrl", env[environmentUpperCased]);
	const [username, password] = getUserCredentials(user);

	cy.visit(`${link}/login`);
	cy.tryClickOnElement('[data-testid="submit-cloud-site"]');
	cy.writeToInput('[data-testid="username-email"]', env[username]);
	cy.writeToInput('[data-testid="password-email"]', env[password]);
	cy.clickOnElement('[data-testid="submit-login-email"');
	cy.url().should("equal", `${link}/dashboard`);
});

And("Going to user management", () => {
	cy.clickOnElement();
	cy.url().should("contain", "account");
});

Given("I am on the login page on {string}", (environment) => {
	const env = Cypress.env();
	const environmentUpperCased = environment.toUpperCase();
	const link = Cypress.config("baseUrl", env[environmentUpperCased]);

	cy.visit(`${link}/login`);
	cy.url().should("equal", `${link}/login`);
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

Then("I will be abel to logout", () => {
	cy.clickOnElement('[data-testid="initials"');
	cy.clickOnElement('[data-testid="logout"');
});
