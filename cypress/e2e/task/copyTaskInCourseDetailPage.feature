@regression_test
@stable_test
@schedule_run
@group-J
@only
Feature: Task - To create, copy tasks by the teacher from the Course Detail overview.

    As a teacher I want to create, edit and delete a new task on course page

    Scenario: Teacher creates, edits, and deletes a task

        # pre-condition: teacher and student log in to create their account in a same school
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin creates a course and assign teacher and student to the course, Teacher creates Task and published
        Given a course with name '<course_name>' exists with '<fullname_teacher>' as teacher and '<fullname_student>' as student

        # pre condition  teacher creates task and published
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on FAB to create new content
        When I click on New Task FAB
        When I enter title '<task_name>'
        When I click on Enable Group Submission
        When I enter task description 'Dies ist Deine Aufgabe.'
        When I upload file 'example_jpg.jpg'
        When I set task-visibility-start-date to 'today' at '0000'
        When I set task-visibility-due-date to 'tomorrow' at '1000'
        When I click on Draft Checkbox
        When I click on button Submit


          # pre condition  student not  submitted the task
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I can see task '<task_name>' on course page
        Then I see task card info not submitted for task '<task_name>'


        # pre condition  student submitted the task
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on task '<task_name>'
        Then I see detail page for task '<task_name>'
        When I click on submission tab
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



        # Post-condition: Teacher deletes the course
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given course with name '<course_name>' is deleted


        @school_api_test
        Examples:
            | admin      | teacher      | student      | student2     | namespace | course_name             | fullname_teacher  | fullname_student  | group_name | group_member      | group_rename  | task_name       |
            | admin1_brb | teacher1_brb | student1_brb | student2_brb | brb       | CypressAut Group Course | cypress teacher_1 | cypress student_1 | Group-Work | cypress student_2 | Gruppe-Arbeit | CypressAut Task |


