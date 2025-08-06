import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import CourseManagement from "../../pages/course_management/pageCourseManagement";

const courseManagement = new CourseManagement();

Then("I see the icon Lock in the course {string}", (courseName) => {
	courseManagement.seeLockIconInCourse(courseName);
});

Then("I see a message that the course is not accessible", () => {
	courseManagement.seeCourseNotAccessibleMessage();
});

When("I click on the locked course {string}", (courseName) => {
	courseManagement.clickLockedCourse(courseName);
});

When("I click on the tab Current", () => {
	courseManagement.clickCurrentTab();
});

Then("I see the icon Alert in the column Teacher", () => {
	courseManagement.seeAlertIconInTeachersColumn();
});

When("I click on the toggle Only show courses without teachers", () => {
	courseManagement.clickToggleCourseWithoutTeachers();
});
