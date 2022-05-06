import Delete_Course from '../../../page/course/pageDeleteCourse'
import Navigation from '../../../page/common/pageNavigation'

const navigation = new Navigation()
const deleteCourse = new Delete_Course()

When('I am in the rooms overview', () => {
  navigation.goToRoomOverview()
})

And('select the room to be deleted', () => {
  deleteCourse.selectTheRoom()
})

Then('I should be able to delete the test room', () => {
  deleteCourse.performDeletion()
})
