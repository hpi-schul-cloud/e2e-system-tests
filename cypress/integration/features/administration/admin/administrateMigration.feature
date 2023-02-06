
Feature: Admin Users - To activate and complete the migration from IServ to SANIS.

  As an admin I want to activate the Migration from Iserv to SANIS,and be able to complete the migration process

  Scenario: Admin wants to activate the Migration but didn't enter a School Nummber
    Given I am logged in as a 'admin2' at 'nbc'
    When I go to administration page
    And I go to school administration
    And I go to new school administration page
    And I do not add a school nummber
    Then I can not click on the start migration button

Scenario: Admin starts the migration and the School Nummber is added
    Given I am logged in as a 'admin' at 'nbc'
    When I go to administration page
    And I go to school administration
    And I go to new school administration page
    And I click on the start migration button
    And I click on agree migration button
    Then I see the complete migration button

Scenario: Admin makes the started migration mandatory
    Given I am logged in as a 'admin' at 'nbc'
    When I go to administration page
    And I go to school administration
    And I go to new school administration page
    Then I can make the migration mandatory

Scenario: The admin toggles the migration mandatorty and ends the migration process
  Given I am logged in as a 'admin' at 'nbc'
  When I go to administration page
  And I go to school administration
  And I go to new school administration page
  And I uncheck the migration mandatory
  And I click on the complete migration button
  And I click on agree complete migration button
  Then I can see the last migration completetition timestemp




