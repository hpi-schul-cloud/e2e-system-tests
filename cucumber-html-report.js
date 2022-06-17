const report = require('multiple-cucumber-html-reporter')
const fs = require('fs')
const fs_extra = require('fs-extra')
const path = require('path')

const cucumberJsonDir = path.resolve(process.cwd(), 'cypress/cucumber-json')
/*const cucumberReportFileMap = {}
const cucumberReportMap = {}
const jsonIndentLevel = 2*/
const htmlReportDir = path.resolve(process.cwd(), 'cypress/reports')
/*const screenshotsDir = path.resolve(process.cwd(), 'cypress/screenshots')

getCucumberReportMaps()
addScreenshots()
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
    //console.log(json)
    const [feature] = json[0].uri.split('/').reverse()
    cucumberReportFileMap[feature] = file
    cucumberReportMap[feature] = json
    console.log(cucumberReportMap[feature][0])
  })
}

function addScreenshots () {
  if (fs_extra.existsSync(screenshotsDir)) {
    //only if screenshots exists
    const prependPathSegment = pathSegment => location =>
      path.join(pathSegment, location)

    const readdirPreserveRelativePath = location =>
      fs_extra.readdirSync(location).map(prependPathSegment(location))

    const readdirRecursive = location =>
      readdirPreserveRelativePath(location).reduce(
        (result, currentValue) =>
          fs_extra.statSync(currentValue).isDirectory()
            ? result.concat(readdirRecursive(currentValue))
            : result.concat(currentValue),
        []
      )

    const screenshots = readdirRecursive(path.resolve(screenshotsDir)).filter(
      file => {
        return file.indexOf('.png') > -1
      }
    )

    const featuresList = Array.from(
      new Set(screenshots.map(x => x.match(/[\w-_.]+.feature/g)[0]))
    )

    featuresList.forEach(feature => {
      screenshots.forEach(screenshot => {
        const regex = /(?<=--\ ).+?((?=\ (example\ #\d+))|(?=\ (failed))|(?=.\w{3}))/g
        const [scenarioName] = screenshot.match(regex)

        var filename = screenshot.replace(/^.*[\\\/]/, '')

        const featureSelected = cucumberReportMap[feature][0]

        let myScenarios = []

        cucumberReportMap[feature][0].forEach(item => {
          console.log(item)
          let fullFileName = featureSelected.name + ' -- ' + item.name
          if (filename.includes(fullFileName)) {
            myScenarios.push(item)
          }
        })

        if (!myScenarios) {
          return
        }
        let foundFailedStep = false
        myScenarios.forEach(myScenario => {
          if (foundFailedStep) {
            return
          }
          let myStep
          if (screenshot.includes('(failed)')) {
            myStep = myScenario.steps.find(
              step => step.result.status === 'failed'
            )
          } else {
            myStep = myScenario.steps.find(
              step => step.result.status === 'passed'
            )
          }
          if (!myStep) {
            return
          }
          const data = fs_extra.readFileSync(path.resolve(screenshot))
          if (data) {
            const base64Image = Buffer.from(data, 'binary').toString('base64')
            if (!myStep.embeddings) {
              myStep.embeddings = []
              myStep.embeddings.push({
                data: base64Image,
                mime_type: 'image/png',
                name: myStep.name
              })
              foundFailedStep = true
            }
          }
        })
        //Write JSON with screenshot back to report file.
        fs_extra.writeFileSync(
          path.join(cucumberJsonDir, cucumberReportFileMap[feature]),
          JSON.stringify(cucumberReportMap[feature], null, jsonIndentLevel)
        )
      })
    })
  }
}
*/

generateReport()

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

function generateReport () {
  if (!fs_extra.existsSync(cucumberJsonDir)) {
    console.warn('REPORT CANNOT BE CREATED!')
  } else {
    fs.readFile('cypress/.run/results.json', function read (err, data) {
      if (err) {
        throw err
      }
      let runInfos = JSON.parse(data)
      report.generate({
        jsonDir: cucumberJsonDir,
        reportPath: htmlReportDir,
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
              value: runInfos.config.env.BRB || runInfos.config.env.NBC
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
  }
}
