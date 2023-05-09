const { When, Then } = require("@badeball/cypress-cucumber-preprocessor")

Then('I log out', () => {
    cy.logout()
})