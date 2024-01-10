'use strict'

class Learning_Store {

  static #learningstoreMenuLink = '[data-testid="Lern-Store"]'

  navigateToLearningstoreOverview() {
    cy.visit('/content')
    cy.get(Learning_Store.#learningstoreMenuLink).click()
    cy.url().should('include', '/content')
  }

  assertLearningstoreNotVisibleInMenu() {
    cy.get(Learning_Store.#learningstoreMenuLink).should('not.exist')
  }

  assertLearningstoreVisibleInMenu() {
    cy.get(Learning_Store.#learningstoreMenuLink).should('exist')
  }
}
export default Learning_Store