'use strict'

class Dashboard_Common {
  static #arriveOnDashboardLoad = '.dashboard-title'

  arriveOnDashboard () {
    cy.visit('/dashboard')
    cy.url()
      .should('include', '/dashboard')
      .get(Dashboard_Common.#arriveOnDashboardLoad)
      .then($elm => {
        expect($elm).to.have.attr('href').match(/\w*/)
        expect($elm).to.have.attr('href').match(/\w*/)
      })
  }
}
export default Dashboard_Common
