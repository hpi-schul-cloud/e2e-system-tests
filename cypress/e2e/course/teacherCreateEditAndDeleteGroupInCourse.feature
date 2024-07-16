@api_migrated
@release
@stable_test
Feature: Teacher can create, edit and delete a group in the course

  Scenario Outline: user creation, course creation, and creating,editing and deleting a group

    # pre-condition: creating all users and creating course
    Given I am logged in as a '<teacher>' at '<namespace>'
    Given I am logged in as a '<student>' at '<namespace>'
    Given I am logged in as a '<admin>' at '<namespace>'

    # pre-condition: admin creates a course and assign teacher and student to the course
    When I go to rooms overview
    When I click on FAB to create a new room
    When I click on new course create button in sub menu
    Then I see section one area on the course create page
    When I enter the course title '<course_name>'
    When I select room colour as red
    When I select '<fullname_teacher>' from field teacher
    Then I see substitute teacher selection box
    Then I see button to create a course time table container
    When I click on button Next Steps after entering the room detail in section one
    Then I see section two area on the course create page
    When I select '<fullname_student>' from field student
    When I click on button Next Steps after selecting room participant details
    Then I see the section three area as the finish page
    When I click on button To Course Overview on the finish page

    # creating a group in course
    Given I am logged in as a '<teacher>' at '<namespace>'
    When I go to rooms overview
    When I go to room '<course_name>'
    When I click on tab Groups
    Then I see button Create a new group
    When I click on button Create a new group
    Then I see page Create student group
    When I type '<group_name>' in field Group name
    When I select '<group_member>' from field Group member
    When I click on button Create student group
    Then I see group is created with name '<group_name>'

    # editing a group in course
    When I go to rooms overview
    When I go to room '<course_name>'
    When I click on tab Groups
    When I click on student group '<group_name>'
    When I click on button Edit group
    When I delete text in field Group name and type '<group_rename>' in field Group name
    When I click on button Save changes
    When I go to rooms overview
    When I go to room '<course_name>'
    When I click on tab Groups
    Then I see group name changed to '<group_rename>'

    # deleting a group in course
    When I go to rooms overview
    When I go to room '<course_name>'
    When I click on tab Groups
    When I click on student group '<group_rename>'
    When I click on button Delete group
    When I click on button Delete group confirmation
    Then I do not see group name '<group_rename>' in tab Course group

    @school_api_test
    Examples:
      | admin      | teacher      | student      | namespace | course_name             | fullname_teacher  | fullname_student  | group_name | group_member      | group_rename  |
      | admin1_brb | teacher1_brb | student1_brb | brb       | CypressAut Group Course | cypress teacher_1 | cypress student_1 | Group-Work | cypress student_1 | Gruppe-Arbeit |

    @staging_test
    Examples:
      | admin      | teacher      | student      | namespace | course_name             | fullname_teacher | fullname_student | group_name | group_member  | group_rename  |
      | admin1_brb | teacher1_brb | student1_brb | brb       | CypressAut Group Course | Karl Herzog      | Herbert Kraft    | Group-Work | Herbert Kraft | Gruppe-Arbeit |
