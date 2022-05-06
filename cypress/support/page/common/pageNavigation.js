class Navigation {
    static #courseOverviewnavigationButton = '[data-testid="Course-Overview"]'

  goToRoomOverview () {
    cy.visit('/rooms-overview')
    cy.get(Navigation.#courseOverviewnavigationButton).click()
    cy.url().should('include', '/rooms-overview')
  }
}
export default Navigation
