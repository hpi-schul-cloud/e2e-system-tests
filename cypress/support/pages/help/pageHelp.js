'use strict'

class Help {
  static #questionIcon = '.fa-question'
  static #helpSectionInHeader = '[data-testid="Hilfeartikel"]'
  static #sendRequestOrProblemInHeader = '[data-testid="Hilfekontakt"]'
  static #advancedTrainingsInHeader = '[data-testid="Fortbildung"]'
  static #helpPageTitle = '[id="page-title"]'
  static #helpFirstSteps = '#erste_schritte > .icon-card__content > .h4'
  static #helpLessons = '[id="Unterricht"]'
  static #helpOrganization = '[id="Organisation"]'
  static #helpNutzungshilfen = '[id="nutzungshilfen"]'
  static #helpContactform = 'h2.h4'
  static #popUpLink = 'https://lernen.cloud'

  clickQuestionIcon () {
    cy.visit('/dashboard')
    cy.get(Help.#questionIcon).click()
  }

  clickHelpSectionInHeader () {
    cy.get(Help.#helpSectionInHeader).click()
  }

  clickSendRequestOrProblemInHeader () {
    cy.get(Help.#sendRequestOrProblemInHeader).click()
  }

  advancedTrainingsInHeader () {
    cy.get(Help.#advancedTrainingsInHeader).should($a => {
      expect($a.attr('href'), 'href').to.equal(Help.#popUpLink)
      expect($a.attr('target'), 'target').to.equal('_blank')
    })
  }

  seeHelpArticlesPage () {
    cy.get(Help.#helpPageTitle)
    cy.contains('Hilfeartikel')
    cy.get(Help.#helpFirstSteps)
    cy.contains('Erste Schritte')
    cy.get(Help.#helpLessons)
    cy.contains('Unterricht')
    cy.get(Help.#helpOrganization)
    cy.contains('Organisation')
    cy.get(Help.#helpNutzungshilfen)
    cy.contains('Nutzungshilfen')
  }

  seeHelpContactPage () {
    cy.get(Help.#helpPageTitle)
    cy.contains('Kontakt')
    cy.get(Help.#helpContactform)
    cy.contains('Kontaktformular')
  }
}
export default Help
