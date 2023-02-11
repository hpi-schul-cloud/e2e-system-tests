import Login_Management from '../../pages/login_management/pageLoginManagement'

const loginManagement = new Login_Management()

Then('I will enter email', () => {
    loginManagement.enterEmail()
})

Then('I will enter password', () => {
    loginManagement.enterPassword()
})

Then('I will see current password field is visible and empty', () => {
    loginManagement.currentPwdFieldVisibleAndEmpty()
})

Then('I will see new and repeat password field is visible and empty', () => {
    loginManagement.newAndRepeatPasswordFieldVisibleAndEmpty()
})

When('I enter current password', () => {
    loginManagement.enterCurrentPassword()
})

Then('I enter new password in both fields', () => {
    loginManagement.enterNewPasswordInAllFields()
})

Then('I will click on submit button', () => {
    loginManagement.clickOnSubmitButtonInUserSetting()
})

When('I click on the initials', () => {
    loginManagement.clickOnInitials()
})

Then('I logout', () => {
    loginManagement.clickOnLogoutBtn()
})

Then ('I will enter new password', () => {
    loginManagement.enterNewPassword()
})

When('I enter new password in user setting', () => {
    loginManagement.enterNewPasswordInUserSetting()
})

Then('I enter new password in both fields in user setting', () => {
    loginManagement.enterOldPasswordInUserSetting()
})

Then('I will wait for 15 seconds', () => {
    loginManagement.waitFor15Seconds()
})