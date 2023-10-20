const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
import Groups from '../../pages/group/pageGroups'
import Management from '../../pages/admin/pageAdministration';


const groups = new Groups()
const management = new Management()

When('I go to class administration', () => {
	management.navigateToClassAdministration()
})

When('I click on add class', () => {
	groups.clickCreateClass()
})

When('I click on the confirm button', () => {
	groups.clickConfirmCreateClass()
})

When('I confirm managing the class', () => {
	groups.clickConfirmManageClass()
})

Then('I see the new class administration page', () => {
	groups.isNewClassAdministrationPage()
})

Then('I can see the page title', () => {
	groups.seeNewClassPageTitle()
})

Then('I can see at least 1 class and 1 group in the table', () => {
	groups.newClassTableContainsClassesAndGroups()
})

Then('the group does not have any action icons', () => {
	groups.groupsHaveNoActionIcons()
})

Then('the class has 4 enabled action icons', () => {
	groups.classesHave4ActiveActionIcons()
})
