import News from '../../pages/news/pageNews'

const news = new News()

//Scenario: Reading a school news on the dashboard
//I am logged in as a 'teacher' at 'brb'
//step defined --> \step_definition\commonGlobalSteps\loginLogoutSteps.spec.js

When('I go to school news on the dashboard', () => {
  news.goToSchoolNewsOnDashboard()
})

Then('I can read the school news', () => {
  news.readSchoolNews()
})

//Scenario: Reading a team news on the dashboard
//I am logged in as a 'student' at 'brb'
//step defined --> \step_definition\commonGlobalSteps\loginLogoutSteps.spec.js

When('I go to team news on the dashboard', () => {
  news.goToTeamNewsOnDashboard()
})

Then('I can read the team news', () => {
  news.readTeamNews()
})