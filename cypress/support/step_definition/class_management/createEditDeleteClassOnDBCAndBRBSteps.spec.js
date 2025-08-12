const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Classes from "../../pages/class_management/pageClasses";

const classes = new Classes();

When("I click on the button Add class on the page create class", () => {
	classes.clickConfirmCreateClass();
});

When("I click button Cancel on the delete modal of class administration page", () => {
	classes.clickOnCancelDeleteModalOnClassAdminPage();
});

When("I click on the button Save on the page edit class", () => {
	classes.clickOnSaveChangesOnEditClassPage();
});

When("I click on the button Edit to edit the class {string}", (className) => {
	classes.clickOnEditClassOnClassOverview(className);
});

When("I select the {string} from the student selection dropdown", (fullNameStudent) => {
	classes.selectStudentInManageClassPage(fullNameStudent);
});

Then("I see the teacher name {string} in the teacher dropdown", (teacherName) => {
	classes.seeSelectedTeacherOnManageClassPage(teacherName);
});

Then("I see the student name {string} in the student dropdown", (studentName) => {
	classes.seeSelectedStudentOnManageClassPage(studentName);
});

When("I click on the checkbox Maintain school year assignment", () => {
	classes.clickOnCheckBoxMaintainSchoolYearAssignment();
});

When("I enter a custom Class name {string}", (customClassName) => {
	classes.enterCustomClassName(customClassName);
});

When("I click on the button More Options", () => {
	classes.clickOnMoreOptionsInClassCreatePage();
});

Then("I see the teacher name {string} is selected", (teacherName) => {
	classes.seeTeacherNameInClassCreatePage(teacherName);
});

Then("I see the current school year {string} is selected", (schoolYear) => {
	classes.seeSelectedSchoolYearInClass(schoolYear);
});
