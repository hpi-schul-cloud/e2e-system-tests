import Teams from '../../pages/teams/pageTeams'

const teams = new Teams()

//There are some repeating steps which are defined only once in this step definition file etc.

// Rest of the defined steps can be found here:
// -----------------------------------------
// -\step_definition\authentication\loginStep.spec.js
// -\step_definition\administration\CommonAdministrationSteps.spec.js
// -\step_definition\teams\commonTeamsSteps.spec.js


Then ('I see the information that video conference is not yet started', () =>{
	teams.seeVideoParticipationNotStartedInfoIcon()
	teams.seeVideoNotStartedInfoModal()
})

When ('I enable the video conference on the teams edit page',() =>{
	teams.enableVideoConferenceOnTeamEditPage()
})

Then ('I see the start video conference button', () =>{
	teams.seeTeamVideoConferenceIsVisible()
})

When ('I click on start video conference button as a moderator teacher', () =>{
	teams.clickOnVideoStartButtonAsTeacherAndModerator()
})

Then ('I see the modal and toggles are visible in the modal', () =>{
	teams.seeModalAndToggles()
})

Then ('I start the team video conference', () =>{
	teams.startTeamVideoConferenceFromModal()
})

Then ('I see URL is changed to {string}', (bbbExtURL) =>{
	teams.seeBBBExternalURL(bbbExtURL)
})

Then ('I click on participate to video conference button as a participating student', () =>{
	teams.clickOnVideoParticipantLinkButtonAsStudent()
})

Then ('I see video conference check box is unchecked', () =>{
	teams.seeUncheckedVideoConferenceCheckbox()
})

Then ('I see video conference option is disabled', () =>{
	teams.seeDisabledVideoConferenceOnTeamEditPage()
})

Then ('I see the video conference participate button as student', () =>{
	teams.seeVideoPartcipationButtonAsStudent()
})

When ('I enable the video conference toggle on the modal', () =>{
	teams.enableVideoConferenceToggleOnModal()
})