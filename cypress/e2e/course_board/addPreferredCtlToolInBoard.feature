@regression_test
@stable_test
Feature: Course Board  - To add a preferred tool in a board

    As a teacher I want to add a preferred tool in my course board

    Scenario Outline: Teacher adds, edits and deletes tools in a course board
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

        # pre-condition: admin adds preferred tools
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        When I click the add external tool button
        When I select the tool '<ctl_tool_preferred>' from available tools
        When I click on save external tool button
        Then I see the tool '<ctl_tool_preferred>' in external tools table
        When I click the add external tool button
        When I select the tool '<ctl_tool_preferred_param>' from available tools
        When I click on save external tool button
        Then I see the tool '<ctl_tool_preferred_param>' in external tools table

        # teacher adds a preferred tool without a custom parameter
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
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
        When I click on plus icon to add card in column
        When I click on plus icon to add content into card
        Then I see preferred tool '<ctl_tool_preferred>' in the menu
        When I select preferred tool '<ctl_tool_preferred>' from the menu
        Then I see an external tool element with tool '<ctl_tool_preferred>'

        # teacher adds a preferred tool with a custom parameter
        When I click on plus icon to add content into card
        Then I see preferred tool '<ctl_tool_preferred_param>' in the menu
        When I select preferred tool '<ctl_tool_preferred_param>' from the menu
        Then I see tool '<ctl_tool_preferred_param>' is selected
        When I enter 'test' in required custom parameter field 'contextParam'
        Then I see custom parameter input field '<param_name>' contains '<param_value>'
        When I click on save external tool button
        Then I see an external tool element with tool '<ctl_tool_preferred_param>'

        # post-condition: admin deletes course
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I go to course administration page
        When I click the delete button for course '<course_name>' in course table
        Then I see the delete modal
        When I click the confirmation button on the delete modal
        Then I do not see course '<course_name>' in course table

        # post-condition: admin deletes tools
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        Then I see the external tools table
        When I click on delete button of tool '<ctl_tool_preferred_param>'
        When I confirm deletion on deletion dialog
        Then I do not see the tool '<ctl_tool_preferred_param>' in external tools table
        When I click on delete button of tool '<ctl_tool_preferred>'
        When I confirm deletion on deletion dialog
        Then I do not see the tool '<ctl_tool_preferred>' in external tools table
        Then I see the external tools table is empty

        @staging_test
        Examples:
            | admin      | teacher      | namespace | course_name         | fullname_teacher | ctl_tool_preferred_param          | ctl_tool_preferred     | param_name   | param_value |
            | admin1_nbc | teacher1_nbc | nbc       | Cypress Test Course | Karl Herzog      | CY Test Tool Preferred With Param | CY Test Tool Preferred | contextParam | test        |

        @school_api_test
        Examples:
            | admin      | teacher      | namespace | course_name         | fullname_teacher  | ctl_tool_preferred_param          | ctl_tool_preferred     | param_name   | param_value |
            | admin1_nbc | teacher1_nbc | nbc       | Cypress Test Course | cypress teacher_1 | CY Test Tool Preferred With Param | CY Test Tool Preferred | contextParam | test        |
