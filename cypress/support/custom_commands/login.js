import { getPageUrl } from "./input.utils";
import { loginViaSchoolApi, loginWithoutSchoolApi } from "./login.helper";

const initials = '[data-testid="user-menu-btn"]';
const languageSelection = '[id="v-list-group--id-languages"]';
const languageDe = '[data-testid="selected-language-de"]';

Cypress.Commands.add("login", (username, environment) => {
	const env = Cypress.env();
	const environmentUpperCased = environment.toUpperCase();
	const targetDomain = env[environmentUpperCased];
	cy.session(
		[username, environment],
		async () => {
			// const env = Cypress.env();
			// const environmentUpperCased = environment.toUpperCase();
			// const link = Cypress.config("baseUrl", env[environmentUpperCased]);

			const stagingRegex =
				/^https:\/\/(staging\.[\w-]+\.(dbildungscloud\.org)|test\.schulportal-thueringen\.de|staging\.dbildungscloud\.org)\/?/;

			// let isStaging = stagingRegex.test(link);
			let isStaging = stagingRegex.test(targetDomain);

			!(isStaging || environment === "localhost")
				? await loginViaSchoolApi(username, environment)
				: loginWithoutSchoolApi(username, environment);

			// cy.visit(`${targetDomain}dashboard`);
			// cy.visit("dashboard");
			cy.url().should("contain", "/dashboard");
			cy.get(initials).click();
			cy.get(languageSelection).click();
			cy.get(languageDe).click();
		},
		{
			validate: () => {
				cy.request({
					url: getPageUrl(environment, "/api/v3/me"),
				});
			},
		}
	);
	// cy.visit("/dashboard");
	cy.visit(`${targetDomain}dashboard`);
});
