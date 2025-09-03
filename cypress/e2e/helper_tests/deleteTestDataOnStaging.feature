@clean_up_staging_test_data

Feature: Deletion of test data that are left from previous failed test runs on staging

    Run this feature file before running cypress tests on staging

    Scenario Outline: Delete courses and rooms

        # pre-conditions: login as teacher
        Given I am logged in as a '<teacher>' at '<namespace>'

        # Deleting test data courses
        When I go to courses overview
        Then I delete all courses whose names start with '<search_query>'

        # Deleting test data rooms


        # Deleting test data ctl tools in school admin page by administrator

        @staging_test
        Examples:
            | namespace | teacher      | search_query |
            | nbc       | teacher1_nbc | CypressAut   |
            | dbc       | teacher1_dbc | CypressAut   |
            | brb       | teacher1_brb | CypressAut   |
            | brb       | teacher1_brb | Cypress      |
            | brb       | teacher1_brb | CY           |
