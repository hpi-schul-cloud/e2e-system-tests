import { defineStep } from "@badeball/cypress-cucumber-preprocessor";

defineStep("I am opening the settings", () => {
	cy.visit("/account");
	cy.location("pathname").should("equal", "/account");

	cy.pause();
});
