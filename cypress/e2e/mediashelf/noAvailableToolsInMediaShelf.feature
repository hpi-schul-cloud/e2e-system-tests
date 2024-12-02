@regression_test
@stable_test
Feature: No available tools in media shelf

    As an User I want to see the no longer available chip on media element in media shelf

    @stable_test
    Scenario Outline: Users sees no longer available chip on media element in media shelf
        Given I am logged in as a '<admin>' at '<namespace>'

        # Pre-condition: admin adds a tool
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        Then I see the external tools table is empty
        When I click the add external tool button
        Then I see the external tools configuration page
        Then I see the external tool configuration page title
        Then I see the tool configuration infotext
        When I select the tool 'CY Test Tool 1' from available tools
        Then I see tool 'CY Test Tool 1' is selected
        When I click on save external tool button
        Then I see the tool 'CY Test Tool 1' in external tools table

        # Admin moves tool in first media line
        When I go to media shelf
        Then I see the media shelf page title
        Then I see the available media line
        Then I see 1 tools in the available media line
        Then I see tool 'CY Test Tool 1' in the available media line
        When I move tool 'CY Test Tool 1' in to ghost media line
        Then I see the first media line
        Then I see tool 'CY Test Tool 1' in the first media line

        # Admin deletes tool
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        Then I see the external tools table
        When I click on delete button of tool 'CY Test Tool 1'
        When I confirm deletion on deletion dialog
        Then I see the external tools table is empty

        # Teacher sees no longer available chip on media element
        When I go to media shelf
        Then I see the media shelf page title
        Then I see tool 'CY Test Tool 1' in the first media line
        Then I see the no longer available chip on media element 'CY Test Tool 1'
        # Teacher tries to launch tool
        When I try to launch tool 'CY Test Tool 1' in the first media line
        # Then nothing should happen
        When I click the three dot menu button on the first media line
        Then I see the media line menu
        When I click on delete media line button
        Then I see the first media line has been deleted
        Then I see the no available media infotext


        @staging_test
        Examples:
            | admin      | namespace |
            | admin1_nbc | nbc       |

        # @school_api_test
        # This feature is not executable with the school_api