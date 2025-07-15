import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CourseManagement from "../../pages/course_management/pageCourseManagement";

const courseManagement = new CourseManagement();

Then("I see two tabs Current and Archive", () => {
	courseManagement.seeCurrentAndArchiveTabs();
});

When("I click on the tab Current", () => {
	courseManagement.clickCurrentTab();
});

Then("I see the course {string}", (courseName) => {
	courseManagement.seeCourseInCourseTable(courseName);
});

Then("I see the Alert icon with the text {string} in the column Teacher", (infoText) => {
	courseManagement.seeAlertIconWithTextInTeacherColumn(infoText);
});

When("I click on the toggle {string}", (toggleText) => {
	courseManagement.clickToggleCourseWithoutTeacher(toggleText);
});

Then("I see only the course {string}", (courseName) => {
	courseManagement.seeOnlyCourseInCourseTable(courseName);
});
