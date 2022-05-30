import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Administration from '../../pages/administration/pageAdministration'

const selectAdministration= new Administration()

//WHEN
When('I click on FAB to add a user', () => {
    selectAdministration.clickOnFAB()
})

When('I fill out the student creation form', () => {
    selectAdministration.fillStudentCreationForm()
})

When('I fill out the teacher creation form', () => {
    selectAdministration.fillTeacherCreationForm()
})

When('I click on add button', () => {
    selectAdministration.clickOnAddButton()
})

When('I enter user name in search input field', () => {
    selectAdministration.enterNameForSearch()
})

When('I click edit student button', () => {
    selectAdministration.clickEditStudentButton()
})

When('I click edit teacher button', () => {
    selectAdministration.clickEditTeacherButton()
})

When('I change student information', () => {
    selectAdministration.changeStudentUserInformation()
})

When('I change teacher information', () => {
    selectAdministration.changeTeacherUserInformation()
})

When('I click save changes button', () => {
    selectAdministration.clickSaveButton()
})

When('I click delete user button', () => {
    selectAdministration.clickDeleteButton()
})

When('I click on delete button in pop up', () => {
    selectAdministration.clickDeleteButtonInPopup()
})

When('I go to new school administration page', () => {
    selectAdministration.clickNewAdminPageButton()
})

When('I click toggle switch to activate the chat', () => {
    selectAdministration.clickChatToggleSwitch()
})

When('I click toggle switch to deactivate the chat', () => {
    selectAdministration.clickChatToggleSwitch()
})

When('I click toggle switch to activate video conferencing', () => {
    selectAdministration.clickVideoconferenceToggleSwitch()
})

When('I click toggle switch to deactivate video conferencing', () => {
    selectAdministration.clickVideoconferenceToggleSwitch()
})

When('I click save general settings button', () => {
    selectAdministration.clickSaveGeneralSettingsButton()
})

//THEN
Then('I can see the created user in the table', () => {
    selectAdministration.createdUserIsVisibleInTable()
})

Then('I can see the edited user in the table', () => {
    selectAdministration.editedUserIsVisibleInTable()
})

Then('I cannot see the user in the table', () => {
    selectAdministration.createdUserIsNotVisibleInTable()
})
