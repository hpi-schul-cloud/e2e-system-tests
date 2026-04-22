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
        When I wait for the loading bar to close
        When I wait '<import_wait_time>' seconds and reload
        Then I see the course 'CC-Import-Test' on the course overview page

        # Topic 1
        # When I go to courses overview
        When I go to course 'CC-Import-Test'
        Then I see the board 'Topic 1' on the room overview page
        When I click on the board 'Topic 1' on the room overview page
        Then I see that I am on a column board
        Then I see a column with title 'Text 1' at position '0'
        Then I see a rich text element with pattern 'Lorem ipsum' at position '0' '0'
        Then I see a column with title 'Geogebra 1' at position '1'
        Then I see a web link with title 'Geogebra 1'
        Then I see a column with title 'Etherpad 1' at position '3'
        Then I see a web link with title 'Etherpad 1'
        Then I see a column with title 'LernMat 1' at position '2'
        Then I see a web link with title 'Pottwal'
        Then I see a column with title 'Topic Task 1' at position '4'

        # Aufgaben
        When I go to courses overview
        When I go to course 'CC-Import-Test'
        Then I see the board 'Aufgaben' on the room overview page
        When I click on the board 'Aufgaben' on the room overview page
        Then I see that I am on a column board
        Then I see a column with title 'Task 1' at position '0'
        Then I see a rich text element with pattern 'How much wood could a woodchuck chuck if a woodchuck could chuck wood?' at position '0' '0'

        # Board 1
        When I go to courses overview
        When I go to course 'CC-Import-Test'
        Then I see the board 'Board 1' on the room overview page
        When I click on the board 'Board 1' on the room overview page
        Then I see that I am on a column board
        Then I see a column with title 'Column 1' at position '0'
        Then I see a card with title 'Card 1.1'
        Then I see a rich text element with pattern 'Text Card 1.1' at position '0' '0'
        Then I see a card with title 'Card 1.2'
        Then I see a web link with title 'Google'
        Then I see a card with title 'Card 1.3'
        Then I see a file element with title 'file.txt'
        Then I see a column with title 'Column 2' at position '1'
        Then I see a card with title 'Card 2.1'
        Then I see a web link with title 'Example Domain'
        Then I see a card with title 'Card 2.2'
        Then I see a rich text element with pattern 'Text 2.2' at position '1' '0'
        Then I see a column with title 'Column 3' at position '2'
        Then I see a card with title 'Card 3.1'
        Then I see a rich text element with pattern 'Text 3.1' at position '2' '0'

        # Board Files
        When I go to courses overview
        When I go to course 'CC-Import-Test'
        Then I see the board 'Board Files' on the room overview page
        When I click on the board 'Board Files' on the room overview page
        Then I see that I am on a column board
        Then I see a card with title 'Files'
        #PDF file
        Then I see a file element with title 'file-example_pdf_1mb.pdf'
        #MP3 file
        Then I see the file type Audio in the card
        #MP4 file
        Then I see the file type Video in the card
        #XML file
        Then I see a file element with title 'file_example_xml_24kb.xml'
        #GIF file
        Then I see the file type Image in the card
        #PNG file
        Then I see the file type Image in the card
        #PPT file
        Then I see a file element with title 'file_example_ppt_500kb.ppt'
        #JPEG file
        Then I see the file type Image in the card

        # @staging_test
        # Examples:
        #     | teacher      | namespace | import_wait_time |
        #     | teacher1_dbc | dbc       | 3                |

        @school_api_test
        Examples:
            | teacher      | namespace | import_wait_time |
            | teacher1_dbc | dbc       | 3                |
