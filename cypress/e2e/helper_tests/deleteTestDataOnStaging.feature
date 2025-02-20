@clean_up_test_data

Feature: Deletion of test data that are left from previous failed test runs on staging

    Run this feature file before running cypress tests on staging

    Scenario: Delete courses
        # pre-conditions: login as teacher
        Given I am logged in as a '<teacher>' at '<namespace>'

        # Deleting test data courses
        When I go to courses overview
        Then I see course '<search_query>' on page Course overview
        # When I go to course '<search_query>'
        # When I open page Edit course
        # When I click on the button delete course
        # Then I see the modal to confirm the deletion
        # When I click on the button delete on the modal to confirm the course deletion
        # Then I do not see the course '<search_query>' on the course overview page

        @staging_test
        Examples:
            | namespace | teacher      | search_query |
            | nbc       | teacher1_nbc | CypressAut   |
            | dbc       | teacher1_dbc | CypressAut   |
            | brb       | teacher1_brb | CypressAut   |
            | brb       | teacher1_brb | Cypress      |
            | brb       | teacher1_brb | CY           |
