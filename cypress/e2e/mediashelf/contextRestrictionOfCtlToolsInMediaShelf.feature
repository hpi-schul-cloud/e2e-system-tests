@regression_test
@stable_test
Feature: Media Shelf - Restrict CTL tools to context media-board

    As a teacher I want to add ctl tools with context restriction media-board

    @stable_test
    Scenario: Teacher sees tools with context restriction media-board in the media shelf
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

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
        When I click the add external tool button

        # Teacher sees tools with context restriction media-board in the media-shelf
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to media shelf
        Then I see the media shelf page title
        Then I see the available media line
        Then I see 3 tools in the available media line
        Then I see tool 'CY Test Tool 1' in the available media line
        Then I see tool 'CY Test Tool Media-Board Restriction' in the available media line
        Then I see tool 'CY Test Tool All Restrictions' in the available media line
        Then I do not see tool 'CY Test Tool Course Restriction' in the available media line
        Then I do not see tool 'CY Test Tool Board-Element Restriction' in the available media line

        # Post-condition: Admin deletes external tools
        Given I am logged in as a '<admin>' at '<namespace>'
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
