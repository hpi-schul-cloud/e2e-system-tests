import Management from '../../../pages/management/pageManagement'

const management = new Management()

//Scenario: Adding a new student
//Given I am logged in as a 'admin' at 'brb'
//step defined -->\step_definition\authentication\loginStep.spec.js

//When I go to administration page
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And I go to student administration
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And 'I click on FAB to add a user'
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

And('I fill out the user creation form for {string} {string} with email {string}', (forename, surname, email) => {
  management.fillUserCreationForm(forename, surname, email)
})

And('I click on add button', () => {
  management.clickOnAddButton()
})

Then('I can see the user with email {string} in the table', (email) => {
  management.userIsVisibleInTable(email)
})

//Scenario: Editing a new student
//Given I am logged in as a 'admin' at 'brb'
//step defined -->\step_definition\authentication\loginStep.spec.js

//When I go to administration page
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And I go to student administration
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

And('I enter {string} in search input field', (keyword) => {
  management.enterNameForSearch(keyword)
})

//And ('I click edit student button', () => {
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

And('I change username to {string} {string}', (firstname, surname) => {
  management.changeUsername(firstname, surname)
})

And('I change email to {string}', (new_email) => {
  management.changeEmail(new_email)
})

And('I click save changes button', () => {
  management.clickSaveButton()
})

// Scenario: Deleting a student
//Given I am logged in as a 'admin' at 'brb'
//step defined -->\step_definition\authentication\loginStep.spec.js

//When I go to administration page
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And I go to student administration
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And ('I enter user name in search input field', () => {
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

And('I click edit student button for {string}', (email) => {
  management.clickEditStudentButton(email)
})

And('I click delete user button to delete user with email {string}', (email) => {
  management.deleteUser(email)
})

And('I click on delete button in pop up', () => {
  management.clickDeleteButtonInPopup()
})

Then('I cannot see user {string} in the table', (email) => {
  management.userIsNotVisibleInTable(email)
})

//Scenario: Adding a new teacher
//Given I am logged in as a 'admin' at 'brb'
//step defined -->\step_definition\authentication\loginStep.spec.js

//When I go to administration page
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And I go to teacher administration
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And 'I click on FAB to add a user'
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And('I fill out the user creation form', () => {
//step defined  --> \step_definition\management\admin_management\adminUsersSteps.spec.js

And('I click on add button', () => {
  management.clickOnAddButton()
})

//Scenario: Editing a new teacher
//Given I am logged in as a 'admin' at 'brb'
//step defined -->\step_definition\authentication\loginStep.spec.js

//When I go to administration page
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And I go to teacher administration
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And ('I enter user name in search input field', () => {
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

And('I click edit teacher button for {string}', (email) => {
  management.clickEditTeacherButton(email)
})

And('I change teacher information', () => {
  management.changeTeacherUserInformation()
})

And('I click save changes button', () => {
  management.clickSaveButton()
})

Then('I can see the edited teacher in the table', () => {
  management.editedUserIsVisibleInTable()
})

//Scenario: Deleting a teacher
//Given I am logged in as a 'admin' at 'brb'
//step defined -->\step_definition\authentication\loginStep.spec.js

//When I go to administration page
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And I go to teacher administration
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And ('I enter user name in search input field', () => {
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

And('I click delete user button', () => {
  management.clickDeleteButton()
})

And('I click on delete button in pop up', () => {
  management.clickDeleteButtonInPopup()
})