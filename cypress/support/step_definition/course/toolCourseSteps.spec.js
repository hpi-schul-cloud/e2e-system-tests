const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
import Courses from '../../pages/course/pageCourses'

const courses = new Courses()

When('I click on the tools tab', () => {
    courses.navigateToToolsTab()
})

Then('I can see the button to add a tool', () => {
    courses.seeAddNewToolFAB()
})

Then('I cant see the button to add a tool', () => {
    courses.seeNotAddNewToolFAB()
})

When('I click on the button to add a tool', () => {
    courses.clickOnAddNewToolFAB()
})

Then('I can see the tool configuration page title', () => {
    courses.seeContextExternalToolConfiguratorPageTitle()
})


When('I click on the tool configuration selection', () => {
    courses.clickOnToolConfigurationSelect()
})

Then('I can enter {string} as tool name in the selection', toolName => {
    courses.enterAnToolNameInToolConfigurationSelect(toolName)
})

Then('I can not see tool {string} in the tool selection list', toolName => {
    courses.checkIfToolIsVisible(toolName)
})


