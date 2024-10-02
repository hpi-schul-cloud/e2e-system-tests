const initialsOldClient = '[data-testid="initials"]';
const initialsVue = '[data-testid="user-menu-btn"]';
const logoutButton = '[data-testid="logout"]';

Cypress.Commands.add("logout", () => {
	cy.get("body").then((body) => {
		if (body.find(initialsOldClient).length) {
			cy.get(initialsOldClient).click();
		} else {
			cy.get(initialsVue).click();
		}
	});
	cy.get(logoutButton).click();
});
