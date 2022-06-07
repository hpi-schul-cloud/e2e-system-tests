
import Management_Common from '../../pages/management/pageCommonManagement'

const managementCommon = new Management_Common()

When('I go to administration page', () => {
  managementCommon.goToAdministration()
})

When('I go to school administration', () => {
  managementCommon.goToSchoolAdministration()
})

When('I go to new school administration page', () => {
  managementCommon.clickNewAdminPageButton()
})

And('I click save general settings button', () => {
  managementCommon.clickSaveGeneralSettingsButton()
})

