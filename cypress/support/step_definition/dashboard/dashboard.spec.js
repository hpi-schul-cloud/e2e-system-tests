import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Dashboard from '../../page/common/dashboard'

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
