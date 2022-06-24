import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import Administration from '../../pages/administration/pageAdministration'

const administration = new Administration()

//WHEN also includes AND
And('I click on FAB to add a user', () => {
    administration.clickOnAdministrationFAB()
})

And('I fill out the student creation form', () => {
    administration.fillStudentCreationForm()
})

And('I fill out the teacher creation form', () => {
    administration.fillTeacherCreationForm()
})

And('I click on add button', () => {
    administration.clickOnAddButton()
})

And('I enter user name in search input field', () => {
    administration.enterNameForSearch()
})

And('I click edit student button', () => {
    administration.clickEditStudentButton()
})

And('I click edit teacher button', () => {
    administration.clickEditTeacherButton()
})

And('I change student information', () => {
    administration.changeStudentUserInformation()
})

And('I change teacher information', () => {
    administration.changeTeacherUserInformation()
})

And('I click save changes button', () => {
    administration.clickSaveButton()
})

And('I click delete user button', () => {
    administration.clickDeleteButton()
})

And('I click on delete button in pop up', () => {
    administration.clickDeleteButtonInPopup()
})

And('I go to new school administration page', () => {
    administration.clickNewAdminPageButton()
})

And('I click toggle switch to activate the chat', () => {
    administration.clickChatToggleSwitch()
})

And('I click toggle switch to deactivate the chat', () => {
    administration.clickChatToggleSwitch()
})

And('I click toggle switch to activate video conferencing', () => {
    administration.clickVideoconferenceToggleSwitch()
})

And('I click toggle switch to deactivate video conferencing', () => {
    administration.clickVideoconferenceToggleSwitch()
})

And('I click save general settings button', () => {
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