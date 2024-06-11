#@api_migrated
#@release
Feature: Course - To add, edit and delete a ctl tool in a course

  As a teacher I want to add, edit and delete a ctl tool in my course.

#  @stable_test
#  Scenario: Pre-test: Creating all users and creating course
#    Given I am logged in as a 'admin1_nbc' at 'nbc'
#    Given I am logged in as a 'teacher1_nbc' at 'nbc'
#    Given I am logged in as a 'student1_nbc' at 'nbc'

  @unstable_test
  Scenario: Pre-test: Creating new course
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to rooms overview
    When I click on FAB to create a new room
    When I click on new course create button in sub menu
    Then I see section one area on the course create page
#    When I enter the course title 'German'
    When I enter the course title 'Cypress Test Course'
    When I select room colour as red
#    Then I select 'cypress teacher_1' from field teacher
    Then I select 'Karl Herzog' from field teacher
    Then I see substitute teacher selection box
    Then I see button to create a course time table container
    When I click on button Next Steps after entering the room detail in section one
    Then I see section two area on the course create page
#    When I select 'cypress student_1' from field student
    When I select 'Amelia Strobl' from field student
    When I click on button Next Steps after selecting room participant details
    Then I see the section three area as the finish page
    When I click on button To Course Overview on the finish page

  @unstable_test
  Scenario: Pre-test: Admin adds external tools to school
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to administration page
    When I go to school administration
    When I click on external tools panel
    When I click the add external tool button
    When I select the tool 'CY Test Tool 1' from available tools
    When I click on save external tool button
    When I click on external tools panel
    Then I see the tool 'CY Test Tool 1' in external tools table
    When I click the add external tool button
    When I select the tool 'CY Test Tool Required Parameters' from available tools
    When I enter 'test' in required custom parameter input field 'schoolParam'
    When I click on save external tool button
    When I click on external tools panel
    Then I see the tool 'CY Test Tool Required Parameters' in external tools table
    When I click the add external tool button
    When I select the tool 'CY Test Tool Optional Parameters' from available tools
    When I click on save external tool button
    When I click on external tools panel
    Then I see the tool 'CY Test Tool Optional Parameters' in external tools table

  @unstable_test
  Scenario: Student cant see the button to add a tool
#    Given I am logged in as a 'student1_nbc' at 'nbc'
    Given I am logged in as a 'student2_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'Cypress Test Course'
    When I click on the tools tab
    Then I do not see the button to add a tool

  @unstable_test
  Scenario: Teacher adds tools to a course
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'Cypress Test Course'
    Then I see room page 'Cypress Test Course'
    When I click on the tools tab
    Then I see the button to add a tool
#    add tool without a custom parameter
    When I click on the button to add a tool
    Then I see the tool configuration page title
    When I click on the tool configuration selection
    When I select the tool 'CY Test Tool 1' from available tools
    Then I see tool 'CY Test Tool 1' is selected
    When I click on save external tool button
    Then I see the tool 'CY Test Tool 1' in the tool overview
#    add a tool twice with different name
    When I click on the button to add a tool
    Then I see the tool configuration page title
    When I click on the tool configuration selection
    When I select the tool 'CY Test Tool 1' from available tools
    Then I see tool 'CY Test Tool 1' is selected
    When I click on save external tool button
    Then I see an error alert
    When I enter 'CY Test Tool 1 New' in display name field
    When I click on save external tool button
    Then I see the tool 'CY Test Tool 1 New' in the tool overview
#    add tool with a required custom parameter
    When I click on the button to add a tool
    Then I see the tool configuration page title
    When I click on the tool configuration selection
    When I select the tool 'CY Test Tool Required Parameters' from available tools
    Then I see tool 'CY Test Tool Required Parameters' is selected
#    when required field is empty
    When I click on save external tool button
    Then I see an error alert
    When I enter 'test' in required custom parameter field 'contextParam'
    Then I see custom parameter input field 'contextParam' contains 'test'
    When I click on save external tool button
    Then I see the tool 'CY Test Tool Required Parameters' in the tool overview
#    add tool with an optional custom parameter
    When I click on the button to add a tool
    Then I see the tool configuration page title
    When I click on the tool configuration selection
    When I select the tool 'CY Test Tool Optional Parameters' from available tools
    Then I see tool 'CY Test Tool Optional Parameters' is selected
    When I enter 'test' in optional custom parameter field 'contextParam'
    Then I see custom parameter input field 'contextParam' contains 'test'
    When I click on save external tool button
    Then I see the tool 'CY Test Tool Optional Parameters' in the tool overview

  @unstable_test
  Scenario: Teacher configures a tool
    When I go to rooms overview
    When I go to room 'Cypress Test Course'
    Then I see room page 'Cypress Test Course'
    When I click on the tools tab
    When I click on three dot menu of the tool 'CY Test Tool Optional Parameters'
    When I click on the tool edit button of 'CY Test Tool Optional Parameters'
    Then I see the tool configuration page title
    When I enter 'updated test' in optional custom parameter field 'contextParam'
    Then I see custom parameter input field 'contextParam' contains 'updated test'
    When I confirm the update
    Then I see room page 'Cypress Test Course'
    When I click on three dot menu of the tool 'CY Test Tool Optional Parameters'
    When I click on the tool edit button of 'CY Test Tool Optional Parameters'
    Then I see the tool configuration page title
    Then I see custom parameter input field 'contextParam' contains 'updated test'

  @unstable_test
  Scenario: Student sees course tools
    Given I am logged in as a 'student2_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'Cypress Test Course'
    Then I see room page 'Cypress Test Course'
    When I click on the tools tab
    Then I see 4 tools
    Then I see the tool 'CY Test Tool 1' in the tool overview
    Then I see the tool 'CY Test Tool 1 New' in the tool overview
    Then I see the tool 'CY Test Tool Required Parameters' in the tool overview
    Then I see the tool 'CY Test Tool Optional Parameters' in the tool overview

  @unstable_test
  Scenario: Teacher deletes tools from course
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'Cypress Test Course'
    Then I see room page 'Cypress Test Course'
    When I click on the tools tab
    Then I see 4 tools
    When I click on three dot menu of the tool 'CY Test Tool Optional Parameters'
    When I click on the tool delete of 'CY Test Tool Optional Parameters'
    Then I see the delete tool dialog
    When I confirm the delete tool dialog
    Then I do not see tool 'CY Test Tool Optional Parameters' in the tool overview
    Then I see 3 tools

  @unstable_test
  Scenario: Post-test: Teacher deletes course as a post condition
    When I go to rooms overview
    When I go to room 'Cypress Test Course'
    When I open page Edit course
    When I click on the button delete course
    Then I see the modal to confirm the deletion
    When I click on the button delete on the modal to confirm the course deletion
    Then I do not see the course 'Cypress Test Course' on the room overview page

  @unstable_test
  Scenario Outline: Post-test: Admin deletes external tools
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to administration page
    When I go to school administration
    When I click on external tools panel
    Then I see the external tools table
    When I click on delete button of tool '<tool_name>'
    When I confirm deletion on deletion dialog
    Examples:
      | tool_name                        |
      | CY Test Tool 1                   |
      | CY Test Tool Required Parameters |
      | CY Test Tool Optional Parameters |
