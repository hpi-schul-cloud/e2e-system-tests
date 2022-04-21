import coursePage from "../../../pages/course/course"

const deleteCourse = new coursePage()

Then('{string} should be able to delete the course', (userRoles) => {
  deleteCourse.deleteCourse('Create Course')
})
