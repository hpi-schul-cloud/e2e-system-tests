import Navigation from '../../pages/common/pageNavigation'
import Course from '../../pages/course/pageCourse'

const navigation = new Navigation()
const course = new Course()

When ('I am in the rooms overview', () =>{
  navigation.goToRoomOverview()
})

And('I go to room {string}', (room_name) => {
  course.selectTheRoom(room_name)
})

Then('I can see room page {string}', (room_name) => {
  course.showRoomPage(room_name)
})

And('I go to tools tab', () => {
  course.goToTools()
})

And('I click add new tool button', () => {
  course.addNewTool()
})

Then('I see the course {string} on the room overview page', (course_name) => {
  course.courseIsVisibleOnOverviewPage(course_name)
})

Then('I do not see the course {string} on the room overview page', (course_name) => {
  course.courseIsNotVisibleOnOverviewPage(course_name)
})

Then('I can add BigBlueButton to the room', () => {
  course.canAddBigBlueButton()
})

Then('I can not add BigBlueButton to the room', () => {
  course.canNotAddBigBlueButton()
})