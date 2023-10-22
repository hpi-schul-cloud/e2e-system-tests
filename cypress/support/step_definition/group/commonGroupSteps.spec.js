const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
import Groups from '../../pages/group/pageGroups'
import Management from '../../pages/admin/pageAdministration';


const groups = new Groups();
const management = new Management();

When('I go to class administration', () => {
	management.navigateToClassAdministration();
})

When('I click on add class', () => {
	groups.clickCreateClass();
})

When('I click on the confirm button', () => {
	groups.clickConfirmCreateClass();
})

When('I confirm managing the class', () => {
	groups.clickConfirmManageClass();
})

Then('I see the new class administration page', () => {
	groups.isNewClassAdministrationPage();
})

Then('I can see the page title', () => {
	groups.seeNewClassPageTitle();
})

Then('I can see the group {string} with source {string}', (groupName, systemName) => {
	groups.newClassTableContainsClass(groupName, systemName);
})

Then('I can see the class {string} without source', (className) => {
	groups.newClassTableContainsClass(className, "");
})

Then('the group {string} has a manage button', (groupName) => {
	groups.groupsHaveAManageButton(groupName);
})

Then('the class {string} has 4 enabled action items', (className) => {
	groups.classesHave4ActiveActionItems(className);
})
