import Delete_Course from '../../../pages/course/pageDeleteCourse'

const deleteCourse = new Delete_Course()

Then('I should be able to delete the test room', () => {
  deleteCourse.performDeletion()
})
