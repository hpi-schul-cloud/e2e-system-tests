import Management from "../../pages/admin/pageAdministration";
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import CourseManagement from '../../pages/course_management/pageCourseManagement';

const management = new Management();
const courseManagement = new CourseManagement()

When("I click on edit button of course {string}", (courseName) => {
	management.editSpecificCourse(courseName);
});

Then("I see course administration page", () => {
	management.seeCourseAdministrationPage();
});

Then("I see the new course administration page", () => {
	courseManagement.isNewCourseAdministrationPage();
});

Then("I do not see the new course administration page", () => {
	courseManagement.isNotNewCourseAdministrationPage();
})

Then("I see the course {string} on the new course administration page", (courseName) => {
	courseManagement.seeCourseTableContainsCourse(courseName)
});

Then("I do not see course {string} in course table", (courseName) => {
	courseManagement.doNotSeeCourseInTable(courseName);
})

When("I click on add course button", () => {
	courseManagement.clickCreateCourseAdminButton()
});

When("I click the delete button for course {string} in course table", (courseName) => {
	courseManagement.clickDeleteButtonForCourse(courseName);
});

Then("I see 5 columns in the table", () => {
	courseManagement.seeTableHas5Columns();
});

Then("I see 2 tabs", () => {
	courseManagement.see2Tabs();
});

Then("I see the course {string} without classes and with teacher {string}", (courseName, teacherName) => {
	courseManagement.seeNewCourseTableContainsCourseWithoutClass(courseName, teacherName)
});

Then("I see 3 enabled action items for course {string}", (courseName) => {
	courseManagement.seeCourseHas3ActiveActionItems(courseName);
});

When("I click the edit button on course {string}", (courseName) =>{
	courseManagement.clickEditButtonForCourse(courseName);
});

When("I click the start synchronization button on course {string}", (courseName) => {
	courseManagement.clickStartSynchronizeButtonForCourse(courseName);
});

When("I click the end synchronization button on course {string}", (courseName) => {
	courseManagement.clickEndSynchronizeButtonForCourse(courseName);
});

When("I click the end synchronization button on course {string}", (courseName) => {
	courseManagement.clickEndSynchronizeButtonForCourse(courseName);
});

Then("I see {string} is synchronized with {string}", (courseName, groupName) => {
	courseManagement.seeCourseSynchronizedWithGroup(courseName, groupName);
});

Then("I see {string} is not synchronized", (courseName) => {
	courseManagement.seeCourseNotSynchronized(courseName);
});

Then("I see the start synchronize button on course {string}", (courseName) => {
	courseManagement.seeStartSynchronizeButtonForCourse(courseName);
});

Then("I do not see the start synchronize button on course {string}", (courseName) => {
	courseManagement.seeNoSynchronizeButtonForCourse(courseName);
});

Then("I see the end synchronize button on course {string}", (courseName) => {
	courseManagement.seeEndSynchronizeButtonForCourse(courseName);
});

Then("I see title of the confirmation modal to end the synchronization", () => {
	courseManagement.seeSynchronizationConfirmationModalTitle();
});

Then("I see information text of the confirmation modal to end the synchronization of course {string} with group {string}", (courseName, groupName) => {
	courseManagement.seeSynchronizationInfoTextForCourseAndGroup(courseName, groupName);
});

When("I click the confirm button on the end synchronization confirmation modal", () => {
	courseManagement.clickConfirmSynchronizationButton();
});

Then("I see the start synchronization button on course {string}", (courseName) => {
	courseManagement.seeStartSynchronizeButtonForCourse(courseName);
});
