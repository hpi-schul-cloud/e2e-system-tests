const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
import { COMPILED_REPORTER_ENTRYPOINT } from '@badeball/cypress-cucumber-preprocessor/dist/preprocessor-configuration'
import Courses from '../../pages/course/pageCourses'

const courses = new Courses()

When('I click on check box Activate video conferences in course edit page to enable the BBB tool',()=>{
  courses.clickOnEnableVideoConferenceCheckBoxInCourseEditPage()
})

When('I click on tab Tools',()=>{
  courses.clickOnToolsTabInCourse()
})

Then('I see the BBB Video Conference BigBlueButton in NBC',()=>{
  courses.seeBBBToolInNBC()
})

When('I click on the BBB Video Conference BigBlueButton in NBC',()=>{
  courses.clickOnBBBToolInNBC()
})

Then('I see the modal to start the BBB video conference',()=>{
  courses.seeBBBDialogToStartTheConferenceInNBC()
})

Then('I click on button Cancel in BBB dialog box',()=>{
  courses.cancelBBBToolDialogBoxNBC()
})

Then('I do not see the the card Video Conference BigBlueButton',()=>{
  courses.doNotSeeBBBToolInNBC()
})

Then('I see the disabled check box for Activating video conferences in course',()=>{
  courses.seeDisabledCheckBoxBBBToolInCourseEditPage()
})

When ('I uncheck the box to Activate video conferences in course edit page to enable the BBB tool',()=>{
 courses.uncheckVideoConferenceCheckBoxInCourseEditPage()
})