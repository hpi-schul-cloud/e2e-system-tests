@regression_test
@stable_test
Feature: Teacher can share a course with ctl tools

    As a teacher I want to share a course with ctl tools to other teachers from the same school

    @stable_test
    Scenario: Teacher shares course with ctl tools
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given I am logged in as a '<teacher_2>' at '<namespace>'

        # pre-condition: admin adds tools via selection
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        When I click the add external tool button
        When I select the tool '<ctl_tool_scope_context>' from available tools
        When I click on save external tool button
        Then I see the tool '<ctl_tool_scope_context>' in external tools table
        When I click the add external tool button
        When I select the tool '<ctl_tool_optional_protected_param>' from available tools
        When I click on save external tool button
        Then I see the tool '<ctl_tool_optional_protected_param>' in external tools table
        When I click the add external tool button
        When I select the tool '<ctl_tool_protected_param>' from available tools
        When I click on save external tool button
        Then I see the tool '<ctl_tool_protected_param>' in external tools table

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
        When I click on save external tool button
        Then I see the tool '<ctl_tool_scope_context>' in the tool overview
        # pre-condition: teacher adds a tool with optional protected parameter
        When I click on the button to add a tool
        Then I see the context external tool configuration page
        When I select the tool '<ctl_tool_optional_protected_param>' from available tools
        When I enter '<param_search_value>' in required custom parameter field '<param_search_2_name>'
        When I enter '<param_protected_value>' in optional custom parameter field '<param_protected_name>'
        When I click on save external tool button
        Then I see the tool '<ctl_tool_optional_protected_param>' in the tool overview
        # pre-condition: teacher adds a tool with required protected parameter
        When I click on the button to add a tool
        Then I see the context external tool configuration page
        When I select the tool '<ctl_tool_protected_param>' from available tools
        When I enter '<param_search_value>' in required custom parameter field '<param_search_2_name>'
        When I select '<param_required_protected_value>' in required protected custom parameter selection
        When I click on save external tool button
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
        When I click on plus icon to add card in column
        When I click on plus icon to add content into card
        When I select external tools from the menu
        When I select the tool '<ctl_tool_scope_context>' from available tools
        When I enter '<param_search_value>' in required custom parameter field '<param_search_1_name>'
        When I click on save external tool button
        Then I see an external tool element with tool '<ctl_tool_scope_context>'
        # pre-condition: teacher adds a tool with optional protected parameter
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on plus icon to add content into card
        When I select external tools from the menu
        When I select the tool '<ctl_tool_optional_protected_param>' from available tools
        When I enter '<param_search_value>' in required custom parameter field '<param_search_2_name>'
        When I enter '<param_protected_value>' in optional custom parameter field '<param_protected_name>'
        When I click on save external tool button
        Then I see an external tool element with tool '<ctl_tool_optional_protected_param>'
        # pre-condition: teacher adds a tool with required parameter
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on plus icon to add content into card
        When I select external tools from the menu
        When I select the tool '<ctl_tool_protected_param>' from available tools
        When I enter '<param_search_value>' in required custom parameter field '<param_search_2_name>'
        When I select '<param_required_protected_value>' in required protected custom parameter selection
        When I click on save external tool button
        Then I see an external tool element with tool '<ctl_tool_protected_param>'

        # teacher shares the course with another teacher in the same school
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name_share>'
        Then I see course page '<course_name_share>'
        When I click on share course button
        Then I see the share course dialog box
        Then I see the info text in the share course dialog
        Then I see the school internal checkbox as checked
        Then I see the expiry date checkbox as checked
        When I click on the continue button in the share course dialog
        Then I see the import share course url in the share course result dialog
        Then I see the mail button in the share course result dialog
        Then I see the copy link button in the share course result dialog
        Then I see the mail QR-Code button in the share course result dialog
        When I save the import share course url
        # switch teacher to import shared course
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I go to courses overview
        When I visit the saved import url of the shared course
        Then I see the import share course dialog
        Then I see the import share course tools info
        Then I see '<course_name_share>' in the course name field
        When I enter '<course_name_import>' in the course name field
        When I click on the import course button
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
        When I click the delete button for course '<course_name_share>' in course table
        Then I see the delete modal
        When I click the confirmation button on the delete modal
        When I click the delete button for course '<course_name_import>' in course table
        Then I see the delete modal
        When I click the confirmation button on the delete modal
        Then I do not see course '<course_name_share>' in course table
        Then I do not see course '<course_name_import>' in course table

        # post-condition: admin deletes external tools
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        Then I see the external tools table
        When I click on delete button of tool '<ctl_tool_scope_context>'
        When I confirm deletion on deletion dialog
        Then I do not see the tool '<ctl_tool_scope_context>' in external tools table
        When I click on delete button of tool '<ctl_tool_optional_protected_param>'
        When I confirm deletion on deletion dialog
        Then I do not see the tool '<ctl_tool_optional_protected_param>' in external tools table
        When I click on delete button of tool '<ctl_tool_protected_param>'
        When I confirm deletion on deletion dialog
        Then I do not see the tool '<ctl_tool_protected_param>' in external tools table
        Then I see the external tools table is empty

        @staging_test
        Examples:
            | admin      | teacher_1    | teacher_2    | namespace | fullname_teacher_1 | course_name_share         | course_name_import         | ctl_tool_scope_context     | ctl_tool_optional_protected_param         | ctl_tool_protected_param         | param_search_1_name | param_search_2_name | param_search_value | param_protected_name | param_protected_value | param_required_protected_value |
            | admin1_nbc | teacher1_nbc | teacher2_nbc | nbc       | Karl Herzog        | Cypress Test Course Share | Cypress Test Course Import | CY Test Tool Context Scope | CY Test Tool Optional Protected Parameter | CY Test Tool Protected Parameter | searchparam         | search              | test               | protected            | protected             | Ja                             |

        # @school_api_test
        # This feature is not executable with the school_api
