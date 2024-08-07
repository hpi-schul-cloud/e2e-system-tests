import { defineStep } from "@badeball/cypress-cucumber-preprocessor";
import { getPageUrl } from "../../custom_commands/input.utils";

defineStep("Going to teacher registration page", () => {
	cy.clickOnElement("button[class*='btn-invitation-link-with-hash teacher']");
	cy.get("input[id='invitation-link']")
		.should("be.visible")
		.invoke("val")
		.then((val) => {
			cy.clearCookies();
			cy.visit(val);
		});
});

defineStep(
	"I am registering as teacher with email {string} and password {string} on {string}",
	(email, password, environment) => {
		// Choosing language
		cy.get("div[id='language_chosen']")
			.clickOnElement()
			.contains("li", "deutsch", { matchCase: false })
			.clickOnElement();
		cy.clickOnElement("button[id='nextSection']");

		// Going to next section
		cy.clickOnElement("button[id='nextSection']");

		// Entering new password
		cy.writeToInput("input[id='password']", password);
		cy.writeToInput("input[id='password-control']", password);
		cy.clickOnElement("button[id='nextSection']");

		// Accepting consents only for DBC environment
		if (Cypress.config().baseUrl.includes("dbc")) {
			cy.clickOnElement("input[name='privacyConsent']");
			cy.clickOnElement("input[name='termsOfUseConsent']");
			cy.clickOnElement("button[id='nextSection']");
		}

		// Entering registration pin
		cy.clickOnElement("button[id='resend-pin']");
		cy.get("div[class*='alert-success']").should("be.visible");
		cy.request({
			method: "GET",
			headers: {
				"X-API-KEY": Cypress.env(`apiKey-${environment}`),
			},
			url: getPageUrl(environment, `/admin/api/v1/registration-pin/${email}`),
		}).then(({ body }) => {
			const pin = body.pop().registrationPin.split("");

			cy.get("div[id='pinverification'] input[class='digit']").each((el, index) => {
				cy.wrap(el).type(pin[index]);
			});
		});
		cy.clickOnElement("button[id='nextSection']");
	}
);

defineStep("I am able to logout", () => {
	cy.clickOnElement("a[href='/logout']");
});
