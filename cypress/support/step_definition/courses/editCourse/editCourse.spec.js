import Course from '../../../pages/courses/pageCourse'

const course = new Course()



// Scenario: Adding a class to a course

//Given ('I am logged in as a 'teacher' at 'brb'') is defined in the location --> '/step_definition/commonGlobalSteps/loginSteps.spec.js'


When('I choose a class', () => {
  course.selectClassForCourse()
})

When('I remove all classes', () => {
  course.removeClassesFromCourse()
})

And('I click on save changes', () => {
  course.submitChanges()
})

And('class is in field classes', () => {
  course.checkAddedClassIsInFieldClasses()
})

And('students of the class are in field students', () => {
  course.checkStudentsAreInFieldStudents()
})


//Scenario: Removing classes from a course

//Given ('I am logged in as a 'teacher' at 'brb'') is defined in the location --> '/step_definition/commonGlobalSteps/loginSteps.spec.js'


And('there are no classes in the classes field', () => {
  course.checkNoClassesInFieldClasses()
})

And('there are no students in the students field', () => {
  course.checkNoStudentsInFieldStudents()
})