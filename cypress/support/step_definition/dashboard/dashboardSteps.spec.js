import Dashboard from '../../pages/dashboard/pageDashboard'
import News_Common from '../../pages/news/pageCommonNews'
import Teams_Common from '../../pages/teams/pageCommonTeams'

const dashboard = new Dashboard()
const newsCommon = new News_Common()
const teamsCommon = new Teams_Common()


// EXTERNAL COMMON STEP DEFINITIONS
// ================================
// External defined steps can be found here:
// -----------------------------------------
// -->\step_definition\authentication\loginStep.spec.js
// --> \step_definition\teams\commonTeamsSteps.spec.js
// --> \step_definition\dashboard\commonDashboardSteps.spec.js
// --> \step_definition\news\commonNewsSteps.spec.js

//Scenario: student arrives on dashboard

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

Then('I can see the draft task {string}', (draftName) => {
  dashboard.seeDraftTasks(draftName)
})

//Scenario: student does not see news anymore on dashboard

Then ('I do not see school news with title {string}',(schoolNewsTitle) =>{
  newsCommon.studentDoNotSeeSchoolNews(schoolNewsTitle)
})

Then ('I do not see teams news with title {string}',(teamNewsTitle) => {
  newsCommon.studentDoNotSeeTeamsNews(teamNewsTitle)
})