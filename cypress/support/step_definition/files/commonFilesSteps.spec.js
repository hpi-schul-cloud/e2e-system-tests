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

When('I go to news overview', () => {
  files.goToNewsOverview()
})

When('I go to calendar overview', () => {
  files.goToCalendarOverview()
})

When('I go to LernStore overview', () => {
  files.goToLernStoreOverview()
})

When('I go to AddOns overview', () => {
  files.goToAddonsOverview()
})

When('I go to administration page', () => {
  files.goToAdministration()
})

And('I go to student administration', () => {
  files.goToStudentAdministration()
})

When('I go to teacher administration', () => {
  files.goToTeacherAdministration()
})

When('I go to course administration', () => {
  files.goTCourseAdministration()
})

When('I go to class administration', () => {
  files.goToClassAdministration()
})

When('I go to team administration', () => {
  files.goToTeamAdministration()
})

When('I go to school administration', () => {
  files.goToSchoolAdministration()
})

When('I go to help section in sidebar', () => {
  files.goToHelpSection()
})

When('I go to help articles in sidebar', () => {
  files.goToHelpArticles()
})

When('I go to contact in sidebar', () => {
  files.goToHelpContact()
})

When('I go to advanced trainings in sidebar', () => {
  files.goToAdvancedTrainings()
})

//Then('I would need a final confirmation', () => {
//})
