@regression_test
@stable_test
@schedule_run
@group-D
@pr
Feature: Course - Teacher can create, edit and delete a group in the course

    Scenario Outline: user creation, course creation, and creating,editing and deleting a group

        # pre-condition: creating all users
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<student2>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin creates a course and assign teacher and student to the course
        Given a course with name '<course_name>' exists with '<fullname_teacher>' as teacher and '<fullname_student>, <group_member>' as student

        # creating a group in course
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on tab Groups
        Then I see button Create a new group
        When I click on button Create a new group
        Then I see page Create student group
        When I type '<group_name>' in field Group name
        When I select '<group_member>' from field Group member
        When I click on button Create student group
        Then I see group is created with name '<group_name>'

        # editing a group in course
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on tab Groups
        When I click on student group '<group_name>'
        When I click on button Edit group
        When I delete text in field Group name and type '<group_rename>' in field Group name
        When I click on button Save changes
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on tab Groups
        Then I see group name changed to '<group_rename>'

        # student2 checks the group after editing
        Given I am logged in as a '<student2>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on tab Groups
        Then I see group name changed to '<group_rename>'

        # deleting a group in course
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on tab Groups
        When I click on student group '<group_rename>'
        When I click on button Delete group
        When I click on button Delete group confirmation
        Then I do not see group name '<group_rename>' in tab Course group

        # Post-condition: Teacher deletes the course
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given course with name '<course_name>' is deleted

        @school_api_test
        Examples:
            | admin      | teacher      | student      | student2     | namespace | course_name             | fullname_teacher  | fullname_student  | group_name | group_member      | group_rename  |
            | admin1_dbc | teacher1_dbc | student1_dbc | student2_dbc | dbc       | CypressAut Group Course | cypress teacher_1 | cypress student_1 | Group-Work | cypress student_2 | Gruppe-Arbeit |

        @staging_test
        Examples:
            | admin      | teacher      | student      | student2     | namespace | course_name             | fullname_teacher | fullname_student | group_name | group_member  | group_rename  |
            | admin1_dbc | teacher1_dbc | student1_dbc | student2_dbc | dbc       | CypressAut Group Course | Karl Herzog      | Herbert Kraft    | Group-Work | Amelia Strobl | Gruppe-Arbeit |
