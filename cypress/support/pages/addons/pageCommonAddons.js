'use strict'

class Addons_Common {

    static #addonsOverviewNavigationButton = '[data-testid="Add-Ons"]'

 goToAddonsOverview () {
    cy.visit('/addons')
    cy.get(Addons_Common.#addonsOverviewNavigationButton).click()
    cy.url().should('include', '/addons')
  }
}
export default Addons_Common