const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
import Courses from '../../pages/course/pageCourses'

const courses = new Courses()

When('I click on the tools tab', () => {
	courses.navigateToToolsTab();
})

Then('I can see the button to add a tool', () => {
	courses.seeAddNewToolFAB();
})

Then('I cant see the button to add a tool', () => {
	courses.seeNotAddNewToolFAB();
})

When('I click on the button to add a tool', () => {
	courses.clickOnAddNewToolFAB();
})

Then('I can see the tool configuration page title', () => {
	courses.seeContextExternalToolConfiguratorPageTitle();
})

When('I click on the tool configuration selection', () => {
	courses.clickOnToolConfigurationSelect();
})

Then('I can enter {string} as tool name in the selection', toolName => {
	courses.enterAnToolNameInToolConfigurationSelect(toolName);
})

Then('I can see the tool {string} in the tool overview', toolName => {
	courses.seeToolInToolOverview(toolName);
})

Then('I can see the outdated dialog of {string}', toolName => {
	courses.checkIfOutdatedDialogIsOpen(toolName);
})

When('I click on the tool {string}', toolName => {
	courses.clickOnTool(toolName);
})

Then('I can not see tool {string} in the tool selection list', toolName => {
  	courses.checkIfToolIsVisible(toolName);
})

Then('I can see 2 tools', () => {
	courses.seeNumberOfTools();
})

Then('I see the tool {string} is not marked as incomplete', (toolName) => {
	courses.seeToolIsNotMarkedAsIncomplete(toolName)
})

Then('I see the tool {string} is marked as incomplete', (toolName) => {
	courses.seeToolIsMarkedAsIncomplete(toolName)
})

Then('I can see an error dialog', () => {
	courses.checkIfErrorDialogIsOpen();
})

When('I click on the tool edit button of {string}', (toolName) => {
	courses.clickOnToolEditButton(toolName);
})

When('I fill out the required value', () => {
	courses.editMissingToolParameterValue();
})

When('I confirm the update', () => {
	courses.clickOnConfirmButton();
})

When('I click on three dot menu of the tool {string}', (toolName) => {
	courses.clickThreeDotMenuOnTool(toolName);
})
