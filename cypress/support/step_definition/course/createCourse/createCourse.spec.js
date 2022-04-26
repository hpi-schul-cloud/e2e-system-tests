
import Common_Logins from '../../../page/common/logins'
import Create_Course from '../../../page/course/createCoursePageObject'
import Room_Overview from '../../../page/common/goToRoomOverview'

Given('I am logged in as a teacher', () => {
    const loginAsTeacher = new Common_Logins()
    loginAsTeacher.brbTeacherLogin()
})

When('I visit the rooms overview', () => {
    const roomOverviewVisit = new Room_Overview()
    roomOverviewVisit.goToRoomOverview()

})

And('I click on FAB to create the course', () => {
    const createCourse = new Create_Course()
    createCourse.clickOnCreateFAB()
})

And('I fill out the course creation form', () => {
    const fillUpForm = new Create_Course()
    fillUpForm.fillCourseCreationForm()
})

And('I click on next steps', () => {
    const nextStep = new Create_Course()
    nextStep.clickOnNextSteps()
})

Then('I am created a course visible on the room overview page', () => {
    const courseCreation = new Create_Course()
    courseCreation.courseIsCreatedAndVisibleOnOverviewPage()
})



