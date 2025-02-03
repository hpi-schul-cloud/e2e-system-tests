import { Given } from "@badeball/cypress-cucumber-preprocessor";
import Board from "../../pages/course_board/pageBoard";
import Courses from "../../pages/course/pageCourses";
import RoomBoards from "../../pages/room_board/pageRoomBoards";
import Rooms from "../../pages/rooms/pageRooms";
import Management from "../../pages/admin/pageAdministration";

const roomBoards = new RoomBoards();
const rooms = new Rooms();
const courses = new Courses();
const board = new Board();
const management = new Management();

Given("admin enables video conference for the school in the school settings page", () => {
	management.openAdministrationInMenu();
	management.clickOnSchoolAdministrationInSideMenu();
	management.clickGeneralSettingsPanel();
	management.enableTeamsVideoConferenceByAdmin();
	management.clickOnAdminSettingsSave();
});

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

Given("a multi-column board named {string} exists in the room", (board_title) => {
	rooms.clickOnAddContentButton();
	rooms.seeFabButtonToAddBoard();
	rooms.clickOnFabButtonToAddBoard();
	roomBoards.seeColumnBoardDialogBox();
	roomBoards.clickOnButtonToAddMultiColumnBoard();
	roomBoards.seeNewRoomBoardCreatePage();
	roomBoards.clickOnThreeDotMenuInRoomBoardTitle();
	roomBoards.clickOnEditInBoardMenu();
	roomBoards.enterRoomBoardTitle(board_title);
	roomBoards.clickOutsideTheTitleToSaveTheModifiedTitle();
	roomBoards.seeUpdatedRoomBoardTitle(board_title);
});

Given("a single-column board named {string} exists in the room", (board_title) => {
	rooms.clickOnAddContentButton();
	rooms.seeFabButtonToAddBoard();
	rooms.clickOnFabButtonToAddBoard();
	roomBoards.seeColumnBoardDialogBox();
	roomBoards.clickOnButtonToAddSingleColumnBoard();
	roomBoards.seeNewRoomBoardCreatePage();
	roomBoards.clickOnThreeDotMenuInRoomBoardTitle();
	roomBoards.clickOnEditInBoardMenu();
	roomBoards.enterRoomBoardTitle(board_title);
	roomBoards.clickOutsideTheTitleToSaveTheModifiedTitle();
	roomBoards.seeUpdatedRoomBoardTitle(board_title);
});

Given("I navigate to the room detail page from the board page", () => {
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

Given("a multi-column board exists in course {string}", (courseName) => {
	courses.navigateToCoursesOverview();
	courses.navigateToCoursePage(courseName);
	courses.clickOnCreateContentFAB();
	board.clickOnFABToCreateNewColumnBoard();
	board.clickOnMultiColumnBoardOptionInDialogBox();
	board.clickOnThreeDotMenuInCourseBoardTitle();
	board.clickPublishOptionInThreeDotMenuInCourseBoard();
});

Given("the multi-column board has a column with a card", () => {
	board.clickOnAddNewColumnButton();
	board.clickOutsideTheColumnToSaveTheColumn();
	board.clickPlusIconToAddCardInColumn();
	board.clickOutsideTheCardToSaveTheCard();
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
