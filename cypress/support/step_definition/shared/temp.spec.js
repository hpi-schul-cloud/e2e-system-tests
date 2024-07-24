import { defineStep as And, defineStep } from "@badeball/cypress-cucumber-preprocessor";
import { getUserCredentials } from "../../custom_commands/login.helper";
import { getPageUrl } from "../../custom_commands/input.utils";

defineStep(
	"Created teacher {string} {string} with email {string}",
	(firstname, lastname, email) => {
		cy.visit("/administration/teachers/new");
		cy.location("pathname").should("equal", "/administration/teachers/new");
		cy.writeToInput("[data-testid='input_create-user_firstname']", firstname);
		cy.writeToInput("[data-testid='input_create-user_lastname']", lastname);
		cy.writeToInput("[data-testid='input_create-user_email']", email);
		cy.clickOnElement("[data-testid='button_create-user_submit']");
	}
);

defineStep(
	"Going to teacher edit page for {string} with email {string}",
	(firstname, email) => {
		cy.visit("/administration/teachers");
		cy.location("pathname").should("equal", "/administration/teachers");
		cy.clearOutInput("input[data-testid='searchbar']");
		cy.writeToInput("input[data-testid='searchbar']", firstname);
		cy.contains("tr", email)
			.find("[data-testid='edit_teacher_button']")
			.should("be.visible")
			.click();
	}
);

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

defineStep("I can save the changes", () => {
	cy.clickOnElement("[data-testid='button_save_user']");
});

defineStep(
	"Going to student edit page for {string} with email {string} on {string}",
	(firstname, email, environment) => {
		cy.visitPage(environment, "/administration/students");
		cy.clearOutInput("input[data-testid='searchbar']");
		cy.writeToInput("input[data-testid='searchbar']", firstname);
		cy.contains("tr", email)
			.find("[data-testid='edit_student_button']")
			.should("be.visible")
			.click();
	}
);

And(
	"Created student {string} {string} with email {string} on {string}",
	(firstname, lastname, email, environment) => {
		// ############## creating a student ##############
		cy.visitPage(environment, "/administration/students/new");
		cy.writeToInput("[data-testid='input_create-user_firstname']", firstname);
		cy.writeToInput("[data-testid='input_create-user_lastname']", lastname);
		cy.writeToInput("[data-testid='input_create-user_email']", email);
		cy.writeToInput("[data-testid='input_create-student_birthdate']", "2010-01-01");
		cy.pause();
		cy.clickOnElement("[data-testid='button_create-user_submit']");

		// ############## registering a student ##############
		cy.visitPage(environment, "/administration/students");
		cy.clearOutInput("input[data-testid='searchbar']");
		cy.writeToInput("input[data-testid='searchbar']", email);
		cy.contains("tr", email).find("svg").first().should("be.visible").click();
		cy.clickOnElement("[data-test-id='context-menu-open']");
		cy.clickOnElement("[data-testid='consent_action");
		cy.clearOutInput("input[data-testid='password-input']");
		cy.clickOnElement("[data-testid='button-next");
		cy.clickOnElement("div[id='consent-checkbox']");
		cy.clickOnElement("[data-testid='button-next-2");
		// cy.find(".button")
		// 	.contains("Zugangsdaten Herunterladen")
		// 	.should("be.visible")
		// 	.click();

		cy.pause();

		cy.visitPage(environment, "/administration/students");

		// ############## navigating to student edit page ##############
		cy.clearOutInput("input[data-testid='searchbar']");
		cy.writeToInput("input[data-testid='searchbar']", "john");
		cy.contains("tr", email)
			.find("[data-testid='edit_student_button']")
			.should("be.visible")
			.click();

		cy.pause();

		// ############## editing password ##############
		cy.clickOnElement("button[class*='btn-pw']");
		cy.clearOutInput("input[id='change_password']");
		cy.writeToInput("input[id='change_password']", "Schulcloud1!2");
		cy.clickOnElement("[data-testid='submit-btn-change-password-modal']");

		cy.pause();

		// ############## editing name and email ##############
		cy.clearOutInput("input[id='firstName']");
		cy.writeToInput("input[id='firstName']", "Jane");
		cy.clearOutInput("input[id='lastName']");
		cy.writeToInput("input[id='lastName']", "Doe");
		cy.clearOutInput("input[id='email']");
		cy.writeToInput("input[id='email']", "jane.doe@mail.tld");
		cy.clickOnElement("[data-testid='button_save_user']");

		cy.visitPage(environment, "/administration/students");

		// ############## navigating to student edit page ##############
		cy.clearOutInput("input[data-testid='searchbar']");
		cy.writeToInput("input[data-testid='searchbar']", "jane");
		cy.contains("tr", "jane.doe@mail.tld")
			.find("[data-testid='edit_student_button']")
			.should("be.visible")
			.click();

		cy.pause();

		// ############## undo name and email ##############
		cy.clearOutInput("input[id='firstName']");
		cy.writeToInput("input[id='firstName']", firstname);
		cy.clearOutInput("input[id='lastName']");
		cy.writeToInput("input[id='lastName']", lastname);
		cy.clearOutInput("input[id='email']");
		cy.writeToInput("input[id='email']", email);
		cy.clickOnElement("[data-testid='button_save_user']");

		// ############## navigating to student edit page ##############
		cy.clearOutInput("input[data-testid='searchbar']");
		cy.writeToInput("input[data-testid='searchbar']", firstname);
		cy.contains("tr", email)
			.find("[data-testid='edit_student_button']")
			.should("be.visible")
			.click();

		cy.pause();

		// ############## deleting a student ##############
		cy.clickOnElement("[data-testid='button_delete_user']");
		cy.clickOnElement("[data-testid='submit-btn-delete-user-modal']");

		// cy.logout();
	}
);
