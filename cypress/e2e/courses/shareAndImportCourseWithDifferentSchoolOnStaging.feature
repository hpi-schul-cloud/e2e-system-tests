# NOTE: This feature should only be executed in the staging environment due to the school API limitation,
# which prevents creating two separate schools in the same scenario and using the copied URL from Scenario One
# in Scenario Two due to new sessions.

@regression_test
@stable_test
@group-F
@prio_0_staging
Feature: Course - Teacher shares a course with another teacher from a different school

    As a teacher, I want to share a course with teachers from different school

    Scenario Outline: Teacher shares a course with another teacher from a different school

        # pre-condition: creating two teachers accounts
        Given I am logged in as a '<teacherExt_1>' at '<namespace>'
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
        Then I see modal 'share' with information on '<copyright_data_protection>, <course_member_permission>, <geogebra_info>, <content_etherpad>, <content_whiteboard>, <external_tools_info>, <external_tools_protected_parameter_info>, <coursefiles_info>'
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
        Given I am logged in as a '<teacherExt_1>' at '<namespace>'
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

        # post-condition: teacher deletes the course
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given course with name '<course_name_share>' is deleted
        Given I am logged in as a '<teacherExt_1>' at '<namespace>'
        Given course with name '<course_name_import>' is deleted

        @staging_test
        Examples:
            | teacher_1    | teacherExt_1    | namespace | fullname_teacher_1 | course_name_share          | task_name       | board_title      | task_title                | topic_text_title | course_name_import         | copyright_data_protection | course_member_permission | geogebra_info | content_etherpad | content_whiteboard | external_tools_info | external_tools_protected_parameter_info | coursefiles_info |
            | teacher1_dbc | teacherExt1_dbc | dbc       | cypress teacher_1  | CypressAut Course To Share | CypressAut Task | CypressAut Board | CypressAut Task For Class | CypressAut Topic | CypressAut Course Imported | Copyright data protection | Course member permission | Geogebra      | Content etherpad | Content whiteboard | External tools info | External tools protected parameter info | Coursefiles info |
