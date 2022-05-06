import Common_Logins from '../../page/common/logins'
import Dashboard from '../../page/common/dashboard'

Given('I am logged in as a teacher', () => {
    const loginAsTeacher = new Common_Logins()
    loginAsTeacher.brbTeacherLogin()
})

Given('I am logged in as an admin', () => {
    const loginAsAdmin = new Common_Logins()
    loginAsAdmin.brbAdminLogin()
})

When('I arrive on the dashboard', () => {
    const selectDashboard = new Dashboard()
    selectDashboard.arriveAtDashboard()
})
