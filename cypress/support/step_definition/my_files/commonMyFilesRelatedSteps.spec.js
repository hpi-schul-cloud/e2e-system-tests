import My_Files_Common from './../../pages/my_files/pageCommonMyFiles'

const myFilesCommon = new My_Files_Common()


When('I go to files overview', () => {
  myFilesCommon.goToFilesOverview()
  })

  When('I go to personal files overview', () => {
    myFilesCommon.goToPersonalFilesOverview()
  })

  When('I go to course files overview', () => {
    myFilesCommon.goToCourseFilesOverview()
  })

  When('I go to team files overview', () => {
    myFilesCommon.goToTeamsFilesOverview()
  })

  When('I go to shared files overview', () => {
    myFilesCommon.goToSharedFilesOverview()
  })
