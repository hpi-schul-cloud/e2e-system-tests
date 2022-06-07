import Navigation from '../../pages/common_global/pageNavigation'
import Team from '../../pages/team/pageTeam'

const team = new Team()
const navigation = new Navigation()

When('I go to teams overview', () => {
  navigation.goToTeamsOverview()
})

And('I go to a team', () => {
  team.selectTeam()
})

Then('I can not see the chat in team', () => {
  team.canNotSeeTeamChat()
})

And('I open team settings', () => {
  team.openTeamSettings()
})

And('I choose edit team', () => {
  team.editTeam()
})

Then('I can not see the checkbox for messenger', () => {
  team.canNotSeeTeamChatCheckbox()
})

Then('I can see the checkbox for messenger', () => {
  team.canSeeTeamChatCheckbox()
})

Then('I can see the chat in team', () => {
  team.canSeeTeamChat()
})
