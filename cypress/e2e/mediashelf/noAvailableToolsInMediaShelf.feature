@regression_test
@stable_test
Feature: No available tools in media shelf

    As a user I want to see the no longer available chip on media element in media shelf

    @stable_test
    Scenario Outline: User sees no longer available chip on media element in media shelf
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'
        Given the school has external tool '<ctl_tool_1>,<ctl_tool_2>'

        # pre-condition: admin adds a tool
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        Then I see the external tools table is empty
        When I click the add external tool button
        Then I see the school external tool configuration page
        Then I see the school external tool configuration infotext
        When I select the tool '<ctl_tool_1>' from available tools
        Then I see tool '<ctl_tool_1>' is selected
        When I click on save external tool button
        Then I see the tool '<ctl_tool_1>' in external tools table

        # teacher moves tool in first media line
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to media shelf
        Then I see the media shelf page title
        Then I see the available media line
        Then I see 1 tools in the available media line
        Then I see tool '<ctl_tool_1>' in the available media line
        When I move tool '<ctl_tool_1>' in to ghost media line
        Then I see the first media line
        Then I see tool '<ctl_tool_1>' in the first media line

        # admin deletes tool
        Given I am logged in as a '<admin>' at '<namespace>'
        Given all external tools at the school are deleted

        # teacher sees 'no longer available' chip on media element
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to media shelf
        Then I see the media shelf page title
        Then I see tool '<ctl_tool_1>' in the first media line
        Then I see the no longer available chip on media element '<ctl_tool_1>'
        # teacher tries to launch tool
        When I try to launch tool '<ctl_tool_1>' in the first media line
        # Then nothing should happen
        When I click the three dot menu button on the first media line
        Then I see the media line menu
        When I click on delete media line button
        Then I see the first media line has been deleted
        Then I see the no available media infotext

        @staging_test
        Examples:
            | admin      | teacher      |  namespace | ctl_tool_1     |
            | admin1_nbc | teacher1_nbc |  nbc       | CY Test Tool 1 |

        @school_api_test
        Examples:
            | admin      | teacher      |  namespace | ctl_tool_1     |
            | admin1_nbc | teacher1_nbc |  nbc       | CY Test Tool 1 |
