const { When, Then } = require('@badeball/cypress-cucumber-preprocessor')
import Management from '../../pages/admin/pageAdministration'

const management = new Management()

When('I can see the school number', () => {
    management.schoolNumberIsAdded()
})

Then('I can click on the start migration button',()  => {
    management.migrationButtonIsEnabled()
})

When('I click on the start migration button', () => {
    management.clickStartMigration()
})
Then('I can see the migration information text',  () => {
    management.migrationInformationIsVisible()
});
Then('I can write an email to a pre-defined receiver', () => {
    management.clickSupportLink()
});
When('I can click on the information link that opens a new tab',  () =>{
    management.clickInfoLink()
});
When('I click on agree migration button',  () =>{
    management.clickAgreeMigrationButton()
});
Then('I see the migration is active field',  () => {
management.migrationActiveTextInformation()
});
Then('I see the end migration button', () => {
management.endMigrationButtonIsVisible()
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
