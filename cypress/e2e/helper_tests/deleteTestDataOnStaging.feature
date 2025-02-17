@clean_up_test_data

Feature: Deletion of test data that are left from previous failed test runs on staging

    Run this feature file before running cypress tests on staging

    Scenario: Delete courses
        # pre-conditions: login as teacher
        Given I am logged in as a '<teacher>' at '<namespace>'

        # Deleting test data courses
        When I go to courses overview
        When I go to course '<course_title>'
        When I open page Edit course
        When I click on the button delete course
        Then I see the modal to confirm the deletion
        When I click on the button delete on the modal to confirm the course deletion
        Then I do not see the course '<course_title>' on the course overview page

        @staging_test
        Examples:
            | namespace | teacher      | course_title                          |
            | brb       | teacher1_brb | CypressAut Test Creation and Deletion |
            | brb       | teacher1_brb | CypressAut Test Creation and Deletion |
            | brb       | teacher1_brb | CypressAut Testkurs Edit              |
            | brb       | teacher1_brb | CypressAut Testkurs Edit              |






