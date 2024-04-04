"use strict";

class Calendar {
	static #calendarOverviewNavigationButton = '[data-testid="Termine"]';

	navigateToCalendarOverview() {
		cy.visit("/calendar");
		cy.get(Calendar.#calendarOverviewNavigationButton).click();
		cy.url().should("include", "/calendar");
	}
}
export default Calendar;
