import Login_Management from '../../pages/login_management/pageCommonLoginManagement'

const loginManagement = new Login_Management()

Given('I am on the dBildungscloud login page', () => {
  loginManagement.visitLoginPage()
})

When('I click on Forgot Password', () => {
  loginManagement.clickOnForgotPassword()
})

Then('I see the Login via {string} button', brokerButtonName => {
  loginManagement.brokerButtonIsVisible(brokerButtonName)
})
