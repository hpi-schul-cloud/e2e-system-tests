Feature: Course - Show outdated tool

  As a student and teacher I want to see an outdated ctl tool to my course.

  @stable_test
  Scenario: Student can see outdated dialog for outdated tool
    Given I am logged in as a 'student2_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'German'
    When I click on the tools tab
    Then I can see the outdated tool 'Cypress Test Tool School Scope' in the tool overview
    When I click on the outdated tool 'Cypress Test Tool School Scope'
    Then I can see the outdated dialog of 'Cypress Test Tool School Scope'

  @stable_test
  Scenario: Teacher can see outdated dialog for outdated tool
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'German'
    When I click on the tools tab
    Then I can see the outdated tool 'Cypress Test Tool School Scope' in the tool overview
    When I click on the outdated tool 'Cypress Test Tool School Scope'
    Then 'I can see the outdated dialog of 'Cypress Test Tool School Scope'
