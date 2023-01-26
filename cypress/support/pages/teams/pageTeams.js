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
  static #teamTitle = '[data-testid="title_of_an_element"]'
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
    activateMessengerText: 'Messenger für Team aktivieren',
    activateVideoMessengerText: 'Videokonferenzen für Team aktivieren'
  }

  doNotSeeDeletedStudentInTeam () {
    cy.get(Teams.#studentTableBody)
      .find(
        Teams.#teamMemberInTable,
        Teams.#testAssertionData.lastName
      )
      .should('not.exist')
      .wait([
        '@alerts_api'
      ])
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
      })
  }

  removeStudentInTeam () {
    cy.get(Teams.#studentTableBody)
      .contains(
        Teams.#teamMemberInTable,
        Teams.#testAssertionData.lastName
      )
      .then(tableRow => {
        cy.wrap(tableRow)
          .find(Teams.#deleteIconInTableViewRow)
          .click()
        cy.get(Teams.#confirmTeamMemberDeleteButton)
          .contains(Teams.#testAssertionData.deletePopupText)
          .click()
      })
  }

  seeNewlyAddedStudentAsInternalTeamMember () {
    cy.get(Teams.#studentTableBody).find(
      Teams.#teamMemberInTable,
      Teams.#testAssertionData.lastName
    )
  }

  clickOnAddingNewTeamMemberButton () {
    cy.get(Teams.#confirmTeamMemberAddButton)
      .click({ multiple: true, force: true})
  }

  selectInternalTeamMember () {
    cy.get(Teams.#selectInternalTeamMember, { timeout: 200000 }).invoke(
      'show'
    )
    cy.get(Teams.#selectInternalTeamMember, { timeout: 20000 })
      .should('be.visible')
      .select(Teams.#testAssertionData.fullName, { force: true })
  }

  clickOnAddInternalAttendeees () {
    cy.get(Teams.#addInternalTeamMemberButton).click()
  }

  clickOnManageTeamMembersEditOption () {
    cy.get(Teams.#manageTeamMembersOption)
      .click()
      .wait([
        '@alerts_api'
      ])
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
      })
  }

  clickOnThreeDotToManageTeam () {
    cy.get(Teams.#threeDotManageTeam).click() //.contains('Musik')
  }

  clickOnCreateNewsOnTeamDetailPage () {
    cy.get(Teams.#createNewsButtonOnTeamDetail)
      .click()
      .then(object => {
        cy.wrap(object)
          .wait([ '@runtime_config_api', '@public_api', '@me_api', '@roles_api', '@schools_api', '@alert_api'])
          .then(interceptions => {
            expect(interceptions[0].response.statusCode).to.equal(200)
            expect(interceptions[1].response.statusCode).to.equal(200)
            expect(interceptions[2].response.statusCode).to.equal(200)
            expect(interceptions[3].response.statusCode).to.equal(200)
            expect(interceptions[4].response.statusCode).to.equal(200)
            expect(interceptions[5].response.statusCode).to.equal(200)
          })
      })
  }

  clickOnNewsTabInTeamDetailPage () {
    cy.get(Teams.#newsTabOnTeamDetail).click()
  }

  navigateToTeamsOverview () {
    cy.get(Teams.#teamsOverviewNavigationButton)
    .click()
    .wait([
      '@alerts_api'
    ])
    .then(interceptions => {
      expect(interceptions.response.statusCode).to.equal(200)
    })
    cy.url()
    .should('include', '/teams')
  }

  selectTeam (teamName) {
    cy.get(Teams.#teamTitle)
      .contains(teamName)
      .click()
      .wait([
        '@alerts_api',
      ])
      .then(interceptions => {
        expect(interceptions.response.statusCode).to.equal(200)
      })
  }

  openTeamSettings () {
    cy.get(Teams.#teamSettings)
      .eq(0)
      .click()
  }

  editTeam () {
    cy.get(Teams.#editTeam)
      .eq(0)
      .click()
  }

  canSeeTeamChat () {
    cy.get(Teams.#rocketchat).should('be.visible')
  }

  canNotSeeTeamChat () {
    cy.get(Teams.#rocketchat).should('not.exist')
  }

  canSeeTeamChatCheckbox () {
    cy.get(Teams.#teamOptions)
    cy.contains(Teams.#testAssertionData.activateMessengerText)
    cy.get(Teams.#activateRCCheckbox)
  }

  canNotSeeTeamChatCheckbox () {
    cy.get(Teams.#teamOptions)
    cy.contains(Teams.#testAssertionData.activateMessengerText).should(
      'not.exist'
    )
    cy.get(Teams.#activateRCCheckbox).should('not.exist')
  }

  canSeeTeamVideoCheckbox () {
    cy.get(Teams.#teamOptions)
    cy.contains(Teams.#testAssertionData.activateVideoMessengerText)
    cy.get(Teams.#activateConfCheckbox)
  }

  canNotSeeTeamVideoCheckbox () {
    cy.get(Teams.#teamOptions)
    cy.contains(Teams.#testAssertionData.activateVideoMessengerText
    ).should('not.exist')
    cy.get(Teams.#activateConfCheckbox).should('not.exist')
  }

  enableMessangerInTeamEdit () {
    cy.get(Teams.#messangerActivation).click()
  }

  clickOnSaveAfterEdit () {
    cy.get(Teams.#saveButton).click()
  }

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

  clickOnAddButtonToCreateTeam () {
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