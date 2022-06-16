const report = require('multiple-cucumber-html-reporter')

let osMap = () => {
  if (process.platform === 'win32') {
    return 'windows'
  } else if (process.platform === 'darwin') {
    return 'osx'
  } else if (process.platform === 'linux') {
    return 'linux'
  } else {
    return 'undefined'
  }
}

let time = () => {
  let date_instance = new Date()
  date_instance.getTime()
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  let year = date_instance.getFullYear()
  let month = months[date_instance.getMonth()]
  let date = date_instance.getDate()
  let hour = date_instance.getHours()
  let min = date_instance.getMinutes()
  let sec = date_instance.getSeconds()
  let time =
    date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec
  return time
}

report.generate({
  jsonDir: 'cypress/cucumber-json',
  reportPath: 'cypress/reports',
  openReportInBrowser: false,
  saveCollectedJSON: true,
  pageTitle: 'dBildungscloud E2E Test Report',
  reportName: 'E2E Cucumber Test Report ' + time(),
  pageFooter: ' ',
  hideMetadata: false,
  displayReportTime: true,
  metadata: {
    platform: {
      name: osMap()
    },
    device: 'Test machine',
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'dBildungscloud' },
      { label: 'Instance', value: process.env.NODE_ENV || 'DEV'},
      { label: 'Execution Time', value: time() }
    ]
  }
})
