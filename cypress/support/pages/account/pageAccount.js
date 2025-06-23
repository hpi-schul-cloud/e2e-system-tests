"use strict";

class Account {
	static #initialsButton = '[data-testid="initials"]';
	static #settingsButton = '[data-testid="settings"]';
	static #email = '[data-testid="user_email"]';
	static #emailReadOnly = '[data-testid="user_email_readonly"]';
	static #inputBoxCurrentPasswordOnUserSettings =
		'[data-testid="settings_password_current"]';
	static #inputBoxEmailOnUserSettings = "[id='email']";
	static #submitButtonOnAccountSettings = '[data-testid="submit_new_password_btn"]';
	static #submitButtonOnAccountVisibilitySettings =
		'[data-testid="submit_visibility_settings_btn"]';
	static #successMessageOnAccountSettings = '[data-testid="notification"]';
	static #buttonLoginViaEmailNbc = '[data-testid="submit-cloud-site"]';
	static #inputBoxUserEmailOnLoginPage = '[data-testid="username-email"]';
	static #userPasswordLoginPage = '[data-testid="password-email"]';
	static #checkboxDirectoryVisibility = '[data-testid="checkbox-show-in-directory"]';

	enterCurrentPasswordOnLoginAfterChangingEmailInAccountSettings() {
		const currentPassword = Cypress.env("password");
		cy.get(Account.#userPasswordLoginPage).type(currentPassword, {
			log: false,
		});
	}

	enterCurrentPasswordOnUserSettingsPage() {
		const currentPassword =
			Cypress.env("password") ||
			Cypress.env("TEACHER_EXT_1_BRB_PASSWORD") ||
			Cypress.env("TEACHER_EXT_1_DBC_PASSWORD") ||
			Cypress.env("TEACHER_EXT_1_NBC_PASSWORD");
		cy.get(Account.#inputBoxCurrentPasswordOnUserSettings).type(currentPassword, {
			log: false,
		});
	}

	enterNewEmailOnUserSettingsPage() {
		const newEmail = `cypress-test-user${Date.now()}${Math.floor(Math.random() * 1000)}@example.com`;
		// Store the generated new email as an alias for later use
		cy.wrap(newEmail).as("newEmail");
		cy.get(Account.#inputBoxEmailOnUserSettings).clear();
		cy.get(Account.#inputBoxEmailOnUserSettings).type(newEmail);
	}

	enterUpdatedEmailAfterSavingInAccountSettings() {
		// Retrieve and use the same new email for the login after saving chnages in the account settings in the method enterNewEmailOnUserSettingsPage().
		cy.get("@newEmail").then((newEmail) => {
			cy.get("body").then((body) => {
				if (body.find(Account.#buttonLoginViaEmailNbc).length) {
					// For NBC
					cy.get(Account.#buttonLoginViaEmailNbc).click();
					cy.get(Account.#inputBoxUserEmailOnLoginPage).type(newEmail);
				} else {
					// For dBC/BRB
					cy.get(Account.#inputBoxUserEmailOnLoginPage).type(newEmail);
				}
			});
		});
	}

	clickOnSaveAccountSettingsButton() {
		cy.get(Account.#submitButtonOnAccountSettings).click();
	}

	clickOnSaveVisibilitySettingsButton() {
		cy.get(Account.#submitButtonOnAccountVisibilitySettings).click();
	}

	seeSuccessMessageOnAccountSettingsPage() {
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

	verifyCheckboxDirectoryVisibility(isChecked) {
		if (isChecked) {
			cy.get(Account.#checkboxDirectoryVisibility).should("be.checked");
		} else {
			cy.get(Account.#checkboxDirectoryVisibility).should("not.be.checked");
		}
	}

	clickOnCheckboxDirectoryVisibility() {
		cy.get(Account.#checkboxDirectoryVisibility).check();
	}
}
export default Account;
