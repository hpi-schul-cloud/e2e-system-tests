Feature: Course - Copy CTL tools

  As a Teacher i want to be able to copy ctl tools, when i copy a course

  @stable_test
  Scenario: Teacher creates a new course as a pre-condition
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I click on FAB to add or import courses
    When I click on FAB to create a new room
    When I enter the course title 'Cypress Test Course Copy'
    Then I see teacher 'Karl Herzog' is selected by default
    When I click on button Next Steps after entering the room detail in section one
    When I click on button Next Steps after selecting room participant details
    Then I see the section three area as the finish page
    When I click on button To Course Overview on the finish page
    Then I see the course 'Cypress Test Course Copy' on the room overview page

  @stable_test
  Scenario: Teacher adds three ctl tools to course as a pre-condition
    When I go to rooms overview
    When I go to room 'Cypress Test Course Copy'
    When I click on the tools tab
    Then I can see the button to add a tool
#    add tool with required parameter
    When I click on the button to add a tool
    Then I can see the tool configuration page title
    When I click on the tool configuration selection
    Then I can select the tool 'CY Test Tool Context Scope' from available tools
    When I enter 'test' in required custom parameter field 'searchparam'
    Then I can save external tool configuration
    Then I can see the tool 'CY Test Tool Context Scope' in the tool overview
#    add tool with optional protected parameter
    When I click on the button to add a tool
    Then I can see the tool configuration page title
    When I click on the tool configuration selection
    Then I can select the tool 'CY Test Tool Optional Protected Parameter' from available tools
    When I enter 'test' in required custom parameter field 'search'
    When I enter 'protected' in optional custom parameter field 'protected'
    Then I can save external tool configuration
    Then I can see the tool 'CY Test Tool Optional Protected Parameter' in the tool overview
#    add tool with required protected parameter
    When I click on the button to add a tool
    Then I can see the tool configuration page title
    When I click on the tool configuration selection
    Then I can select the tool 'CY Test Tool Protected Parameter' from available tools
    When I enter 'test' in required custom parameter field 'search'
    When I select 'Ja' in required protected custom parameter selection
    Then I can save external tool configuration
    Then I can see the tool 'CY Test Tool Protected Parameter' in the tool overview

  @stable_test
  Scenario: Teacher copies the course
    When I go to rooms overview
    When I go to room 'Cypress Test Course Copy'
    When I click on copy course button
    Then I see the copy result notification
    When I close the dialog
    Then I can see room page 'Cypress Test Course Copy (1)'
#    Teacher adds a student to newly copied course
    When I open page Edit course
    Then I can see page Edit course
    When I add the first student with search string 'Amelia' to the course
    When I click on the tools tab
    Then I can see 3 tools
    Then I can see the tool 'CY Test Tool Context Scope' in the tool overview
    Then I can see the tool 'CY Test Tool Protected Parameter' in the tool overview
    Then I can see the tool 'CY Test Tool Optional Protected Parameter' in the tool overview
    Then I see the tool 'CY Test Tool Context Scope' is not marked as incomplete
    Then I see the tool 'CY Test Tool Optional Protected Parameter' is marked as incomplete operational
    Then I see the tool 'CY Test Tool Protected Parameter' is marked as incomplete
    When I click on the tool 'CY Test Tool Protected Parameter'
    Then I can see an error dialog
    When I close the dialog
    Then I can see 3 tools

  @stable_test
  Scenario: Student sees copied ctl tools and incomplete tool cannot be launched
    Given I am logged in as a 'student2_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'Cypress Test Course Copy (1)'
    When I click on the tools tab
    Then I can see 3 tools
    Then I can see the tool 'CY Test Tool Context Scope' in the tool overview
    Then I can see the tool 'CY Test Tool Protected Parameter' in the tool overview
    Then I can see the tool 'CY Test Tool Optional Protected Parameter' in the tool overview
    Then I see the tool 'CY Test Tool Context Scope' is not marked as incomplete
    Then I see the tool 'CY Test Tool Optional Protected Parameter' is not marked as incomplete operational
    Then I see the tool 'CY Test Tool Protected Parameter' is marked as incomplete
    When I click on the tool 'CY Test Tool Protected Parameter'
    Then I can see an error dialog

  @stable_test
  Scenario: Teacher fixes the incomplete tools
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'Cypress Test Course Copy (1)'
    When I click on the tools tab
    When I click on three dot menu of the tool 'CY Test Tool Protected Parameter'
    When I click on the tool edit button of 'CY Test Tool Protected Parameter'
    Then I can see the tool configuration page title
    When I select 'Ja' in required protected custom parameter selection
    When I confirm the update
    When I click on three dot menu of the tool 'CY Test Tool Optional Protected Parameter'
    When I click on the tool edit button of 'CY Test Tool Optional Protected Parameter'
    Then I can see the tool configuration page title
    When I enter 'protected' in optional custom parameter field 'protected'
    When I confirm the update
    Then I can see room page 'Cypress Test Course Copy (1)'
    Then I see the tool 'CY Test Tool Context Scope' is not marked as incomplete
    Then I see the tool 'CY Test Tool Optional Protected Parameter' is not marked as incomplete operational

  @stable_test
  Scenario Outline: Teacher deletes course as a post condition
    When I go to rooms overview
    When I go to room '<course_title>'
    When I open page Edit course
    When I click on the button delete course
    Then I see the modal to confirm the deletion
    When I click on the button delete on the modal to confirm the course deletion
    Then I do not see the course '<course_title>' on the room overview page
    Examples:
      | course_title                 |
      | Cypress Test Course Copy     |
      | Cypress Test Course Copy (1) |
