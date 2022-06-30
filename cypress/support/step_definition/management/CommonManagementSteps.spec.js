import Management_Common from '../../pages/management/pageCommonManagement'
import Management from '../../pages/management/pageManagement'

const managementCommon = new Management_Common()
const management = new Management()

When('I go to administration page', () => {
  managementCommon.navigateToAdministration()
})

When('I go to school administration', () => {
  managementCommon.navigateToSchoolAdministration()
})

When('I go to new school administration page', () => {
  management.clickNewAdminPageButton()
})

And('I click save general settings button', () => {
  management.clickSaveGeneralSettingsButton()
})

And('I go to student administration', () => {
  managementCommon.navigateToStudentAdministration()
})

And('I click edit student button', () => {
  management.clickEditStudentButton()
})

And('I click edit teacher button', () => {
  management.clickEditTeacherButton()
})

And('I go to teacher administration', () => {
  managementCommon.navigateToTeacherAdministration()
})

And('I click on FAB to add a user', () => {
  management.clickOnFAB()
})