@regression_test
@stable_test
Feature: Course - To add, edit and delete a ctl tool in a course

    As a teacher I want to add, edit and delete a ctl tool in my course.

    Scenario: Teacher adds, edits and deletes tools in a course, Student sees course tools but does not see the button to add a tool
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'
        Given the school has external tool '<ctl_tool_1>,<ctl_tool_required_param>,<ctl_tool_optional_param>,<ctl_tool_openstreetmap>'

        # pre-condition: admin creates a course, assign it to teacher and student
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

        # teacher adds a tool without a custom parameter
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        When I click on the tools tab
        Then I see the button to add a tool
        When I click on the button to add a tool
        Then I see the context external tool configuration page
        When I select the tool '<ctl_tool_1>' from available tools
        Then I see tool '<ctl_tool_1>' is selected
        When I click on save external tool button
        Then I see the tool '<ctl_tool_1>' in the tool overview
        Then I see the domain of '<ctl_tool_1>' in the tool overview

        # teacher launches tool
        When I lauch tool '<ctl_tool_1>' with given url '<ctl_tool_launch_url>'
        Then I see tool '<ctl_tool_1>' was launched

        # teacher adds a tool twice but with a different name
        When I click on the button to add a tool
        Then I see the context external tool configuration page
        When I select the tool '<ctl_tool_1>' from available tools
        Then I see tool '<ctl_tool_1>' is selected
        When I enter '<ctl_tool_1_new>' in display name field
        When I click on save external tool button
        Then I see the tool '<ctl_tool_1_new>' in the tool overview

        # teacher adds tool via tool link
        When I click on the button to add a tool
        Then I see the context external tool configuration page
        When I insert the external tool link '<ctl_tool_link>'
        Then I see tool '<ctl_tool_openstreetmap>' is selected
        Then I see custom parameter input field 'mlat' contains '52.40847'
        Then I see custom parameter input field 'mlon' contains '9.80823'
        Then I see custom parameter input field 'zoom' contains '19'
        When I click on save external tool button

        # teacher adds tool with a required custom parameter
        When I click on the button to add a tool
        Then I see the context external tool configuration page
        When I select the tool '<ctl_tool_required_param>' from available tools
        Then I see tool '<ctl_tool_required_param>' is selected
        # when required field is empty
        When I click on save external tool button
        Then I see an error alert
        When I enter '<param_value>' in required custom parameter field '<context_param_name>'
        Then I see custom parameter input field '<context_param_name>' contains '<param_value>'
        When I click on save external tool button
        Then I see the tool '<ctl_tool_required_param>' in the tool overview

        # teacher adds a tool with an optional custom parameter
        When I click on the button to add a tool
        Then I see the context external tool configuration page
        When I select the tool '<ctl_tool_optional_param>' from available tools
        Then I see tool '<ctl_tool_optional_param>' is selected
        When I enter '<param_value>' in optional custom parameter field '<context_param_name>'
        Then I see custom parameter input field '<context_param_name>' contains '<param_value>'
        When I click on save external tool button
        Then I see the tool '<ctl_tool_optional_param>' in the tool overview

        # teacher edits a tool
        When I click on three dot menu of the tool '<ctl_tool_optional_param>'
        When I click on the tool edit button
        Then I see the context external tool configuration page
        When I enter '<param_value_updated>' in optional custom parameter field '<context_param_name>'
        When I click on save external tool button
        Then I see course page '<course_name>'
        When I click on three dot menu of the tool '<ctl_tool_optional_param>'
        When I click on the tool edit button
        Then I see the context external tool configuration page
        Then I see custom parameter input field '<context_param_name>' contains '<param_value_updated>'

        # student sees course tools but does not see the button to add a tool
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        When I click on the tools tab
        Then I do not see the button to add a tool
        Then I see 5 tools
        Then I see the tool '<ctl_tool_1>' in the tool overview
        Then I see the tool '<ctl_tool_1_new>' in the tool overview
        Then I see the tool '<ctl_tool_required_param>' in the tool overview
        Then I see the tool '<ctl_tool_optional_param>' in the tool overview

        # teacher deletes tools from a course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        When I click on the tools tab
        Then I see 5 tools
        When I click on three dot menu of the tool '<ctl_tool_optional_param>'
        When I click on the tool delete button
        Then I see the delete tool dialog
        When I confirm the delete tool dialog
        Then I do not see tool '<ctl_tool_optional_param>' in the tool overview
        Then I see 4 tools

        # post-condition: teacher deletes course
        Given course with name '<course_name>' is deleted

        # post-condition: admin deletes tools
        Given I am logged in as a '<admin>' at '<namespace>'
        Given all external tools at the school are deleted

        @staging_test
        Examples:
            | admin      | teacher      | student      | namespace | course_name                   | fullname_teacher | fullname_student | ctl_tool_1     | ctl_tool_1_new     | ctl_tool_required_param          | school_param_name | context_param_name | param_value | param_value_updated | ctl_tool_optional_param          | ctl_tool_openstreetmap     | ctl_tool_link                                                                             | ctl_tool_launch_url |
            | admin1_nbc | teacher1_nbc | student1_nbc | nbc       | CypressAut CourseWithCtlTools | Karl Herzog      | Herbert Kraft    | CY Test Tool 1 | CY Test Tool 1 New | CY Test Tool Required Parameters | schoolParam       | contextParam       | test        | updated test        | CY Test Tool Optional Parameters | CY Test Tool OpenStreetMap | https://www.openstreetmap.org/?mlat=52.40847&mlon=9.80823&zoom=19#map=19/52.40847/9.80823 | https://google.com/ |

        @school_api_test
        Examples:
            | admin      | teacher      | student      | namespace | course_name                   | fullname_teacher  | fullname_student  | ctl_tool_1     | ctl_tool_1_new     | ctl_tool_required_param          | school_param_name | context_param_name | param_value | param_value_updated | ctl_tool_optional_param          | ctl_tool_openstreetmap     | ctl_tool_link                                                                             | ctl_tool_launch_url |
            | admin1_nbc | teacher1_nbc | student1_nbc | nbc       | CypressAut CourseWithCtlTools | cypress teacher_1 | cypress student_1 | CY Test Tool 1 | CY Test Tool 1 New | CY Test Tool Required Parameters | schoolParam       | contextParam       | test        | updated test        | CY Test Tool Optional Parameters | CY Test Tool OpenStreetMap | https://www.openstreetmap.org/?mlat=52.40847&mlon=9.80823&zoom=19#map=19/52.40847/9.80823 | https://google.com/ |
