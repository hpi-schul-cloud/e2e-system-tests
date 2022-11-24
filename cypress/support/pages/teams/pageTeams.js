'use strict'

class Teams {
  static #addNewTeamButton = '[data-testid="add-team-btn"]'
  static #teamName = '[data-testid="team_name"]'
  static #teamDescription = '[data-testid="description_team"]'
  static #teamColourDropdown = '.sp-preview' //data-testid is to be added
  static #teamCreateButton = '[data-testid ="create_team_btn"]'
  static #teamNameOnOverviewPage = '[data-testid="title_of_an_element"]'
  static #teamDescriptionOnOverviewPage = '[data-testid="body_of_element"]'
  static #teamSettings = '[data-testid="team_settings"]'
  static #teamEditOption = '[data-testid="edit_team_members"]' //data-testid is to be updated with correct name
  static #teamSaveChanges = '[data-testid="create_team_btn"]' //data-testid is to be updated with correct name
  static #teamDeleteOption = '[data-testid="delete_team_members"]'
  static #teamDeleteOnDialogBox = '[data-testid="btn-submit-action"]'

  doNotSeeTeam (teamName) {
    cy.get(Teams.#teamNameOnOverviewPage)
      .contains(teamName)
      .should('not.exist')
  }

  confirmDeleteOnDialogBox () {
    cy.get(Teams.#teamDeleteOnDialogBox).click()
  }

  clickOnDeleteOption () {
    cy.get(Teams.#teamDeleteOption).click()
  }

  clickOnSaveChangeButton () {
    cy.get(Teams.#teamSaveChanges)
      .click()
      .waitForNetworkIdle(5000)
  }

  clickOnEditOption () {
    cy.get(Teams.#teamEditOption)
      .click()
      .waitForNetworkIdle(5000)
  }

  seeTeamEditPage () {
    cy.url().should('include', '/edit')
  }

  clickOnTeamSettings () {
    cy.get(Teams.#teamSettings)
      .eq(1)
      .click()
  }

  clickOnAddTeam () {
    cy.get(Teams.#addNewTeamButton)
      .click()
      .waitForNetworkIdle(5000)
  }

  seeTeamCreationPage () {
    cy.url().should('include', '/teams/add')
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

  selectTeamColour () {
    cy.get(Teams.#teamColourDropdown).click()
  }

  clickOnAddButton () {
    cy.get(Teams.#teamCreateButton)
      .click()
      .waitForNetworkIdle(5000)
  }

  seeCreatedTeamName (teamName) {
    cy.get(Teams.#teamNameOnOverviewPage)
      .contains(teamName)
      .should('be.visible')
  }

  seeCreatedTeamDescription (desc) {
    cy.get(Teams.#teamDescriptionOnOverviewPage)
      .contains(desc)
      .should('be.visible')
  }
}
export default Teams
