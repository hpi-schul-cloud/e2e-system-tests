import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import CourseManagement from "../../pages/course_management/pageCourseManagement";

const courseManagement = new CourseManagement();

Then("I see the course {string} without a synchronized group", (courseName) => {
	courseManagement.seeCourseWithSyncedGroup(courseName, "");
});

Then(
	"I see the course {string} is synchronized with group {string}",
	(courseName, groupName) => {
		courseManagement.seeCourseWithSyncedGroup(courseName, groupName);
	}
);

Then("I do not see the start synchronize button of course {string}", (courseName) => {
	courseManagement.doNotSeeStartSyncedButtonOfCourse(courseName);
});

Then("I do not see the stop synchronize button of course {string}", (courseName) => {
	courseManagement.doNotSeeStopSyncedButtonOfCourse(courseName);
});

When("I click the start synchronization button on course {string}", (courseName) => {
	courseManagement.clickStartSyncButtonOfCourse(courseName);
});

When("I click the stop synchronization button on course {string}", (courseName) => {
	courseManagement.clickStopSyncButtonOfCourse(courseName);
});

Then("I see title of the confirmation modal to end the synchronization", () => {
	courseManagement.seeSynchronizationConfirmationModalTitle();
});

Then(
	"I see information text of the confirmation modal to end the synchronization of course {string} with group {string}",
	(courseName, groupName) => {
		courseManagement.seeSynchronizationInfoTextForCourseAndGroup(
			courseName,
			groupName
		);
	}
);

When("I click the confirm button on the stop synchronization confirmation modal", () => {
	courseManagement.clickConfirmSynchronizationButton();
});

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
