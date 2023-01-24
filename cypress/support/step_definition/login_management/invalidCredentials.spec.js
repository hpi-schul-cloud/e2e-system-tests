import Login_Management from '../../pages/login_management/pageLoginManagement'

const loginManagement = new Login_Management()

Then('I will enter invalid email', () => {
  loginManagement.enterInvalidEmailOrUsername(true)
})

Then('I will enter invalid username', () => {
  loginManagement.enterInvalidEmailOrUsername(false)
})

Then('I will enter invalid password', () => {
  loginManagement.enterInvalidPassword()
})

Then('I will see error message', () => {
  loginManagement.errorMessageDisplay()
})

Then('I will see form validation message', () => {
  loginManagement.formValidationMessageDisplay()
})

Then('I will see Email field is visible and empty', () => {
  loginManagement.emailFieldIsVisibleAndEmpty()
})

Then('I will click submit button', () => {
  loginManagement.clickOnSubmitButton()
})

Then('I will see Password field is visible and empty', () => {
  loginManagement.passwordFieldIsVisibleAndEmpty()
})
