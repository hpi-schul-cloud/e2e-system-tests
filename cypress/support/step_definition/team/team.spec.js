import Team from '../../pages/team/pageTeam'

const team = new Team()

When('I go to a team', () => {
    team.selectTeam()
})

And('I open team settings', () => {
    team.openTeamSettings()
})

And('I choose edit team', () => {
    team.editTeam()
})

Then('I can see the chat', () => {
    team.canSeeTeamChat()
})

Then('I can not see the chat', () => {
    team.canNotSeeTeamChat()
})

Then('I can see the checkbox for messenger', () => {
    team.canSeeTeamChatCheckbox()
})

Then('I can not see the checkbox for messenger', () => {
    team.canNotSeeTeamChatCheckbox()
})