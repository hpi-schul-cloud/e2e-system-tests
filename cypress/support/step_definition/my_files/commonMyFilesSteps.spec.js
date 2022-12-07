import My_Files_Common from '../../pages/my_files/pageCommonMyFiles'

const myFilesCommon = new My_Files_Common()

When('I go to files overview', () => {
  myFilesCommon.navigateToFilesOverview()
})

When('I go to personal files overview', () => {
  myFilesCommon.navigateToPersonalFilesOverview()
})

When('I go to course files overview', () => {
  myFilesCommon.navigateToCourseFilesOverview()
})

When('I go to team files overview', () => {
  myFilesCommon.navigateToTeamsFilesOverview()
})

When('I go to shared files overview', () => {
  myFilesCommon.navigateToSharedFilesOverview()
})