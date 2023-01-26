'use strict'

class Learning_Store {

  static #lernStoreOverviewNavigationButton = '[data-testid="Lern-Store"]'

  navigateToLernStoreOverview() {
    cy.visit('/content')
    cy.get(Learning_Store.#lernStoreOverviewNavigationButton).click()
    cy.url().should('include', '/content')
  }
}
export default Learning_Store