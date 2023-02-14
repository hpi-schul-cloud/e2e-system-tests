import Login_Management from '../../pages/login_management/pageLoginManagement'

const loginManagement = new Login_Management()

Then('I enter invalid email', () => {
  loginManagement.enterInvalidEmailOrUsername(true)
})

Then('I enter invalid username', () => {
  loginManagement.enterInvalidEmailOrUsername(false)
})

Then('I enter invalid password', () => {
  loginManagement.enterInvalidPassword()
})

Then('I see error message', () => {
  loginManagement.errorMessageDisplay()
})

Then('I see form validation message', () => {
  loginManagement.formValidationMessageDisplay()
})

Then('I see Email field is visible and empty', () => {
  loginManagement.emailFieldIsVisibleAndEmpty()
})

Then('I click submit button', () => {
  loginManagement.clickOnSubmitButton()
})

Then('I see Password field is visible and empty', () => {
  loginManagement.passwordFieldIsVisibleAndEmpty()
})
