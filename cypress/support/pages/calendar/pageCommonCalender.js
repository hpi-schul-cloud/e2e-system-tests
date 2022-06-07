'use strict'

class Calendar_Navigation {

    static #calendarOverviewNavigationButton = '[data-testid="Termine"]'


goToCalendarOverview () {
    cy.visit('/calendar')
    cy.get(Calendar_Navigation.#calendarOverviewNavigationButton).click()
    cy.url().should('include', '/calendar')
  }
}
export default Calendar_Navigation