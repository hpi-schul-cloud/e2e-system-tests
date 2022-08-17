import Dashboard from '../../pages/dashboard/pageDashboard'
import News_Common from '../../pages/news/pageCommonNews'
import Teams_Common from '../../pages/teams/pageCommonTeams'

const dashboard = new Dashboard()
const newsCommon = new News_Common()
const teamsCommon = new Teams_Common()

/* common steps are defined in the following files already:

loginStep.spec.js
commonDashboardSteps.spec.js
commonTeamsSteps.spec.js

*/

//Scenario: as a pre-condition teacher creates school news

When ('I click on add news button',()=>{
  newsCommon.clickOnAddSchoolNews()
})

Then ('I see news creation page',()=>{
  newsCommon.seeNewsCreationPage()
})

And ('I enter school news title {string}',(newsTitle)=>{
  newsCommon.enterNewsTitle(newsTitle)
})

And ('I enter school news description {string}',(newsDescription)=>{
   newsCommon.enterNewsDescription(newsDescription)
})

And ('I see date input field',()=>{
  newsCommon.seeDateInput()

})

And ('I see time input field',()=>{
  newsCommon.seeTimeInput()
})

And ('I click on Save button',()=>{
  newsCommon.clickOnSchoolNewsCreationSaveButton()
})

Then ('I see news is created successfully with title {string} and with desccription {string}',(newsTitle,newsDesc)=>{
  newsCommon.seeCreatedSchoolNews(newsTitle,newsDesc)
})


//Scenario: as a pre-condition teacher creates a team news

When ('I click on news tab on the team detail page',()=>{
  cy.clickOnNewsTab() //data-tab="js-news"
})
And ('I click on create news button',()=>{
  cy.clickOnCreateNews()
})

Then ('I see news creation page',()=>{
  cy.seeNewsCreationPage()
})

And ('I enter team news title {string}',(TeamNewsTitle)=>{
  cy.enterNewsTitle()
})

And ('I enter team news description {string}',(teamNewsDescription)=>{
  cy.enterTeamNewsDescription(teamNewsDescription)
})

And ('I see date input field',()=>{
  cy.seeDateInputField()
})

And ('I see time input field',()=>{
  cy.seeTimeInputField()
})

And ('I click on Save button',()=>{
  cy.clickOnTeamNewsCreationSaveButton()
})

Then ('I see news detail page and news is created successfully {string}',(teamNewsName)=>{
  cy.seeTeamNewsDetailPage(teamNewsName)
})


//Scenario: as a pre-condition teacher adds student as team member

And ('I open the team titled titled {string}',()=>{
  teamsCommon.openTeam()

})

And ('I see team detail page',()=>{
  cy.seeTeamDetailPage()
})

And ('I click on three dot menu on the team title',()=>{
  cy.clickOnThreeDotEditButton()
})

And ('I click on manage team members option',()=>{
  cy.clickOnManageTeamMembersEditOption()
})

And ('I click on Add internal attendees button',()=>{
  cy.clickOnAddInternalAttendeees()
})

And ('new dialog opens',()=>{
 cy.seedialogToAddTeamMember()
})

And ('I click on select people drop down',()=>{
 cy.clickOnSelectPeopleDropdown()
})

And ('select {string} as a team member',(teamMember)=>{
  cy.selectteamMember(teamMember)
})

And ('I click on add button',()=>{
  cy.clickOnAddPeopleButton()
})

And ('I redirected to and see the student named {string} on the team members table',(studentName)=>{
 cy.seeNewlyAddedStudent(studentName)
})


//Scenario: student arrives on dashboard



//Scenario: teacher arrives on dashboard


//Scenario: as a post-condition teacher deletes the school news


//Scenario: as a post-condition teacher deletes the team and so the team news





















Then('I can see the welcome message', () => {
  dashboard.seeWelcomeMessage()
})

Then('I can see the assigned tasks', () => {
  dashboard.seeAssignedTasks()
})

Then('I can see the draft tasks', () => {
  dashboard.seeDraftTasks()
})