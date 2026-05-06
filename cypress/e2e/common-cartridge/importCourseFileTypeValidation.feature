@regression_test
@stable_test
@schedule_run
@group-E
@prio_0_dev
Feature: Course Import - File type validation feature

    As a teacher, I want to be informed about invalid file types when importing a course

    Scenario Outline: Teacher sees file type validation when importing a course

        # pre-condition: user (teacher) logs in
        Given I am logged in as a '<teacher>' at '<namespace>'

        # navigate to import dialog and select invalid file type
        When I go to courses overview
        When I click on FAB to add or import courses
        When I click on the import course button
        When I select a file with invalid file type
        Then I see the invalid file type error message
        Then I see the import button is disabled
        Then I click cancel in the import dialog

        # select a valid .imscc file for import
        When I go to courses overview
        When I click on FAB to add or import courses
        When I click on the import course button
        When I select the fixture file 'cc/CC-Import-Test.imscc'
        Then I see the import button is enabled
        Then I click cancel in the import dialog

        @school_api_test
        Examples:
            | teacher      | namespace |
            | teacher1_dbc | dbc       |
