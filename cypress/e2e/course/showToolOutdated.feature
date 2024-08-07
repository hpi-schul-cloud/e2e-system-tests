@unstable_test
Feature: Course - Show outdated tool

  As a student and teacher I want to see an outdated ctl tool to my course.

  @unstable_test
  Scenario: Pre-test: Setup external tools
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    Given I have an external tool 'CY Test Tool Outdated'
    Given I have a school external tool for 'CY Test Tool Outdated' at school '5fa2c5ccb229544f2c69666c'
    Given I have a context external tool for 'CY Test Tool Outdated' in course '5fa3a2f3a9c31a26f4d1d309' at school '5fa2c5ccb229544f2c69666c'

  @unstable_test
  Scenario: Student can see outdated dialog for outdated tool
    Given I am logged in as a 'student2_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'German'
    When I click on the tools tab
    Then I see the tool 'CY Test Tool Outdated' in the tool overview
    When I click on the tool 'CY Test Tool Outdated'
    Then I see the error dialog of 'CY Test Tool Outdated'

  @unstable_test
  Scenario: Teacher can see outdated dialog for outdated tool
    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    When I go to rooms overview
    When I go to room 'German'
    When I click on the tools tab
    Then I see the tool 'CY Test Tool Outdated' in the tool overview
    When I click on the tool 'CY Test Tool Outdated'
    Then I see the error dialog of 'CY Test Tool Outdated'


