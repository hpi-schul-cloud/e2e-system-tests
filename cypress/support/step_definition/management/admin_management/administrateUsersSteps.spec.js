import Management from '../../../pages/management/pageManagement'

const management = new Management()

//Scenario: Adding a new student
//Given I am logged in as a 'admin' at 'brb'
//step defined --> \step_definition\commonGlobalSteps\loginLogoutSteps.spec.js

//When I go to administration page
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And I go to student administration
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And 'I click on FAB to add a user'
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

And('I fill out the student creation form', () => {
  management.fillStudentCreationForm()
})

And('I click on add button', () => {
  management.clickOnAddButton()
})

Then('I can see the created student in the table', () => {
  management.createdUserIsVisibleInTable()
})

//Scenario: Editing a new student
//Given I am logged in as a 'admin' at 'brb'
//step defined --> \step_definition\commonGlobalSteps\loginLogoutSteps.spec.js

//When I go to administration page
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And I go to student administration
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And ('I enter user name in search input field', () => {
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And ('I click edit student button', () => {
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

And('I change student information', () => {
  management.changeStudentUserInformation()
})

And('I click save changes button', () => {
  management.clickSaveButton()
})

Then('I can see the edited student in the table', () => {
  management.editedUserIsVisibleInTable()
})

// Scenario: Deleting a student
//Given I am logged in as a 'admin' at 'brb'
//step defined --> \step_definition\commonGlobalSteps\loginLogoutSteps.spec.js

//When I go to administration page
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And I go to student administration
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And ('I enter user name in search input field', () => {
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And ('I click edit student button', () => {
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

And('I click delete user button', () => {
  management.clickDeleteButton()
})

And('I click on delete button in pop up', () => {
  management.clickDeleteButtonInPopup()
})

Then('I cannot see the deleted student in the table', () => {
  management.createdUserIsNotVisibleInTable()
})

//Scenario: Adding a new teacher
//Given I am logged in as a 'admin' at 'brb'
//step defined --> \step_definition\commonGlobalSteps\loginLogoutSteps.spec.js

//When I go to administration page
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And I go to teacher administration
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And 'I click on FAB to add a user'
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

And('I fill out the teacher creation form', () => {
  management.fillTeacherCreationForm()
})

And('I click on add button', () => {
  management.clickOnAddButton()
})

Then('I can see the created teacher in the table', () => {
  management.createdUserIsVisibleInTable()
})

//Scenario: Editing a new teacher
//Given I am logged in as a 'admin' at 'brb'
//step defined --> \step_definition\commonGlobalSteps\loginLogoutSteps.spec.js

//When I go to administration page
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And I go to teacher administration
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And ('I enter user name in search input field', () => {
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And I click edit teacher button
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

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
//step defined --> \step_definition\commonGlobalSteps\loginLogoutSteps.spec.js

//When I go to administration page
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And I go to teacher administration
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And ('I enter user name in search input field', () => {
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

//And I click edit teacher button
//step defined --> \step_definition\management\CommonManagementRelatedSteps.spec.js

And('I click delete user button', () => {
  management.clickDeleteButton()
})

And('I click on delete button in pop up', () => {
  management.clickDeleteButtonInPopup()
})

Then('I cannot see the deleted teacher in the table', () => {
  management.createdUserIsNotVisibleInTable()
})