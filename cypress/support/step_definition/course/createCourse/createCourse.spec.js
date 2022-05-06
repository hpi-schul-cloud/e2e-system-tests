import Common_Logins from '../../../page/common/pageLogins'
import Create_Course from '../../../page/course/pageCreateCourse'
import Navigation from '../../../page/common/pageNavigation'

const commonLogin = new Common_Logins()
const navigation = new Navigation()
const createCourse = new Create_Course()

Given('I am logged in as a teacher', () => {
    commonLogin.loginAsBrbTeacher()
})

When('I visit the rooms overview', () => {
    navigation.goToRoomOverview()
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

Then('I see the created course on the room overview page', () => {
    createCourse.createdCourseIsVisibleOnOverviewPage()
})