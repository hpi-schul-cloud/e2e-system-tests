const { defineConfig } = require('cypress')
const webpack = require('@cypress/webpack-preprocessor')
const preprocessor = require('@badeball/cypress-cucumber-preprocessor')

async function setupNodeEvents (on, config) {
  const isCI = config.env.environmentName === 'ci'
  if (isCI) {
    const environmentFilename = `./env_variables/combined_credentials.json`
    const settings = require(environmentFilename)
    if (settings) {
      config.env = {
        ...config.env,
        ...settings
      }
    }
  } else {
    const environmentName = config.env.environmentName || 'local'
    const environmentFilename = `./env_variables/${environmentName}.env.json`
    console.log('loading %s', environmentFilename)
    const settings = require(environmentFilename)

    if (settings.env) {
      config.env = {
        ...config.env,
        ...settings.env
      }
    }
    console.log('loaded settings for environment %s', environmentName)
  }

  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config)

  on(
    'file:preprocessor',
    webpack({
      webpackOptions: {
        resolve: {
          extensions: ['.ts', '.js']
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                  options: config
                }
              ]
            }
          ]
        }
      }
    })
  )

  // Make sure to return the config object as it might have been modified by the plugin.
  return config
}

module.exports = defineConfig({
  viewportWidth: 1024,
  viewportHeight: 768,
  video: true,
  videoCompression: 18,
  chromeWebSecurity: false,
  pageLoadTimeout: 80000,
  defaultCommandTimeout: 80000,
  requestTimeout: 60000,
  responseTimeout: 60000,
  e2e: {
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents,
    // testIsolation is set to false because when testIsolation is set to true or in v12 its anyway by default enabled, then it clears the page again that might be redundant.
    // we are using cy.session() in login custom command, which is inheriting the testIsolation properties by default as true and clearing the page (cookies, local storage..etc.) in the test.
    testIsolation: false
  }
})
