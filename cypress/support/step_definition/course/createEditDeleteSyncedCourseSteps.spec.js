import Classes from "../../pages/class_management/pageClasses";
import Courses from "../../pages/course/pageCourses";

const { Then, When } = require("@badeball/cypress-cucumber-preprocessor");

const courses = new Courses();
const classes = new Classes();

Then("I see the FAB to create a new synced course", () => {
	courses.seeCreateSyncedCourseFAB();
});

Then("I see title of the modal to select a synced group", () => {
	courses.seeTitleInSyncedGroupDialog();
});

Then("I see information text of the modal to select a synced group", () => {
	courses.seeInfoTextInSyncedGroupDialog();
});

Then("I see the group selection of the modal to select a synced group", () => {
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

Then("I see the title of the modal to end the sync", () => {
	courses.seeTitleInEndSyncDialog();
});

Then("I see the warning text of the modal to end the sync", () => {
	courses.seeWarningTextInEndSyncDialog();
});

Then("I see the information text of the modal to end the sync", () => {
	courses.seeInfoTextInEndSyncDialog();
});

Then("I see the synced chip next to the title on the room page", () => {
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

When("I click on FAB to create a new synced course", () => {
	courses.clickOnCreateSyncedCourseFAB();
});

When("I select group {string} in the group selection", (groupName) => {
	courses.selectGroupInSyncedGroupSelection(groupName);
});

When("I click continue button on the modal to select a synced group", (groupName) => {
	courses.clickContinueButtonOnSyncedGroupDialog();
});

When("I click cancel button on the modal to select a synced group", (groupName) => {
	courses.clickCloseButtonOnSyncedGroupDialog();
});

When("I click the end synchronization button", (groupName) => {
	courses.clickEndSyncButton();
});

When("I click the confirmation button of the modal to end the sync", () => {
	courses.clickConfirmButtonOnEndSyncDialog();
});

When("I click the end sync button of group {string}", (groupName) => {
	classes.clickEndSyncWithCourseButton(groupName);
});

When("I edit the title of the course to {string}", (newCourseName) => {
	courses.editCourseTitle(newCourseName);
});




