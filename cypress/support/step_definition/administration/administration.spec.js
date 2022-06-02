import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Administration from '../../pages/administration/pageAdministration'

const administration = new Administration()

//WHEN
When('I click on FAB to add a user', () => {
    administration.clickOnFAB()
})

When('I fill out the student creation form', () => {
    administration.fillStudentCreationForm()
})

When('I fill out the teacher creation form', () => {
    administration.fillTeacherCreationForm()
})

When('I click on add button', () => {
    administration.clickOnAddButton()
})

When('I enter user name in search input field', () => {
    administration.enterNameForSearch()
})

When('I click edit student button', () => {
    administration.clickEditStudentButton()
})

When('I click edit teacher button', () => {
    administration.clickEditTeacherButton()
})

When('I change student information', () => {
    administration.changeStudentUserInformation()
})

When('I change teacher information', () => {
    administration.changeTeacherUserInformation()
})

When('I click save changes button', () => {
    administration.clickSaveButton()
})

When('I click delete user button', () => {
    administration.clickDeleteButton()
})

When('I click on delete button in pop up', () => {
    administration.clickDeleteButtonInPopup()
})

When('I go to new school administration page', () => {
    administration.clickNewAdminPageButton()
})

When('I click toggle switch to activate the chat', () => {
    administration.clickChatToggleSwitch()
})

When('I click toggle switch to deactivate the chat', () => {
    administration.clickChatToggleSwitch()
})

When('I click toggle switch to activate video conferencing', () => {
    administration.clickVideoconferenceToggleSwitch()
})

When('I click toggle switch to deactivate video conferencing', () => {
    administration.clickVideoconferenceToggleSwitch()
})

When('I click save general settings button', () => {
    administration.clickSaveGeneralSettingsButton()
})

//THEN
Then('I can see the created user in the table', () => {
    administration.createdUserIsVisibleInTable()
})

Then('I can see the edited user in the table', () => {
    administration.editedUserIsVisibleInTable()
})

Then('I cannot see the user in the table', () => {
    administration.createdUserIsNotVisibleInTable()
})