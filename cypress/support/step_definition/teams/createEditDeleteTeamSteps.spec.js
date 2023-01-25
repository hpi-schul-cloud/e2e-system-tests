import Teams from '../../pages/teams/pageTeams'

const teams = new Teams()


Then ('I do not see the team {string}',(teamName) =>{
	teams.doNotSeeTeam(teamName)
})

Then ('I see dialog box and click on delete button to confirm the deletion', () =>{
	teams.confirmDeleteOnDialogBox()
})

When('I click on delete option', () =>{
	teams.clickOnDeleteOption()
})

When('I click on edit option', () => {
	teams.clickOnEditOption()
})

Then('I see team edit page', () => {
	teams.seeTeamEditPage()
})

When('I click on team settings', () => {
	teams.clickOnTeamSettings()
})

When('I click on button Add Team on the teams overview page', () => {
	teams.clickOnAddTeam()
})

Then('I see new team creation page', () => {
	teams.seeTeamCreationPage()
})

When('I enter in the title {string}', (teamName) => {
	teams.enterTeamName(teamName)
})

When('I enter in the description {string}', (desc) => {
	teams.enterTeamDescription(desc)
})

When('I select the team colour black', () => {
	teams.selectTeamColour()
})

Then('I click on button Create Team on the team creation page', () => {
	teams.clickOnAddButton()
})

Then('I see team title {string} is visible', (teamName) => {
	teams.seeCreatedTeamName(teamName)
})

Then('I see the description {string} is visible', (desc) => {
	teams.seeCreatedTeamDescription(desc)
})