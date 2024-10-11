@unstable_test
Feature: Course Board  - To add, edit and delete a ctl tool in a board

    As a teacher I want to add, edit and delete a ctl tool in my course Board

    @unstable_test
    Scenario: Pre-test: Admin creates a course and adds external tools to school
        Given I am logged in as a 'admin1_nbc' at 'nbc'
        When I go to rooms overview

        #    Admin creates a course
        When I click on FAB to create a new room depending on sub menu
        Then I see section one area on the course create page
        When I enter the course title 'Cypress Test Course'
        When I select 'Karl Herzog' from field teacher
        When I click on button Next Steps after entering the room detail in section one
        Then I see section two area on the course create page
        When I select 'Amelia Strobl' from field student
        When I click on button Next Steps after selecting room participant details
        Then I see the section three area as the finish page
        When I click on button To Course Overview on the finish page

        #   Admin adds tools via selection
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        When I click the add external tool button
        When I select the tool 'CY Test Tool Preferred' from available tools
        When I click on save external tool button
        Then I see the tool 'CY Test Tool Preferred' in external tools table
        When I click the add external tool button
        When I select the tool 'CY Test Tool Preferred With Param' from available tools
        When I click on save external tool button
        Then I see the tool 'CY Test Tool Preferred With Param' in external tools table

    @unstable_test
    Scenario: Teacher adds, edits and deletes tools in a column board
        Given I am logged in as a 'teacher1_nbc' at 'nbc'
        When I go to rooms overview
        When I go to room 'Cypress Test Course'
        When I go to the tab contents in course detail page
        When I click on FAB to create new content
        When I click on the button FAB New Column Board
        Then I see a dialog box for column board
        Then I see in dialog box option for multi-column board
        Then I see in dialog box option for single column board
        When I choose multi-column board in the dialog box
        Then I see the page Course Board detail
        Then I see the chip Draft in the course board
        When I click on the button Add column in the course board
        When I click on the page outside of the column
        When I click on plus icon to add card in column
        When I click on plus icon to add content into card

#        Then I see preferred tool 'CY Test Tool Preferred' menu
#        Then I see preferred tool 'CY Test Tool Preferred With Param' in the add element dialog
#        Then I see an external tool element with tool 'CY Test Tool Preferred'
#
#        When I select preferred tool 'CY Test Tool Preferred With Param' from the menu
#        Then I see tool 'CY Test Tool Preferred With Param' is selected
#
#        When I enter 'test' in required custom parameter field 'contextParam'
#        Then I see custom parameter input field 'contextParam' contains 'test'
#        When I click on save external tool button
#        Then I see an external tool element with tool 'CY Test Tool Preferred With Param'



    @unstable_test
    Scenario: Post-test: Admin deletes a course and external tools
        Given I am logged in as a 'admin1_nbc' at 'nbc'
        When I click on administration in menu
        When I go to course administration page
        When I click the delete button for course 'Cypress Test Course' in course table
        Then I see the delete modal
        When I click the confirmation button on the delete modal

        #     Admin deletes external tools
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        Then I see the external tools table
        When I click on delete button of tool 'CY Test Tool Preferred'
        When I confirm deletion on deletion dialog
        When I click on delete button of tool 'CY Test Tool Preferred With Param'
        When I confirm deletion on deletion dialog
