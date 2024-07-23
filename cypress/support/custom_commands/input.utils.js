import { getUserCredentials } from "./login.helper";

export function getPageUrl(environment, page) {
	const env = Cypress.env();
	const environmentUpperCased = environment.toUpperCase();
	const linkPrefix = Cypress.config("baseUrl", env[environmentUpperCased]);
	const fullLink = `${linkPrefix}${page}`;

	return fullLink;
}

Cypress.Commands.add("apiLogin", (user, environment) => {
	cy.session([user, environment], () => {
		const env = Cypress.env();
		const [username, password] = getUserCredentials(user);

		cy.request({
			method: "POST",
			url: getPageUrl(environment, "/api/v3/authentication/local"),
			body: {
				username: env[username],
				password: env[password],
			},
		}).then(({ body }) => {
			cy.setCookie("jwt", body.accessToken);
			cy.visitPage(environment, "/dashboard");
		});
	});
});

Cypress.Commands.add(
	"clickOnElement",
	{ prevSubject: "optional" },
	(subject, selector, wait = 0) => {
		if (subject) {
			return cy.wrap(subject).get(selector).should("be.visible").click().wait(wait);
		} else {
			return cy.get(selector).should("be.visible").click().wait(wait);
		}
	}
);

Cypress.Commands.add("tryClickOnElement", (selector, wait = 0) => {
	cy.get("body").then((body) => {
		if (body.find(selector).length) {
			cy.clickOnElement(selector, wait);
		}
	});
});

Cypress.Commands.add("clearOutInput", (selector, wait = 0) => {
	return cy.get(selector).should("be.visible").clear().wait(wait);
});

Cypress.Commands.add("writeToInput", (selector, input, wait = 0) => {
	return cy.get(selector).should("be.visible").type(input).wait(wait);
});

Cypress.Commands.add("visitPage", (environment, page) => {
	const url = getPageUrl(environment, page);

	cy.visit(url);
	cy.url().should("equal", url);
});
