@regression_test
@stable_test
Feature: Media Shelf - Restrict CTL tools to context course

    As a teacher I want to add ctl tools with context restriction course

    Scenario: Teacher adds tools with context restriction course in a course
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin creates a course
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        Then I see section one area on the course create page
        When I enter the course title '<course_name>'
        When I select '<fullname_teacher>' from field teacher
        When I click on button Next Steps after entering the course detail in section one
        Then I see section two area on the course create page
        When I click on button Next Steps after selecting course participant details
        Then I see the section three area as the finish page
        When I click on button To Course Overview on the finish page

        # admin adds external tools with context restriction to school
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

        # teacher tries to a tool with context restriction board-element
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        When I click on the tools tab
        Then I see the button to add a tool
        When I click on the button to add a tool
        Then I see the context external tool configuration page
        Then I do not see tool '<ctl_tool_restriction_board_element>' in the tool selection
        # teacher tries to a tool with context restriction media-board
        Then I do not see tool '<ctl_tool_restriction_media_board>' in the tool selection

        # teacher adds a tool with context restriction course
        When I select the tool '<ctl_tool_restriction_course>' from available tools
        Then I see tool '<ctl_tool_restriction_course>' is selected
        When I click on save external tool button
        Then I see the tool '<ctl_tool_restriction_course>' in the tool overview

        # teacher adds a tool with all context restrictions
        When I click on the button to add a tool
        Then I see the context external tool configuration page
        When I select the tool '<ctl_tool_restriction_all>' from available tools
        Then I see tool '<ctl_tool_restriction_all>' is selected
        When I click on save external tool button
        Then I see the tool '<ctl_tool_restriction_all>' in the tool overview

        # teacher adds a tool without any context restriction
        When I click on the button to add a tool
        Then I see the context external tool configuration page
        When I select the tool '<ctl_tool_1>' from available tools
        Then I see tool '<ctl_tool_1>' is selected
        When I click on save external tool button
        Then I see the tool '<ctl_tool_1>' in the tool overview

        # post-condition: teacher deletes course
        Given course with name '<course_name>' is deleted

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
            | admin      | teacher      | namespace | course_name         | fullname_teacher | ctl_tool_1     | ctl_tool_restriction_course     | ctl_tool_restriction_board_element     | ctl_tool_restriction_media_board     | ctl_tool_restriction_all      | context_course | context_board_element | context_media_board | context_all                       |
            | admin1_nbc | teacher1_nbc | nbc       | Cypress Test Course | Karl Herzog      | CY Test Tool 1 | CY Test Tool Course Restriction | CY Test Tool Board-Element Restriction | CY Test Tool Media-Board Restriction | CY Test Tool All Restrictions | Kurs-Tools     | Bereiche              | Medienregal         | Kurs-Tools, Bereiche, Medienregal |

        @school_api_test
        Examples:
            | admin      | teacher      | namespace | course_name         | fullname_teacher  | ctl_tool_1     | ctl_tool_restriction_course     | ctl_tool_restriction_board_element     | ctl_tool_restriction_media_board     | ctl_tool_restriction_all      | context_course | context_board_element | context_media_board | context_all                       |
            | admin1_nbc | teacher1_nbc | nbc       | Cypress Test Course | cypress teacher_1 | CY Test Tool 1 | CY Test Tool Course Restriction | CY Test Tool Board-Element Restriction | CY Test Tool Media-Board Restriction | CY Test Tool All Restrictions | Kurs-Tools     | Bereiche              | Medienregal         | Kurs-Tools, Bereiche, Medienregal |
