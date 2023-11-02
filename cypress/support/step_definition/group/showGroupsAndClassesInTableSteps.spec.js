const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
import Groups from '../../pages/group/pageGroups';

const groups = new Groups()

When('I click the manage button', () => {
	groups.clickManageClassButton();
})

Then('I can see the manage classes page', () => {
	groups.isManageClassPage();
})

When('I click the cancel manage class button', () => {
	groups.clickCancelButton();
})

Then('I can see the cancel modal', () => {
	groups.isCancelModal();
})

When('I click the confirmation button on the cancel modal', () => {
	groups.clickConfirmButton();
})

When('I click the edit button', () => {
	groups.clickEditClassButton();
})

Then('I can see the edit classes page', () => {
	groups.isEditClassPage();
})

When('I click the cancel edit class button', () => {
	groups.clickCancelButton();
})

When('I click in the name suffix text element', () => {
	groups.clickNameSuffixField();
})

Then('I can click on the save changes button', () => {
	groups.clickSaveChangesButton();
})

When('I click the create successor button', () => {
	groups.clickCreateSuccessorButton();
})

Then('I can see the create successor page', () => {
	groups.isCreateSuccessorPage();
})

When('I click the cancel create successor button', () => {
	groups.clickCancelButton();
})

When('I confirm creating the successor', () => {
	groups.clickConfirmSuccessor();
})
Then('the create successor button of the original class is disabled', () => {
	groups.isSuccessorButtonDisabled();
})

When('I click the delete button', () => {
	groups.clickDeleteButton();
})

Then('I can see the delete modal', () => {
	groups.isDeleteDialog();
})

When('I click the cancel button on the delete modal', () => {
	groups.clickCancelDeleteDialogButton();
})

When('I click the confirmation button on the delete modal', () => {
	groups.clickConfirmDeleteDialogButton();
})
