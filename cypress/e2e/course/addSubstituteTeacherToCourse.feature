@release
Feature: Course - Add substitute teacher to course

  As a teacher I want to add substitute teacher to the course.

  @stable_test
  Scenario Outline: Adding substitute teacher to course at '<namespace>'
    Given I am logged in as a '<user_1>' at '<namespace>'
    When I go to rooms overview
    When I go to room 'Biologie'
    When I open course edit page
    Then I can see course edit page
    And I clear substitute teacher field
    And I add substitute teacher '<user_2>'
    And I click on save changes after editing the course details
    Given I am logged in as a '<user_2>' at '<namespace>'
    When I go to rooms overview
    When I go to room 'Biologie'

    @brb
    Examples:
      | user_1       | namespace | user_2       |
      | teacher1_brb | brb       | teacher2_brb |

    @dbc
    Examples:
      | user_1       | namespace | user_2       |
      | teacher1_dbc | default   | teacher2_dbc |

    @nbc
    Examples:
      | user_1       | namespace | user_2       |
      | teacher1_nbc | nbc       | teacher2_nbc |