@release
Feature: Course - To add a ctl tool to a course

  As a teacher I want to add a new ctl tool to my course.

  @stable_test
  Scenario: Student cant see the button to add a tool
    Given I am logged in as a 'student2_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'German'
    When I click on the tools tab
    Then I cant see the button to add a tool
    When

  @stable_test
  Scenario: Teacher adds a tool to a course
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'German'
    When I click on the tools tab
    Then I can see the button to add a tool
    When I click on the button to add a tool
    Then I can see the tool configuration page title
    When I click on the tool configuration selection
    Then I can enter 'Test' as tool name in the selection

  @unstable_test
  Scenario: Teacher can't add a tool with the restricted context 'board-lement'
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'German'
    When I click on the tools tab
    When I click on the button to add a tool
    Then I can see the tool configuration page title
    When I click on the tool configuration selection
    Then I can not see tool 'CY Test Tool Board-Element Restriction' in the tool selection list
