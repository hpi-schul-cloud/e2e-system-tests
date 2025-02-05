const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");
import Management from "../../pages/admin/pageAdministration";
import Courses from "../../pages/course/pageCourses";

const courses = new Courses();
const management = new Management();

Then("I select teacher {string} is selected by default", (teacherName) => {
	courses.selectTeacherInCourseCreatePage(teacherName);
});

Then("I see the section three as the finish page", () => {
	courses.seeFinalStepPageOnCourseCreate();
});

When("I select the student {string} in the list", (studentName) => {
	courses.selectStudentInCourseCreatePage(studentName);
});

When("I see student selection box to select the student for the course", () => {
	courses.seeStudentSelectionBoxInCourseCreatePage();
});

When("I click on FAB to add or import courses", () => {
	courses.clickOnFABToAddOrImportCourse();
});

Then("I see course search box on the course overview page", () => {
	courses.seeCourseSearchBoxOnCourseOverview();
});

When("I go to course administration page", () => {
	management.navigateToCourseAdministration();
});

When("I go to courses overview", () => {
	courses.navigateToCoursesOverview();
});

When("I go to course {string}", (courseName) => {
	courses.navigateToCoursePage(courseName);
});

Then("I see the course {string} on the course overview page", (courseName) => {
	courses.courseIsVisiblOnOverviewPage(courseName);
});

Then("I do not see the course {string} on the course overview page", (courseName) => {
	courses.courseIsNotVisiblOnOverviewPage(courseName);
});

When("I click on button Save changes in page Edit course", () => {
	courses.submitChangesAfterEditingCourse();
});

When("I open page Edit course", () => {
	courses.openCourseEditPage();
});

Then("I see page Edit course", () => {
	courses.showCourseEditPage();
});

Then("I see the course title is {string}", (courseName) => {
	courses.isCorrectCourseEditPage(courseName);
});

When("I click on FAB to create a new course depending on sub menu", () => {
	courses.clickOnCreateCourseFAB();
});

When("I click on new course create button in sub menu", () => {
	courses.clickOnCreateNewCourseInSubMenu();
});

When("I click on FAB to create new content", () => {
	courses.clickOnCreateContentFAB();
});

When("I click on New Task FAB", () => {
	courses.clickOnNewTaskFAB();
});

When("I click on New Topic FAB", () => {
	courses.clickOnNewTopicFAB();
});

When("I can see task {string} on course page", (taskTitle) => {
	courses.seeTaskOnCoursePage(taskTitle);
});

Then("I can see board {string} on course page", (boardTitle) => {
	courses.seeBoardOnCoursePage(boardTitle);
});

When("I can not see content {string}", (contentTitle) => {
	courses.contentIsNotVisibleOnCoursePage(contentTitle);
});

// When('I can see task {string} on course page', taskTitle => {
//   courses.seeTaskOnCoursePage(taskTitle)
// })

// When('I can not see task {string}', taskTitle => {
//   courses.taskIsNotVisibleOnCoursePage(taskTitle)
// })

When("I click on topic {string} on course page", (contentTitle) => {
	courses.openTopic(contentTitle);
});

When("I click on three dot menu of content {string}", (contentTitle) => {
	courses.openThreeDotMenuForContent(contentTitle);
});

When("I click on three dot menu of topic {string}", (contentTitle) => {
	courses.openThreeDotMenuForTopic(contentTitle);
});

When("I click on Delete in dot menu", () => {
	courses.clickDeleteInDotMenu();
});

When("I click on Delete in dot menu of topic", () => {
	courses.clickDeleteInDotMenuOfTopic();
});

When("I click on Edit in dot menu", () => {
	courses.clickEditInDotMenu();
});

When("I click on Edit in dot menu of topic", () => {
	courses.clickEditInDotMenuOfTopic();
});

When("I click on option Back to draft in dot menu of first topic", () => {
	courses.clickBackToDraftInDotMenuOfTopic();
});

When("I click on link Publish for first topic in content list", () => {
	courses.clickPublishLinkForFirstTopic();
});

When("I click on Cancel in confirmation window", () => {
	courses.clickOnCancelInConfirmationWindow();
});

When("I click on Delete in confirmation window", () => {
	courses.clickDeleteInConfirmationWindow();
});

When("I click on task {string}", (taskTitle) => {
	courses.openTask(taskTitle);
});

Then(
	"I see task card info submitted contains {string} for task {string}",
	(submittedTasks, taskTitle) => {
		courses.compareSubmittedTasksInformation(submittedTasks, taskTitle);
	}
);

When(
	"Task card info graded contains {string} for task {string}",
	(gradedTasks, taskTitle) => {
		courses.compareGradedTasksInformation(gradedTasks, taskTitle);
	}
);

When("I click on link finish for task {string}", (taskTitle) => {
	courses.clickOnFinishTask(taskTitle);
});

Then("I see task {string} does not contain any buttons", (taskTitle) => {
	courses.checkTaskCardDoesNotHaveButtons(taskTitle);
});

Then("I see task {string} contains buttons", (taskTitle) => {
	courses.checkTaskCardDoesHaveButtons(taskTitle);
});

Then("I can see topic {string} on course page", (topicTitle) => {
	courses.topicIsVisibleOnCoursePage(topicTitle);
});

Then("I can not see topic {string} on course page", (topicTitle) => {
	courses.topicIsNotVisibleOnCoursePage(topicTitle);
});

When("I clear substitute teacher field", () => {
	courses.clearSubstituteTeacherField();
});

When("I add substitute teacher {string}", (userFullName) => {
	courses.addSubstituteTeacher(userFullName);
});

Then("I delete all courses named {string}", (courseName) => {
	courses.deleteAllCoursesMatchingName(courseName);
});

When("I click on copy course button", () => {
	courses.clickCopyCourseButton();
});

Then("I see the copy result notification", () => {
	courses.seeCopyResultNotification();
});

When("I close the dialog", () => {
	courses.clickOnDialogClose();
});

Then("I see course page {string}", (courseName) => {
	courses.seeCoursePage(courseName);
});

When("I click on edit course", () => {
	courses.clickOnEditCourse();
});

When(
	"I add the first student with search string {string} to the course",
	(searchString) => {
		courses.addStudentWithSearchStringToCourse(searchString);
	}
);

Then("I see section one area on the course create page", () => {
	courses.seeSectionOneAreaOnCourseCreatePage();
});

When("I enter the course title {string}", (newCourseName) => {
	courses.fillCourseCreationForm(newCourseName);
});

When("I select course colour as red", () => {
	courses.selectCourseColour();
});

Then("I see teacher {string} is selected by default", (defaultTeacherName) => {
	courses.seeSelectedDefaultTeacher(defaultTeacherName);
});

When("I select the teacher {string} in the list", (teacherName) => {
	courses.selectTeacherInCourseCreatePage(teacherName);
});

Then("I see teacher selection box", () => {
	courses.seeTeacherSelectionBox();
});

Then("I see substitute teacher selection box", () => {
	courses.seeSubstituteTeacherSelectionBox();
});

Then("I see date pickers to start and end the course as per school year", () => {
	courses.seeDatePickersForCourseInSchoolYear();
});

Then("I see button to create a course time table container", () => {
	courses.seeCreateCourseTimeTableContainer();
});

When(
	"I click on button Next Steps after entering the course detail in section one",
	() => {
		courses.clickOnNextStepsBtnAfterEnteringCourseDetails();
	}
);

Then("I see section two area on the course create page", () => {
	courses.seeSectionTwoAreaOnCourseCreatePage();
});

When("I click on button Next Steps after selecting course participant details", () => {
	courses.clickOnNextStepButtonOnCourseParticipationDetail();
});

Then("I see the section three area as the finish page", () => {
	courses.seeCourseCreationFinishPageSectionThree();
});

When("I click on button To Course Overview on the finish page", () => {
	courses.clickOnToCourseOverviewBtn();
});

When("I click the cancel edit course button", () => {
	courses.clickCancelButton();
});

When("I click on the save course changes button", () => {
	courses.clickSaveChangesButton();
});

When("I edit the title of the course to {string}", (newCourseName) => {
	courses.editCourseTitle(newCourseName);
});

When("I open column board {string}", (boardName) => {
	courses.openColumnBoardWithName(boardName);
});

Then("I see breardcrumb contains course name {string}", (courseName) => {
	courses.seeBreadcrumbWithCourseName(courseName);
});
