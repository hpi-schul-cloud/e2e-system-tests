'use strict'

class Learning_Store {

  static #learnStoreOverviewNavigationButton = '[data-testid="Lern-Store"]'
  static #learnstoreMenuLink = '[data-testid="Lern-Store"]'

  navigateToLearnStoreOverview() {
    cy.visit('/content')
    cy.get(Learning_Store.#learnStoreOverviewNavigationButton).click()
    cy.url().should('include', '/content')
  }

  assertLearnstoreNotVisibleInMenu() {
    cy.get(Learning_Store.#learnstoreMenuLink).should('not.exist')
  }

  assertLearnstoreVisibleInMenu() {
    cy.get(Learning_Store.#learnstoreMenuLink).should('exist')
  }
}
export default Learning_Store