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
  static #popUpLink = 'https://lernen.cloud/'
  static #searchBar = '.search'
  static #searchResult = '.live-search-results'
  static #bugFormHeadline = '.bug_form > label:nth-child(12) > input:nth-child(2)'
  static #bugFormMail = '.bug_form > label:nth-child(15) > input:nth-child(2)'
  static #bugFormSubmitButton = '.bug_form > button'
  static #feedbackSendConfirmation = '[data-testid="notification"]'

  clickQuestionIcon() {
    cy.visit('/dashboard')
    cy.get(Help.#questionIcon).click()
  }

  clickHelpSectionInHeader() {
    cy.get(Help.#helpSectionInHeader).click()
  }

  clickSendRequestOrProblemInHeader() {
    cy.get(Help.#sendRequestOrProblemInHeader).click()
  }

  advancedTrainingsInHeader() {
    cy.get(Help.#advancedTrainingsInHeader).should($a => {
      expect($a.attr('href'), 'href').to.equal(Help.#popUpLink)
      expect($a.attr('target'), 'target').to.equal('_blank')
    })
  }

  seeHelpArticlesPage() {
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

  seeHelpContactPage() {
    cy.get(Help.#helpPageTitle)
    cy.contains('Kontakt')
    cy.get(Help.#helpContactform)
    cy.contains('Kontaktformular')
  }

  enterKeywordInSearchbar() {
    cy.get(Help.#searchBar).type('Hilfe')
  }

  fillOutContactForm() {
    cy.get(Help.#bugFormHeadline).type('Dies ist ein Test!')
    cy.get(Help.#bugFormMail).type('test@example.com')
    cy.get(Help.#bugFormSubmitButton).click()
  }

  seeHelpArticle() {
    cy.get(Help.#searchResult)
    cy.contains('Erste Schritte')
  }

  sendFormToSupport() {
    cy.get(Help.#feedbackSendConfirmation)
    cy.contains('Feedback erfolgreich versendet!')
  }
}
export default Help