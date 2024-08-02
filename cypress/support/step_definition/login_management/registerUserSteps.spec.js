import { defineStep } from "@badeball/cypress-cucumber-preprocessor";
import { getPageUrl } from "../../custom_commands/input.utils";

defineStep(
	"Created student {string} {string} with email {string} and send link",
	(firstname, lastname, email) => {
		cy.pause();

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
		cy.clickOnElement("[data-testid='input_create-student_send-registration'] label");
		cy.clickOnElement("[data-testid='button_create-user_submit']");
		cy.location("pathname").should("equal", "/administration/students");
		cy.pause();
	}
);

defineStep(
	"Going to student registration page for {string} with email {string} on {string}",
	(firstname, email, environment) => {
		cy.clickOnElement("button[class*='btn-invitation-link-with-hash student']");
		cy.get("input[id='invitation-link']")
			.should("be.visible")
			.invoke("val")
			.then((val) => {
				cy.clearCookies();
				cy.visit(val);

				// Step 1 Choose Language
				cy.get("div[id='language_chosen']")
					.clickOnElement()
					.contains("li", "deutsch", { matchCase: false })
					.clickOnElement();
				cy.clickOnElement("button[id='showAgeSelection']");

				// Step 2 Age Selection
				cy.clickOnElement("input[id='reg-16']");
				cy.clickOnElement("button[id='showRegistrationForm']");

				// Step 3 Information Confirmation
				// TODO check if the text is correct
				cy.clickOnElement("button[id='nextSection']");

				// Step 4 Consents
				cy.clickOnElement("input[name='privacyConsent']");
				cy.clickOnElement("input[name='termsOfUseConsent']");
				cy.clickOnElement("button[id='nextSection']");

				// Step 5 Get and enter Registration Pin
				cy.clickOnElement("button[id='resend-pin']");
				cy.get("div[class*='alert-success']").should("be.visible");
				cy.request({
					method: "GET",
					headers: {
						"X-API-KEY": "4eb3b085-55c7-4432-9890-a089f68b2413",
					},
					url: getPageUrl(
						environment,
						`/admin/api/v1/registration-pin/${email}`
					),
				}).then(({ body }) => {
					cy.log(body);
					const pin = body.pop().registrationPin.split("");

					cy.get("div[id='pinverification'] input[class='digit']").each(
						(el, index) => {
							cy.wrap(el).type(pin[index]);
						}
					);

					cy.clickOnElement("button[id='nextSection']");
					cy.get("div[id='userdata-summary']").should("be.visible");
				});
			});
	}
);

defineStep("Register {string} with link", (email) => {
	cy.contains("tr", email).should("be.visible").find("svg").first().click();
	cy.clickOnElement("[data-test-id='context-menu-open']");
	// cy.clickOnElement("[data-testid='registration_link']");
});
