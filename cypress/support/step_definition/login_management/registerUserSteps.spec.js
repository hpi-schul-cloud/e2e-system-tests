import { defineStep } from "@badeball/cypress-cucumber-preprocessor";

defineStep("Register {string} with link", (email) => {
	cy.contains("tr", email).should("be.visible").find("svg").first().click();
	cy.clickOnElement("[data-test-id='context-menu-open']");
	// cy.clickOnElement("[data-testid='registration_link']");
});
