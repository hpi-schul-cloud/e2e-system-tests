const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Courses from "../../pages/course/pageCourses";
import ShareCourseModal from "../../pages/course/pageShareCourseModal";
import ImportCourseModal from "../../pages/course/pageImportCourseModal";

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

When("I uncheck the school internal checkbox", () => {
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
