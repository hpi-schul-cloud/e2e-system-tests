import Dashboard from '../../pages/dashboard/pageDashboard'

const dashboard = new Dashboard()

/* repeating steps are defined in following files already:

File Name\Path: \step_definition\authentication\loginStep.spec.js
-Given I am logged in as a 'teacher' at 'brb'


File Name\Path: \step_definition\dashboard\commonDashboardSteps.spec.js
-When I arrive on the dashboard

File Name\Path: \step_definition\teams\commonTeamsSteps.spec.js
When I go to teams overview

*/

//Scenario: as a pre-condition teacher creates school news

When ('I click on add news button',()=>{
  cy.addSchoolNews() //data-testid="create-news-btn"
})

Then ('I see news creation page',()=>{
  cy.seeNewsCreationPage()// url should contain /news/new
})

And ('I enter school news title {string}',()=>{
  cy.enterNewsTitle() // data-testid="news_title"
})

And ('I enter school news description {string}',()=>{
   cy.enterNewsDescription() // data-empty-text="Once upon a time..."
})

And ('I see date input field',()=>{
  cy.seeDateInput() //data-testid="news_date"

})

And ('I see time input field',()=>{
  cy.seeTimeInput() //data-testid="news_time"
})

And ('I click on Save button',()=>{
  cy.clickOnNewsCreationSubmitButton() //data-testid="btn_news_submit"
})

Then ('I see news detail page and news is created successfully',()=>{
  cy.seeCreatedSchoolNews() // should contain titile and body info
})


//Scenario: as a pre-condition teacher creates a new team

When ('I click on create team button',()=>{

})




//data-testid="add-team-btn"

















Then('I can see the welcome message', () => {
  dashboard.seeWelcomeMessage()
})

Then('I can see the assigned tasks', () => {
  dashboard.seeAssignedTasks()
})

Then('I can see the draft tasks', () => {
  dashboard.seeDraftTasks()
})