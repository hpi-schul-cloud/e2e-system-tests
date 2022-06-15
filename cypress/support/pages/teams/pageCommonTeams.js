'use strict'

class Teams_Common {

  static #teamTitle = '[data-testid="title_of_an_element"]'
  static #teamSettings = '[data-testid="team_settings"]'
  static #manageTeamMembers = '[data-testid="administrate_team_members"]'
  static #editTeam = '[data-testid="edit_team_members"]' //'i.fa-edit'
  static #deleteTeam = '[data-testid="delete_team_members"]' //'i.fa fa-trash'
  static #rocketchat = '[data-testid="rocketchat_wrapper"]' //'[class="rocketchat"]'
  static #teamOptions = '[data-testid="team_options"]' //'.section-course'
  static #activateRCCheckbox = '[data-testid="rocketchat_checkbox"]' //'#activateRC'
  static #activateConfCheckbox =  '[data-testid="videoconf_checkbox"]'  //'#activateConf'
  static #teamsOverviewNavigationButton = '[data-testid="Teams"]'
  static #messangerActivation = '[data-testid="rocketchat_checkbox"]'
  static #saveButton = '[data-testid="create_team_btn"]'

  navigateToTeamsOverview() {
    //cy.visit('/teams')
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

  enableMessangerInTeamEdit() {
    cy.get(Teams_Common.#messangerActivation).click()
  }

  clickOnSaveAfterEdit () {
    cy.get(Teams_Common.#saveButton).click()
  }
}
export default Teams_Common