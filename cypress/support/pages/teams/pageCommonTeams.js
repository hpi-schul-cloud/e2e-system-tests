'use strict'

class Teams_Common {

  static #teamTitle = '[data-testid="title_of_an_element"]'
  static #teamSettings = '[data-testid="team_settings"]'
  static #editTeam = '[data-testid="edit_team_members"]'
  static #rocketchat = '[data-testid="rocketchat_wrapper"]'
  static #teamOptions = '[data-testid="team_options"]'
  static #activateRCCheckbox = '[data-testid="rocketchat_checkbox"]'
  static #activateConfCheckbox =  '[data-testid="videoconf_checkbox"]'
  static #teamsOverviewNavigationButton = '[data-testid="Teams"]'
  static #messangerActivation = '[data-testid="rocketchat_checkbox"]'
  static #saveButton = '[data-testid="create_team_btn"]'
  static #newsTabOnTeamDetail = '[data-tab="js-news"]'
  static #createNewsButtonOnTeamDetail = '[data-testid="create_a_team"]'
  static #threeDotManageTeam = '[id="page-title"]'
  static #manageTeamMembersOption = '[data-testid="administrate_team_members"]'
  static #addInternalTeamMemberButton = '[data-testid="internal_team_members"]'
  static #selectInternalTeamMember = '[data-testid="select_team_members_add"]'
  static #studentTableBody = '[data-testid="students_names_container"]'
  static #confirmTeamMemberAddButton = '[data-testid="btn-submit"]'
  static #confirmTeamMemberDeleteButton= '[data-testid="btn-submit"]'
  static #deleteIconInTableViewRow = '[data-testid="btn-delete-team-member"]'


  doNotSeeDeletedStudentInTeam(){
    cy.get(Teams_Common.#studentTableBody).find('tr td','Herbert').should('not.exist')
  }

  removeStudentInTeam () {
    cy.get(Teams_Common.#studentTableBody).contains('tr', 'Herbert').then(tableRow => {
      cy.wrap(tableRow).find(Teams_Common.#deleteIconInTableViewRow).click()
      cy.get(Teams_Common.#confirmTeamMemberDeleteButton).contains('Teilnehmer:in löschen').click()
    })
  }

  seeNewlyAddedStudentAsInternalTeamMember () {
    cy.get(Teams_Common.#studentTableBody).find('tr td','Herbert')
  }

  clickOnAddButton(){
    cy.get(Teams_Common.#confirmTeamMemberAddButton).contains('Hinzufügen').click()
  }

  selectInternalTeamMember(){
    cy.get(Teams_Common.#selectInternalTeamMember).invoke('show')
    cy.get(Teams_Common.#selectInternalTeamMember).select('Kraft, Herbert')
  }

  clickOnAddInternalAttendeees(){
    cy.get(Teams_Common.#addInternalTeamMemberButton).click()
  }

  clickOnManageTeamMembersEditOption(){
    cy.get(Teams_Common.#manageTeamMembersOption).click()
  }

  clickOnThreeDotToManageTeam(){
    cy.get(Teams_Common.#threeDotManageTeam).click() //.contains('Musik')
  }

  clickOnCreateNewsOnTeamDetailPage(){
    cy.get(Teams_Common.#createNewsButtonOnTeamDetail).click()
  }

  clickOnNewsTabInTeamDetailPage() {
    cy.get(Teams_Common.#newsTabOnTeamDetail).click()
  }

  navigateToTeamsOverview() {
    cy.get(Teams_Common.#teamsOverviewNavigationButton).click()
    cy.url().should('include', '/teams')
  }

  selectTeam(teamName) {
    cy.get(Teams_Common.#teamTitle).contains(teamName)
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