@regression_test
@stable_test
Feature: Course Board - Copy course with a board which has CTL tools

    As a Teacher I want to be able to copy ctl tools, when I copy a course with ctl tools within a board

    Scenario: Teacher copies a course with a board that has ctl tools
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'
        Given the school has external tool '<ctl_tool_scope_context>,<ctl_tool_optional_protected_param>,<ctl_tool_protected_param>'

        # pre-condition: admin creates a course, assign it to teacher and student
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
        # pre-condition: admin activates student visibility
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        When I click the toggle switch to enable student visibility for teachers
        When I click on button Save admin settings

        # pre-condition: teacher creates a board
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        When I click on FAB to create new content
        When I click on the button FAB New Column Board
        Then I see a dialog box for column board
        Then I see in dialog box option for multi-column board
        Then I see in dialog box option for single-column board
        When I choose multi-column board in the dialog box
        Then I see the page Course Board details
        Then I see the chip Draft in the course board
        When I click on the button Add column in the course board
        When I click on the page outside of the column
        # pre-condition: teacher adds a tool with required parameter
        When I click on icon Plus to add card in column
        When I click on icon Plus to add content into card
        When I select external tools from the menu
        When I select the tool '<ctl_tool_scope_context>' from available tools
        When I enter '<param_search_value>' in required custom parameter field '<param_search_1_name>'
        When I click on save external tool button
        Then I see an external tool element with tool '<ctl_tool_scope_context>'
        # pre-condition: teacher adds a tool with optional protected parameter
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on icon Plus to add content into card
        When I select external tools from the menu
        When I select the tool '<ctl_tool_optional_protected_param>' from available tools
        When I enter '<param_search_value>' in required custom parameter field '<param_search_2_name>'
        When I enter '<param_protected_value>' in optional custom parameter field '<param_protected_name>'
        When I click on save external tool button
        Then I see an external tool element with tool '<ctl_tool_optional_protected_param>'
        # pre-condition: teacher adds a tool with required parameter
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on icon Plus to add content into card
        When I select external tools from the menu
        When I select the tool '<ctl_tool_protected_param>' from available tools
        When I enter '<param_search_value>' in required custom parameter field '<param_search_2_name>'
        When I select '<param_required_protected_value>' in required protected custom parameter selection
        When I click on save external tool button
        Then I see an external tool element with tool '<ctl_tool_protected_param>'

        # teacher copies the course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        When I click on copy course button
        Then I see the copy result notification
        When I close the dialog
        When I go to courses overview
        When I go to course '<course_name_copy>'
        Then I see course page '<course_name_copy>'
        # teacher adds a student to newly copied course
        When I open page Edit course
        Then I see page Edit course
        When I add the first student with search string '<name_student>' to the course
        When I click on button Save changes in page Edit course
        When I go to the tab contents in course detail page
        When I click on card Course Board
        Then I see the page Course Board details
        Then I see the chip Draft in the course board
        When I click on three dot menu in the board header
        When I click on the option Publish in three dot menu in course board
        Then I do not see the chip Draft in the course board
        Then I see an external tool element with tool '<ctl_tool_optional_protected_param>'
        Then I see an external tool element with tool '<ctl_tool_protected_param>'
        Then I see an external tool element with tool '<ctl_tool_scope_context>'
        Then I see external tool element with tool '<ctl_tool_scope_context>' is not marked as incomplete
        # teacher sees marked tool as incomplete operational
        Then I see external tool element with tool '<ctl_tool_optional_protected_param>' is marked as incomplete operational
        # teacher sees marked tool as incomplete
        Then I see external tool element with tool '<ctl_tool_protected_param>' is marked as incomplete
        # teacher launches incomplete operational tool
        When I launch tool '<ctl_tool_optional_protected_param>' on external tool element with given url '<ctl_tool_launch_url>'
        Then I see tool '<ctl_tool_optional_protected_param>' on external tool element was launched
        # teacher tries to launch incomplete tool
        When I click on external tool element with tool '<ctl_tool_protected_param>'
        # Then nothing should happen

        # student sees marked tool as incomplete
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name_copy>'
        Then I see course page '<course_name_copy>'
        When I click on card Course Board
        Then I see the page Course Board details
        Then I see an external tool element with tool '<ctl_tool_optional_protected_param>'
        Then I see an external tool element with tool '<ctl_tool_protected_param>'
        Then I see an external tool element with tool '<ctl_tool_scope_context>'
        Then I see external tool element with tool '<ctl_tool_scope_context>' is not marked as incomplete
        Then I see external tool element with tool '<ctl_tool_optional_protected_param>' is not marked as incomplete operational
        Then I see external tool element with tool '<ctl_tool_protected_param>' is marked as incomplete
        # student launches incomplete operational tool
        When I launch tool '<ctl_tool_optional_protected_param>' on external tool element with given url '<ctl_tool_launch_url>'
        Then I see tool '<ctl_tool_optional_protected_param>' on external tool element was launched
        # student tries to launch incomplete tool
        When I click on external tool element with tool '<ctl_tool_protected_param>'
        # Then nothing should happen

        # teacher fixes the incomplete tools in board
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name_copy>'
        Then I see course page '<course_name_copy>'
        When I go to the tab contents in course detail page
        When I click on card Course Board
        Then I see the page Course Board details
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on three dot menu of external tool element '<ctl_tool_protected_param>'
        When I click the edit button in three dot menu on the element
        Then I see tool '<ctl_tool_protected_param>' is selected
        When I select '<param_required_protected_value>' in required protected custom parameter selection
        When I click on save external tool button
        Then I see external tool element with tool '<ctl_tool_scope_context>' is not marked as incomplete
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on three dot menu of external tool element '<ctl_tool_optional_protected_param>'
        When I click the edit button in three dot menu on the element
        Then I see tool '<ctl_tool_optional_protected_param>' is selected
        When I enter '<param_protected_value>' in optional custom parameter field '<param_protected_name>'
        When I click on save external tool button
        Then I see external tool element with tool '<ctl_tool_optional_protected_param>' is not marked as incomplete operational

        # post-condition: teacher deletes courses
        Given course with name '<course_name>' is deleted
        Given course with name '<course_name_copy>' is deleted

        # post-condition: admin deletes tools
        Given I am logged in as a '<admin>' at '<namespace>'
        Given all external tools at the school are deleted

        @staging_test
        Examples:
            | admin      | teacher      | student      | namespace | course_name                         | course_name_copy                        | fullname_teacher | name_student | ctl_tool_scope_context     | ctl_tool_optional_protected_param         | ctl_tool_protected_param         | param_search_1_name | param_search_2_name | param_search_value | param_protected_name | param_protected_value | param_required_protected_value | ctl_tool_launch_url |
            | admin1_nbc | teacher1_nbc | student1_nbc | nbc       | CypressAUT CopyCourseWithCtlInBoard | CypressAUT CopyCourseWithCtlInBoard (1) | Karl Herzog      | Kraft        | CY Test Tool Context Scope | CY Test Tool Optional Protected Parameter | CY Test Tool Protected Parameter | searchparam         | search              | test               | protected            | protected             | Ja                             | https://google.com/ |

        @school_api_test
        Examples:
            | admin      | teacher      | student      | namespace | course_name                         | course_name_copy                        | fullname_teacher  | name_student | ctl_tool_scope_context     | ctl_tool_optional_protected_param         | ctl_tool_protected_param         | param_search_1_name | param_search_2_name | param_search_value | param_protected_name | param_protected_value | param_required_protected_value | ctl_tool_launch_url |
            | admin1_nbc | teacher1_nbc | student1_nbc | nbc       | CypressAUT CopyCourseWithCtlInBoard | CypressAUT CopyCourseWithCtlInBoard (1) | cypress teacher_1 | student_1    | CY Test Tool Context Scope | CY Test Tool Optional Protected Parameter | CY Test Tool Protected Parameter | searchparam         | search              | test               | protected            | protected             | Ja                             | https://google.com/ |
