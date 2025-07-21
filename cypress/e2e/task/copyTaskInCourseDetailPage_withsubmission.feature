@regression_test
@stable_test
@schedule_run
@group-J
Feature: Task - To create, copy tasks by the teacher from the Course Detail.

    As a teacher I want to create, copy, edit and delete a new task on course page

    Scenario Outline: Teacher creates, copy, edits, and deletes a task

        # pre-condition: teacher and student log in to create their account in a same school
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin creates a course and assign teacher and student to the course, Teacher creates Task and published
        Given a course with name '<course_name>' exists with '<fullname_teacher>' as teacher and '<fullname_student>' as student
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given published task with name '<task_name>' in the course with name '<course_name>'

        # pre condition  student submitted the task
        Given I am logged in as a '<student>' at '<namespace>'
        Given Task '<task_name>' in course '<course_name>' is submitted by the student

        # Teacher copies the task in the room detail when submitted by the student
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I can see task '<task_name>' on course page
        When I click on three dot menu of content '<task_name>'
        Then I see the option Copy on the list
        When I click on Copy in dot menu
        #Then I see the progress bar
        Then I see the success message '<success message>'
        Then I see the title '<draft indicator>' in the task
        Then I see button Publish on the copied task
        When I click on task '<copy_task_name>'
        #Then I see detail page for task '<copy_task_name>'
        Then I see file 'example_jpg.jpg' is visible in section files
        When I click on submission tab
        Then I see submission text ''
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on three dot menu of content '<copy_task_name>'
        When I click on Edit in dot menu
        Then I can see task page '<copy_task_name>'
        #Then I see description of the edit task page
        Then I see file 'example_jpg.jpg' is visible in section files
        #Then I see visible date is set
        #Then I see end date is not set
        #Then I see the draft check box is enabled by default


        # Post-condition: Teacher deletes the course and copied task
        Given task with name '<copy_task_name>' in course '<course_name>' is deleted
        Given task with name '<task_name>' in course '<course_name>' is deleted
        Given course with name '<course_name>' is deleted

        @school_api_test
        Examples:
            | admin      | teacher      | student      |  namespace | course_name             | fullname_teacher  | fullname_student  | task_name       | copy_task_name          | success message                | draft indicator   |
            | admin1_brb | teacher1_brb | student1_brb |  brb       | CypressAut Course       | cypress teacher_1 | cypress student_1 | CypressAut Task | CypressAut Task (1)     | Aufgabe erfolgreich dupliziert | Aufgabe - Entwurf |

        @staging_test
        Examples:
            | admin      | teacher      | student      | namespace | course_name               | fullname_teacher  | fullname_student  | task_name               | copy_task_name              | success message                | draft indicator        |
            | admin1_brb | teacher1_brb | student1_brb | brb       | CypressAut Course Staging | Karl Herzog       | Herbert Kraft     | CypressAut Task Staging | CypressAut Task Staging (1) | Aufgabe erfolgreich dupliziert | Aufgabe - Entwurf      |
