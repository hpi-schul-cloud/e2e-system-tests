import Edit_Course from '../../../pages/course/pageEditCourse'
import { And, When } from 'cypress-cucumber-preprocessor/steps'

const editCourse = new Edit_Course()

And('I click on course', () => {
    editCourse.clickOnCourse()
})

Then('I can see course page', () => {
    editCourse.showCoursePage()
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

When('I remove all classes', () => {
    editCourse.removeClassesFromCourse()
})

When('I click on save changes', () => {
    editCourse.submitChanges()
})

And('class is in field classes', () => {
    editCourse.checkAddedClassIsInFieldClasses()
})

And('students of the class are in field students', () => {
    editCourse.checkStudentsAreInFieldStudents()
})

And('there are no classes in the classes field', () => {
    editCourse.checkNoClassesInFieldClasses()
})

And('there are no students in the students field', () => {
    editCourse.checkNoStudentsInFieldStudents()
})