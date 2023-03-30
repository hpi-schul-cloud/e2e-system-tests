const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1024,
  viewportHeight: 768,
  videoCompression: 18,
  chromeWebSecurity: true,
  pageLoadTimeout: 80000,
  defaultCommandTimeout: 80000,
  requestTimeout: 60000,
  responseTimeout: 60000,
  e2e: {
    // This config comes dusring v12 update.
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    // testIsolation is by default enabled in v12 and also cy.session() is inherited it by default in the login test, that is why it is set it to false.

    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.feature',
    testIsolation: false
  },
});
