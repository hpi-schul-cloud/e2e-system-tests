import Dashboard from '../../pages/dashboard/pageDashboard'

const dashboard = new Dashboard()

//Scenario: Check user greeting on the dashboard
//Given ('I am logged in as a 'teacher' at 'brb'')
//step defined -->\step_definition\authentication\loginStep.spec.js

//When I arrive on the dashboard
//step defined -->\step_definition\dashboard\commonDashboardRelatedSteps.spec.js

Then('I can see the welcome message', () => {
  dashboard.seeWelcomeMessage()
})

//Scenario: Check tasks on the dashboard
//Given ('I am logged in as a 'teacher' at 'brb')
//step defined -->\step_definition\authentication\loginStep.spec.js

//When I arrive on the dashboard
//step defined -->\step_definition\dashboard\commonDashboardRelatedSteps.spec.js

Then('I can see the assigned tasks', () => {
  dashboard.seeAssignedTasks()
})

Then('I can see the draft tasks', () => {
  dashboard.seeDraftTasks()
})