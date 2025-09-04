@clean_up_staging_test_data

Feature: Deletion of test data that are left from previous failed test runs on staging

    Run this feature file before running cypress tests on staging

    Scenario Outline: Delete courses and rooms

        # pre-conditions: login as teacher
        Given I am logged in as a '<teacher>' at '<namespace>'

        # deleting test data courses
        When I go to courses overview
        Then I delete all courses whose names start with '<course_name>'

        # deleting test data rooms
        When I go to rooms overview
        Then I delete all rooms whose names start with '<room_name>'

        @staging_test
        Examples:
            | namespace | teacher      | course_name | room_name |
            | nbc       | teacher1_nbc | CypressAut  | Cypress   |
            | dbc       | teacher1_dbc | CypressAut  | Cypress   |
            | brb       | teacher1_brb | CypressAut  | Cypress   |
            | brb       | teacher1_brb | Cypress     | Cypress   |
            | brb       | teacher1_brb | CY          | Cypress   |


