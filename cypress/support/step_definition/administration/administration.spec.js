import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Administration from '../../pages/administration/pageAdministration'

const selectAdministration= new Administration()

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

When('I click delete user button', () => {
    selectAdministration.clickDeleteButton()
})

When('I click on delete button in pop up', () => {
    selectAdministration.clickDeleteButtonInPopup()
})

Then('I can see the created user in the table', () => {
    selectAdministration.createdUserIsVisibleInTable()
})

Then('I cannot see the user in the table', () => {
    selectAdministration.createdUserIsNotVisibleInTable()
})
