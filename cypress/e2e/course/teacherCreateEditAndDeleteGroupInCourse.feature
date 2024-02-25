@release
Feature: Teacher can create, edit and delete a group in the course

@stable_test
  Scenario Outline: Creating a group in course
    Given I am logged in as a '<user>' at '<state>'
    When I go to rooms overview
    When I go to room '<course_title>'
    When I click on groups tab
    Then I see create a new group button
    When I click on create a new group button
    When I see create student group page
    When I type '<group_name>' in group name field
    When I select '<group_member>' from group member field
    When I click on create student group button
    Then I see group is created with name '<group_name>'
    Examples:
            |   user         |    state  |    course_title   |    group_name  |    group_member        |
            |   teacher1_brb |    brb    |    German         |    Group-Work  |    Amelia Strobl      |

@stable_test
  Scenario Outline: Editing a group in course
    Given I am logged in as a '<user>' at '<state>'
    When I go to rooms overview
    When I go to room '<course_title>'
    When I click on groups tab
    When I click on student group '<group_name>'
    When I click on edit group button
    When I delete text in group name field and type '<group_rename>' in group name field
    When I click on save changes button
    When I go to rooms overview
    When I go to room '<course_title>'
    When I click on groups tab
    Then I see group name changed to '<group_rename>'
    Examples:
            |   user         |    state  |    course_title   |    group_name           |    group_rename    |
            |   teacher1_brb |    brb    |    German         |    Group-Work           |    Gruppe-Arbeit   |

  @stable_test
  Scenario Outline: Deleting a group in course
    Given I am logged in as a '<user>' at '<state>'
    When I go to rooms overview
    When I go to room '<course_title>'
    When I click on groups tab
    When I click on student group '<group_name>'
    When I click on delete group button
    When I click on delete group confirmation button
    Then I do not see group name '<group_name>' in course group tab
    Examples:
            |   user         |    state  |    course_title    |    group_name    |
            |   teacher1_brb |    brb    |    German          |    Gruppe-Arbeit |