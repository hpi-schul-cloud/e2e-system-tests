export function getPageUrl(environment, page) {
	const env = Cypress.env();
	const environmentUpperCased = environment.toUpperCase();
	const fullLink = new URL(page, env[environmentUpperCased]);

	return fullLink.href;
}

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
		if (body.find(selector).length && body.find(selector).is(":visible")) {
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
