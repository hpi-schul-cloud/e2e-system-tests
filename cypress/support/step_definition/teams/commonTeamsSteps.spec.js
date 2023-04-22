import Teams from '../../pages/teams/pageTeams'

const teams = new Teams()

When('I click on teams save changes button', () => {
	teams.clickOnSaveChangeButton()
})

When('I go to teams overview', () => {
  teams.navigateToTeamsOverview()
})

And('I go to a team {string}', (teamName) => {
  teams.selectTeam(teamName)
})

Then('I can not see the chat in team', () => {
  teams.canNotSeeTeamChat()
})

And('I open team settings', () => {
  teams.openTeamSettings()
})

And('I choose edit team', () => {
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

And('I click on three dot menu on the team title', () => {
  teams.clickOnThreeDotToManageTeam()
})

And('I click on manage team members option', () => {
  teams.clickOnManageTeamMembersEditOption()
})

Then ('I see team participants overview page', () =>{
  teams.seeTeamMembersOverviewPage()
})

And('I click on add internal attendees button', () => {
  teams.clickOnAddInternalAttendees()
})

And('new dialog opens to select student {string} from the drop down list', (studentName) => {
  teams.selectInternalTeamMember(studentName)
})

And('I click on add user button', () => {
  teams.clickOnAddingNewTeamMemberButtonOnModal()
})

Then('I see the student named {string} on the team members table', (studentName) => {
  teams.seeNewlyAddedStudentAsInternalTeamMember(studentName)
})

When ('I select the student {string} and click on delete icon',(studentName)=>{
  teams.removeStudentInTeam(studentName)
})

Then ('I see {string} is not visible on the table',(studentName)=>{
  teams.doNotSeeDeletedStudentInTeam(studentName)
})

When('I click on news tab on the team detail page', () => {
  teams.clickOnNewsTabInTeamDetailPage()
})

And('I click on create news button', () => {
  teams.clickOnCreateNewsOnTeamDetailPage()
})