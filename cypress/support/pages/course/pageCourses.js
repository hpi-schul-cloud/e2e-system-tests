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
	static #courseOverviewNavigationButton = '[data-testid="sidebar-courses"]';
	static #newTaskFAB = '[data-testid="fab_button_add_task"]';
	static #dialogConfirmButton = '[data-testid="dialog-confirm"]';
	static #dialogCancelButton = '[data-testid="dialog-cancel"]';
	static #deleteButtonInDotMenu = '[data-testid="room-task-card-menu-remove-0"]';
	static #deleteButtonInDotMenuOfTopic =
		'[data-testid="lesson-card-menu-action-remove-0"]';
	static #editButtonInDotMenu = '[data-testid="room-task-card-menu-edit-0"]';
	static #editButtonInDotMenuOfTopic = '[data-testid="lesson-card-menu-action-edit-0"]';
	static #backToDraftButtonInDotMenuOfTopic =
		'[data-testid="lesson-card-menu-action-revert-0"]';
	static #taskCardTitleInCoursePageWithIndex = '[data-testid="task-title-0"]';
	static #boardCardTitleInCoursePageWithIndex = '[data-testid="board-title-0"]';
	static #taskCardThreeDotMenuInCoursePageWithIndex =
		'[data-testid="task-card-menu-0"]';
	static #taskCardInCoursePageWithIndex = '[data-testid="room-task-card-0"]';
	static #topicCardPublishBtn = '[data-testid="lesson-card-action-publish-0"]';
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
	static #classSelection = '[id="classId_chosen"]';
	static #chosenStudents = '[id="studentsId_chosen"] > .chosen-choices';
	static #errorDialog = '[data-testId="error-dialog"]';
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
	static #toolDomain = '[data-testid="tool-card-domain"]';
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
	static #deleteCourseGroupConfirmationButton =
		'[data-testid="delete-course-group-btn"]';
	static #videoConferenceCheckBoxCourse = '[data-testid="videoconf_checkbox"]';
	static #toolsTabInCourseDetail = '[data-testid="tools-tab"]';
	static #bbbToolIconInToolsTabCourse = '[data-testid="vc-card-logo"]';
	static #bbbVideoStartDialogBoxCourse =
		'[data-testid="video-conference-config-dialog-title"]';
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
	static #syncedGroupDialogCloseButton = '[data-testid="dialog-cancel"]';
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
	static #classFieldContainer = '[data-testid="class_container"]';
	static #teacherSelectionBoxInCourseCreate = '[data-testid="teachersearch"]';
	static #delteToolDialog = '[data-testid="delete-dialog"]';
	static #deleteDialogTitle = '[data-testid="dialog-title"]';
	static #deleteDialogContent = '[data-testid="delete-dialog-content"]';
	static #confirmDeleteDialogButton = '[data-testid="dialog-confirm"]';
	static #btnShareCourse = '[data-testid="room-menu-share"]';
	static #messageNoTasksAvailable = '[data-testid="empty-state-title"]';
	static #iconCourse = '[data-testid="course-icon"]';

	selectTeacherFromTeacherField(userName) {
		cy.get(Courses.#teacherFieldContainer).click();
		cy.get(Courses.#chosenResults).contains(userName).click();
	}

	selectStudentFromStudentField(userName) {
		cy.get(Courses.#studentFieldContainer).click();
		cy.get(Courses.#chosenResults).contains(userName).click();
	}

	selectTeacherInCourseCreatePage(teacherName) {
		cy.get(Courses.#teacherFieldContainer).click();
		cy.get(Courses.#chosenResults).contains(teacherName).click();
	}

	seeFinalStepPageOnCourseCreate() {
		cy.get(Courses.#sectionThreeAreaOnCourseCreationPage).should("be.visible");
	}

	selectStudentsInCourseCreatePage(studentNames) {
		// Accepts a single student name, a comma-separated string, or an array
		let students = [];
		if (Array.isArray(studentNames)) {
			students = studentNames;
		} else if (typeof studentNames === 'string') {
			students = studentNames.split(',');
		} else if (studentNames) {
			students = [studentNames];
		}
		cy.get(Courses.#studentSelectionBoxInCourseCreate).invoke("show");
		cy.get(Courses.#studentSelectionBoxInCourseCreate).should("be.visible");
		// Select all students at once
		cy.get(Courses.#studentSelectionBoxInCourseCreate).select(students.map(s => s.trim()));
	}

	selectClassInCourseCreatePage(className) {
		cy.get(Courses.#classFieldContainer).click();
		cy.get(Courses.#chosenResults).contains(className).click();
	}

	selectClassInCourseEditPage(className) {
		cy.get(Courses.#classSelection).click().type(className).type("{enter}");
		cy.get(Courses.#classSelection).contains(className).should("exist");
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
									cy.wait("@userPermissions_api");
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

	deleteElementsWithText(textSelector, courseName, clickSelector) {
		cy.get("body").then(($body) => {
			if ($body.find(Courses.#messageNoTasksAvailable).length) {
				cy.log("No courses available to delete. Test will exit.");
				return;
			} else {
				this.findAndDeleteCourses(textSelector, courseName, clickSelector);
			}
		});
	}

	findAndDeleteCourses(textSelector, courseName, clickSelector) {
		const courseRegex = new RegExp(`^${courseName}.*$`, "i");

		cy.get(textSelector).then(($elements) => {
			const matchingElements = Cypress.$($elements).filter((_, el) =>
				courseRegex.test(Cypress.$(el).text().trim())
			);

			if (matchingElements.length > 0) {
				cy.log(
					`Found ${matchingElements.length} courses matching "${courseName}"`
				);
				this.deleteCourse(textSelector, courseName, clickSelector);
			} else {
				cy.log(`No more courses found with course name "${courseName}".`);
			}
		});
	}

	deleteCourse(textSelector, courseName, clickSelector) {
		cy.get(textSelector)
			.contains(new RegExp(`^${courseName}.*$`, "i"))
			.scrollIntoView()
			.parent("div")
			.within(() => {
				cy.get(clickSelector).should("be.visible").click();
			});

		cy.get(Courses.#dropDownCourse).should("be.visible").click();
		cy.get(Courses.#btnCourseEdit).should("be.visible").click();
		cy.get(Courses.#deleteButton).should("be.visible").click();
		cy.get(Courses.#courseDeleteConfirmationModal).should("exist");
		cy.get(Courses.#confirmDeletionPopup).should("be.visible").click();

		cy.wait(2000);

		cy.get("body").then(($body) => {
			if ($body.text().includes(courseName)) {
				this.deleteElementsWithText(textSelector, courseName, clickSelector);
			} else {
				cy.log(`All courses with name "${courseName}" deleted successfully.`);
			}
		});
	}

	verifyCourseDeletion(courseName) {
		cy.get("body").then(($body) => {
			if (!$body.text().includes(courseName)) {
				cy.log(`All courses with name "${courseName}" deleted successfully.`);
			} else {
				cy.get(Courses.#courseTitleInCourseoverview).should(
					"not.contain.text",
					courseName
				);
			}
		});
	}

	deleteAllCoursesWithName(courseName) {
		cy.wait(2000);
		this.deleteElementsWithText(
			Courses.#courseTitleInCourseoverview,
			courseName,
			Courses.#iconCourse
		);

		this.verifyCourseDeletion(courseName);
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
			.invoke("css", "transform", "translateY(5px)") // remove this invoke after the bug is fixed - Ticket:
			.click();
	}

	seeAddNewToolFAB() {
		cy.get(Courses.#addToolButton).should("be.visible");
	}

	seeNotAddNewToolFAB() {
		cy.get(Courses.#addToolButton).should("not.exist");
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
		// Reload is necessary because after deletion of a content element a message window with its title stays hidden in the DOM
		cy.reload();
		cy.get(Courses.#taskCardTitleInCoursePageWithIndex)
			.contains(taskTitle)
			.should("be.visible");
	}

	seeBoardOnCoursePage(boardTitle) {
		// no cy.wait('@rooms_api') here as the reload takes care of this
		// Reload is necessary because after deletion of a content element a message window with its title stays hidden in the DOM
		cy.reload();
		cy.get(Courses.#boardCardTitleInCoursePageWithIndex)
			.contains(boardTitle)
			.should("be.visible");
	}

	contentIsNotVisibleOnCoursePage(contentTitle) {
		// Reload is necessary because after deletion of a content element a message window with its title stays hidden in the DOM
		cy.reload();
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
				$coursesContainer.find(`[aria-label="${courseLabel} ${courseName}"]`)
					.length
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

	seeClassInClassSelectionBox(className) {
		cy.get(Courses.#classSelection)
			.find(".chosen-choices")
			.contains(className)
			.should("be.visible");
	}

	doNotSeeClassInClassSelectionBox(className) {
		cy.get(Courses.#classSelection)
			.find(".chosen-choices")
			.contains(className)
			.should("not.exist");
	}

	seeStudentInStudentSelectionBox(studentName) {
		cy.get(Courses.#chosenStudents)
			.find(".search-choice")
			.children("span")
			.should("contain", studentName);
	}

	doNotSeeStudentInStudentSelectionBox(studentName) {
		cy.get(Courses.#chosenStudents).should("not.contain", studentName);
	}

	removeClassFromCourse(className) {
		cy.get(Courses.#classSelection)
			.find(".chosen-choices")
			.contains(className)
			.siblings("a")
			.click();
	}

	checkIfToolIsVisibleInToolTable(toolName) {
		cy.get(Courses.#courseExternalToolSection)
			.contains(toolName)
			.scrollIntoView()
			.should("be.visible");
	}

	checkIfToolIsNotVisibleInToolTable(toolName) {
		cy.get(Courses.#courseExternalToolSection).contains(toolName).should("not.exist");
	}

	seeToolDomain(toolName) {
		cy.get(`[data-testid="external-tool-card-${toolName}"]`).within(() => {
			cy.get(Courses.#toolDomain).should("be.visible");
		});
	}

	clickThreeDotMenuOnTool(toolName) {
		cy.get(`[data-testid="external-tool-card-${toolName}"]`).within(() => {
			cy.get(Courses.#threeDotMenuOnTool).should("be.visible").click();
		});
	}

	clickOnDeleteButton(toolName) {
		cy.get(`[data-testid="external-tool-card-${toolName}"]`).within(() => {
			cy.get(Courses.#DeleteButtonInDotMenuOfTool)
				.should("be.visible")
				.click({ force: true });
		});
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

	clickOnSaveTool() {
		cy.get(Courses.#saveToolButton).click();
	}

	clickCopyCourseButton() {
		cy.get(Courses.#dropDownCourse).parent().click();
		cy.get(Courses.#btnCopyCourse).click();
	}

	seeCopyResultNotification() {
		cy.get(Courses.#dialogTitle).should("be.visible");
		cy.get(Courses.#copyResultNotification).should("be.visible");
	}

	clickOnDialogClose() {
		cy.get(Courses.#dialogClose).click();
	}

	seeCoursePage(courseName) {
		cy.get(Courses.#courseDetailPageTitle).should("contain.text", courseName);
	}

	seeNumberOfTools(count) {
		cy.get(Courses.#courseExternalToolSection)
			.children()
			.should("have.length", count);
	}

	seeToolIsMarkedAsDeactivated(toolName) {
		cy.get(`[data-testid="external-tool-card-${toolName}"]`).within(() => {
			cy.get(Courses.#deactivatedChip).should("be.visible");
		});
	}

	seeToolIsNotMarkedAsDeactivated(toolName) {
		cy.get(`[data-testid="external-tool-card-${toolName}"]`).within(() => {
			cy.get(Courses.#deactivatedChip).should("not.exist");
		});
	}

	seeToolIsMarkedAsIncomplete(toolName) {
		cy.get(`[data-testid="external-tool-card-${toolName}"]`).within(() => {
			cy.get(Courses.#incompleteChip).should("be.visible");
		});
	}

	seeToolIsNotMarkedAsIncomplete(toolName) {
		cy.get(`[data-testid="external-tool-card-${toolName}"]`).within(() => {
			cy.get(Courses.#incompleteChip).should("not.exist");
		});
	}

	seeToolIsMarkedAsIncompleteOperational(toolName) {
		cy.get(`[data-testid="external-tool-card-${toolName}"]`).within(() => {
			cy.get(Courses.#incompleteOperationalChip).should("be.visible");
		});
	}

	seeToolIsNotMarkedAsIncompleteOperational(toolName) {
		cy.get(`[data-testid="external-tool-card-${toolName}"]`).within(() => {
			cy.get(Courses.#incompleteOperationalChip).should("not.exist");
		});
	}

	checkIfErrorDialogIsOpen() {
		cy.get(Courses.#dialogTitle).should("be.visible");
		cy.get(Courses.#errorDialog).should("be.visible");
	}

	clickThreeDotMenuOnTool(toolName) {
		const toolCard = cy
			.get(Courses.#courseExternalToolSection)
			.find("div")
			.contains(toolName);
		toolCard.parent("div").find(Courses.#toolCardThreeDotBtn).click();
	}

	clickOnToolEditButton() {
		cy.get(Courses.#toolEditBtn).click();
	}

	clickOnToolDeleteButton() {
		cy.get(Courses.#toolDeleteBtn).click();
	}

	confirmDeleteToolDialog() {
		cy.get(Courses.#confirmDeleteDialogButton).click();
	}

	seeDeleteDialog() {
		cy.get(Courses.#delteToolDialog).should("be.visible");
		cy.get(Courses.#deleteDialogTitle).should("be.visible");
		cy.get(Courses.#deleteDialogContent).should("be.visible");
		cy.get(Courses.#confirmDeleteDialogButton).should("be.visible");
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
		cy.get(Courses.#chooseStudentSelectionBox).contains(searchString).should("exist");
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

	seeSelectedClass(className) {
		cy.get(Courses.#selectClass).contains("option", className).should("be.selected");
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
			.type("{selectall}{backspace}")
			.type(groupName);

		cy.get(".v-overlay__content.v-autocomplete__content").contains(groupName).click();
	}

	clickCancelButton() {
		cy.get(".btn-cancel").click();
	}

	clickSaveChangesButton() {
		cy.get(".btn-primary").eq(0).should("not.be.disabled").click();
	}

	launchTool(toolName, toolURL) {
		const launchedTool = { toolName: toolName, isLaunched: false };
		cy.window().then((win) => {
			cy.stub(win, "open")
				.as("openStub")
				.callsFake((url) => {
					expect(url).to.contain(toolURL);
					return Cypress.Promise.resolve().then(() => {
						launchedTool.isLaunched = true;
						expect(url).to.contain(toolURL);
					});
				});
		});
		cy.wrap(launchedTool).as("launchedTool");
		cy.wait(500);
		cy.get(Courses.#courseExternalToolSection)
			.contains(toolName)
			.click({ force: true })
			.then(() => {
				cy.wait("@courses_api");
				cy.wait("@toolLaunch_api");
			});
		cy.get("@openStub").should("have.been.called");
		cy.wrap(launchedTool).its("isLaunched").should("be.true");
		cy.get("@openStub").invoke("restore");
	}

	toolWasLaunched(toolName) {
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
