import Login_Management from '../../pages/login_management/pageLoginManagement'

const loginManagement = new Login_Management()

Then('I enter email', () => {
    loginManagement.enterEmail()
})

Then('I enter password', () => {
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

Then('I enter new password and repeat it in the next field', () => {
    loginManagement.enterNewPasswordInAllFields()
})

Then('I click on save button in user settings', () => {
    loginManagement.clickOnSubmitButtonInUserSetting()
})

Then('I see success message', () => {
    loginManagement.assertSuccessMessageIsDisplay()
})

When('I click on the initials', () => {
    loginManagement.clickOnInitials()
})

Then('I logout', () => {
    loginManagement.clickOnLogoutBtn()
})

Then ('I enter new password', () => {
    loginManagement.enterNewPassword()
})

When('I enter new password in user setting', () => {
    loginManagement.enterNewPasswordInUserSetting()
})

Then('I enter new password and repeat it in the next field in user setting', () => {
    loginManagement.enterOldPasswordInUserSetting()
})

Then('I wait for 15 seconds', () => {
    loginManagement.waitFor15Seconds()
})