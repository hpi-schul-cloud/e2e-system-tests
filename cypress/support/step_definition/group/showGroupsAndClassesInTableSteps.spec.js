const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
import Groups from '../../pages/group/pageGroups';

const groups = new Groups()

When('I click the manage button', () => {
	groups.clickManageClassButton()
})

Then('I can see the manage classes page', () => {
	groups.isManageClassPage()
})

When('I click the cancel manage class button', () => {
	groups.clickCancelButton()
})

Then('I can see the cancel modal', () => {
	groups.isCancelModal()
})

When('I click the confirmation button on the cancel modal', () => {
	groups.clickConfirmButton()
})

When('I click the edit button', () => {
	groups.clickEditClassButton()
})

Then('I can see the edit classes page', () => {
	groups.isEditClassPage()
})

When('I click the cancel edit class button', () => {
	groups.clickCancelButton()
})

When('I click in the name suffix text element', () => {
	groups.clickNameSuffixField()
})

Then('I can click on the save changes button', () => {
	groups.clickSaveChangesButton()
})
