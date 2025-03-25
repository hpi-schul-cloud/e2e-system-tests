import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import CourseManagement from '../../pages/course_management/pageCourseManagement';

const courseManagement = new CourseManagement()


Then("I see the course {string} without a synchronized group", (courseName) => {
	courseManagement.seeCourseWithSyncedGroup(courseName, "");
});

Then("I see the course {string} is synchronized with group {string}", (courseName, groupName) => {
	courseManagement.seeCourseWithSyncedGroup(courseName, groupName);
});

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

Then("I see information text of the confirmation modal to end the synchronization of course {string} with group {string}", (courseName, groupName) => {
	courseManagement.seeSynchronizationInfoTextForCourseAndGroup(courseName, groupName);
});

When("I click the confirm button on the stop synchronization confirmation modal", () => {
	courseManagement.clickConfirmSynchronizationButton();
});
