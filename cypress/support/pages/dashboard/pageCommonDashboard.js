'use strict'

class Dashboard_Common {
  arriveOnDashboard () {
    cy.visit('/dashboard')
    cy.url().should('include', '/dashboard')
    cy.wait('@alerts_api')
      .its('response.statusCode')
      .should('eq', 200)
  }
}
export default Dashboard_Common
