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
  static #teamCalandertab = '[data-testid="team_calendar_tab"]'
  static #addTeamEventButton = '[data-testid="add_team_event"]'
  static #teamEventCreteModal = '[data-testid="modal_content"]'
  static #teamEventTitleInput ='[data-testid="team_event_name"]'
  static #teamEventStartDateTime = '[data-testid="form-datetime-input-startDate"]'
  static #teamEventEndDateTime = '[data-testid="form-datetime-input-endDate"]'
  static #teamEventDescrptionInput = '[data-testid="team_event_description"]'
  static #teamEventPlaceInput = '[data-testid="team_event_location"]'
  static #teamEventSaveButton = '[data-testid="btn-submit"]'
  static #teamEventEditIcon = '[data-testid="edit_team_event"]'
  static #teamEventDeleteButton = '[data-testid="delete_team_event"]'

  doNotSeeTeamEventTitle (editedEventTitle) {
    cy.contains(editedEventTitle)
      .should('not.be.visible')
  }

  deleteTeamEvent () {
    cy.get(Teams.#teamEventDeleteButton)
      .click()
  }

  editedTeamEventDescriptionIsVisible (editedEventTitle) {
    cy.contains(editedEventTitle)
  }

  editedTeamEventTitleIsVisible (editedEventTitle) {
    cy.contains(editedEventTitle)
     .should('be.visible')
  }

  editTeamEventDescription (editedEventDescription) {
    cy.get(Teams.#teamEventDescrptionInput)
    .eq(1)
    .type(editedEventDescription)
  }

  editTeamEventPlace (editedEventPlace) {
    cy.get(Teams.#teamEventPlaceInput)
    .eq(1)
    .type(editedEventPlace)
  }

  editTeamEventTitle (editedEventTitle) {
    cy.get(Teams.#teamEventTitleInput)
      .eq(1)
      .type(editedEventTitle)
  }

  clickOnTeamsEditOption () {
    cy.get(Teams.#teamEventEditIcon)
      .click()
  }

  seeTeamEventTitleIsVisible (eventTitle) {
    cy.contains(eventTitle)
  }

  clickOnSaveTeamEvent () {
    cy.get(Teams.#teamEventSaveButton)
      .click()
  }

  enterTeamEventPlace (eventPlace) {
    cy.get(Teams.#teamEventPlaceInput)
      .eq(1)
      .type(eventPlace)
  }

  enterTeamEventDescription (eventDescription) {
    cy.get(Teams.#teamEventDescrptionInput)
      .eq(1)
      .type(eventDescription)
  }

  selectTeamEventEndDate () {
    cy.get(Teams.#teamEventEndDateTime)
      .should('be.visible')
  }

  selectTeamEventStartDate () {
    cy.get(Teams.#teamEventStartDateTime)
      .should('be.visible')
  }

  enterTeamEventTitle (eventTitle) {
    cy.get(Teams.#teamEventTitleInput)
      .eq(1)
      .type(eventTitle)
  }

  seeTeamEventCreationForm () {
    cy.get(Teams.#teamEventCreteModal)
      .should('be.visible')
  }

  clickOnAddTeamsAppointment () {
    cy.get(Teams.#addTeamEventButton)
      .click()
  }

  goToTeamsCalendarTab () {
    cy.get(Teams.#teamCalandertab)
      .click()
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