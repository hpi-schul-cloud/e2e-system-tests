import coursePage from '../../../pages/course/course'

const roomoverviewPage = new coursePage();


When('{string} visit the rooms overview', (userRoles) => {
  roomoverviewPage.navigateRoomOverview();
})

Then('{string} able to create a course in the old course creation page', () => {
  roomoverviewPage.createCourse('Create Course')
})
