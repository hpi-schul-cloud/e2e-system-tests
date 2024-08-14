"use strict";

class Calendar {
	static #calendarOverviewNavigationButton = '[data-testid="Termine"]';
	static #calendarOverviewPageTitle = '[data-testid="Kalender"]';
	static #calendarContent = '[class="fc-widget-content"]'; // has to be replaced by data-testid
	static #nextCalendarPage = '[aria-label="next"]'; // has to be replaced by data-testid
	static #eventNameFormElement = '[data-testid="team_event_name"]';
	static #eventStartDateFormElement = '[data-testid="form-datetime-input-startDate"]';
	static #eventEndDateFormElement = '[data-testid="form-datetime-input-endDate"]';
	static #eventDescriptionFormElement = '[data-testid="team_event_description"]';
	static #eventLocationFormElement = '[data-testid="team_event_location"]';
	static #eventFormSubmitButton = '[data-testid="submit-btn-create-event-modal"]';

	navigateToCalendarOverview() {
		cy.visit("/calendar");
		cy.get(Calendar.#calendarOverviewNavigationButton).click();
		cy.url().should("include", "/calendar");
	}

	seeCalendarOverviewPage() {
		cy.url().should("include", "/calendar");
		cy.get(Calendar.#calendarOverviewPageTitle).should("exist");
	}

	clickOnDay(daynumber) {
		cy.get(Calendar.#calendarContent).find("span").contains(daynumber).click();
	}

	clickOnNextCalendarPage() {
		cy.get(Calendar.#nextCalendarPage).eq(1).click();
	}

	seeCreateEventModal() {
		cy.get(Calendar.#eventNameFormElement).should("be.visible");
	}

	enterEventTitle(eventTitle) {
		cy.get(Calendar.#eventNameFormElement).eq(1).type(eventTitle);
	}

	enterEventStartTime(eventStartTime) {
		cy.get(Calendar.#eventStartDateFormElement).eq(1).type("{backspace}".repeat(4)).type(eventStartTime);
		cy.get(Calendar.#eventNameFormElement).eq(1).click();
	}

	enterEventEndTime(eventEndTime) {
		cy.get(Calendar.#eventEndDateFormElement).eq(1).type("{backspace}".repeat(4)).type(eventEndTime);
		cy.get(Calendar.#eventNameFormElement).eq(1).click();
	}

	enterEventDescription(eventDescription) {
		cy.get(Calendar.#eventDescriptionFormElement).eq(1).type(eventDescription);
	}

	enterEventLocation(eventLocation) {
		cy.get(Calendar.#eventLocationFormElement).eq(1).type(eventLocation);
	}

	submitEventForm() {
		cy.get(Calendar.#eventFormSubmitButton).click();
	}
}
export default Calendar;
