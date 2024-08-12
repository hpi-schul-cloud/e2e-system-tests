import { Given, defineStep as And, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { getUserCredentials } from "../../custom_commands/login.helper";
import { visitPage } from "../../custom_commands/input.utils";


And("I will logout from admin account", () => {
	cy.clickOnElement('[data-testid="initials"');
	cy.clickOnElement('[data-testid="logout"');
});

When("I login with new student account {string}", (environment) => {
	cy.visitPage(environment, "/login");
	cy.tryClickOnElement('[data-testid="submit-cloud-site"]');
	cy.writeToInput('input[data-testid="username-email"]', "john.student@mail.tld");
	cy.writeToInput('input[data-testid="password-email"]', "Password1!");
	cy.clickOnElement('[data-testid="submit-login-email"');
});

When("I login with new teacher account {string}", (environment) => {
	cy.visitPage(environment, "/login");
	cy.tryClickOnElement('[data-testid="submit-cloud-site"]');
	cy.writeToInput('input[data-testid="username-email"]', "john.teacher@mail.tld");
	cy.writeToInput('input[data-testid="password-email"]', "Password1!");
	cy.clickOnElement('[data-testid="submit-login-email"');
});

Then("I will be able to do first steps", () => {
	cy.get("button[class*='pull-right']")
		.should("be.visible")
		.click();
		cy.get("button[class*='pull-right']")
		.should("be.visible")
		.click();
		// as we have a bug with force change password, we need to comment this out
		// cy.writeToInput('[data-testid="firstlogin_password"]', "Password2!");
		// cy.writeToInput('[data-testid="firstlogin_password_control"]', "Password2!");
		// cy.get("button[class*='pull-right']")
		// .should("be.visible")
		// .click();
		cy.clickOnElement('[data-testid="btn_schul-cloud_erkunden"');
});