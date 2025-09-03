@regression_test
@stable_test
@schedule_run
@group-E
Feature: Course Board  - To add, edit and delete a ctl tool in a board

    As a teacher I want to add, edit and delete a ctl tool in my course board

    Scenario: Teacher adds, edits and deletes tools in a course board
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'
        Given the school has external tool '<ctl_tool_1>,<ctl_tool_required_param>,<ctl_tool_optional_param>,<ctl_tool_openstreetmap>'

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

        # teacher adds a tool without a custom parameter
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
        When I click on icon Plus to add card in column
        When I click on icon Plus to add content into card
        When I select external tools from the element selection dialog box
        When I select the tool '<ctl_tool_1>' from available tools
        Then I see tool '<ctl_tool_1>' is selected
        When I click on button Add in the modal to add an external tool
        Then I see an external tool element with tool '<ctl_tool_1>'
        Then I see the domain of external tool '<ctl_tool_1>'
        # teacher launches tool
        When I launch tool '<ctl_tool_1>' on external tool element with given url '<ctl_tool_launch_url>'
        Then I see tool '<ctl_tool_1>' on external tool element was launched

        # teacher adds a tool twice but with a different name
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on icon Plus to add content into card
        When I select external tools from the element selection dialog box
        When I select the tool '<ctl_tool_1>' from available tools
        Then I see tool '<ctl_tool_1>' is selected
        When I enter '<ctl_tool_1_new>' in display name field
        When I click on button Add in the modal to add an external tool
        Then I see an external tool element with tool '<ctl_tool_1_new>'

        # teacher adds tool via tool link
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on icon Plus to add content into card
        When I select external tools from the element selection dialog box
        When I insert the external tool link '<ctl_tool_link>'
        Then I see tool '<ctl_tool_openstreetmap>' is selected
        Then I see custom parameter input field 'mlat' contains '52.40847'
        Then I see custom parameter input field 'mlon' contains '9.80823'
        Then I see custom parameter input field 'zoom' contains '19'
        When I click on button Add in the modal to add an external tool
        Then I see an external tool element with tool '<ctl_tool_openstreetmap>'

        # teacher adds tool with a required custom parameter
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on icon Plus to add content into card
        When I select external tools from the element selection dialog box
        When I select the tool '<ctl_tool_required_param>' from available tools
        Then I see tool '<ctl_tool_required_param>' is selected
        # when required field is empty
        When I click on button Add in the modal to add an external tool
        Then I see an error alert
        When I enter '<param_value>' in required custom parameter field '<context_param_name>'
        Then I see custom parameter input field '<context_param_name>' contains '<param_value>'
        When I click on button Add in the modal to add an external tool
        Then I see an external tool element with tool '<ctl_tool_required_param>'

        # teacher adds a tool with an optional custom parameter
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on icon Plus to add content into card
        When I select external tools from the element selection dialog box
        When I select the tool '<ctl_tool_optional_param>' from available tools
        Then I see tool '<ctl_tool_optional_param>' is selected
        When I enter '<param_value>' in optional custom parameter field '<context_param_name>'
        Then I see custom parameter input field '<context_param_name>' contains '<param_value>'
        When I click on button Add in the modal to add an external tool
        Then I see an external tool element with tool '<ctl_tool_optional_param>'

        # teacher edits a tool
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on three dot menu of external tool element '<ctl_tool_optional_param>'
        When I click the edit button in three dot menu on the element
        Then I see tool '<ctl_tool_optional_param>' is selected
        Then I see custom parameter input field '<context_param_name>' contains '<param_value>'
        When I enter '<param_value_updated>' in optional custom parameter field '<context_param_name>'
        When I click on button Add in the modal to add an external tool
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on three dot menu of external tool element '<ctl_tool_optional_param>'
        When I click the edit button in three dot menu on the element
        Then I see custom parameter input field '<context_param_name>' contains '<param_value_updated>'
        When I click on button Add in the modal to add an external tool

        # teacher deletes tools from board
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on three dot menu of external tool element '<ctl_tool_optional_param>'
        When I click the delete button in three dot menu on the element
        When I click on the button Remove on the Modal

        # post-condition: teacher deletes course
        Given course with name '<course_name>' is deleted

        # post-condition: admin deletes tools
        Given I am logged in as a '<admin>' at '<namespace>'
        Given all external tools at the school are deleted

        @staging_test
        Examples:
            | admin      | teacher      | namespace | course_name                  | fullname_teacher | ctl_tool_1     | ctl_tool_1_new     | ctl_tool_required_param          | school_param_name | context_param_name | param_value | param_value_updated | ctl_tool_optional_param          | ctl_tool_openstreetmap     | ctl_tool_link                                                                             | ctl_tool_launch_url |
            | admin1_nbc | teacher1_nbc | nbc       | CypressAUT BoardWithCtlTools | Karl Herzog      | CY Test Tool 1 | CY Test Tool 1 New | CY Test Tool Required Parameters | schoolParam       | contextParam       | test        | updated test        | CY Test Tool Optional Parameters | CY Test Tool OpenStreetMap | https://www.openstreetmap.org/?mlat=52.40847&mlon=9.80823&zoom=19#map=19/52.40847/9.80823 | https://google.com/ |

        @school_api_test
        Examples:
            | admin      | teacher      | namespace | course_name                  | fullname_teacher  | ctl_tool_1     | ctl_tool_1_new     | ctl_tool_required_param          | school_param_name | context_param_name | param_value | param_value_updated | ctl_tool_optional_param          | ctl_tool_openstreetmap     | ctl_tool_link                                                                             | ctl_tool_launch_url |
            | admin1_nbc | teacher1_nbc | nbc       | CypressAUT BoardWithCtlTools | cypress teacher_1 | CY Test Tool 1 | CY Test Tool 1 New | CY Test Tool Required Parameters | schoolParam       | contextParam       | test        | updated test        | CY Test Tool Optional Parameters | CY Test Tool OpenStreetMap | https://www.openstreetmap.org/?mlat=52.40847&mlon=9.80823&zoom=19#map=19/52.40847/9.80823 | https://google.com/ |
