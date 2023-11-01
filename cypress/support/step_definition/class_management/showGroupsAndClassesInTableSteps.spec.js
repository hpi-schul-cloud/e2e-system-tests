const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
import Classes from '../../pages/class_management/pageClasses';

const classes = new Classes()

When('I click the manage button', () => {
	classes.clickManageClassButton();
})

Then('I can see the manage classes page', () => {
	classes.isManageClassPage();
})

When('I click the cancel manage class button', () => {
	classes.clickCancelButton();
})

Then('I can see the cancel modal', () => {
	classes.isCancelModal();
})

When('I click the confirmation button on the cancel modal', () => {
	classes.clickConfirmButton();
})

When('I click the edit button', () => {
	classes.clickEditClassButton();
})

Then('I can see the edit classes page', () => {
	classes.isEditClassPage();
})

When('I click the cancel edit class button', () => {
	classes.clickCancelButton();
})

When('I click in the name suffix text element', () => {
	classes.clickNameSuffixField();
})

Then('I can click on the save changes button', () => {
	classes.clickSaveChangesButton();
})

When('I click the create successor button', () => {
	classes.clickCreateSuccessorButton();
})

Then('I can see the create successor page', () => {
	classes.isCreateSuccessorPage();
})

When('I click the cancel create successor button', () => {
	classes.clickCancelButton();
})

When('I confirm creating the successor', () => {
	classes.clickConfirmSuccessor();
})
Then('I can see the disabled create successor button of the original class', () => {
	classes.isSuccessorButtonDisabled();
})

When('I click the delete button', () => {
	classes.clickDeleteButton();
})

Then('I can see the delete modal', () => {
	classes.isDeleteDialog();
})

When('I click the cancel button on the delete modal', () => {
	classes.clickCancelDeleteDialogButton();
})

When('I click the confirmation button on the delete modal', () => {
	classes.clickConfirmDeleteDialogButton();
})

Then('I can see the create class page', () => {
	classes.isCreateClassPage();
})

When('I click the cancel create class button', () => {
	classes.clickCancelButton();
})
