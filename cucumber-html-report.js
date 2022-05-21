const report = require('multiple-cucumber-html-reporter')

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
  openReportInBrowser: true,
  saveCollectedJSON: true,
  pageTitle: 'dBildungscloud E2E Test Report',
  reportName: 'E2E Test Report ' + time(),
  pageFooter: ' ',
  displayReportTime: true,
  metadata: {
    browser: {
      name: 'firefox',
      version: '99'
    },
    device: 'Local machine',
    platform: {
      name: 'osx',
      version: '12.3.1'
    }
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'dBildungscloud' },
      { label: 'Release', value: '27.14' },
      { label: 'Execution Time', value: time() }
    ]
  }
})
