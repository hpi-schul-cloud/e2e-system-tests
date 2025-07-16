import { Given } from "@badeball/cypress-cucumber-preprocessor";
import Board from "../../pages/course_board/pageBoard";
import Courses from "../../pages/course/pageCourses";
import Tasks from "../../pages/tasks/pageTasks";
import RoomBoards from "../../pages/room_board/pageRoomBoards";
import Rooms from "../../pages/rooms/pageRooms";
import Management from "../../pages/admin/pageAdministration";
import GlobalActions from "../../pages/common_helper/globalActions";

const roomBoards = new RoomBoards();
const rooms = new Rooms();
const courses = new Courses();
const board = new Board();
const management = new Management();
const globalActions = new GlobalActions();
const course_tasks = new Tasks();

Given("video conference is added in the card", () => {
	roomBoards.clickOnThreeDotInCard();
	roomBoards.clickEditOptionInCardThreeDot();
	board.clickPlusIconToAddContentIntoCard();
	roomBoards.seeElementSelectionDialog();
	board.selectCardElementFromMenu("video-conference");
	roomBoards.enterVideoConferenceTitle("video_conference_title");
	roomBoards.clickSaveButtonOrPressEnterToSaveVideoConferenceTitle();
	roomBoards.clickOutsideToSaveCard();
	roomBoards.verifyVideoConferenceElementAddedInCard();
});

Given("etherpad is added in the card", () => {
	roomBoards.clickOnThreeDotInCard();
	roomBoards.clickEditOptionInCardThreeDot();
	board.clickPlusIconToAddContentIntoCard();
	roomBoards.seeElementSelectionDialog();
	board.selectCardElementFromMenu("collaborative-text-editor");
	roomBoards.clickOutsideToSaveCard();
	roomBoards.verifyEtherpadIsVisibleOnCard();
});

Given("link element is added in the card", () => {
	roomBoards.clickOnThreeDotInCard();
	roomBoards.clickEditOptionInCardThreeDot();
	board.clickPlusIconToAddContentIntoCard();
	roomBoards.seeElementSelectionDialog();
	board.selectCardElementFromMenu("link");
	roomBoards.enterLinkInLinkElement("https://main.dbc.dbildungscloud.dev");
	roomBoards.clickSaveButtonToSaveLinkInCard();
	roomBoards.seeLinkElementInRoomBoard();
	roomBoards.clickOutsideToSaveCard();
	roomBoards.verifyLinkElementClickableInRoomBoard();
});

Given("multi column board is published to not to be in a draft mode", () => {
	roomBoards.clickOnThreeDotMenuInRoomBoardTitle();
	board.clickOnKebabMenuAction("publish");
	roomBoards.verifyDraftChipNotVisible();
});

Given("admin enables video conference for the school in the school settings page", () => {
	management.openAdministrationInMenu();
	management.clickOnSchoolAdministrationInSideMenu();
	management.clickGeneralSettingsPanel();
	management.enableTeamsVideoConferenceByAdmin();
	management.clickOnAdminSettingsSave();
});

Given("the room named {string} is deleted", (room_name) => {
	rooms.navigateToRoomsOverview();
	rooms.navigateToRoom(room_name);
	rooms.seeRoomDetailPage(room_name);
	rooms.openThreeDotMenuForRoom();
	rooms.clickOnKebabMenuAction("delete");
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

Given("I navigate to the room detail page via Breadcrumb from the board page", () => {
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
		courses.selectStudentsInCourseCreatePage(studentName);
		courses.clickOnNextStepButtonOnCourseParticipationDetail();
	}
);


Given(
	"published task with name {string} in the course with name {string}",
	(taskname,courseName) => {
		courses.navigateToCoursesOverview();
		courses.navigateToCoursePage(courseName);
		courses.clickOnCreateContentFAB();
		courses.clickOnNewTaskFAB();
		course_tasks.enterTaskTitle(taskname);
		course_tasks.clickOnGroupSubmissionCheckbox();
		course_tasks.setTaskText("Dies ist deine erste Aufgabe");
		course_tasks.executeFileUpload("example_jpg.jpg");
		course_tasks.setVisibilityStartDate('today', '0000');
		course_tasks.setVisibilityDueDate('tomorrow', '1000');
		course_tasks.clickOnDraftCheckbox();
		course_tasks.clickOnSubmit();
		}
);

Given("Task {string} in course {string} is NOT submitted by the student", (taskName,courseName) => {
	courses.navigateToCoursesOverview();
	courses.navigateToCoursePage(courseName);
	courses.seeTaskOnCoursePage(taskName);
	courses.compareNotSubmittedTasksInformation(taskName);
}
);

Given("Task {string} in course {string} is submitted by the student", (taskName,courseName) => {
	courses.navigateToCoursesOverview();
	courses.navigateToCoursePage(courseName);
	courses.seeTaskOnCoursePage(taskName);
	courses.openTask(taskName);
	course_tasks.clickSubmissionTab();
	course_tasks.clickSubmissionTab();
	course_tasks.setSubmissionText("Meine erste aufgabe erledigt");
	course_tasks.executeFileUploadForSubmission('testboard_jpg.jpg');
	course_tasks.seeFileInSubmissionSectionUploadedFiles('testboard_jpg.jpg');
	course_tasks.clickSendSubmissionBtn();
	course_tasks.seeSubmissionReceivedHint();
	course_tasks.navigateToTasksOverview();
	course_tasks.seeTaskNotInListAsStudent(taskName);
	course_tasks.clickOnTabDoneTasks();
	course_tasks.openNotGradedTasks();
	course_tasks.seeTaskInListAsStudent(taskName);

}
);

Given("a course named {string} exists", (courseName) => {
	courses.navigateToCoursesOverview();
	courses.clickOnCreateCourseFAB();
	courses.fillCourseCreationForm(courseName);
	courses.selectCourseColour();
	courses.clickOnNextStepsBtnAfterEnteringCourseDetails();
	courses.clickOnNextStepButtonOnCourseParticipationDetail();
	courses.navigateToCoursesOverview();
});

Given(
	"a multi-column board named {string} exists in the course {string}",
	(boardTitle, courseName) => {
		courses.navigateToCoursesOverview();
		courses.navigateToCoursePage(courseName);
		courses.clickOnCreateContentFAB();
		board.clickOnFABToCreateNewColumnBoard();
		board.clickOnMultiColumnBoardOptionInDialogBox();
		board.clickOnThreeDotMenuInCourseBoardTitle();
		board.clickPublishOptionInThreeDotMenuInCourseBoard();
		roomBoards.clickOnThreeDotMenuInRoomBoardTitle();
		roomBoards.clickOnEditInBoardMenu();
		roomBoards.enterRoomBoardTitle(boardTitle);
		roomBoards.clickOutsideTheTitleToSaveTheModifiedTitle();
		roomBoards.seeUpdatedRoomBoardTitle(boardTitle);
	}
);

Given("the multi-column board has a column with a card", () => {
	board.clickOnAddNewColumnButton();
	board.clickOutsideTheColumnToSaveTheColumn();
	board.clickPlusIconToAddCardInColumn();
	board.clickOutsideTheCardToSaveTheCard();
});

Given("the card has a folder named {string}", (folderTitle) => {
	board.clickOutsideTheColumnToSaveTheColumn();
	roomBoards.clickOnThreeDotInCard();
	roomBoards.clickEditOptionInCardThreeDot();
	board.clickPlusIconToAddContentIntoCard();
	board.selectCardElementFromMenu('file-folder');
	roomBoards.enterFolderNameInBoardCard(folderTitle);
	roomBoards.approveFolderNameInCard();
	roomBoards.seeFolderElementWithTitle(folderTitle);
});

Given("the folder {string} contains files {string}", (folderTitle, uploadFiles) => {
	board.clickOutsideTheColumnToSaveTheColumn();
	roomBoards.clickFolderElementWithTitle(folderTitle);
	globalActions.clickElementWithDataTestId("fab-add-files");
	roomBoards.uploadMultipleFilesInFolder(uploadFiles);
	roomBoards.seeMultipleFilesInFolderList(uploadFiles);
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


