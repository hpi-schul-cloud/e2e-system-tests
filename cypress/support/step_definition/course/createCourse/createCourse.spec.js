import Create_Course from '../../../pages/course/pageCreateCourse'
import Navigation from '../../../pages/common/pageNavigation'

const createCourse = new Create_Course()
const navigation = new Navigation()

When ('I am in the rooms overview', () =>{
  navigation.goToRoomOverview()
})

And('I click on FAB to create the course', () => {
  createCourse.clickOnCreateFAB()
})

And('I fill out the course creation form', () => {
  createCourse.fillCourseCreationForm()
})

And('I click on next steps', () => {
  createCourse.clickOnNextSteps()
})

Then('I see the created course on the room overview page', () => {
  createCourse.createdCourseIsVisibleOnOverviewPage()
})
