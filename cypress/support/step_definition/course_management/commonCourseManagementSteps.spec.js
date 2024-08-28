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

Then("I see the course {string} on the new course administration page", (courseName) => {
	courseManagement.seeCourseTableContainsCourse(courseName)
})

When("I click on add course", () => {
	courseManagement.clickCreateCourseAdminButton()
})

When("I click the delete button for course {string} in course table", (courseName) => {
	courseManagement.clickDeleteButtonForCourse(courseName);
})
