'use strict'

class Teams_Common {

  static #teamTitle = '[data-testid="title_of_an_element"]'
  static #teamSettings = '[data-testid="team_settings"]'
  static #manageTeamMembers = '[data-testid="administrate_team_members"]'
  static #editTeam = 'i.fa-edit'
  static #deleteTeam = 'i.fa fa-trash'
  static #rocketchat = '[class="rocketchat"]'
  static #teamOptions = '.section-course'
  static #activateRCCheckbox = '#activateRC'
  static #activateConfCheckbox = '#activateConf'
  static #teamsOverviewNavigationButton = '[data-testid="Teams"]'

  navigateToTeamsOverview() {
    cy.visit('/teams')
    cy.get(Teams_Common.#teamsOverviewNavigationButton).click()
    cy.url().should('include', '/teams')
  }

  selectTeam() {
    cy.get(Teams_Common.#teamTitle).eq(0).click()
  }

  openTeamSettings() {
    cy.get(Teams_Common.#teamSettings).eq(0).click()
  }

  editTeam() {
    cy.get(Teams_Common.#editTeam).eq(0).click()
  }

  canSeeTeamChat() {
    cy.get(Teams_Common.#rocketchat).should('be.visible')
    //cy.contains('Beginn des Gesprächs')
  }

  canNotSeeTeamChat() {
    cy.get(Teams_Common.#rocketchat).should('not.exist')
  }

  canSeeTeamChatCheckbox() {
    cy.get(Teams_Common.#teamOptions)
    cy.contains('Messenger für Team aktivieren')
    cy.get(Teams_Common.#activateRCCheckbox)
  }

  canNotSeeTeamChatCheckbox() {
    cy.get(Teams_Common.#teamOptions)
    cy.contains('Messenger für Team aktivieren').should('not.exist')
    cy.get(Teams_Common.#activateRCCheckbox).should('not.exist')
  }

  canSeeTeamVideoCheckbox() {
    cy.get(Teams_Common.#teamOptions)
    cy.contains('Videokonferenzen für Team aktivieren')
    cy.get(Teams_Common.#activateConfCheckbox)
  }

  canNotSeeTeamVideoCheckbox() {
    cy.get(Teams_Common.#teamOptions)
    cy.contains('Videokonferenzen für Team aktivieren').should('not.exist')
    cy.get(Teams_Common.#activateConfCheckbox).should('not.exist')
  }
}
export default Teams_Common