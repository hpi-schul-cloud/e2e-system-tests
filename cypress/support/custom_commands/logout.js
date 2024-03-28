const initials = '[data-testid="initials"]';
const logoutButton = '[data-testid="logout"]';

Cypress.Commands.add("logout", () => {
	cy.get(initials).click();
	cy.get(logoutButton).click();
});
