@regression_test
@stable_test
Feature: Media Shelf - Restrict CTL tools to context course

    As a teacher I want to add ctl tools with context restriction course

    @stable_test
    Scenario: Teacher adds tools with context restriction course in a course
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

        # Admin adds external tools with context restriction to school
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
        When I click the add external tool button

        # Teacher tries to a tool with context restriction board-element
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course 'Cypress Test Course'
        Then I see course page 'Cypress Test Course'
        When I click on the tools tab
        Then I see the button to add a tool
        When I click on the button to add a tool
        Then I see the tool configuration page title
        When I click on the tool configuration selection
        Then I do not see tool 'CY Test Tool Board-Element Restriction' in the tool selection
        # Teacher tries to a tool with context restriction media-board
        Then I do not see tool 'CY Test Tool Media-Board Restriction' in the tool selection

        # Teacher adds a tool with context restriction course
        When I select the tool 'CY Test Tool Course Restriction' from available tools
        Then I see tool 'CY Test Tool Course Restriction' is selected
        When I click on save external tool button
        Then I see the tool 'CY Test Tool Course Restriction' in the tool overview

        # Teacher adds a tool with all context restrictions
        When I click on the button to add a tool
        Then I see the tool configuration page title
        When I click on the tool configuration selection
        When I select the tool 'CY Test Tool All Restrictions' from available tools
        Then I see tool 'CY Test Tool All Restrictions' is selected
        When I click on save external tool button
        Then I see the tool 'CY Test Tool All Restrictions' in the tool overview

        # Teacher adds a tool without any context restriction
        When I click on the button to add a tool
        Then I see the tool configuration page title
        When I click on the tool configuration selection
        When I select the tool 'CY Test Tool 1' from available tools
        Then I see tool 'CY Test Tool 1' is selected
        When I click on save external tool button
        Then I see the tool 'CY Test Tool 1' in the tool overview

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
        Then I see the external tools table is empty

        @staging_test
        Examples:
            | admin      | teacher      | namespace |
            | admin1_nbc | teacher1_nbc | nbc       |

        # @school_api_test
        # This feature is not executable with the school_api
