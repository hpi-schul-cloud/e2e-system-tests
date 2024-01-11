'use strict'

class Learning_Store {

  static #learningStoreMenuLink = '[data-testid="Lern-Store"]'

  navigateToLearningStoreOverview() {
    cy.visit('/content')
    cy.get(Learning_Store.#learningStoreMenuLink).click()
    cy.url().should('include', '/content')
  }

  assertLearningStoreNotVisibleInMenu() {
    cy.get(Learning_Store.#learningStoreMenuLink).should('not.exist')
  }

  assertLearningStoreVisibleInMenu() {
    cy.get(Learning_Store.#learningStoreMenuLink).should('exist')
  }
}
export default Learning_Store