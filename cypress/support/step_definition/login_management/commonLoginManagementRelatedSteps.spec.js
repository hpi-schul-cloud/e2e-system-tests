import Login_Management from '../../pages/login_management/pageLoginManagement'

const loginManagement = new Login_Management()

Given('I am on the dBildungscloud login page', () => {
    loginManagement.visitLoginPage()
})

When('I click on Forgot Password', () => {
    loginManagement.clickOnForgotPassword()
})