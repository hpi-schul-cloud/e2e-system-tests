const { When, Then } = require("@badeball/cypress-cucumber-preprocessor")
import Teams from '../../pages/teams/pageTeams'

const teams = new Teams()

When('I click on teams save changes button', () => {
	teams.clickOnSaveChangeButton()
})

When('I go to teams overview', () => {
  teams.navigateToTeamsOverview()
})

When('I go to a team {string}', (teamName) => {
  teams.selectTeam(teamName)
})

Then('I can not see the chat in team', () => {
  teams.canNotSeeTeamChat()
})

When('I open team settings', () => {
  teams.openTeamSettings()
})

When('I choose edit team', () => {
  teams.editTeam()
})

Then('I can not see the checkbox for messenger in a team', () => {
  teams.canNotSeeTeamChatCheckbox()
})

Then('I can see the checkbox for messenger in a team', () => {
  teams.canSeeTeamChatCheckbox()
})

Then('I can see the chat in team', () => {
  teams.canSeeTeamChat()
})

When('I click on three dot menu on the team title', () => {
  teams.clickOnThreeDotToManageTeam()
})

When('I click on manage team members option', () => {
  teams.clickOnManageTeamMembersEditOption()
})

When('I click on add internal attendees button', () => {
  teams.clickOnAddInternalAttendees()
})

When('new dialog opens to select student {string} from the drop down list', () => {
  teams.selectInternalTeamMember()
})

When('I click on add user button', () => {
  teams.clickOnAddingNewTeamMemberButton()
})

Then('I see the student named {string} on the team members table', (studentName) => {
  teams.seeNewlyAddedStudentAsInternalTeamMember(studentName)
})

When ('I select the student {string} and click on delete icon',()=>{
  teams.removeStudentInTeam()
})

Then ('I see {string} is not visible on the table',()=>{
  teams.doNotSeeDeletedStudentInTeam()
})

When('I click on news tab on the team detail page', () => {
  teams.clickOnNewsTabInTeamDetailPage()
})

When('I click on create news button', () => {
  teams.clickOnCreateNewsOnTeamDetailPage()
})