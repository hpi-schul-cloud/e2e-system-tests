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
  static #teamCalanderTab = '[data-testid="team_calendar_tab"]'
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
  static #videoConferenceCheckBoxOnTeamSetting = '[data-testid="videoconf_checkbox"]'
  static #videoToggleOnModal = '[data-toggle="toggle"]'
  static #moderatorVideoConferenceStartButton = '[data-testid="start_video_conference_link"]'
  static #teamVideoConferenceModal = '[data-testid="modal_content"]'
  static #muteParticipantToggle = '[data-testid="toggle_mute_participants"]'
  static #moderatorApprovalToggle = '[data-testid="toggle_moderator_approval_required"]'
  static #allPartipantsAreModeratorToggel = '[data-testid="toggle_all_participants_moderator"]'
  static #teamVideoConferenceStartButtonInModal = '[data-testid="btn-submit"]'
  static #disabledVideoCheckboxOnTeamEditpage = '[disabled=""]'
  static #teamVideoConferenceJoinLinkButton = '[data-testid="participate-video-conf-link"]'


  seeBBBExternalURL (bbbExtURL) {
    cy.url().should('eq', bbbExtURL)
  }

  clickOnVideoParticipantLinkButtonAsStudent () {
    cy.get(Teams.#teamVideoConferenceJoinLinkButton)
      .click()
  }

  seeVideoPartcipationButtonAsStudent () {
    cy.get(Teams.#teamVideoConferenceJoinLinkButton)
      .should('be.exist')
  }

  seeDisabledVideoConferenceOnTeamEditPage () {
    cy.get(Teams.#videoConferenceCheckBoxOnTeamSetting)
      .should('be.exist')
    cy.get(Teams.#disabledVideoCheckboxOnTeamEditpage)
      .should('be.exist')
  }

  seeModalAndToggles () {
    cy.get(Teams.#teamVideoConferenceModal)
      .should('be.exist')
    cy.get(Teams.#muteParticipantToggle)
      .should('be.exist')
    cy.get(Teams.#moderatorApprovalToggle)
      .should('be.exist')
    cy.get(Teams.#allPartipantsAreModeratorToggel)
      .should('be.exist')
  }

  startTeamVideoConferenceFromModal () {
    cy.get(Teams.#teamVideoConferenceStartButtonInModal)
      .click()
  }

  clickOnVideoStartButtonAsTeacherAndModerator () {
    cy.get(Teams.#moderatorVideoConferenceStartButton)
      .click({multiple:true, force:true})
  }

  seeTeamVideoConferenceIsVisible () {
    cy.get(Teams.#moderatorVideoConferenceStartButton)
      .should ('be.exist')
  }

  enableVideoConferenceToggleOnModal () {
    cy.get(Teams.#videoToggleOnModal)
      .click({multiple:true, force:true})
  }

  enableVideoConferenceOnTeamEditPage () {
    cy.get(Teams.#videoConferenceCheckBoxOnTeamSetting)
      .check()
  }

  doNotSeeTeamEventTitle (editedEventTitle) {
    cy.contains(editedEventTitle)
  }

  deleteTeamEvent () {
    cy.get(Teams.#teamEventDeleteButton)
      .click({multiple:true, force:true})
  }

  editedTeamEventDescriptionIsVisible (editedEventTitle) {
    cy.contains(editedEventTitle)
  }

  editedTeamEventTitleIsVisible (editedEventTitle) {
    cy.contains(editedEventTitle)
  }

  editTeamEventDescription (editedEventDescription) {
    cy.get(Teams.#teamEventDescrptionInput)
    .eq(1)
    .clear()
    .type(editedEventDescription)
  }

  editTeamEventPlace (editedEventPlace) {
    cy.get(Teams.#teamEventPlaceInput)
    .eq(1)
    .clear()
    .type(editedEventPlace)
    .type('{enter}')
  }

  editTeamEventTitle (editedEventTitle) {
    cy.get(Teams.#teamEventTitleInput)
      .eq(1)
      .clear()
      .type(editedEventTitle)
  }

  clickOnTeamsEventEditOption () {
    cy.get(Teams.#teamEventEditIcon)
      .click({multiple:true, force:true})
  }

  seeTeamEventTitleIsVisible (eventTitle) {
    cy.contains(eventTitle)
  }

  clickOnSaveTeamEvent () {
    cy.get(Teams.#teamEventSaveButton)
      .click()
  }

  enterTeamEventPlaceAndPressEnter (eventPlace) {
    cy.get(Teams.#teamEventPlaceInput)
      .eq(1)
      .type(eventPlace)
      .type('{enter}')
      .wait(5000)
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

  seeTeamEventCreationModal () {
    cy.get(Teams.#teamEventCreteModal)
  }

  clickOnAddTeamsAppointment () {
    cy.get(Teams.#addTeamEventButton)
      .click()
  }

  goToTeamsCalendarTab () {
    cy.get(Teams.#teamCalanderTab)
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