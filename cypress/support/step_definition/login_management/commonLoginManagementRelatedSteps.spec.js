import Login_Management from '../../pages/login_management/pageLoginManagement'

const loginManagement = new Login_Management()

Given('I am on the dBildungscloud login page as a user on BRB', () => {
    loginManagement.beingOnLoginPage()
})

When('I click on Forgot Password? link', () => {
    loginManagement.clickOnForgotPassword()
})