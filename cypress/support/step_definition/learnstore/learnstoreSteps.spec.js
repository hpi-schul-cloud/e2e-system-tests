const { When, Then } = require("@badeball/cypress-cucumber-preprocessor")
import Management from '../../pages/admin/pageAdministration'

const management = new Management()


When('I click the checkbox to disable students access to learnstore', () => {
  management.clickCheckboxToDisableAccessToLearnstore()
})

/* Then('I can see initials of my name', () => {
  dashboard.assertNameInitialsIsVisible()
})

When('I click on initials of my name', () => {
  dashboard.clickInitialsOfName()
})

Then('I click on language drop down menu', () => {
  dashboard.clickLanguagesDropDownMenu()
})

When('I can change language to {string}', language => {
  dashboard.changeLanguage(language)
})

Then('I can see title in dashboard is changed to {string}', language => {
  dashboard.verifyLanguageChanged(language)
}) */
