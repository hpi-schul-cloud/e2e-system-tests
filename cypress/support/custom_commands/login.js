import {
	getUserCredentials,
	loginViaSchoolApi,
	loginWithoutSchoolApi,
} from "./login.helper";
import { getPageUrl } from "./input.utils";

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

Cypress.Commands.add("apiLogin", (user, environment) => {
	const env = Cypress.env();
	const environmentUpperCased = environment.toUpperCase();

	Cypress.config("baseUrl", env[environmentUpperCased]);

	cy.session([user, environment], () => {
		const [username, password] = getUserCredentials(user);

		cy.request({
			method: "POST",
			url: getPageUrl(environment, "/api/v3/authentication/local"),
			body: {
				username: env[username],
				password: env[password],
			},
		}).then(({ body }) => {
			const domain = new URL(Cypress.config("baseUrl")).hostname;

			cy.setCookie("jwt", body.accessToken, { domain });
		});
	});

	cy.visitPage(environment, "/dashboard");
});
