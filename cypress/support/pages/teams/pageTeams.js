'use strict'

class Teams {

  static #addNewTeamButton ='[data-testid="add_team_button"]'
  static #addNewTeamEmptyOverviewButton ='[data-testid="add_team_button_empty_overview"]'
  static #teamName = '[data-testid="team_name"]'
  static #teamDescription = '[data-testid="description_team"]'
  static #teamColourDropdown = '[data-testid="selector"]'
  static #teamCreateButton = '[data-testid ="save_team_button"]'
  static #teamNameOnOverviewPage = '[data-testid="title_of_an_element"]'
  static #teamDescriptionOnOverviewPage = '[data-testid="body_of_element"]'
  static #teamSettings = '[data-testid="team_settings"]'
  static #teamEditOption = '[data-testid="edit_team"]'
  static #teamSaveChanges = '[data-testid="save_team_button"]'
  static #teamDeleteOption = '[data-testid="delete_team_members"]'
  static #teamDeleteOnDialogBox = '[data-testid="btn-submit-action"]'
  static #teamMainSection = 'main > section'



  doNotSeeTeam (teamName) {
    cy.get(Teams.#teamMainSection)
      .contains(teamName)
      .should('not.exist')
  }

  confirmDeleteOnDialogBox () {
    cy.get(Teams.#teamDeleteOnDialogBox)
      .click()
  }

  clickOnDeleteOption () {
    cy.get(Teams.#teamDeleteOption)
      .click()
  }

  clickOnSaveChangeButton () {
    cy.get(Teams.#teamSaveChanges)
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
    cy.get(Teams.#teamMainSection).then(($element) => {
      if ($element.hasClass('empty-state')) {
        cy.get(Teams.#addNewTeamEmptyOverviewButton)
          .click()
          .wait([
            '@alerts_api',
          ])
          .then(interceptions => {
            expect(interceptions.response.statusCode).to.equal(200)
          })
      } else {
        cy.get(Teams.#addNewTeamButton)
          .click()
          .wait([
            '@alerts_api',
          ])
          .then(interceptions => {
            expect(interceptions.response.statusCode).to.equal(200)
          })
        }
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

  selectTeamColour () {
    cy.get(Teams.#teamColourDropdown)
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
      .should('be.visible')
  }

  seeCreatedTeamDescription (desc) {
    cy.get(Teams.#teamDescriptionOnOverviewPage)
      .contains(desc)
      .should('be.visible')
  }
}
export default Teams