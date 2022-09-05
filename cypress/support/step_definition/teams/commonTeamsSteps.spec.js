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

And('I click on three dot menu on the team title', () => {
  teamsCommon.clickOnThreeDotToManageTeam()
})

And('I click on manage team members option', () => {
  teamsCommon.clickOnManageTeamMembersEditOption()
})

And('I click on add internal attendees button', () => {
  teamsCommon.clickOnAddInternalAttendeees()
})

And('new dialog opens to select student {string} from the drop down list', () => {
  teamsCommon.selectInternalTeamMember()
})

And('I click on add user button', () => {
  teamsCommon.clickOnAddButton()
})

Then('I see the student named {string} on the team members table', (studentName) => {
  teamsCommon.seeNewlyAddedStudentAsInternalTeamMember(studentName)
})

When ('I select the student {string} and click on delete icon',()=>{
  teamsCommon.removeStudentInTeam()
})

Then ('I see {string} is not visible on the table',()=>{
  teamsCommon.doNotSeeDeletedStudentInTeam()
})