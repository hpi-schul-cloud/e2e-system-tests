const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Courses from "../../pages/course/pageCourses";
import ImportCourseModal from "../../pages/course/pageImportCourseModal";
import ShareCourseModal from "../../pages/course/pageShareCourseModal";

const courses = new Courses();
const shareCourseModal = new ShareCourseModal();
const importCourseModal = new ImportCourseModal();

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
