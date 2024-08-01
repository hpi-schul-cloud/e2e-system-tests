import { getUserCredentials } from "./login.helper";

export function getPageUrl(environment, page) {
	const env = Cypress.env();
	const environmentUpperCased = environment.toUpperCase();
	const fullLink = `${env[environmentUpperCased]}${page}`;

	return fullLink;
}

Cypress.Commands.add("apiLogin", (user, environment) => {
	const env = Cypress.env();
	const environmentUpperCased = environment.toUpperCase();

	Cypress.config("baseUrl", env[environmentUpperCased]);

	cy.session([user, environment], () => {
		const [username, password] = getUserCredentials(user);

		cy.visit("/login");
		cy.location("pathname").should("equal", "/login");
		cy.tryClickOnElement('[data-testid="submit-cloud-site"]');
		cy.writeToInput('[data-testid="username-email"]', env[username]);
		cy.writeToInput('[data-testid="password-email"]', env[password]);
		cy.clickOnElement('[data-testid="submit-login-email"');

		// cy.request({
		// 	method: "POST",
		// 	url: getPageUrl(environment, "/api/v3/authentication/local"),
		// 	body: {
		// 		username: env[username],
		// 		password: env[password],
		// 	},
		// }).then(({ body }) => {
		// 	cy.setCookie("jwt", body.accessToken);
		// 	cy.visit("/dashboard");
		// 	cy.location("pathname").should("equal", "/dashboard");
		// });
	});

	cy.visit("/dashboard");
	cy.location("pathname").should("equal", "/dashboard");
});

Cypress.Commands.add(
	"clickOnElement",
	{ prevSubject: "optional" },
	(subject, selector, wait = 0) => {
		if (subject) {
			cy.wrap(subject).should("be.visible").click().wait(wait);
		} else {
			cy.get(selector).should("be.visible").click().wait(wait);
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
	cy.get(selector).should("be.visible").clear().wait(wait);
});

Cypress.Commands.add("writeToInput", (selector, input, wait = 0) => {
	cy.get(selector).should("be.visible").type(input).wait(wait);
});

Cypress.Commands.add("visitPage", (environment, page) => {
	const url = getPageUrl(environment, page);

	cy.visit(url);
	cy.url().should("equal", url);
});

// Cypress.Commands.add("createUser", (environment, user) => {
// 	const { role } = user;
// 	const env = Cypress.env();
// 	const validRoles = ["teacher", "student"];

// 	if(!validRoles.includes(role)) {
// 		throw new Error(`${role} is not valid`);
// 	}

// 	cy.request({
// 		method: "POST",
// 		url: getPageUrl(environment, `/api/v1/users/admin/${role}s`),
// 		body: {
// 			firstName: user.firstname,
// 			las
// 			username: env[username],
// 			password: env[password],
// 		},
// 	}).then(({ body }) => {
// 		cy.setCookie("jwt", body.accessToken);
// 		cy.visitPage(environment, "/dashboard");
// 	});
// })
