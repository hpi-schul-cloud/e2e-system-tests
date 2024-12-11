@regression_test
@stable_test
Feature: Media Shelf - Restrict CTL tools to context board-element

    As a teacher I want to add ctl tools with context restriction board-element

    @stable_test
    Scenario: Teacher adds tools with context restriction board-element in a board
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

        # Pre-condition: Admin adds external tools to school
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        When I click the add external tool button
        When I select the tool 'CY Test Tool 1' from available tools
        When I click on save external tool button
        Then I see the tool 'CY Test Tool 1' in external tools table
        Then I see the tool 'CY Test Tool 1' in external tools table has no context restriction
        When I click the add external tool button
        When I select the tool 'CY Test Tool Course Restriction' from available tools
        When I click on save external tool button
        Then I see the tool 'CY Test Tool Course Restriction' in external tools table
        Then I see the tool 'CY Test Tool Course Restriction' in external tools table has context restriction 'Kurs-Tools'
        When I click the add external tool button
        When I select the tool 'CY Test Tool Board-Element Restriction' from available tools
        When I click on save external tool button
        Then I see the tool 'CY Test Tool Board-Element Restriction' in external tools table
        Then I see the tool 'CY Test Tool Board-Element Restriction' in external tools table has context restriction 'Bereiche'
        When I click the add external tool button
        When I select the tool 'CY Test Tool Media-Board Restriction' from available tools
        When I click on save external tool button
        Then I see the tool 'CY Test Tool Media-Board Restriction' in external tools table
        Then I see the tool 'CY Test Tool Media-Board Restriction' in external tools table has context restriction 'Medienregal'
        When I click the add external tool button
        When I select the tool 'CY Test Tool All Restrictions' from available tools
        When I click on save external tool button
        Then I see the tool 'CY Test Tool All Restrictions' in external tools table
        Then I see the tool 'CY Test Tool All Restrictions' in external tools table has context restriction 'Kurs-Tools, Bereiche, Medienregal'
        # Note: This steps are commented out because the required feature flag (FEATURE_PREFERRED_CTL_TOOLS_ENABLED) is not yet activated in staging
        # When I click the add external tool button
        # When I select the tool 'CY Test Tool Preferred Course Restriction' from available tools
        # When I click on save external tool button
        # Then I see the tool 'CY Test Tool Preferred Course Restriction' in external tools table
        # Then I see the tool 'CY Test Tool Preferred Course Restriction' in external tools table has context restriction 'Kurs-Tools'
        # When I click the add external tool button
        # When I select the tool 'CY Test Tool Preferred Board Restriction' from available tools
        # When I click on save external tool button
        # Then I see the tool 'CY Test Tool Preferred Board Restriction' in external tools table
        # Then I see the tool 'CY Test Tool Preferred Board Restriction' in external tools table has context restriction 'Bereiche'

        # Teacher tries to add a tool with context restriction course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course 'Cypress Test Course'
        Then I see course page 'Cypress Test Course'
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
        When I select external tools from the menu
        When I click on the tool configuration selection
        Then I do not see tool 'CY Test Tool Course Restriction' in the tool selection
        # Teacher tries to add a tool with context restriction media-board
        Then I do not see tool 'CY Test Tool Media-Board Restriction' in the tool selection

        # Teacher adds a tool with context restriction board-element
        When I select the tool 'CY Test Tool Board-Element Restriction' from available tools
        Then I see tool 'CY Test Tool Board-Element Restriction' is selected
        When I click on save external tool button
        Then I see an external tool element with tool 'CY Test Tool Board-Element Restriction'

        # Teacher adds a tool with all context restrictions
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on plus icon to add content into card
        When I select external tools from the menu
        When I select the tool 'CY Test Tool All Restrictions' from available tools
        Then I see tool 'CY Test Tool All Restrictions' is selected
        When I click on save external tool button
        Then I see an external tool element with tool 'CY Test Tool All Restrictions'

        # Teacher adds a tool without any context restriction
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on plus icon to add content into card
        When I select external tools from the menu
        When I select the tool 'CY Test Tool 1' from available tools
        Then I see tool 'CY Test Tool 1' is selected
        When I click on save external tool button
        Then I see an external tool element with tool 'CY Test Tool 1'

        # Note: This steps are commented out because the required feature flag (FEATURE_PREFERRED_CTL_TOOLS_ENABLED) is not yet activated in staging
        # # Teacher tries to add a preferred tool with context restriction course
        # When I click on three dot menu in the card
        # When I select the option Edit in three dot menu on the card
        # When I click on plus icon to add content into card
        # Then I do not see preferred tool 'CY Test Tool Preferred Course Restriction' in the menu

        # Note: This steps are commented out because the required feature flag (FEATURE_PREFERRED_CTL_TOOLS_ENABLED) is not yet activated in staging
        # # Teacher adds a preferred tool with context restriction board
        # Then I see preferred tool 'CY Test Tool Preferred Board Restriction' in the menu
        # When I select preferred tool 'CY Test Tool Preferred Board Restriction' from the menu
        # Then I see an external tool element with tool 'CY Test Tool Preferred Board Restriction'

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
        When I click on delete button of tool 'CY Test Tool Course Restriction'
        When I confirm deletion on deletion dialog
        Then I do not see the tool 'CY Test Tool Course Restriction' in external tools table
        When I click on delete button of tool 'CY Test Tool Board-Element Restriction'
        When I confirm deletion on deletion dialog
        Then I do not see the tool 'CY Test Tool Board-Element Restriction' in external tools table
        When I click on delete button of tool 'CY Test Tool Media-Board Restriction'
        When I confirm deletion on deletion dialog
        Then I do not see the tool 'CY Test Tool Media-Board Restriction' in external tools table
        When I click on delete button of tool 'CY Test Tool All Restrictions'
        When I confirm deletion on deletion dialog
        Then I do not see the tool 'CY Test Tool All Restrictions' in external tools table
        # Note: This steps are commented out because the required feature flag (FEATURE_PREFERRED_CTL_TOOLS_ENABLED) is not yet activated in staging
        # When I click on delete button of tool 'CY Test Tool Preferred Course Restriction'
        # When I confirm deletion on deletion dialog
        # Then I do not see the tool 'CY Test Tool Preferred Course Restriction' in external tools table
        # When I click on delete button of tool 'CY Test Tool Preferred Board Restriction'
        # When I confirm deletion on deletion dialog
        # Then I do not see the tool 'CY Test Tool Preferred Board Restriction' in external tools table
        Then I see the external tools table is empty

        @staging_test
        Examples:
            | admin      | teacher      | namespace |
            | admin1_nbc | teacher1_nbc | nbc       |

        # @school_api_test
        # This feature is not executable with the school_api
