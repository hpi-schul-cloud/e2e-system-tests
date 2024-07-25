@unstable_test
Feature: Deactivation of ctl tools

  As a Admin I want to deactivate und activate an external tool

  @unstable_test
  Scenario: Pre-test: Admin creates a course
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

  @unstable_test
  Scenario: Admin tries to add an deactivated external tool, adds an external tool and deactivates and activates it
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I click on administration in menu
    When I click on sub menu school
    When I click on external tools panel
    Then I see the external tools table is empty
    When I click the add external tool button
    Then I see the external tools configuration page
    Then I see the external tool configuration page title
    Then I see the tool configuration infotext
    #    Admin tries to add an deactivated external tool
    Then I do not see external tool 'CY Test Tool deactivated External Tool' in the tool selection
    #    Admin adds a tool
    When I select the tool 'CY Test Tool 1' from available tools
    Then I see tool 'CY Test Tool 1' is selected
    When I click on save external tool button
    Then I see the tool 'CY Test Tool 1' in external tools table
    Then I see the tool 'CY Test Tool 1' is active in tools table
    #    Admin adds a tool and deactivates it
    When I click the add external tool button
    Then I see the external tools configuration page
    Then I see the external tool configuration page title
    Then I see the tool configuration infotext
    When I select the tool 'CY Test Tool 2' from available tools
    Then I see tool 'CY Test Tool 2' is selected
    When I deactivate the tool
    Then I see the deactivate checkbox is 'checked'
    When I click on save external tool button
    Then I see the tool 'CY Test Tool 2' in external tools table
    Then I see the tool 'CY Test Tool 2' is deactivated in external tools table

    #     Teacher can not add a deactivated tool to course
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'Cypress Test Course'
    Then I see room page 'Cypress Test Course'
    When I click on the tools tab
    Then I see the button to add a tool
    When I click on the button to add a tool
    Then I see the tool configuration page title
    When I click on the tool configuration selection
    #    Teacher tries to a deactivated tool
    Then I do not see tool 'CY Test Tool 2' in the tool selection
    #    Teacher adds a activated tool
    When I click on the tool configuration selection
    When I select the tool 'CY Test Tool 1' from available tools
    Then I see tool 'CY Test Tool 1' is selected
    When I click on save external tool button
    Then I see the tool 'CY Test Tool 1' in the tool overview

    #     Teacher can not see a deactivated tool in media shelf
    When I go to media shelf
    Then I see the media shelf page title
    Then I see the available media line
    Then I see 1 tools in the available media line
    Then I see tool 'CY Test Tool 1' in the available media line
    Then I do not see tool 'CY Test Tool 2' in the available media line

    #     Admin deactivates an existing tool
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I click on administration in menu
    When I click on sub menu school
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
    Then I see the tool 'CY Test Tool 1' in external tools table
    Then I see the tool 'CY Test Tool 1' is deactivated in external tools table

    #     Teacher trys to launch a deactivated tool
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'Cypress Test Course'
    Then I see room page 'Cypress Test Course'
    When I click on the tools tab
    Then I see the tool 'CY Test Tool 1' in the tool overview
    Then I see the tool 'CY Test Tool 1' is marked as deactivated
    When I click on the tool 'CY Test Tool 1'
    Then I see an error dialog

    #     Student trys to launch a deactivated tool
    Given I am logged in as a 'student2_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'Cypress Test Course'
    Then I see room page 'Cypress Test Course'
    When I click on the tools tab
    Then I see the tool 'CY Test Tool 1' in the tool overview
    Then I see the tool 'CY Test Tool 1' is marked as deactivated
    When I click on the tool 'CY Test Tool 1'
    Then I see an error dialog

    #     Admin activates existing deactivated tools
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I click on administration in menu
    When I click on sub menu school
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
    Then I see the tool 'CY Test Tool 2' in external tools table
    Then I see the tool 'CY Test Tool 2' is active in tools table

    #     Teacher adds activated tool to course
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

    #     Student sees activated tools
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
  Scenario: Post-test: Teacher deletes course, admin deletes external tools
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'Cypress Test Course'
    When I open page Edit course
    When I click on the button delete course
    Then I see the modal to confirm the deletion
    When I click on the button delete on the modal to confirm the course deletion
    Then I do not see the course 'Cypress Test Course' on the room overview page

    #     Admin deletes external tools
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I click on administration in menu
    When I click on sub menu school
    When I click on external tools panel
    Then I see the external tools table
    When I click on delete button of tool 'CY Test Tool 1'
    When I confirm deletion on deletion dialog
    When I click on delete button of tool 'CY Test Tool 2'
    When I confirm deletion on deletion dialog

