@api_migrated
@release
Feature: Course - To add a ctl tool to a course

  As a teacher I want to add a new ctl tool to my course.

  @stable_test
  Scenario: Pre-test: Creating all users and creating course
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    Given I am logged in as a 'student1_nbc' at 'nbc'

  @stable_test
  Scenario: Pre-test: Creating new course
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to rooms overview
    When I click on FAB to create a new room
    When I click on new course create button in sub menu
    Then I see section one area on the course create page
    When I enter the course title 'German'
    When I select room colour as red
    Then I select 'cypress teacher_1' from field teacher
    Then I see substitute teacher selection box
    Then I see button to create a course time table container
    When I click on button Next Steps after entering the room detail in section one
    Then I see section two area on the course create page
    When I select 'cypress student_1' from field student
    When I click on button Next Steps after selecting room participant details
    Then I see the section three area as the finish page
    When I click on button To Course Overview on the finish page

  @stable_test
  Scenario: Student cant see the button to add a tool
    Given I am logged in as a 'student1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'German'
    When I click on the tools tab
    Then I cant see the button to add a tool

  @unstable_test
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
