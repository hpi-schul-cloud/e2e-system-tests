import Navigation from '../../../pages/common_global/pageNavigation'
import Team from '../../../pages/team/pageTeam'
import Administration from '../../../pages/administration/pageCommonAdministration'
import Common_Course from '../../../pages/course/pageCommonCourse'

const administration = new Administration()
const team = new Team()
const navigation = new Navigation()
const CommonCourse = new Common_Course()


// Scenario: Deactivate Chat

//Given I am logged in as a 'admin' at 'brb'

When('I go to administration page', () => {
  navigation.goToAdministration()
})
And('I go to school administration', () => {
  navigation.goToSchoolAdministration()
})
And('I go to new school administration page', () => {
  administration.clickNewAdminPageButton()
})
And('I click toggle switch to deactivate the chat', () => {
  administration.clickChatToggleSwitch()
})
And('I click save general settings button', () => {
  administration.clickSaveGeneralSettingsButton()
})
And('I log out', () => {
  cy.logout().click
})

And('I go to teams overview', () => {
  navigation.goToTeamsOverview()
})
And('I go to a team', () => {
  team.selectTeam()
})
Then('I can not see the chat', () => {
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

// Scenario: Activate Chat

And('I click toggle switch to activate the chat', () => {
  administration.clickChatToggleSwitch()
})

Then('I can see the chat', () => {
  team.canSeeTeamChat()
})

Then('I can see the checkbox for messenger', () => {
  team.canSeeTeamChatCheckbox()
})