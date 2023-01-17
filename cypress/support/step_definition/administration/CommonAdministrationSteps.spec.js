import Management_Common from '../../pages/administration/pageCommonAdministration'
import Management from '../../pages/administration/pageAdministration'

const managementCommon = new Management_Common()
const management = new Management()


Then ('I enable the video conference from the old school setting page', () =>{
	teams.enableTeamsVideoConferenceByAdmin()
})

Then ('I click on admin setting save button', () =>{
	teams.clickOnAdminSettingsSave()
})

When ('I click on the manage school card',() =>{
	teams.clickOnManageSchoolCard()
})

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

And('I go to teacher administration', () => {
  managementCommon.navigateToTeacherAdministration()
})

When('I go to team administration', () => {
  managementCommon.navigateToTeamAdministration();
});

When('I click on FAB', () => {
  management.clickOnFAB()
})

When('I click on Add Student in opened FAB', () => {
  management.clickOnAddStudentInFAB()
})

When('I click on Add Teacher in opened FAB', () => {
  management.clickOnAddTeacherInFAB()
})