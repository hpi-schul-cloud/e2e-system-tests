import { defineStep } from "@badeball/cypress-cucumber-preprocessor";
import { getUserCredentials } from "../../custom_commands/login.helper";

defineStep("I am logging in with ldap as {string} on {string}", (user, environment) => {
	const env = Cypress.env();
	const [username, password] = getUserCredentials(user);

	cy.tryClickOnElement('[data-testid="submit-ldap-site"]');
	cy.tryClickOnElement("button[class*='btn-toggle-providers']");
	cy.get("div[id='school_chosen']")
		.clickOnElement()
		.contains("li", "School One 0", { matchCase: false })
		.clickOnElement();

	if (environment === "nbc") {
		cy.writeToInput('[data-testid="username-ldap"]', env[username]);
		cy.writeToInput('[data-testid="password-ldap"]', env[password]);
		cy.clickOnElement('[data-testid="submit-login-ldap"');
	} else {
		cy.writeToInput('[data-testid="username-email"]', env[username]);
		cy.writeToInput('[data-testid="password-email"]', env[password]);
		cy.clickOnElement('[data-testid="submit-login-email"');
	}
});

