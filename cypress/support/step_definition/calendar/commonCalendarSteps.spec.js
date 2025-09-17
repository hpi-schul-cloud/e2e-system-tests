const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Calendar from "../../pages/calendar/pageCalendar";

const calendar = new Calendar();

When("I go to calendar overview", () => {
	calendar.navigateToCalendarOverview();
});

Then("I see calendar page", () => {
	calendar.seeCalendarOverviewPage();
});

When("I click on icon Next to go to next month", () => {
	calendar.clickOnNextCalendarPage();
});

When("I click on day {string}", (daynumber) => {
	calendar.clickOnDay(daynumber);
});

Then("I see modal for creating an event", () => {
	calendar.seeCreateEventModal();
});

Then("I see modal for editing an event", () => {
	calendar.seeEditEventModal();
});

When("I enter event title {string}", (eventTitle) => {
	calendar.enterEventTitle(eventTitle);
});

When("I enter start time with time {string}", (eventStartTime) => {
	calendar.enterEventStartTime(eventStartTime);
});

When("I enter end time with time {string}", (eventEndTime) => {
	calendar.enterEventEndTime(eventEndTime);
});

When("I change start time to {string}", (eventStartTime) => {
	calendar.changeEventStartTime(eventStartTime);
});

When("I change end time to {string}", (eventEndTime) => {
	calendar.changeEventEndTime(eventEndTime);
});

When("I enter event description {string}", (eventDescription) => {
	calendar.enterEventDescription(eventDescription);
});

When("I enter event location {string}", (eventLocation) => {
	calendar.enterEventLocation(eventLocation);
});

When("I click button Add event", () => {
	calendar.submitEventForm();
});

Then(
	"I see an event with start time {string} and event title {string}",
	(eventStartTime, eventTitle) => {
		calendar.seeEventInCalendarWithStartTime(eventStartTime, eventTitle);
	}
);

When(
	"I click on event with start time {string} and event title {string}",
	(eventStartTime, eventTitle) => {
		calendar.clickOnEventInCalendar(eventStartTime, eventTitle);
	}
);

When("I click on button Delete event", () => {
	calendar.clickDeleteEventButton();
});

Then("I do not see an event with event title {string}", (eventTitle) => {
	calendar.doNotSeeEventInCalendar(eventTitle);
});
