'use strict'

class News_Common {

  static #newsOverviewNavigationButton = '[data-testid="Neuigkeiten"]'

  navigateToNewsOverview() {
    cy.get(News_Common.#newsOverviewNavigationButton).click()
    cy.url().should('include', '/news')
  }
}
export default News_Common