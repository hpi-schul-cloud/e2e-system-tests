import Courses from '../../pages/course/pageCourses'

const courses = new Courses()

//Scenario: teacher is able to search for a course and find it

//Given ('I am logged in as a 'teacher' at 'brb'')
//step defined -->\step_definition\authentication\loginStep.spec.js

//When ('I go to rooms overview')
//step defined --> \step_definition\courses\commonCourseSteps.spec.js

When ('I enter the course name {string} into the search field',(roomName)=>{
    courses.searchForARoom(roomName)
})

// Then('I see the course {string} on the room overview page')
//step defined --> \step_definition\courses\commonCourseSteps.spec.js


//Scenario: teacher is able to search for a course and DO NOT find it

//Given ('I am logged in as a 'teacher' at 'brb'')
//step defined -->\step_definition\authentication\loginStep.spec.js

//When ('I go to rooms overview')
//step defined --> \step_definition\courses\commonCourseSteps.spec.js

When ('I enter the course name {string} into the search field',(roomName) =>{
    courses.searchForARoom(roomName)
})

// Then('I do not see the course {string} on the room overview page')
//step defined --> \step_definition\courses\commonCourseSteps.spec.js


//Scenario: student is able to search for a course and find it

//Given ('I am logged in as a 'student' at 'brb'')
//step defined -->\step_definition\authentication\loginStep.spec.js

//When ('I go to rooms overview')
//step defined --> \step_definition\courses\commonCourseSteps.spec.js

When ('I enter the course name {string} into the search field',(roomName) =>{
    courses.searchForARoom(roomName)
})

// Then('I see the course {string} on the room overview page')
//step defined --> \step_definition\courses\commonCourseSteps.spec.js

//Scenario: student is able to search for a course and DO NOT find it

//Given ('I am logged in as a 'student' at 'brb'')
//step defined -->\step_definition\authentication\loginStep.spec.js

//When ('I go to rooms overview')
//step defined --> \step_definition\courses\commonCourseSteps.spec.js

When ('I enter the course name {string} into the search field',(roomName) =>{
    courses.searchForARoom(roomName)
})

// Then('I do not see the course {string} on the room overview page')
//step defined --> \step_definition\courses\commonCourseSteps.spec.js