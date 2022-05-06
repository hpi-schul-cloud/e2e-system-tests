import Common_Logins from '../../../page/common/pageLogins'
import Delete_Course from '../../../page/course/pageDeleteCoursePageObject'
import Navigation from '../../../page/common/pageNavigation'

const commonLogin = new Common_Logins()
const navigation = new Navigation()
const deleteCourse = new Delete_Course()


Given('I am logged in as a teacher', () => {
    commonLogin.loginAsBrbTeacher()
})

When('I am in the rooms overview', () => {
    navigation.goToRoomOverview()
})

And('select the room to be deleted', () => {
    deleteCourse.selectTheRoom()
})

Then('I should be able to delete the test room', () => {
    deleteCourse.performDeletion()
})