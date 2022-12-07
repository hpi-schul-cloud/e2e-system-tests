import Files from '../../pages/files/pageCommonFiles'

const files = new Files()

When('I go to files overview', () => {
  files.navigateToFilesOverview()
})

And('I go to personal files overview', () => {
  files.navigateToPersonalFilesOverview()
})

When('I go to course files overview', () => {
  files.navigateToCourseFilesOverview()
})

When('I go to team files overview', () => {
  files.navigateToTeamsFilesOverview()
})

When('I go to shared files overview', () => {
  files.navigateToSharedFilesOverview()
})

//Then('I would need a final confirmation', () => {
//})
