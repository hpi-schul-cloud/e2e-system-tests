const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Classes from "../../pages/classes_management/pageClasses";
import Courses from "../../pages/courses/pageCourses";
import ImportCourseModal from "../../pages/courses/pageImportCoursesModal";
import ShareCourseModal from "../../pages/courses/pageShareCoursesModal";

const courses = new Courses();
const shareCourseModal = new ShareCourseModal();
const importCourseModal = new ImportCourseModal();
const classes = new Classes();

When(
	"I click on checkbox Activate video conferences in page Edit course to enable the BigBlueButton tool",
	() => {
		courses.clickOnEnableVideoConferenceCheckBoxInCourseEditPage();
	}
);

When("I click on tab Tools", () => {
	courses.clickOnToolsTabInCourse();
});

Then("I see the Video Conference BigBlueButton in the course", () => {
	courses.seeBBBInCourseToolTab();
});

When("I click on the tool BigBlueButton in the course", () => {
	courses.clickOnBBBInCourseToolTab();
});

Then("I see the modal to start the BigBlueButton video conference", () => {
	courses.seeBBBDialogBoxToStartTheConferenceInCourse();
});

Then("I click on button Cancel in BigBlueButton dialog box", () => {
	courses.clickOnCancelBBBToolDialogBoxInCourse();
});

Then("I do not see the the card Video Conference BigBlueButton", () => {
	courses.doNotSeeBBBInCourseToolTab();
});

Then(
	"I see the disabled check box for Activating video conferences in page Edit course",
	() => {
		courses.seeDisabledCheckBoxForBBBToolInCourseEditPage();
	}
);

When(
	"I uncheck the checkbox to Activate video conferences in page Edit course to enable the BigBlueButton tool",
	() => {
		courses.uncheckVideoConferenceCheckBoxInCourseEditPage();
	}
);

Then("I see the button to create a new synced course", () => {
	courses.seeCreateSyncedCourseFAB();
});

Then("I see title of the modal to select a synced group", () => {
	courses.seeTitleInSyncedGroupDialog();
});

Then("I see the title of the modal for synchronization confirmation", () => {
	courses.seeTitleInSynchronizationConfirmationDialog();
});

Then("I see information text of the modal to select a synced group", () => {
	courses.seeInfoTextInSyncedGroupDialog();
});

Then(
	"I see information text of the modal asking for confirmation of synchronization",
	() => {
		courses.seeInfoTextInSynchronizationConfirmationDialog();
	}
);

Then("I see the group selection of the modal to select a synced group", () => {
	courses.seeGroupSelectionInSyncedGroupDialog();
});

Then("I see the warning text of the modal to select a synced group", () => {
	courses.seeWarningTextInSyncedGroupDialog();
});

Then("I see a warning about the consequences of synchronization", () => {
	courses.seeWarningTextInSynchronizationConfirmationDialog();
});

Then("I see continue button of the modal to select a synced group is disabled", () => {
	courses.seeContinueBtnInSyncedGroupDialogIsDisabled();
});

Then("I see the group {string} is selected", (groupName) => {
	courses.seeSelectedGroup(groupName);
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

Then("I see the start synchronization button", () => {
	courses.seeStartSyncButton();
});

Then("I see the title of the modal to end the sync", () => {
	courses.seeTitleInEndSyncDialog();
});

Then("I see the information text of the modal to end the sync", () => {
	courses.seeInfoTextInEndSyncDialog();
});

Then("I see the synced chip next to the title on the course page", () => {
	courses.seeSyncedCourseChip();
});

Then(
	"I see the group {string} is synced with course {string}",
	(groupName, courseName) => {
		classes.seeGroupIsSyncedWithCourse(groupName, courseName);
	}
);

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

When("I click on the button to create a new synced course", () => {
	courses.clickOnCreateSyncedCourseFAB();
});

When("I select group {string} in the group selection", (groupName) => {
	courses.selectGroupInSyncedGroupSelection(groupName);
});

When("I click continue button on the modal to select a synced group", () => {
	courses.clickContinueButtonOnSyncedGroupDialog();
});

When("I click the confirm button on the synchronization confirmation modal", () => {
	courses.clickConfirmButtonOnSynchronizationConfirmationDialog();
});

When("I click cancel button on the modal to select a synced group", () => {
	courses.clickCloseButtonOnSyncedGroupDialog();
});

When("I click the end synchronization button", () => {
	courses.clickEndSyncButton();
});

When("I click the start synchronization button", () => {
	courses.clickStartSyncButton();
});

When("I click the confirmation button of the modal to end the sync", () => {
	courses.clickConfirmButtonOnEndSyncDialog();
});

When("I click the end sync button of group {string}", (groupName) => {
	classes.clickEndSyncWithCourseButton(groupName);
});

When("I click on the tools tab", () => {
	courses.navigateToToolsTab();
});

Then("I see the button to add a tool", () => {
	courses.seeAddNewToolFAB();
});

Then("I do not see the button to add a tool", () => {
	courses.seeNotAddNewToolFAB();
});

When("I click on the button to add a tool", () => {
	courses.clickOnAddNewToolFAB();
});

Then("I see the tool {string} in the tool overview", (toolName) => {
	courses.checkIfToolIsVisibleInToolTable(toolName);
});

Then("I do not see tool {string} in the tool overview", (toolName) => {
	courses.checkIfToolIsNotVisibleInToolTable(toolName);
});

Then("I see the domain of {string} in the tool overview", (toolName) => {
	courses.seeToolDomain(toolName);
});

When("I click on the tool {string}", (toolName) => {
	courses.clickOnTool(toolName);
});

Then("I see the delete tool dialog", () => {
	courses.seeDeleteDialog();
});

When("I confirm the delete tool dialog", () => {
	courses.confirmDeleteToolDialog();
});

When("I click on add tool", () => {
	courses.clickOnSaveTool();
});

When("I click on three dot menu of the tool {string}", (toolName) => {
	courses.clickThreeDotMenuOnTool(toolName);
});

When("I click on delete button of the tool {string}", (toolName) => {
	courses.clickOnDeleteButton(toolName);
});

Then("I see {int} tools", (count) => {
	courses.seeNumberOfTools(count);
});

Then("I see the tool {string} is not marked as incomplete", (toolName) => {
	courses.seeToolIsNotMarkedAsIncomplete(toolName);
});

Then("I see the tool {string} is marked as incomplete", (toolName) => {
	courses.seeToolIsMarkedAsIncomplete(toolName);
});

Then("I see the tool {string} is marked as deactivated", (toolName) => {
	courses.seeToolIsMarkedAsDeactivated(toolName);
});

Then("I see the tool {string} is not marked as deactivated", (toolName) => {
	courses.seeToolIsNotMarkedAsDeactivated(toolName);
});

Then("I see the tool {string} is marked as incomplete operational", (toolName) => {
	courses.seeToolIsMarkedAsIncompleteOperational(toolName);
});

Then("I see the tool {string} is not marked as incomplete operational", (toolName) => {
	courses.seeToolIsNotMarkedAsIncompleteOperational(toolName);
});

Then("I see an error dialog", () => {
	courses.checkIfErrorDialogIsOpen();
});

When("I click on the tool edit button", () => {
	courses.clickOnToolEditButton();
});

When("I click on the tool delete button", () => {
	courses.clickOnToolDeleteButton();
});

When("I launch tool {string} with given url {string}", (toolName, url) => {
	courses.launchTool(toolName, url);
});

Then("I see tool {string} was launched", (toolName) => {
	courses.toolWasLaunched(toolName);
});

When("I enter the course name {string} into the search field", (courseName) => {
	courses.searchForACourse(courseName);
});

When("I select {string} from field teacher", (userName) => {
	courses.selectTeacherFromTeacherField(userName);
});

When("I select {string} from field student", (userName) => {
	courses.selectStudentFromStudentField(userName);
});

When("I click on button share course", () => {
	courses.clickShareCourseButton();
});

Then("I see the dialog box share course", () => {
	shareCourseModal.seeShareCourseDialogBox();
});

Then("I see the info text in the dialog box share course", () => {
	shareCourseModal.seeInfoTextInShareCourseDialog();
});

Then("I see the checkbox school internal as checked", () => {
	shareCourseModal.seeSchoolInternalCheckBoxAsChecked();
});

Then("I see the checkbox expiry date as checked", () => {
	shareCourseModal.seeExpiryDateCheckBoxAsChecked();
});

When("I uncheck the checkbox school internal", () => {
	shareCourseModal.uncheckSchoolInternalCheckBoxInShareCourseDialog();
});

When("I click on the button continue in the dialog box share course", () => {
	shareCourseModal.clickContinueButtonInDialog();
});

Then("I see the import share course url in the dialog box share course result", () => {
	shareCourseModal.seeCopyUrlInShareCourseResultDialog();
});

Then("I see the button mail in the dialog box share course result", () => {
	shareCourseModal.seeMailButtonInShareCourseResultDialog();
});

Then("I see the button copy link in the dialog box share course result", () => {
	shareCourseModal.seeCopyLinkButtonInShareCourseResultDialog();
});

Then("I see the button mail QR-Code in the dialog box share course result", () => {
	shareCourseModal.seeQrCodeButtonInShareCourseResultDialog();
});

When("I save the import share course url", () => {
	shareCourseModal.saveTheUrlInShareCourseResultDialog();
});

When("I visit the saved import url of the shared course", () => {
	importCourseModal.visitSavedShareCourseUrl();
});

Then("I see the dialog box import share course", () => {
	importCourseModal.seeImportShareCourseDialogBox();
});

Then("I see the import share course tools info", () => {
	importCourseModal.seeImportShareCourseToolsInfo();
});

Then("I see {string} in the course name field", (defaultCourseName) => {
	importCourseModal.seeDefaultCourseNameForImportCourse(defaultCourseName);
});

When("I enter {string} in the course name field", (importCourseName) => {
	importCourseModal.enterCourseNameForImportCourse(importCourseName);
});

When("I click on the button import course", () => {
	importCourseModal.clickOnConfirmButtonInImportShareCourseDialog();
});

When("I click on button qr code in the dialog box share course result", () => {
	shareCourseModal.clickQrCodeButtonInShareCourseResultDialog();
});

Then("I see the qr code in the dialog box share course result", () => {
	shareCourseModal.seeQrCodeScannerInShareCourseResultDialog();
});

Then("I click on the button close in the dialog box share course result", () => {
	shareCourseModal.clickCloseButtonInShareCourseResultDialog();
});

Then("I see the text description in the dialog box share topic", () => {
	shareCourseModal.seeDescriptionInShareDialog();
});

Then(
	"I see the checkbox for topic link valid within same school is {string}",
	(state) => {
		shareCourseModal.checkSchoolInternalCheckBoxState(state);
	}
);

Then("I see the expiry date checkbox is {string}", (state) => {
	shareCourseModal.checkExpiryDateCheckBoxState(state);
});

When("I click on the button continue in dialog box share topic", () => {
	shareCourseModal.clickContinueButtonInShareDialog();
});

Then("I see the import share topic url in the dialog box share topic result", () => {
	shareCourseModal.seeCopyUrlInShareCourseResultDialog();
});

Then("I see the button {string} in the dialog box share topic result", (buttonName) => {
	shareCourseModal.seeShareOptionButtonCourseDialog(buttonName);
});

When("I save the import share topic url", () => {
	shareCourseModal.saveTheUrlInShareCourseResultDialog();
});

When("I visit the saved import url of the shared topic", () => {
	importCourseModal.visitSavedShareCourseUrl();
});

When("I click on the dropdown options in the dialog box import share topic", () => {
	importCourseModal.seeImportDropDownDialogBox();
});

When("I select the course name {string} in the course name field", (courseName) => {
	importCourseModal.selectCourseFromDropdown(courseName);
});

When("I enter {string} in the topic name field", (importTopicName) => {
	importCourseModal.enterCourseNameForImportCourse(importTopicName);
});

When("I click on the button import topic", () => {
	importCourseModal.clickOnConfirmButtonInImportShareCourseDialog();
});

When("I {string} the checkbox school internal in dialog box topic", (action) => {
	shareCourseModal.toggleSchoolInternalCheckBoxInShareDialog(action);
});

When("I click on tab Groups", () => {
	courses.navigateToGroupsTab();
});

Then("I see button Create a new group", () => {
	courses.seeAddNewCourseGroupButton();
});

When("I click on button Create a new group", () => {
	courses.clickOnAddGroup();
});

Then("I see page Create student group", () => {
	courses.seeAddNewCourseGroupPage();
});
When("I type {string} in field Group name", (groupName) => {
	courses.typeNameOfTheCourseGroup(groupName);
});

When("I select {string} from field Group member", (groupMember) => {
	courses.selectGroupMember(groupMember);
});

When("I click on button Create student group", () => {
	courses.clickOnCreateStudentGroupButton();
});

Then("I see group is created with name {string}", (groupName) => {
	courses.seeCreatedStudentGroup(groupName);
});

When("I click on student group {string}", (groupName) => {
	courses.clickOnStudentGroup(groupName);
});

When("I click on button Edit group", () => {
	courses.clickOnEditGroupButton();
});

When(
	"I delete text in field Group name and type {string} in field Group name",
	(groupRename) => {
		courses.deleteTextFromGroupNameField();
		courses.typeNameOfTheCourseGroup(groupRename);
	}
);

When("I click on button Save changes", () => {
	courses.clickOnCreateStudentGroupButton();
});

Then("I see group name changed to {string}", (groupRename) => {
	courses.seeCreatedStudentGroup(groupRename);
});

When("I click on button Delete group", () => {
	courses.clickOnDeleteCourseGroupButton();
});

When("I click on button Delete group confirmation", () => {
	courses.clickOnDeleteCourseGroupConfirmationButton();
});

Then("I do not see group name {string} in tab Course group", (groupName) => {
	courses.courseGroupNotExists(groupName);
});
