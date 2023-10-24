@release
Feature: Group - To show groups and classes in one table with respective functionality

  As a teacher I want to see all groups and classes belonging to my school.

  @stable_test
  Scenario: As a teacher i can add a class to school
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to administration page
    And I go to new class administration page
    Then I see the new class administration page
    When I click on add class
    Then I can see the create class page
    When I click the cancel create class button
    Then I can see the cancel modal
    When I click the confirmation button on the cancel modal
    Then I see the new class administration page
    When I click on add class
    And I click on the confirm button
    And I confirm managing the class
    Then I see the new class administration page

  @stable_test
  Scenario: As a teacher i can see all classes and groups of my school on the new class administration page.
    Given I see the new class administration page
    Then I can see the page title
    And I can see the group 'Cypress-Test-Group' with source 'moin.schule'
    And I can see the class '1' without source
    And the group 'Cypress-Test-Group' has a manage button
    And the class '1' has 4 enabled action items

  @stable_test
  Scenario: As a teacher i can manage my classes
    Given I see the new class administration page
    When I click the manage button
    Then I can see the manage classes page
    When I click the cancel manage class button
    Then I can see the cancel modal
    When I click the confirmation button on the cancel modal
    Then I see the new class administration page
    When I click the manage button
    And I confirm managing the class
    Then I see the new class administration page

  @stable_test
  Scenario: As a teacher i can edit my classes
    Given I see the new class administration page
    When I click the edit button
    Then I can see the edit classes page
    When I click the cancel edit class button
    Then I can see the cancel modal
    When I click the confirmation button on the cancel modal
    Then I see the new class administration page
    When I click the edit button
    When I click in the name suffix text element
    Then I can click on the save changes button
    And I see the new class administration page

  @stable_test
  Scenario: As a teacher i can upgrade my upgradable classes
    Given I see the new class administration page
    When I click the create successor button
    Then I can see the create successor page
    When I click the cancel create successor button
    Then I can see the cancel modal
    When I click the confirmation button on the cancel modal
    Then I see the new class administration page
    When I click the create successor button
    And I confirm creating the successor
    And I confirm managing the class
    Then I see the new class administration page
    And the create successor button of the original class is disabled

  @stable_test
  Scenario: As a teacher i can delete my classes
    Given I see the new class administration page
    When I click the delete button
    Then I can see the delete modal
    When I click the cancel button on the delete modal
    Then I see the new class administration page
    When I click the delete button
    And I click the confirmation button on the delete modal
    Then I see the new class administration page

  @stable_test
  Scenario: As a post-condition teacher deletes the successor class and logs out
    Given I see the new class administration page
    When I click the delete button
    And I click the confirmation button on the delete modal
    Then I see the new class administration page
