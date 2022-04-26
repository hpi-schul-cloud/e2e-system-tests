import Common_Logins from '../../../page/common/logins'
import Delete_Course from '../../../page/course/deleteCoursePageObject'
import Room_Overview from '../../../page/common/goToRoomOverview'


Given('I am logged in as a teacher', () => {
    const loginAsTeacher = new Common_Logins()
    loginAsTeacher.brbTeacherLogin()
})

When('I am in the rooms overview', () => {
    const navigateToRoomOverview = new Room_Overview()
    navigateToRoomOverview.goToRoomOverview()
})

And('select the room to be deleted', () => {
    const selectCourseToDelete = new Delete_Course()
    selectCourseToDelete.selectTheRoom()
})

Then('I should be able to delete the test room', () => {
    const deleteSelectedCourse = new Delete_Course()
    deleteSelectedCourse.performDeletion()
})