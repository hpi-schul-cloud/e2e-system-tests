'use strict'

class Addons_Common {

  //static #addonsOverviewNavigationButton = '[data-testid="Add-Ons"]' // test can't find this element for some reason on NBC
  static #addonsOverviewNavigationButton = '[class="link-name"]'  // this way test can find it and passing the test

  navigateToAddonsOverview() {
    cy.visit('/addons')
    cy.url().should('include', '/addons')
    cy.get(Addons_Common.#addonsOverviewNavigationButton).contains('Add-ons').click()
    cy.url().should('include', '/addons')
  }
}
export default Addons_Common