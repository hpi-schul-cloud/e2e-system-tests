const { When, Then } = require("@badeball/cypress-cucumber-preprocessor")
import Management from '../../pages/admin/pageAdministration'

const management = new Management()


Then ('I disable the video conference', () =>{
	management.disableTeamsVideoConferenceByAdmin()
})

Then ('I click on button Save admin settings', () =>{
	management.clickOnAdminSettingsSave()
})

Then ('I enable the video conference', () =>{
	management.enableTeamsVideoConferenceByAdmin()
})

When ('I click on manage school card',() =>{
	management.clickOnManageSchoolCard()
})

When('I go to administration page', () => {
 management.navigateToAdministration()
})

When('I go to school administration', () => {
 management.navigateToSchoolAdministration()
})

When('I click on general settings panel', () => {
  management.clickGeneralSettingsPanel()
})

When('I click on account migration panel', () => {
    management.clickAccountMigrationPanel()
})

When('I click on external tools panel', () => {
  management.clickExternalToolsPanel();
})

When('I go to new school administration page', () => {
  management.clickNewAdminPageButton()
})

When('I click save general settings button', () => {
  management.clickSaveGeneralSettingsButton()
})

When('I go to student administration', () => {
 management.navigateToStudentAdministration()
})

When('I go to teacher administration', () => {
 management.navigateToTeacherAdministration()
})

When('I go to team administration', () => {
 management.navigateToTeamAdministration();
});

When('I go to course administration', () => {
	management.navigateToCourseAdministration()
})

When('I click on FAB', () => {
  management.clickOnFAB()
})

When('I click on Add Student in opened FAB', () => {
  management.clickOnAddStudentInFAB()
})

When('I click on Add Teacher in opened FAB', () => {
  management.clickOnAddTeacherInFAB()
})
