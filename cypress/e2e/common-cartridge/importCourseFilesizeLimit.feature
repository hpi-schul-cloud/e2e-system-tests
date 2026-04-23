@regression_test
@stable_test
@schedule_run
@group-E
@prio_0_dev
Feature: Course Import - Filesize limit feature

    As a teacher, I want to be informed about file size limits

    Scenario Outline: Teacher imports a course with various file size handling scenarios

        # pre-condition: user (teacher) logs in
        Given I am logged in as a '<teacher>' at '<namespace>'

        # see maximum filesize info message in import dialog
        When I go to courses overview
        When I click on FAB to add or import courses
        When I click on the import course button
        Then I see the maximum filesize info message in the import dialog
        Then I click cancel in the import dialog

        # when no file is selected the import button is disabled
        When I go to courses overview
        When I click on FAB to add or import courses
        When I click on the import course button
        Then I see the import button is disabled
        Then I click cancel in the import dialog

        # navigate to import dialog and select oversized file
        When I go to courses overview
        When I click on FAB to add or import courses
        When I click on the import course button
        When I select a file that exceeds the filesize limit
        Then I see the filesize exceeded error message
        Then I see the import button is disabled
        Then I click cancel in the import dialog

        # select a valid file for import
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
