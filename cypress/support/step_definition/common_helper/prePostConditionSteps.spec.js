import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Board from "../../pages/course_board/pageBoard";
import Courses from "../../pages/course/pageCourses";

const courses = new Courses();
const board = new Board();

Given("a course with name {string} exists with {string} as teacher and {string} as student", (courseName, teacherName, studentName) => {
	courses.navigateToCoursesOverview();
	courses.clickOnCreateCourseFAB();
	courses.fillCourseCreationForm(courseName);
	courses.selectCourseColour();
	courses.selectTeacherInCourseCreatePage(teacherName);
	courses.clickOnNextStepsBtnAfterEnteringCourseDetails();
	courses.selectStudentInCourseCreatePage(studentName);
	courses.clickOnNextStepButtonOnCourseParticipationDetail();
});

Given("a board exists in course {string}", (courseName) => {
	courses.navigateToCoursesOverview();
	courses.navigateToCoursePage(courseName);
	courses.clickOnCreateContentFAB();
	board.clickOnFABToCreateNewColumnBoard();
	board.clickOnMultiColumnBoardOptionInDialogBox();
	board.clickOnThreeDotMenuInCourseBoardTitle();
	board.clickPublishOptionInThreeDotMenuInCourseBoard();
});

Given("the board has a column with a card", (columnName) => {
	board.clickOnAddNewColumnButton();
	board.clickOutsideTheColumnToSaveTheColumn();
	board.clickPlusIconToAddCardInColumn();
});

Given("course with name {string} is deleted", (courseName) => {
	courses.navigateToCoursesOverview();
	courses.navigateToCoursePage(courseName);
	courses.openCourseEditPage();
	courses.clickOnDeleteButtonOnCourseEditPage();
	courses.confirmCourseDeletionOnModal();
	courses.navigateToCoursesOverview();
	courses.courseIsNotVisiblOnOverviewPage(courseName);
});