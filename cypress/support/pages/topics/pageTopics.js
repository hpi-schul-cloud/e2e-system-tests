'use strict'

class Topics {
  static #pageTitle = '[id="page-title"]'
  static #localeDateFormat = 'de-DE'
  static #contentBlocks = '[id="content-blocks"]'
  static #topicTitleInput = '[id="topicTitleInput"]'
  static #addTextBtn = '[data-testid="topic-addcontent-text-btn"]'
  static #addGeoGebraBtn = '[data-testid="topic-addcontent-geogebra-btn"]'
  static #addLearningMaterialBtn = '[data-testid="topic-addcontent-material-btn"]'
  static #addEtherpadBtn = '[data-testid="topic-addcontent-etherpad-btn"]'
  static #addTaskBtn = '[data-testid="topic-addcontent-task-btn"]'
  static #submitChangesInTopicBtn = '[data-testid="topic-submitchanges-btn"]'
  static #elementTextDescriptionTextarea = '[class="ck ck-editor__main"]'
  // static #groupSubmissionCheckbox = '[id="teamSubmissions"]'
  // static #draftCheckbox = '[data-testid="private-checkbox"]'

  seeEditTopicPage (topicTitle) {
    if (topicTitle === '-'){
      cy.get(Topics.#topicTitleInput)
        .should('have.value', '')
    } else {
      cy.get(Topics.#topicTitleInput)
        .should('have.value', topicTitle)
    }
  }

  enterTopicTitle (topicTitle) {
    cy.get(Topics.#topicTitleInput).clear()
    cy.get(Topics.#topicTitleInput).type(topicTitle)
  }

  clickOnAddTextToTopic() {
    cy.get(Topics.#addTextBtn).click()
  }

  clickOnAddGeoGebraToTopic() {
    cy.get(Topics.#addGeoGebraBtn).click()
  }

  clickOnAddLearningMaterialToTopic() {
    cy.get(Topics.#addLearningMaterialBtn).click()
  }

  clickOnAddEtherpadToTopic() {
    cy.get(Topics.#addEtherpadBtn).click()
  }

  clickOnAddTaskToTopic() {
    cy.get(Topics.#addTaskBtn).click()
  }

  clickOnSubmitChangesInTopicBtn() {
    cy.get(Topics.#submitChangesInTopicBtn)
      .click()
      .wait([
        '@alerts_api'
      ])
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
      })
  }

  seeFormElementText() {
    cy.get(Topics.#contentBlocks)
      .find('textarea')
      .should('have.attr', 'name', 'contents[0][content][text]')
  }

  enterTitleforElementText(elementTextTitle) {
    cy.get(Topics.#contentBlocks)
      .find('input')
      .should('have.attr', 'name', 'contents[0][title]')
      .eq(0) // should be replaced by a better identifier
      .type(elementTextTitle)
  }

  enterDescriptionforElementText(elementTextDescription) {
    cy.get(Topics.#elementTextDescriptionTextarea)
      .find('div > p')
      .clear()
    cy.get(Topics.#elementTextDescriptionTextarea)
      .find('div > p')
      .type(elementTextDescription)
  }

  enterTitleforElementGeoGebra(elementGeoGebraTitle) {
    cy.get(Topics.#contentBlocks)
      .find('input')
      .eq(1)
      .should('have.attr', 'name', 'contents[1][title]')
      .eq(0) // should be replaced by a better identifier
      .type(elementGeoGebraTitle)
  }

  enterDescriptionforElementGeoGebra(elementGeoGebraDescription) {
    // cy.get(Topics.#elementTextDescriptionTextarea)
    //   .find('div > p')
    //   .clear()
    // cy.get(Topics.#elementTextDescriptionTextarea)
    //   .find('div > p')
    //   .type(elementTextDescription)
  }

}
export default Topics
