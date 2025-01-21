import { Given } from "@badeball/cypress-cucumber-preprocessor";
import Board from "../../pages/course_board/pageBoard";
import Courses from "../../pages/course/pageCourses";
import RoomBoards from "../../pages/room_board/pageRoomBoards";
import Rooms from "../../pages/room/pageRooms";

const roomBoards = new RoomBoards();
const rooms = new Rooms();
const courses = new Courses();
const board = new Board();

Given("the room named {string} is deleted", (room_name) => {
	rooms.openThreeDotMenuForRoom();
	rooms.openDeleteInThreeDotMenuForRoom();
	rooms.seeConfirmationModalForRoomDeletion();
	rooms.clickDeleteInConfirmationModal();
	rooms.roomIsNotVisibleOnOverviewPage(room_name);
});

Given("a room named {string} exists", (room_name) => {
	rooms.navigateToRoomsOverview();
	rooms.clickOnCreateRoomFAB();
	rooms.showRoomCreationPage();
	rooms.fillRoomFormName(room_name);
	rooms.selectRoomColour();
	rooms.selectTodayStartDateForRoom();
	rooms.selectEndDateForRoom();
	rooms.submitRoom();
	rooms.seeRoomDetailPage(room_name);
});

Given("a multicolumn board named {string} exists in the room", (edited_board_title) => {
	rooms.clickOnAddContentButton();
	rooms.seeFabButtonToAddBoard();
	rooms.clickOnFabButtonToAddBoard();
	roomBoards.seeColumnBoardDialogBox();
	roomBoards.clickOnButtonToAddMultiColumnBoard();
	roomBoards.seeNewRoomBoardCreatePage();
	roomBoards.clickOnThreeDotMenuInRoomBoardTitle();
	roomBoards.clickOnEditInBoardMenu();
	roomBoards.enterRoomBoardTitle(edited_board_title);
	roomBoards.clickOutsideTheTitleToSaveTheModifiedTitle();
	roomBoards.seeGivenRoomBoardTitle(edited_board_title);
	roomBoards.clickOnBreadcrumbToNavigateToRoomDetail();
});

Given("a list board named {string} exists in the room", (edited_board_title) => {
	rooms.clickOnAddContentButton();
	rooms.seeFabButtonToAddBoard();
	rooms.clickOnFabButtonToAddBoard();
	roomBoards.seeColumnBoardDialogBox();
	roomBoards.clickOnButtonToAddSingleColumnBoard();
	roomBoards.seeNewRoomBoardCreatePage();
	roomBoards.clickOnThreeDotMenuInRoomBoardTitle();
	roomBoards.clickOnEditInBoardMenu();
	roomBoards.enterRoomBoardTitle(edited_board_title);
	roomBoards.clickOutsideTheTitleToSaveTheModifiedTitle();
	roomBoards.seeGivenRoomBoardTitle(edited_board_title);
	roomBoards.clickOnBreadcrumbToNavigateToRoomDetail();
});

Given(
	"a course with name {string} exists with {string} as teacher and {string} as student",
	(courseName, teacherName, studentName) => {
		courses.navigateToCoursesOverview();
		courses.clickOnCreateCourseFAB();
		courses.fillCourseCreationForm(courseName);
		courses.selectCourseColour();
		courses.selectTeacherInCourseCreatePage(teacherName);
		courses.clickOnNextStepsBtnAfterEnteringCourseDetails();
		courses.selectStudentInCourseCreatePage(studentName);
		courses.clickOnNextStepButtonOnCourseParticipationDetail();
	}
);

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
