import Delete_Course from '../../../pages/course/pageDeleteCourse'

const deleteCourse = new Delete_Course()

And('select the room to be deleted', () => {
  deleteCourse.selectTheRoom()
})

Then('I should be able to delete the test room', () => {
  deleteCourse.performDeletion()
})
