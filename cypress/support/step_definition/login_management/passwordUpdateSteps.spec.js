import Login_Management from '../../pages/login_management/pageLoginManagement'

const loginManagement = new Login_Management()

When('I enter email', () => {
    loginManagement.enterEmail()
})

When('I enter password', () => {
    loginManagement.enterPassword()
})

Then('I see current password field is visible and empty', () => {
    loginManagement.assertCurrentPwdFieldVisibleAndEmpty()
})

Then('I see new and repeat password field is visible and empty', () => {
    loginManagement.assertNewAndRepeatPasswordFieldVisibleAndEmpty()
})

When('I enter current password', () => {
    loginManagement.enterCurrentPassword()
})

When('I enter new password and repeat it in the next field in user settings', () => {
    loginManagement.enterNewPasswordInAllFields()
})

When('I click on save button in user settings', () => {
    loginManagement.clickOnSubmitButtonInUserSettings()
})

Then('I see success message', () => {
    loginManagement.assertSuccessMessageIsDisplay()
})

When('I click on the initials', () => {
    loginManagement.clickOnInitials()
})

When('I logout', () => {
    loginManagement.clickOnLogoutBtn()
})

When ('I enter new password', () => {
    loginManagement.enterNewPassword()
})

When('I enter new password in user setting', () => {
    loginManagement.enterNewPasswordInUserSettings()
})

When('I enter old password and repeat it in the next field in user settings', () => {
    loginManagement.enterOldPasswordInUserSettings()
})

When('I wait for 15 seconds', () => {
    loginManagement.waitFor15Seconds()
})