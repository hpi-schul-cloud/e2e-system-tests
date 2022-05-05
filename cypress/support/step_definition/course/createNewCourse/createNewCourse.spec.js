
import Commom_Logins from '../../../page/common/pageLogins'
import Create_Course from '../../../page/course/pageCreateCoursePageObject'
import Room_Overview from '../../../page/common/pageGoToRoomOverview'

const commonLogin = new Commom_Logins()
const roomOverview = new Room_Overview()
const createCourse = new Create_Course()


Given('I am logged in as a teacher', () => {
    commonLogin.loginAsBrbTeacher()
})

When('I visit the rooms overview', () => {
    roomOverview.goToRoomOverview()

})

And('I click on FAB to create the course', () => {
    createCourse.clickOnCreateFAB()
})

And('I fill out the course creation form', () => {
    createCourse.fillCourseCreationForm()
})

And('I click on next steps', () => {
    createCourse.clickOnNextSteps()
})

Then('I am created a course visible on the room overview page', () => {
    createCourse.createdCourseIsVisibleOnOverviewPage()
})



