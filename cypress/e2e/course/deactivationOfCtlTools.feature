Feature: Deactivation of ctl tools

  @unstable_test
  Scenario: Pre-test: Admin creates a new course
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to rooms overview
    When I click on FAB to create a new room
    When I click on new course create button in sub menu
    When I enter the course title 'Cypress Test Course'
    When I select 'Karl Herzog' from field teacher
    When I click on button Next Steps after entering the room detail in section one
    When I select 'Amelia Strobl' from field student
    When I click on button Next Steps after selecting room participant details
    When I click on button To Course Overview on the finish page
    Then I see the course 'Cypress Test Course' on the room overview page

  @unstable_test
  Scenario: Admin trys to add a deactivated external tool to school
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to administration page
    When I go to school administration
    When I click on external tools panel
    Then I see the external tools table is empty
    When I click the add external tool button
    Then I see the external tools configuration page
    Then I see the external tool configuration page title
    Then I see the tool configuration infotext
    Then I do not see external tool 'CY Test Tool deactivated External Tool' in the tool selection

  @unstable_test
  Scenario: Admin adds an external tool and deactivates it for the school
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to administration page
    When I go to school administration
    When I click on external tools panel
    Then I see the external tools table is empty
#    add first tool
    When I click the add external tool button
    Then I see the external tools configuration page
    Then I see the external tool configuration page title
    Then I see the tool configuration infotext
    When I select the tool 'CY Test Tool 1' from available tools
    Then I see tool 'CY Test Tool 1' is selected
    When I click on save external tool button
    When I click on external tools panel
    Then I see the tool 'CY Test Tool 1' in external tools table
    Then I see the tool 'CY Test Tool 1' is active in tools table
#    add second tool and deactivate it
    When I click the add external tool button
    Then I see the external tools configuration page
    Then I see the external tool configuration page title
    Then I see the tool configuration infotext
    When I select the tool 'CY Test Tool 2' from available tools
    Then I see tool 'CY Test Tool 2' is selected
    When I deactivate the tool
    Then I see the deactivate checkbox is 'checked'
    When I click on save external tool button
    When I click on external tools panel
    Then I see the tool 'CY Test Tool 2' in external tools table
    Then I see the tool 'CY Test Tool 2' is deactivated in external tools table

  @unstable_test
  Scenario: Teacher can not add a deactivated tool to course
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'Cypress Test Course'
    Then I see room page 'Cypress Test Course'
    When I click on the tools tab
    Then I see the button to add a tool
    When I click on the button to add a tool
    Then I see the tool configuration page title
    When I click on the tool configuration selection
    Then I do not see tool 'CY Test Tool 2' in the tool selection

  @unstable_test
  Scenario: Teacher adds a activated tool to course
    When I go to rooms overview
    When I go to room 'Cypress Test Course'
    Then I see room page 'Cypress Test Course'
    When I click on the tools tab
    Then I see the button to add a tool
    When I click on the button to add a tool
    Then I see the tool configuration page title
    When I click on the tool configuration selection
    When I select the tool 'CY Test Tool 1' from available tools
    Then I see tool 'CY Test Tool 1' is selected
    When I click on save external tool button
    Then I see the tool 'CY Test Tool 1' in the tool overview

  @unstable_test
  Scenario: Admin deactivates an existing tool
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to administration page
    When I go to school administration
    When I click on external tools panel
    Then I see the external tools table
    Then I see the tool 'CY Test Tool 1' in external tools table
    When I click on edit button of tool 'CY Test Tool 1'
    Then I see the external tools configuration page
    Then I see the external tool configuration page title
    Then I see the tool configuration infotext
    Then I see tool 'CY Test Tool 1' is selected
    When I deactivate the tool
    Then I see the deactivate checkbox is 'checked'
    When I click on save external tool button
    When I click on external tools panel
    Then I see the tool 'CY Test Tool 1' in external tools table
    Then I see the tool 'CY Test Tool 1' is deactivated in external tools table

  @unstable_test
  Scenario: Teacher trys to launch a deactivated tool
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'Cypress Test Course'
    Then I see room page 'Cypress Test Course'
    When I click on the tools tab
    Then I see the tool 'CY Test Tool 1' in the tool overview
    Then I see the tool 'CY Test Tool 1' is marked as deactivated
    When I click on the tool 'CY Test Tool 1'
    Then I see an error dialog

  @unstable_test
  Scenario: Student trys to launch a deactivated tool
    Given I am logged in as a 'student2_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'Cypress Test Course'
    Then I see room page 'Cypress Test Course'
    When I click on the tools tab
    Then I see the tool 'CY Test Tool 1' in the tool overview
    Then I see the tool 'CY Test Tool 1' is marked as deactivated
    When I click on the tool 'CY Test Tool 1'
    Then I see an error dialog

  @unstable_test
  Scenario: Admin activates existing deactivated tools
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to administration page
    When I go to school administration
    When I click on external tools panel
    Then I see the external tools table
    Then I see the tool 'CY Test Tool 1' in external tools table
    When I click on edit button of tool 'CY Test Tool 1'
    Then I see the external tools configuration page
    Then I see the external tool configuration page title
    Then I see the tool configuration infotext
    Then I see tool 'CY Test Tool 1' is selected
    When I activate the tool
    Then I see the deactivate checkbox is 'not checked'
    When I click on save external tool button
    When I click on external tools panel
    Then I see the tool 'CY Test Tool 1' in external tools table
    Then I see the tool 'CY Test Tool 1' is active in tools table
    Then I see the tool 'CY Test Tool 2' in external tools table
    When I click on edit button of tool 'CY Test Tool 2'
    Then I see the external tools configuration page
    Then I see the external tool configuration page title
    Then I see the tool configuration infotext
    Then I see tool 'CY Test Tool 2' is selected
    When I activate the tool
    Then I see the deactivate checkbox is 'not checked'
    When I click on save external tool button
    When I click on external tools panel
    Then I see the tool 'CY Test Tool 2' in external tools table
    Then I see the tool 'CY Test Tool 2' is active in tools table

  @unstable_test
  Scenario: Teacher adds activated tool to course
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'Cypress Test Course'
    Then I see room page 'Cypress Test Course'
    When I click on the tools tab
    Then I see the tool 'CY Test Tool 1' in the tool overview
    Then I see the tool 'CY Test Tool 1' is not marked as deactivated
    Then I see the button to add a tool
    When I click on the button to add a tool
    Then I see the tool configuration page title
    When I click on the tool configuration selection
    When I select the tool 'CY Test Tool 2' from available tools
    Then I see tool 'CY Test Tool 2' is selected
    When I click on save external tool button
    Then I see the tool 'CY Test Tool 2' in the tool overview

  @unstable_test
  Scenario: Student sees activated tools
    Given I am logged in as a 'student2_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'Cypress Test Course'
    Then I see room page 'Cypress Test Course'
    When I click on the tools tab
    Then I see the tool 'CY Test Tool 1' in the tool overview
    Then I see the tool 'CY Test Tool 1' is not marked as deactivated
    Then I see the tool 'CY Test Tool 2' in the tool overview
    Then I see the tool 'CY Test Tool 2' is not marked as deactivated

  @unstable_test
  Scenario: Post-test: Teacher deletes course as a post condition
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
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
      | tool_name      |
      | CY Test Tool 1 |
      | CY Test Tool 2 |
