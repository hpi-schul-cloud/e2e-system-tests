import Common_Logins from '../../page/common/pageLogins'
import Dashboard from '../../page/common/dashboard'

Given('I am logged in as a teacher', () => {
    const loginAsTeacher = new Common_Logins()
    loginAsTeacher.loginAsBrbTeacher()
})

Given('I am logged in as an admin', () => {
    const loginAsAdmin = new Common_Logins()
    loginAsAdmin.loginAsBrbAdmin()
})

When('I arrive on the dashboard', () => {
    const selectDashboard = new Dashboard()
    selectDashboard.arriveAtDashboard()
})