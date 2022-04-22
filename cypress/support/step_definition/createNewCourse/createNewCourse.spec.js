import Commom_Logins from '../../page/common_logins/loginsPageObject'
import Create_Course from '../../page/course/createCoursePageObject'

Given('I am logged in as a teacher',()=>{
    const loginAsTeacher = new Commom_Logins()
    loginAsTeacher.brbTeacherLogin()
})

When('I visit the rooms overview',()=>{
    const createCourse= new Create_Course()
    createCourse.goToRoomOverview()
    createCourse.clickOnCreateFAB()
})

Then('I am able to create a course in the old course creation page',()=>{
    const courseCreation= new Create_Course()
    courseCreation.fillCourseCreationForm()
    courseCreation.clickOnNextSteps()
    courseCreation.courseIsCreatedAndVisibleOnOverviewPage()
})

