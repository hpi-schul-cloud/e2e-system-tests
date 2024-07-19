Cypress.Commands.add("clickOnElement", (selector, wait = 0) => {
	return cy.get(selector).should("be.visible").click().wait(wait);
});

Cypress.Commands.add("tryClickOnElement", (selector, wait = 0) => {
	cy.get("body").then((body) => {
		if (body.find(selector).length) {
			cy.clickOnElement(selector, wait);
		}
	});
});

Cypress.Commands.add("writeToInput", (selector, input, wait = 0) => {
	return cy.get(selector).should("be.visible").clear().type(input).wait(wait);
});
