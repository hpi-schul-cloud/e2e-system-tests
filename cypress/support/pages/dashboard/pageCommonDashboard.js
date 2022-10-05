'use strict'

class Dashboard_Common {

  visitDashboard() {
    cy.visit('/dashboard')
    this.arriveOnDashboard()
  }

  arriveOnDashboard() {
    cy.url().should('include', '/dashboard')
  }
}
export default Dashboard_Common