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

Then("I see modal for creating an event", () => {
	calendar.seeCreateEventModal();
})

When("I enter event title {string}", (eventTitle) => {
	calendar.enterEventTitle(eventTitle);
})

When("I enter start time with time {string}", (eventStartTime) => {
	calendar.enterEventStartTime(eventStartTime);
})

When("I enter end time with time {string}", (eventEndTime) => {
	calendar.enterEventEndTime(eventEndTime);
})

When("I enter event description {string}", (eventDescription) => {
	calendar.enterEventDescription(eventDescription);
})

When("I enter event location {string}", (eventLocation) => {
	calendar.enterEventLocation(eventLocation);
})

When("I click button Add event", () => {
	calendar.submitEventForm();
})
