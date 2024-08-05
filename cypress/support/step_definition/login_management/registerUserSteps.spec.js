import { defineStep } from "@badeball/cypress-cucumber-preprocessor";
import { getPageUrl } from "../../custom_commands/input.utils";

defineStep(
	"Created student {string} {string} with email {string} and send link",
	(firstname, lastname, email) => {
		cy.pause();

		const birthDate = new Date();

		birthDate.setFullYear(birthDate.getFullYear() - 17);

		cy.visit("/administration/students/new");
		cy.location("pathname").should("equal", "/administration/students/new");
		cy.writeToInput("[data-testid='input_create-user_firstname']", firstname);
		cy.writeToInput("[data-testid='input_create-user_lastname']", lastname);
		cy.writeToInput("[data-testid='input_create-user_email']", email);
		cy.writeToInput(
			"[data-testid='input_create-student_birthdate']",
			birthDate.toISOString().split("T")[0],
			100
		);
		cy.clickOnElement("[data-testid='input_create-student_send-registration'] label");
		cy.clickOnElement("[data-testid='button_create-user_submit']");
		cy.location("pathname").should("equal", "/administration/students");
		cy.pause();
	}
);

defineStep("Register {string} with link", (email) => {
	cy.contains("tr", email).should("be.visible").find("svg").first().click();
	cy.clickOnElement("[data-test-id='context-menu-open']");
	// cy.clickOnElement("[data-testid='registration_link']");
});
