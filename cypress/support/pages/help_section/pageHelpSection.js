'use strict'

class Help {
  static #questionIcon = '[data-testid="help_top_menu"]'
  static #helpSectionInHeader = '[data-testid="Hilfeartikel"]'
  static #sendRequestOrProblemInHeader = '[data-testid="Hilfekontakt"]'
  static #advancedTrainingsInHeader = '[data-testid="Fortbildung"]'
  static #helpPageTitle = '[id="page-title"]'
  static #helpFirstSteps = '#erste_schritte > .icon-card__content > .icon-card__title'
  static #helpLessons = '[id="Unterricht"]'
  static #helpOrganization = '[id="Organisation"]'
  static #helpNutzungshilfen = '[id="nutzungshilfen"]'
  static #helpContactform = 'h2.h4'
  static #popUpLink = 'https://lernen.cloud/'
  static #searchBar = '[data-testid="help_search_bar"]'
  static #searchResult = '[data-testid="help_search_results"]'
  static #bugFormHeadline = '[data-testid="bug_headline"]'
  static #bugFormMail = '[data-testid="bug_email"]'
  static #bugFormSubmitButton = '[data-testid="bug_submit"]'
  static #feedbackSendConfirmation = '[data-testid="notification"]'

  clickQuestionIcon () {
    cy.get(Help.#questionIcon).click()
  }

  clickHelpSectionInHeader () {
    cy.get(Help.#helpSectionInHeader).click()
  }

  clickSendRequestOrProblemInHeader () {
    cy.get(Help.#sendRequestOrProblemInHeader)
      .click({timeout: 10000})
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

  enterKeywordInSearchbar () {
    cy.get(Help.#searchBar).type('Hilfe')
  }

  fillOutContactForm () {
    cy.get(Help.#bugFormHeadline).type('Dies ist ein Test!')
    cy.get(Help.#bugFormMail).type('test@example.com')
    cy.get(Help.#bugFormSubmitButton)
      .click({timeout: 20_000})
  }

  seeHelpArticle () {
    cy.get(Help.#searchResult)
    cy.contains('Erste Schritte')
  }

  sendFormToSupport () {
    cy.get(Help.#feedbackSendConfirmation)
    cy.contains('Feedback erfolgreich versendet!')
  }
}
export default Help
