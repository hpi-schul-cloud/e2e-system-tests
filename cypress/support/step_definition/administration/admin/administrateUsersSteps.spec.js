import Management from '../../../pages/administration/pageAdministration'

const management = new Management()

// EXTERNAL COMMON STEP DEFINITIONS
// ================================
// External defined steps can be found here:
// -----------------------------------------
// -->\step_definition\authentication\loginStep.spec.js
// --> \step_definition\management\CommonManagementSteps.spec.js

//Scenario: Adding a new student

And('I fill out the user creation form for {string} {string} with email {string}', (forename, surname, email) => {
  management.fillUserCreationForm(forename, surname, email)
})

And('I click on add user button for user administration', () => {
  management.clickOnUserAdminitrationAddButton()
})

Then('I can see the user with email {string} in the table', (email) => {
  management.userIsVisibleInTable(email)
})

//Scenario: Editing a new student

And('I enter {string} email {string} in search input field', (role, keyword) => {
  management.enterNameForSearch(role, keyword)
})

And('I change username to {string} {string}', (firstname, surname) => {
  management.changeUsername(firstname, surname)
})

And('I change email to {string}', (newEmail) => {
  management.changeEmail(newEmail)
})

And('I click save changes button', () => {
  management.clickSaveButton()
})

// Scenario: Deleting a student

And('I click edit student button for {string}', (email) => {
  management.clickEditStudentButton(email)
})

And('I click delete user button to delete user with email {string}', (email) => {
  management.deleteUser(email)
})

And('I click on delete button in pop up', () => {
  management.clickDeleteButtonInPopup()
})

Then('I can not see user {string} in the table', (email) => {
  management.userIsNotVisibleInTable(email)
})

//Scenario: Adding a new teacher

//Scenario: Editing a new teacher

And('I click edit teacher button for {string}', (email) => {
  management.clickEditTeacherButton(email)
})

And('I click save changes button', () => {
  management.clickSaveButton()
})

Then('I can see the edited teacher in the table', () => {
  management.editedUserIsVisibleInTable()
})

//Scenario: Deleting a teacher

And('I click delete user button', () => {
  management.clickDeleteButton()
})

And('I click on delete button in pop up', () => {
  management.clickDeleteButtonInPopup()
})