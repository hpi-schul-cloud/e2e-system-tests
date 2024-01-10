const { When, Then } = require("@badeball/cypress-cucumber-preprocessor")
import Management from '../../pages/admin/pageAdministration'

const management = new Management()


When('I click the checkbox to disable students access to learning store', () => {
  management.clickCheckboxToDisableAccessToLearningStore()
})

When('I click the checkbox to enable students access to learning store', () => {
  management.clickCheckboxToEnableAccessToLearningStore()
})

Then('I see checkbox to enable students access to learning store is unchecked', () => {
  management.assertStudentsAccessIsUnchecked()
})