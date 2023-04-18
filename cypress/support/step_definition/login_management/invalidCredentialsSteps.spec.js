const { When, Then } = require("@badeball/cypress-cucumber-preprocessor")
import Login_Management from '../../pages/login_management/pageLoginManagement'

const loginManagement = new Login_Management()

When('I enter invalid email', () => {
  loginManagement.enterInvalidEmailOrUsername(true)
})

When('I enter invalid username', () => {
  loginManagement.enterInvalidEmailOrUsername(false)
})

Then('I enter invalid password', () => {
  loginManagement.enterInvalidPassword()
})

Then('I see error message', () => {
  loginManagement.assertErrorMessageDisplay()
})

Then('I see form validation message', () => {
  loginManagement.assertFormValidationMessageDisplay()
})

Then('I see Email field is visible and empty', () => {
  loginManagement.assertEmailFieldIsVisibleAndEmpty()
})

When('I click submit button', () => {
  loginManagement.clickOnSubmitButton()
})

Then('I see Password field is visible and empty', () => {
  loginManagement.assertPasswordFieldIsVisibleAndEmpty()
})
