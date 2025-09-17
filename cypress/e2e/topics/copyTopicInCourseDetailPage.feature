@regression_test
@stable_test
@group-F
Feature: Topics - Teacher copies a topic in the course

    As a teacher I want to copy a topic in the course so that I can reuse content efficiently

    Scenario Outline: Teacher copies a topic in the same course

        # pre-condition: Creating a teacher account
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: teacher creates the course with topic and publishes it
        Given a course named '<course_name>' exists
        Given topic '<topic_name>' with contents exists in the course '<course_name>'
        Given the topic is published in course '<course_name>'

        # teacher copies the topic in the course
        When I go to courses overview
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        When I click on three dot menu of topic '<topic_name>'
        Then I see the option Copy on the list
        When I select the three dot menu action 'copy' at task index '0' in course detail page
        Then I see the progress bar
        Then I see the success message '<success_message>'
        Then I see the topic title '<topic_name>' with the sufix '(1)' on course detail page
        Then I see button Publish on the copied topic
        When I click on the copied Topic '<topic_name>'
        Then I see the Page topic details
        Then I see the topic title '<topic_name>' with the sufix '(1)' on topic detail page
        Then I see ...
        Then I see...
        Then I see....
        #TDB

        # post-condition: teacher deletes the course
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given course with name '<course_name>' is deleted

        @school_api_test
        Examples:
            | teacher      | namespace | course_name             | topic_name                                  |
            | teacher1_dbc | dbc       | CypressAut_Mathe course | CypressAut Topic Creating and Deleting Test |

        @staging_test
        Examples:
            | teacher      | namespace | course_name             | topic_name                                  |
            | teacher1_dbc | dbc       | CypressAut_Mathe course | CypressAut Topic Creating and Deleting Test |

