@unstable_test
Feature: Deactivation of ctl tools

    As a Admin I want to deactivate und activate an external tool

    @unstable_test
    Scenario: Pre-test: Admin creates a course
        Given I am logged in as a 'admin1_nbc' at 'nbc'
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        When I enter the course title 'Cypress Test Course'
        When I select 'Karl Herzog' from field teacher
        When I click on button Next Steps after entering the course detail in section one
        When I select 'Amelia Strobl' from field student
        When I click on button Next Steps after selecting course participant details
        When I click on button To Course Overview on the finish page

    @unstable_test
    Scenario: Admin tries to add an deactivated external tool, adds an external tool and deactivates and activates it
        Given I am logged in as a 'admin1_nbc' at 'nbc'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
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

        #     Teacher can not add a deactivated tool in course
        Given I am logged in as a 'teacher1_nbc' at 'nbc'
        When I go to courses overview
        When I go to course 'Cypress Test Course'
        Then I see course page 'Cypress Test Course'
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

        #    Teacher can not add a deactivated tool to a board
        When I go to the tab contents in course detail page
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
        When I select external tools from the element selection dialog box
        When I click on the tool configuration selection
        #    Teacher tries to a deactivated tool
        Then I do not see tool 'CY Test Tool 2' in the tool selection
        #    Teacher adds a activated tool
        When I click on the tool configuration selection
        When I select the tool 'CY Test Tool 1' from available tools
        Then I see tool 'CY Test Tool 1' is selected
        When I click on save external tool button
        Then I see an external tool element with tool 'CY Test Tool 1'

        #     Admin deactivates an existing tool
        Given I am logged in as a 'admin1_nbc' at 'nbc'
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

        #     Teacher tries to launch a deactivated tool in course
        Given I am logged in as a 'teacher1_nbc' at 'nbc'
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

        #     Teacher tries to launch a deactivated tool in board
        When I go to the tab contents in course detail page
        When I click on card Course Board
        Then I see the page Course Board details
        Then I see an external tool element with tool 'CY Test Tool 1'
        Then I see an external tool element with tool 'CY Test Tool 1' is marked as deactivated
        #    Teacher tries to launch incomplete tool
        When I click on external tool element with tool 'CY Test Tool 1'
        # Then nothing should happen


        #     Student tries to launch a deactivated tool in course
        Given I am logged in as a 'student2_nbc' at 'nbc'
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

        #     Student tries to launch a deactivated tool in board
        When I go to the tab contents in course detail page
        When I click on card Course Board
        Then I see the page Course Board details
        Then I see an external tool element with tool 'CY Test Tool 1'
        Then I see an external tool element with tool 'CY Test Tool 1' is marked as deactivated
        #      Student tries to launch incomplete tool
        When I click on external tool element with tool 'CY Test Tool 1'
        # Then nothing should happen

        #     Admin activates existing deactivated tools
        Given I am logged in as a 'admin1_nbc' at 'nbc'
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

        #     Teacher adds activated tool to a board
        When I go to the tab contents in course detail page
        When I click on card Course Board
        Then I see the page Course Board details
        Then I see an external tool element with tool 'CY Test Tool 1'
        Then I see an external tool element with tool 'CY Test Tool 1' is not marked as deactivated
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on plus icon to add content into card
        When I select external tools from the element selection dialog box
        When I click on the tool configuration selection
        When I select the tool 'CY Test Tool 2' from available tools
        Then I see tool 'CY Test Tool 2' is selected
        When I click on save external tool button
        Then I see an external tool element with tool 'CY Test Tool 2'


        #     Student sees activated tools in course
        Given I am logged in as a 'student2_nbc' at 'nbc'
        When I go to courses overview
        When I go to course 'Cypress Test Course'
        Then I see course page 'Cypress Test Course'
        When I click on the tools tab
        Then I see the tool 'CY Test Tool 1' in the tool overview
        Then I see the tool 'CY Test Tool 1' is not marked as deactivated
        Then I see the tool 'CY Test Tool 2' in the tool overview
        Then I see the tool 'CY Test Tool 2' is not marked as deactivated

        #    Student tries to launch a deactivated tool in board
        When I go to the tab contents in course detail page
        When I click on card Course Board
        Then I see the page Course Board details
        Then I see an external tool element with tool 'CY Test Tool 1'
        Then I see an external tool element with tool 'CY Test Tool 1' is not marked as deactivated
        Then I see an external tool element with tool 'CY Test Tool 2'
        Then I see an external tool element with tool 'CY Test Tool 2' is not marked as deactivated

    @unstable_test
    Scenario: Post-test: Teacher deletes course, admin deletes external tools
        Given I am logged in as a 'admin1_nbc' at 'nbc'
        When I click on administration in menu
        When I go to course administration page
        When I click the delete button for course 'Cypress Test Course' in course table
        Then I see the delete modal
        When I click the confirmation button on the delete modal
        Then I do not see course 'Cypress Test Course' in course table

        #     Admin deletes external tools
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        Then I see the external tools table
        When I click on delete button of tool 'CY Test Tool 1'
        When I confirm deletion on deletion dialog
        When I click on delete button of tool 'CY Test Tool 2'
        When I confirm deletion on deletion dialog
