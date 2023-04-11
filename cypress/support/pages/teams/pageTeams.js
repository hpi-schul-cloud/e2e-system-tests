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
  static #disabledVideoCheckboxOnTeamEditpage = '[disabled=""]'
  static #teamVideoConferenceJoinLinkButton = '[data-testid="participate-video-conference-link"]'
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
  static #videoConferenceNotStartedIcon = '[data-testid="video-conference-not-started-info-icon"]'
  static #videoConferenceNotStartedInfoModal = '[data-testid="modal_content"]'
  static #teamEventTitleOnCalanderTab = '[data-testid="team-event-calender-title"]'
  static #pageTitleTeamsOverview = '[id="titlebar"]'
  static #teamsMembersOverviewPageTitle = '[id="page-title"]'


  // this method is for clicking on add button to create a new team event in the calander tab
  //clickOnSaveToCreateNewTeamEvent (teamEventName) {
    //const sanitizedTeamEventName = teamEventName.replace(/[^A-Za-z0-9_-]*/img, '')
    //cy.get(`[data-testid=btn-submit-${sanitizedTeamEventName}]`)
      //.click()
  //}

  seeTeamMembersOverviewPage() {
    cy.url()
      .should('include','/members')
    cy.get(Teams.#teamsMembersOverviewPageTitle).should('exist')
  }


  seeVideoNotStartedInfoModal () {
    cy.get(Teams.#videoConferenceNotStartedInfoModal)
      .should('be.exist')
  }

  seeVideoParticipationNotStartedInfoIcon () {
    cy.wait(2000)
    cy.get(Teams.#videoConferenceNotStartedIcon)
      .click({force: true})
  }

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

  startTeamVideoConferenceFromModal (teamEventTitle) {
    const sanitizedTeamEventTitle = teamEventTitle.replace(/[^A-Za-z0-9_-]*/img, '')
    cy.get(`[data-testid=submit-btn-${sanitizedTeamEventTitle}]`)
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

  doNotSeeTeamEventTitle () {
    cy.get(Teams.#teamEventTitleOnCalanderTab)
      .should('not.exist')
  }

  deleteTeamEvent () {
    cy.get(Teams.#teamEventDeleteButton)
      .click({multiple:true, force:true})
  }

  editedTeamEventDescriptionIsVisible (editedEventTitle) {
    cy.contains(editedEventTitle)
  }

  editedTeamEventTitleIsVisible () {
    cy.get(Teams.#teamEventTitleOnCalanderTab)
      .should('be.exist')
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
      .click({force: true, multiple: true})
  }

  seeTeamEventTitleIsVisible (eventTitle) {
    cy.get(Teams.#teamEventTitleOnCalanderTab)
      .contains(eventTitle)
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
      .wait(2000)
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

  doNotSeeDeletedStudentInTeam () {
    cy.get(Teams.#studentTableBody)
      .find(Teams.#testAssertionData.lastName)
      .should('not.exist')
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
    cy.get(Teams.#confirmTeamMemberAddButton, { timeout: 20000 })
      .click({ multiple: true, force: true})
  }

  selectInternalTeamMember () {
    cy.get(Teams.#selectInternalTeamMember, { timeout: 200000 }).invoke('show')
    cy.get(Teams.#selectInternalTeamMember, { timeout: 20000 })
      .should('be.visible')
      .select(Teams.#testAssertionData.fullName, { force: true })
  }

  clickOnAddInternalAttendees () {
    cy.get(Teams.#addInternalTeamMemberButton).click()
  }

  clickOnManageTeamMembersEditOption () {
    cy.get(Teams.#manageTeamMembersOption)
      .click()
  }

  clickOnThreeDotToManageTeam () {
    cy.get(Teams.#threeDotManageTeam).click() //.contains('Musik')
  }

  clickOnCreateNewsOnTeamDetailPage () {
    cy.get(Teams.#createNewsButtonOnTeamDetail)
      .click()
  }

  clickOnNewsTabInTeamDetailPage () {
    cy.get(Teams.#newsTabOnTeamDetail).click()
  }

  navigateToTeamsOverview () {
    cy.get(Teams.#teamsOverviewNavigationButton)
        .should("exist")
      .click()
    cy.wait('@teams_api')
    cy.get(Teams.#pageTitleTeamsOverview, { timeout: 200000 }).should('exist')
  }

  selectTeam (teamName) {
    cy.get(Teams.#teamTitle)
      .contains(teamName)
      .click()
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
  }

  clickOnEditOption () {
    cy.get(Teams.#teamEditOption)
      .click()
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
    cy.get(Teams.#teamMainSection).should("exist").then(($element) => {
      if ($element.hasClass('empty-state')) {
        cy.get(Teams.#addNewTeamEmptyOverviewButton)
            .should("exist")
          .click()
      } else {
        cy.get(Teams.#addNewTeamButton)
            .should("exist")
          .click()
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
