@regression_test
@stable_test
Feature: Deactivation of ctl tools in board

    As a user I want to see deactivated und activated tools in a board

    @stable_test
    Scenario Outline: Users see deactivated tool in board
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

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

        # pre-condition: admin adds a tool
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        Then I see the external tools table is empty
        When I click the add external tool button
        Then I see the school external tool configuration page
        When I select the tool '<ctl_tool_1>' from available tools
        Then I see tool '<ctl_tool_1>' is selected
        When I click on save external tool button
        Then I see the tool '<ctl_tool_1>' in external tools table
        Then I see the tool '<ctl_tool_1>' is active in tools table
        # pre-condition: admin adds a tool and deactivates it
        When I click the add external tool button
        Then I see the school external tool configuration page
        When I select the tool '<ctl_tool_2>' from available tools
        Then I see tool '<ctl_tool_2>' is selected
        When I deactivate the tool
        Then I see the deactivate checkbox is checked
        When I click on save external tool button
        Then I see the tool '<ctl_tool_2>' in external tools table
        Then I see the tool '<ctl_tool_2>' is deactivated in external tools table

        # teacher tries to add a deactivated tool in board
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        When I click on FAB to create new content
        When I click on the button FAB New Column Board
        Then I see a dialog box for column board
        When I choose multi-column board in the dialog box
        Then I see the page Course Board details
        Then I see the chip Draft in the course board
        When I click on three dot menu in the board header
        When I click on the option Publish in three dot menu in course board
        Then I do not see the chip Draft in the course board
        When I click on the button Add column in the course board
        When I click on the page outside of the column
        When I click on plus icon to add card in column
        When I click on plus icon to add content into card
        When I select external tools from the menu
        Then I do not see tool '<ctl_tool_2>' in the tool selection
        # teacher adds a activated tool
        When I select the tool '<ctl_tool_1>' from available tools
        Then I see tool '<ctl_tool_1>' is selected
        When I click on save external tool button
        Then I see an external tool element with tool '<ctl_tool_1>'

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

        # teacher sees that a tool is marked as deactivated in board
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        When I click on card Course Board
        Then I see the page Course Board details
        Then I see an external tool element with tool '<ctl_tool_1>'
        Then I see an external tool element with tool '<ctl_tool_1>' is marked as deactivated
        # teacher tries to launch a deactivated tool
        When I click on external tool element with tool '<ctl_tool_1>'
        # Then nothing should happen

        # student sees that a tool is marked as deactivated in board
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        When I go to the tab contents in course detail page
        When I click on card Course Board
        Then I see the page Course Board details
        Then I see an external tool element with tool '<ctl_tool_1>'
        Then I see an external tool element with tool '<ctl_tool_1>' is marked as deactivated
        # student tries to launch a deactivated tool
        When I click on external tool element with tool '<ctl_tool_1>'
        # Then nothing should happen

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

        # teacher adds activated tool to a board
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        When I click on card Course Board
        Then I see the page Course Board details
        Then I see an external tool element with tool '<ctl_tool_1>'
        Then I see an external tool element with tool '<ctl_tool_1>' is not marked as deactivated
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on plus icon to add content into card
        When I select external tools from the menu
        When I select the tool '<ctl_tool_2>' from available tools
        Then I see tool '<ctl_tool_2>' is selected
        When I click on save external tool button
        Then I see an external tool element with tool '<ctl_tool_2>'

        # student sees activated tools in board
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        When I click on card Course Board
        Then I see the page Course Board details
        Then I see an external tool element with tool '<ctl_tool_1>'
        Then I see an external tool element with tool '<ctl_tool_1>' is not marked as deactivated
        Then I see an external tool element with tool '<ctl_tool_2>'
        Then I see an external tool element with tool '<ctl_tool_2>' is not marked as deactivated

        # post-condition: admin deletes course
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I go to course administration page
        When I click the delete button for course '<course_name>' in course table
        Then I see the delete modal
        When I click the confirmation button on the delete modal
        Then I do not see course '<course_name>' in course table

        # post-condition: admin deletes external tools
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
            | admin      | teacher      | student      | namespace | fullname_teacher | fullname_student | course_name         | ctl_tool_1     | ctl_tool_2     |
            | admin1_nbc | teacher1_nbc | student1_nbc | nbc       | Karl Herzog      | Herbert Kraft    | Cypress Test Course | CY Test Tool 1 | CY Test Tool 2 |

        # Note: uncomment this once the bug with student login has been fixed
        # @school_api_test
        # Examples:
        #     | admin      | teacher      | student      | namespace | fullname_teacher  | fullname_student  | course_name         | ctl_tool_1     | ctl_tool_2     |
        #     | admin1_nbc | teacher1_nbc | student1_nbc | nbc       | cypress teacher_1 | cypress student_1 | Cypress Test Course | CY Test Tool 1 | CY Test Tool 2 |
