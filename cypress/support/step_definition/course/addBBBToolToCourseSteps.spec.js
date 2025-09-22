const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Courses from "../../pages/course/pageCourses";

const courses = new Courses();

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
