import { defineStep } from "@badeball/cypress-cucumber-preprocessor";
import { getPageUrl } from "../../custom_commands/input.utils";

const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Management from "../../pages/admin/pageAdministration";

const management = new Management();

Then("I see my first name {string}", (firstName) => {
	cy.get('[name="firstName"]').should("have.value", firstName);
});

Then("I see my last name {string}", (lastName) => {
	cy.get('[name="lastName"]').should("have.value", lastName);
});

Then("I click on the button Generate Personal Registration Link", () => {
	//management.clickOnGeneratePersonalRegistrationLink()
	cy.get("button[class*='btn-invitation-link-with-hash student']").click();
});

Then("I visit to the generated student registration link", () => {
	//management.visitToStudentRegistrationPage()
	cy.get("input[id='invitation-link']")
		.should("be.visible")
		.invoke("val")
		.then((val) => {
			expect(val).to.be.a("string").and.not.to.be.empty;
			cy.clearCookies();
			cy.visit(val);
		});
});

When("I choose the language for the registration process", () => {
	// management.chooseLanguageOnRegistrationProcess()
	cy.get("div[id='language_chosen']").click(); // Open the language dropdown
	cy.contains("li", "deutsch", { matchCase: false }).click(); // Select 'Deutsch' from the list
});

Then("I click on the button Next to proceed to the age selection", () => {
	cy.get("button[id='showAgeSelection']").click(); // Click to proceed to the age selection step
});

When("I select the age over 16 years for registration", () => {
	// management.selectAgeOnRegistrationProcess()
	cy.get("input[id='reg-16']").click(); // Select the appropriate age group (16+)
});

Then(
	"I click on the button Next to proceed to the personal data information page",
	() => {
		//management.clickOnNextButtonToNextStep()
		cy.get("button[id='showRegistrationForm']").click(); // Click to open the registration form
	}
);

When("I click on the button Next to proceed to the next step", () => {
	cy.get("button[id='nextSection']").click(); // Click the button to confirm the registration information
});

When("I accept the privacy and terms of use consents", () => {
	//management.acceptingConsentOnRegistrationProcess()
	if (Cypress.config().baseUrl.includes("dbc")) {
		cy.get("input[name='privacyConsent']").click(); // Accept privacy consent
		cy.get("input[name='termsOfUseConsent']").click(); // Accept terms of use consent
	}
});

Then("I click on the button Next to proceed to the registration pin step", () => {
	cy.get("button[id='nextSection']").click(); // Proceed to the next section
});

When("I request a new registration pin", () => {
	cy.get("button[id='resend-pin']").click(); // Request a new registration pin
	cy.get("div[class*='alert-success']").should("be.visible"); // Confirm that the pin request was successful
});

Then("I retrieve the registration pin to enter it into the form", () => {
	//management.retrieveAndEnterRegistrationCode()
	const environment = Cypress.env("environment");
	const email = Cypress.env("studentEmail");
	cy.request({
		method: "GET",
		headers: {
			"X-API-KEY": Cypress.env(`apiKey-${environment}`),
		},
		url: getPageUrl(environment, `/admin/api/v1/registration-pin/${email}`),
	}).then(({ body }) => {
		expect(body).to.be.an("array").that.is.not.empty; // Ensure the response contains the pin data
		const pin = body.pop().registrationPin.split("");

		cy.get("div[id='pinverification'] input[class='digit']").each((el, index) => {
			cy.wrap(el).type(pin[index]); // Enter each digit of the pin into the form
		});
	});
});

Then(
	"I click on the button Send and Get Started to successfully complete the registration process",
	() => {
		cy.get("button[id='nextSection']").click(); // Finalize the registration process
	}
);

Then("I see the page user data summary", () => {
	cy.get((id = "userdata-summary")).should("be.visible");
});
