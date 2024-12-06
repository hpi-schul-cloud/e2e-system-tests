@regression_test
@stable_test
Feature: Deactivation of ctl tools in course

    As a user I want to see deactivated und activated tools in a course

    @stable_test
    Scenario Outline: Users see deactivated tool in course
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # Pre-condition: Admin creates a course
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        Then I see section one area on the course create page
        When I enter the course title 'Cypress Test Course'
        When I select '<fullname_teacher>' from field teacher
        When I click on button Next Steps after entering the course detail in section one
        Then I see section two area on the course create page
        When I select '<fullname_student>' from field student
        When I click on button Next Steps after selecting course participant details
        Then I see the section three area as the finish page
        When I click on button To Course Overview on the finish page

        # Admin tries to add an deactivated external tool
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        Then I see the external tools table is empty
        When I click the add external tool button
        Then I see the external tools configuration page
        Then I do not see external tool 'CY Test Tool deactivated External Tool' in the tool selection
        # Admin adds a tool
        When I select the tool 'CY Test Tool 1' from available tools
        Then I see tool 'CY Test Tool 1' is selected
        When I click on save external tool button
        Then I see the tool 'CY Test Tool 1' in external tools table
        Then I see the tool 'CY Test Tool 1' is active in tools table
        # Admin adds a tool and deactivates it
        When I click the add external tool button
        Then I see the external tools configuration page
        When I select the tool 'CY Test Tool 2' from available tools
        Then I see tool 'CY Test Tool 2' is selected
        When I deactivate the tool
        Then I see the deactivate checkbox is 'checked'
        When I click on save external tool button
        Then I see the tool 'CY Test Tool 2' in external tools table
        Then I see the tool 'CY Test Tool 2' is deactivated in external tools table

        # Teacher tries to add a deactivated tool in course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course 'Cypress Test Course'
        Then I see course page 'Cypress Test Course'
        When I click on the tools tab
        Then I see the button to add a tool
        When I click on the button to add a tool
        Then I see the tool configuration page title
        When I click on the tool configuration selection
        Then I do not see tool 'CY Test Tool 2' in the tool selection
        # Teacher adds a activated tool
        When I click on the tool configuration selection
        When I select the tool 'CY Test Tool 1' from available tools
        Then I see tool 'CY Test Tool 1' is selected
        When I click on save external tool button
        Then I see the tool 'CY Test Tool 1' in the tool overview

        # Admin deactivates an existing tool
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
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

        # Teacher tries to launch a deactivated tool in course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course 'Cypress Test Course'
        Then I see course page 'Cypress Test Course'
        When I click on the tools tab
        Then I see the tool 'CY Test Tool 1' in the tool overview
        Then I see the tool 'CY Test Tool 1' is marked as deactivated
        When I click on the tool 'CY Test Tool 1'
        Then I see an error dialog
        When I close the dialog
        Then I see 1 tools

        # Student sees that a tool is marked as deactivated in course
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course 'Cypress Test Course'
        Then I see course page 'Cypress Test Course'
        When I click on the tools tab
        Then I see the tool 'CY Test Tool 1' in the tool overview
        Then I see the tool 'CY Test Tool 1' is marked as deactivated
        # Student tries to launch a deactivated tool in course
        When I click on the tool 'CY Test Tool 1'
        Then I see an error dialog
        When I close the dialog
        Then I see 1 tools

        # Admin activates existing deactivated tools
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        Then I see the external tools table
        Then I see the tool 'CY Test Tool 1' in external tools table
        When I click on edit button of tool 'CY Test Tool 1'
        Then I see the external tools configuration page
        Then I see tool 'CY Test Tool 1' is selected
        When I activate the tool
        Then I see the deactivate checkbox is 'not checked'
        When I click on save external tool button
        Then I see the tool 'CY Test Tool 1' in external tools table
        Then I see the tool 'CY Test Tool 1' is active in tools table
        Then I see the tool 'CY Test Tool 2' in external tools table
        When I click on edit button of tool 'CY Test Tool 2'
        Then I see the tool configuration infotext
        Then I see tool 'CY Test Tool 2' is selected
        When I activate the tool
        Then I see the deactivate checkbox is 'not checked'
        When I click on save external tool button
        Then I see the tool 'CY Test Tool 2' in external tools table
        Then I see the tool 'CY Test Tool 2' is active in tools table

        # Teacher adds activated tool to course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course 'Cypress Test Course'
        Then I see course page 'Cypress Test Course'
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

        # Student sees activated tools in course
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course 'Cypress Test Course'
        Then I see course page 'Cypress Test Course'
        When I click on the tools tab
        Then I see the tool 'CY Test Tool 1' in the tool overview
        Then I see the tool 'CY Test Tool 1' is not marked as deactivated
        Then I see the tool 'CY Test Tool 2' in the tool overview
        Then I see the tool 'CY Test Tool 2' is not marked as deactivated

        # Post-condition: Admin deletes course
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I go to course administration page
        When I click the delete button for course 'Cypress Test Course' in course table
        Then I see the delete modal
        When I click the confirmation button on the delete modal
        Then I do not see course 'Cypress Test Course' in course table

        # Post-condition: Admin deletes external tools
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        Then I see the external tools table
        When I click on delete button of tool 'CY Test Tool 1'
        When I confirm deletion on deletion dialog
        Then I do not see the tool 'CY Test Tool 1' in external tools table
        When I click on delete button of tool 'CY Test Tool 2'
        When I confirm deletion on deletion dialog
        Then I do not see the tool 'CY Test Tool 2' in external tools table
        Then I see the external tools table is empty

        @staging_test
        Examples:
            | admin      | teacher      | student      | namespace | fullname_teacher | fullname_student |
            | admin1_nbc | teacher1_nbc | student1_nbc | nbc       | Karl Herzog      | Herbert Kraft    |

        # @school_api_test
        # This feature is not executable with the school_api