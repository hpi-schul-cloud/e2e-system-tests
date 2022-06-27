'use strict'

class Learning_Store_Common {

  static #lernStoreOverviewNavigationButton = '[data-testid="Lern-Store"]'

  navigateToLernStoreOverview() {
    cy.visit('/content')
    cy.get(Learning_Store_Common.#lernStoreOverviewNavigationButton).click()
    cy.url().should('include', '/content')
  }
}
export default Learning_Store_Common