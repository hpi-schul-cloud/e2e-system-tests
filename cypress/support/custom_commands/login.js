import { loginViaSchoolApi, loginWithoutSchoolApi } from "./login.helper";
import { getPageUrl } from "./input.utils";

const initials = '[data-testid="initials"]';
const languageSelection = '[id="selected-language"]';
const languageDe = '[data-language="de"]';

Cypress.Commands.add("login", (username, environment, schoolId, courseId) => {
	cy.session(
		[username, environment],
		async () => {
			const env = Cypress.env();
			const environmentUpperCased = environment.toUpperCase();
			const link = Cypress.config("baseUrl", env[environmentUpperCased]);

			const stagingRegex =
				/^https:\/\/(staging\.[\w-]+\.(dbildungscloud\.org)|test\.schulportal-thueringen\.de|staging\.dbildungscloud\.org)\/?/;

			let isStaging = stagingRegex.test(link);

			if(isStaging && (!!schoolId || !!courseId)) {
				throw new Error('Predefined school or course not supported for staging');
			}

			!isStaging
				? await loginViaSchoolApi(username, environment, schoolId, courseId)
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
	cy.visit("/dashboard");
});
