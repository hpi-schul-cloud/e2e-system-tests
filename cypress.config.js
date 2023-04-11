const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1024,
  viewportHeight: 768,
  videoCompression: 18,
  chromeWebSecurity: true,
  pageLoadTimeout: 180000,
  defaultCommandTimeout: 80000,
  requestTimeout: 60000,
  responseTimeout: 60000,
  e2e: {
    // This config comes during v12 update.
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.

    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.feature',

    // testIsolation is set to false because when testIsolation is set to true or in v12 its anyway by default enabled, then it clears the page again that might be redundant.
    // we are using cy.session() in login custom command, which is inheriting the testIsolation properties by default as true and clearing the page (cookies, local storage..etc.) in the test.
    testIsolation: false
  },
});
