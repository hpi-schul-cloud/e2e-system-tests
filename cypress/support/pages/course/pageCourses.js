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
	static #courseName = '[name="name"]';
	static #createFAB = '[name="fab-icon"]';
	static #newTopicFAB = '[data-testid="fab_button_add_lesson"]';
	static #searchFieldRoomOverview = '[data-testid="search-field"]';
	static #mainContent = '[id="main-content"]';
	static #createCourse = '[data-testid="fab_button_add_course"]';
	static #createSyncedCourse = '[data-testid="fab_button_add_synced_course"]';
	static #createContent = '[data-testid="add-content-button"]';
	static #ltiToolsTab = '[data-testid="tools"]';
	static #toolsList = '[data-testid="course_tool_list_add_tool"]';
	static #courseOverviewNavigationButton = '[data-testid="Course-Overview"]';
	static #addNewToolButton = '[data-testid="add_new_tool"]';
	static #newTaskFAB = '[data-testid="fab_button_add_task"]';
	static #dialogConfirmButton = '[data-testid="dialog-confirm"]';
	static #dialogCancelButton = '[data-testid="dialog-cancel"]';
	static #deleteButtonInDotMenu = '[data-testid="room-task-card-menu-remove-0"]';
	static #deleteButtonInDotMenuOfTopic =
		'[data-testid="lesson-card-menu-action-remove-0"]';
	static #editButtonInDotMenu = '[data-testid="room-task-card-menu-edit-0"]';
	static #editButtonInDotMenuOfTopic = '[data-testid="lesson-card-menu-action-edit-0"]';
	static #taskCardTitleInCoursePageWithIndex = '[data-testid="task-title-0"]';
	static #taskCardThreeDotMenuInCoursePageWithIndex = '[data-testid="task-card-menu-0"]';
	static #taskCardInCoursePageWithIndex = '[data-testid="room-task-card-0"]';
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
	static #roomSearrchBox = '[data-testid="search-field"]';
	static #selectRoomColour = '[data-testid="color-picker"]';
	static #RoomColourAsRed = '[aria-label="#D50000"]';
	static #selectTeacher = '[data-testid="teachersearch"]';
	static #selectSubstituteTeacher = '[data-testid="substituent"]';
	static #selectClass = '[data-testid="classes"]';
	static #selectStudent = '[data-testid="pupils"]';
	static #chosenCourseTeacher = '[id="courseTeacher_chosen"]';
	static #chosenSubstituteTeacher = '[id="courseSubstitute_chosen"]';
	static #courseStartDatePicker = '[data-testid="date_start"]';
	// rename to courseEndDatePicker
	static #pickCourseEndDatePicker = '[data-testid="date_until"]';
	// check usage. check if it works
	static #courseEndDatePicker = '[data-testid="form-date-input-untilDate"]';
	static #courseTimeTableContainer = '[data-timesref="#timesContainer"]';
	static #addClassToCourseSelectionBox = '[id="addClassesToCourse_chosen"]';
	static #addStudentToCourseSelectionBox = '[id="addStudentsToCourse_chosen"]';
	static #nextButtonToCreateCourseOnParticipationDeatilStep = '[id="nextSection"]';
	static #sectionThreeAreaOnCourseCreationPage = '[data-testid="section-3-area"]';
	static #sectionOneAreaOnCourseCreationPage = '[data-testid="section-1-area"]';
	static #sectionTwoAreaOnCourseCreationPage = '[data-testid="section-2-area"]';
	static #courseDeleteConfirmationModal = '[data-testid="popup-title"]';
	static #courseTitleInRoomoverview = '[data-testid="course-title"]';
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
	static #roomExternalToolSection = '[data-testid="room-external-tool-section"]';
	static #saveToolButton = '[data-testid="save-button"]';
	static #requiredParameterInputField = '[data-testid="contextparammm"]';
	static #threeDotMenuOnTool = '[data-testid="room-tool-three-dot-button"]';
	static #DeleteButtonInDotMenuOfTool = '[data-testid="tool-delete"]';
	static #btnCopyCourse = '[data-testid="title-menu-copy"]';
	static #courseGroupTab = '[data-testid="groups-tab"]';
	static #addNewCourseGroupButton = '[data-testid="add-course-group"]';
	static #copyResultNotification = '[data-testid="copy-result-notifications"]';
	static #dialogTitle = '[data-testid="dialog-title"]';
	static #warningTitle = '[data-testid="warning-title"]';
	static #dialogClose = '[data-testid="dialog-close"]';
	static #toolCardMenu = '[data-testid="tool-card-menu"]';
	static #toolEditBtn = '[data-testid="tool-edit"]';
	static #protectedParameter = '[data-testid="protected"]';
	static #saveBtn = '[data-testid="save-button"]';
	static #incompleteChip = '[data-testid="tool-card-status-incomplete"]';
	static #toolCardThreeDotBtn = '[data-testid="room-tool-three-dot-button"]';
	static #chooseStudentSelectionBox = '[id="studentsId_chosen"]';
	static #groupNameField = '[data-testid="group-name-field"]';
	static #groupMemberField = '[data-testid="group-member-field"]';
	static #createStudentGroupButton = '[data-testid="create-course-group"]';
	static #studentGroupNameOnStudentGroupPage = '[data-testid="group-name-entry"]';
	static #editGroupButton = '[data-testid="edit-group"]';
	static #deleteCourseGroupButton = '[data-testid="delete-course-group"]';
	static #deleteCourseGroupConfirmationButton = '[data-testid="delete-course-group-btn"]';
	static #videoConferenceCheckBoxNBC = '[data-testid="videoconf_checkbox"]';
	static #toolsTabInCourseDetail = '[data-testid="tools-tab"]';
	static #bbbToolIconInToolsTabNBC = '[data-testid="vc-card-logo"]';
	static #bbbVideoStartDialogBoxNBC =
		'[data-testid="videoconference-config-dialog-title"]';
	static #bbbDialogBoxCancelButtonNBC = '[data-testid="dialog-cancel"]';
	static #bbbDisabledCheckBoxNBC = '[data-testid="videoconf_checkbox"]';
	static #fabButtonToAddOrImportCourse = '[data-testid="add-course-button"]';
	static #topicTitleOnCoursePageWithIndex = '[data-testid="lesson-name-0"]';
	static #taskCardFinishButtonInCoursePageWithIndex =
		'[data-testid="task-card-action-done-0"]';
	static #topicCardThreeDotInCoursePageWithIndex = '[data-testid="lesson-card-menu-0"]';
	static #topicCardInCoursePageWithIndex = '[data-testid="room-lesson-card-0"]';

	static #syncedGroupDialogTitle = '[data-testid="dialog-title"]';
	static #syncedGroupDialogInfoText = '[data-testid="group-dialog-info-text"]';
	static #syncedGroupDialogWarningText = '[data-testid="no-teacher-warning"]';
	static #syncedGroupDialogSelection = '[data-testid="group-selection"]';
	static #syncedGroupDialogNextButton = '[data-testid="dialog-next"]';
	static #syncedGroupDialogCloseButton = '[data-testid="dialog-close"]';
	static #btnEndSync = '[data-testid="title-menu-end-sync"]';
	static #btnConfirmEndSync = '[data-testid="dialog-confirm"]';
	static #endSyncDialogTitle = '[data-testid="dialog-title"]';
	static #endSyncDialogWarningText = '[data-testid="end-course-sync-dialog-warning-text"]';
	static #endSyncDialogInfoText = '[data-testid="end-course-sync-dialog-info-text"]';
	static #syncedCourseChip = '[data-testid="synced-course-chip"]';

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
		cy.get(Courses.#bbbDisabledCheckBoxNBC).should("be.disabled");
	}

	uncheckVideoConferenceCheckBoxInCourseEditPage() {
		cy.get(Courses.#videoConferenceCheckBoxNBC).uncheck();
	}

	doNotSeeBBBInToolTabNBC() {
		cy.get(Courses.#bbbToolIconInToolsTabNBC).should("not.exist");
	}

	cancelBBBToolDialogBoxNBC() {
		cy.get(Courses.#bbbDialogBoxCancelButtonNBC).click();
	}

	seeBBBDialogBoxToStartTheConferenceInNBC() {
		cy.get(Courses.#bbbVideoStartDialogBoxNBC).should("exist");
	}

	clickOnBBBInToolTabInNBC() {
		cy.get(Courses.#bbbToolIconInToolsTabNBC).click();
	}

	seeBBBInToolTabNBC() {
		cy.get(Courses.#bbbToolIconInToolsTabNBC).should("exist");
	}

	clickOnToolsTabInCourse() {
		cy.get(Courses.#toolsTabInCourseDetail).click();
	}

	clickOnEnableVideoConferenceCheckBoxInCourseEditPage() {
		cy.get(Courses.#videoConferenceCheckBoxNBC).check();
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

	seeSelectioinBoxToSelectStudent() {
		cy.get(Courses.#addStudentToCourseSelectionBox).should("exist");
	}

	clickOnNextStepButtonOnCourseParticipationDetail() {
		cy.get(Courses.#nextButtonToCreateCourseOnParticipationDeatilStep).click();
	}

	seeCourseCreationFinishPageSectionThree() {
		cy.get(Courses.#sectionThreeAreaOnCourseCreationPage).should("exist");
	}

	selectRoomColour() {
		cy.get(Courses.#RoomColourAsRed).click();
	}

	seeRoomSearchBoxOnRoomOverview() {
		cy.get(Courses.#roomSearrchBox).should("be.exist");
	}

	courseIsVisiblOnOverviewPage(courseName) {
		cy.contains(courseName).should("be.visible").and("contain.text", courseName);
	}

	courseIsNotVisiblOnOverviewPage(courseName) {
		cy.contains(courseName).should("not.exist");
	}

	navigateToRoomsOverview() {
		cy.get(Courses.#courseOverviewNavigationButton).click();
	}

	navigateToRoomBoard(roomName) {
		cy.contains(Courses.#courseTitleInRoomoverview, roomName)
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

	showRoomPage(courseName) {
		cy.get(Courses.#courseDetailPageTitle).should("contain.text", courseName);
	}

	navigateToLtiTools() {
		cy.get(Courses.#ltiToolsTab).click();
	}

	clickOnAddNewLtiToolButton() {
		cy.get(Courses.#addNewToolButton).click();
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
		cy.get(Courses.#addToolButton).click();
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

	enterAnToolNameInToolConfigurationSelect(toolName) {
		cy.get(Courses.#toolConfigurationSelect).type(toolName);
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

	clickOnCreateRoomFAB() {
		cy.get(Courses.#createCourse).click();
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

	contentIsVisibleOnCoursePage(taskTitle) {
		// no cy.wait('@rooms_api') here as the reload takes care of this
		cy.reload(); // Reload is necessary because after deletion of a content element a message window with its title stays hidden in the DOM
		cy.get(Courses.#taskCardTitleInCoursePageWithIndex)
			.contains(taskTitle)
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
		cy.get(Courses.#editButtonInDotMenu).click();
	}

	clickEditInDotMenuOfTopic() {
		cy.get(Courses.#editButtonInDotMenuOfTopic).click();
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
		cy.get(Courses.#taskCardInCoursePageWithIndex).find("button").should("be.visible");
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

	clickOnNextStepsBtnAfterEnteringRoomDetails() {
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

	editCourseTitle(editedRoomName) {
		cy.get(Courses.#courseName).clear().type(editedRoomName);
	}

	editCourseDescription(editedRoomDesccription) {
		cy.get(Courses.#courseDescription).clear().type(editedRoomDesccription);
	}

	searchForARoom(roomName) {
		cy.get(Courses.#searchFieldRoomOverview).type(roomName);
	}

	clickOnNewTopicFAB() {
		cy.get(Courses.#newTopicFAB).click();
	}

	clearSubstituteTeacherField() {
		cy.get(Courses.#addSubstituteTeacher).click().type("{selectall}{backspace}");
	}

	addSubstituteTeacher(username) {
		let userFirstName;
		let userLastName;
		switch (username) {
			case "teacher1":
				userFirstName = Cypress.env("TEACHER_1_BRB_FIRST_NAME");
				userLastName = Cypress.env("TEACHER_1_BRB_LAST_NAME");
				break;
			case "teacher2":
				userFirstName = Cypress.env("TEACHER_2_BRB_FIRST_NAME");
				userLastName = Cypress.env("TEACHER_2_BRB_LAST_NAME");
				break;
		}
		let userFullName = userLastName + ", " + userFirstName;
		cy.get(Courses.#chosenResults).contains(userFullName).click();
		cy.get(Courses.#chosenContainer).should("contain", userFullName);
	}

	deleteAllCoursesMatchingName(roomName) {
		cy.get("h1")
			.eq(0)
			.then(($title) => {
				const htmlTitlePage = $title.text();
				if (htmlTitlePage.includes("Kurse")) {
					this.deleteCoursesByName("Kurs", roomName);
				} else if (htmlTitlePage.includes("courses")) {
					this.deleteCoursesByName("Course", roomName);
				} else if (htmlTitlePage.includes("Cursos")) {
					this.deleteCoursesByName("Curso", roomName);
				} else if (htmlTitlePage.includes("Поточні")) {
					this.deleteCoursesByName("Курс", roomName);
				}
			});
	}

	deleteCoursesByName(courseLabel, roomName) {
		cy.get(`[class="rooms-container"]`).then(($roomsContainer) => {
			if ($roomsContainer.find(`[aria-label="${courseLabel} ${roomName}"]`).length) {
				cy.get(`[aria-label="${courseLabel} ${roomName}"]`).then(($rooms) => {
					if ($rooms) {
						cy.wrap($rooms).first().click();
						this.openCourseEditPage();
						cy.get(Courses.#deleteButton).should("exist").click();
						cy.get(Courses.#confirmDeletionPopup).click({
							multiple: true,
							force: true,
						});

						if ($rooms.length > 1) {
							this.deleteAllCoursesMatchingName(roomName);
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
		cy.get(Courses.#groupSelection).find(".chosen-results").contains(groupName).click();
	}

	removeGroup(groupName) {
		cy.get(Courses.#groupSelection)
			.find(".chosen-choices")
			.contains(groupName)
			.siblings("a")
			.click();
	}

	checkIfToolIsVisibleInToolTable(toolName) {
		cy.get(Courses.#roomExternalToolSection).contains(toolName).should("exist");
	}

	checkIfToolIsNotVisibleInToolTable(toolName) {
		cy.get(Courses.#roomExternalToolSection).contains(toolName).should("not.exist");
	}

	seeToolIsNotMarkedDeactivated(toolName) {
		const toolData = cy
			.get(Courses.#roomExternalToolSection)
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
			.get(Courses.#roomExternalToolSection)
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
		cy.get(Courses.#roomExternalToolSection).contains(toolName);
		const toolData = cy
			.get(Courses.#roomExternalToolSection)
			.find("div")
			.contains(toolName);

		toolData.parent("div").find(Courses.#threeDotMenuOnTool).click().should("exist");
	}

	clickOnDeleteButton(toolName) {
		const toolData = cy
			.get(Courses.#roomExternalToolSection)
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
		cy.get(Courses.#roomExternalToolSection).contains(toolName).should("exist");
	}

	clickOnTool(toolName) {
		cy.get(Courses.#roomExternalToolSection).contains(toolName).click();
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
		cy.get(Courses.#roomExternalToolSection)
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
		cy.get(Courses.#outdatedDialogTitle).siblings("div").should("have.length", "2");
		cy.get(Courses.#outdatedDialogTitle)
			.siblings("div")
			.eq(0)
			.find("p")
			.invoke("text")
			.should("have.length.gt", 0);
	}

	checkIfToolIsVisible(toolName) {
		cy.get(Courses.#toolConfigurationSelectItem).should("not.contain", toolName);
	}

	checkIfToolIsVisibleInSelection(toolName) {
		cy.get(Courses.#toolConfigurationSelectItem).contains(toolName);
	}

	selectTool(toolName) {
		cy.get(Courses.#toolConfigurationSelectItem).contains(toolName).click();
	}

	fillOutContextParameter() {
		cy.get(Courses.#requiredParameterInputField).type("parameter");
	}

	clickCopyCourseButton() {
		cy.get(Courses.#dropDownCourse).parent().click();
		cy.get(Courses.#btnCopyCourse).click();
	}

	seeCopyResultNotification() {
		cy.get(Courses.#copyResultNotification).should("exist");
		cy.get(Courses.#warningTitle).should("have.length", "2");
		cy.get(Courses.#dialogTitle).siblings("div").should("have.length", "2");
		cy.get(Courses.#dialogTitle)
			.siblings("div")
			.eq(0)
			.find("p")
			.invoke("text")
			.should("have.length.gt", 0);
	}

	clickOnDialogClose() {
		cy.get(Courses.#dialogClose).click();
	}

	seeRoomPage(courseName) {
		cy.get(Courses.#courseDetailPageTitle).should("contain.text", courseName);
	}

	seeNumberOfTools() {
		cy.get(Courses.#roomExternalToolSection).children().should("have.length", "3");
	}

	seeToolIsMarkedAsIncomplete(toolName) {
		const toolCard = cy
			.get(Courses.#roomExternalToolSection)
			.find("div")
			.contains(toolName);
		toolCard.parent("div").siblings("div").find(Courses.#incompleteChip).should("exist");
	}

	seeToolIsNotMarkedAsIncomplete(toolName) {
		const toolCard = cy
			.get(Courses.#roomExternalToolSection)
			.find("div")
			.contains(toolName);
		toolCard
			.parent("div")
			.siblings("div")
			.find(Courses.#incompleteChip)
			.should("not.exist");
	}

	checkIfErrorDialogIsOpen() {
		cy.get(Courses.#dialogTitle).should("exist");
		cy.get(Courses.#errorDialog).should("exist");
		cy.get(Courses.#dialogTitle).siblings("div").should("have.length", "2");
		cy.get(Courses.#dialogTitle)
			.siblings("div")
			.eq(0)
			.find("p")
			.invoke("text")
			.should("have.length.gt", 0);
	}

	clickThreeDotMenuOnTool(toolName) {
		const toolCard = cy
			.get(Courses.#roomExternalToolSection)
			.find("div")
			.contains(toolName);
		toolCard.parent("div").find(Courses.#toolCardThreeDotBtn).click();
	}

	clickOnToolEditButton(toolName) {
		cy.get(Courses.#toolEditBtn).click();
	}

	editMissingToolParameterValue() {
		cy.get(Courses.#protectedParameter).click();
		cy.get("div").contains("Nein").click();
	}

	clickOnConfirmButton() {
		cy.get(Courses.#saveBtn).click();
	}

	clickOnEditCourse() {
		cy.get(Courses.#dropDownCourse).parent().click();
		cy.get(Courses.#btnCourseEdit).click();
	}

	addStudentWithSearchStringToCourse(searchString) {
		cy.get(Courses.#chooseStudentSelectionBox).click().type(searchString).type("{enter}");
		cy.get(Courses.#chooseStudentSelectionBox).contains("Amelia").should("exist");
		cy.get(Courses.#btnSubmit).click();
	}

	seeTitleInSyncedGroupDialog() {
		cy.get(Courses.#endSyncDialogTitle).should("be.visible");
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

	seeWarningTextInEndSyncDialog() {
		cy.get(Courses.#endSyncDialogWarningText).should("be.visible");
	}

	seeInfoTextInEndSyncDialog() {
		cy.get(Courses.#endSyncDialogInfoText).should("be.visible");
	}

	seeGroupSelectionInSyncedGroupDialog() {
		cy.get(Courses.#syncedGroupDialogInfoText).should("be.visible");
	}

	seeWarningTextInSyncedGroupDialog() {
		cy.get(Courses.#syncedGroupDialogWarningText).should("be.visible");
	}

	seeContinueBtnInSyncedGroupDialogIsDisabled() {
		cy.get(Courses.#syncedGroupDialogNextButton).should("be.disabled");
	}

	seeSelectedGroup(groupName) {
		cy.get('span.v-autocomplete__selection-text').should("have.text",groupName);
	}

	seeCourseTitleFormContains(name) {
		cy.get(Courses.#courseTitle).should("have.value",name);
	}

	seeSelectedTeacher(teacherName) {
		cy.get(Courses.#selectTeacher).contains("option", teacherName)
	}

	seeSelectedStudent(studentName) {
		cy.get(Courses.#selectStudent).contains("option", studentName)
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
		cy.get(Courses.#pickCourseEndDatePicker).should("be.disabled");
	}

	seeCreateAnotherCourseButtonIsNotVisible() {
		cy.get(Courses.#createAnotherCourseButton).should("not.exist");
	}

	seeEndSyncButton() {
		cy.get(Courses.#dropDownCourse).parent().click();
		cy.get(Courses.#btnEndSync).should("be.visible");
	}

	seeSyncedCourseChip() {
		cy.get(Courses.#syncedCourseChip).should("be.visible");
	}

	seeSyncedCourseChipIsNotVisible() {
		cy.get(Courses.#syncedCourseChip).should("not.exist");
	}

	seeCourseStartDate(startDate) {
		cy.get(Courses.#courseStartDatePicker).should("have.value",startDate);
	}

	seeCourseEndDate(endDate) {
		cy.get(Courses.#pickCourseEndDatePicker).should("have.value",endDate);
	}

	clickOnSyncedGroupSelection() {
		cy.get(Courses.#syncedGroupDialogSelection).click();
	}

	clickContinueButtonOnSyncedGroupDialog() {
		cy.get(Courses.#syncedGroupDialogNextButton).click();
	}

	clickCloseButtonOnSyncedGroupDialog() {
		cy.get(Courses.#syncedGroupDialogCloseButton).click();
	}

	clickEndSyncButton() {
		cy.get(Courses.#btnEndSync).click();
	}

	clickConfirmButtonOnEndSyncDialog() {
		cy.get(Courses.#btnConfirmEndSync).click();
	}

	selectGroupInSyncedGroupSelection(groupName) {
		cy.get(Courses.#syncedGroupDialogSelection).type(groupName).type('{downArrow}{enter}')
	}

}
export default Courses;
