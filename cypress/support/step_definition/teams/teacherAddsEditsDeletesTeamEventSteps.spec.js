import Teams from '../../pages/teams/pageTeams'

const teams = new Teams()

//There are some repeating steps which are defined only once in this step definition file etc.

// Rest of the defined steps can be found here:
// -----------------------------------------
// -\step_definition\authentication\loginStep.spec.js
// -\step_definition\teams\commonTeamsSteps.spec.js

When ('I go to calendar tab',() =>{
	teams.goToTeamsCalendarTab()
})

When ('I click on Add date',() =>{
	teams.clickOnAddTeamsAppointment()
})

Then ('I see event creation modal',() =>{
	teams.seeTeamEventCreationModal()
})

When ('I enter the title {string}', (eventTitle) =>{
	teams.enterTeamEventTitle(eventTitle)
})

When ('I select the team event start date and time', () =>{
	teams.selectTeamEventStartDate()
})

When ('I select the team event end date and time', () =>{
	teams.selectTeamEventEndDate()
})

When ('I enter the description {string}', (eventDescription) =>{
	teams.enterTeamEventDescription(eventDescription)
})

When ('I enter the event place {string} and press enter to save the event', (eventPlace) =>{
	teams.enterTeamEventPlaceAndPressEnter(eventPlace)
})

When ('I click on Save team event or I hit enter button on the keyboard to save it', () =>{
	teams.clickOnSaveTeamEvent()
})

Then ('I am in calendar tab on team detail page and title {string} is visible', (eventTitle) =>{
	teams.seeTeamEventTitleIsVisible(eventTitle)
})

When ('I click on edit icon', () => {
	teams.clickOnTeamsEventEditOption()
})

When ('I re enter the title {string}', (editedEventTitle) =>{
  teams.editTeamEventTitle(editedEventTitle)
})

When ('I re enter the description {string}', (editedEventDescription) =>{
  teams.editTeamEventDescription(editedEventDescription)
})

When ('I re enter the place {string} and press the enter button to save the event', (editedEventPlace) =>{
  teams.editTeamEventPlace(editedEventPlace)
})

Then ('I am in calendar tab on team detail page and edited title {string} is visible', (editedEventTitle) =>{
  teams.editedTeamEventTitleIsVisible(editedEventTitle)
})

When ('I click on Delete team event in modal', () =>{
  teams.deleteTeamEvent()
})

Then ('I am in calendar tab on team detail page and title is NOT visible', () =>{
  teams.doNotSeeTeamEventTitle()
})