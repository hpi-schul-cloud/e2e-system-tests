@clean_up_test_data

Feature: Deletion of test data that are left from previous failed test runs on staging

    Run this feature file before running cypress tests on staging

    Scenario: Delete courses
        # pre-conditions: login as teacher
        Given I am logged in as a '<teacher>' at '<namespace>'

        # Deleting test data courses
        When I go to courses overview
        Then I see course '<search_query>' on page Course overview
        When I go to course '<search_query>'
        When I open page Edit course
        When I click on the button delete course
        Then I see the modal to confirm the deletion
        When I click on the button delete on the modal to confirm the course deletion
        Then I do not see the course '<search_query>' on the course overview page

        @staging_test
        Examples:
            | namespace | teacher      | search_query                                |
            | brb       | teacher1_brb | CypressAut Test Creation and Deletion       |
            | brb       | teacher1_brb | CypressAut Test Creation and Deletion       |
            | brb       | teacher1_nbc | CypressAut Test Creation and Deletion       |
            | brb       | teacher1_nbc | CypressAut Test Creation and Deletion       |
            | brb       | teacher1_brb | CypressAut Testkurs Edit                    |
            | brb       | teacher1_brb | CypressAut Testkurs Edit                    |
            | brb       | teacher1_brb | CypressAut Sub-Teacher Course               |
            | brb       | teacher1_brb | CypressAut Sub-Teacher Course               |
            | brb       | teacher1_brb | CypressAut Search Course                    |
            | brb       | teacher1_brb | CypressAut Search Course                    |
            | brb       | teacher1_brb | CypressAut Group Course                     |
            | brb       | teacher1_brb | CypressAut Group Course                     |
            | brb       | teacher1_brb | CypressAut Column Board Course              |
            | brb       | teacher1_brb | CypressAut Column Board Course              |
            | brb       | teacher1_brb | CypressAut Single Column Board Course       |
            | brb       | teacher1_brb | CypressAut Single Column Board Course       |
            | brb       | teacher1_brb | CypressAut TLDraw Course                    |
            | brb       | teacher1_brb | CypressAut TLDraw Course                    |
            | brb       | teacher1_nbc | CypressAut TLDraw Course                    |
            | brb       | teacher1_nbc | CypressAut TLDraw Course                    |
            | brb       | teacher1_brb | CypressAut CypressAut Test Dashboard Course |
            | brb       | teacher1_brb | CypressAut CypressAut Test Dashboard Course |
            | brb       | teacher1_brb | CypressAut CypressAut Test Publish Topic    |
            | brb       | teacher1_brb | CypressAut CypressAut Test Publish Topic    |
            | brb       | teacher1_nbc | Cypress Test Course                         |
            | brb       | teacher1_nbc | Cypress Test Course                         |
            | brb       | teacher1_nbc | Cypress Test Course Share                   |
            | brb       | teacher1_nbc | Cypress Test Course Share                   |
            | brb       | teacher1_nbc | Cypress Test Course Import                  |
            | brb       | teacher1_nbc | Cypress Test Course Import                  |
            | brb       | teacher1_nbc | Cypress Test Course (1)                     |
            | brb       | teacher1_nbc | Cypress Test Course (1)                     |
            | brb       | teacher1_nbc | CY Test Tool Course Restriction             |
            | brb       | teacher1_nbc | CY Test Tool Course Restriction             |