import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Dashboard from '../../page/common/dashboard'

const selectDashboard = new Dashboard()

Then('I can see the welcome message', () => {
    selectDashboard.seeWelcomeMessage()
})

Then('I can see the assigned tasks', () => {
    selectDashboard.seeAssignedTasks()
})

Then('I can see the draft tasks', () => {
    selectDashboard.seeDraftTasks()
})
