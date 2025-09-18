@regression_test
@stable_test
@schedule_run
@group-A
@prio_0_staging
Feature: Course Management - To create, add class with course and after deletion of class, check for errors

    As an administrator I want to add created class into course and after deletion of class, check for errors

    Scenario Outline: Admin creates, adds class into course and after deleting the class check for no errors

        # pre-condition: admin, teacher and student log in to create their account in a same school (valid only for dev instances)
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin creates a new course with new class and class deleted afterwards
        Given a class name '<class_name>' is 'exist'
        Given a course with name '<course_name>' exists with '<fullname_teacher>' as teacher, '<fullname_student>' as student and '<class_name>' as class
        Given a class name '<class_name>' deleted and 'not exist'

        # admin deletes class and checks for error in administration page
        When I go to course administration page
        Then I see no error info

        # post-condition: teacher deletes course
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given course with name '<course_name>' is deleted

        # admin checks for no error in administration page
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I go to course administration page
        Then I see no error info

        @school_api_test
        Examples:
            | admin      | teacher      | student      | namespace | course_name       | fullname_teacher  | fullname_student  | class_name       |
            | admin1_nbc | teacher1_nbc | student1_nbc | nbc       | CypressAut Course | cypress teacher_1 | cypress student_1 | CypressAut class |

        @staging_test
        Examples:
            | admin      | teacher      | student      | namespace | course_name       | fullname_teacher | fullname_student | class_name       |
            | admin1_nbc | teacher1_nbc | student1_nbc | nbc       | CypressAut Course | Karl Herzog      | Herbert Kraft    | CypressAut class |
