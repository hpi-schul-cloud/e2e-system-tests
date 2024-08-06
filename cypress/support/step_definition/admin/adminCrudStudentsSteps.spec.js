import { defineStep } from "@badeball/cypress-cucumber-preprocessor";

defineStep(
	"Created student {string} {string} with email {string}",
	(firstname, lastname, email) => {
		const birthDate = new Date();

		birthDate.setFullYear(birthDate.getFullYear() - 17);

		cy.visit("/administration/students/new");
		cy.location("pathname").should("equal", "/administration/students/new");
		cy.writeToInput("[data-testid='input_create-user_firstname']", firstname);
		cy.writeToInput("[data-testid='input_create-user_lastname']", lastname);
		cy.writeToInput("[data-testid='input_create-user_email']", email);
		cy.writeToInput(
			"[data-testid='input_create-student_birthdate']",
			birthDate.toISOString().split("T")[0],
			100
		);
		cy.clickOnElement("[data-testid='button_create-user_submit']");
		cy.location("pathname").should("equal", "/administration/students");
	}
);

defineStep("Pause", () => {
	cy.pause();
});

defineStep("Student {string} with email {string} was created", (firstname, email) => {
	cy.clearOutInput("input[data-testid='searchbar']");
	cy.writeToInput("input[data-testid='searchbar']", firstname);
	cy.contains("tr", email)
		.find("[data-testid='edit_student_button']")
		.should("be.visible");
});

defineStep("Registering student {string} with email {string}", (firstname, email) => {
	cy.clearOutInput("input[data-testid='searchbar']");
	cy.writeToInput("input[data-testid='searchbar']", firstname);
	cy.contains("tr", email).find("svg").first().should("be.visible").click();
	cy.clickOnElement("[data-test-id='context-menu-open']");
	cy.clickOnElement("[data-testid='consent_action");
	cy.clearOutInput("input[data-testid='password-input']");
	cy.clickOnElement("[data-testid='button-next");
	cy.tryClickOnElement("div[id='consent-checkbox']");
	cy.clickOnElement("[data-testid='button-next-2");
	cy.contains("button", "abbrechen", { matchCase: false }).clickOnElement();
	cy.contains("button", "trotzdem abbrechen", { matchCase: false }).clickOnElement();
});

defineStep(
	"Going to student edit page for {string} with email {string}",
	(firstname, email) => {
		cy.clearOutInput("input[data-testid='searchbar']");
		cy.writeToInput("input[data-testid='searchbar']", firstname);
		cy.contains("tr", email)
			.find("[data-testid='edit_student_button']")
			.clickOnElement();
	}
);

defineStep("I am on the students management page", () => {
	cy.visit("/administration/students");
	cy.location("pathname").should("equal", "/administration/students");
});

defineStep("Changing parents and students consent", () => {
	// Only on DBC can we modify the consent
	if (Cypress.config().baseUrl.includes("dbc")) {
		cy.clickOnElement("button[id='edit-consent']");

		cy.get("input[name='parent_form']").first().clickOnElement();
		cy.clickOnElement("input[name='parent_privacyConsent']");
		cy.clickOnElement("input[name='parent_termsOfUseConsent']");

		cy.get("input[name='student_form']").first().clickOnElement();
		cy.clickOnElement("input[name='student_privacyConsent']");
		cy.clickOnElement("input[name='student_termsOfUseConsent']");
	}
});
