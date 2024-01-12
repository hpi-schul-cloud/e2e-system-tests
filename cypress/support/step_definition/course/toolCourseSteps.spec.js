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

Then('I can see the tool {string} in the tool overview', (toolName) => {
	courses.checkIfToolIsVisibleInToolTable(toolName)
})

Then('I can not see the tool {string} in the tool overview', (toolName) => {
	courses.checkIfToolIsNotVisibleInToolTable(toolName)
})

Then('I can see the error dialog of {string}', toolName => {
	courses.checkIfOutdatedDialogIsOpen(toolName);
})

When('I can launch the tool {string}', toolName => {
	courses.clickOnTool(toolName);
})

When('I can launch the tool {string} and go back', toolName => {
	courses.clickOnToolAndReturn(toolName);
})

Then('I can check if tool {string} is not marked as deactivated in tools table', (toolName)=>{
	courses.checkIfToolIsLaunchable(toolName)
})

Then('I can check if tool {string} is marked as deactivated in tools table', (toolName)=>{
	courses.checkIfToolIsNotLaunchable(toolName)
})

Then('I can not select tool {string} in available tools', toolName => {
  	courses.checkIfToolIsNotVisibleInSelection(toolName)
})

Then('I can see tool {string} in Selection',(toolName)=> {
		courses.checkIfToolIsVisibleInSelection(toolName)
})

Then('I can select tool {string} in available tools', (toolName)=>{
	courses.selectTool(toolName)
})

Then('I can fill out context parameter', () => {
	courses.fillOutContextParameter()
})

When('I click on add tool',(toolName)=> {
	courses.clickOnSaveTool()
})

When('I click on three dot menu of the tool {string}',(toolName)=>{
	courses.clickThreeDotMenuOnTool(toolName)
})

When('I click on delete button of the tool {string}', (toolName) => {
	courses.clickOnDeleteButton(toolName)
})

Then('I can see the deletion dialog and confirm Button', ()=> {
	courses.checkConfirmButtonOnDeletionDialog()
})


