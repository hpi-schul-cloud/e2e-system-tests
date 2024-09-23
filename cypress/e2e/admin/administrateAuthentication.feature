@unstable_test
Feature: Admin can edit system configuration

  As an admin I want to be able to edit system configurations

  @unstable_test
  Scenario: As an admin i want to see my systems and edit ldap systems of provider: general
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I click on administration in menu
    When I navigate to new school admin page via sub menu
    When I click on authentication panel
    Then I see a systems table
    Then I see an ldap system
    Then I see the 'SANIS' system with an edit button
    When I click on the edit button of the ldap system
    Then I see the ldap configuration page
    When I click on administration in menu
    When I navigate to new school admin page via sub menu
    When I click on authentication panel
    Then I see a systems table

  @unstable_test
  Scenario: As an admin i want to edit the group provisioning options of the moin.schule system
    Given I see a system table
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
    When I uncheck all checkboxes
    When I click the save button on the provisioning options page
    Then I see a warning dialog
    When I confirm the dialog
    Then I see a systems table
    When I click on the edit button of the 'SANIS' system
    Then I see all 3 checkboxes are unchecked

  @unstable_test
  Scenario: As a post-condition admin resets the provisioning options values
    Given I see the provisioning options page
    When I set the checkboxes to default values
    When I click the save button on the provisioning options page
    Then I see a systems table
