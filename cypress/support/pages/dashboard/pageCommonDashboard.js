'use strict'

class Dashboard_Common {
  arriveOnDashboard () {
    cy.visit('/dashboard')
    cy.url()
      .should('include', '/dashboard')
      .get('.dashboard-title')
      .then($elm => {
        expect($elm).to.have.attr('href').match(/\w*/)
        expect($elm).to.have.attr('href').match(/\w*/)
      })
    /*cy.wait('@alerts_api')
      .its('response.statusCode')
      .should('eq', 200)*/
  }
}
export default Dashboard_Common
