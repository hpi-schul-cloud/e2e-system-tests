'use strict'

class Teams {

  static #addNewTeamButton ='[data-testid="add-team-btn"]'
  static #teamName = '[data-testid="team_name"]'
  static #teamDescription = '[data-testid="description_team"]'
  static #teamChatActivateCheckBox = '[id="activateRC"]'
  static #teamVideoActivationCheckBox = '[id="activateConf"]'
  static #teamColourDropDown = '.sp-preview' //data-testid is to be added
  static #teamCreateButton = '[data-testid ="create_team_btn"]'
  static #teamNameOnOverviewPage = '[data-testid="title_of_an_element"]'
  static #teamDescriptionOnOverviewPage = '[data-testid="body_of_element"]'
  static #teamSettings = '[data-testid="team_settings"]'
  static #teamEditOption = '[data-testid="edit_team_members"]' //data-testid is to be updated with correct name
  static #teamSaveChages = '[data-testid="create_team_btn"]' //data-testid is to be updated with correct name
  static #teamDeleteOption = '[data-testid="delete_team_members"]'
  static #teamDeleteOnDailogBox = '[data-testid="btn-submit-action"]'



  doNotSeeTeam (teamName) {
    cy.get(Teams.#teamNameOnOverviewPage)
      .contains(teamName)
      .should('not.exist')
  }

  confirmDeleteOnDialogBox () {
    cy.get(Teams.#teamDeleteOnDailogBox)
      .click()
  }

  clickOnDeleteOption () {
    cy.get(Teams.#teamDeleteOption)
      .click()
  }

  clickOnSaveChangeButton () {
    cy.get(Teams.#teamSaveChages)
    .click()
    .wait([
      '@alerts_api',
    ])
    .then(interceptions => {
      expect(interceptions.response.statusCode).to.equal(200)
    })
  }

  clickOnEditOption () {
    cy.get(Teams.#teamEditOption)
      .click()
      .wait([
        '@alerts_api',
      ])
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
      })
  }

  seeTeamEditPage () {
      cy.url()
        .should('include','/edit')
  }

  clickOnTeamSettings () {
    cy.get(Teams.#teamSettings)
      .eq(1)
      .click()
  }

  clickOnAddTeam () {
    cy.get(Teams.#addNewTeamButton)
      .click()
      .wait([
        '@alerts_api',
      ])
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
      })
  }

  seeTeamCreationPage () {
    cy.url()
      .should('include', '/teams/add')
  }

  enterTeamName (teamName) {
    cy.get(Teams.#teamName)
      .clear()
      .type(teamName)
  }

  enterTeamDescription (desc) {
    cy.get(Teams.#teamDescription)
    .clear()
    .type(desc)
  }

  seeChatActivationOption () {
    cy.get(Teams.#teamChatActivateCheckBox)
      .should('be.visible')
  }

  seeVideoActivationOption () {
    cy.get(Teams.#teamVideoActivationCheckBox)
      .should('be.visible')
  }

  selectTeamColour () {
    cy.get(Teams.#teamColourDropDown)
      .click()
  }

  clickOnAddButton () {
    cy.get(Teams.#teamCreateButton)
      .click()
      .wait([
        '@alerts_api',
      ])
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
      })
  }

  seeCreatedTeamName (teamName) {
    cy.get(Teams.#teamNameOnOverviewPage)
      .contains(teamName)
  }

  seeCreatedTeamDescription (desc) {
    cy.get(Teams.#teamDescriptionOnOverviewPage)
      .contains(desc)
  }
}
export default Teams