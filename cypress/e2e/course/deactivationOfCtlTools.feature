Feature: Deactivation of ctl tools

  @stable_test
  Scenario: As an admin I can see deactivated external tool in external tool section.
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to administration page
    When I go to school administration
    When I go to new school administration page
    When I click on external tools panel
    Then I see the external tools table
    Then I can see 'CY Test Tool deactivated External Tool' is deactivated in tool table

    @stable_test
  Scenario: As an admin I can add a tool and deactivate it for my school.
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to administration page
    When I go to school administration
    When I go to new school administration page
    When I click on external tools panel
    When I click the add external tool button
      Then I can select the tool 'CY Test Tool active External Tool' from available tools
      Then I can deactivate the tool
      Then I can fill required parameter
      Then I can save external tool configuration
      When I click on external tools panel
      Then I see the external tools table
      Then I can see 'CY Test Tool active External Tool' is deactivated in tool table

  @stable_test
  Scenario: As a Teacher I can not add deactivated tool to a course
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'German'
    When I click on the tools tab
    Then I can see the button to add a tool
    When I click on the button to add a tool
    Then I can see the tool configuration page title
    When I click on the tool configuration selection
    Then I can not select tool 'CY Test Tool active External Tool' in available tools

  @stable_test
  Scenario: As an admin I can activate a tool
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to administration page
    When I go to school administration
    When I go to new school administration page
    When I click on external tools panel
    Then I see the external tools table
    Then I can click on edit button to edit the tool 'CY Test Tool active External Tool'
    Then I can activate the tool
    Then I can save external tool configuration
    When I click on external tools panel
    Then I see the external tools table
    Then I can see 'CY Test Tool active External Tool' is active in tool table

  @stable_test
  Scenario: As a Teacher I can add tool to course
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'German'
    When I click on the tools tab
    Then I can see the button to add a tool
    When I click on the button to add a tool
    Then I can see the tool configuration page title
    When I click on the tool configuration selection
    Then I can see tool 'CY Test Tool active External Tool' in Selection
    Then I can select tool 'CY Test Tool active External Tool' in available tools
    Then I can fill out context parameter
    Then I can save external tool configuration

  @stable_test
  Scenario: As a Teacher I can check if tool is launchable
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'German'
    When I click on the tools tab
    Then I can see the tool 'CY Test Tool active External Tool' in the tool overview
    Then I can check if tool 'CY Test Tool active External Tool' is not marked as deactivated in tools table

  @stable_test
  Scenario: As an admin I can deactivate an existing tool
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to administration page
    When I go to school administration
    When I go to new school administration page
    When I click on external tools panel
    Then I see the external tools table
    Then I can click on edit button to edit the tool 'CY Test Tool active External Tool'
    Then I can deactivate the tool
    Then I can save external tool configuration
    When I click on external tools panel
    Then I see the external tools table
    Then I can see 'CY Test Tool active External Tool' is deactivated in tool table


  @stable_test
  Scenario: Teacher can not launch tool and see dialog for deactivated tool on school scope
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'German'
    When I click on the tools tab
    Then I can see the tool 'CY Test Tool active External Tool' in the tool overview
    Then I can check if tool 'CY Test Tool active External Tool' is marked as deactivated in tools table
    When I can launch the tool 'CY Test Tool active External Tool'
    Then I can see the error dialog of 'CY Test Tool active External Tool'

  @stable_test
  Scenario: Student can not launch tool and see dialog for deactivated tool on school scope
    Given I am logged in as a 'student2_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'German'
    When I click on the tools tab
    Then I can see the tool 'CY Test Tool active External Tool' in the tool overview
    Then I can check if tool 'CY Test Tool active External Tool' is marked as deactivated in tools table
    When I can launch the tool 'CY Test Tool active External Tool'
    Then I can see the error dialog of 'CY Test Tool active External Tool'
