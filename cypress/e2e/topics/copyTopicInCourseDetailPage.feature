@regression_test
@stable_test
@group-D
@prio_0_staging
Feature: Topics - Teacher copies a topic in the course

    As a teacher, I want to copy a topic in the course so that I can reuse content efficiently

    Scenario Outline: Teacher copies a topic in the same course

        # pre-condition: creating a teacher account
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: teacher creates the course with topic and publishes it
        Given a course named '<course_name>' exists
        Given topic '<topic_name>' with contents exists in the course '<course_name>' with text element '<text_element_title>' geoGebra '<geogebra_title>' and id '<geogebra_id>' learning material '<learning_store_title>' etherpad '<etherpad_title>' and description '<etherpad_description>' task '<task_title>' and link '<task_id>' for '<namespace>'
        Given the topic is published in course '<course_name>'

        # teacher copies the topic in the course detail page
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        When I click on three dot menu of topic '<topic_name>'
        When I select the three dot menu action 'copy' at topic index '0' in course detail page
        Then I see the progress bar
        Then I see the dialog for copying topic alert
        Then I see the warning section in the dialog box
        Then I see modal 'copy' with information on '<copyright_data_protection>, <geogebra_info>, <content_etherpad>'
        When I click the button Close in the dialog
        Then I see the topic title '<topic_name>' with the suffix '1' on the course detail page
        Then I see the button Publish on the copied topic
        When I click on the copied topic '<topic_name>' with the suffix '1' on the course detail page
        Then I see the topic details page
        Then I see the topic title '<topic_name>' with the suffix '1' on the topic detail page
        Then I see the element Text '<text_element_title>' on the topic detail page
        Then I see the element Learning Store '<learning_store_title>' on the topic detail page
        Then I see the element Etherpad '<etherpad_title>' on the topic detail page
        When I click on the breadcrumb to go back to the course page
        Then I see course page '<course_name>'

        # teacher deletes the copied topic in the course detail page
        When I click on three dot menu of topic '<topic_name>' with the suffix '1' on the course detail page
        When I click on Delete in dot menu of topic
        When I click on Delete in confirmation window
        Then I do not see the topic title '<topic_name>' with the suffix '1' on the course detail page

        # post-condition: teacher deletes the course
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given course with name '<course_name>' is deleted

        @school_api_test
        @staging_test
        Examples:
            | teacher      | namespace | topic_name                                  | course_name                           | text_element_title                          | geogebra_title                                 | geogebra_id | learning_store_title                                    | etherpad_title                                 | etherpad_description         | task_title                                 | task_id                  | copyright_data_protection | geogebra_info | content_etherpad |
            | teacher1_dbc | dbc       | CypressAut Topic Creating and Deleting Test | CypressAut Test Creation and Deletion | CypressAut Topic Creating and Deleting Test | CypressAut Title for GeoGebra Element in Topic | kEBfU7AR    | CypressAut Title for Learning Material Element in Topic | CypressAut Title for Etherpad Element in Topic | changed etherpad description | CypressAut Title for Task Element in Topic | 59cce3f6c6abf042248e888d | Copyright data protection | Geogebra      | Content etherpad |
