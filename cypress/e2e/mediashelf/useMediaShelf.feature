@regression_test
@stable_test
Feature: Media Shelf - To show media shelf with respective functionality

    As a teacher I want to use the media shelf

    @stable_test
    Scenario: Teacher uses the media shelf
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin adds external tools to school
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        When I click the add external tool button
        When I select the tool '<ctl_tool_1>' from available tools
        When I click on save external tool button
        When I click the add external tool button
        When I select the tool '<ctl_tool_2>' from available tools
        When I click on save external tool button
        Then I see the tool '<ctl_tool_1>' in external tools table
        Then I see the tool '<ctl_tool_2>' in external tools table

        # teacher opens media shelf
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to media shelf
        Then I see the media shelf page title
        Then I see the available media line
        Then I see 2 tools in the available media line
        Then I see tool '<ctl_tool_1>' in the available media line
        Then I see tool '<ctl_tool_2>' in the available media line
        Then I see the thumbnail, title and description of media element '<ctl_tool_1>'
        When I click on grid layout button
        Then I see the grid layout
        When I click on list layout button
        Then I see the list layout

        # teacher tests available media line
        When I click on collapse available media line button
        Then I see the available media line is collapsed
        When I click on collapse available media line button
        Then I see the available media line is not collapsed
        When I click on three dot menu button on available media line
        Then I see the available media line menu
        When I click on color picker button
        Then I see the available background colors
        When I select the background color
        Then I see the available media line has background color '<color_grey>'

        # teacher tests first media line
        When I click add media line button
        Then I see the first media line
        When I double click on the title of the first median line
        When I edit the title of the first median line to '<section_title>'
        Then I see the first media line with title '<section_title>'
        When I click the collapse button on the first media line
        Then I see the first media line is collapsed
        When I click the collapse button on the first media line
        Then I see the first media line is not collapsed
        When I click the three dot menu button on the first media line
        Then I see the media line menu
        When I click on edit title button
        When I edit the title of the first median line to '<section_title_updated>'
        Then I see the first media line with title '<section_title_updated>'
        When I click the three dot menu button on the first media line
        Then I see the media line menu
        When I click on color picker button
        Then I see the available background colors
        When I select the background color
        Then I see the first media line has background color '<color_grey>'
        When I click the three dot menu button on the first media line
        Then I see the media line menu
        When I click on delete media line button
        Then I see the first media line has been deleted

        # test drag & drop in media shelf
        # teacher drags & drops tool in new Line
        When I move tool '<ctl_tool_1>' in to ghost media line
        Then I see the first media line
        Then I see tool '<ctl_tool_1>' in the first media line

        # teacher launches tool in available media line
        When I launch tool '<ctl_tool_2>' in the available media line with given url '<ctl_tool_launch_url>'
        Then I see tool '<ctl_tool_2>' on media element was launched
        # teacher launches tool in first media line
        When I launch tool '<ctl_tool_1>' in the first media line with given url '<ctl_tool_launch_url>'
        Then I see tool '<ctl_tool_1>' on media element was launched

        # teacher drags & drops tool from one line to another line
        When I move tool '<ctl_tool_2>' in the first media line
        Then I see tool '<ctl_tool_2>' in the first media line
        # teacher drags & drops tool in available line
        When I move tool '<ctl_tool_2>' to the empty available media line
        Then I see tool '<ctl_tool_2>' in the available media line

        # teacher deletes line with tool
        When I click the three dot menu button on the first media line
        Then I see the media line menu
        When I click on delete media line button
        Then I see the first media line has been deleted
        Then I see tool '<ctl_tool_1>' in the available media line
        Then I see the first media line has been deleted

        # teacher deletes tool
        When I move tool '<ctl_tool_1>' in to ghost media line
        Then I see the first media line
        Then I see tool '<ctl_tool_1>' in the first media line
        When I move tool '<ctl_tool_2>' in the first media line
        Then I see tool '<ctl_tool_2>' in the first media line
        When I click the three dot menu button on media element '<ctl_tool_1>'
        When I click on delete media element button
        Then I see tool '<ctl_tool_1>' in the available media line

        # post-condition: teacher resets media shelf
        When I click the three dot menu button on the first media line
        Then I see the media line menu
        When I click on delete media line button
        Then I see the first media line has been deleted
        Then I see tool '<ctl_tool_2>' in the available media line
        When I click on three dot menu button on available media line
        Then I see the available media line menu
        When I click on color picker button
        Then I see the available background colors
        When I select default line color
        Then I see the available media line has background color '<color_white>'

        # post-condition: admin deletes external tools
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        Then I see the external tools table
        When I click on delete button of tool '<ctl_tool_1>'
        When I confirm deletion on deletion dialog
        Then I do not see the tool '<ctl_tool_1>' in external tools table
        When I click on delete button of tool '<ctl_tool_2>'
        When I confirm deletion on deletion dialog
        Then I do not see the tool '<ctl_tool_2>' in external tools table
        Then I see the external tools table is empty

        @staging_test
        Examples:
            | admin      | teacher      | namespace | ctl_tool_hidden     | ctl_tool_1     | ctl_tool_2     | color_white          | color_grey           | section_title  | section_title_updated | ctl_tool_launch_url |
            | admin1_nbc | teacher1_nbc | nbc       | CY Test Tool Hidden | CY Test Tool 1 | CY Test Tool 2 | rgb(255, 255, 255) | rgb(251, 233, 231) | Test Abschnitt | Favoriten             | https://google.com/ |


        # @school_api_test
        # This feature is not executable with the school_api
