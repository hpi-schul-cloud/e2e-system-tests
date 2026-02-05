@regression_test
@stable_test
@group-E
@prio_0_staging
Feature: Task - Teacher shares a task with another teacher from the same school

    As a teacher,
    I want to share a task from my course with another teacher in the same school
    So that the other teacher can import the task into their own course as a draft

    Scenario Outline: Teacher shares a task and another teacher imports it into their course

        # pre-condition: users creation and login in same school
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'

        # teacher 1 creates course and task in it
        Given a course named '<course_name_source>' exists
        Given task '<task_title>' with submission date exists in course '<course_name_source>'

        # teacher 1 shares the task from course detail
        When I go to courses overview
        When I go to course '<course_name_source>'
        Then I can see task '<task_title>' on course page
        When I click on three dot menu of content '<task_title>'
        When I select the three dot menu action 'share' at task index '0' in course detail page
        Then I see the Share settings dialog
        Then I see the title in the share modal
        Then I see the information box in share modal
        Then I see the button Cancel in the share modal
        Then I see the checkbox Link valid for the same school is by default checked
        Then I see the checkbox Link valid for 21 days is by default checked
        When I click on the button Continue
        Then I see the Share via modal
        Then I see the result url text box in the modal
        Then I see the option Share via Email
        Then I see the option Copy link
        Then I see the option Scan QR Code
        Then I copy the task URL
        Then I see the alert message

        # teacher 2 logs in and creates course and imports task in it
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given a course named '<course_name_target>' exists

        # teacher 2 imports the task by visiting the shared URL and choosing course_name_target
        When I open the shared task URL
        Then I see the modal to import the shared task into the course
        Then I see the title in the import modal
        When I select the course from the course list in the modal
        When I click on the Continue button in the modal
        When I enter a new name for the imported task '<new_task_title>' in the modal
        When I click on the button Import in the import modal
        Then I see course page '<course_name_target>'
        Then I see the task in draft mode in course detail page
        Then I see the button Publish in the task card in course detail page
        When I open the draft task card in course detail page
        Then I see the task detail page
        Then I see the attached files in the task detail page

        # post-condition: teacher 1 deletes course
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given course with name '<course_name_source>' is deleted

        # post-condition: teacher 2 deletes course
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given course with name '<course_name_target>' is deleted

        @school_api_test
        @staging_test
        Examples:
            | teacher_1    | teacher_2    | namespace | course_name_source       | course_name_target       | task_title                   | new_task_title                 |
            | teacher1_dbc | teacher2_dbc | dbc       | CypressAut Source Course | CypressAut Target Course | CypressAut Sample Task Title | CypressAut Imported Task Title |
