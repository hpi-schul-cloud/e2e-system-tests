import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Dashboard from '../../pages/dashboard/pageDashboard'

const selectDashboard = new Dashboard()

When('I arrive on the dashboard', () => {
  selectDashboard.arriveAtDashboard()
})

Then('I can see the welcome message', () => {
  selectDashboard.seeWelcomeMessage()
})

Then('I can see the assigned tasks', () => {
  selectDashboard.seeAssignedTasks()
})

Then('I can see the draft tasks', () => {
  selectDashboard.seeDraftTasks()
})
