@regression_test
@stable_test
@schedule_run
@group-E
@prio_0_dev
Feature: Course Board - To import a course from common cartridge 1.3

    As a teacher, I want to import a course from a common cartridge file exported from SVS

    Scenario Outline: Teacher imports course from SVS

        # pre-condition: user (teacher) logs in
        Given I am logged in as a '<teacher>' at '<namespace>'

        # import the course
        When I go to courses overview
        When I click on FAB to add or import courses
        When I click on the import course button
        When I select the fixture file 'cc/CC-Import-Test.imscc'
        When I start the import
        Then I see the loading bar
        When I wait for the loading bar to close
        Then I see the course 'CC-Import-Test' on the course overview page

        # Topic 1
        # When I go to courses overview
        When I go to course 'CC-Import-Test'
        Then I see the board 'Topic 1' on the room overview page
        When I click on the board 'Topic 1' on the room overview page
        Then I see that I am on a column board
        Then I see a column with title 'Text 1'
        Then I see a rich text element with pattern 'Lorem ipsum'
        Then I see a column with title 'Geogebra 1'
        Then I see a web link with title 'Geogebra 1'
        Then I see a column with title 'Etherpad 1'
        Then I see a web link with title 'Etherpad 1'
        Then I see a column with title 'LernMat 1'
        Then I see a web link with title 'Pottwal'
        Then I see a column with title 'Topic Task 1'

        # Aufgaben
        When I go to courses overview
        When I go to course 'CC-Import-Test'
        Then I see the board 'Aufgaben' on the room overview page
        When I click on the board 'Aufgaben' on the room overview page
        Then I see that I am on a column board
        Then I see a column with title 'Task 1'
        Then I see a rich text element with pattern 'How much wood could a woodchuck chuck if a woodchuck could chuck wood?'

        # Board 1
        When I go to courses overview
        When I go to course 'CC-Import-Test'
        Then I see the board 'Board 1' on the room overview page
        When I click on the board 'Board 1' on the room overview page
        Then I see that I am on a column board
        Then I see a column with title 'Column 1'
        Then I see a card with title 'Card 1.1'
        Then I see a rich text element with pattern 'Text Card 1.1'
        Then I see a card with title 'Card 1.2'
        Then I see a web link with title 'Google'
        Then I see a card with title 'Card 1.3'
        Then I see a file element with title 'file.txt'
        Then I see a column with title 'Column 2'
        Then I see a card with title 'Card 2.1'
        Then I see a web link with title 'Example Domain'
        Then I see a card with title 'Card 2.2'
        Then I see a rich text element with pattern 'Text Card 2.2'
        Then I see a column with title 'Column 3'
        Then I see a card with title 'Card 3.1'
        Then I see a rich text element with pattern 'Text Card 3.1'

        # Board Files
        When I go to courses overview
        When I go to course 'CC-Import-Test'
        Then I see the board 'Board Files' on the room overview page
        When I click on the board 'Board Files' on the room overview page
        Then I see that I am on a column board
        Then I see a card with title 'Files'
        Then I see a file element with title 'Description of pdf'
        Then I see a file element with title 'Description of mp3'
        Then I see a file element with title 'Description of mp4'
        Then I see a file element with title 'Description of xml'
        Then I see a file element with title 'Description of png'
        Then I see a file element with title 'Description of gif'
        Then I see a file element with title 'Description of ppt'
        Then I see a file element with title 'Description of jpg'

        # @staging_test
        # Examples:
        #     | teacher      | namespace |
        #     | teacher1_dbc | dbc       |

        @school_api_test
        Examples:
            | teacher      | namespace |
            | teacher1_dbc | dbc       |
