const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Classes from "../../pages/class_management/pageClasses";

const classes = new Classes();

When("I do not see the class {string}", (customClassName) => {
	classes.doNotSeeClassOnOldClassAdministrationPageAfterDeletion(customClassName);
});

When("I click on delete confirmation button on the delete modal", () => {
	classes.clickOnConfirmDeleteOnModalOldClassPage();
});

When(
	"I click the cancel button on the delete modal on old class administration page",
	() => {
		classes.clickOnCancelDeleteModalOnOldClassPage();
	}
);

Then("I can see the delete modal on old class administration page", () => {
	classes.seeDeleteModalOnOldClassAdministrationPage();
});

When("I click the button delete to delete the class", () => {
	classes.clickOnDeleteClassOnOldClassOverview();
});

When("I click on the button save change on the page edit class", () => {
	classes.clickOnSaveChangesOnEditClassPage();
});

When("I click on the button edit to edit the class", () => {
	classes.clickOnEditClassOnOldClassOverview();
});

Then("I see class {string} on the overview", (customClassName) => {
	classes.seeCustomClassNameOnClassOverviewTable(customClassName);
});

Then("I see number of students {string} on the overview", (numberOfStudent) => {
	classes.seeNumberOfStudentOnClassOverviewTable(numberOfStudent);
});

Then("I see old class administration page", () => {
	classes.seeOldClassAdministrationPage();
});

When("I click on the button Save changes", () => {
	classes.clickOnSaveChangesClass();
});

Then("I select the {string} from the student selection dropdown", (fullNameStudent) => {
	classes.selectStudentInManageClassPage(fullNameStudent);
});

Then("I see the teacher name {string} in the teacher dropdown", (teacherName) => {
	classes.seeSelectedTeacherOnManageClassPage(teacherName);
});

When("I click on the button Add class", () => {
	classes.clickOnAddClassButtonOnClassCreatePage();
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

When("When I click on sub menu class", () => {
	classes.clickOnClassesSubMenuInAdministration();
});
