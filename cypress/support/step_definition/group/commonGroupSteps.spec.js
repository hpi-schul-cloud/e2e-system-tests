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
