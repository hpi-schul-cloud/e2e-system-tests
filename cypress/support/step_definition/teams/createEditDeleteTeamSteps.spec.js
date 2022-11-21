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

When('I click on teams save changes button', () => {
	teams.clickOnSaveChangeButton()
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

When('I click on add team button', () => {
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

Then('I see team chat activation check box is visible', () => {
	teams.seeChatActivationOption()
})

Then('team video activation check box is visible', () => {
	teams.seeVideoActivationOption()
})

When('I select the team colour to red', () => {
	teams.selectTeamColour()
})

Then('I click on create button', () => {
	teams.clickOnAddButton()
})

Then('I see team titled {string} is visible', (teamName) => {
	teams.seeCreatedTeamName(teamName)
})

Then('I see the description {string} is visible', (desc) => {
	teams.seeCreatedTeamDescription(desc)
})