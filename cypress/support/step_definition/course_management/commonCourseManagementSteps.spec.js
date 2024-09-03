import Management from "../../pages/admin/pageAdministration";
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import CourseManagement from '../../pages/course_management/pageCourseManagement';

const management = new Management();
const courseManagement = new CourseManagement()

When("I click on edit button of course {string}", (courseName) => {
	management.editSpecificCourse(courseName);
});

Then("I see course administration page", () => {
	management.seeCourseAdministrationPage();
});

Then("I see the new course administration page", () => {
	courseManagement.isNewCourseAdministrationPage();
});

Then("I do not see the new course administration page", () => {
	courseManagement.isNotNewCourseAdministrationPage();
})

Then("I see the course {string} on the new course administration page", (courseName) => {
	courseManagement.seeCourseTableContainsCourse(courseName)
});

Then("I do not see {string} in course table", (courseName) => {
	courseManagement.doNotSeeCourseInTable(courseName);
})

When("I click on add course", () => {
	courseManagement.clickCreateCourseAdminButton()
});

When("I click the delete button for course {string} in course table", (courseName) => {
	courseManagement.clickDeleteButtonForCourse(courseName);
});

Then("I can see 4 columns in the table", () => {
	courseManagement.seeTableHas4Columns();
});

Then("I can see 2 tabs", () => {
	courseManagement.see2Tabs();
});

Then("I can see the course {string} without classes and with teacher {string}", (courseName, teacherName) => {
	courseManagement.seeNewCourseTableContainsCourseWithoutClass(courseName, teacherName)
});

Then("I can see 3 enabled action items for course {string}", (courseName) => {
	courseManagement.seeCourseHas3ActiveActionItems(courseName);
});

When("I click the edit button on the {string} course", (courseName) =>{
	courseManagement.clickEditButtonForCourse(courseName);
});

When("I click the start synchronization button on the {string} course", (courseName) => {
	courseManagement.clickSynchronizeButtonForCourse(courseName);
});

Then("I do not see the start synchronize button for {string} anymore", (courseName) => {
	courseManagement.seeNoSynchronizeButtonForCourse(courseName);
});
