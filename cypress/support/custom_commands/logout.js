const initialsOldClient = '[data-testid="initials"]';
const initialsVue = '[data-testid="user-menu-btn"]';
const logoutButton = '[data-testid="logout"]';
const dashboardSelector = '[data-testid="sidebar-dashboard"]';

Cypress.Commands.add("logout", () => {
	cy.get("body").then((body) => {
		cy.get(dashboardSelector).should("be.visible").should("exist");
		cy.get(body.find(initialsOldClient).length ? initialsOldClient : initialsVue).click();
	});
	cy.get(logoutButton).click();
	cy.get(dashboardSelector).should("not.exist");
});
