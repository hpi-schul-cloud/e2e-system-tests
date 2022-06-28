'use strict'

class Addons_Common {

  static #addonsOverviewNavigationButton = '[data-testid="Add-Ons"]'

  navigateToAddonsOverview() {
    cy.visit('/addons')
    cy.get(Addons_Common.#addonsOverviewNavigationButton).contains('Add-ons').click()
    cy.url().should('include', '/addons')
  }
}
export default Addons_Common