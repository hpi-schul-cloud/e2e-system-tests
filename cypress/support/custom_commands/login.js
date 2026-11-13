import { getPageUrl } from "./input.utils";
import {
	loginViaApiOnly,
	loginViaSchoolApi,
	loginWithoutSchoolApi,
} from "./login.helper";

const initials = '[data-testid="user-menu-btn"]';
const languageSelection = '[id="v-list-group--id-languages"]';
const languageDe = '[data-testid="selected-language-de"]';

Cypress.Commands.add("login", (username, environment) => {
	// Timing test: the API login never opens a page inside the session setup, so set the
	// base URL here (outside the session) for later relative cy.visit() calls.
	Cypress.config("baseUrl", Cypress.env()[environment.toUpperCase()]);
	cy.session(
		[username, environment],
		async () => {
			const env = Cypress.env();
			const environmentUpperCased = environment.toUpperCase();
			const link = Cypress.config("baseUrl", env[environmentUpperCased]);

			const stagingRegex =
				/^https:\/\/(staging\.[\w-]+\.(dbildungscloud\.org)|test\.schulportal-thueringen\.de|staging\.dbildungscloud\.org)\/?/;

			let isStaging = stagingRegex.test(link);

			// Timing test: API login everywhere except the login test itself, which keeps covering the login form.
			const useApiLogin =
				!(isStaging || environment === "localhost") &&
				!Cypress.spec.name.includes("cloudLoginAndLogout");

			if (useApiLogin) {
				loginViaApiOnly(username, environment);
				return;
			}

			!(isStaging || environment === "localhost")
				? await loginViaSchoolApi(username, environment)
				: loginWithoutSchoolApi(username, environment);

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
	cy.visit(getPageUrl(environment, "/dashboard"));
});
