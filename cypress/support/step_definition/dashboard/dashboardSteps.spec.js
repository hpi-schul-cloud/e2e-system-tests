import Dashboard from '../../pages/dashboard/pageDashboard'
import News_Common from '../../pages/news/pageCommonNews'
import Teams_Common from '../../pages/teams/pageCommonTeams'

const dashboard = new Dashboard()
const newsCommon = new News_Common()
const teamsCommon = new Teams_Common()

/* common steps are defined in the following files already:

loginStep.spec.js
commonTeamsSteps.spec.js
commonDashboardSteps.spec.js

*/

//Scenario: as a pre-condition teacher creates school news
//--------------------------------------------------------

When('I click on add news button', () => {
  newsCommon.clickOnAddNews()
})

Then('I see news creation page', () => {
  newsCommon.seeNewsCreationPage()
})

And('I enter news title {string}', (newsTitle) => {
  newsCommon.enterNewsTitle(newsTitle)
})

And('I enter news description {string}', (newsDescription) => {
  newsCommon.enterNewsDescription(newsDescription)
})

And('I see date input field', () => {
  newsCommon.seeDateInput()

})

And('I see time input field', () => {
  newsCommon.seeTimeInput()
})

And('I click on Save button', () => {
  newsCommon.clickOnCreateNewsSaveButton()
})

Then('I see news is created successfully with title {string} and with desccription {string}', (newsTitle, newsDesc) => {
  newsCommon.seeCreatedNews(newsTitle, newsDesc)
})

//Scenario: as a pre-condition teacher creates a team news
//--------------------------------------------------------

When('I click on news tab on the team detail page', () => {
  teamsCommon.clickOnNewsTabInTeamDetailPage()
})

And('I click on create news button', () => {
  teamsCommon.clickOnCreateNewsOnTeamDetailPage()
})

//Scenario: as a pre-condition teacher adds student as team member
//-------------------------------------------------------------------
//defined in common step definition

//Scenario: student arrives on dashboard
//---------------------------------------

Then('I see the welcome message {string}', (welcomeMsg) => {
  dashboard.seeWelcomeMessage(welcomeMsg)
})

Then('I see school news with title {string} and description {string}', (newsTitle, newsDesc) => {
  dashboard.seeSchoolNews(newsTitle, newsDesc)
})

Then('I see teams news with title {string} and description {string}', (newsTitle, newsDesc) => {
  dashboard.seeTeamsNews(newsTitle, newsDesc)
})

Then('I can see the assigned task {string}', (taskName) => {
  dashboard.seeAssignedTasks(taskName)
})

//Scenario: teacher arrives on dashboard
//--------------------------------------

Then('I can see the draft task {string}', (draftName) => {
  dashboard.seeDraftTasks(draftName)
})

//Scenario: as a post-condition teacher deletes the school news
//-------------------------------------------------------------

And('I click on the news teaser {string}', (newsName) => {
  newsCommon.openNewsDetailPage(newsName)
})

When('I click on delete button', () => {
  newsCommon.clickOnDeleteNewsButton()
})

And('I confirm the deletion on confirmation dialog box', () => {
  newsCommon.confirmDeletionOnDialogBox()
})

Then('I do not see the news {string}', (newsName) => {
  newsCommon.doNotSeeNews(newsName)
})

//Scenario: as a post-condition teacher deletes the team news
//-----------------------------------------------------------
// defined in common steps

//Scenario: as a post-condition teacher deletes the internal team memeber student in the team
//-------------------------------------------------------------------------------------------
// defined in teams common steps
