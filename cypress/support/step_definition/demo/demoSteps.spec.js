
// Scenario: URL demo
Given ('I am a teacher',() => {
  cy.visit(Cypress.env('BRB'))
})
Then ('I see login page', () => {
    cy.visit(Cypress.env('BRB'))
})