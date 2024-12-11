# @regression_test
# @stable_test
# Note: The test was set to unstable because the required feature flag (FEATURE_PREFERRED_CTL_TOOLS_ENABLED) is not yet activated in staging
@unstable_test
Feature: Course Board  - To add a preferred tool in a board

    As a teacher I want to add a preferred tool in my course board

    # @stable_test
    @unstable_test
    Scenario Outline: Teacher adds, edits and deletes tools in a course board
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # Pre-condition: Admin creates a course
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        Then I see section one area on the course create page
        When I enter the course title 'Cypress Test Course'
        When I select 'Karl Herzog' from field teacher
        When I click on button Next Steps after entering the course detail in section one
        Then I see section two area on the course create page
        When I click on button Next Steps after selecting course participant details
        Then I see the section three area as the finish page
        When I click on button To Course Overview on the finish page

        # Pre-condition: Admin adds preferred tools
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

        # Teacher adds a preferred tool without a custom parameter
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course 'Cypress Test Course'
        When I go to the tab contents in course detail page
        When I click on FAB to create new content
        When I click on the button FAB New Column Board
        Then I see a dialog box for column board
        Then I see in dialog box option for multi-column board
        Then I see in dialog box option for single column board
        When I choose multi-column board in the dialog box
        Then I see the page Course Board details
        Then I see the chip Draft in the course board
        When I click on the button Add column in the course board
        When I click on the page outside of the column
        When I click on plus icon to add card in column
        When I click on plus icon to add content into card
        Then I see preferred tool 'CY Test Tool Preferred' in the menu
        When I select preferred tool 'CY Test Tool Preferred' from the menu
        Then I see an external tool element with tool 'CY Test Tool Preferred'

        # Teacher adds a preferred tool with a custom parameter
        When I click on plus icon to add content into card
        Then I see preferred tool 'CY Test Tool Preferred With Param' in the menu
        When I select preferred tool 'CY Test Tool Preferred With Param' from the menu
        Then I see tool 'CY Test Tool Preferred With Param' is selected
        When I enter 'test' in required custom parameter field 'contextParam'
        Then I see custom parameter input field 'contextParam' contains 'test'
        When I click on save external tool button
        Then I see an external tool element with tool 'CY Test Tool Preferred With Param'

        # Post-condition: Admin deletes course
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I go to course administration page
        When I click the delete button for course 'Cypress Test Course' in course table
        Then I see the delete modal
        When I click the confirmation button on the delete modal
        Then I do not see course 'Cypress Test Course' in course table

        # Post-condition: Admin deletes tools
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        Then I see the external tools table
        When I click on delete button of tool 'CY Test Tool Preferred With Param'
        When I confirm deletion on deletion dialog
        Then I do not see the tool 'CY Test Tool Preferred With Param' in external tools table
        When I click on delete button of tool 'CY Test Tool Preferred'
        When I confirm deletion on deletion dialog
        Then I do not see the tool 'CY Test Tool Preferred' in external tools table
        Then I see the external tools table is empty

        @staging_test
        Examples:
            | admin      | teacher      | namespace | fullname_teacher |
            | admin1_nbc | teacher1_nbc | nbc       | Karl Herzog      |

        # @school_api_test
        # This feature is not executable with the school_api
