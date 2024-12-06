@regression_test
@stable_test
Feature: Deactivation of ctl tools in board

    As a user I want to see deactivated und activated tools in a board

    @stable_test
    Scenario Outline: Users see deactivated tool in board
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

        # Pre-condition: Admin adds a tool
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        Then I see the external tools table is empty
        When I click the add external tool button
        Then I see the external tools configuration page
        When I select the tool 'CY Test Tool 1' from available tools
        Then I see tool 'CY Test Tool 1' is selected
        When I click on save external tool button
        Then I see the tool 'CY Test Tool 1' in external tools table
        Then I see the tool 'CY Test Tool 1' is active in tools table
        # Pre-condition: Admin adds a tool and deactivates it
        When I click the add external tool button
        Then I see the external tools configuration page
        When I select the tool 'CY Test Tool 2' from available tools
        Then I see tool 'CY Test Tool 2' is selected
        When I deactivate the tool
        Then I see the deactivate checkbox is 'checked'
        When I click on save external tool button
        Then I see the tool 'CY Test Tool 2' in external tools table
        Then I see the tool 'CY Test Tool 2' is deactivated in external tools table

        # Teacher tries to add a deactivated tool in board
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course 'Cypress Test Course'
        Then I see course page 'Cypress Test Course'
        When I click on FAB to create new content
        When I click on the button FAB New Column Board
        Then I see a dialog box for column board
        When I choose multi-column board in the dialog box
        Then I see the page Course Board details
        Then I see the chip Draft in the course board
        When I click on three dot menu in the board header
        When I click on the option Publish in three dot menu in course board
        Then I do not see the chip Draft in the course board
        When I click on the button Add column in the course board
        When I click on the page outside of the column
        When I click on plus icon to add card in column
        When I click on plus icon to add content into card
        When I select external tools from the menu
        When I click on the tool configuration selection
        Then I do not see tool 'CY Test Tool 2' in the tool selection
        # Teacher adds a activated tool
        When I click on the tool configuration selection
        When I select the tool 'CY Test Tool 1' from available tools
        Then I see tool 'CY Test Tool 1' is selected
        When I click on save external tool button
        Then I see an external tool element with tool 'CY Test Tool 1'

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

        # Teacher sees that a tool is marked as deactivated in board
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course 'Cypress Test Course'
        Then I see course page 'Cypress Test Course'
        When I click on card Course Board
        Then I see the page Course Board details
        Then I see an external tool element with tool 'CY Test Tool 1'
        Then I see an external tool element with tool 'CY Test Tool 1' is marked as deactivated
        # Teacher tries to launch a deactivated tool
        When I click on external tool element with tool 'CY Test Tool 1'
        # Then nothing should happen

        # Student sees that a tool is marked as deactivated in board
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course 'Cypress Test Course'
        Then I see course page 'Cypress Test Course'
        When I go to the tab contents in course detail page
        When I click on card Course Board
        Then I see the page Course Board details
        Then I see an external tool element with tool 'CY Test Tool 1'
        Then I see an external tool element with tool 'CY Test Tool 1' is marked as deactivated
        # Student tries to launch a deactivated tool
        When I click on external tool element with tool 'CY Test Tool 1'
        # Then nothing should happen

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

        # Teacher adds activated tool to a board
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course 'Cypress Test Course'
        Then I see course page 'Cypress Test Course'
        When I click on card Course Board
        Then I see the page Course Board details
        Then I see an external tool element with tool 'CY Test Tool 1'
        Then I see an external tool element with tool 'CY Test Tool 1' is not marked as deactivated
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on plus icon to add content into card
        When I select external tools from the menu
        When I click on the tool configuration selection
        When I select the tool 'CY Test Tool 2' from available tools
        Then I see tool 'CY Test Tool 2' is selected
        When I click on save external tool button
        Then I see an external tool element with tool 'CY Test Tool 2'

        # Student sees activated tools in board
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course 'Cypress Test Course'
        Then I see course page 'Cypress Test Course'
        When I click on card Course Board
        Then I see the page Course Board details
        Then I see an external tool element with tool 'CY Test Tool 1'
        Then I see an external tool element with tool 'CY Test Tool 1' is not marked as deactivated
        Then I see an external tool element with tool 'CY Test Tool 2'
        Then I see an external tool element with tool 'CY Test Tool 2' is not marked as deactivated

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
