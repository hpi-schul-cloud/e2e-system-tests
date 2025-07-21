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
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given published task with name '<task_name>' in the course with name '<course_name>'

        # pre condition  student not  submitted the task
        Given I am logged in as a '<student>' at '<namespace>'
        Given Task '<task_name>' in course '<course_name>' is NOT submitted by the student

        # Teacher copies the task in the room detail when NOT submitted by the student
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I can see task '<task_name>' on course page
        When I click on three dot menu of content '<task_name>'
        Then I see the copy option on the list
        When I click on Copy in dot menu
        #Then I see the progress bar
        Then I see the success message 'Aufgabe erfolgreich dupliziert'
        When I go to the learning content tab
        Then I can see task '<copy_task_name>' on course page
        Then I see the title 'Aufgabe - Entwurf' in the task
        Then I see publish button on the copied task
        When I click on task '<copy_task_name>'
        Then I see detail page for task '<copy_task_name>'
        Then I see file 'example_jpg.jpg' is visible in section files
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
      # Post-condition: Teacher deletes the copied task
        When I go to courses overview
        When I go to course '<course_name>'
        Then I can see task '<copy_task_name>' on course page
        When I click on three dot menu of content '<copy_task_name>'
        Then I see the delete option on the list
        Then I click on delete in dot menu
        Then I see confirmation modal for deleting the task
        When I click on Delete in confirmation window

        # pre condition  student submitted the task
        Given I am logged in as a '<student>' at '<namespace>'
        Given Task '<task_name>' in course '<course_name>' is submitted by the student

        # Teacher copies the task in the room detail when submitted by the student
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I can see task '<task_name>' on course page
        When I click on three dot menu of content '<task_name>'
        Then I see the copy option on the list
        When I click on Copy in dot menu
        #Then I see the progress bar
        Then I see the success message 'Aufgabe erfolgreich dupliziert'
        When I go to the learning content tab
        Then I can see task '<copy_task_name>' on course page
        Then I see the title 'Aufgabe - Entwurf' in the task
        Then I see publish button on the copied task
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


        # Post-condition: Teacher deletes the course
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given course with name '<course_name>' is deleted


  @school_api_test
        Examples:
            | admin      | teacher      | student      |  namespace | course_name             | fullname_teacher  | fullname_student  | task_name       | copy_task_name          |
            | admin1_brb | teacher1_brb | student1_brb |  brb       | CypressAut Course       | cypress teacher_1 | cypress student_1 | CypressAut Task | CypressAut Task (1)     |


