@unstable_test
Feature: Teacher can share a course

    As a teacher I want to share a course with other teachers from the same school

    @unstable_test
    Scenario: Pre-condition: admin adds external tools to school and teacher sets up a course with ctl tools
        Given I am logged in as a 'admin1_nbc' at 'nbc'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        When I click the add external tool button
        When I select the tool 'CY Test Tool Context Scope' from available tools
        When I click on save external tool button
        When I click the add external tool button
        When I select the tool 'CY Test Tool Optional Protected Parameter' from available tools
        When I click on save external tool button
        When I click the add external tool button
        When I select the tool 'CY Test Tool Protected Parameter' from available tools
        When I click on save external tool button
        Then I see the tool 'CY Test Tool Context Scope' in external tools table
        Then I see the tool 'CY Test Tool Optional Protected Parameter' in external tools table
        Then I see the tool 'CY Test Tool Protected Parameter' in external tools table

        # Pre-condition: teacher creates a course and adds tools to the course
        Given I am logged in as a 'teacher1_nbc' at 'nbc'
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        When I enter the course title 'Cypress Test Course Share'
        Then I see teacher 'Karl Herzog' is selected by default
        When I click on button Next Steps after entering the course detail in section one
        When I click on button Next Steps after selecting course participant details
        Then I see the section three area as the finish page
        When I click on button To Course Overview on the finish page
        Then I see the course 'Cypress Test Course Share' on the course overview page
        When I go to course 'Cypress Test Course Share'
        Then I see course page 'Cypress Test Course Share'
        When I click on the tools tab
        Then I see the button to add a tool
        # Pre-condition: teacher adds a tool with required parameter
        When I click on the button to add a tool
        Then I see the tool configuration page title
        When I click on the tool configuration selection
        When I select the tool 'CY Test Tool Context Scope' from available tools
        When I enter 'test' in required custom parameter field 'searchparam'
        When I click on save external tool button
        Then I see the tool 'CY Test Tool Context Scope' in the tool overview
        # Pre-condition: teacher adds a tool with optional protected parameter
        When I click on the button to add a tool
        Then I see the tool configuration page title
        When I click on the tool configuration selection
        When I select the tool 'CY Test Tool Optional Protected Parameter' from available tools
        When I enter 'test' in required custom parameter field 'search'
        When I enter 'protected' in optional custom parameter field 'protected'
        When I click on save external tool button
        Then I see the tool 'CY Test Tool Optional Protected Parameter' in the tool overview
        # Pre-condition: teacher adds a tool with required protected parameter
        When I click on the button to add a tool
        Then I see the tool configuration page title
        When I click on the tool configuration selection
        When I select the tool 'CY Test Tool Protected Parameter' from available tools
        When I enter 'test' in required custom parameter field 'search'
        When I select 'Ja' in required protected custom parameter selection
        When I click on save external tool button
        Then I see the tool 'CY Test Tool Protected Parameter' in the tool overview

        # Pre-condition: teacher creates a board and adds tools
        When I go to the tab contents in course detail page
        When I click on FAB to create new content
        When I click on the button FAB New Column Board
        Then I see a dialog box for column board
        Then I see in dialog box option for multi-column board
        Then I see in dialog box option for single-column board
        When I choose multi-column board in the dialog box
        Then I see the page Course Board details
        Then I see the chip Draft in the course board
        When I click on the button Add column in the course board
        When I click on the page outside of the column
        # Pre-condition: teacher adds a tool with required parameter
        When I click on plus icon to add card in column
        When I click on plus icon to add content into card
        When I select external tools from the element selection dialog box
        When I click on the tool configuration selection
        When I select the tool 'CY Test Tool Context Scope' from available tools
        When I enter 'test' in required custom parameter field 'searchparam'
        When I click on save external tool button
        Then I see an external tool element with tool 'CY Test Tool Context Scope'
        # Pre-condition: teacher adds a tool with optional protected parameter
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on plus icon to add content into card
        When I select external tools from the element selection dialog box
        When I click on the tool configuration selection
        When I select the tool 'CY Test Tool Optional Protected Parameter' from available tools
        When I enter 'test' in required custom parameter field 'search'
        When I enter 'protected' in optional custom parameter field 'protected'
        When I click on save external tool button
        Then I see an external tool element with tool 'CY Test Tool Optional Protected Parameter'
        # Pre-condition: teacher adds a tool with required parameter
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on plus icon to add content into card
        When I select external tools from the element selection dialog box
        When I click on the tool configuration selection
        When I select the tool 'CY Test Tool Protected Parameter' from available tools
        When I enter 'test' in required custom parameter field 'search'
        When I select 'Ja' in required protected custom parameter selection
        When I click on save external tool button
        Then I see an external tool element with tool 'CY Test Tool Protected Parameter'

        # Teacher shares the course with another teacher in the same school
        Given I am logged in as a 'teacher1_nbc' at 'nbc'
        When I go to courses overview
        When I go to course 'Cypress Test Course Share'
        Then I see course page 'Cypress Test Course Share'
        When I click on share course button
        Then I see the share course dialog box
        Then I see the info text in the share course dialog
        Then I see the school internal checkbox as checked
        Then I see the expiry date checkbox as checked
        When I click on the continue button in the share course dialog
        Then I see the import share course url in the share course result dialog
        Then I see the mail button in the share course result dialog
        Then I see the copy link button in the share course result dialog
        Then I see the mail QR-Code button in the share course result dialog
        When I save the import share course url
        # Switch teacher to import shared course
        Given I am logged in as a 'teacher2_nbc' at 'nbc'
        When I go to courses overview
        When I visit the saved import url of the shared course
        Then I see the import share course dialog
        Then I see the import share course tools info
        Then I see 'Cypress Test Course Share' in the course name field
        When I enter 'Cypress Test Course Import' in the course name field
        When I click on the import course button
        When I go to course 'Cypress Test Course Import'
        Then I see course page 'Cypress Test Course Import'
        # Teacher sees marked tools in tools tab
        When I click on the tools tab
        Then I see the tool 'CY Test Tool Context Scope' in the tool overview
        Then I see the tool 'CY Test Tool Optional Protected Parameter' in the tool overview
        Then I see the tool 'CY Test Tool Optional Protected Parameter' is marked as incomplete operational
        Then I see the tool 'CY Test Tool Protected Parameter' in the tool overview
        Then I see the tool 'CY Test Tool Protected Parameter' is marked as incomplete
        # Teacher sees marked tools in board
        When I go to the tab contents in course detail page
        When I click on card Course Board
        Then I see an external tool element with tool 'CY Test Tool Context Scope'
        Then I see an external tool element with tool 'CY Test Tool Optional Protected Parameter'
        Then I see external tool element with tool 'CY Test Tool Optional Protected Parameter' is marked as incomplete operational
        Then I see an external tool element with tool 'CY Test Tool Protected Parameter'
        Then I see external tool element with tool 'CY Test Tool Protected Parameter' is marked as incomplete
        # Post-condition: admin deletes courses
        Given I am logged in as a 'admin1_nbc' at 'nbc'
        When I click on administration in menu
        When I go to course administration page
        When I click the delete button for course 'Cypress Test Course Share' in course table
        Then I see the delete modal
        When I click the confirmation button on the delete modal
        When I click the delete button for course 'Cypress Test Course Import' in course table
        Then I see the delete modal
        When I click the confirmation button on the delete modal
        Then I do not see course 'Cypress Test Course Share' in course table
        Then I do not see course 'Cypress Test Course Import' in course table
        # Post-condition: admin deletes external tools
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        Then I see the external tools table
        When I click on delete button of tool 'CY Test Tool Context Scope'
        When I confirm deletion on deletion dialog
        When I click on delete button of tool 'CY Test Tool Optional Protected Parameter'
        When I confirm deletion on deletion dialog
        When I click on delete button of tool 'CY Test Tool Protected Parameter'
        When I confirm deletion on deletion dialog
