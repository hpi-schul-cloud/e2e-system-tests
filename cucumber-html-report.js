const report = require('multiple-cucumber-html-reporter')
const fs = require('fs')

let osMap = os => {
  if (os.startsWith('win')) {
    return 'windows'
  } else if (os.startsWith('darwin')) {
    return 'osx'
  } else if (os.startsWith('linux')) {
    return 'linux'
  } else if (os.startsWith('ubuntu')) {
    return 'ubuntu'
  } else if (os.startsWith('android')) {
    return 'android'
  } else if (os.startsWith('ios')) {
    return 'ios'
  }
}

let browserMap = browser => {
  if (browser.startsWith('electron') || browser.startsWith('chrome')) {
    return 'chrome'
  } else if (browser.startsWith('firefox')) {
    return 'firefox'
  } else if (browser.startsWith('safari')) {
    return 'safari'
  } else if (browser.startsWith('internet explorer')) {
    return 'internet explorer'
  } else {
    return 'edge'
  }
}

fs.readFile('cypress/.run/results.json', function read (err, data) {
  if (err) {
    throw err
  }
  let runInfos = JSON.parse(data)
  report.generate({
    jsonDir: 'cypress/cucumber-json',
    reportPath: 'cypress/reports',
    openReportInBrowser: false,
    saveCollectedJSON: true,
    pageTitle: 'dBildungscloud E2E Test Report',
    reportName:
      'E2E Cucumber Test Report ' +
      new Date(runInfos.startedTestsAt).toLocaleString(),
    pageFooter: ' ',
    hideMetadata: false,
    displayReportTime: true,
    metadata: {
      browser: {
        name: browserMap(runInfos.browserName),
        version: runInfos.browserVersion
      },
      device: 'Cypress',
      platform: {
        name: osMap(runInfos.osName)
      }
    },
    customData: {
      title: 'Run info',
      data: [
        { label: 'Project', value: 'dBildungscloud' },
        {
          label: 'Instance',
          value:
            runInfos.config.env.BRB ||
            runInfos.config.env.NBC
        },
        {
          label: 'Execution Start Time',
          value: new Date(runInfos.startedTestsAt).toLocaleString()
        },
        {
          label: 'Execution End Time',
          value: new Date(runInfos.endedTestsAt).toLocaleString()
        }
      ]
    }
  })
})
