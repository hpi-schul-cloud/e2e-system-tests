'use strict'

class Teams_Common {
  static #teamTitle = '[data-testid="title_of_an_element"]'
  static #teamSettings = '[data-testid="team_settings"]'
  static #editTeam = '[data-testid="edit_team"]'
  static #rocketchat = '[data-testid="rocketchat_wrapper"]'
  static #teamOptions = '[data-testid="team_options"]'
  static #activateRCCheckbox = '[data-testid="rocketchat_checkbox"]'
  static #activateConfCheckbox = '[data-testid="videoconf_checkbox"]'
  static #teamsOverviewNavigationButton = '[data-testid="Teams"]'
  static #messangerActivation = '[data-testid="rocketchat_checkbox"]'
  static #saveButton = '[data-testid="save_team_button"]'
  static #newsTabOnTeamDetail = '[data-tab="js-news"]'
  static #createNewsButtonOnTeamDetail = '[data-testid="create_a_team"]'
  static #threeDotManageTeam = '[id="page-title"]'
  static #manageTeamMembersOption = '[data-testid="administrate_team_members"]'
  static #addInternalTeamMemberButton = '[data-testid="internal_team_members"]'
  static #selectInternalTeamMember = '[data-testid="select_team_members_add"]'
  static #studentTableBody = '[data-testid="students_names_container"]'
  static #confirmTeamMemberAddButton = '[data-testid="btn-submit"]'
  static #confirmTeamMemberDeleteButton = '[data-testid="btn-submit"]'
  static #deleteIconInTableViewRow = '[data-testid="btn-delete-team-member"]'
  static #teamMemberInTable = 'tr'

  static #testAssertionData = {
    firstName: 'Kraft',
    lastName: 'Herbert',
    fullName: 'Kraft, Herbert',
    deletePopupText: 'Teilnehmer:in löschen',
    addButtonText: 'Hinzufügen',
    activateMessengerText: 'Messenger für Team aktivieren',
    activateVideoMessengerText: 'Videokonferenzen für Team aktivieren'
  }

  doNotSeeDeletedStudentInTeam () {
    cy.get(Teams_Common.#studentTableBody)
      .find(
        Teams_Common.#teamMemberInTable,
        Teams_Common.#testAssertionData.lastName
      )
      .should('not.exist')
  }

  removeStudentInTeam () {
    cy.get(Teams_Common.#studentTableBody)
      .contains(
        Teams_Common.#teamMemberInTable,
        Teams_Common.#testAssertionData.lastName
      )
      .then(tableRow => {
        cy.wrap(tableRow)
          .find(Teams_Common.#deleteIconInTableViewRow)
          .click()
        cy.get(Teams_Common.#confirmTeamMemberDeleteButton)
          .contains(Teams_Common.#testAssertionData.deletePopupText)
          .click()
      })
  }

  seeNewlyAddedStudentAsInternalTeamMember () {
    cy.get(Teams_Common.#studentTableBody).find(
      Teams_Common.#teamMemberInTable,
      Teams_Common.#testAssertionData.lastName
    )
  }

  clickOnAddButton () {
    cy.get(Teams_Common.#confirmTeamMemberAddButton)
      .contains(Teams_Common.#testAssertionData.addButtonText)
      .click()
  }

  selectInternalTeamMember () {
    cy.get(Teams_Common.#selectInternalTeamMember, { timeout: 200000 }).invoke(
      'show'
    )
    cy.get(Teams_Common.#selectInternalTeamMember, { timeout: 20000 })
      .should('be.visible')
      .select(Teams_Common.#testAssertionData.fullName, { force: true })
  }

  clickOnAddInternalAttendeees () {
    cy.get(Teams_Common.#addInternalTeamMemberButton).click()
  }

  clickOnManageTeamMembersEditOption () {
    cy.get(Teams_Common.#manageTeamMembersOption).click()
  }

  clickOnThreeDotToManageTeam () {
    cy.get(Teams_Common.#threeDotManageTeam).click() //.contains('Musik')
  }

  clickOnCreateNewsOnTeamDetailPage () {
    cy.get(Teams_Common.#createNewsButtonOnTeamDetail)
      .click()
      .then(object => {
        cy.wrap(object)
          .wait(['@public_api', '@me_api', '@roles_api', '@schools_api'])
          .then(interceptions => {
            expect(interceptions[0].response.statusCode).to.equal(200)
            expect(interceptions[1].response.statusCode).to.equal(200)
            expect(interceptions[2].response.statusCode).to.equal(200)
            expect(interceptions[3].response.statusCode).to.equal(200)
          })
      })
  }

  clickOnNewsTabInTeamDetailPage () {
    cy.get(Teams_Common.#newsTabOnTeamDetail).click()
  }

  navigateToTeamsOverview () {
    cy.get(Teams_Common.#teamsOverviewNavigationButton)
    .click()
    .url().should('include', '/teams')
  }

  selectTeam (teamName) {
    cy.get(Teams_Common.#teamTitle).contains(teamName)
      .click()
      .wait([
        '@alerts_api',
      ])
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
      })
  }

  openTeamSettings () {
    cy.get(Teams_Common.#teamSettings)
      .eq(0)
      .click()
  }

  editTeam () {
    cy.get(Teams_Common.#editTeam)
      .eq(0)
      .click()
  }

  canSeeTeamChat () {
    cy.get(Teams_Common.#rocketchat).should('be.visible')
  }

  canNotSeeTeamChat () {
    cy.get(Teams_Common.#rocketchat).should('not.exist')
  }

  canSeeTeamChatCheckbox () {
    cy.get(Teams_Common.#teamOptions)
    cy.contains(Teams_Common.#testAssertionData.activateMessengerText)
    cy.get(Teams_Common.#activateRCCheckbox)
  }

  canNotSeeTeamChatCheckbox () {
    cy.get(Teams_Common.#teamOptions)
    cy.contains(Teams_Common.#testAssertionData.activateMessengerText).should(
      'not.exist'
    )
    cy.get(Teams_Common.#activateRCCheckbox).should('not.exist')
  }

  canSeeTeamVideoCheckbox () {
    cy.get(Teams_Common.#teamOptions)
    cy.contains(Teams_Common.#testAssertionData.activateVideoMessengerText)
    cy.get(Teams_Common.#activateConfCheckbox)
  }

  canNotSeeTeamVideoCheckbox () {
    cy.get(Teams_Common.#teamOptions)
    cy.contains(
      Teams_Common.#testAssertionData.activateVideoMessengerText
    ).should('not.exist')
    cy.get(Teams_Common.#activateConfCheckbox).should('not.exist')
  }

  enableMessangerInTeamEdit () {
    cy.get(Teams_Common.#messangerActivation).click()
  }

  clickOnSaveAfterEdit () {
    cy.get(Teams_Common.#saveButton).click()
  }
}
export default Teams_Common
