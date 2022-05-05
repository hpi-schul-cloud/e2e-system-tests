import Commom_Logins from '../../../page/common/pageLogins'
import Delete_Course from '../../../page/course/pageDeleteCoursePageObject'
import Room_Overview from '../../../page/common/pageGoToRoomOverview'

const commonLogin = new Commom_Logins()
const roomOverview = new Room_Overview()
const deleteCourse = new Delete_Course()


Given('I am logged in as a teacher', () => {
    commonLogin.loginAsBrbTeacher()
})

When('I am in the rooms overview', () => {
    roomOverview.goToRoomOverview()
})

And('select the room to be deleted', () => {
    deleteCourse.selectTheRoom()
})

Then('I should be able to delete the test room', () => {
    deleteCourse.performDeletion()
})