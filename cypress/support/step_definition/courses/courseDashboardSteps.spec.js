const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import CourseDashboard from "../../pages/courses/pageCourseDashboard";

const courseDashboard = new CourseDashboard();

const splitNames = (names) => names.split(",").map((name) => name.trim());

When("I create the courses {string} via API", (names) => {
	courseDashboard.createCoursesViaApi(splitNames(names));
});

When("I delete the courses {string} via the course page", (names) => {
	courseDashboard.deleteCoursesViaLegacyClient(splitNames(names));
});

When(
	"I move course {string} onto course {string} on the course overview via API",
	(movedName, targetName) => {
		courseDashboard.moveCourseOntoCourse(movedName, targetName);
	}
);

When(
	"I move course {string} to the free position {int} {int} on the course overview via API",
	(name, x, y) => {
		courseDashboard.moveCourseToFreePosition(name, x, y);
	}
);

When("I rename the group of course {string} to {string} via API", (name, title) => {
	courseDashboard.renameGroupOfCourse(name, title);
});

Then(
	"I see the course group {string} with the courses {string} via API",
	(title, names) => {
		courseDashboard.verifyGroup(title, splitNames(names));
	}
);

Then("I see course {string} ungrouped at position {int} {int} via API", (name, x, y) => {
	courseDashboard.verifySingleCourseAtPosition(name, x, y);
});

Then("I see no course groups via API", () => {
	courseDashboard.verifyNoGroups();
});

When("I remember the course overview layout via API", () => {
	courseDashboard.rememberDashboardGrid();
});

Then("I see the remembered course overview layout via API", () => {
	courseDashboard.verifyRememberedDashboardGrid();
});

When("I reload the course overview and wait for the dashboard", () => {
	courseDashboard.visitCourseOverviewAndWaitForDashboard();
});

Then("I see the course group {string} on the course overview", (title) => {
	courseDashboard.seeGroupTitleOnCourseOverview(title);
});

Then("I do not see the course group {string} on the course overview", (title) => {
	courseDashboard.doNotSeeGroupOnCourseOverview(title);
});

Then("I do not see the text {string} on the course overview", (text) => {
	courseDashboard.doNotSeeTextOnCourseOverview(text);
});

Then("I see course {string} on the course overview", (name) => {
	courseDashboard.seeCourseOnCourseOverview(name);
});
