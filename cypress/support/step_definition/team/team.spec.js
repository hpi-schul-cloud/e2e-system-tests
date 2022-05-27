import Team from '../../pages/team/pageTeam'

const selectTeam = new Team()

When('I go to a team', () => {
    selectTeam.selectTeam()
})

When('I open team settings', () => {
    selectTeam.openTeamSettings()
})

When('I choose edit team', () => {
    selectTeam.editTeam()
})

Then('I can see the chat', () => {
    selectTeam.canSeeTeamChat()
})

Then('I can not see the chat', () => {
    selectTeam.canNotSeeTeamChat()
})

Then('I can see the checkbox for messenger', () => {
    selectTeam.canSeeTeamChatCheckbox()
})

Then('I can not see the checkbox for messenger', () => {
    selectTeam.canNotSeeTeamChatCheckbox()
})