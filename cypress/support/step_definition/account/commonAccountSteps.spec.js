import Account_Common from '../../pages/account/pageCommonAccount'

const accountCommon = new Account_Common()

When('I go to my account settings', () => {
  accountCommon.navigateToAccountSettingsSection()
})

Then('I see my email is editable', () => {
  accountCommon.verifyEmailEditable(true)
})

Then('I see my email is not editable', () => {
  accountCommon.verifyEmailEditable(false)
})