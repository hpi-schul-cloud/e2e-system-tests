
import Dashboard from '../../pages/dashboard/pageDashboard'

const dashboard = new Dashboard()

//Scenario: Check user greeting on the dashboard
        //Given I am logged in as a 'student' at 'brb'

        Then('I can see the welcome message', () => {
          dashboard.seeWelcomeMessage()
        })

//Scenario: Check tasks on the dashboard
        //Given I am logged in as a 'teacher' at 'brb'

        Then('I can see the assigned tasks', () => {
          dashboard.seeAssignedTasks()
        })
        Then('I can see the draft tasks', () => {
          dashboard.seeDraftTasks()
        })