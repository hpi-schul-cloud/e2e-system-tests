import Course from '../../../pages/courses/pageCourse'

const course = new Course()

// Scenario: Adding a class to a course

//Given ('I am logged in as a 'teacher' at 'brb'')
//step defined --> \step_definition\commonGlobalSteps\loginSteps.spec.js

//When ('I go to rooms overview')
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

//And ('I go to room 'Kurs Mathe'')
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

//Then ('I can see room page 'Mathe'')
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

//When I open course edit page
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

//Then I can see course edit page
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

When('I choose a class', () => {
  course.selectClassForCourse()
})

And('I click on save changes', () => {
  course.submitChanges()
})

//Then I can see room page 'Mathe'
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

//When I open course edit page
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

//Then I can see course edit page
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

And('class is in field classes', () => {
  course.checkAddedClassIsInFieldClasses()
})

And('students of the class are in field students', () => {
  course.checkStudentsAreInFieldStudents()
})


//Scenario: Removing classes from a course

//Given ('I am logged in as a 'teacher' at 'brb'')
//step defined --> \step_definition\commonGlobalSteps\loginSteps.spec.js

//When ('I go to rooms overview')
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

//And ('I go to room 'Kurs Mathe'')
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

//Then ('I can see room page 'Mathe'')
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

//When ('I open course edit page')
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js
//

//Then ('I can see course edit page')
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js


When('I remove all classes', () => {
  course.removeClassesFromCourse()
})

// And('I click on save changes', () => {
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

//Then ('I can see room page 'Mathe'')
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

//When ('I open course edit page')
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

//Then ('I can see course edit page')
//step defined --> \step_definition\courses\commonCourseRelatedSteps.spec.js

And('there are no classes in the classes field', () => {
  course.checkNoClassesInFieldClasses()
})

And('there are no students in the students field', () => {
  course.checkNoStudentsInFieldStudents()
})