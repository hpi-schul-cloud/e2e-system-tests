@regression_test
@stable_test
Feature: Media Shelf - Restrict CTL tools to context media-board

    As a teacher I want to add ctl tools with context restriction media-board

    @stable_test
    Scenario: Teacher sees tools with context restriction media-board in the media shelf
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: Admin adds external tools to school
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        When I click the add external tool button
        When I select the tool '<ctl_tool_1>' from available tools
        When I click on save external tool button
        Then I see the tool '<ctl_tool_1>' in external tools table
        Then I see the tool '<ctl_tool_1>' in external tools table has no context restriction
        When I click the add external tool button
        When I select the tool '<ctl_tool_restriction_course>' from available tools
        When I click on save external tool button
        Then I see the tool '<ctl_tool_restriction_course>' in external tools table
        Then I see the tool '<ctl_tool_restriction_course>' in external tools table has context restriction '<context_course>'
        When I click the add external tool button
        When I select the tool '<ctl_tool_restriction_board_element>' from available tools
        When I click on save external tool button
        Then I see the tool '<ctl_tool_restriction_board_element>' in external tools table
        Then I see the tool '<ctl_tool_restriction_board_element>' in external tools table has context restriction '<context_board_element>'
        When I click the add external tool button
        When I select the tool '<ctl_tool_restriction_media_board>' from available tools
        When I click on save external tool button
        Then I see the tool '<ctl_tool_restriction_media_board>' in external tools table
        Then I see the tool '<ctl_tool_restriction_media_board>' in external tools table has context restriction '<context_media_board>'
        When I click the add external tool button
        When I select the tool '<ctl_tool_restriction_all>' from available tools
        When I click on save external tool button
        Then I see the tool '<ctl_tool_restriction_all>' in external tools table
        Then I see the tool '<ctl_tool_restriction_all>' in external tools table has context restriction '<context_all>'
        When I click the add external tool button

        # teacher sees tools with context restriction media-board in the media-shelf
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to media shelf
        Then I see the media shelf page title
        Then I see the available media line
        Then I see 3 tools in the available media line
        Then I see tool '<ctl_tool_1>' in the available media line
        Then I see tool '<ctl_tool_restriction_media_board>' in the available media line
        Then I see tool '<ctl_tool_restriction_all>' in the available media line
        Then I do not see tool '<ctl_tool_restriction_course>' in the available media line
        Then I do not see tool '<ctl_tool_restriction_board_element>' in the available media line

        # post-condition: admin deletes external tools
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        Then I see the external tools table
        When I click on delete button of tool '<ctl_tool_1>'
        When I confirm deletion on deletion dialog
        Then I do not see the tool '<ctl_tool_1>' in external tools table
        When I click on delete button of tool '<ctl_tool_restriction_course>'
        When I confirm deletion on deletion dialog
        Then I do not see the tool '<ctl_tool_restriction_course>' in external tools table
        When I click on delete button of tool '<ctl_tool_restriction_board_element>'
        When I confirm deletion on deletion dialog
        Then I do not see the tool '<ctl_tool_restriction_board_element>' in external tools table
        When I click on delete button of tool '<ctl_tool_restriction_media_board>'
        When I confirm deletion on deletion dialog
        Then I do not see the tool '<ctl_tool_restriction_media_board>' in external tools table
        When I click on delete button of tool '<ctl_tool_restriction_all>'
        When I confirm deletion on deletion dialog
        Then I do not see the tool '<ctl_tool_restriction_all>' in external tools table
        Then I see the external tools table is empty

        @staging_test
        Examples:
            | admin      | teacher      | namespace | ctl_tool_1     | ctl_tool_restriction_course     | ctl_tool_restriction_board_element     | ctl_tool_restriction_media_board     | ctl_tool_restriction_all      | context_course | context_board_element | context_media_board | context_all                       |
            | admin1_nbc | teacher1_nbc | nbc       | CY Test Tool 1 | CY Test Tool Course Restriction | CY Test Tool Board-Element Restriction | CY Test Tool Media-Board Restriction | CY Test Tool All Restrictions | Kurs-Tools     | Bereiche              | Medienregal         | Kurs-Tools, Bereiche, Medienregal |

        @school_api_test
        Examples:
            | admin      | teacher      | namespace | ctl_tool_1     | ctl_tool_restriction_course     | ctl_tool_restriction_board_element     | ctl_tool_restriction_media_board     | ctl_tool_restriction_all      | context_course | context_board_element | context_media_board | context_all                       |
            | admin1_nbc | teacher1_nbc | nbc       | CY Test Tool 1 | CY Test Tool Course Restriction | CY Test Tool Board-Element Restriction | CY Test Tool Media-Board Restriction | CY Test Tool All Restrictions | Kurs-Tools     | Bereiche              | Medienregal         | Kurs-Tools, Bereiche, Medienregal |
