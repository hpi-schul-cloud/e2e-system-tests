import Teams from '../../pages/teams/pageTeams'

const teams = new Teams()

//There are some repeating steps which are defined only once in this this step definition file for example 'to save team event after creating and editing' etc..
// also admin related pages


When ('I enable the video conference check box on the teams edit page',() =>{
	teams.enableVideoConferenceOnTeamEditPage()
})

Then ('I am on the team detail calendar tab and see start video conference button', () =>{
	teams.seeTeamVideoCOnferenceIsVisible()
})

When (' I click on start video conference button as a moderator teacher', () =>{
	teams.clickOnVideoStartButtonAsTeacherAndModerator()
})

Then ('I see the modal and start the video confernce', () =>{
	teams.seeModalToStartTheTeamVideoCOnference()
})

Then ('I see URL is changed to {string}', (bbbExtURL) =>{
	teams.seeBBBExternalURL(bbbExtURL)
})

Then ('I click on participate to video conference button as a participanting student', () =>{
	teams.clickOnVideoParticipantButtonAsStudent()
})

Then ('I disable the video conference from the old school setting page', () =>{
	teams.disableTeamsVideoConferenceByAdmin()
})

Then ('I see video conference check box is unchecked', () =>{
	teams.seeUncheckedVideoConferenceCheckbox()
})

Then ('I see video conference check box is disabled', () =>{
	teams.seeDisabledVideoConference()
})