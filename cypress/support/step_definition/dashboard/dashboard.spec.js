import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Page_Navigation from '../../pages/common/pageNavigation'
import Dashboard from '../../pages/dashboard/pageDashboard'

const pageNavigation = new Page_Navigation()
const dashboard = new Dashboard()

When('I arrive on the dashboard', () => {
  pageNavigation.arriveOnDashboard()
})

Then('I can see the welcome message', () => {
  dashboard.seeWelcomeMessage()
})

Then('I can see the assigned tasks', () => {
  dashboard.seeAssignedTasks()
})

Then('I can see the draft tasks', () => {
  dashboard.seeDraftTasks()
})
