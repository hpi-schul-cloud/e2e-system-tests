import Account from '../../pages/account/pageAccount'

const account = new Account()

Then('I can see initials of my name', () => {
  account.nameInitialsIsVisible()
})

When('I click on initials of my name', () => {
    account.clickInitialsOfName()
})

Then('I click on language drop down menu', () => {
    account.clickLanguagesDropDownMenu()
})

Then('I can change language to {string}', language => {
    account.changeLanguage(language)
})

Then('I can see language is changed to {string} in dashboard', language => {
    account.verifyLanguageChanged(language)
})