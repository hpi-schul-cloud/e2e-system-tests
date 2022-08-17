import Teams_Common from '../../pages/teams/pageCommonTeams'

const teamsCommon = new Teams_Common()

When('I go to teams overview', () => {
  teamsCommon.navigateToTeamsOverview()
})

And('I go to a team {string}', (teamName) => {
  teamsCommon.selectTeam(teamName)
})

Then('I can not see the chat in team', () => {
  teamsCommon.canNotSeeTeamChat()
})

And('I open team settings', () => {
  teamsCommon.openTeamSettings()
})

And('I choose edit team', () => {
  teamsCommon.editTeam()
})

Then('I can not see the checkbox for messenger in a team', () => {
  teamsCommon.canNotSeeTeamChatCheckbox()
})

Then('I can see the checkbox for messenger in a team', () => {
  teamsCommon.canSeeTeamChatCheckbox()
})

Then('I can see the chat in team', () => {
  teamsCommon.canSeeTeamChat()
})