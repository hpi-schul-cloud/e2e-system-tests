'use strict'

class Calendar_Common {

  static #calendarOverviewNavigationButton = '[data-testid="Termine"]'

  navigateToCalendarOverview() {
    cy.visit('/calendar')
    cy.get(Calendar_Common.#calendarOverviewNavigationButton).click()
    cy.url().should('include', '/calendar')
  }
}
export default Calendar_Common