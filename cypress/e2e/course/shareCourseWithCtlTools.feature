@regression_test
@stable_test
@group-D
@schedule_run
@prio_0_staging
Feature: Teacher can share a course with ctl tools

    As a teacher, I want to share a course with ctl tools with other teachers in the same school

    @stable_test
    Scenario Outline: Teacher shares course with ctl tools

        # pre-condition: creating all users accounts and check ctl tools are available
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'
        Given the school has external tool '<ctl_tool_scope_context>,<ctl_tool_optional_protected_param>,<ctl_tool_protected_param>'

        # pre-condition: teacher creates a course and adds tools to the course
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        When I enter the course title '<course_name_share>'
        Then I see teacher '<fullname_teacher_1>' is selected by default
        When I click on button Next Steps after entering the course detail in section one
        When I click on button Next Steps after selecting course participant details
        Then I see the section three area as the finish page
        When I click on button To Course Overview on the finish page
        Then I see the course '<course_name_share>' on the course overview page
        When I go to course '<course_name_share>'
        Then I see course page '<course_name_share>'
        When I click on the tools tab
        Then I see the button to add a tool

        # pre-condition: teacher adds a tool with required parameter
        When I click on the button to add a tool
        Then I see the context external tool configuration page
        When I select the tool '<ctl_tool_scope_context>' from available tools
        When I enter '<param_search_value>' in required custom parameter field '<param_search_1_name>'
        When I click on button Add in the modal to add an external tool
        Then I see the tool '<ctl_tool_scope_context>' in the tool overview

        # pre-condition: teacher adds a tool with optional protected parameter
        When I click on the button to add a tool
        Then I see the context external tool configuration page
        When I select the tool '<ctl_tool_optional_protected_param>' from available tools
        When I enter '<param_search_value>' in required custom parameter field '<param_search_2_name>'
        When I enter '<param_protected_value>' in optional custom parameter field '<param_protected_name>'
        When I click on button Add in the modal to add an external tool
        Then I see the tool '<ctl_tool_optional_protected_param>' in the tool overview

        # pre-condition: teacher adds a tool with required protected parameter
        When I click on the button to add a tool
        Then I see the context external tool configuration page
        When I select the tool '<ctl_tool_protected_param>' from available tools
        When I enter '<param_search_value>' in required custom parameter field '<param_search_2_name>'
        When I select '<param_required_protected_value>' in required protected custom parameter selection
        When I click on button Add in the modal to add an external tool
        Then I see the tool '<ctl_tool_protected_param>' in the tool overview

        # pre-condition: teacher creates a board and adds tools
        When I go to the tab contents in course detail page
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
        When I select external tools from the element selection dialog box
        When I select the tool '<ctl_tool_scope_context>' from available tools
        When I enter '<param_search_value>' in required custom parameter field '<param_search_1_name>'
        When I click on button Add in the modal to add an external tool
        Then I see an external tool element with tool '<ctl_tool_scope_context>'

        # pre-condition: teacher adds a tool with optional protected parameter
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on icon Plus to add content into card
        When I select external tools from the element selection dialog box
        When I select the tool '<ctl_tool_optional_protected_param>' from available tools
        When I enter '<param_search_value>' in required custom parameter field '<param_search_2_name>'
        When I enter '<param_protected_value>' in optional custom parameter field '<param_protected_name>'
        When I click on button Add in the modal to add an external tool
        Then I see an external tool element with tool '<ctl_tool_optional_protected_param>'

        # pre-condition: teacher adds a tool with required parameter
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on icon Plus to add content into card
        When I select external tools from the element selection dialog box
        When I select the tool '<ctl_tool_protected_param>' from available tools
        When I enter '<param_search_value>' in required custom parameter field '<param_search_2_name>'
        When I select '<param_required_protected_value>' in required protected custom parameter selection
        When I click on button Add in the modal to add an external tool
        Then I see an external tool element with tool '<ctl_tool_protected_param>'

        # teacher shares the course with another teacher in the same school
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name_share>'
        Then I see course page '<course_name_share>'
        When I click on button share course
        Then I see the dialog box share course
        Then I see the info text in the dialog box share course
        Then I see the checkbox school internal as checked
        Then I see the checkbox expiry date as checked
        When I click on the button continue in the dialog box share course
        Then I see the import share course url in the dialog box share course result
        Then I see the button mail in the dialog box share course result
        Then I see the button copy link in the dialog box share course result
        Then I see the button mail QR-Code in the dialog box share course result
        When I save the import share course url

        # switch teacher to import shared course
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I go to courses overview
        When I visit the saved import url of the shared course
        Then I see the dialog box import share course
        Then I see the import share course tools info
        Then I see '<course_name_share>' in the course name field
        When I enter '<course_name_import>' in the course name field
        When I click on the button import course
        When I go to course '<course_name_import>'
        Then I see course page '<course_name_import>'

        # teacher sees marked tools in tools tab
        When I click on the tools tab
        Then I see the tool '<ctl_tool_scope_context>' in the tool overview
        Then I see the tool '<ctl_tool_optional_protected_param>' in the tool overview
        Then I see the tool '<ctl_tool_optional_protected_param>' is marked as incomplete operational
        Then I see the tool '<ctl_tool_protected_param>' in the tool overview
        Then I see the tool '<ctl_tool_protected_param>' is marked as incomplete

        # teacher sees marked tools in board
        When I go to the tab contents in course detail page
        When I click on card Course Board
        Then I see an external tool element with tool '<ctl_tool_scope_context>'
        Then I see an external tool element with tool '<ctl_tool_optional_protected_param>'
        Then I see external tool element with tool '<ctl_tool_optional_protected_param>' is marked as incomplete operational
        Then I see an external tool element with tool '<ctl_tool_protected_param>'
        Then I see external tool element with tool '<ctl_tool_protected_param>' is marked as incomplete

        # post-condition: admin deletes courses
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I go to course administration page
        When I click on the delete button of course '<course_name_share>'
        Then I see the delete modal
        When I click the confirmation button on the delete modal
        When I click on the delete button of course '<course_name_import>'
        Then I see the delete modal
        When I click the confirmation button on the delete modal
        # Note: does not work if table is empty
        # Then I do not see course '<course_name_share>' in course table
        # Then I do not see course '<course_name_import>' in course table

        # post-condition: admin deletes external tools
        Given all external tools at the school are deleted

        @staging_test
        Examples:
            | admin      | teacher_1    | teacher_2    | namespace | fullname_teacher_1 | course_name_share       | course_name_import       | ctl_tool_scope_context     | ctl_tool_optional_protected_param         | ctl_tool_protected_param         | param_search_1_name | param_search_2_name | param_search_value | param_protected_name | param_protected_value | param_required_protected_value |
            | admin1_nbc | teacher1_nbc | teacher2_nbc | nbc       | Karl Herzog        | CypressAut Course Share | CypressAut Course Import | CY Test Tool Context Scope | CY Test Tool Optional Protected Parameter | CY Test Tool Protected Parameter | searchparam         | search              | test               | protected            | protected             | Ja                             |

        @school_api_test
        Examples:
            | admin      | teacher_1    | teacher_2    | namespace | fullname_teacher_1 | course_name_share       | course_name_import     | ctl_tool_scope_context     | ctl_tool_optional_protected_param         | ctl_tool_protected_param         | param_search_1_name | param_search_2_name | param_search_value | param_protected_name | param_protected_value | param_required_protected_value |
            | admin1_nbc | teacher1_nbc | teacher2_nbc | nbc       | cypress teacher_1  | CypressAut Course Share | CypressAut Test Import | CY Test Tool Context Scope | CY Test Tool Optional Protected Parameter | CY Test Tool Protected Parameter | searchparam         | search              | test               | protected            | protected             | Ja                             |
