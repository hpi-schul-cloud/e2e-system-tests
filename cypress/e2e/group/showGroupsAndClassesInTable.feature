@release
Feature: Group - To show groups and classes in one table with respective functionality

  As a teacher I want to see all groups and classes belonging to my school.

  @stable_test
  Scenario: As a pre-condition teacher adds a class to school
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to administration page
    And I go to class administration
    And I click on add class
    And I click on the confirm button
    And I confirm managing the class
    Then I see the new class administration page

  Scenario: As a teacher i can see all classes and groups of my school on the new class administration page.
    Given I am on the new class administration page
    Then I can see the page title
    And I can see 1 class and 1 group in the table
    And the group does not have any action icons
    And the class has 4 enabled action icons
  #test And in this context

  Scenario: As a teacher i can manage my classes
    When I click the manage icon
    Then I can see the manage classes page
    When I click the cancel manage class button
    Then I can see the cancel modal
    When I click the confirmation button on the cancel modal
    Then I see the new class administration page
    When I click the manage icon
    Then I can see the manage classes page
    When I confirm managing the class
    Then I see the new class administration page

  Scenario: As a teacher i can edit my classes

  Scenario: As a teacher i can upgrade my upgradable classes

  Scenario: As a teacher i can delete my classes
