@regression_test
@stable_test
Feature: Media Shelf - Restrict CTL tools to context media-board

    As a teacher I want to add ctl tools with context restriction media-board

    @stable_test
    Scenario: Teacher sees tools with context restriction media-board in the media shelf
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'
        Given the school has external tool '<ctl_tool_1>,<ctl_tool_restriction_course>,<ctl_tool_restriction_board_element>,<ctl_tool_restriction_media_board>,<ctl_tool_restriction_all>'

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
        Given all external tools at the school are deleted

        @staging_test
        Examples:
            | admin      | teacher      | namespace | ctl_tool_1     | ctl_tool_restriction_course     | ctl_tool_restriction_board_element     | ctl_tool_restriction_media_board     | ctl_tool_restriction_all      | context_course | context_board_element | context_media_board | context_all                       |
            | admin1_nbc | teacher1_nbc | nbc       | CY Test Tool 1 | CY Test Tool Course Restriction | CY Test Tool Board-Element Restriction | CY Test Tool Media-Board Restriction | CY Test Tool All Restrictions | Kurs-Tools     | Bereiche              | Medienregal         | Kurs-Tools, Bereiche, Medienregal |

        @school_api_test
        Examples:
            | admin      | teacher      | namespace | ctl_tool_1     | ctl_tool_restriction_course     | ctl_tool_restriction_board_element     | ctl_tool_restriction_media_board     | ctl_tool_restriction_all      | context_course | context_board_element | context_media_board | context_all                       |
            | admin1_nbc | teacher1_nbc | nbc       | CY Test Tool 1 | CY Test Tool Course Restriction | CY Test Tool Board-Element Restriction | CY Test Tool Media-Board Restriction | CY Test Tool All Restrictions | Kurs-Tools     | Bereiche              | Medienregal         | Kurs-Tools, Bereiche, Medienregal |
