const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
import Classes from '../../pages/class_management/pageClasses'
import Management from '../../pages/admin/pageAdministration';


const classes = new Classes();
const management = new Management();

When('I go to class administration', () => {
	management.navigateToClassAdministration();
})

When('I go to new class administration page', () => {
	management.navigateToNewClassAdministration();
})

When('I click on add class', () => {
	classes.clickCreateClass();
})

When('I click on the confirm button', () => {
	classes.clickConfirmCreateClass();
})

When('I confirm managing the class', () => {
	classes.clickConfirmManageClass();
})

Then('I see the new class administration page', () => {
	classes.isNewClassAdministrationPage();
})

Then('I can see the page title', () => {
	classes.seeNewClassPageTitle();
})

Then('I can see the group {string} with source {string}', (groupName, systemName) => {
	classes.seeNewClassTableContainsClass(groupName, systemName);
})

Then('I can see the class {string} without source', (className) => {
	classes.seeNewClassTableContainsClass(className, "");
})

Then('I can see the manage button for group {string}', (groupName) => {
	classes.seeGroupsHaveAManageButton(groupName);
})

Then('I can see 4 enabled action items for class {string}', (className) => {
	classes.seeClassesHave4ActiveActionItems(className);
})

Then('I can see 5 columns in the table', () => {
	classes.seeTableHas5Columns();
})

Then('I can see 3 tabs', () => {
	classes.see3Tabs();
})
