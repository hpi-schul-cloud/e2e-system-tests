const initials = '[data-testid="user-menu-btn"]';
const logoutButton = '[data-testid="logout"]';

Cypress.Commands.add("logout", () => {
	cy.get(initials).click();
	cy.get(logoutButton).click();
});
