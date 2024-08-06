import { Given, defineStep as And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { getUserCredentials } from "../../custom_commands/login.helper";
import { visitPage } from "../../custom_commands/input.utils";

Given("I am on the login page on {string}", (environment) => {
	cy.clearCookies();
	cy.visitPage(environment, "/login");
});

And("I am logging in as {string}", (user) => {
	const env = Cypress.env();
	const [username, password] = getUserCredentials(user);

	cy.tryClickOnElement('[data-testid="submit-cloud-site"]');
	cy.writeToInput('[data-testid="username-email"]', env[username]);
	cy.writeToInput('[data-testid="password-email"]', env[password]);
	cy.clickOnElement('[data-testid="submit-login-email"');
	cy.url().should("contain", "/dashboard");
	// cy.pause();
});

And("I will check if an account for the student already exists then delete {string}", (environment) => {
	cy.visitPage(environment, "/administration/students");
	cy.clearOutInput("input[data-testid='searchbar']");
	cy.writeToInput('input[data-testid="searchbar"]', "john.doe@email.eu", 2000);
	cy.contains("tr", 'john.doe@email.eu').find("svg").first().should("be.visible").click(), 2000;
	cy.tryClickOnElement("[data-test-id='context-menu-open']");
	cy.tryClickOnElement("[data-testid='delete_action']");
	cy.tryClickOnElement("[data-testid='btn-dialog-confirm']");
});

And("I will navigate to create new student page {string}", (environment) => {
	cy.visitPage(environment, "/administration/students/new");
});

And("I will be able to create a new student", () => {
	cy.writeToInput('[data-testid="input_create-user_firstname"]', "John");
	cy.writeToInput('[data-testid="input_create-user_lastname"]', "Doe");
	cy.writeToInput('[data-testid="input_create-user_email"]', "john.doe@email.eu");
	cy.writeToInput('[data-testid="input_create-student_birthdate"]', "2020-01-01");
	cy.clickOnElement('[data-testid="input_create-student_send-registration"] label');
	cy.clickOnElement('[data-testid="button_create-user_submit"]');
});

And("I will be able to activate the student account manually", () => {
	cy.contains("tr", 'email').find("svg").first().should("be.visible").click();
	cy.clickOnElement("[data-test-id='context-menu-open']");
	cy.clickOnElement("[data-testid='consent_action");
	cy.clearOutInput("input[data-testid='password-input']");
	cy.writeToInput("input[data-testid='password-input']", "123456");
	cy.clickOnElement("[data-testid='button-next");
	cy.tryClickOnElement("div[id='consent-checkbox']");
	cy.clickOnElement("[data-testid='button-next-2");
	cy.contains("button", "abbrechen", { matchCase: false }).clickOnElement();
	cy.contains("button", "trotzdem abbrechen", { matchCase: false }).clickOnElement();
});

And("I will logout from admin account", () => {
	cy.clickOnElement('[data-testid="user-menu-btn"');
	cy.clickOnElement('[data-testid="logout"');
});

When("I will be able to login with new account {string}", (environment) => {
	cy.visitPage(environment, "/login");
	cy.tryClickOnElement('[data-testid="submit-cloud-site"]');
	cy.writeToInput('input[data-testid="username-email"]', "john.doe@email.eu");
	cy.writeToInput('input[data-testid="password-email"]', "123456");
	cy.clickOnElement('[data-testid="submit-login-email"');
});

Then("I will be able to do first steps", () => {
	cy.get("button[class*='pull-right']")
		.should("be.visible")
		.click();
		cy.get("button[class*='pull-right']")
		.should("be.visible")
		.click();
		cy.writeToInput('[data-testid="firstlogin_password"]', "12345678");
		cy.writeToInput('[data-testid="firstlogin_password_control"]', "12345678");
		cy.get("button[class*='pull-right']")
		.should("be.visible")
		.click();
		cy.clickOnElement('[data-testid="btn_schul-cloud_erkunden"');
});

Then("I will be able to logout", () => {
	cy.clickOnElement('[data-testid="initials"');
	cy.clickOnElement('[data-testid="logout"');
});