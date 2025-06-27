const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Courses from "../../pages/course/pageCourses";
import ShareCourseModal from "../../pages/course/pageShareCourseModal";
import ImportCourseModal from "../../pages/course/pageImportCourseModal";

const courses = new Courses();
const shareCourseModal = new ShareCourseModal();
const importCourseModal = new ImportCourseModal();

When("I click on share course button", () => {
	courses.clickShareCourseButton();
});

Then("I see the share course dialog box", () => {
	shareCourseModal.seeShareCourseDialogBox();
});

Then("I see the info text in the share course dialog", () => {
	shareCourseModal.seeInfoTextInShareCourseDialog();
});

Then("I see the school internal checkbox as checked", () => {
	shareCourseModal.seeSchoolInternalCheckBoxAsChecked();
});

Then("I see the expiry date checkbox as checked", () => {
	shareCourseModal.seeExpiryDateCheckBoxAsChecked();
});

When("I uncheck the school internal checkbox", () => {
	shareCourseModal.uncheckSchoolInternalCheckBoxInShareCourseDialog();
});

When("I click on the continue button in the share course dialog", () => {
	shareCourseModal.clickContinueButtonInDialog();
});

Then("I see the import share course url in the share course result dialog", () => {
	shareCourseModal.seeCopyUrlInShareCourseResultDialog();
});

Then("I see the mail button in the share course result dialog", () => {
	shareCourseModal.seeMailButtonInShareCourseResultDialog();
});

Then("I see the copy link button in the share course result dialog", () => {
	shareCourseModal.seeCopyLinkButtonInShareCourseResultDialog();
});

Then("I see the mail QR-Code button in the share course result dialog", () => {
	shareCourseModal.seeQrCodeButtonInShareCourseResultDialog();
});

When("I save the import share course url", () => {
	shareCourseModal.saveTheUrlInShareCourseResultDialog();
});

When("I visit the saved import url of the shared course", () => {
	importCourseModal.visitSavedShareCourseUrl();
});

Then("I see the import share course dialog", () => {
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

When("I click on the import course button", () => {
	importCourseModal.clickOnConfirmButtonInImportShareCourseDialog();
});
