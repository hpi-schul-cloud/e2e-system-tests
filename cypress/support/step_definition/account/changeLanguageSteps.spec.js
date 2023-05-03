const { When, Then } = require("@badeball/cypress-cucumber-preprocessor")
import Account from '../../pages/account/pageAccount'

const account = new Account()

Then('I can see initials of my name', () => {
  account.assertNameInitialsIsVisible()
})

When('I click on initials of my name', () => {
  account.clickInitialsOfName()
})

Then('I click on language drop down menu', () => {
  account.clickLanguagesDropDownMenu()
})

When('I can change language to {string}', language => {
  account.changeLanguage(language)
})

Then('I can see title in dashboard is changed to {string}', language => {
  account.verifyLanguageChanged(language)
})
