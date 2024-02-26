@release
Feature: Teacher can create, edit and delete a group in the course

@stable_test
  Scenario Outline: Creating a group in course
    Given I am logged in as a '<user>' at '<state>'
    When I go to rooms overview
    When I go to room '<course_title>'
    When I click on tab Groups
    Then I see button Create a new group
    When I click on button Create a new group
    When I see page Create student group
    When I type '<group_name>' in field Group name
    When I select '<group_member>' from field Group member
    When I click on button Create student group
    Then I see group is created with name '<group_name>'
    Examples:
            |   user         |    state  |    course_title   |    group_name  |    group_member        |
            |   teacher1_brb |    brb    |    German         |    Group-Work  |    Amelia Strobl      |

@stable_test
  Scenario Outline: Editing a group in course
    Given I am logged in as a '<user>' at '<state>'
    When I go to rooms overview
    When I go to room '<course_title>'
    When I click on tab Groups
    When I click on student group '<group_name>'
    When I click on button Edit group
    When I delete text in field Group name and type '<group_rename>' in field Group name
    When I click on button Save changes
    When I go to rooms overview
    When I go to room '<course_title>'
    When I click on tab Groups
    Then I see group name changed to '<group_rename>'
    Examples:
            |   user         |    state  |    course_title   |    group_name           |    group_rename    |
            |   teacher1_brb |    brb    |    German         |    Group-Work           |    Gruppe-Arbeit   |

  @stable_test
  Scenario Outline: Deleting a group in course
    Given I am logged in as a '<user>' at '<state>'
    When I go to rooms overview
    When I go to room '<course_title>'
    When I click on tab Groups
    When I click on student group '<group_name>'
    When I click on button Delete group
    When I click on button Delete group confirmation
    Then I do not see group name '<group_name>' in tab Course group
    Examples:
            |   user         |    state  |    course_title    |    group_name    |
            |   teacher1_brb |    brb    |    German          |    Gruppe-Arbeit |