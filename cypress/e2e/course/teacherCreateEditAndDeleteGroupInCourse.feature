@release
@api_migrated
@stable_test
Feature: Teacher can create, edit and delete a group in the course

  Scenario: Pre-test: Creating users
    Given I am logged in as a 'admin1_brb' at 'brb'
    Given I am logged in as a 'teacher1_brb' at 'brb'
    Given I am logged in as a 'student1_brb' at 'brb'

  Scenario: Pre-test: Create new course
    Given I am logged in as a 'admin1_brb' at 'brb'
    When I go to rooms overview
    When I click on FAB to create a new room
    When I click on new course create button in sub menu
    Then I see section one area on the course create page
    When I enter the course title 'German'
    When I select room colour as red
    When I select 'cypress teacher_1' from field teacher
    Then I see substitute teacher selection box
    Then I see button to create a course time table container
    When I click on button Next Steps after entering the room detail in section one
    Then I see section two area on the course create page
    When I select 'cypress student_1' from field student
    When I click on button Next Steps after selecting room participant details
    Then I see the section three area as the finish page
    When I click on button To Course Overview on the finish page

  Scenario Outline: Creating a group in course
    Given I am logged in as a '<user>' at '<state>'
    When I go to rooms overview
    When I go to room '<course_title>'
    When I click on tab Groups
    Then I see button Create a new group
    When I click on button Create a new group
    Then I see page Create student group
    When I type '<group_name>' in field Group name
    When I select '<group_member>' from field Group member
    When I click on button Create student group
    Then I see group is created with name '<group_name>'
    Examples:
      | user         | state | course_title | group_name | group_member      |
      | teacher1_brb | brb   | German       | Group-Work | cypress student_1 |

  Scenario Outline: Editing a group in course
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
      | user         | state | course_title | group_name | group_rename  |
      | teacher1_brb | brb   | German       | Group-Work | Gruppe-Arbeit |

  Scenario Outline: Deleting a group in course
    When I go to rooms overview
    When I go to room '<course_title>'
    When I click on tab Groups
    When I click on student group '<group_name>'
    When I click on button Delete group
    When I click on button Delete group confirmation
    Then I do not see group name '<group_name>' in tab Course group
    Examples:
      | user         | state | course_title | group_name    |
      | teacher1_brb | brb   | German       | Gruppe-Arbeit |