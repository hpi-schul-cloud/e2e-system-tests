@clean_up_staging_test_data

Feature: Deletion of test data that are left from previous failed test runs on staging

    Run this feature file before running cypress tests on staging

    Scenario Outline: Delete courses and rooms

        # pre-conditions: login as teacher
        Given I am logged in as a '<teacher>' at '<namespace>'

        # deleting test data courses
        When I go to courses overview
        Then I delete all courses whose names start with '<course_name_prefix>'

        # deleting test data rooms
        # When I go to rooms overview
        # Then I delete all rooms whose names start with '<room_name_prefix>'

        @staging_test
        Examples:
            | namespace | teacher      | course_name_prefix | room_name_prefix |
            | brb       | teacher1_brb | CypressAut         | CypressAut       |
            | brb       | teacher2_brb | CypressAut         | CypressAut       |
# | nbc       | teacher1_nbc | CypressAut         | CypressAut       |
# | dbc       | teacher1_dbc | CypressAut         | CypressAut       |
# | dbc       | teacher1_dbc | CypressAut         | CypressAut       |
# | nbc       | teacher2_nbc | CypressAut         | CypressAut       |
# | dbc       | teacher2_dbc | CypressAut         | CypressAut       |
# | dbc       | teacher2_dbc | CypressAut         | CypressAut       |


