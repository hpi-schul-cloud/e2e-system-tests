'use strict'

class Dashboard_Common {
  arriveOnDashboard () {
    cy.visit('/dashboard')
    cy.url()
      .should('include', '/dashboard')
      .waitForNetworkIdle(5000)
  }
}
export default Dashboard_Common