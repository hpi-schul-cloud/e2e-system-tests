import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import CourseManagement from '../../pages/course_management/pageCourseManagement';

const courseManagement = new CourseManagement()

When("I click on the Add course button", () => {
	courseManagement.clickCreateCourseAdminButton();
});

When("I click on the edit button of course {string}", (courseName) => {
	courseManagement.clickEditButtonOfCourse(courseName);
});

When("I click on the delete button of course {string}", (courseName) => {
	courseManagement.clickDeleteButtonOfCourse(courseName)
});

Then("I see the new course administration page", () => {
	courseManagement.isNewCourseAdministrationPage();
});

Then("I see the course {string} on the new course administration page", (courseName) => {
	courseManagement.seeCourseInCourseTable(courseName)
});

Then("I do not see course {string} in course table", (courseName) => {
	courseManagement.doNotSeeCourseInTable(courseName);
})

Then("I see 2 tabs", () => {
	courseManagement.see2Tabs();
});

Then("I see the course {string} with teacher {string}", (courseName, teacherName) => {
	courseManagement.seeCourseWithTeacher(courseName, teacherName);
});

Then("I see the course {string} without a class", (courseName) => {
	courseManagement.seeCourseWithClass(courseName, "");
});

Then("I see the course {string} with class {string}", (courseName, className) => {
	courseManagement.seeCourseWithClass(courseName, className);
});
