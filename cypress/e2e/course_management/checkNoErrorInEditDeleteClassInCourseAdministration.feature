@regression_test
@stable_test
@schedule_run
@group-V
Feature: Course Management - To create, edit and delete class and check for errors

    As an administrator I want create, edit and delete a class

    Scenario Outline: Admin creates, edits and deletes a class and check for no errors
        # pre-condition: teacher and student log in to create their account in a same school
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin creates a new course and new class
        Given a class name "dummy class" exists
        Given a course with name '<course_name>' exists with '<fullname_teacher>' as teacher, '<fullname_student>' as student and 'dummy class' as class
        Given a class name "dummy class" deleted

        # admin deletes class and checks for error in adminstration page
        When I go to course administration page
        Then I see no error alert

        # remove course from the teacher in case error caught for other reasons and admin course page not accessed
        # post condition
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given course with name '<course_name>' is deleted

        # admin checks for no error in adminstration page
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I go to course administration page
        Then I see no error alert


        @school_api_test
        Examples:
            | admin      | teacher      | student      | namespace | course_name       | fullname_teacher  | fullname_student  |
            | admin1_nbc | teacher1_nbc | student1_nbc | nbc       | CypressAut Course | cypress teacher_1 | cypress student_1 |

        @staging_test
        Examples:
            | namespace | admin      | teacher      | course_name                     | fullname_teacher | fullname_student | student      |
            | nbc       | admin1_nbc | teacher1_nbc | CypressAUT TestCourseManagement | Karl Herzog      | Herbert Kraft    | student1_nbc |
