@regression_test
@stable_test
Feature: Admin - To edit the moin.schule system configuration

    As an admin I want to be able to edit the moin.schule system configuration

    Scenario: Admin edits the options of the moin.schule system
        # admin edits the options of the moin.schule system
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on authentication panel
        Then I see a systems table
        Then I see system '<system>' of type '<system_type>' in the system table
        When I click on the edit button of system '<system>'
        Then I see the provisioning options page
        Then I see 4 checkboxes with assigned default values
        When I check all checkboxes
        When I click the cancel button on the provisioning options page
        Then I see a systems table
        When I click on the edit button of system '<system>'
        Then I see 4 checkboxes with assigned default values
        When I check all checkboxes
        When I click the save button on the provisioning options page
        Then I see a systems table
        When I click on the edit button of system '<system>'
        Then I see all 4 checkboxes are checked
        When I uncheck all checkboxes
        When I click the save button on the provisioning options page
        Then I see a warning dialog
        When I confirm the dialog
        Then I see a systems table
        When I click on the edit button of system '<system>'
        Then I see all 4 checkboxes are unchecked

        # post-condition: admin resets the options
        When I set the checkboxes to default values
        When I click the save button on the provisioning options page
        Then I see a systems table

        @staging_test
        Examples:
            | admin      | namespace | ctl_tool_hidden     | system | system_type |
            | admin1_nbc | nbc       | CY Test Tool Hidden | SANIS  | oauth       |

        @school_api_test
        Examples:
            | admin      | namespace | ctl_tool_hidden     | system | system_type |
            | admin1_nbc | nbc       | CY Test Tool Hidden | SANIS  | oauth       |
