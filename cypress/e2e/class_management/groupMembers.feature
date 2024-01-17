#@release
@stable_test
Feature: Group - To show members in a group

  As a teacher I want to see the members in a group

  Scenario: As a teacher I can manage a group of type class from external systems
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to administration page
    When I go to new class administration page
    Then I see the new class administration page
    Then I can see the group 'Cypress-Test-Group' with source 'moin.schule'
    Then I can see the manage button for group 'Cypress-Test-Group'
    When I click the manage group button
    Then I can see the manage group page
    Then I can see the manage group page title
    Then I can see the group member table
    Then I can see the 'Lehrkraft' with name 'Herzog'
    Then I can see the infobox
    Then I can see the infotext
