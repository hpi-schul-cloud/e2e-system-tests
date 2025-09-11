@regression_test
@stable_test
@schedule_run
@group-F
@prio_0-staging
Feature: Task - Teacher copies a task from Task overview without student submission.

    As a teacher I want to create, copy, edit and delete a task from task overview

    Scenario Outline: Teacher copies a task not submitted by the student in task overview

        # pre-condition: teacher and student log in to create their account in a same school
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin creates a course and assign teacher and student to the course, teacher creates task and published
        Given a course with name '<course_name>' exists with '<fullname_teacher>' as teacher and '<fullname_student>' as student
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given published task with name '<task_name>' in the course with name '<course_name>'

        # pre condition: student not submitted the task
        Given I am logged in as a '<student>' at '<namespace>'
        Given task '<task_name>' in course '<course_name>' is not submitted by the student

        # teacher copies the task in the tasks overview when not submitted by the student
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to tasks overview
        Then I see task '<task_name>' in the list as teacher
        When I click on three dot menu of task '<task_name>'
        Then I see the option Copy on the task menu list
        When I click on Copy in dot menu of task
        Then I see the progress bar
        Then I see the success message '<success_message>'
        Then I see the draft tasks tab was activated
        Then I see task '<copy_task_name>' in the list as teacher
        When I click on task '<copy_task_name>' in tasks overview
        Then I see detail page for task '<copy_task_name>'
        Then I see file '<image_file>' is visible in section files
        When I click on submission tab
        Then I see submission text ''
        When I click on details tab
        Then I see detail page for task '<copy_task_name>'
        When I click on button Edit
        Then I can see edit task page '<copy_task_name>'
        Then I see description of the edit task page
        Then I see file '<image_file>' is visible in section files
        Then I see start date is set and visible
        Then I see end date is not set and not visible
        Then I see the draft check box is enabled by default

        # post-condition: teacher deletes the task, copied task and the course
        Given task with name '<copy_task_name>' in course '<course_name>' is deleted
        Given task with name '<task_name>' in course '<course_name>' is deleted
        Given course with name '<course_name>' is deleted

        @school_api_test
        Examples:
            | admin      | teacher      | student      | namespace | course_name       | fullname_teacher  | fullname_student  | task_name       | copy_task_name      | success_message                | draft_indicator   | image_file      |
            | admin1_dbc | teacher1_dbc | student1_dbc | dbc       | CypressAut Course | cypress teacher_1 | cypress student_1 | CypressAut Task | CypressAut Task (1) | Aufgabe erfolgreich dupliziert | Aufgabe - Entwurf | example_jpg.jpg |

        @staging_test
        Examples:
            | admin      | teacher      | student      | namespace | course_name               | fullname_teacher | fullname_student | task_name               | copy_task_name              | success_message                | draft_indicator   | image_file      |
            | admin1_nbc | teacher1_nbc | student1_nbc | nbc       | CypressAut Course Staging | Karl Herzog      | Herbert Kraft    | CypressAut Task Staging | CypressAut Task Staging (1) | Aufgabe erfolgreich dupliziert | Aufgabe - Entwurf | example_jpg.jpg |
