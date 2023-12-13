# @release
Feature: Admin can edit system configuration

  As an admin I want to be able to edit system configurations

  @stable_test
  Scenario: As an admin i want to edit the group provisioning options of the moin.schule system
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to administration page
    When I go to school administration
    When I click on authentication panel
    Then I see a systems table
    Then I see the 'SANIS' system with an edit button
    When I click on the edit button of the 'SANIS' system
    Then I see the provisioning options page
    Then I see 3 checkboxes with assigned default values
    When I check all checkboxes
    When I click the cancel button on the provisioning options page
    Then I see a systems table
    When I click on the edit button of the 'SANIS' system
    Then I see 3 checkboxes with assigned default values
    When I check all checkboxes
    When I click the save button on the provisioning options page
    Then I see a systems table
    When I click on the edit button of the 'SANIS' system
    Then I see all 3 checkboxes are checked
  #-----------------------------------------------------------------
    #realy necessary?
    ##When I uncheck all checkboxes
    #When I click the save button on the provisioning options page
    #Then I see a systems table
    #When I click on the edit button of the 'SANIS' system
    ##Then I see all 3 checkboxes are unchecked
  #-----------------------------------------------------------------
  @stable_test
  Scenario: As a post-condition admin resets the provisioning options values
    Given I see the provisioning options page
    When I set the checkboxes to default values
    When I click the save button on the provisioning options page
    Then I see a systems table
