import { defineStep } from "@badeball/cypress-cucumber-preprocessor";

defineStep("Changing the name to {string} {string}", (firstname, lastname) => {
	cy.clearOutInput("input[id='firstName']");
	cy.writeToInput("input[id='firstName']", firstname);
	cy.clearOutInput("input[id='lastName']");
	cy.writeToInput("input[id='lastName']", lastname);
});

defineStep("Changing the email to {string}", (email) => {
	cy.clearOutInput("input[id='email']");
	cy.writeToInput("input[id='email']", email);
});

defineStep("Changing the birth date to {string}", (birthDate) => {
	cy.clearOutInput("[data-testid='input_create-student_birthdate']");
	cy.writeToInput("[data-testid='input_create-student_birthdate']", birthDate);
});

defineStep("I am able to set a new password", () => {
	cy.get("button[class*='btn-pw']").should("be.enabled");
});

defineStep("I can save the changes", () => {
	cy.clickOnElement("[data-testid='button_save_user']");
});

defineStep("Changing the password to {string}", (password) => {
	cy.clickOnElement("button[class*='btn-pw']");
	cy.clearOutInput("input[id='change_password']");
	cy.writeToInput("input[id='change_password']", password);
	cy.clickOnElement("[data-testid='submit-btn-change-password-modal']");
});

defineStep("Deleting the user", () => {
	cy.clickOnElement("[data-testid='button_delete_user']");
	cy.clickOnElement("[data-testid='submit-btn-delete-user-modal']");
});

defineStep("{string} with email {string} was deleted", (firstname, email) => {
	cy.clearOutInput("input[data-testid='searchbar']");
	cy.writeToInput("input[data-testid='searchbar']", firstname);
	cy.contains("tr", email).should("not.exist");
});
