@regression_test
@stable_test
Feature: Deactivation of ctl tools in media shelf

    As an User I want to see a deactivated tool in media shelf

    @stable_test
    Scenario Outline: Users see deactivated tool in media shelf
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # Admin adds a tool
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
        Then I see the tool 'CY Test Tool 1' is active in tools table
        # Admin adds a tool and deactivates it
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

        # Teacher can not see a deactivated tool in media shelf
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to media shelf
        Then I see the media shelf page title
        Then I see the available media line
        Then I do not see tool 'CY Test Tool 2' in the available media line
        Then I see 1 tools in the available media line
        Then I see tool 'CY Test Tool 1' in the available media line
        When I move tool 'CY Test Tool 1' in to ghost media line
        Then I see the first media line
        Then I see tool 'CY Test Tool 1' in the first media line

        # Student can not see a deactivated tool in media shelf
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to media shelf
        Then I see the media shelf page title
        Then I see the available media line
        Then I do not see tool 'CY Test Tool 2' in the available media line
        Then I see 1 tools in the available media line
        Then I see tool 'CY Test Tool 1' in the available media line
        When I move tool 'CY Test Tool 1' in to ghost media line
        Then I see the first media line
        Then I see tool 'CY Test Tool 1' in the first media line

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

        # Teacher sees a deactivated tool in media shelf
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to media shelf
        Then I see the media shelf page title
        Then I see tool 'CY Test Tool 1' in the first media line
        Then I see the deactivated chip on media element 'CY Test Tool 1'
        # Teacher tries to launch a deactivated tool in media shelf
        When I try to launch tool 'CY Test Tool 1' in the first media line
        # Then nothing should happen
        When I click the three dot menu button on the first media line
        Then I see the media line menu
        When I click on delete media line button
        Then I see the first media line has been deleted
        Then I see the no available media infotext

        # Student sees a deactivated tool in media shelf
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to media shelf
        Then I see the media shelf page title
        Then I see tool 'CY Test Tool 1' in the first media line
        Then I see the deactivated chip on media element 'CY Test Tool 1'
        # Student tries to launch a deactivated tool in media shelf
        When I try to launch tool 'CY Test Tool 1' in the first media line
        # Then nothing should happen
        When I click the three dot menu button on the first media line
        Then I see the media line menu
        When I click on delete media line button
        Then I see the first media line has been deleted
        Then I see the no available media infotext

        # Post-condition: Admin deletes tools
        Given I am logged in as a '<admin>' at '<namespace>'
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
            | admin      | teacher      | student      | namespace |
            | admin1_nbc | teacher1_nbc | student1_nbc | nbc       |

        # @school_api_test
        # This feature is not executable with the school_api

