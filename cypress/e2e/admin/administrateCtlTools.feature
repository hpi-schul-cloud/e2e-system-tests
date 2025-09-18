@regression_test
@stable_test
@group-C
@schedule_run
@pre_check_test
@prio_0_staging
Feature: Admin - Admin adds, edits and deletes CTL tools in school

    As an admin I want to administrate the CTL tools used in the school

    Scenario Outline: Admin adds, edits and deletes external tools

        # pre-condition: admin logs in to create their account in a school
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        Then I see the external tools table is empty
        When I click the add external tool button
        Then I see the school external tool configuration page
        Then I see the school external tool configuration info text
        # admin tries to find a hidden external tool
        Then I do not see tool '<ctl_tool_hidden>' in the tool selection

        # admin adds a tool
        When I select the tool '<ctl_tool_1>' from available tools
        Then I see tool '<ctl_tool_1>' is selected
        When I click on button Add in the modal to add an external tool
        Then I see the tool '<ctl_tool_1>' in external tools table

        # admin adds a tool with required custom parameter
        When I click the add external tool button
        Then I see the school external tool configuration page
        Then I see the school external tool configuration info text
        When I select the tool '<ctl_tool_required_param>' from available tools
        Then I see tool '<ctl_tool_required_param>' is selected
        When I enter '<param_value>' in required custom parameter field '<param_name>'
        Then I see custom parameter input field '<param_name>' contains '<param_value>'
        When I click on button Add in the modal to add an external tool
        Then I see the tool '<ctl_tool_required_param>' in external tools table

        # admin adds a tool via tool link with parameter
        When I click the add external tool button
        Then I see the school external tool configuration page
        Then I see the school external tool configuration info text
        When I insert the external tool link '<ctl_tool_link>'
        Then I see tool '<ctl_tool_openstreetmap>' is selected
        When I click on button Add in the modal to add an external tool
        Then I see the tool '<ctl_tool_openstreetmap>' in external tools table

        # admin adds a tool with optional custom parameter
        When I click the add external tool button
        Then I see the school external tool configuration page
        Then I see the school external tool configuration info text
        When I select the tool '<ctl_tool_optional_param>' from available tools
        Then I see tool '<ctl_tool_optional_param>' is selected
        When I enter '<param_value>' in optional custom parameter field '<param_name>'
        Then I see custom parameter input field '<param_name>' contains '<param_value>'
        When I click on button Add in the modal to add an external tool
        Then I see the tool '<ctl_tool_optional_param>' in external tools table

        # admin edits a tool
        When I click on edit button of tool '<ctl_tool_optional_param>'
        Then I see the school external tool configuration page
        Then I see the school external tool configuration info text
        Then I see tool '<ctl_tool_optional_param>' is selected
        When I enter '<param_value_updated>' in optional custom parameter field '<param_name>'
        When I click on button Add in the modal to add an external tool
        When I click on edit button of tool '<ctl_tool_optional_param>'
        Then I see the school external tool configuration page
        Then I see custom parameter input field '<param_name>' contains '<param_value_updated>'

        # post-condition: admin deletes tools
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        Then I see the external tools table
        Then I see the tool '<ctl_tool_1>' in external tools table
        Then I see the tool '<ctl_tool_required_param>' in external tools table
        Then I see the tool '<ctl_tool_optional_param>' in external tools table
        Then I see the tool '<ctl_tool_openstreetmap>' in external tools table
        When I click on delete button of tool '<ctl_tool_1>'
        Then I see the external tool deletion dialog title
        Then I see the external tool deletion dialog information text
        When I confirm deletion on deletion dialog
        Then I do not see the tool '<ctl_tool_1>' in external tools table
        When I click on delete button of tool '<ctl_tool_required_param>'
        Then I see the external tool deletion dialog title
        Then I see the external tool deletion dialog information text
        When I confirm deletion on deletion dialog
        Then I do not see the tool '<ctl_tool_required_param>' in external tools table
        When I click on delete button of tool '<ctl_tool_optional_param>'
        Then I see the external tool deletion dialog title
        Then I see the external tool deletion dialog information text
        When I confirm deletion on deletion dialog
        Then I do not see the tool '<ctl_tool_optional_param>' in external tools table
        When I click on delete button of tool '<ctl_tool_openstreetmap>'
        Then I see the external tool deletion dialog title
        Then I see the external tool deletion dialog information text
        When I confirm deletion on deletion dialog
        Then I do not see the tool '<ctl_tool_openstreetmap>' in external tools table
        Then I see the external tools table is empty

        @staging_test
        Examples:
            | admin      | namespace | ctl_tool_hidden     | ctl_tool_1     | ctl_tool_required_param          | param_name  | param_value | param_value_updated | ctl_tool_optional_param          | ctl_tool_openstreetmap     | ctl_tool_link                                                                             |
            | admin1_nbc | nbc       | CY Test Tool Hidden | CY Test Tool 1 | CY Test Tool Required Parameters | schoolParam | test        | updated test        | CY Test Tool Optional Parameters | CY Test Tool OpenStreetMap | https://www.openstreetmap.org/?mlat=52.40847&mlon=9.80823&zoom=19#map=19/52.40847/9.80823 |

        @school_api_test
        Examples:
            | admin      | namespace | ctl_tool_hidden     | ctl_tool_1     | ctl_tool_required_param          | param_name  | param_value | param_value_updated | ctl_tool_optional_param          | ctl_tool_openstreetmap     | ctl_tool_link                                                                             |
            | admin1_nbc | nbc       | CY Test Tool Hidden | CY Test Tool 1 | CY Test Tool Required Parameters | schoolParam | test        | updated test        | CY Test Tool Optional Parameters | CY Test Tool OpenStreetMap | https://www.openstreetmap.org/?mlat=52.40847&mlon=9.80823&zoom=19#map=19/52.40847/9.80823 |
