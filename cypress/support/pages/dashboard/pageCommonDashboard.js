'use strict'

class Dashboard_Common {

  arriveOnDashboard() {
    cy.visit('/dashboard')
    cy.url()
      .should('include', '/dashboard')
      .wait([
        '@dashboard_api',
        '@alerts_api'
      ])
      .then(interceptions => {
        expect(interceptions[0].response.statusCode).to.equal(200)
        expect(interceptions[1].response.statusCode).to.equal(200)
        expect(interceptions[0].request.url).to.include('/dashboard')
      })
  }
}
export default Dashboard_Common