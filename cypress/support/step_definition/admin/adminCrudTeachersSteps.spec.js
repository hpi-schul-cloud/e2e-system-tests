import { defineStep } from "@badeball/cypress-cucumber-preprocessor";

defineStep(
	"Created teacher {string} {string} with email {string}",
	(firstname, lastname, email) => {
		cy.visit("/administration/teachers/new");
		cy.location("pathname").should("equal", "/administration/teachers/new");
		cy.writeToInput("[data-testid='input_create-user_firstname']", firstname);
		cy.writeToInput("[data-testid='input_create-user_lastname']", lastname);
		cy.writeToInput("[data-testid='input_create-user_email']", email);
		cy.contains("label", "registrierungslink", { matchCase: false }).clickOnElement();
		cy.clickOnElement("[data-testid='button_create-user_submit']");
	}
);

defineStep("Teacher {string} with email {string} was created", (firstname, email) => {
	cy.clearOutInput("input[data-testid='searchbar']");
	cy.writeToInput("input[data-testid='searchbar']", firstname);
	cy.contains("tr", email)
		.find("[data-testid='edit_teacher_button']")
		.should("be.visible");
});

defineStep("I am on the teachers management page", () => {
	cy.visit("/administration/teachers");
	cy.location("pathname").should("equal", "/administration/teachers");
});

defineStep(
	"Going to teacher edit page for {string} with email {string}",
	(firstname, email) => {
		cy.clearOutInput("input[data-testid='searchbar']");
		cy.writeToInput("input[data-testid='searchbar']", firstname);
		cy.contains("tr", email)
			.find("[data-testid='edit_teacher_button']")
			.clickOnElement();
	}
);

defineStep("Changing consent for the teacher", () => {
	// Only teachers on DBC have a consent option
	if (Cypress.config().baseUrl.includes("dbc")) {
		cy.clickOnElement("button[id='edit-consent']");
		cy.get("input[name='form']").first().clickOnElement();
		cy.clickOnElement("input[name='privacyConsent']");
		cy.clickOnElement("input[name='termsOfUseConsent']");
	}
});
