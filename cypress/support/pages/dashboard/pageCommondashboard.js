'use strict'
class Dashboard_Common {

  arriveOnDashboard () {
    cy.visit('/dashboard')
    cy.url().should('include', '/dashboard')
  }
}
  export default Dashboard_Common