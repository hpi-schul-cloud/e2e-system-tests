import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Page_Navigation from '../../pages/common_navigation/pageNavigation'
import Dashboard from '../../pages/dashboard/pageDashboard'

const pageNavigation = new Page_Navigation()
const dashboard = new Dashboard()

//Scenario: Check user greeting on the dashboard
        //Given I am logged in as a 'student' at 'brb'
        When('I arrive on the dashboard', () => {
          pageNavigation.arriveOnDashboard()
        })
        Then('I can see the welcome message', () => {
          dashboard.seeWelcomeMessage()
        })

//Scenario: Check tasks on the dashboard
        //Given I am logged in as a 'teacher' at 'brb'
        When('I arrive on the dashboard', () => {
          pageNavigation.arriveOnDashboard()
        })
        Then('I can see the assigned tasks', () => {
          dashboard.seeAssignedTasks()
        })
        Then('I can see the draft tasks', () => {
          dashboard.seeDraftTasks()
        })