const { When, Then } = require("@badeball/cypress-cucumber-preprocessor")
import Courses from '../../pages/course/pageCourses'

const courses = new Courses()

// EXTERNAL COMMON STEP DEFINITIONS
// =========================
// External defined steps can be found here:
// -----------------------------------------
// --> \step_definition\authentication\loginStep.spec.js
// --> \step_definition\courses\commonCourseSteps.spec.js


Then ('I see section one area on the course create page',() =>{
  courses.seeSectionOneAreaOnCourseCreatePage()
})

Then ('I see section two area on the course create page',() =>{
  courses.seeSectionTwoAreaOnCourseCreatePage()
})

Then ('I select room colour as red',() =>{
  courses.selectRoomColour()
})

Then ('I see teacher {string} is selected by default', (defaultTeacherName) =>{
  courses.seeSelectedDefaultTeacher(defaultTeacherName)
})

Then ('I see substitute teacher selection box', () =>{
  courses.seeSubstituteTeacherSelectionBox()
})

Then ('I see date pickers to start and end the course as per school year',() =>{
  courses.seeDatePickersForCourseInSchoolYear()
})

Then ('I see button to create a course time table container',() =>{
  courses.seeCreateCourseTimeTableContainer()
})

Then('I enter the course title {string}', (newCourseName) => {
  courses.fillCourseCreationForm(newCourseName)
})

Then ('I see class selection box to select the class for the room',() =>{
  courses.seeSelectionBoxToSelectClass()
})

Then ('I see student selection box to select the class for the room',() =>{
  courses.seeSelectioinBoxToSelectStudent()
})

When ('I click on button Next Steps after selecting room participant details',() =>{
  courses.clickOnNextStepButtonOnCourseParticipationDetail()
})

Then ('I see the section three area as the finish page',() =>{
  courses.seeCourseCreationFinishPageSectionThree()
})

When('I click on button Next Steps after entering the room detail in section one', () => {
  courses.clickOnNextStepsBtnAfterEnteringRoomDetails()
})

When('I click on button To Course Overview on the finish page', () => {
  courses.clickOnToCourseOverviewBtn()
})

Then('I edit the title of the room to {string}', (editedRoomName) => {
  courses.editCourseTitle(editedRoomName)
})

Then ('I edit the room description to {string}',(editedRoomDesccription) => {
  courses.editCourseDescription(editedRoomDesccription)
})

When ('I click on the button delete course',() =>{
  courses.clickOnDeleteButtonOnCourseEditPage()
})

Then ('I see the modal to confirm the deletion',() =>{
  courses.seeModalToConfirmCourseDeletion()
})

When ('I click on the button delete on the modal to confirm the course deletion',() =>{
  courses.confirmCourseDeletionOnModal()
})