const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
import Courses from '../../pages/course/pageCourses'

const courses = new Courses()

When('I click on groups tab', () => {
	courses.navigateToGroupsTab();
})

Then('I see create a new group button', () => {
	courses.seeAddNewCourseGroupButton();
})

When('I click on create a new group button', () => {
	courses.clickOnAddGroup();
})

When('I see create student group page', () => {
	courses.seeAddNewCourseGroupPage();
})
When('I type {string} in group name field',(groupName) =>{
 	courses.typeNameOfTheCourseGroup(groupName)
})

When('I select {string} from group member field', (groupMember)=>{
	courses.selectGroupMember(groupMember)
})

When ('I click on create student group button',() => {
	courses.clickOnCreateStudentGroupButton()
})

Then ('I see group is created with name {string}',(groupName)=>{
	courses.seeCreatedStudentGroup(groupName)
})

When('I click on student group {string}', (groupName)=>{
	courses.clickOnStudentGroup(groupName)
})

When('I click on edit group button',() => {
	courses.clickOnEditGroupButton()
})

When('I delete text in group name field and type {string} in group name field', (groupRename) =>{
	courses.deleteTextFromGroupNameField();
	courses.typeNameOfTheCourseGroup(groupRename);
})

When('I click on save changes button',() =>{
	courses.clickOnCreateStudentGroupButton()
})

Then ('I see group name changed to {string}', (groupRename)=>{
	courses.seeCreatedStudentGroup(groupRename)
})

When('I click on delete group button',() =>{
	courses.clickOnDeleteCourseGroupButton()
})

When('I click on delete group confirmation button',() =>{
courses.clickOnDeleteCourseGroupConfirmationButton()
})

Then ('I do not see group name {string} in course group tab',(groupName) =>{
courses.courseGroupNotExists(groupName)
})



