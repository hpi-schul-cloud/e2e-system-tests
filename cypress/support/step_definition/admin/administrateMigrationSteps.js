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
