import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Administration from '../../../pages/administration/pageCommonAdministration'
import Navigation from '../../../pages/common_global/pageNavigation'

const administration = new Administration()
const navigation = new Navigation()


//Scenario: Adding a new student

//Given I am logged in as a 'admin' at 'brb'
When('I go to administration page', () => {
    navigation.goToAdministration()
})
And('I go to student administration', () => {
    navigation.goToStudentAdministration()
})
And('I click on FAB to add a user', () => {
    administration.clickOnFAB()
})
And('I fill out the student creation form', () => {
    administration.fillStudentCreationForm()
})
And('I click on add button', () => {
    administration.clickOnAddButton()
})
Then('I can see the created user in the table', () => {
    administration.createdUserIsVisibleInTable()
})

//Scenario: Editing a new student

//Given I am logged in as a 'admin' at 'brb'
When('I go to administration page', () => {
    navigation.goToAdministration()
})
And('I go to student administration', () => {
    navigation.goToStudentAdministration()
})
And('I enter user name in search input field', () => {
    administration.enterNameForSearch()
})
And('I click edit student button', () => {
    administration.clickEditStudentButton()
})
And('I change student information', () => {
    administration.changeStudentUserInformation()
})
And('I click save changes button', () => {
    administration.clickSaveButton()
})
Then('I can see the edited user in the table', () => {
    administration.editedUserIsVisibleInTable()
})

// Scenario: Deleting a student

//Given I am logged in as a 'admin' at 'brb'

When('I go to administration page', () => {
    navigation.goToAdministration()
})
And('I go to student administration', () => {
    navigation.goToStudentAdministration()
})
And('I enter user name in search input field', () => {
    administration.enterNameForSearch()
})
And('I click edit student button', () => {
    administration.clickEditStudentButton()
})
And('I click delete user button', () => {
    administration.clickDeleteButton()
})
And('I click on delete button in pop up', () => {
    administration.clickDeleteButtonInPopup()
})
Then('I cannot see the user in the table', () => {
    administration.createdUserIsNotVisibleInTable()
})

//Scenario: Adding a new teacher

//Given I am logged in as a 'admin' at 'brb'
When('I go to administration page', () => {
    navigation.goToAdministration()
  })

And ('I go to teacher administration', () => {
    navigation.goToTeacherAdministration()
  })
And ('I click on FAB to add a user', () => {
    administration.clickOnFAB()
})
And('I fill out the teacher creation form', () => {
    administration.fillTeacherCreationForm()
})
And ('I click on add button', () => {
    administration.clickOnAddButton()
})
Then('I can see the created user in the table', () => {
    administration.createdUserIsVisibleInTable()
})

//Scenario: Editing a new teacher

//Given I am logged in as a 'admin' at 'brb'
When('I go to administration page', () => {
    navigation.goToAdministration()
  })
And ('I go to teacher administration', () => {
    navigation.goToTeacherAdministration()
  })
And('I enter user name in search input field', () => {
    administration.enterNameForSearch()
})
And ('I click edit teacher button', () => {
    administration.clickEditTeacherButton()
})
And ('I change teacher information', () => {
    administration.changeTeacherUserInformation()
})
And ('I click save changes button', () => {
    administration.clickSaveButton()
})
Then('I can see the edited user in the table', () => {
    administration.editedUserIsVisibleInTable()
})

//Scenario: Deleting a teacher

//Given I am logged in as a 'admin' at 'brb'
When('I go to administration page', () => {
    navigation.goToAdministration()
  })
And ('I go to teacher administration', () => {
    navigation.goToTeacherAdministration()
  })
And('I enter user name in search input field', () => {
    administration.enterNameForSearch()
})
And ('I click edit teacher button', () => {
    administration.clickEditTeacherButton()
})
And ('I click delete user button', () => {
    administration.clickDeleteButton()
})
And ('I click on delete button in pop up', () => {
    administration.clickDeleteButtonInPopup()
})
Then('I cannot see the user in the table', () => {
    administration.createdUserIsNotVisibleInTable()
})