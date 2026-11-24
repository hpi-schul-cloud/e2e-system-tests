@regression_test
@stable_test
@group-A
@schedule_run
Feature: Board Import - To start the import of a board from a link

    As a teacher, I want to start the import of a board from a link so that I get a copy of the board.

    Scenario Outline: Teacher starts a board import via API

        # pre-condition: creating account
        Given I am logged in as a '<teacher>' at '<namespace>'

        # teacher starts the import and reads the import job
        When I start a board import with the link '<link>' via API
        Then I see the board import job is created via API

        @school_api_test
        Examples:
            | teacher      | namespace | link                      |
            | teacher1_nbc | nbc       | https://example.com/board |
