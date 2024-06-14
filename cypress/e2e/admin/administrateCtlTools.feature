# @release
Feature: Admin CTL Tools - To add, edit and delete CTL tools by the admin

  As an admin I want to administrate the CTL tools used in the school

  @unstable_test
  Scenario: Admin  adds, edits and deletes external tools
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I click on administration in menu
    When I go to school administration
    When I click on external tools panel
    Then I see the external tools table is empty
    When I click the add external tool button
    Then I see the external tools configuration page
    Then I see the external tool configuration page title
    Then I see the tool configuration infotext
#    Admin tries to find a hidden external tool
    Then I do not see external tool 'CY Test Tool Hidden' in the tool selection
#    Admin adds a tool
    When I select the tool 'CY Test Tool 1' from available tools
    Then I see tool 'CY Test Tool 1' is selected
    When I click on save external tool button
    Then I see the tool 'CY Test Tool 1' in external tools table

#    Admin adds a tool with required custom parameter
    When I click the add external tool button
    Then I see the external tools configuration page
    Then I see the external tool configuration page title
    Then I see the tool configuration infotext
    When I select the tool 'CY Test Tool Required Parameters' from available tools
    Then I see tool 'CY Test Tool Required Parameters' is selected
    When I enter 'test' in required custom parameter input field 'schoolParam'
    Then I see custom parameter input field 'schoolParam' contains 'test'
    When I click on save external tool button
    Then I see the tool 'CY Test Tool Required Parameters' in external tools table

#    Admin adds a tool with optional custom parameter
    When I click the add external tool button
    Then I see the external tools configuration page
    Then I see the external tool configuration page title
    Then I see the tool configuration infotext
    When I select the tool 'CY Test Tool Optional Parameters' from available tools
    Then I see tool 'CY Test Tool Optional Parameters' is selected
    When I enter 'test' in optional custom parameter input field 'schoolParam'
    Then I see custom parameter input field 'schoolParam' contains 'test'
    When I click on save external tool button
    Then I see the tool 'CY Test Tool Optional Parameters' in external tools table

#    Admin edits a tool
    When I click on edit button of tool 'CY Test Tool Optional Parameters'
    Then I see the external tools configuration page
    Then I see the external tool configuration page title
    Then I see the tool configuration infotext
    Then I see tool 'CY Test Tool Optional Parameters' is selected
    When I enter 'updated test' in optional custom parameter input field 'schoolParam'
    Then I see custom parameter input field 'schoolParam' contains 'updated test'
    When I click on save external tool button
    Then I see the tool 'CY Test Tool Optional Parameters' in external tools table
    When I click on edit button of tool 'CY Test Tool Optional Parameters'
    Then I see the external tools configuration page
    Then I see custom parameter input field 'schoolParam' contains 'updated test'

#    Admin deletes tools
    When I click on administration in menu
    When I go to school administration
    When I click on external tools panel
    Then I see the external tools table
    Then I see the tool 'CY Test Tool 1' in external tools table
    Then I see the tool 'CY Test Tool Required Parameters' in external tools table
    Then I see the tool 'CY Test Tool Optional Parameters' in external tools table
    When I click on delete button of tool 'CY Test Tool 1'
    Then I see the external tool deletion dialog title
    Then I see the external tool deletion dialog information text
    When I confirm deletion on deletion dialog
    Then I do not see the tool 'CY Test Tool 1' in external tools table
    When I click on delete button of tool 'CY Test Tool Required Parameters'
    Then I see the external tool deletion dialog title
    Then I see the external tool deletion dialog information text
    When I confirm deletion on deletion dialog
    Then I do not see the tool 'CY Test Tool Required Parameters' in external tools table
    When I click on delete button of tool 'CY Test Tool Optional Parameters'
    Then I see the external tool deletion dialog title
    Then I see the external tool deletion dialog information text
    When I confirm deletion on deletion dialog
    Then I see the external tools table is empty
