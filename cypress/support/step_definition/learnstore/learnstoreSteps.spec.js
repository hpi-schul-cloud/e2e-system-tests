const { When, Then } = require("@badeball/cypress-cucumber-preprocessor")
import Management from '../../pages/admin/pageAdministration'
import Learning_Store from '../../pages/learning_store/pageLearningStore'

const management = new Management()
const learnstore = new Learning_Store()


When('I click the checkbox to disable students access to learnstore', () => {
  management.clickCheckboxToDisableAccessToLearnstore()
})

When('I click the checkbox to enable students access to learnstore', () => {
  management.clickCheckboxToEnableAccessToLearnstore()
})

Then('I see checkbox Disable students is unchecked', () => {
  management.assertStudentsAccessIsUnchecked()
})

When('I do not see Learning Store in side bar', () => {
  learnstore.assertLearnstoreNotVisibleInMenu()
})

When('I see Learning Store in side bar', () => {
  learnstore.assertLearnstoreVisibleInMenu()
})

/*

Then('I click on language drop down menu', () => {
  dashboard.clickLanguagesDropDownMenu()
})

When('I can change language to {string}', language => {
  dashboard.changeLanguage(language)
})

Then('I can see title in dashboard is changed to {string}', language => {
  dashboard.verifyLanguageChanged(language)
}) */
