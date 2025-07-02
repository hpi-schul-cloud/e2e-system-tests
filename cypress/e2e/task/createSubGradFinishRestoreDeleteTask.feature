@regression_test
@stable_test
@schedule_run
@group-J
Feature: Task - To create, submit, grade, archive, restore and delete task.

    As a teacher I want to create, grade, finish, restore and delete a new task so that the student can submit it

    Scenario: Teacher creates, edits, grades, finishes, restores, deletes a task and student can submit, access the task in a course, including pre-conditions

        # pre-condition: admin, teacher and student log in to create their account in a same school
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin creates a course and assign teacher and student to the course
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        When I enter the course title '<course_name>'
        When I select course colour as red
        Then I select teacher '<fullname_teacher>' is selected by default
        When I click on button Next Steps after entering the course detail in section one
        When I select the student '<fullname_student>' in the list
        When I click on button Next Steps after selecting course participant details
        When I click on button To Course Overview on the finish page

        # teacher creates task from course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on FAB to create new content
        When I click on New Task FAB
        Then I can see create task page
        When I enter title '<task_name>'
        When I set task-visibility-start-date to 'today' at '0000'
        When I set task-visibility-due-date to 'tomorrow' at '1000'
        When I click on Public Submission Checkbox
        When I click on Submit Public Submission in confirmation window on task page
        When I enter task description 'Dies ist Deine Aufgabe.'
        When I click on button Submit
        Then I see detail page for task '<task_name>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        Then I can see task '<task_name>' on course page

        # student submits task
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on task '<task_name>'
        Then I see detail page for task '<task_name>'
        When  I click on submission tab
        When I enter text submission '<submission_text>'
        When I upload file 'testboard_jpg.jpg' for submission
        Then I see file 'testboard_jpg.jpg' is visible in uploaded files section of submission
        When I click on button Send Submission
        Then I see hint that submission has been sent successfully
        When I go to tasks overview
        Then I do not see task '<task_name>' in the list as student
        When I click completed task tab
        When I click on not graded tasks
        Then I see task '<task_name>' in the list as student

        # teacher grades task from course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see task card info submitted contains '1/1' for task '<task_name>'
        Then Task card info graded contains '0/1' for task '<task_name>'
        When I click on task '<task_name>'
        When I click on submissions tab
        Then there is a tick in column delivered for '<student_last_name>'
        When I click on submission of '<student_last_name>'
        Then I see submission text '<submission_text>'
        When I click on download file in submission
        Then file 'testboard_jpg.jpg' is saved in folder downloads
        When I click on grading tab
        When I upload file 'gradingfile-pdf.pdf'
        Then I see file 'gradingfile-pdf.pdf' is visible in uploaded files section
        When I enter comment 'Gut gemacht!'
        When I enter grade '83'
        When I click on button Save and Send grading
        Then there is a tick in column delivered for '<student_last_name>'
        Then grading for '<student_last_name>' contains '83'
        When I click on button To Course
        Then I see task card info submitted contains '1/1' for task '<task_name>'
        Then Task card info graded contains '1/1' for task '<task_name>'

        # student sees grading
        Given I am logged in as a '<student>' at '<namespace>'
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

        # teacher finishes task from course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on link finish for task '<task_name>'
        Then I see task '<task_name>' does not contain any buttons

        # teacher restores the finished task from course
        When I go to tasks overview
        # Note: below step is comented becasue icon to open this is only available if there are other tasks with due date (not guaranteed in environment)
        #When I open task list with due date
        Then I do not see task '<task_name>' in the list as teacher
        When I click on finished tab
        Then I see task '<task_name>' in the list as teacher
        When I click on dot menu of task '<task_name>'
        When I click on Restore
        Then I do not see task '<task_name>' in the list as teacher
        When I click on open tasks tab
        When I open task list with due date
        Then I see task '<task_name>' in the list as teacher
        When I arrive on the dashboard
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see task '<task_name>' contains buttons

        # teacher deletes task from course
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on three dot menu of content '<task_name>'
        When I click on Delete in dot menu
        When I click on Delete in confirmation window
        # Note: new opening of the course page is necessary to clear DOM from deleted tasks (reload would also work but would need a cy.wait)
        When I arrive on the dashboard
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        Then I can not see content '<task_name>'

        # Post-condition: Teacher deletes the course
        When I open page Edit course
        When I click on the button delete course
        Then I see the modal to confirm the deletion
        When I click on the button delete on the modal to confirm the course deletion
        Then I do not see the course '<course_name>' on the course overview page

        @pre_check_test
        @school_api_test
        Examples:
            | namespace | student      | teacher      | admin      | fullname_student  | fullname_teacher  | student_last_name | course_name                           | task_name                                   | submission_text       |
            | brb       | student1_brb | teacher1_brb | admin1_brb | cypress student_1 | cypress teacher_1 | student_1         | CypressAut Test Creation and Deletion | CypressAut Task Submission and Grading Test | Hier ist die Antwort. |

        @staging_test
        Examples:
            | namespace | student      | teacher      | admin      | fullname_student | fullname_teacher | student_last_name | course_name                           | task_name                                   | submission_text       |
            | brb       | student1_brb | teacher1_brb | admin1_brb | Herbert Kraft    | Karl Herzog      | Kraft             | CypressAut Test Creation and Deletion | CypressAut Task Submission and Grading Test | Hier ist die Antwort. |
