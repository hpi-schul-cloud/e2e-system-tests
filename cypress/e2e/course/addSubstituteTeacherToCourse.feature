@release
Feature: Course - Add substitute teacher to course

  As a teacher I want to add substitute teacher to the course.

  @stable_test
  Scenario Outline: Adding substitute teacher to course at '<instance>'
    Given I am logged in as a '<user_1>' at '<instance>'
    When I go to rooms overview
    When I go to room 'Biologie'
    When I open course edit page
    Then I can see course edit page
    And I clear substitute teacher field
    And I add substitute teacher 'teacher2'
    And I click on save changes after editing the course details
    # Then I log out
    Given I am logged in as a '<user_2>' at '<instance>'
    When I go to rooms overview
    When I go to room 'Biologie'
    # Then I log out
    Examples:
      | user_1       | instance | user_2       |
      | teacher1_brb | brb      | teacher2_brb |
      | teacher1_dbc | default  | teacher2_dbc |
      | teacher1_nbc | nbc      | teacher2_nbc |
