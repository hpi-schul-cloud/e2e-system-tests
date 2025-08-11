@regression_test
@stable_test
@schedule_run
@group-V
Feature: Course Management - To create, edit and delete class and check for errors

    As an administrator I want create, edit and delete a class

    Scenario Outline: Admin creates, edits and deletes a class and check for no errors
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin creates a new course and new class
       Given a course with name '<course_name>' exists with '<fullname_teacher>' as teacher and '<fullname_student>' as student
       Given a class with grade "1" and class name "dummy" exists
       Given a class with grade "1" and class name "dummy" deleted

        # admin deletes class and checks for no error in adminstration page
        When I click on the delete button of class "1 dummy"
        Then I see the delete modal
        When I click the confirmation button on the delete modal
        When I go to course administration page
        Then I do not see error alert "Fehler beim Laden der Daten."

        # admin deletes course
        When I click on the delete button of course '<course_name>'
        Then I see the delete modal
        When I click the confirmation button on the delete modal
        # Note: does not work if table is empty
        # Then I do not see course '<course_title>' in course table

        @staging_test
        Examples:
            | namespace | admin      | course_title                    | fullname_teacher | fullname_student |
            | nbc       | admin1_nbc | CypressAUT TestCourseManagement | Karl Herzog      | Herbert Kraft    |

        @school_api_test
        Examples:
            | namespace | admin      | course_title                     | fullname_teacher  | fullname_student  |
            | nbc       | admin1_nbc | CypressAUT TestCourseManagement  | cypress teacher_1 | cypress student_1 |
