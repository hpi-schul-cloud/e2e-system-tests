@pr
@stable_test
Feature: Course Board - To import a course from common cartridge

    As a teacher I want to import a course from a common cartridge file

    Scenario: Teacher imports course
        Given I am logged in as a '<teacher>' at '<namespace>'

        # import the course
        When I go to courses overview
        When I click on FAB to add or import courses
        When I click on the import course button
        When I select the fixture file 'cc/CC-Import-Test.imscc'
        When I start the import

        # @staging_test 
        # TODO this feature is not executable on staging as we do not access the API calls on staging.

        @school_api_test
        Examples:
            | teacher      | namespace |
            | teacher1_dbc | dbc       |