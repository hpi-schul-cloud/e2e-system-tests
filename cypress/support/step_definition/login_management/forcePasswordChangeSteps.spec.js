import { defineStep } from "@badeball/cypress-cucumber-preprocessor";

defineStep("Clear session", () => {
	cy.clearCookies();
	cy.clearLocalStorage();
});

defineStep("Registering teacher {string} {string}", (username, password) => {});

defineStep("{string} {string} force password change", (username, password) => {
	cy.visit("/login");
	cy.location("pathname").should("equal", "/login");
	cy.tryClickOnElement('[data-testid="submit-cloud-site"]');
	cy.writeToInput('[data-testid="username-email"]', username);
	cy.writeToInput('[data-testid="password-email"]', password);
	cy.clickOnElement('[data-testid="submit-login-email"');

	// Step 1
	cy.clickOnElement("button[id='nextSection']");
	cy.clickOnElement("button[id='nextSection']");
	cy.writeToInput("input[id='password']", "Schulcloud1qa!");
	cy.writeToInput("input[id='password_control']", "Schulcloud1qa!");
	cy.clickOnElement("button[id='nextSection']");
	cy.clickOnElement("[data-testid='btn_schul-cloud_erkunden']");
	cy.location("pathname").should("equal", "/dashboard");
});
