import Account_Common from '../../pages/account/pageCommonAccount'

const accountCommon = new Account_Common()

When('I go to my account settings', () => {
  accountCommon.navigateToAccountSettingsSection()
})