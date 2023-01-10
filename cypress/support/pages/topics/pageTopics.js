'use strict'

class Topics {
  static #pageTitle = '[id="page-title"]'
  static #localeDateFormat = 'de-DE'
  static #topicTitleInput = '[id="topicTitleInput"]'
  // static #groupSubmissionCheckbox = '[id="teamSubmissions"]'
  // static #draftCheckbox = '[data-testid="private-checkbox"]'

  seeCreateTopicPage (topicTitle) {
    if (topicTitle === '-'){
      cy.get(Topics.#topicTitleInput)
        .should('be.empty')
    } else {
      cy.get(Topics.#topicTitleInput)
        .should('have.value', topicTitle)
    }
  }

  enterTopicTitle (topicTitle) {
    cy.get(Topics.#topicTitleInput).clear()
    cy.get(Topics.#topicTitleInput).type(topicTitle)
  }

}
export default Topics
