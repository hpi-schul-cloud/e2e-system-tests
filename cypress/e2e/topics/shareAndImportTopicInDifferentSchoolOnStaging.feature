@regression_test
@stable_test
@group-V

# Note: This feature can not be currently executed using the school API, as creating two different school within the same scenario is not possible. And creating them in two different scenarios results in separate sessions, which prevents the copied board URL from the first scenario from being used in another scenario.

Feature: Topics - Teacher shares a topic to other teacher from different school to import it

    As a teacher I want to share a topic to other teachers from different school to import it

    Scenario Outline: Teacher shares a topic to other teacher from different school

        # pre-condition: Creating two teacher accounts
        Given I am logged in as a '<teacherExt_2>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'

        # pre-condition: teacher creates the course with topic and publishes it in the course
        Given a course named '<course_name1>' exists
        Given text topic with name '<topic_text_title_share>' is created in course '<course_name1>'
        Given the topic is published in course '<course_name1>'

        # first teacher shares the topic with another teacher in the different school using copy link
        When I go to courses overview
        When I go to course '<course_name1>'
        Then I see course page '<course_name1>'
        When I click on three dot menu of topic '<topic_text_title_share>'
        When I click on the share a copy of Topic from three dot menu '<topic_text_title_share>'
        Then I see the dialog box share topic in course
        Then I see the text description in the dialog box share topic
        Then I see the checkbox is checked for link valid within same school
        Then I see the checkbox is checked for link expiry after 21 days
        When I uncheck the checkbox school internal in dialog box topic
        When I click on the button continue in dialog box share topic
        Then I see the import share topic url in the dialog box share topic result
        Then I see the button mail in the dialog box share topic result
        Then I see the button copy link in the dialog box share topic result
        Then I see the button mail QR-Code in the dialog box share topic result
        When I save the import share topic url

        # second teacher from different school imports the topic
        Given I am logged in as a '<teacherExt_2>' at '<namespace>'
        Given a course named '<course_name2>' exists
        When I go to courses overview
        When I visit the saved import url of the shared topic
        Then I see the dialog box import share topic
        When I click on the dropdown options in the dialog box import share topic
        When I select the course name '<course_name2>' in the course name field
        When I click on the button continue in dialog box share topic
        When I enter '<topic_text_title_import>' in the topic name field
        When I click on the button import topic
        When I go to course '<course_name2>'
        Then I see course page '<course_name2>'
        When I click on button Publish for first topic in content list
        Then I can see topic '<topic_text_title_import>' on course page

        # post-condition: Teacher deletes the course
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given course with name '<course_name1>' is deleted
        Given I am logged in as a '<teacherExt_2>' at '<namespace>'
        Given course with name '<course_name2>' is deleted

        @staging_test
        Examples:
            | teacher_1    | teacherExt_2 | namespace | fullname_teacher_1 | course_name1 | topic_text_title_share | topic_text_title_import | course_name2         |
            | teacher1_brb | teacher2_brb | brb       | cypress teacher_1  | Mathe course | Mathe Topic Share      | Mathe Topic Imported    | Math Course Imported |
