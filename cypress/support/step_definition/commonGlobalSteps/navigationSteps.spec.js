import Navigation from '../../pages/common_navigation/pageNavigation'

const navigation = new Navigation()

When('I go to rooms overview', () => {
  navigation.goToRoomsOverview()
})

When('I go to teams overview', () => {
  navigation.goToTeamsOverview()
})

When('I go to tasks overview', () => {
  navigation.goToTasksOverview()
})

When('I go to files overview', () => {
  navigation.goToFilesOverview()
})

When('I go to personal files overview', () => {
  navigation.goToPersonalFilesOverview()
})

When('I go to course files overview', () => {
  navigation.goToCourseFilesOverview()
})

When('I go to team files overview', () => {
  navigation.goToTeamsFilesOverview()
})

When('I go to shared files overview', () => {
  navigation.goToSharedFilesOverview()
})

When('I go to news overview', () => {
  navigation.goToNewsOverview()
})

When('I go to calendar overview', () => {
  navigation.goToCalendarOverview()
})

When('I go to LernStore overview', () => {
  navigation.goToLernStoreOverview()
})

When('I go to AddOns overview', () => {
  navigation.goToAddonsOverview()
})

When('I go to administration page', () => {
  navigation.goToAdministration()
})

When('I go to student administration', () => {
  navigation.goToStudentAdministration()
})

When('I go to teacher administration', () => {
  navigation.goToTeacherAdministration()
})

When('I go to course administration', () => {
  navigation.goTCourseAdministration()
})

When('I go to class administration', () => {
  navigation.goToClassAdministration()
})

When('I go to team administration', () => {
  navigation.goToTeamAdministration()
})

When('I go to school administration', () => {
  navigation.goToSchoolAdministration()
})

When('I go to help section in sidebar', () => {
  navigation.goToHelpSection()
})

When('I go to help articles in sidebar', () => {
  navigation.goToHelpArticles()
})

When('I go to contact in sidebar', () => {
  navigation.goToHelpContact()
})

When('I go to advanced trainings in sidebar', () => {
  navigation.goToAdvancedTrainings()
})

//Then('I would need a final confirmation', () => {
//})
