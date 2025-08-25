@unstable_test

# Note: This feature can not be currently executed using the school API, as creating two different school within the same scenario is not possible. And creating them in two different scenarios results in separate sessions, which prevents the copied board URL from the first scenario from being used in another scenario.

Feature: Course - Teacher shares a course to other teacher from different school

    As a teacher I want to share a course to other teachers from different school

    Scenario Outline: Teacher shares a course to other teacher from different school

        # pre-condition: Creating two teacher accounts
        Given I am logged in as a '<teacherExt_2>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'

        # pre-condition: first teacher creates the course board with a card, task and topic and publishes them in the course
        Given a course named '<course_name_share>' exists
        Given a multi-column board named '<board_title>' exists in the course '<course_name_share>'
        Given the multi-column board has a column with a card
        Given task with task name '<task_name>' is created in course '<course_name_share>'
        Given text topic with name '<topic_text_title>' is created in course '<course_name_share>'
        Given the topic is published in course '<course_name_share>'

        # first teacher shares the course with another teacher from different school using copy link
        When I go to courses overview
        When I go to course '<course_name_share>'
        Then I see course page '<course_name_share>'
        When I click on button share course
        Then I see the dialog box share course
        Then I see the info text in the dialog box share course
        Then I see the checkbox school internal as checked
        Then I see the checkbox expiry date as checked
        When I uncheck the checkbox school internal
        When I click on the button continue in the dialog box share course
        Then I see the import share course url in the dialog box share course result
        Then I see the button mail in the dialog box share course result
        Then I see the button copy link in the dialog box share course result
        Then I see the button mail QR-Code in the dialog box share course result
        When I save the import share course url

        # second teacher from different school imports the course
        Given I am logged in as a '<teacherExt_2>' at '<namespace>'
        When I go to courses overview
        When I visit the saved import url of the shared course
        Then I see the dialog box import share course
        Then I see the import share course tools info
        Then I see '<course_name_share>' in the course name field
        When I enter '<course_name_import>' in the course name field
        When I click on the button import course
        When I go to course '<course_name_import>'
        Then I see course page '<course_name_import>'

        # first teacher opens the QR code in the share course result dialog
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name_share>'
        Then I see course page '<course_name_share>'
        When I click on button share course
        Then I see the dialog box share course
        Then I see the info text in the dialog box share course
        Then I see the checkbox school internal as checked
        Then I see the checkbox expiry date as checked
        When I uncheck the checkbox school internal
        When I click on the button continue in the dialog box share course
        Then I see the import share course url in the dialog box share course result
        When I click on button qr code in the dialog box share course result
        Then I see the qr code in the dialog box share course result
        Then I click on the button close in the dialog box share course result

        # Post-condition: Teacher deletes the course
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given course with name '<course_name_share>' is deleted
        Given I am logged in as a '<teacherExt_2>' at '<namespace>'
        Given course with name '<course_name_import>' is deleted

        @school_api_test
        Examples:
            | teacher_1    | teacherExt_2 | namespace | fullname_teacher_1 | course_name_share     | task_name  | board_title | task_title           | topic_text_title | course_name_import    |
            | teacher1_brb | teacher2_brb | brb       | cypress teacher_1  | Mathe course to share | Mathe Task | Mathe Board | Mathe task for Class | Mathe Topic      | Mathe course imported |
