// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './custom_commands/login'
import './custom_commands/logout'
import "cypress-real-events";

// prevents blocking test by uncaught exception. This should be commented out when BC-2711 is resolved
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

let data = {
  env: {
    BRB: '',
    NBC: '',
    DEFAULT: ''
  },
  browser: {
    name: '',
    version: ''
  },
  platform: '',
  time: ''
}

before(() => {
  cy.exec(`ls cypress/fixtures/test-run-details.json`, { failOnNonZeroExit: false }).then(
    result => {
      if (result.code === 0) {
        return
      } else {
        cy.writeFile('cypress/fixtures/test-run-details.json', data)
      }
    }
  )
})

after(() => {
  cy.readFile('cypress/fixtures/test-run-details.json').then(data => {
    const env = Cypress.env()
    data.env.BRB = env['BRB']
    data.env.NBC = env['NBC']
    data.env.DEFAULT = env['DEFAULT']
    data.browser.name = Cypress.browser.name
    data.browser.version = Cypress.browser.majorVersion
    data.platform = Cypress.platform
    data.time = new Date().toLocaleString('en-GB')
    cy.writeFile('cypress/fixtures/test-run-details.json', data)
  })
})
