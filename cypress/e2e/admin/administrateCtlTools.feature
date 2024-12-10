@stable_test
@regression_test
Feature: Admin CTL Tools - To add, edit and delete CTL tools by the admin

	As an admin I want to administrate the CTL tools used in the school

	#Note: Ctl tools are already created manually on the main-nbc, on staging-nbc specifically for the cypress test and it starts with the prefix CY.

	Scenario: Admin  adds, edits and deletes external tools
		Given I am logged in as a '<admin>' at '<namespace>'
		When I click on administration in menu
		When I navigate to new school admin page via sub menu
		When I click on external tools panel
		Then I see the external tools table is empty
		When I click the add external tool button
		Then I see the external tools configuration page
		Then I see the external tool configuration page title
		Then I see the external tool configuration page title
		Then I see the tool configuration infotext
		# Admin tries to find a hidden external tool
		Then I do not see external tool '<hidden_tool_name>' in the tool selection

		# Admin adds a tool
		When I select the tool '<ctl_tool_on_list>' from available tools
		Then I see tool '<ctl_tool_on_list>' is selected
		When I click on save external tool button
		Then I see the tool '<ctl_tool_on_list>' in external tools table

		# Admin adds a tool with required custom parameter
		When I click the add external tool button
		Then I see the external tools configuration page
		Then I see the external tool configuration page title
		Then I see the tool configuration infotext
		When I select the tool '<ctl_tool_with_required_param>' from available tools
		Then I see tool '<ctl_tool_with_required_param>' is selected
		When I enter '<param_name>' in required custom parameter input field schoolParam
		Then I see custom parameter input field schoolParam contains '<param_name>'
		When I click on save external tool button
		Then I see the tool '<ctl_tool_with_required_param>' in external tools table

		# Admin adds a tool via tool link with parameter
		When I click the add external tool button
		Then I see the external tools configuration page
		Then I see the external tool configuration page title
		Then I see the tool configuration infotext
		When I insert the external tool link 'https://www.openstreetmap.org/?mlat=52.40847&mlon=9.80823&zoom=19#map=19/52.40847/9.80823'
		Then I see tool '<linked_tool_name>' is selected
		When I click on save external tool button
		Then I see the tool '<linked_tool_name>' in external tools table

		# Admin adds a tool with optional custom parameter
		When I click the add external tool button
		Then I see the external tools configuration page
		Then I see the external tool configuration page title
		Then I see the tool configuration infotext
		When I select the tool '<ctl_tool_with_optional_param>' from available tools
		Then I see tool '<ctl_tool_with_optional_param>' is selected
		When I enter '<param_name>' in optional custom parameter input field schoolParam
		Then I see custom parameter input field schoolParam contains '<param_name>'
		When I click on save external tool button
		Then I see the tool '<ctl_tool_with_optional_param>' in external tools table

		# Admin edits a tool
		When I click on edit button of tool '<ctl_tool_with_optional_param>'
		Then I see the external tools configuration page
		Then I see the external tool configuration page title
		Then I see the tool configuration infotext
		Then I see tool '<ctl_tool_with_optional_param>' is selected
		When I enter '<updated_param_name>' in optional custom parameter input field schoolParam
		Then I see custom parameter input field schoolParam contains '<updated_param_name>'
		When I click on save external tool button
		Then I see the tool '<ctl_tool_with_optional_param>' in external tools table
		When I click on edit button of tool '<ctl_tool_with_optional_param>'
		Then I see the external tools configuration page
		Then I see custom parameter input field schoolParam contains '<updated_param_name>'

		# Admin deletes tools
		When I click on administration in menu
		When I navigate to new school admin page via sub menu
		When I click on external tools panel
		Then I see the external tools table
		Then I see the tool '<ctl_tool_on_list>' in external tools table
		Then I see the tool '<ctl_tool_with_required_param>' in external tools table
		Then I see the tool '<ctl_tool_with_optional_param>' in external tools table
		When I click on delete button of tool '<ctl_tool_on_list>'
		Then I see the external tool deletion dialog title
		Then I see the external tool deletion dialog information text
		When I confirm deletion on deletion dialog
		Then I do not see the tool '<ctl_tool_on_list>' in external tools table
		When I click on delete button of tool '<ctl_tool_with_required_param>'
		Then I see the external tool deletion dialog title
		Then I see the external tool deletion dialog information text
		When I confirm deletion on deletion dialog
		Then I do not see the tool '<ctl_tool_with_required_param>' in external tools table
		When I click on delete button of tool '<ctl_tool_with_optional_param>'
		Then I see the external tool deletion dialog title
		Then I see the external tool deletion dialog information text
		When I confirm deletion on deletion dialog
		When I click on delete button of tool '<linked_tool_name>'
		Then I see the external tool deletion dialog title
		Then I see the external tool deletion dialog information text
		When I confirm deletion on deletion dialog
		Then I do not see the tool '<linked_tool_name>' in external tools table
		Then I see the external tools table is empty

		@school_api_test
		Examples:
			| namespace | admin      | hidden_tool_name    | ctl_tool_on_list | ctl_tool_with_required_param     | param_name | linked_tool_name | ctl_tool_with_optional_param     | updated_param_name |
			| nbc       | admin1_nbc | CY Test Tool Hidden | CY Test Tool 1   | CY Test Tool Required Parameters | test       | OpenStreetMap    | CY Test Tool Optional Parameters | updated test       |

		@staging_test
		Examples:
			| namespace | admin      | hidden_tool_name    | ctl_tool_on_list | ctl_tool_with_required_param     | param_name | linked_tool_name | ctl_tool_with_optional_param     | updated_param_name |
			| nbc       | admin1_nbc | CY Test Tool Hidden | CY Test Tool 1   | CY Test Tool Required Parameters | test       | OpenStreetMap    | CY Test Tool Optional Parameters | updated test       |
