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

When('I see Create Course group page', () => {
	courses.seeAddNewCourseGroupPage();
})

