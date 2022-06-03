import Edit_Course from '../../../pages/course/pageEditCourse'
import Navigation from '../../../pages/common_global/pageNavigation'
import Common_Course from '../../../pages/course/pageCommonCourse'

const editCourse = new Edit_Course()
const navigation = new Navigation()
const commonCourse = new Common_Course()


// Scenario: Adding a class to a course

//Given ('I am logged in as a 'teacher' at 'brb'') is defined in the location --> '/step_definition/commonGlobalSteps/loginSteps.spec.js'

When('I go to rooms overview', () => {
  navigation.goToRoomsOverview()
})

And('I go to room board', () => {
  commonCourse.goToRoomBoard('Kurs Mathe')  //Pass 'Ma' as Avatar Intials of the room named 'Mathe'
})

Then('I can see room page', () => {
  commonCourse.showRoomPage('Mathe')
})

When('I open course edit page', () => {
  editCourse.openCourseEditPage()
})

Then('I can see course edit page', () => {
  editCourse.showCourseEditPage()
})

When('I choose a class', () => {
  editCourse.selectClassForCourse()
})

And('I click on save changes', () => {
  editCourse.submitChanges()
})

Then('I can see room page', () => {
  course.showRoomPage('Mathe')
})

When('I open course edit page', () => {
  editCourse.openCourseEditPage()
})

Then('I can see course edit page', () => {
  editCourse.showCourseEditPage()
})

And('class is in field classes', () => {
  editCourse.checkAddedClassIsInFieldClasses()
})

And('students of the class are in field students', () => {
  editCourse.checkStudentsAreInFieldStudents()
})


//Scenario: Removing classes from a course

//Given ('I am logged in as a 'teacher' at 'brb'') is defined in the location --> '/step_definition/commonGlobalSteps/loginSteps.spec.js'

When('I go to rooms overview', () => {
  navigation.goToRoomsOverview()
})

And('I go to room board', () => {
  commonCourse.goToRoomBoard('Kurs Mathe')  //Pass 'Ma' Avatar Intials of the room named 'Mathe'
})

Then('I can see room page', () => {
  course.showRoomPage('Mathe')
})

When('I open course edit page', () => {
  editCourse.openCourseEditPage()
})

Then('I can see course edit page', () => {
  editCourse.showCourseEditPage()
})

When('I remove all classes', () => {
  editCourse.removeClassesFromCourse()
})

And('I click on save changes', () => {
  editCourse.submitChanges()
})

Then('I can see room page', () => {
  course.showRoomPage('Mathe')
})

When('I open course edit page', () => {
  editCourse.openCourseEditPage()
})

Then('I can see course edit page', () => {
  editCourse.showCourseEditPage()
})

And('there are no classes in the classes field', () => {
  editCourse.checkNoClassesInFieldClasses()
})

And('there are no students in the students field', () => {
  editCourse.checkNoStudentsInFieldStudents()
})