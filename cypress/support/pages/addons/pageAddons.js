'use strict'

class Addons {

  static #pageTitle = '[id="page-title"]'
  static #addonsOverviewNavigationButton = '[data-testid="Add-ons"]'


  seeAddonsTitleOnTopOfThePage() {
    cy.get(Addons.#pageTitle).contains('Add-ons')
  }

  navigateToAddonsOverview() {
    cy.get(Addons.#addonsOverviewNavigationButton)
    .contains('Add-ons')
    .click()
    cy.url()
      .should('include', '/addons')
  }
}
export default Addons