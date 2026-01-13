@regression_test
@stable_test
@schedule_run
@group-E
@prio_0_dev
# @prio_0_staging
Feature: Course Board - To export a course as common cartridge and show a warning when 1.1.0 is selected

    As a teacher, I want to export a course as a common cartridge file and get a warning box, telling me that file folders will not be exported when CC 1.1.0 was selected

    Scenario Outline: Teacher exports course

        # pre-condition: user (teacher) logs in
        Given I am logged in as a '<teacher>' at '<namespace>'

        # prepare course
        When I go to courses overview
        When I click on FAB to add or import courses
        When I click on the import course button
        When I select the fixture file 'cc/CC_Test_Kurs.imscc'
        When I start the import
        Then I see the loading bar
        When I wait for the loading bar to close
        Then I see the course 'CC_Test_Kurs' on the course overview page

        # export the course with CC 1.1.0 (does not support file folder export)
        When I go to courses overview
        When I go to course 'CC_Test_Kurs'
        Then I see course page 'CC_Test_Kurs'
        When I click on export course button
        # warning box should be shown
        Then I should see a fixed warning that CC can not export file folders
        When I click on dialog next button
        # a warning box should be shown if CC 1.1.0 was selected
        Then I should see a warning that CC can not export file folders

        # click on the back button (fast than cancel)
        When I click on the back button
        Then I should see a fixed warning that CC can not export file folders
        When I select the latest CC radio button
        When I click on dialog next button
        # a warning box should not be shown if CC 1.3.0 was selected
        Then I should not see a warning that CC can not export file folders

        # @staging_test
        # Examples:
        #     | teacher      | namespace |
        #     | teacher1_dbc | dbc       |

        @school_api_test
        Examples:
            | teacher      | namespace |
            | teacher1_dbc | dbc       |
