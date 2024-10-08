import { defineStep } from "@badeball/cypress-cucumber-preprocessor";
import { visitPage } from "../../custom_commands/input.utils";

defineStep("I will logout from admin account", () => {
	cy.clickOnElement('[data-testid="initials"');
	cy.clickOnElement('[data-testid="logout"');
});

defineStep(
	"I login with {string} {string} account in {string}",
	(username, password, environment) => {
		cy.visitPage(environment, "/login");
		cy.tryClickOnElement('[data-testid="submit-cloud-site"]');
		cy.writeToInput('input[data-testid="username-email"]', username);
		cy.writeToInput('input[data-testid="password-email"]', password);
		cy.clickOnElement('[data-testid="submit-login-email"');
	}
);

defineStep("I will be able to do first steps {string}", (password) => {
	cy.get("button[class*='pull-right']").should("be.visible").click();
	cy.get("button[class*='pull-right']").should("be.visible").click();
	cy.writeToInput('[data-testid="firstlogin_password"]', password);
	cy.writeToInput('[data-testid="firstlogin_password_control"]', password);
	cy.get("button[class*='pull-right']").should("be.visible").click();
	cy.clickOnElement('[data-testid="btn_schul-cloud_erkunden"');
});

defineStep("I will be able to do first steps as teacher {string}", (password) => {
	cy.get("button[class*='pull-right']").should("be.visible").click();
	cy.get("button[class*='pull-right']").should("be.visible").click();
	cy.clickOnElement('[data-testid="btn_schul-cloud_erkunden"');
});
