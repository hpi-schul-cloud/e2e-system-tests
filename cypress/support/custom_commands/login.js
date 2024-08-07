const { loginWithoutSchoolApi, loginViaSchoolApi } = require("./login.helper");

const initials = '[data-testid="initials"]';
const languageSelection = '[id="selected-language"]';
const languageDe = '[data-language="de"]';
const titleOnDashboardPage = '[id="page-title"]';

Cypress.Commands.add("login", (username, environment) => {
	cy.session([username, environment], async () => {
		const link = Cypress.env(environment.toUpperCase());
		Cypress.config("baseUrl", link);

		Cypress.env("testId", `${new Date().getTime()}${Math.floor(Math.random() * 1000)}`);
		Cypress.env("environment", environment);

		!link.includes("staging")
			? await loginViaSchoolApi(username, environment)
			: loginWithoutSchoolApi(username, environment);

		cy.url().should("contain", "/dashboard");
		cy.get(initials).click();
		cy.get(languageSelection).click();
		cy.get(languageDe).click();
	});
	cy.visit("/dashboard");
	cy.get(titleOnDashboardPage).should("exist");
});
