@regression_test
@stable_test
@group-V
Feature: Topics - Teacher shares a topic to other teacher from the same school to import it

    As a teacher I want to share a topic to other teachers from the same school to import it

    Scenario Outline: Teacher shares a topic to other teacher from the same school

        # pre-condition: Creating two teacher accounts
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'

        # pre-condition: teacher creates the course with topic and publishes it in the course
        Given a course named '<course_name_1>' exists
        Given text topic with name '<topic_text_title_share>' is created in course '<course_name_1>'
        Given the topic is published in course '<course_name_1>'

        # first teacher shares the topic with another teacher in the same school using copy link
        When I go to courses overview
        When I go to course '<course_name_1>'
        Then I see course page '<course_name_1>'
        When I click on three dot menu of topic '<topic_text_title_share>'
        When I click on the share a copy of Topic from three dot menu '<topic_text_title_share>'
        Then I see the dialog box topic in course
        Then I see the text description in the dialog box share topic
        Then I see the checkbox for topic link valid within same school is 'checked'
        Then I see the expiry date checkbox is 'checked'
        When I click on the button continue in dialog box share topic
        Then I see the import share topic url in the dialog box share topic result
        Then I see the button 'share mail' in the dialog box share topic result
        Then I see the button 'copy' in the dialog box share topic result
        Then I see the button 'qr code' in the dialog box share topic result
        When I save the import share topic url

        # second teacher within the same school imports the topic
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given a course named '<course_name_2>' exists
        When I go to courses overview
        When I visit the saved import url of the shared topic
        Then I see the dialog box topic in course
        When I click on the dropdown options in the dialog box import share topic
        When I select the course name '<course_name_2>' in the course name field
        When I click on the button continue in dialog box share topic
        When I enter '<topic_text_title_import>' in the topic name field
        When I click on the button import topic
        When I go to course '<course_name_2>'
        Then I see course page '<course_name_2>'
        When I click on button Publish for first topic in content list
        Then I can see topic '<topic_text_title_import>' on course page

        # post-condition: teacher deletes the course
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given course with name '<course_name_1>' is deleted
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given course with name '<course_name_2>' is deleted

        @school_api_test
        Examples:
            | teacher_1    | teacher_2    | namespace | fullname_teacher_1 | course_name_1           | topic_text_title_share       | topic_text_title_import         | course_name_2                    |
            | teacher1_dbc | teacher2_dbc | dbc       | cypress teacher_1  | CypressAut_Mathe course | CypressAut_Mathe Topic Share | CypressAut_Mathe Topic Imported | CypressAut_Mathe Course Imported |

        @staging_test
        Examples:
            | teacher_1    | teacher_2    | namespace | fullname_teacher_1 | course_name_1           | topic_text_title_share       | topic_text_title_import         | course_name_2                    |
            | teacher1_dbc | teacher2_dbc | dbc       | cypress teacher_1  | CypressAut_Mathe course | CypressAut_Mathe Topic Share | CypressAut_Mathe Topic Imported | CypressAut_Mathe Course Imported |
