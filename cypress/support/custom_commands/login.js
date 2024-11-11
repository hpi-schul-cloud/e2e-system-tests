import { loginViaSchoolApi, loginWithoutSchoolApi } from "./login.helper";

const initials = '[data-testid="initials"]';
const languageSelection = '[id="selected-language"]';
const languageDe = '[data-language="de"]';
const titleOnDashboardPage = '[id="page-title"]';

Cypress.Commands.add("login", (username, environment) => {
	cy.session([username, environment], async () => {
		const env = Cypress.env();
		const environmentUpperCased = environment.toUpperCase();
		const link = Cypress.config("baseUrl", env[environmentUpperCased]);

		const stagingRegex =
			/^https:\/\/(staging\.[\w-]+\.(dbildungscloud\.org)|test\.schulportal-thueringen\.de|staging\.dbildungscloud\.org)\/?/;

		let isStaging = stagingRegex.test(link);

		!isStaging
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
