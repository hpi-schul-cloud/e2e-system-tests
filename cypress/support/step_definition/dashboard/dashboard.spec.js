import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Dashboard from '../../page/common/dashboard'

When('I arrive on the dashboard', () => {
    const selectDashboard = new Dashboard()
    selectDashboard.arriveAtDashboard()
})

Then('I can see the welcome message', () => {
    const selectDashboard = new Dashboard()
    selectDashboard.seeWelcomeMessage()
})

Then('I can see the assigned tasks', () => {
    const selectDashboard = new Dashboard()
    selectDashboard.seeAssignedTasks()
})

Then('I can see the draft tasks', () => {
    const selectDashboard = new Dashboard()
    selectDashboard.seeDraftTasks()
})
