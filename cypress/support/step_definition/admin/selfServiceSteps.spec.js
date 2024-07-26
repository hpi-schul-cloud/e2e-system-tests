import { defineStep } from "@badeball/cypress-cucumber-preprocessor";
import { getUserCredentials } from "../../custom_commands/login.helper";

const registrationLinkCache = new Map();

defineStep("I am able to get the registration link for {string}", (email) => {
	cy.clickOnElement("button[class*='btn-invitation-link-with-hash']");
	cy.get("input[id='invitation-link']")
		.should("be.visible")
		.invoke("val")
		.then((inputValue) => {
			cy.log(inputValue);
			// registrationLinkCache[email] = inputValue;
			cy.visit(inputValue);

			// Step 1
			cy.get("div[id='language_chosen']")
				.should("be.visible")
				.contains("li", "deutsch", { matchCase: false })
				.clickOnElement();
			cy.clickOnElement("button[id='nextSection']");

			// Step 2
			cy.clickOnElement("button[id='nextSection']");

			// Step 3
			cy.writeToInput("input[id='password']", "Schulcloud1!");
			cy.writeToInput("input[id='password-control']", "Schulcloud1!");
			cy.clickOnElement("button[id='nextSection']");

			// Step 4
			cy.clickOnElement("input[name='privacyConsent']");
			cy.clickOnElement("input[name='termsOfUseConsent']");
			cy.clickOnElement("button[id='nextSection']");
		});
	// cy.log(registrationLinkCache);
	// // cy.pause();
	// cy.log(registrationLinkCache[email]);
	// cy.visit(registrationLinkCache[email]);
});

defineStep("I am on the account settings page", () => {
	cy.visit("/account");
	cy.location("pathname").should("equal", "/account");
});

defineStep("I am changing my email to {string}", (newEmail) => {
	cy.clearOutInput("input[id='email']");
	cy.writeToInput("input[id='email']", newEmail);
});

defineStep("I {string} am changing my password to {string}", (user, newPassword) => {
	const env = Cypress.env();
	const [, oldPassword] = getUserCredentials(user);

	cy.writeToInput("input[id='settings_current_password']", env[oldPassword]);
	cy.writeToInput("input[id='passwordNew']", newPassword);
	cy.writeToInput("input[id='password_control']", newPassword);
});

defineStep("I am saving the changes", () => {
	cy.clickOnElement("button[data-testid='submit_new_password_btn']");
});

defineStep("Saving was successful", () => {
	cy.get("div[class*='alert-success']").should("be.visible");
});

defineStep("I {string} am reverting my email back", (user) => {
	const env = Cypress.env();
	const [oldEmail] = getUserCredentials(user);

	cy.clearOutInput("input[id='email']");
	cy.writeToInput("input[id='email']", env[oldEmail]);
});

defineStep("I {string} reverting my password back from {string}", (user, oldPassword) => {
	const env = Cypress.env();
	const [, newPassword] = getUserCredentials(user);

	cy.writeToInput("input[id='settings_current_password']", oldPassword);
	cy.writeToInput("input[id='passwordNew']", env[newPassword]);
	cy.writeToInput("input[id='password_control']", env[newPassword]);
});
