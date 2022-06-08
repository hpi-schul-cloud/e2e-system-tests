
import Management_Common from '../../pages/management/pageCommonManagement'
import Management from '../../pages/management/pageManagement'

const managementCommon = new Management_Common()
const management = new Management()

When('I go to administration page', () => {
  managementCommon.goToAdministration()
})

When('I go to school administration', () => {
  managementCommon.goToSchoolAdministration()
})

When('I go to new school administration page', () => {
  management.clickNewAdminPageButton()
})

And('I click save general settings button', () => {
  management.clickSaveGeneralSettingsButton()
})

And ('I go to student administration', () => {
  managementCommon.goToStudentAdministration()
})


And ('I enter user name in search input field', () => {
  management.enterNameForSearch()
})

And ('I click edit student button', () => {
  management.clickEditStudentButton()
})

And ('I click edit teacher button', () => {
  management.clickEditTeacherButton()
})

And ('I go to teacher administration', () => {
  managementCommon.goToTeacherAdministration()
})

And('I click on FAB to add a user', () => {
  management.clickOnFAB()
})