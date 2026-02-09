@regression_test
@stable_test
@schedule_run
@group-B
@prio_0_staging
@only
Feature: Task - To submit a task as students group and grade it by teacher.

    As a student, I want to submit a task as group of students so that we can work together on the task and the teacher can grade us all.

    Scenario Outline: Teacher creates, edits and deletes a task from the task overview

        # pre-condition: teacher logs in to create their account in the school
        Given I am logged in as a '<student1>' at '<namespace>'
        Given I am logged in as a '<student2>' at '<namespace>'
        Given I am logged in as a '<student3>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin creates a course and assign teacher and student to the course, teacher creates group and task and published
        Given a course with name '<course_name>' exists with '<fullname_teacher>' as teacher and '<fullname_student1>, <fullname_student2>, <fullname_student3>' as student
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given group with name '<group_name>' in the course '<course_name>' with students '<fullname_student1>, <fullname_student2>'
        Given published task with name '<task_name>' in the course with name '<course_name>'

        # Student submits task for the group in the course
        Given I am logged in as a '<student1>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on task '<task_name>'
        When I click on submission tab
        When I click on option Group for team submission
        # Group selection not needed as only one group exists
        When I enter text submission '<submission_text>'
        When I upload file '<submission_file>' for submission
        Then I see file '<submission_file>' is visible in uploaded files section of submission
        When I click on button Send Submission
        Then I see hint that submission has been sent successfully

        # Teacher grades the group submission
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on task '<task_name>'
        When I click on submissions tab
        Then there is a tick in column delivered for group '<group_name>'
        When I click on submission of group '<group_name>'
        Then I see submission text '<submission_text>'
        When I click on download file in submission
        Then file '<submission_file>' is saved in folder downloads
        When I click on grading tab
        When I upload file '<grading_file>'
        Then I see file '<grading_file>' is visible in uploaded files section
        When I enter comment 'Gut gemacht!'
        When I enter grade '83'
        When I click on button Save and Send grading
        Then there is a tick in column delivered for group '<group_name>'
        Then grading for group '<group_name>' contains '83'
        When I click on button To Course
        Then I see task card info submitted contains '2/3' for task '<task_name>'
        Then Task card info graded contains '2/3' for task '<task_name>'

        # student1 sees grading
        Given I am logged in as a '<student1>' at '<namespace>'
        When I go to tasks overview
        When I click completed task tab
        Then I see task '<task_name>' in the list as student
        When I click on task '<task_name>' in tasks overview
        Then I see green tick for submitted task
        Then I see submission text '<submission_text>'
        When I click on feedback tab
        Then I see feedback text 'Gut gemacht!'
        Then I see grade is '83'
        When I click on download file in grading
        Then file '<grading_file>' is saved in folder downloads

        # student2 sees grading
        Given I am logged in as a '<student2>' at '<namespace>'
        When I go to tasks overview
        When I click completed task tab
        Then I see task '<task_name>' in the list as student
        When I click on task '<task_name>' in tasks overview
        Then I see submission text '<submission_text>'
        When I click on feedback tab
        Then I see feedback text 'Gut gemacht!'
        Then I see grade is '83'
        When I click on download file in grading
        Then file 'gradingfile-pdf.pdf' is saved in folder downloads

        # student3 sees task is not submitted
        Given I am logged in as a '<student3>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on task '<task_name>'
        Then I see red tick for not submitted task
        When I click on feedback tab
        Then I see a hint about no available feedback

        # post-condition: teacher deletes the course
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given course with name '<course_name>' is deleted

        @school_api_test
        @only
        Examples:
            | namespace | teacher      | fullname_teacher  | admin      | student1     | fullname_student1 | student2     | fullname_student2 | student3     | fullname_student3 | course_name       | group_name        | task_name             | submission_text                         | submission_file   | grading_file        |
            | brb       | teacher1_brb | cypress teacher_1 | admin1_brb | student1_brb | cypress student_1 | student2_brb | cypress student_2 | student3_brb | cypress student_3 | CypressAut Course | Cypress Aut Group | CypressAut Group Task | Dies ist die Gruppenabgabe der Aufgabe. | testboard_jpg.jpg | gradingfile-pdf.pdf |

        @staging_test
        Examples:
            | namespace | teacher      | fullname_teacher | admin      | student1     | fullname_student1 | student2     | fullname_student2 | student3     | fullname_student3 | course_name       | group_name        | task_name             | submission_text                         | submission_file   | grading_file        |
            | brb       | teacher1_brb | Karl Herzog      | admin1_brb | student1_brb | Herbert Kraft     | student2_brb | Amelia Strobl     | student3_brb | Georg Findeisen   | CypressAut Course | Cypress Aut Group | CypressAut Group Task | Dies ist die Gruppenabgabe der Aufgabe. | testboard_jpg.jpg | gradingfile-pdf.pdf |
