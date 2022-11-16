import Teams from '../../pages/teams/pageTeams'

const teams = new Teams()

When('I click on add team button', () => {
    teams.clickOnAddTeam()
})

Then('I see new team creation page', () => {
    teams.seeTeamCreationFormPage
})

When('I enter the title {string}', (name) => {
    teams.xyz()
})

When('I enter the description {string}', (desc) => {
    teams.xyz()
})

Then('I see team chat activation check box is visible', () => {
    teams.xyz()
})

Then('team video activation check box is visible', () => {
    teams.xyz()
})

When('I select the team color to red', () => {
    teams.xyz()
})

When('I click on create button', () => {
    teams.xyz()
})





