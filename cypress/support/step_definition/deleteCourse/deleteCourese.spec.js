import Commom_Logins from '../../page/common_logins/loginsPageObject'
import Delete_Course from '../../page/course/deleteCoursePageObject'

Given('I am logged in as a teacher', () => {
    const loginAsTeacher = new Commom_Logins()
    loginAsTeacher.brbTeacherLogin()
})

When('I am in the rooms overview and select the course', () => {
    const selectCourseToDelete= new Delete_Course()
    selectCourseToDelete.slectTheCourse()

    
})

Then('I should be able to delete the test room', () => {
    const deleteSelectedCourse= new Delete_Course()
    deleteSelectedCourse.performDeletion()
})