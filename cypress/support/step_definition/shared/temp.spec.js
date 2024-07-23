import { Given, defineStep as And, Then } from "@badeball/cypress-cucumber-preprocessor";
import { getUserCredentials } from "../../custom_commands/login.helper";
import { getPageUrl } from "../../custom_commands/input.utils";

And(
	"Created student {string} {string} with email {string} on {string}",
	(firstname, lastname, email, environment) => {
		cy.visitPage(environment, "/administration/students/new");
		cy.writeToInput("[data-testid='input_create-user_firstname']", firstname);
		cy.writeToInput("[data-testid='input_create-user_lastname']", lastname);
		cy.writeToInput("[data-testid='input_create-user_email']", email);
		cy.clickOnElement("[data-testid='button_create-user_submit']");
	}
);
