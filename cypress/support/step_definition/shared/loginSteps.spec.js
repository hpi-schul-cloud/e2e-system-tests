import { Given, defineStep as And, Then } from "@badeball/cypress-cucumber-preprocessor";
import { getUserCredentials } from "../../custom_commands/login.helper";
import { getPageUrl } from "../../custom_commands/input.utils";

Given("I am logged in as {string} on {string}", (user, environment) => {
	cy.apiLogin(user, environment);
});

And("Opened management page for teachers on {string}", (environment) => {
	cy.visitPage(environment, "/administration/teachers/new");
});

And(
	"Created teacher {string} {string} with email {string}",
	(firstname, lastname, email) => {
		cy.writeToInput("[data-testid='input_create-user_firstname']", firstname);
		cy.writeToInput("[data-testid='input_create-user_lastname']", lastname);
		cy.writeToInput("[data-testid='input_create-user_email']", email);
		cy.clickOnElement("[data-testid='button_create-user_submit']");
	}
);

And("Opened management page for teachers on {string}", (environment) => {
	cy.visitPage(environment, "/administration/teachers/new");
});

Then("I can edit teacher with {string}", (email) => {
	cy.contains("tr", email)
		.find("[data-testid='edit_teacher_button']")
		.should("be.visible")
		.click();
});

Then("I can update firstname with {string}", (firstname) => {
	cy.clearOutInput("input[id='firstName']");
	cy.writeToInput("input[id='firstName']", firstname);
});

Then("I can update lastname with {string}", (lastname) => {
	cy.clearOutInput("input[id='lastName']");
	cy.writeToInput("input[id='lastName']", lastname);
});

Then("I can update email with {string}", (email) => {
	cy.clearOutInput("input[id='email']");
	cy.writeToInput("input[id='email']", email);
});

Then("I can save the user changes", () => {
	cy.clickOnElement("[data-testid='button_save_user']");
	cy.pause();
});

// And("Opened management page for students", () => {});
