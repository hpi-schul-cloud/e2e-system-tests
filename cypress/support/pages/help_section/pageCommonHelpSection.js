'use strict'

class Help_Common {
  static #helpOverviewNavigationButton = '[data-testid="Hilfebereich"]'
  static #helpArticlesNavigationButton = '[data-testid="Hilfeartikel"]'
  static #helpContactNavigationButton = '[data-testid="Kontakt"]'
  static #advancedTrainingsNavigationButton = 'a[title="Fortbildungen"]'
  static #popUpLink = 'https://lernen.cloud/'

  navigateToHelpSection () {
    cy.get(Help_Common.#helpOverviewNavigationButton)
      .click()
      .waitForNetworkIdle(6000)
    cy.url().should('include', '/help/articles')
  }

  navigateToHelpArticles () {
    cy.get(Help_Common.#helpArticlesNavigationButton)
      .eq(0)
      .click()
    cy.url().should('include', '/help/articles')
  }

  navigateToHelpContact () {
    cy.get(Help_Common.#helpContactNavigationButton).click()
    cy.url().should('include', '/help/contact')
  }

  navigateToAdvancedTrainings () {
    cy.get(Help_Common.#advancedTrainingsNavigationButton).should($a => {
      expect($a.attr('href'), 'href').to.equal(Help_Common.#popUpLink)
      expect($a.attr('target'), 'target').to.equal('_blank')
    })
  }
}
export default Help_Common
