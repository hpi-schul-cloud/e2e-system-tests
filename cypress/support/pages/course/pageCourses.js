"use strict";

class Courses {
	static #courseTitle = '[data-testid="coursename"]';
	static #nextButton = '[id="nextSection"]';
	static #goToCourseOverviewButton = '[data-testid="courses-to-overview-btn"]';
	static #createAnotherCourseButton = '[data-testid="courses-add-another-course-btn"]';
	static #deleteButton = '[data-method="DELETE"]';
	static #confirmDeletionPopup = '[data-testid="modal_delete_course_button"]';
	static #btnSubmit = '[data-testid="modal-edit-course-button"]';
	static #courseDescription = '[id="courseDescription"]';
	static #courseName = '[data-testid="coursename"]';
	static #createFAB = '[name="fab-icon"]';
	static #newTopicFAB = '[data-testid="fab_button_add_lesson"]';
	static #searchFieldCourseOverview = '[data-testid="search-field-course"]';
	static #createCourse = '[data-testid="add-course-button"]';
	static #createSyncedCourse = '[data-testid="fab_button_add_synced_course"]';
	static #createContent = '[data-testid="add-content-button"]';
	static #ltiToolsTab = '[data-testid="tools"]';
	static #toolsList = '[data-testid="course_tool_list_add_tool"]';
	static #courseOverviewNavigationButton = '[data-testid="Course-Overview"]';
	static #newTaskFAB = '[data-testid="fab_button_add_task"]';
	static #dialogConfirmButton = '[data-testid="dialog-confirm"]';
	static #dialogCancelButton = '[data-testid="dialog-cancel"]';
	static #deleteButtonInDotMenu = '[data-testid="room-task-card-menu-remove-0"]';
	static #deleteButtonInDotMenuOfTopic =
		'[data-testid="lesson-card-menu-action-remove-0"]';
	static #editButtonInDotMenu = '[data-testid="room-task-card-menu-edit-0"]';
	static #editButtonInDotMenuOfTopic = '[data-testid="lesson-card-menu-action-edit-0"]';
	static #backToDraftButtonInDotMenuOfTopic = '[data-testid="lesson-card-menu-action-revert-0"]';
	static #taskCardTitleInCoursePageWithIndex = '[data-testid="task-title-0"]';
	static #boardCardTitleInCoursePageWithIndex = '[data-testid="board-title-0"]';
	static #taskCardThreeDotMenuInCoursePageWithIndex =
		'[data-testid="task-card-menu-0"]';
	static #taskCardInCoursePageWithIndex = '[data-testid="room-task-card-0"]';
	static #topicCardPublishBtn = '[data-testid="lesson-card-action-publish-0"]'
	static #dropDownCourse = '[data-testid="room-menu"]';
	static #btnCourseEdit = '[data-testid="room-menu-edit-delete"]';
	static #pageTitle = '[id="page-title"]';
	static #contentCardTaskInfoSubmissionsChipWithIndex =
		'[data-testid="room-task-card-chip-submitted-0"]';
	static #contentCardTaskInfoGradingsChipWithIndex =
		'[data-testid="room-task-card-chip-graded-0"]';
	static #addSubstituteTeacher = '[id="substituteTeacher_chosen"]';
	static #chosenChoices = ".chosen-choices";
	static #chosenResults = ".chosen-results li";
	static #chosenContainer = ".chosen-container span";
	static #courseSearchBox = '[data-testid="search-field"]';
	static #courseColourAsRed = '[aria-label="#D50000"]';
	static #selectTeacher = '[data-testid="teachersearch"]';
	static #selectSubstituteTeacher = '[data-testid="substituent"]';
	static #selectClass = '[data-testid="classes"]';
	static #selectStudent = '[data-testid="pupils"]';
	static #chosenCourseTeacher = '[id="courseTeacher_chosen"]';
	static #chosenSubstituteTeacher = '[id="courseSubstitute_chosen"]';
	static #courseStartDatePicker = '[data-testid="date_start"]';
	static #courseEndDatePicker = '[data-testid="date_until"]';
	static #courseTimeTableContainer = '[data-timesref="#timesContainer"]';
	static #addClassToCourseSelectionBox = '[id="addClassesToCourse_chosen"]';
	static #addStudentToCourseSelectionBox = '[id="addStudentsToCourse_chosen"]';
	static #nextButtonToCreateCourseOnParticipationDetailStep = '[id="nextSection"]';
	static #sectionThreeAreaOnCourseCreationPage = '[data-testid="section-3-area"]';
	static #sectionOneAreaOnCourseCreationPage = '[data-testid="section-1-area"]';
	static #sectionTwoAreaOnCourseCreationPage = '[data-testid="section-2-area"]';
	static #courseDeleteConfirmationModal = '[data-testid="popup-title"]';
	static #courseTitleInCourseoverview = '[data-testid="course-title"]';
	static #learningContentTab = '[data-testid="learnContent-tab"]';
	static #courseDetailPageTitle = '[data-testid="courses-course-title"]';
	static #toolsTab = '[data-testid="tools-tab"]';
	static #addToolButton = '[data-testid="add-tool-button"]';
	static #toolConfigurationSelect = '[data-testid="configuration-select"]';
	static #contextExternalToolConfiguratorPageTitle =
		'[data-testid="context-external-tool-configurator-title"]';
	static #groupSelection = '[id="classId_chosen"]';
	static #chosenStudents = '[id="studentsId_chosen"] > .chosen-choices';
	static #errorDialog = '[data-testId="error-dialog"]';
	static #outdatedDialogTitle = '[data-testid="dialog-title"]';
	static #toolConfigurationSelectItem = '[data-testId="configuration-select-item"]';
	static #courseExternalToolSection = '[data-testid="room-external-tool-section"]';
	static #saveToolButton = '[data-testid="save-button"]';
	static #threeDotMenuOnTool = '[data-testid="room-tool-three-dot-button"]';
	static #DeleteButtonInDotMenuOfTool = '[data-testid="tool-delete"]';
	static #btnCopyCourse = '[data-testid="room-menu-copy"]';
	static #courseGroupTab = '[data-testid="groups-tab"]';
	static #addNewCourseGroupButton = '[data-testid="add-course-group"]';
	static #copyResultNotification = '[data-testid="copy-result-notifications"]';
	static #dialogTitle = '[data-testid="dialog-title"]';
	static #warningTitle = '[data-testid="warning-title"]';
	static #dialogClose = '[data-testid="dialog-close"]';
	static #toolEditBtn = '[data-testid="tool-edit"]';
	static #toolDeleteBtn = '[data-testid="tool-delete"]';
	static #protectedParameter = '[data-testid="protected"]';
	static #saveBtn = '[data-testid="save-button"]';
	static #incompleteChip = '[data-testid="tool-card-status"]';
	static #deactivatedChip = '[data-testid="tool-card-status-deactivated"]';
	static #incompleteOperationalChip =
		'[data-testid="tool-card-status-incompleteOperational"]';
	static #toolCardThreeDotBtn = '[data-testid="room-tool-three-dot-button"]';
	static #chooseStudentSelectionBox = '[id="studentsId_chosen"]';
	static #groupNameField = '[data-testid="group-name-field"]';
	static #groupMemberField = '[data-testid="group-member-field"]';
	static #createStudentGroupButton = '[data-testid="create-course-group"]';
	static #studentGroupNameOnStudentGroupPage = '[data-testid="group-name-entry"]';
	static #editGroupButton = '[data-testid="edit-group"]';
	static #deleteCourseGroupButton = '[data-testid="delete-course-group"]';
	static #deleteCourseGroupConfirmationButton = '[data-testid="delete-course-group-btn"]';
	static #videoConferenceCheckBoxCourse = '[data-testid="videoconf_checkbox"]';
	static #toolsTabInCourseDetail = '[data-testid="tools-tab"]';
	static #bbbToolIconInToolsTabCourse = '[data-testid="vc-card-logo"]';
	static #bbbVideoStartDialogBoxCourse =
		'[data-testid="videoconference-config-dialog-title"]';
	static #bbbDialogBoxCancelButtonCourse = '[data-testid="dialog-cancel"]';
	static #bbbDisabledCheckBoxCourse = '[data-testid="videoconf_checkbox"]';
	static #addBBBButton = '[data-testid="submit-btn-add-bbb-tool-modal"]';
	static #fabButtonToAddOrImportCourse = '[data-testid="add-course-button"]';
	static #topicTitleOnCoursePageWithIndex = '[data-testid="lesson-name-0"]';
	static #taskCardFinishButtonInCoursePageWithIndex =
		'[data-testid="task-card-action-done-0"]';
	static #topicCardThreeDotInCoursePageWithIndex = '[data-testid="lesson-card-menu-0"]';
	static #topicCardInCoursePageWithIndex = '[data-testid="room-lesson-card-0"]';
	static #syncedGroupDialogTitle = '[data-testid="dialog-title"]';
	static #syncedGroupDialogInfoText = '[data-testid="group-dialog-info-text"]';
	static #syncedConfirmDialogInfoText = '[data-testid="group-dialog-info-text"]';
	static #syncedGroupDialogWarningText = '[data-testid="no-teacher-warning"]';
	static #syncedConfirmDialogWarningText = '[data-testid="no-teacher-warning"]';
	static #syncedGroupDialogSelection = '[data-testid="group-selection"]';
	static #syncedGroupDialogNextButton = '[data-testid="dialog-next"]';
	static #syncedConfirmDialogConfirmButton = '[data-testid="dialog-confirm"]';
	static #syncedGroupDialogCloseButton = '[data-testid="dialog-close"]';
	static #btnEndSync = '[data-testid="title-menu-end-sync"]';
	static #btnStartSync = '[data-testid="title-menu-start-sync"]';
	static #btnConfirmEndSync = '[data-testid="dialog-confirm"]';
	static #endSyncDialogTitle = '[data-testid="dialog-title"]';
	static #SyncConfirmDialogTitle = '[data-testid="dialog-title"]';
	static #endSyncDialogInfoText = '[data-testid="end-course-sync-dialog-info-text"]';
	static #syncedCourseChip = '[data-testid="synced-course-chip"]';
	static #subMenuFabButtonToAddNewCourse = '[data-testid="fab_button_add_course"]';
	static #studentSelectionBoxInCourseCreate = '[data-testid="pupils"]';
	static #teacherFieldContainer = '[data-testid="teachers_container"]';
	static #studentFieldContainer = '[data-testid="students_container"]';
	static #teacherSelectionBoxInCourseCreate = '[data-testid="teachersearch"]';
	static #toolDisplayNameInputField = '[data-testid="parameter-display-name"]';
	static #delteToolDialog = '[data-testid="delete-dialog"]';
	static #delteDialogTitle = '[data-testid="dialog-title"]';
	static #delteDialogContent = '[data-testid="delete-dialog-content"]';
	static #confirmDeleteDialogButton = '[data-testid="dialog-confirm"]';
	static #btnShareCourse = '[data-testid="room-menu-share"]';

	selectTeacherFromTeacherField(userName) {
		cy.get(Courses.#teacherFieldContainer).click();
		cy.get(Courses.#chosenResults).contains(userName).click();
	}

	selectStudentFromStudentField(userName) {
		cy.get(Courses.#studentFieldContainer).click();
		cy.get(Courses.#chosenResults).contains(userName).click();
	}

	selectTeacherInCourseCreatePage(teacherName) {
		cy.get(Courses.#teacherSelectionBoxInCourseCreate).invoke("show");
		cy.get(Courses.#teacherSelectionBoxInCourseCreate)
			.should("be.visible")
			.select(teacherName);
	}

	seeFinalStepPageOnCourseCreate() {
		cy.get(Courses.#sectionThreeAreaOnCourseCreationPage).should("be.visible");
	}

	selectStudentInCourseCreatePage(studentName) {
		cy.get(Courses.#studentSelectionBoxInCourseCreate).invoke("show");
		cy.get(Courses.#studentSelectionBoxInCourseCreate)
			.should("be.visible")
			.select(studentName);
	}

	seeStudentSelectionBoxInCourseCreatePage() {
		cy.get(Courses.#studentSelectionBoxInCourseCreate)
			.invoke("show")
			.should("be.visible");
	}

	clickOnButtonAdd() {
		cy.get(Courses.#addBBBButton).click();
	}

	topicIsNotVisibleOnCoursePage(topicTitle) {
		cy.contains(topicTitle).should("not.exist");
	}

	topicIsVisibleOnCoursePage(topicTitle) {
		cy.get(Courses.#topicTitleOnCoursePageWithIndex).contains(topicTitle);
	}

	clickOnFABToAddOrImportCourse() {
		cy.get(Courses.#fabButtonToAddOrImportCourse).click();
	}

	seeDisabledCheckBoxForBBBToolInCourseEditPage() {
		cy.get(Courses.#bbbDisabledCheckBoxCourse).should("be.disabled");
	}

	uncheckVideoConferenceCheckBoxInCourseEditPage() {
		cy.get(Courses.#videoConferenceCheckBoxCourse).uncheck();
	}

	doNotSeeBBBInCourseToolTab() {
		cy.get(Courses.#bbbToolIconInToolsTabCourse).should("not.exist");
	}

	clickOnCancelBBBToolDialogBoxInCourse() {
		cy.get(Courses.#bbbDialogBoxCancelButtonCourse).click();
	}

	seeBBBDialogBoxToStartTheConferenceInCourse() {
		cy.get(Courses.#bbbVideoStartDialogBoxCourse).should("exist");
	}

	clickOnBBBInCourseToolTab() {
		cy.get(Courses.#bbbToolIconInToolsTabCourse).click();
	}

	seeBBBInCourseToolTab() {
		cy.get(Courses.#bbbToolIconInToolsTabCourse).should("exist");
	}

	clickOnToolsTabInCourse() {
		cy.get(Courses.#toolsTabInCourseDetail).click();
	}

	clickOnEnableVideoConferenceCheckBoxInCourseEditPage() {
		cy.get(Courses.#videoConferenceCheckBoxCourse).check();
	}

	seeSectionOneAreaOnCourseCreatePage() {
		cy.get(Courses.#sectionOneAreaOnCourseCreationPage).should("exist");
	}

	seeSectionTwoAreaOnCourseCreatePage() {
		cy.get(Courses.#sectionTwoAreaOnCourseCreationPage).should("exist");
	}

	seeSelectedDefaultTeacher(defaultTeacherName) {
		cy.get(Courses.#chosenCourseTeacher).contains(defaultTeacherName);
	}

	seeTeacherSelectionBox() {
		cy.get(Courses.#chosenCourseTeacher).should("exist");
	}

	seeSubstituteTeacherSelectionBox() {
		cy.get(Courses.#chosenSubstituteTeacher).should("exist");
	}

	seeDatePickersForCourseInSchoolYear() {
		cy.get(Courses.#courseStartDatePicker).should("exist");
		cy.get(Courses.#courseEndDatePicker).should("exist");
	}

	seeCreateCourseTimeTableContainer() {
		cy.get(Courses.#courseTimeTableContainer).should("exist");
	}

	seeSelectionBoxToSelectClass() {
		cy.get(Courses.#addClassToCourseSelectionBox).should("exist");
	}

	seeSelectionInBoxToSelectStudent() {
		cy.get(Courses.#addStudentToCourseSelectionBox).should("exist");
	}

	clickOnNextStepButtonOnCourseParticipationDetail() {
		cy.get(Courses.#nextButtonToCreateCourseOnParticipationDetailStep).click();
		cy.wait(500);
	}

	seeCourseCreationFinishPageSectionThree() {
		cy.get(Courses.#sectionThreeAreaOnCourseCreationPage).should("exist");
	}

	selectCourseColour() {
		cy.get(Courses.#courseColourAsRed).click();
	}

	seeCourseSearchBoxOnCourseOverview() {
		cy.get(Courses.#courseSearchBox).should("be.exist");
	}

	courseIsVisiblOnOverviewPage(courseName) {
		cy.contains(courseName).should("be.visible").and("contain.text", courseName);
	}

	courseIsNotVisiblOnOverviewPage(courseName) {
		cy.contains(courseName).should("not.exist");
	}

	navigateToCoursesOverview() {
		cy.get(Courses.#courseOverviewNavigationButton).click();
	}

	navigateToCoursePage(courseName) {
		cy.contains(Courses.#courseTitleInCourseoverview, courseName)
			.should("be.visible")
			.then((title) => {
				cy.wrap(title)
					.prev()
					.click()
					.then(() => {
						return new Cypress.Promise((resolve, reject) => {
							try {
								setTimeout(() => {
									cy.get(Courses.#learningContentTab).should(
										"have.attr",
										"aria-selected",
										"true"
									);
									resolve();
									return;
								}, 1000);
							} catch (error) {
								reject(error);
							}
						});
					});
			});
	}

	navigateToLtiTools() {
		cy.get(Courses.#ltiToolsTab).click();
	}

	navigateToToolsTab() {
		cy.get(Courses.#toolsTab).click();
	}

	navigateToGroupsTab() {
		cy.get(Courses.#courseGroupTab).click();
	}

	seeAddNewCourseGroupButton() {
		cy.get(Courses.#addNewCourseGroupButton).should("exist");
	}

	clickOnAddGroup() {
		cy.get(Courses.#addNewCourseGroupButton).click();
	}

	seeAddNewCourseGroupPage() {
		cy.get(Courses.#groupNameField).should("exist");
		cy.get(Courses.#groupMemberField).should("exist");
	}

	typeNameOfTheCourseGroup(groupName) {
		cy.get(Courses.#groupNameField).type(groupName);
	}

	deleteTextFromGroupNameField() {
		cy.get(Courses.#groupNameField).clear();
	}

	selectGroupMember(groupMember) {
		cy.get(Courses.#chosenChoices).click();
		cy.get(Courses.#chosenResults).contains(groupMember).click();
	}

	clickOnCreateStudentGroupButton() {
		cy.get(Courses.#createStudentGroupButton).click();
	}

	seeCreatedStudentGroup(groupName) {
		cy.get(Courses.#studentGroupNameOnStudentGroupPage)
			.contains(groupName)
			.should("be.visible");
	}

	clickOnStudentGroup(groupName) {
		cy.get(Courses.#studentGroupNameOnStudentGroupPage).contains(groupName).click();
	}

	clickOnEditGroupButton() {
		cy.get(Courses.#editGroupButton).click();
	}

	clickOnDeleteCourseGroupButton() {
		cy.get(Courses.#deleteCourseGroupButton).click();
	}

	clickOnDeleteCourseGroupConfirmationButton() {
		cy.get(Courses.#deleteCourseGroupConfirmationButton).click();
	}

	courseGroupNotExists(groupName) {
		cy.contains(groupName).should("not.exist");
	}

	clickOnAddNewToolFAB() {
		cy.get(Courses.#addToolButton)
			.invoke('css', 'transform', 'translateY(5px)') // remove this invoke after the bug is fixed - Ticket:
			.click();
	}

	seeAddNewToolFAB() {
		cy.get(Courses.#addToolButton).should("exist");
	}

	seeNotAddNewToolFAB() {
		cy.get(Courses.#addToolButton).should("not.exist");
	}

	seeContextExternalToolConfiguratorPageTitle() {
		cy.get(Courses.#contextExternalToolConfiguratorPageTitle).should("exist");
	}

	clickOnToolConfigurationSelect() {
		cy.get(Courses.#toolConfigurationSelect).click();
	}

	courseIsVisibleOnOverviewPage(courseName) {
		cy.contains(courseName).should("be.visible").and("contain.text", courseName);
	}

	courseIsNotVisibleOnOverviewPage(courseName) {
		cy.contains(courseName).should("not.exist");
	}

	canAddBigBlueButton() {
		cy.get(Courses.#toolsList).should("be.visible");
	}

	canNotAddBigBlueButton() {
		cy.get(Courses.#toolsList).should("not.exist");
	}

	clickOnCreateCourseFAB() {
		cy.get(Courses.#createCourse).first().click();
		cy.get("body").then((body) => {
			if (body.find(Courses.#subMenuFabButtonToAddNewCourse).length) {
				cy.get(Courses.#subMenuFabButtonToAddNewCourse).click();
			} else {
				cy.log("No sub menu found in create course FAB");
			}
		});
	}

	clickOnCreateSyncedCourseFAB() {
		cy.get(Courses.#createSyncedCourse).click();
	}

	clickOnCreateContentFAB() {
		cy.get(Courses.#createContent).click();
	}

	clickOnNewTaskFAB() {
		cy.get(Courses.#newTaskFAB).click();
	}

	seeTaskOnCoursePage(taskTitle) {
		// no cy.wait('@rooms_api') here as the reload takes care of this
		cy.reload(); // Reload is necessary because after deletion of a content element a message window with its title stays hidden in the DOM
		cy.get(Courses.#taskCardTitleInCoursePageWithIndex)
			.contains(taskTitle)
			.should("be.visible");
	}

	seeBoardOnCoursePage(boardTitle) {
		// no cy.wait('@rooms_api') here as the reload takes care of this
		cy.reload(); // Reload is necessary because after deletion of a content element a message window with its title stays hidden in the DOM
		cy.get(Courses.#boardCardTitleInCoursePageWithIndex)
			.contains(boardTitle)
			.should("be.visible");
	}

	contentIsNotVisibleOnCoursePage(contentTitle) {
		cy.reload(); // Reload is necessary because after deletion of a content element a message window with its title stays hidden in the DOM
		cy.contains(contentTitle).should("not.exist");
	}

	openTask(taskTitle) {
		// cy.wait('@rooms_api') dont needed as on vue page already where scenario is given
		cy.get(Courses.#taskCardTitleInCoursePageWithIndex).contains(taskTitle);
		cy.get(Courses.#taskCardInCoursePageWithIndex).click();
	}

	openThreeDotMenuForContent(contentTitle) {
		cy.get(Courses.#taskCardTitleInCoursePageWithIndex).contains(contentTitle);
		cy.get(Courses.#taskCardThreeDotMenuInCoursePageWithIndex).click();
	}

	openThreeDotMenuForTopic(contentTitle) {
		cy.get(Courses.#topicTitleOnCoursePageWithIndex).contains(contentTitle);
		cy.get(Courses.#topicCardThreeDotInCoursePageWithIndex).click();
	}

	openTopic(contentTitle) {
		cy.get(Courses.#topicTitleOnCoursePageWithIndex).contains(contentTitle);
		cy.get(Courses.#topicCardInCoursePageWithIndex).click();
	}

	clickDeleteInDotMenu() {
		cy.get(Courses.#deleteButtonInDotMenu).click();
	}

	clickDeleteInDotMenuOfTopic() {
		cy.get(Courses.#deleteButtonInDotMenuOfTopic).click();
	}

	clickEditInDotMenu() {
		cy.get(Courses.#editButtonInDotMenu).invoke("show").click();
	}

	clickEditInDotMenuOfTopic() {
		cy.get(Courses.#editButtonInDotMenuOfTopic).click();
	}

	clickBackToDraftInDotMenuOfTopic() {
		cy.get(Courses.#backToDraftButtonInDotMenuOfTopic).click();
	}

	clickOnCancelInConfirmationWindow() {
		cy.get(Courses.#dialogCancelButton).click();
	}

	clickDeleteInConfirmationWindow() {
		cy.get(Courses.#dialogConfirmButton).click();
	}

	openCourseEditPage() {
		cy.get(Courses.#dropDownCourse).first().click();
		cy.get(Courses.#btnCourseEdit).click();
	}

	showCourseEditPage() {
		cy.get(Courses.#pageTitle).should("exist");
	}

	isCorrectCourseEditPage(courseName) {
		cy.get(Courses.#courseTitle).should("have.value", courseName);
	}

	clickPublishLinkForFirstTopic() {
		cy.get(Courses.#topicCardPublishBtn).click();
	}

	compareSubmittedTasksInformation(submittedTasks, contentTitle) {
		cy.get(Courses.#taskCardTitleInCoursePageWithIndex).contains(contentTitle);
		cy.get(Courses.#contentCardTaskInfoSubmissionsChipWithIndex).should(
			"contain",
			submittedTasks
		);
	}

	compareGradedTasksInformation(gradedTasks, contentTitle) {
		cy.get(Courses.#taskCardTitleInCoursePageWithIndex)
			.contains(contentTitle)
			.get(Courses.#contentCardTaskInfoGradingsChipWithIndex)
			.should("contain", gradedTasks);
	}

	clickOnFinishTask(taskTitle) {
		cy.get(Courses.#taskCardTitleInCoursePageWithIndex).contains(taskTitle);
		cy.get(Courses.#taskCardFinishButtonInCoursePageWithIndex).click();
	}

	checkTaskCardDoesNotHaveButtons(taskTitle) {
		cy.get(Courses.#taskCardTitleInCoursePageWithIndex).contains(taskTitle);
		cy.get(Courses.#taskCardFinishButtonInCoursePageWithIndex).should("not.exist");
		cy.get(Courses.#contentCardTaskInfoGradingsChipWithIndex).should("not.exist");
	}

	checkTaskCardDoesHaveButtons(taskTitle) {
		cy.get(Courses.#taskCardTitleInCoursePageWithIndex).contains(taskTitle);
		cy.get(Courses.#taskCardInCoursePageWithIndex)
			.find("button")
			.should("be.visible");
	}

	fillCourseCreationForm(new_course) {
		cy.get(Courses.#courseTitle).type(new_course);
	}

	clickOnCreateFAB() {
		cy.get(Courses.#createFAB).click();
	}

	fillCourseCreationForm(newCourseName) {
		cy.get(Courses.#courseTitle).type(newCourseName);
	}

	clickOnToCourseOverviewBtn() {
		cy.get(Courses.#goToCourseOverviewButton).click();
	}

	clickOnNextStepsBtnAfterEnteringCourseDetails() {
		cy.get(Courses.#nextButton).click();
	}

	clickOnDeleteButtonOnCourseEditPage() {
		cy.get(Courses.#deleteButton).click();
	}

	seeModalToConfirmCourseDeletion() {
		cy.get(Courses.#courseDeleteConfirmationModal).should("exist");
	}

	confirmCourseDeletionOnModal() {
		cy.get(Courses.#confirmDeletionPopup).click({ multiple: true, force: true });
	}

	submitChangesAfterEditingCourse() {
		cy.get(Courses.#btnSubmit).click();
	}

	editCourseTitle(editedCourseName) {
		cy.get(Courses.#courseName).clear().type(editedCourseName);
	}

	editCourseDescription(editedCourseDescription) {
		cy.get(Courses.#courseDescription).clear().type(editedCourseDescription);
	}

	searchForACourse(courseName) {
		cy.get(Courses.#searchFieldCourseOverview).type(
			"{selectall}{backspace}{selectall}{backspace}"
		);
		cy.get(Courses.#searchFieldCourseOverview).type(courseName);
	}

	clickOnNewTopicFAB() {
		cy.get(Courses.#newTopicFAB).click();
	}

	clearSubstituteTeacherField() {
		cy.get(Courses.#addSubstituteTeacher).click().type("{selectall}{backspace}");
	}

	addSubstituteTeacher(userFullName) {
		cy.get(Courses.#chosenResults).contains(userFullName).click();
		cy.get(Courses.#chosenContainer).should("contain", userFullName);
	}

	deleteAllCoursesMatchingName(courseName) {
		cy.get("h1")
			.eq(0)
			.then(($title) => {
				const htmlTitlePage = $title.text();
				if (htmlTitlePage.includes("Kurse")) {
					this.deleteCoursesByName("Kurs", courseName);
				} else if (htmlTitlePage.includes("courses")) {
					this.deleteCoursesByName("Course", courseName);
				} else if (htmlTitlePage.includes("Cursos")) {
					this.deleteCoursesByName("Curso", courseName);
				} else if (htmlTitlePage.includes("Поточні")) {
					this.deleteCoursesByName("Курс", courseName);
				}
			});
	}

	deleteCoursesByName(courseLabel, courseName) {
		cy.get(`[class="rooms-container"]`).then(($coursesContainer) => {
			if (
				$coursesContainer.find(`[aria-label="${courseLabel} ${courseName}"]`).length
			) {
				cy.get(`[aria-label="${courseLabel} ${courseName}"]`).then(($courses) => {
					if ($courses) {
						cy.wrap($courses).first().click();
						this.openCourseEditPage();
						cy.get(Courses.#deleteButton).should("exist").click();
						cy.get(Courses.#confirmDeletionPopup).click({
							multiple: true,
							force: true,
						});

						if ($courses.length > 1) {
							this.deleteAllCoursesMatchingName(courseName);
						}
					}
				});
			}
		});
	}

	checkIfGroupIsVisible(groupName) {
		cy.get(Courses.#groupSelection)
			.find(".chosen-choices")
			.contains(groupName)
			.should("be.visible");
	}

	checkIfGroupIsNotVisible(groupName) {
		cy.get(Courses.#groupSelection)
			.find(".chosen-choices")
			.contains(groupName)
			.should("not.exist");
	}

	checkIfStudentIsVisible(studentName) {
		cy.get(Courses.#chosenStudents)
			.find(".search-choice")
			.children("span")
			.should("contain", studentName);
	}

	checkIfStudentIsNotVisible(studentName) {
		cy.get(Courses.#chosenStudents).should("not.contain", studentName);
	}

	addGroup(groupName) {
		cy.get(Courses.#groupSelection).find(".chosen-choices").click();
		cy.get(Courses.#groupSelection)
			.find(".chosen-results")
			.contains(groupName)
			.click();
	}

	removeGroup(groupName) {
		cy.get(Courses.#groupSelection)
			.find(".chosen-choices")
			.contains(groupName)
			.siblings("a")
			.click();
	}

	checkIfToolIsVisibleInToolTable(toolName) {
		cy.get(Courses.#courseExternalToolSection).contains(toolName).should("exist");
	}

	checkIfToolIsNotVisibleInToolTable(toolName) {
		cy.get(Courses.#courseExternalToolSection).contains(toolName).should("not.exist");
	}

	seeToolIsNotMarkedDeactivated(toolName) {
		const toolData = cy
			.get(Courses.#courseExternalToolSection)
			.find("div")
			.contains(toolName);

		toolData
			.parent("div")
			.siblings("div")
			.find('[data-testid="tool-card-status-deactivated"]')
			.should("not.exist");
	}

	seeToolIsMarkedDeactivated(toolName) {
		const toolData = cy
			.get(Courses.#courseExternalToolSection)
			.find("div")
			.contains(toolName);

		toolData
			.parent("div")
			.siblings("div")
			.find("span")
			.contains("Tool deaktiviert")
			.should("be.visible");
	}

	clickThreeDotMenuOnTool(toolName) {
		cy.get(Courses.#courseExternalToolSection).contains(toolName);
		const toolData = cy
			.get(Courses.#courseExternalToolSection)
			.find("div")
			.contains(toolName);

		toolData.parent("div").find(Courses.#threeDotMenuOnTool).click().should("exist");
	}

	clickOnDeleteButton(toolName) {
		const toolData = cy
			.get(Courses.#courseExternalToolSection)
			.find("div")
			.contains(toolName);

		toolData
			.parent("div")
			.find(Courses.#DeleteButtonInDotMenuOfTool)
			.should("be.visible")
			.click({ force: true });
	}

	checkConfirmButtonOnDeletionDialog() {
		cy.get(Courses.#dialogConfirmButton).should("be.visible").click();
	}

	seeToolInToolOverview(toolName) {
		cy.get(Courses.#courseExternalToolSection).contains(toolName).should("exist");
	}

	clickOnTool(toolName) {
		cy.get(Courses.#courseExternalToolSection).contains(toolName).click();
	}

	clickOnToolAndReturn(toolName) {
		cy.on("window:before:load", (win) => {});

		cy.intercept("GET", "https://google.com", (req) => {
			// catch the page as it loads
			req.continue((res) => {
				res.body = res.body.replaceAll(
					"window.location.replace",
					"window.__location.replace"
				);
			});
		}).as("index");
		cy.get(Courses.#courseExternalToolSection)
			.contains(toolName)
			.click()
			.should("contain", "Peter Pan");
		cy.wait("@index");
	}

	clickOnSaveTool() {
		cy.get(Courses.#saveToolButton).click();
	}

	checkIfToolIsNotVisibleInSelection(toolName) {
		!cy.get(Courses.#toolConfigurationSelect).should("not.contain", toolName);
	}

	checkIfOutdatedDialogIsOpen(toolName) {
		cy.get(Courses.#outdatedDialogTitle).should("exist");
		cy.get(Courses.#outdatedDialogTitle).should("contain", toolName);
		cy.get(Courses.#errorDialog).should("exist");
		cy.get(Courses.#outdatedDialogTitle)
			.siblings("div")
			.eq(0)
			.find("p")
			.invoke("text")
			.should("have.length.gt", 0);
	}

	clickCopyCourseButton() {
		cy.get(Courses.#dropDownCourse).parent().click();
		cy.get(Courses.#btnCopyCourse).click();
	}

	seeCopyResultNotification() {
		cy.get(Courses.#copyResultNotification).should("exist");
		cy.get(Courses.#dialogTitle).siblings("div").should("have.length", "3");
		cy.get(Courses.#dialogTitle).should("exist");
		cy.get(Courses.#warningTitle).should("have.length", "2");
		cy.get(Courses.#dialogTitle)
			.next()
			.find("p")
			.invoke("text")
			.should("have.length.gt", 0);
	}

	clickOnDialogClose() {
		cy.get(Courses.#dialogClose).click();
	}

	seeCoursePage(courseName) {
		cy.get(Courses.#courseDetailPageTitle).should("contain.text", courseName);
	}

	seeNumberOfTools(count) {
		cy.get(Courses.#courseExternalToolSection).children().should("have.length", count);
	}

	seeToolIsMarkedAsDeactivated(toolName) {
		const toolCard = cy
			.get(Courses.#courseExternalToolSection)
			.find("div")
			.contains(toolName);
		toolCard
			.parent("div")
			.siblings("div")
			.find(Courses.#deactivatedChip)
			.should("exist");
	}

	seeToolIsNotMarkedAsDeactivated(toolName) {
		const toolCard = cy
			.get(Courses.#courseExternalToolSection)
			.find("div")
			.contains(toolName);
		toolCard
			.parent("div")
			.siblings("div")
			.find(Courses.#deactivatedChip)
			.should("not.exist");
	}

	seeToolIsMarkedAsIncomplete(toolName) {
		const toolCard = cy
			.get(Courses.#courseExternalToolSection)
			.find("div")
			.contains(toolName);
		toolCard
			.parent("div")
			.siblings("div")
			.find(Courses.#incompleteChip)
			.should("exist");
	}

	seeToolIsNotMarkedAsIncomplete(toolName) {
		const toolCard = cy
			.get(Courses.#courseExternalToolSection)
			.find("div")
			.contains(toolName);
		toolCard
			.parent("div")
			.siblings("div")
			.find(Courses.#incompleteChip)
			.should("not.exist");
	}

	seeToolIsMarkedAsIncompleteOperational(toolName) {
		const toolCard = cy
			.get(Courses.#courseExternalToolSection)
			.find("div")
			.contains(toolName);
		toolCard
			.parent("div")
			.siblings("div")
			.find(Courses.#incompleteOperationalChip)
			.should("exist");
	}

	seeToolIsNotMarkedAsIncompleteOperational(toolName) {
		const toolCard = cy
			.get(Courses.#courseExternalToolSection)
			.find("div")
			.contains(toolName);
		toolCard
			.parent("div")
			.siblings("div")
			.find(Courses.#incompleteOperationalChip)
			.should("not.exist");
	}

	checkIfErrorDialogIsOpen() {
		cy.get(Courses.#dialogTitle).should("exist");
		cy.get(Courses.#errorDialog).should("exist");
		cy.get(Courses.#dialogTitle).siblings("div").should("have.length", "3");
		cy.get(Courses.#dialogTitle)
			.next()
			.find("p")
			.invoke("text")
			.should("have.length.gt", 0);
	}

	clickThreeDotMenuOnTool(toolName) {
		const toolCard = cy
			.get(Courses.#courseExternalToolSection)
			.find("div")
			.contains(toolName);
		toolCard.parent("div").find(Courses.#toolCardThreeDotBtn).click();
	}

	clickOnToolEditButton(toolName) {
		cy.get(Courses.#toolEditBtn).click();
	}

	clickOnToolDeleteButton(toolName) {
		cy.get(Courses.#toolDeleteBtn).click();
	}

	confirmDeleteToolDialog() {
		cy.get(Courses.#confirmDeleteDialogButton).click();
	}

	seeDeleteDialog() {
		cy.get(Courses.#delteToolDialog).should("be.visible");
		cy.get(Courses.#delteDialogTitle).should("be.visible");
		cy.get(Courses.#delteDialogContent).should("be.visible");
		cy.get(Courses.#confirmDeleteDialogButton).should("be.visible");
	}

	schoolExternalToolIsNotVisibleInToolSelection(toolName) {
		cy.get(Courses.#toolConfigurationSelect).click();
		cy.get(Courses.#toolConfigurationSelectItem)
			.contains(toolName)
			.should("not.exist");
	}

	editMissingToolParameterValue() {
		cy.get(Courses.#protectedParameter).click();
		cy.get("div").contains("Nein").click();
	}

	editProtectedCustomParameter(value) {
		cy.get(Courses.#protectedParameter).click();
		cy.get("div").contains(value).click();
	}

	fillInCustomParameter(paramName, value) {
		cy.get(`[data-testid="${paramName}"]`).find("input").clear().type(value);
	}

	fillInDisplayName(toolName) {
		cy.get(Courses.#toolDisplayNameInputField).find("input").clear().type(toolName);
	}

	clickOnConfirmButton() {
		cy.get(Courses.#saveBtn).click();
	}

	clickOnEditCourse() {
		cy.get(Courses.#dropDownCourse).parent().click();
		cy.get(Courses.#btnCourseEdit).click();
	}

	addStudentWithSearchStringToCourse(searchString) {
		cy.get(Courses.#chooseStudentSelectionBox)
			.click()
			.type(searchString)
			.type("{enter}");
		cy.get(Courses.#chooseStudentSelectionBox).contains("Amelia").should("exist");
		cy.get(Courses.#btnSubmit).click();
	}

	seeTitleInSyncedGroupDialog() {
		cy.get(Courses.#endSyncDialogTitle).should("be.visible");
	}

	seeTitleInSynchronizationConfirmationDialog() {
		cy.get(Courses.#SyncConfirmDialogTitle).should("be.visible");
	}

	seeTitleInEndSyncDialog() {
		cy.get(Courses.#syncedGroupDialogTitle).should("be.visible");
	}

	seeCreateSyncedCourseFAB() {
		cy.get(Courses.#createSyncedCourse).should("be.visible");
	}

	seeInfoTextInSyncedGroupDialog() {
		cy.get(Courses.#syncedGroupDialogInfoText).should("be.visible");
	}

	seeInfoTextInSynchronizationConfirmationDialog() {
		cy.get(Courses.#syncedConfirmDialogInfoText).should("be.visible");
	}

	seeInfoTextInEndSyncDialog() {
		cy.get(Courses.#endSyncDialogInfoText).should("be.visible");
	}

	seeGroupSelectionInSyncedGroupDialog() {
		cy.get(Courses.#syncedGroupDialogSelection).should("be.visible");
	}

	seeWarningTextInSyncedGroupDialog() {
		cy.get(Courses.#syncedGroupDialogWarningText).should("be.visible");
	}
	seeWarningTextInSynchronizationConfirmationDialog() {
		cy.get(Courses.#syncedConfirmDialogWarningText).should("be.visible");
	}

	seeContinueBtnInSyncedGroupDialogIsDisabled() {
		cy.get(Courses.#syncedGroupDialogNextButton).should("be.disabled");
	}

	seeSelectedGroup(groupName) {
		cy.get("span.v-autocomplete__selection-text").should("have.text", groupName);
	}

	seeCourseTitleFormContains(name) {
		cy.get(Courses.#courseTitle).should("have.value", name);
	}

	seeSelectedTeacher(teacherName) {
		cy.get(Courses.#selectTeacher)
			.contains("option", teacherName)
			.should("be.selected");
	}

	seeSelectedSubstituteTeacher(substituteTeacher) {
		cy.get(Courses.#selectSubstituteTeacher)
			.contains("option", substituteTeacher)
			.should("be.selected");
	}

	seeSelectedStudent(studentName) {
		cy.get(Courses.#selectStudent)
			.contains("option", studentName)
			.should("be.selected");
	}

	seeTeacherSelectionBoxIsDisabled() {
		cy.get(Courses.#selectTeacher).should("be.disabled");
	}

	seeClassSelectionBoxIsDisabled() {
		cy.get(Courses.#selectClass).should("be.disabled");
	}

	seeStudentSelectionBoxIsDisabled() {
		cy.get(Courses.#selectStudent).should("be.disabled");
	}

	seeSubstituteTeacherSelectionBoxIsDisabled() {
		cy.get(Courses.#selectSubstituteTeacher).should("be.disabled");
	}

	seeStartDateAndEndDatePickersAreDisabled() {
		cy.get(Courses.#courseStartDatePicker).should("be.disabled");
		cy.get(Courses.#courseEndDatePicker).should("be.disabled");
	}

	seeCreateAnotherCourseButtonIsNotVisible() {
		cy.get(Courses.#createAnotherCourseButton).should("not.exist");
	}

	seeEndSyncButton() {
		cy.get(Courses.#btnEndSync).should("be.visible");
	}

	seeStartSyncButton() {
		cy.get(Courses.#btnStartSync).should("be.visible");
	}

	clickThreeDotMenuInCourse() {
		cy.get(Courses.#dropDownCourse).parent().click();
	}

	seeSyncedCourseChip() {
		cy.get(Courses.#syncedCourseChip).should("be.visible");
	}

	seeSyncedCourseChipIsNotVisible() {
		cy.get(Courses.#syncedCourseChip).should("not.exist");
	}

	seeCourseStartDate(startDate) {
		cy.get(Courses.#courseStartDatePicker).should("have.value", startDate);
	}

	seeCourseEndDate(endDate) {
		cy.get(Courses.#courseEndDatePicker).should("have.value", endDate);
	}

	clickContinueButtonOnSyncedGroupDialog() {
		cy.get(Courses.#syncedGroupDialogNextButton).click();
	}

	clickConfirmButtonOnSynchronizationConfirmationDialog() {
		cy.get(Courses.#syncedConfirmDialogConfirmButton).click();
	}

	clickCloseButtonOnSyncedGroupDialog() {
		cy.get(Courses.#syncedGroupDialogCloseButton).click();
	}

	clickEndSyncButton() {
		cy.get(Courses.#btnEndSync).click();
	}

	clickStartSyncButton() {
		cy.get(Courses.#btnStartSync).click();
	}

	clickConfirmButtonOnEndSyncDialog() {
		cy.get(Courses.#btnConfirmEndSync).click();
	}

	selectGroupInSyncedGroupSelection(groupName) {
		cy.get(Courses.#syncedGroupDialogSelection)
			.click()
			.type(groupName)
			.type("{downArrow}{enter}");
	}

	clickCancelButton() {
		cy.get(".btn-cancel").click();
	}

	clickSaveChangesButton() {
		cy.get(".btn-primary").eq(0).should("not.be.disabled").click();
	}

	launchTool(toolName, toolURL) {
		const launchedTool =  { toolName: toolName, isLaunched: false };

		cy.window().then((win) => {
			cy.stub(win, "open").as("openStub").callsFake((url) => {
				expect(url).to.contain(toolURL);
				launchedTool.isLaunched = true;
			});
		});

		cy.wrap(launchedTool).as("launchedTool");

		cy.get(Courses.#courseExternalToolSection)
            .contains(toolName)
            .click();

		cy.get("@openStub").invoke("restore")
	}

	toolWasLaunched(toolName){
		cy.get("@launchedTool").then((launchedTool) => {
			expect(launchedTool.toolName).to.equal(toolName);
			expect(launchedTool.isLaunched).to.be.true;
		});

		cy.wrap({ toolName: "", isLaunched: false }).as("launchedTool");
	}

	clickShareCourseButton() {
		cy.get(Courses.#dropDownCourse).parent().click();
		cy.get(Courses.#btnShareCourse).click();
	}
}
export default Courses;
