@regression_test
@stable_test
@schedule_run
@group-A
Feature: No available tools in media shelf

    As a user I want to see the no longer available chip on media element in media shelf

    @stable_test
    Scenario Outline: User sees no longer available chip on media element in media shelf
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'
        Given the school has external tool '<ctl_tool_1>'

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
            | admin      | teacher      | namespace | ctl_tool_1     |
            | admin1_nbc | teacher1_nbc | nbc       | CY Test Tool 1 |

        @school_api_test
        Examples:
            | admin      | teacher      | namespace | ctl_tool_1     |
            | admin1_nbc | teacher1_nbc | nbc       | CY Test Tool 1 |
