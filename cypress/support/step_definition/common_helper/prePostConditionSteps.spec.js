import { Given } from "@badeball/cypress-cucumber-preprocessor";
import Management from "../../pages/admin/pageAdmin";
import ToolConfiguration from "../../pages/admin/pageToolConfiguration";
import Classes from "../../pages/classes_management/pageClasses";
import CommonCartridge from "../../pages/common_cartridge/pageCommonCartridge";
import GlobalActions from "../../pages/common_helper/globalActions";
import Courses from "../../pages/courses/pageCourses";
import Board from "../../pages/courses_board/pageCoursesBoard";
import CourseManagement from "../../pages/courses_management/pageCoursesManagement";
import Rooms from "../../pages/rooms/pageRooms";
import RoomBoards from "../../pages/rooms_board/pageRoomsBoard";
import Tasks from "../../pages/tasks/pageTasks";
import Teams from "../../pages/teams/pageTeams";
import Topics from "../../pages/topics/pageTopics";

const commonCartridge = new CommonCartridge();
const toolsConfiguration = new ToolConfiguration();
const roomBoards = new RoomBoards();
const rooms = new Rooms();
const courses = new Courses();
const board = new Board();
const classManagement = new Classes();
const courseManagement = new CourseManagement();
const management = new Management();
const globalActions = new GlobalActions();
const tasks = new Tasks();
const topics = new Topics();
const teams = new Teams();

Given("the exported file is an archive and extracted", function () {
	commonCartridge.fileIsArchive();
});

Given("extracted content and files are deleted", function () {
	commonCartridge.cleanUp();
});

Given("the school has external tool {string}", (toolList) => {
	// list of special tools
	const toolsWithCustomParameter = [
		"CY Test Tool Required Parameters",
		"CY Test Tool Optional Parameters",
	];
	const linkTools = ["CY Test Tool OpenStreetMap"];

	const tools = toolList.split(/\s*,\s*/);

	// navigation to external tools table on admin page
	management.openAdministrationInMenu();
	management.clickOnSchoolAdministrationInSideMenu();
	management.clickExternalToolsPanel();

	tools.forEach((toolName) => {
		cy.wrap(null).then(() => {
			// check if tool already exists
			return management.schoolHasExternalTool(toolName).then((exists) => {
				// if the tool already exists
				if (exists) {
					management.clickOnEditButton(toolName);

					// if tool has a custom parameter
					if (toolsWithCustomParameter.includes(toolName)) {
						toolsConfiguration.fillInCustomParameter("schoolParam", "test");
					}

					// activates the tool if it is deactivated
					toolsConfiguration.activateTool();
					toolsConfiguration.saveExternalToolButton();
					cy.log(`Tool ${toolName} already exists.`);
					return;
				}

				// if the tool does not exists
				management.clickAddExternalTool();

				if (linkTools.includes(toolName)) {
					toolsConfiguration.insertToolLink(
						"https://www.openstreetmap.org/?mlat=52.40847&mlon=9.80823&zoom=19#map=19/52.40847/9.80823"
					);
				} else if (toolsWithCustomParameter.includes(toolName)) {
					toolsConfiguration.addExternalTool(toolName);
					toolsConfiguration.fillInCustomParameter("schoolParam", "test");
				} else {
					toolsConfiguration.addExternalTool(toolName);
				}

				toolsConfiguration.saveExternalToolButton();
				management.seeExternalTool(toolName);
				cy.log(`Tool ${toolName} was added.`);
			});
		});
	});
});

Given("all external tools at the school are deleted", () => {
	management.openAdministrationInMenu();
	management.clickOnSchoolAdministrationInSideMenu();
	management.clickExternalToolsPanel();
	management.deleteAllExternalTools();
});

Given(
	"topic {string} with contents exists in the course {string} with text element {string} geoGebra {string} and id {string} learning material {string} etherpad {string} and description {string} task {string} and link {string} for {string}",
	(
		topicName,
		courseName,
		textElementTitle,
		geoGebraTitle,
		geoGebraId,
		learningMaterialTitle,
		etherpadTitle,
		etherpadDescription,
		taskTitle,
		taskId,
		namespace
	) => {
		courses.navigateToCoursesOverview();
		courses.navigateToCoursePage(courseName);
		courses.clickOnCreateContentFAB();
		courses.clickOnNewTopicFAB();

		topics.enterTopicTitle(topicName);

		// text element
		topics.clickOnAddTextToTopic();
		topics.seeFormElementText("0");
		topics.enterTitleForElementText(textElementTitle, "0");

		// geoGebra element
		topics.clickOnAddGeoGebraToTopic();
		topics.enterTitleForElementGeoGebra(geoGebraTitle);
		topics.enterIDforElementGeoGebra(geoGebraId);

		// learning material element
		topics.clickOnAddLearningMaterialToTopic();
		topics.enterTitleForElementLearningMaterial(learningMaterialTitle);
		topics.seeAddMaterialBtnInContent();

		// etherpad element
		topics.clickOnAddEtherpadToTopic();
		topics.enterTitleForElementEtherpad(etherpadTitle, "3");
		topics.enterDescriptionForElementEtherpad(etherpadDescription, "3");

		// task element
		topics.clickOnAddTaskToTopic();
		topics.enterTitleForElementTask(taskTitle);
		topics.enterLinkForElementTask(taskId, namespace);

		// save changes
		topics.clickOnSubmitChangesInTopicBtn();
		// double click for CKEditor file upload
		topics.clickOnSubmitChangesInTopicBtn();
		topics.navigateBackToCourseViaBreadcrumb();

		// verify topic appears on course detail page
		courses.topicIsVisibleOnCoursePage(topicName);
	}
);

Given(
	"student {string} with role {string} from school {string} added to the room {string}",
	(studentName, studentRole, studentSchool, roomName) => {
		const kebabMenuAction = "room-members";

		rooms.seeRoomDetailPage(roomName);
		rooms.openThreeDotMenuForRoom();
		board.clickOnKebabMenuAction(kebabMenuAction);
		rooms.seeRoomEditParticipantsPage();
		rooms.clickOnAddParticipantsFAB();
		rooms.seeModalForAddParticipants();
		rooms.seeSchoolOfParticipant(studentSchool);
		rooms.selectRoomRoleFromDropdownMenu(studentRole);
		rooms.seeRoleOfParticipant(studentRole);
		rooms.fillParticipantFormName(studentName);
		rooms.selectParticipantName();
		rooms.addParticipant();
		rooms.seeParticipantInList(studentName);
	}
);

Given(
	"student visibility for teachers in school management is {string}",
	(visibility) => {
		management.openAdministrationInMenu();
		management.clickOnSchoolAdministrationInSideMenu();
		management.clickGeneralSettingsPanel();
		management.toggleStudentVisibilityForTeachersByAdmin(visibility);
		management.clickOnAdminSettingsSave();
	}
);

Given(
	"task {string} with submission date exists in course {string}",
	(taskTitle, courseName) => {
		courses.navigateToCoursesOverview();
		courses.navigateToCoursePage(courseName);
		courses.clickOnCreateContentFAB();
		courses.clickOnNewTaskFAB();
		tasks.seeEditTaskPage("-");
		tasks.enterTaskTitle(taskTitle);
		tasks.setVisibilityStartDate("today", "0000");
		tasks.setVisibilityDueDate("tomorrow", "1000");
		tasks.setTaskText("Dies ist Deine Aufgabe.");
		tasks.executeFileUpload("test_pdf.pdf");
		tasks.clickOnSubmit();
		tasks.seeDetailPageForTask(taskTitle);
		tasks.clickOnButtonToParentCourse();
	}
);

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

Given("the room named {string} is deleted", (roomName) => {
	rooms.navigateToRoomsOverview();
	rooms.navigateToRoom(roomName);
	rooms.seeRoomDetailPage(roomName);
	rooms.openThreeDotMenuForRoom();
	rooms.clickOnKebabMenuAction("delete");
	rooms.seeConfirmationModalForRoomDeletion();
	rooms.clickDeleteInConfirmationModal();
	rooms.roomIsNotVisibleOnOverviewPage(roomName);
});

Given("a room named {string} exists", (roomName) => {
	rooms.navigateToRoomsOverview();
	rooms.clickOnCreateRoomFAB();
	rooms.showRoomCreationPage();
	rooms.fillRoomFormName(roomName);
	rooms.selectRoomColour();
	rooms.submitRoom();
	rooms.seeRoomDetailPage(roomName);
});

Given("a multi-column board named {string} exists in the room", (boardTitle) => {
	rooms.clickOnAddContentButton();
	rooms.seeFabButtonToAddBoard();
	rooms.clickOnFabButtonToAddBoard();
	roomBoards.seeColumnBoardDialogBox();
	roomBoards.clickOnButtonToAddMultiColumnBoard();
	roomBoards.seeNewRoomBoardCreatePage();
	roomBoards.clickOnThreeDotMenuInRoomBoardTitle();
	roomBoards.clickOnEditInBoardMenu();
	roomBoards.enterRoomBoardTitle(boardTitle);
	roomBoards.clickOutsideTheTitleToSaveTheModifiedTitle();
	roomBoards.seeUpdatedRoomBoardTitle(boardTitle);
});

Given(
	"a room named {string} with a multi-column board named {string} exists",
	(roomName, boardTitle) => {
		rooms.navigateToRoomsOverview();
		rooms.clickOnCreateRoomFAB();
		rooms.showRoomCreationPage();
		rooms.fillRoomFormName(roomName);
		rooms.selectRoomColour();
		rooms.submitRoom();
		rooms.seeRoomDetailPage(roomName);
		rooms.clickOnAddContentButton();
		rooms.seeFabButtonToAddBoard();
		rooms.clickOnFabButtonToAddBoard();
		roomBoards.seeColumnBoardDialogBox();
		roomBoards.clickOnButtonToAddMultiColumnBoard();
		roomBoards.seeNewRoomBoardCreatePage();
		roomBoards.clickOnThreeDotMenuInRoomBoardTitle();
		roomBoards.clickOnEditInBoardMenu();
		roomBoards.enterRoomBoardTitle(boardTitle);
		roomBoards.clickOutsideTheTitleToSaveTheModifiedTitle();
		roomBoards.seeUpdatedRoomBoardTitle(boardTitle);
	}
);

Given(
	"a room named {string} with a multi-column board named {string} exists and published",
	(roomName, boardTitle) => {
		rooms.navigateToRoomsOverview();
		rooms.clickOnCreateRoomFAB();
		rooms.showRoomCreationPage();
		rooms.fillRoomFormName(roomName);
		rooms.selectRoomColour();
		rooms.submitRoom();
		rooms.seeRoomDetailPage(roomName);
		rooms.clickOnAddContentButton();
		rooms.seeFabButtonToAddBoard();
		rooms.clickOnFabButtonToAddBoard();
		roomBoards.seeColumnBoardDialogBox();
		roomBoards.clickOnButtonToAddMultiColumnBoard();
		roomBoards.seeNewRoomBoardCreatePage();
		roomBoards.clickOnThreeDotMenuInRoomBoardTitle();
		roomBoards.clickOnEditInBoardMenu();
		roomBoards.enterRoomBoardTitle(boardTitle);
		roomBoards.clickOutsideTheTitleToSaveTheModifiedTitle();
		roomBoards.seeUpdatedRoomBoardTitle(boardTitle);
		roomBoards.clickOnThreeDotMenuInRoomBoardTitle();
		board.clickOnKebabMenuAction("publish");
		roomBoards.verifyDraftChipNotVisible();
	}
);

Given("a single-column board named {string} exists in the room", (boardTitle) => {
	rooms.clickOnAddContentButton();
	rooms.seeFabButtonToAddBoard();
	rooms.clickOnFabButtonToAddBoard();
	roomBoards.seeColumnBoardDialogBox();
	roomBoards.clickOnButtonToAddSingleColumnBoard();
	roomBoards.seeNewRoomBoardCreatePage();
	roomBoards.clickOnThreeDotMenuInRoomBoardTitle();
	roomBoards.clickOnEditInBoardMenu();
	roomBoards.enterRoomBoardTitle(boardTitle);
	roomBoards.clickOutsideTheTitleToSaveTheModifiedTitle();
	roomBoards.seeUpdatedRoomBoardTitle(boardTitle);
});

Given("I navigate to the room detail page via Breadcrumb", () => {
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
	"a course with name {string} exists with {string} as teacher, {string} as student and {string} as class",
	(courseName, teacherName, studentName, className) => {
		courses.navigateToCoursesOverview();
		courses.clickOnCreateCourseFAB();
		courses.fillCourseCreationForm(courseName);
		courses.selectCourseColour();
		courses.selectTeacherInCourseCreatePage(teacherName);
		courses.clickOnNextStepsBtnAfterEnteringCourseDetails();
		courses.addClassToCourse(className);
		courses.selectStudentsInCourseCreatePage(studentName);
		courses.clickOnNextStepButtonOnCourseParticipationDetail();
	}
);

Given("a class name {string} is {string}", (className, classState) => {
	management.openAdministrationInMenu();
	classManagement.clickOnClassInAdministrationSubMenu();
	classManagement.clickCreateClassButtonOnNewClassPage();
	classManagement.clickOnMoreOptionsInClassCreatePage();
	classManagement.enterCustomClassName(className);
	classManagement.clickOnCheckBoxMaintainSchoolYearAssignment();
	classManagement.clickAddClassButton();
	classManagement.isClassInTheTable(className, classState);
});

Given("a class name {string} deleted and {string}", (className, classState) => {
	management.openAdministrationInMenu();
	classManagement.clickOnClassInAdministrationSubMenu();
	classManagement.clickOnDeleteClassButton(className);
	classManagement.clickConfirmDeleteDialogButton();
	classManagement.isClassInTheTable(className, classState);
});

Given(
	"published task with name {string} in the course with name {string}",
	(taskname, courseName) => {
		courses.navigateToCoursesOverview();
		courses.navigateToCoursePage(courseName);
		courses.clickOnCreateContentFAB();
		courses.clickOnNewTaskFAB();
		tasks.enterTaskTitle(taskname);
		tasks.clickOnGroupSubmissionCheckbox();
		tasks.setTaskText("Dies ist deine erste Aufgabe");
		tasks.executeFileUpload("example_jpg.jpg");
		tasks.setVisibilityStartDate("today", "0000");
		tasks.setVisibilityDueDate("tomorrow", "1000");
		tasks.clickOnDraftCheckbox();
		tasks.clickOnSubmit();
	}
);

Given(
	"task {string} in course {string} is not submitted by the student",
	(taskName, courseName) => {
		courses.navigateToCoursesOverview();
		courses.navigateToCoursePage(courseName);
		courses.seeTaskOnCoursePage(taskName);
		courses.compareNotSubmittedTasksInformation(taskName);
	}
);

Given(
	"task {string} in course {string} is submitted by the student",
	(taskName, courseName) => {
		courses.navigateToCoursesOverview();
		courses.navigateToCoursePage(courseName);
		courses.seeTaskOnCoursePage(taskName);
		courses.openTask(taskName);
		tasks.clickSubmissionTab();
		tasks.setSubmissionText("Meine erste aufgabe erledigt");
		tasks.executeFileUploadForSubmission("testboard_jpg.jpg");
		tasks.seeFileInSubmissionSectionUploadedFiles("testboard_jpg.jpg");
		tasks.clickSendSubmissionBtn();
		tasks.seeSubmissionReceivedHint();
		tasks.navigateToTasksOverview();
		tasks.seeTaskNotInListAsStudent(taskName);
		tasks.clickOnTabDoneTasks();
		tasks.openNotGradedTasks();
		tasks.seeTaskInListAsStudent(taskName);
	}
);

Given("a course named {string} exists", (courseName) => {
	courses.navigateToCoursesOverview();
	courses.clickOnCreateCourseFAB();
	courses.fillCourseCreationForm(courseName);
	courses.selectCourseColour();
	courses.clickOnNextStepsBtnAfterEnteringCourseDetails();
	courses.clickOnNextStepButtonOnCourseParticipationDetail();
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
	board.selectCardElementFromMenu("file-folder");
	roomBoards.enterFolderNameInBoardCard(folderTitle);
	roomBoards.clickOutsideToSaveCard();
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

Given("team with name {string} is deleted", (teamName) => {
	teams.navigateToTeamsOverview();
	teams.selectTeam(teamName);
	teams.clickOnTeamSettings();
	teams.clickOnDeleteOption();
	teams.confirmDeleteOnDialogBox();
	teams.doNotSeeTeam(teamName);
});

Given("team with name {string} is created", (teamName) => {
	teams.navigateToTeamsOverview();
	teams.clickOnAddTeam();
	teams.enterTeamName(teamName);
	teams.clickOnAddButtonToCreateTeam();
});

Given("team {string} is created with student {string}", (teamName, studentName) => {
	teams.navigateToTeamsOverview();
	teams.clickOnAddTeam();
	teams.enterTeamName(teamName);
	teams.clickOnAddButtonToCreateTeam();
	teams.clickOnThreeDotToManageTeam();
	teams.clickOnManageTeamMembersEditOption();
	teams.clickOnAddInternalAttendees();
	teams.selectInternalTeamMember(studentName);
	teams.clickOnAddingNewTeamMemberButtonOnModal();
});

Given("task with name {string} in course {string} is deleted", (taskName, courseName) => {
	courses.navigateToCoursesOverview();
	courses.navigateToCoursePage(courseName);
	courses.openThreeDotMenuForContent(taskName);
	courses.clickDeleteInDotMenu();
	courses.clickDeleteInConfirmationWindow();
});

Given(
	"task with task name {string} is created in course {string}",
	(taskName, courseName) => {
		courses.navigateToCoursesOverview();
		courses.navigateToCoursePage(courseName);
		courses.clickOnCreateContentFAB();
		courses.clickOnNewTaskFAB();
		tasks.enterTaskTitle(taskName);
		tasks.setTaskText("task text for Mathe course");
		tasks.clickOnSubmit();
		courses.navigateToCoursesOverview();
		courses.navigateToCoursePage(courseName);
	}
);

Given(
	"text topic with name {string} is created in course {string}",
	(topicTitle, courseName) => {
		courses.navigateToCoursesOverview();
		courses.navigateToCoursePage(courseName);
		courses.clickOnCreateContentFAB();
		courses.clickOnNewTopicFAB();
		topics.enterTopicTitle(topicTitle);
		topics.clickOnAddTextToTopic();
		topics.enterTitleForElementText("element Text", "0");
		topics.enterDescriptionforElementText("element text description", "0");
		topics.clickOnSubmitChangesInTopicBtn();
		topics.clickOnSubmitChangesInTopicBtn();
	}
);

Given("the topic is published in course {string}", (courseName) => {
	courses.navigateToCoursesOverview();
	courses.navigateToCoursePage(courseName);
	courses.clickPublishLinkForFirstTopic();
});

Given(
	"student {string} is added to the course {string}",
	(studentLastname, courseName) => {
		cy.wait(100);
		management.openAdministrationInMenu();
		courseManagement.clickOnCourseInAdministrationSubMenu();
		courseManagement.clickEditButtonOfCourse(courseName);
		courses.addStudentWithSearchStringToCourse(studentLastname);
		courses.submitChangesAfterEditingCourse();
	}
);

Given(
	"a course {string} contains a {string} board and {string} board title to {string} with card {string}",
	(courseName, boardType, kebabMenuAction, boardTitle, cardTitle) => {
		courses.navigateToCoursesOverview();
		courses.navigateToCoursePage(courseName);
		courses.seeCoursePage(courseName);
		courses.clickOnCreateContentFAB();
		board.clickOnFABToCreateNewColumnBoard();
		board.seeColumnBoardDialogBox();
		if (boardType.toLowerCase() === "multi-column") {
			board.clickOnMultiColumnBoardOptionInDialogBox();
		} else if (boardType.toLowerCase() === "single-column") {
			board.clickOnSingleColumnBoardOptionInDialogBox();
		} else {
			throw new Error(`Unknown board type: ${boardType}`);
		}
		board.seeNewCourseBoardCreatePage();
		board.clickOnThreeDotMenuInCourseBoardTitle();
		board.clickOnKebabMenuAction(kebabMenuAction);
		board.enterCourseBoardTitle(boardTitle);
		board.clickOutsideTheColumnToSaveTheColumn();
		board.seeCourseBoardName(boardTitle);
		board.clickOnAddNewColumnButton();
		board.clickOutsideTheColumnToSaveTheColumn();
		board.clickPlusIconToAddCardInColumn();
		board.enterBoardCardTitle(cardTitle);
		board.clickOutsideTheColumnToSaveTheColumn();
		board.seeBoardCardTitle(cardTitle);
	}
);

Given(
	"the file with filename {string} and caption {string} is added to the room board",
	(fileName, captionText) => {
		roomBoards.clickOnThreeDotInCard();
		roomBoards.clickEditOptionInCardThreeDot();
		board.clickPlusIconToAddContentIntoCard();
		board.selectCardElementFromMenu("file");
		roomBoards.uploadFileInCard(fileName);
		roomBoards.enterCaption(captionText);
		roomBoards.clickOutsideToSaveCard();
	}
);

Given(
	"participant with participant name {string} is added to the room {string}",
	(participantName, roomName) => {
		rooms.navigateToRoomsOverview();
		rooms.navigateToRoom(roomName);
		rooms.openThreeDotMenuForRoom();
		board.clickOnKebabMenuAction("room-members");
		rooms.clickOnAddParticipantsFAB();
		rooms.selectRoomRoleFromDropdownMenu("Lernbegleitend");
		rooms.fillParticipantFormName(participantName);
		rooms.selectParticipantName();
		rooms.addParticipant();
	}
);

Given(
	"{string} added in the room named {string} with role {string} and default read permission",
	(participantName, roomName, role) => {
		rooms.navigateToRoomsOverview();
		rooms.navigateToRoom(roomName);
		rooms.openThreeDotMenuForRoom();
		board.clickOnKebabMenuAction("room-members");
		rooms.seeRoomEditParticipantsPage();
		rooms.clickOnAddParticipantsFAB();
		rooms.seeModalForAddParticipants();
		rooms.selectRoomRoleFromDropdownMenu(role);
		rooms.seeRoleOfParticipant(role);
		rooms.fillParticipantFormName(participantName);
		rooms.selectParticipantName();
		rooms.addParticipant();
		rooms.seeParticipantInList(participantName);
		rooms.seeDefaultReadPermissionOfTheUser(participantName);
	}
);

Given(
	"{string} added in the room named {string} with role {string} and {string} to {string} permission",
	(participantName, roomName, role, action, permission) => {
		rooms.navigateToRoomsOverview();
		rooms.navigateToRoom(roomName);
		rooms.openThreeDotMenuForRoom();
		board.clickOnKebabMenuAction("room-members");
		rooms.seeRoomEditParticipantsPage();
		rooms.clickOnAddParticipantsFAB();
		rooms.seeModalForAddParticipants();
		rooms.selectRoomRoleFromDropdownMenu(role);
		rooms.seeRoleOfParticipant(role);
		rooms.fillParticipantFormName(participantName);
		rooms.selectParticipantName();
		rooms.addParticipant();
		rooms.seeParticipantInList(participantName);
		rooms.clickOnThreeDotMenuToEditUser(participantName);
		// use permission variable inside method adapt "-" included.
		rooms.clickOnButtonActionMenuInSubMenu(action);
		rooms.changeRoleOfTheUser(permission);
		rooms.confirmChangeRoleModalActions("Confirm", "Role");
	}
);

Given(
	"participant {string} is having room role permission {string}",
	(participantName, permission) => {
		rooms.clickOnThreeDotMenuToEditUser(participantName);
		rooms.clickOnButtonActionMenuInSubMenu("Change-Permission");
		rooms.changeRoleOfTheUser(permission);
		rooms.confirmChangeRoleModalActions("Confirm", "Role");
	}
);

Given("the card file is deleted from room {string}", (roomName) => {
	rooms.navigateToRoomsOverview();
	rooms.navigateToRoom(roomName);
	roomBoards.clickMultiColumnBoardInRoomDetailPage();
	roomBoards.clickOnThreeDotInCard();
	roomBoards.clickDeleteOptionInThreeDotMenu();
	roomBoards.clickDeleteButtonInConfirmationDialog();
	roomBoards.shouldNotSeeFileElement();
});
