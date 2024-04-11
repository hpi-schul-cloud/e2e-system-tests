const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
import Courses from '../../pages/course/pageCourses'

const courses = new Courses()

When('I click on old tools tab',()=>{
  courses.clickOnOldToolsTabInCourse()
})

Then('I see the BBB Video Conference BigBlueButton in NBC',()=>{
  courses.seeBBBInToolTabNBC()
})

When('I click on the BBB Video Conference BigBlueButton in NBC',()=>{
  courses.clickOnBBBInToolTabInNBC()
})

Then('I see the modal to start the BBB video conference',()=>{
  courses.seeBBBDialogBoxToStartTheConferenceInNBC()
})

Then('I click on button Cancel in BBB dialog box',()=>{
  courses.cancelBBBToolDialogBoxNBC()
})

Then('I do not see the the card Video Conference BigBlueButton',()=>{
  courses.doNotSeeBBBInToolTabNBC()
})

Then('I see the disabled check box for Activating video conferences in page Edit course',()=>{
  courses.seeDisabledCheckBoxForBBBToolInCourseEditPage()
})

When ('I uncheck the checkbox to Activate video conferences in page Edit course to enable the BBB tool',()=>{
 courses.uncheckVideoConferenceCheckBoxInCourseEditPage()
})

Then ('I see tools tab in course',()=>{
  courses.seeToolsTabInCourse()
})

When ('I click on button Add new tool',()=>{
  courses.clickOnAddNewLtiToolButton()
})

Then ('I see list of tools for course',()=>{
  courses.seeToolsListForCourse()
})

When ('I click on the BBB Video Conference BigBlueButton in DBC or BRB',()=>{
  courses.clickOnBBBInToolTabInDBCBRB()
})

Then ('modal content appears for confirmation',()=>{
  courses.appearsModalContentForConfirmation()
})

When ('I click on button Add in modal content',()=>{
  courses.clickOnButtonAdd()
})

Then ('I see Videoconference BigBlueButton added in tools tab',()=>{
  courses.seeBBBInToolTabDBCBRB()
})

When ('I click on the BBB Video Conference BigBlueButton in course',()=>{
  courses.clickOnBBBInCourse()
})

Then ('I see the modal to start the BBB video conference in DBC or BRB',()=>{
  courses.seeModalStartBBBVideoConference()
})

Then ('I click on button Cancel in BBB modal',()=>{
  courses.clickCancelButttonInBBB()
})

When ('I click on icon Deleten with Videoconference BigBlueButton',()=>{
  courses.clickIconDeletenBBBVideoconference()
})

Then ('I see modal content for confirmation of deletion',()=>{
  courses.seeModalDeletionBBBVideoConference()
})

When ('I click on button Delete in BBB modal',()=>{
  courses.clickDeleteButttonInBBB()
})

Then ('I do not see Videoconference BigBlueButton in tools tab',()=>{
  courses.doNotSeeBBBInToolTabDBCBRB()
})

Then ("I do not see BBB Video Conference in DBC or BRB",()=>{
	courses.doNotSeeBBBInDBCBRB()
})