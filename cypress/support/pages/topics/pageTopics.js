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
  static #cardHeader = '[class="card-header"]'
  static #cardBlock = '[class="card-block"]'
  static #elementTextCard = '[data-testid="topic-content-element-text-0"]'
  static #elementGeoGebraCard = '[data-testid="topic-content-element-geoGebra-1"]'
  static #elementLearningMaterialCard =  '[data-testid="topic-content-element-resources-2"]'
  static #elementEtherpadCard =  '[data-testid="topic-content-element-Etherpad-3"]'
  static #addLearningMaterialToContentBtn = '[data-testid="topic-material-addmaterial-btn"]'
  static #submitChangesInTopicBtn = '[data-testid="topic-submitchanges-btn"]'
  static #elementTextDescriptionTextarea = '[class="ck ck-editor__main"]'
  static #inputClassFormControl = '[class="form-control"]'
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
    cy.get(Topics.#elementTextCard).within(() => {
      cy.get(Topics.#cardHeader)
        .find('div > input')
        .eq(0)
        .type(elementTextTitle)
    })
  }

  enterDescriptionforElementText(elementTextDescription) {
    cy.get(Topics.#elementTextCard).within(() => {
      cy.get(Topics.#elementTextDescriptionTextarea)
        .find('div > p')
        .clear()
        .type(elementTextDescription)
    })
  }

  enterTitleforElementGeoGebra(elementGeoGebraTitle) {
    cy.get(Topics.#elementGeoGebraCard).within(() => {
      cy.get(Topics.#cardHeader)
        .find('div > input')
        .eq(0)
        .type(elementGeoGebraTitle)
    })
  }

  enterIDforElementGeoGebra(geoGebraMaterialID) {
    cy.get(Topics.#elementGeoGebraCard).within(() => {
      cy.get(Topics.#cardBlock)
        .find('div > input')
        .type(geoGebraMaterialID)
    })
  }

  enterTitleforElementLearningMaterial(elementLearningMaterialTitle) {
    cy.get(Topics.#elementLearningMaterialCard).within(() => {
      cy.get(Topics.#cardHeader)
        .find('div > input')
        .eq(0)
        .type(elementLearningMaterialTitle)
    })
  }

  seeAddMaterialBtnInContent() {
    cy.get(Topics.#elementLearningMaterialCard).within(() => {
      cy.get(Topics.#addLearningMaterialToContentBtn)
        .should('be.visible')
    })
  }

  enterTitleforElementEtherpad(elementEtherpadTitle) {
    cy.get(Topics.#elementEtherpadCard).within(() => {
      cy.get(Topics.#cardHeader)
        .find('div > input')
        .eq(0)
        .type(elementEtherpadTitle)
    })
  }

  enterDescriptionforElementEtherpad(elementEtherpadDescription) {
    cy.get(Topics.#elementEtherpadCard).within(() => {
      cy.get(Topics.#cardBlock)
        .find('textarea')
        .type(elementEtherpadDescription)
    })
  }

}
export default Topics
