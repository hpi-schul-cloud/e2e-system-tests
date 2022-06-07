import Management_Common from '../../../../pages/management/pageCommonManagement'

const managementCommon = new Management_Common()

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
  managementCommon.fillStudentCreationForm()
})
And('I click on add button', () => {
  managementCommon.clickOnAddButton()
})
Then('I can see the created student in the table', () => {
  managementCommon.createdUserIsVisibleInTable()
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
  managementCommon.changeStudentUserInformation()
})
And('I click save changes button', () => {
  managementCommon.clickSaveButton()
})
Then('I can see the edited student in the table', () => {
  managementCommon.editedUserIsVisibleInTable()
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
  managementCommon.clickDeleteButton()
})
And('I click on delete button in pop up', () => {
  managementCommon.clickDeleteButtonInPopup()
})
Then('I cannot see the deleted student in the table', () => {
  managementCommon.createdUserIsNotVisibleInTable()
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
  managementCommon.fillTeacherCreationForm()
})
And('I click on add button', () => {
  managementCommon.clickOnAddButton()
})
Then('I can see the created teacher in the table', () => {
  managementCommon.createdUserIsVisibleInTable()
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
  managementCommon.changeTeacherUserInformation()
})
And('I click save changes button', () => {
  managementCommon.clickSaveButton()
})
Then('I can see the edited teacher in the table', () => {
  managementCommon.editedUserIsVisibleInTable()
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
  managementCommon.clickDeleteButton()
})
And('I click on delete button in pop up', () => {
  managementCommon.clickDeleteButtonInPopup()
})
Then('I cannot see the deleted teacher in the table', () => {
  managementCommon.createdUserIsNotVisibleInTable()
})