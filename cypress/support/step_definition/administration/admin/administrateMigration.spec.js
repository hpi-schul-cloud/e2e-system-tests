import Management from '../../../pages/administration/pageAdministration'

const management = new Management()

 When('I click on the start migration button', () =>{
    management.clickStartMigrationButton()

 })

 When('I click on agree migration button', ()=>{
    management.clickAgreeMigrationButton()
 })

 Then('I can not click on the start migration button', () =>{
    management.migrationButtonIsDisabled()
 })

 Then('I can not click on the migration checkbox', () =>{
    management.migrationCheckboxIsDisabled()
  })

  When('I do not add a school nummber', () =>{
    management.schoolNummberFieldEmpty()
  })

  Then('I see the complete migration button', ()=>{
    management.completeMigrationButtonVisible()
  })

  When('I click on the complete migration button', () =>{
   management.clickCompleteMigrationButton()
  })

  When('I click on agree complete migration button', () =>{
   management.clickAgreeCompleteMigrationButton()
  })

  Then('I can see the last migration completetition timestemp', () =>{
   management.migrationCompleteTimestamp()
  })

  When('I uncheck the migration mandatory', () =>{
   management.uncheckMigrationMandatory()
  })

  Then('I can make the migration mandatory', () =>{
   management.checkMigrationMandatory()
  })

