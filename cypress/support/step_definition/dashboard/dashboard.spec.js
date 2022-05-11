import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Page_Navigation from '../../pages/common/pageNavigation'
import Dashboard from '../../pages/dashboard/pageDashboard'

const selectNavigation = new Page_Navigation()
const selectDashboard = new Dashboard()

When('I arrive on the dashboard', () => {
  selectNavigation.arriveOnDashboard()
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
