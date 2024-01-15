Feature: Course - Copy CTL tools

  As a Teacher i want to be able to copy ctl tools, when i copy a course

  @stable_test
  Scenario: Teacher can copy course
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'Mathe'
    When I click on copy course button
    Then I see the copy result notification
    When I close the dialog
    Then I can see room page 'Mathe (1)'

  @stable_test
  Scenario: Teacher can see copied ctl tools and incomplete tools cannot be launched
    Given I see room page 'Mathe (1)'
    When I click on the tools tab
    Then I can see 2 tools
    Then I can see the tool 'CY Test Tool Context Scope' in the tool overview
    Then I can see the tool 'CY Test Tool Protected Parameter' in the tool overview
    Then I see the tool 'CY Test Tool Context Scope' is not marked as incomplete
    Then I see the tool 'CY Test Tool Protected Parameter' is marked as incomplete
    When I click on the tool 'CY Test Tool Protected Parameter'
    Then I can see an error dialog

  @stable_test
  Scenario: admin adds student to newly copied course
    Given I am logged in as a 'admin1_nbc' at 'nbc'
    When I go to administration page
    When I go to course administration
    When I click on edit button of course 'Mathe (1)'
    When I add the first student with search string 'Amelia' to the course
    Then I see course administration page


  @stable_test
  Scenario: student can see copied ctl tools and incomplete tools cannot be launched
    Given I am logged in as a 'student2_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'Mathe (1)'
    When I click on the tools tab
    Then I can see 2 tools
    Then I can see the tool 'CY Test Tool Context Scope' in the tool overview
    Then I can see the tool 'CY Test Tool Protected Parameter' in the tool overview
    Then I see the tool 'CY Test Tool Context Scope' is not marked as incomplete
    Then I see the tool 'CY Test Tool Protected Parameter' is marked as incomplete
    When I click on the tool 'CY Test Tool Protected Parameter'
    Then I can see an error dialog

  @stable_test
  Scenario: Teacher fixes the incomplete tool so it is launchable
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'Mathe (1)'
    When I click on the tools tab
    When I click on three dot menu of the tool 'CY Test Tool Protected Parameter'
    When I click on the tool edit button of 'CY Test Tool Protected Parameter'
    Then I can see the tool configuration page title
    When I fill out the required value
    When I confirm the update
    Then I can see room page 'Mathe (1)'
    Then I see the tool 'CY Test Tool Context Scope' is not marked as incomplete

  @stable_test
  Scenario: As a post-condition Teacher deletes the copied course
    Given I see room page 'Mathe (1)'
    When I click on edit course
    When I click on the button delete course
    When I click on the button delete on the modal to confirm the course deletion
    Then I do not see the course 'Mathe (1)' on the room overview page

