import Navigation from '../../pages/common/pageNavigation'
import Course from '../../pages/course/pageCourse'

const navigation = new Navigation()
const course = new Course()

When ('I am in the rooms overview', () =>{
  navigation.goToRoomOverview()
})

And('I go to a room', () => {
  course.selectTheRoom()
})

And('I go to tools tab', () => {
  course.goToTools()
})

And('I click add new tool button', () => {
  course.addNewTool()
})

Then('I see the created course on the room overview page', () => {
  course.createdCourseIsVisibleOnOverviewPage()
})

Then('I can add BigBlueButton to the room', () => {
  course.canAddBigBlueButton()
})

Then('I can not add BigBlueButton to the room', () => {
  course.canNotAddBigBlueButton()
})