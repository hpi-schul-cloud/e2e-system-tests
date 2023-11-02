@release
Feature: Group - To show members in a group

  As a teacher I want to see the members in a group

  @stable_test
  Scenario: As a teacher I can manage a group of type class from external systems
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to administration page
    And I go to new class administration page
    Then I see the new class administration page
    And I can see the group 'Cypress-Test-Group' with source 'moin.schule'
    And the group 'Cypress-Test-Group' has a manage button
    When I click the manage group button
    Then I can see the manage group page
    And I can see the manage group page title
    And I can see the group member table
    And I can see the 'Lehrkraft' with name 'Herzog'
    And I can see the infobox
    And I can see the infotext
