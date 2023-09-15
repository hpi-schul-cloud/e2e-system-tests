const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
import Management from '../../pages/admin/pageAdministration'

const management = new Management()

Then('I can see the school number', () => {
    management.seeAddedSchoolNumber()
})

Then('I see button Start migration is enabled',()  => {
    management.seeMigrationButtonIsEnabled()
})

When('I click on the start migration button', () => {
    management.clickStartMigration()
})
Then('I can see the migration information text',  () => {
    management.seeVisibleMigrationInformation()
});
Then('I see the email form with correct recipient', () => {
    management.checkSupportLink()
});
Then(/^I see the information link href is blog\.niedersachsen\.cloud\/umzug$/,  () =>{
    management.checkInfoLink()
});
When('I click on agree migration button',  () =>{
    management.clickAgreeMigrationButton()
});
Then('I see the migration is active field',  () => {
management.seeMigrationActiveTextInformation()
});
Then('I see the end migration button', () => {
management.seeEndMigrationButtonIsEnabled()
});
When('I click on end migration button', () => {
management.clickEndMigrationButton()
});
When('I click on the end migration confirmation checkbox',  () => {
management.clickEndMigrationConfirmationCheckbox()
});
When('I click on the end migration confirmation button',  () => {
management.clickEndMigrationConfirmationButton()

});



Then('I see the end of migration information title', () => {
    management.seeEndMigrationInformationTitle()
});

Then('I see the end of migration information text', () => {
    management.seeEndMigrationInformationText()
});

Then(/^I see the end migration information link href is blog\.niedersachsen\.cloud\/umzug$/,  () =>{
    management.checkEndMigrationInfoLink()
});

Then('I see the end migration confirmation checkbox is unchecked', () => {
    management.seeEndMigrationConfirmationCheckboxIsUnchecked()
});

Then('I see the abort button for end of migration conformation', () => {
    management.seeEndMigrationAbortButton()
});

Then('I can see the end migration confirmation button is disabled', () => {
    management.seeEndMigrationConfirmationButtonIsDisabled()
});

Then('I see the end migration confirmation button is enabled', () => {
    management.seeEndMigrationConfirmationButtonIsEnabled()
});

Then('I see the migration mandatory switch is not checked', () => {
    management.seeMigrationMandatorySwitch()
});

Then('I see the sync during migration switch is visible and not checked', () => {
    management.seeSyncDuringMigrationSwitchIsNotChecked()
});

Then('I see the sync during migration switch is checked', () => {
    management.seeSyncDuringMigrationSwitchIsChecked()
});

When('I toggle the migration mandatory switch', () => {
    management.toggleMigrationMandatorySwitch()
});

When('I toggle the sync during migration switch', () => {
    management.toggleSyncDuringMigrationSwitch()
});

Then('I see the timestamp when the migration is finished', () => {
    management.seeMigrationFinishedTimestamp()
});