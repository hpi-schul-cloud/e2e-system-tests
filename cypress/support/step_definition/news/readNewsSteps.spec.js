import News from '../../pages/news/pageNews'

const news = new News()

//Scenario: Reading a school news on the dashboard
//I am logged in as a 'teacher' at 'brb'
//step defined --> \step_definition\commonGlobalSteps\loginLogoutSteps.spec.js

//When I go to news overview page
//step defined --> \step_definition\news\commonNewsRelatedSteps.spec.js

Then('I can read the school news', () => {
  news.readSchoolNews()
})

//Scenario: Reading a team news on the dashboard
//I am logged in as a 'teacher' at 'brb'
//step defined --> \step_definition\commonGlobalSteps\loginLogoutSteps.spec.js

//When I go to team overview page
//step defined --> \step_definition\teams\commonTeamsRelatedSteps.spec.js

Then('I can read the team news', () => {
  news.readTeamNews()
})