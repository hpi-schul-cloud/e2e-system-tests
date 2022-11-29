'use strict'

class Addons_Common {

  static #addonsOverviewNavigationButton = '[data-testid="Add-ons"]'

  navigateToAddonsOverview() {
    cy.get(Addons_Common.#addonsOverviewNavigationButton)
    .contains('Add-ons')
    .click()
    .wait([
      '@alerts_api'
    ])
    .then(interceptions => {
      expect(interceptions.response.statusCode).to.equal(200)
    })
    cy.url()
      .should('include', '/addons')
  }
}
export default Addons_Common