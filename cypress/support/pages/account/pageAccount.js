"use strict";

class Account {
	static #initialsButton = '[data-testid="initials"]';
	static #settingsButton = '[data-testid="settings"]';
	static #email = '[data-testid="user_email"]';
	static #emailReadOnly = '[data-testid="user_email_readonly"]';
	static #inputBoxCurrentPasswordOnUserSettings =
		'[data-testid="settings_password_current"]';
	static #inputBoxEmailOnUserSettings = "input[id='email']";
	static #submitButtonOnAccountSettings = '[data-testid="submit_new_password_btn"]';
	static #successMessageOnAccountSettings = '[data-testid="notification"]';

	enterCurrentPasswordOnUserSettingPage() {
		const currentPassword = Cypress.env("password");
		cy.get(Account.#inputBoxCurrentPasswordOnUserSettings).type(currentPassword);
	}

	enterNewEmailOnUserSettingsPage() {
		const newEmail = `cypress-test-user${Date.now()}${Math.floor(Math.random() * 1000)}@example.com`;
		cy.get(Account.#inputBoxEmailOnUserSettings).clear();
		cy.get(Account.#inputBoxEmailOnUserSettings).type(newEmail);
	}
	clickOnSaveAccountSettingButton() {
		cy.get(Account.#submitButtonOnAccountSettings).click();
	}
	seeSuccessMessageOnAccountSettingPage() {
		cy.get(Account.#successMessageOnAccountSettings).should("be.visible");
	}

	navigateToAccountSettingsSection() {
		cy.get(Account.#initialsButton).click();
		cy.get(Account.#settingsButton).click();
		cy.url().should("include", "/account");
	}

	verifyEmailEditable(isEditable) {
		if (isEditable) {
			cy.get(Account.#email).should("be.visible");
			cy.get(Account.#email).should("not.have.attr", "readonly");
		} else {
			cy.get(Account.#emailReadOnly).should("be.visible");
			cy.get(Account.#emailReadOnly).should("have.attr", "readonly");
		}
	}
}
export default Account;
