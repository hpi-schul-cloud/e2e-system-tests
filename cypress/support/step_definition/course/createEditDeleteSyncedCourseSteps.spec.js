import Classes from "../../pages/class_management/pageClasses";
import Courses from "../../pages/course/pageCourses";

const { Then, When } = require("@badeball/cypress-cucumber-preprocessor");

const courses = new Courses();
const classes = new Classes();
Then("I see title of the modal to select a synchronized group", () => {
	courses.seeTitleInSyncedGroupDialog();
});

Then("I see the FAB to create a new synchronized course", () => {
	courses.seeCreateSyncedCourseFAB();
});

Then("I see information text of the modal to select a synchronized group", () => {
	courses.seeInfoTextInSyncedGroupDialog();
});

Then("I see group selection of the modal to select a synchronized group", () => {
	courses.seeGroupSelectionInSyncedGroupDialog();
});

Then("I see the warning text of the modal to select a synced group", () => {
	courses.seeWarningTextInSyncedGroupDialog();
});

Then("I see continue button of the modal to select a synced group is disabled", () => {
	courses.seeContinueBtnInSyncedGroupDialogIsDisabled();
});

Then("I see the group {string} is selected", (groupName) => {
	courses.seeSelectedGroup(groupName);
});

// zu commonSteps
Then("I see the course title form contains {string}", (name) => {
	courses.seeCourseTitleFormContains(name);
});

Then("I see the teacher {string} is selected", (teacherName) => {
	courses.seeSelectedTeacher(teacherName);
});

Then("I see the student {string} is selected", (studentName) => {
	courses.seeSelectedStudent(studentName);
});

Then("I see the teacher selection box is disabled", () => {
	courses.seeTeacherSelectionBoxIsDisabled();
});

Then("I see the substitute teacher selection box is disabled", () => {
	courses.seeSubstituteTeacherSelectionBoxIsDisabled();
});

Then("I see the date pickers to start and end the course are disabled", () => {
	courses.seeStartDateAndEndDatePickersAreDisabled();
});

Then("I see the class selection box is disabled", () => {
	courses.seeClassSelectionBoxIsDisabled();
});

Then("I see the student selection box is disabled", () => {
	courses.seeStudentSelectionBoxIsDisabled();
});

Then("I see the button to create another course is not visible", () => {
	courses.seeCreateAnotherCourseButtonIsNotVisible();
});

Then("I see the end synchronization button", () => {
	courses.seeEndSyncButton();
});

Then("I see the title of the end sync modal", () => {
	courses.seeTitleInEndSyncDialog();
});

Then("I see the warning text of the end sync modal", () => {
	courses.seeWarningTextInEndSyncDialog();
});

Then("I see the information text of the end sync modal", () => {
	courses.seeInfoTextInEndSyncDialog();
});

Then("I see the synced course chip", () => {
	courses.seeSyncedCourseChip();
});

Then("I see the group {string} is synced with course {string}", (groupName, courseName) => {
	classes.seeGroupIsSyncedWithCourse(groupName, courseName);
});

Then("I see the course {string} is unsynchronized", (groupName) => {
	courses.seeSyncedCourseChipIsNotVisible(groupName);
});

Then("I see the group {string} has no synced course", (groupName) => {
	classes.seeGroupIsNotSyncedWithCourse(groupName);
});

Then("I see the start date picker has {string} selected", (startDate) => {
	courses.seeCourseStartDate(startDate);
});

Then("I see the end date picker has {string} selected", (endDate) => {
	courses.seeCourseEndDate(endDate);
});

When("I click on FAB to create a new synchronized course", () => {
	courses.clickOnCreateSyncedCourseFAB();
});

When("I click on group selection", () => {
	courses.clickOnSyncedGroupSelection();
});

When("I enter {string} as group name in the selection and select the group", (groupName) => {
	courses.selectGroupInSyncedGroupSelection(groupName);
});

When("I click continue button on the modal to select a synchronized group", (groupName) => {
	courses.clickContinueButtonOnSyncedGroupDialog();
});

When("I click cancel button on the modal to select a synchronized group", (groupName) => {
	courses.clickCloseButtonOnSyncedGroupDialog();
});

When("I click the end synchronization button", (groupName) => {
	courses.clickEndSyncButton();
});

When("I click the confirmation button on the end sync modal", () => {
	courses.clickConfirmButtonOnEndSyncDialog();
});

When("I click the end sync button of group {string}", (groupName) => {
	classes.clickEndSyncWithCourseButton(groupName);
});




