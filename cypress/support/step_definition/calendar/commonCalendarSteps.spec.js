const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Calendar from "../../pages/calendar/pageCalendar";

const calendar = new Calendar();

When("I go to calendar overview", () => {
	calendar.navigateToCalendarOverview();
});

Then("I see calendar page", () => {
	calendar.seeCalendarOverviewPage();
});

When ("I click on icon Next", () => {
	calendar.clickOnNextCalendarPage();
});

When("I click on day {string}", (daynumber) => {
	calendar.clickOnDay(daynumber);
});
