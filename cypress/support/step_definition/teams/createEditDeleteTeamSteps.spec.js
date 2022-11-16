import Teams from '../../pages/teams/pageTeams'

const teams = new Teams()

When('I click on add team button', () => {
    teams.clickOnAddTeam()
})

Then('I see new team creation page', () => {
    teams.seeTeamCreationFormPage()
})

When('I enter the title {string}', (name) => {
    teams.enterTeamName()
})

When('I enter the description {string}', (desc) => {
    teams.enterTeamDescription()
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

When('I click on create button', () => {
    teams.clickOnAddButton()
})