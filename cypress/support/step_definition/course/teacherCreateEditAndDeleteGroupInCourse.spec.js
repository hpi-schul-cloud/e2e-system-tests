const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Courses from "../../pages/course/pageCourses";

const courses = new Courses();

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
