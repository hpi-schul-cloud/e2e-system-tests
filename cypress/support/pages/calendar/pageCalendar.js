"use strict";

class Calendar {
	static #calendarOverviewNavigationButton = '[data-testid="Termine"]';
	static #calendarOverviewPageTitle = '[data-testid="Kalender"]';
	static #calendarContent = '[class="fc-widget-content"]'; // has to be replaced by data-testid
	static #nextCalendarPage = '[aria-label="next"]'; // has to be replaced by data-testid


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
}
export default Calendar;
