@unstable_test
Feature: Course - Copy CTL tools

  As a Teacher I want to be able to copy ctl tools, when i copy a course

  @unstable_test
  Scenario: Pre-test: Admin adds external tools to school
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I click on administration in menu
    When I navigate to new school admin page via sub menu
    When I click on external tools panel
    When I click the add external tool button
    When I select the tool 'CY Test Tool Context Scope' from available tools
    When I click on save external tool button
    When I click the add external tool button
    When I select the tool 'CY Test Tool Optional Protected Parameter' from available tools
    When I click on save external tool button
    When I click the add external tool button
    When I select the tool 'CY Test Tool Protected Parameter' from available tools
    When I click on save external tool button
    Then I see the tool 'CY Test Tool Context Scope' in external tools table
    Then I see the tool 'CY Test Tool Optional Protected Parameter' in external tools table
    Then I see the tool 'CY Test Tool Protected Parameter' in external tools table

    #     Teacher creates a course and adds tools to the course
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to courses overview
    When I click on FAB to create a new course depending on sub menu
    When I enter the course title 'Cypress Test Course Copy'
    Then I see teacher 'Karl Herzog' is selected by default
    When I click on button Next Steps after entering the course detail in section one
    When I click on button Next Steps after selecting course participant details
    Then I see the section three area as the finish page
    When I click on button To Course Overview on the finish page
    Then I see the course 'Cypress Test Course Copy' on the course overview page
    When I go to course 'Cypress Test Course Copy'
    Then I see course page 'Cypress Test Course Copy'
    When I click on the tools tab
    Then I see the button to add a tool
    #    Teacher adds a tool with required parameter
    When I click on the button to add a tool
    Then I see the tool configuration page title
    When I click on the tool configuration selection
    When I select the tool 'CY Test Tool Context Scope' from available tools
    When I enter 'test' in required custom parameter field 'searchparam'
    When I click on save external tool button
    Then I see the tool 'CY Test Tool Context Scope' in the tool overview
    #    Teacher adds a tool with optional protected parameter
    When I click on the button to add a tool
    Then I see the tool configuration page title
    When I click on the tool configuration selection
    When I select the tool 'CY Test Tool Optional Protected Parameter' from available tools
    When I enter 'test' in required custom parameter field 'search'
    When I enter 'protected' in optional custom parameter field 'protected'
    When I click on save external tool button
    Then I see the tool 'CY Test Tool Optional Protected Parameter' in the tool overview
    #    Teacher adds a tool with required protected parameter
    When I click on the button to add a tool
    Then I see the tool configuration page title
    When I click on the tool configuration selection
    When I select the tool 'CY Test Tool Protected Parameter' from available tools
    When I enter 'test' in required custom parameter field 'search'
    When I select 'Ja' in required protected custom parameter selection
    When I click on save external tool button
    Then I see the tool 'CY Test Tool Protected Parameter' in the tool overview

  @unstable_test
  Scenario: Teacher copies the course, student sees copied ctl tools and tries to launch a incomplete tool
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to courses overview
    When I go to course 'Cypress Test Course Copy'
    Then I see course page 'Cypress Test Course Copy'
    When I click on copy course button
    Then I see the copy result notification
    When I close the dialog
    Then I see course page 'Cypress Test Course Copy (1)'
    #    Teacher adds a student to newly copied course
    When I open page Edit course
    Then I see page Edit course
    When I add the first student with search string 'Amelia' to the course
    When I click on the tools tab
    Then I see 3 tools
    Then I see the tool 'CY Test Tool Context Scope' in the tool overview
    Then I see the tool 'CY Test Tool Protected Parameter' in the tool overview
    Then I see the tool 'CY Test Tool Optional Protected Parameter' in the tool overview
    Then I see the tool 'CY Test Tool Context Scope' is not marked as incomplete
    Then I see the tool 'CY Test Tool Optional Protected Parameter' is marked as incomplete operational
    Then I see the tool 'CY Test Tool Protected Parameter' is marked as incomplete
    #    Teacher tries to launch incomplete tool
    When I click on the tool 'CY Test Tool Protected Parameter'
    Then I see an error dialog
    When I close the dialog
    Then I see 3 tools

    #  Student sees copied ctl tools and incomplete tool cannot be launched
    Given I am logged in as a 'student2_nbc' at 'nbc'
    When I go to courses overview
    When I go to course 'Cypress Test Course Copy (1)'
    Then I see course page 'Cypress Test Course Copy (1)'
    When I click on the tools tab
    Then I see 3 tools
    Then I see the tool 'CY Test Tool Context Scope' in the tool overview
    Then I see the tool 'CY Test Tool Protected Parameter' in the tool overview
    Then I see the tool 'CY Test Tool Optional Protected Parameter' in the tool overview
    Then I see the tool 'CY Test Tool Context Scope' is not marked as incomplete
    Then I see the tool 'CY Test Tool Optional Protected Parameter' is not marked as incomplete operational
    Then I see the tool 'CY Test Tool Protected Parameter' is marked as incomplete
    #    Student tries to launch incomplete tool
    When I click on the tool 'CY Test Tool Protected Parameter'
    Then I see an error dialog

    #     Teacher fixes the incomplete tools
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to courses overview
    When I go to course 'Cypress Test Course Copy (1)'
    Then I see course page 'Cypress Test Course Copy (1)'
    When I click on the tools tab
    When I click on three dot menu of the tool 'CY Test Tool Protected Parameter'
    When I click on the tool edit button of 'CY Test Tool Protected Parameter'
    Then I see the tool configuration page title
    When I select 'Ja' in required protected custom parameter selection
    When I confirm the update
    When I click on three dot menu of the tool 'CY Test Tool Optional Protected Parameter'
    When I click on the tool edit button of 'CY Test Tool Optional Protected Parameter'
    Then I see the tool configuration page title
    When I enter 'protected' in optional custom parameter field 'protected'
    When I confirm the update
    Then I see course page 'Cypress Test Course Copy (1)'
    Then I see the tool 'CY Test Tool Context Scope' is not marked as incomplete
    Then I see the tool 'CY Test Tool Optional Protected Parameter' is not marked as incomplete operational

  @unstable_test
  Scenario: Post-test: Teacher deletes courses, admin deletes external tools
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to courses overview
    When I go to course 'Cypress Test Course Copy'
    When I open page Edit course
    When I click on the button delete course
    Then I see the modal to confirm the deletion
    When I click on the button delete on the modal to confirm the course deletion
    Then I do not see the course 'Cypress Test Course Copy' on the course overview page
    When I go to courses overview
    When I go to course 'Cypress Test Course Copy (1)'
    When I open page Edit course
    When I click on the button delete course
    Then I see the modal to confirm the deletion
    When I click on the button delete on the modal to confirm the course deletion
    Then I do not see the course 'Cypress Test Course Copy (1)' on the course overview page

    #     Admin deletes external tools
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I click on administration in menu
    When I navigate to new school admin page via sub menu
    When I click on external tools panel
    Then I see the external tools table
    When I click on delete button of tool 'CY Test Tool Context Scope'
    When I confirm deletion on deletion dialog
    When I click on delete button of tool 'CY Test Tool Optional Protected Parameter'
    When I confirm deletion on deletion dialog
    When I click on delete button of tool 'CY Test Tool Protected Parameter'
    When I confirm deletion on deletion dialog

