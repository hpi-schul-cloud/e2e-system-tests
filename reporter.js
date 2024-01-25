const report = require('multiple-cucumber-html-reporter')
const fs = require('fs')
const fs_extra = require('fs-extra')
const path = require('path')
const chalk = require('chalk')

const cucumberJsonDir = path.resolve(process.cwd(), 'logs')
const cucumberReportFileMap = {}
const cucumberReportMap = {}
const jsonIndentLevel = 2
const htmlReportDir = path.resolve(process.cwd(), 'reports')
const screenshotsDir = path.resolve(process.cwd(), 'cypress/screenshots')

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir)
}

getCucumberReportMaps()
generateReport()

function getCucumberReportMaps () {
  filenames = fs_extra.readdirSync(cucumberJsonDir)
  const files = fs_extra.readdirSync(cucumberJsonDir).filter(file => {
    return file.indexOf('.json') > -1
  })
  files.forEach(file => {
    const json = JSON.parse(
      fs_extra.readFileSync(path.join(cucumberJsonDir, file))
    )
    if (!json[0]) {
      return
    }
    const [feature] = json[0].uri.split('/').reverse()
    cucumberReportFileMap[feature] = file
    cucumberReportMap[feature] = json
  })
}

function getBrowserDetails () {
  const stringifyData = JSON.stringify(
    fs.readFileSync('cypress/fixtures/test-run-details.json', 'utf8')
  )
  const parseData = JSON.parse(JSON.parse(stringifyData))
  return parseData
}

function generateReport () {
  const browserData = getBrowserDetails()
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

  report.generate({
    jsonDir: cucumberJsonDir,
    reportPath: htmlReportDir,
    openReportInBrowser: false,
    saveCollectedJSON: true,
    pageTitle: 'dBildungscloud E2E Test Report',
    reportName: 'E2E Cucumber Test Report ' + browserData.time,
    pageFooter: ' ',
    hideMetadata: false,
    displayReportTime: true,
    metadata: {
      browser: {
        name: browserMap(browserData.browser.name),
        version: browserData.browser.version
      },
      device: 'Local test machine',
      platform: {
        name: osMap(browserData.platform)
      }
    },
    customData: {
      title: 'Run info',
      data: [
        { label: 'Project', value: 'dBildungscloud' },
        {
          label: 'Instance 1',
          value: browserData.env.BRB
        },
        {
          label: 'Instance 2',
          value: browserData.env.NBC
        },
        {
          label: 'Instance 3',
          value: browserData.env.DBC
        },
        {
          label: 'Execution Time',
          value: browserData.time.toLocaleString()
        }
      ]
    }
  })
}
