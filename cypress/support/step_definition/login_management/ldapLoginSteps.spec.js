import { defineStep } from "@badeball/cypress-cucumber-preprocessor";
import { getUserCredentials } from "../../custom_commands/login.helper";

defineStep("I am logging in with ldap as {string} on {string}", (user, environment) => {
	const env = Cypress.env();
	const [username, password] = getUserCredentials(user);

	if( environment === "nbc") {
		cy.tryClickOnElement('[data-testid="submit-ldap-site"]');
		cy.writeToInput('[data-testid="username-ldap"]', env[username]);
		cy.writeToInput('[data-testid="password-ldap"]', env[password]);
	} else {
		cy.writeToInput('[data-testid="username-email"]', env[username]);
		cy.writeToInput('[data-testid="password-email"]', env[password]);
	}

	cy.tryClickOnElement("button[class*='btn-toggle-providers']");
	cy.get("div[id='school_chosen']")
		.clickOnElement()
		.contains("li", "School One 0", { matchCase: false })
		.clickOnElement();

	if( environment === "nbc") {
		cy.clickOnElement('[data-testid="submit-login-ldap"');
	} else {
		cy.clickOnElement('[data-testid="submit-login-email"');
	}
});

defineStep("I will be able to logout with redirect on {string}", (environment) => {
	const env = Cypress.env();
	const environmentUpperCased = environment.toUpperCase();
	const url = env[environmentUpperCased].replace("https://", "https://oauth-");

	cy.visit(`${url}/oauth2/sessions/logout`);
});
