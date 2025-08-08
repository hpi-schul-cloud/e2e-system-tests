@regression_test
@stable_test
Feature: Course - Copy Course with Topic and Task

    As a teacher I want to copy a course with a topic and task so that I can reuse the course content

    Scenario Outline: Teacher copies a course with topic and task

        # pre-condition: Creating two teacher accounts
        Given I am logged in as a '<admin>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: teacher creates the course board withtask and topic and publishes them in the course
        Given a course named '<course_name>' exists
        Given task with task name '<task_name>' is created in course '<course_name>'
        Given text topic with name '<topic_text_title>' is created in course '<course_name>'
        Given the topic is published in course '<course_name>'

        # teacher copies the course
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        When I click on button copy course
        Then I see the copy result notification
        When I close the dialog
        When I go to courses overview
        When I go to course '<course_name_copy>'
        Then I see course page '<course_name_copy>'
        Then I publish the task in course '<course_name_copy>'
        Then I publish the topic in course '<course_name_copy>'

        # pre-condition: admin adds student to newly copied course
        Given I am logged in as a '<admin>' at '<namespace>'
        Given student is added to the course '<course_name_copy>'

        # student sees the copied course, task, and topic
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name_copy>'
        Then I see course page '<course_name_copy>'
        Then I can see topic '<topic_text_title>' on course page
        Then I can see task in second index '<task_name>' on course page

        # post-condition: teacher deletes courses
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given course with name '<course_name>' is deleted
        Given course with name '<course_name_copy>' is deleted

        @school_api_test
        Examples:
            | admin      | teacher      | student      | namespace | fullname_teacher1 | course_name  | task_name  | board_title | task_title           | topic_text_title | course_name_copy |
            | admin1_dbc | teacher1_dbc | student1_dbc | dbc       | cypress teacher_1 | Mathe course | Mathe Task | Mathe Board | Mathe task for Class | Mathe Topic      | Mathe course (1) |

        @staging_test
        Examples:
            | admin      | teacher      | student      | namespace | fullname_teacher1 | course_name  | task_name  | board_title | task_title           | topic_text_title | course_name_copy |
            | admin1_dbc | teacher1_dbc | student1_dbc | dbc       | cypress teacher_1 | Mathe course | Mathe Task | Mathe Board | Mathe task for Class | Mathe Topic      | Mathe course (1) |
