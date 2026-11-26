import { getPageUrl } from "./input.utils";
import {
	getStoredPassword,
	loginViaApi,
	loginViaSchoolApi,
	loginWithoutSchoolApi,
} from "./login.helper";

const initials = '[data-testid="user-menu-btn"]';
const languageSelection = '[id="v-list-group--id-languages"]';
const languageDe = '[data-testid="selected-language-de"]';

// Test files whose subject is the login itself keep logging in through the login form.
const specsWithUiLogin = ["cloudLoginAndLogout.feature"];

// New users log in via API, except where the login UI is the only coverage of a flow:
// - the test files in specsWithUiLogin test the login form;
// - external persons accept the privacy policy and the terms of use in their first login,
//   and no other test covers these consent dialogs.
// The login form and the first-login dialogs of students and teachers are covered by the
// registration tests (adminRegisters*WithLink, forcePasswordChange*, studentManualRegistrationByAdmin).
const shouldLoginViaApi = (username) =>
	!specsWithUiLogin.includes(Cypress.spec.relative.split("/").pop()) &&
	!/(?:^|_)externalPerson/.test(username);

Cypress.Commands.add("login", (username, environment) => {
	// The API login opens no page inside the session setup, so the base URL for the relative
	// cy.visit() calls after the login is set here, in command order.
	cy.then(() => Cypress.config("baseUrl", Cypress.env()[environment.toUpperCase()]));
	cy.session(
		[username, environment],
		async () => {
			const env = Cypress.env();
			const environmentUpperCased = environment.toUpperCase();
			const link = Cypress.config("baseUrl", env[environmentUpperCased]);

			const stagingRegex =
				/^https:\/\/(staging\.[\w-]+\.(schulcloud-verbund\.org)|test\.schulportal-thueringen\.de|staging\.schulcloud-verbund\.org)\/?/;

			let isStaging = stagingRegex.test(link);

			const usesSchoolApi = !(isStaging || environment === "localhost");

			if (usesSchoolApi && shouldLoginViaApi(username)) {
				loginViaApi(username, environment);
				return;
			}

			usesSchoolApi
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
	// Cypress.env is reset when Cypress re-runs a test after its first visit to a new domain,
	// so the current user's password is restored from the Node process (see login.helper.js).
	getStoredPassword(username, environment).then((password) => {
		if (password) {
			Cypress.env("password", password);
		}
	});
	cy.visit(getPageUrl(environment, "/dashboard"));
});
