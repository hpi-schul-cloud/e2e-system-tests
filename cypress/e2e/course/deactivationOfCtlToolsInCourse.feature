@regression_test
@stable_test
Feature: Deactivation of ctl tools in course

    As a user I want to see deactivated und activated tools in a course

    Scenario: Users see deactivated tool in course
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'
        Given the school has external tool '<ctl_tool_1>,<ctl_tool_2>'

        # pre-condition: admin creates a course
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        Then I see section one area on the course create page
        When I enter the course title '<course_name>'
        When I select '<fullname_teacher>' from field teacher
        When I click on button Next Steps after entering the course detail in section one
        Then I see section two area on the course create page
        When I select '<fullname_student>' from field student
        When I click on button Next Steps after selecting course participant details
        Then I see the section three area as the finish page
        When I click on button To Course Overview on the finish page

        # admin tries to add an deactivated external tool
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        When I click the add external tool button
        Then I see the school external tool configuration page
        Then I do not see tool '<ctl_tool_deactivated>' in the tool selection
        When I click the cancel button on the tool configuration page
        When I click on external tools panel
        # admin deactivates an existing tool
        When I click on edit button of tool '<ctl_tool_2>'
        Then I see tool '<ctl_tool_2>' is selected
        When I deactivate the tool
        Then I see the deactivate checkbox is checked
        When I click on save external tool button
        Then I see the tool '<ctl_tool_2>' is deactivated in external tools table

        # teacher tries to add a deactivated tool in course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        When I click on the tools tab
        Then I see the button to add a tool
        When I click on the button to add a tool
        Then I see the context external tool configuration page
        Then I do not see tool '<ctl_tool_2>' in the tool selection
        # teacher adds a activated tool
        When I select the tool '<ctl_tool_1>' from available tools
        Then I see tool '<ctl_tool_1>' is selected
        When I click on save external tool button
        Then I see the tool '<ctl_tool_1>' in the tool overview

        # admin deactivates an existing tool
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        Then I see the external tools table
        Then I see the tool '<ctl_tool_1>' in external tools table
        When I click on edit button of tool '<ctl_tool_1>'
        Then I see the school external tool configuration page
        Then I see the school external tool configuration infotext
        Then I see tool '<ctl_tool_1>' is selected
        When I deactivate the tool
        Then I see the deactivate checkbox is checked
        When I click on save external tool button
        Then I see the tool '<ctl_tool_1>' in external tools table
        Then I see the tool '<ctl_tool_1>' is deactivated in external tools table

        # teacher tries to launch a deactivated tool in course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        When I click on the tools tab
        Then I see the tool '<ctl_tool_1>' in the tool overview
        Then I see the tool '<ctl_tool_1>' is marked as deactivated
        When I click on the tool '<ctl_tool_1>'
        Then I see an error dialog
        When I close the dialog
        Then I see 1 tools

        # student sees that a tool is marked as deactivated in course
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        When I click on the tools tab
        Then I see the tool '<ctl_tool_1>' in the tool overview
        Then I see the tool '<ctl_tool_1>' is marked as deactivated
        # student tries to launch a deactivated tool in course
        When I click on the tool '<ctl_tool_1>'
        Then I see an error dialog
        When I close the dialog
        Then I see 1 tools

        # admin activates existing deactivated tools
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        Then I see the external tools table
        Then I see the tool '<ctl_tool_1>' in external tools table
        When I click on edit button of tool '<ctl_tool_1>'
        Then I see the school external tool configuration page
        Then I see tool '<ctl_tool_1>' is selected
        When I activate the tool
        Then I see the deactivate checkbox is not checked
        When I click on save external tool button
        Then I see the tool '<ctl_tool_1>' in external tools table
        Then I see the tool '<ctl_tool_1>' is active in tools table
        Then I see the tool '<ctl_tool_2>' in external tools table
        When I click on edit button of tool '<ctl_tool_2>'
        Then I see the school external tool configuration infotext
        Then I see tool '<ctl_tool_2>' is selected
        When I activate the tool
        Then I see the deactivate checkbox is not checked
        When I click on save external tool button
        Then I see the tool '<ctl_tool_2>' in external tools table
        Then I see the tool '<ctl_tool_2>' is active in tools table

        # teacher adds activated tool to course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        When I click on the tools tab
        Then I see the tool '<ctl_tool_1>' in the tool overview
        Then I see the tool '<ctl_tool_1>' is not marked as deactivated
        Then I see the button to add a tool
        When I click on the button to add a tool
        Then I see the context external tool configuration page
        When I select the tool '<ctl_tool_2>' from available tools
        Then I see tool '<ctl_tool_2>' is selected
        When I click on save external tool button
        Then I see the tool '<ctl_tool_2>' in the tool overview

        # student sees activated tools in course
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        When I click on the tools tab
        Then I see the tool '<ctl_tool_1>' in the tool overview
        Then I see the tool '<ctl_tool_1>' is not marked as deactivated
        Then I see the tool '<ctl_tool_2>' in the tool overview
        Then I see the tool '<ctl_tool_2>' is not marked as deactivated

        # post-condition: teacher deletes course
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given course with name '<course_name>' is deleted

        # post-condition: admin deletes external tools
        Given I am logged in as a '<admin>' at '<namespace>'
        Given all external tools at the school are deleted

        @staging_test
        Examples:
            | admin      | teacher      | student      | namespace | fullname_teacher | fullname_student | course_name                       | ctl_tool_1     | ctl_tool_2     | ctl_tool_deactivated                   |
            | admin1_nbc | teacher1_nbc | student1_nbc | nbc       | Karl Herzog      | Herbert Kraft    | CypressAut ToolDeactivationCourse | CY Test Tool 1 | CY Test Tool 2 | CY Test Tool deactivated External Tool |

        @school_api_test
        Examples:
            | admin      | teacher      | student      | namespace | fullname_teacher  | fullname_student  | course_name                       | ctl_tool_1     | ctl_tool_2     | ctl_tool_deactivated                   |
            | admin1_nbc | teacher1_nbc | student1_nbc | nbc       | cypress teacher_1 | cypress student_1 | CypressAut ToolDeactivationCourse | CY Test Tool 1 | CY Test Tool 2 | CY Test Tool deactivated External Tool |
