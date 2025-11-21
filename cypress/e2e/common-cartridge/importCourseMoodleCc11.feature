@regression_test
@stable_test
@schedule_run
@group-E
@prio_0_dev
@unstable_test
# It's not randomly, there is a selector, that's not available in the SVS: data-testid="rich-text-display-". It will be fixed in a separate PR.

Feature: Course Board - To import a course from common cartridge 1.1

    As a teacher, I want to import a course from a common cartridge file exported from Moodle

    Scenario Outline: Teacher imports course from Moodle

        # pre-condition: user (teacher) logs in
        Given I am logged in as a '<teacher>' at '<namespace>'

        # import the course
        When I go to courses overview
        When I click on FAB to add or import courses
        When I click on the import course button
        When I select the fixture file 'cc/KI-Kurs-moodle.imscc'
        When I start the import
        Then I see the loading bar
        When I wait for the loading bar to close
        Then I see the course 'Chancen und Risiken von KI im Schulkontext' on the course overview page

        # Herzlich willkommen!
        # When I go to courses overview
        When I go to course 'Chancen und Risiken von KI im Schulkontext'
        Then I see the board 'Herzlich willkommen!' on the room overview page
        When I click on the board 'Herzlich willkommen!' on the room overview page
        Then I see that I am on a column board
        Then I see a column with title 'Anleitung' at position '0'
        Then I see a rich text element with pattern 'Erstellt mit Microsoft Bing Image Creator' at position '0' '0'

        # Kapitel 1: Grundlagen- Was ist KI
        When I go to courses overview
        When I go to course 'Chancen und Risiken von KI im Schulkontext'
        Then I see the board 'Kapitel 1: Grundlagen- Was ist KI' on the room overview page
        When I click on the board 'Kapitel 1: Grundlagen- Was ist KI' on the room overview page
        Then I see that I am on a column board
        Then I see a column with title 'Was ist eigentlich KI?' at position '0'
        Then I see a rich text element with pattern '“KI” ist natürlich nur eine Abkürzung und steht für “Künstliche Intelligenz”.' at position '0' '0'
        Then I see a column with title 'Wie funktioniert eine KI?' at position '1'
        Then I see a rich text element with pattern 'Es gibt verschiedene Möglichkeiten, eine KI zu entwickeln.' at position '1' '0'
        Then I see a column with title 'Grundlagen als PDF' at position '2'
        Then I see a file element with title 'file-example_pdf_1mb.pdf'

        # Kapitel 2: Anwendungsfelder und ausgewählte Beispiele von KI im Schulkontext
        When I go to courses overview
        When I go to course 'Chancen und Risiken von KI im Schulkontext'
        Then I see the board 'Kapitel 2: Anwendungsfelder und ausgewählte Beispiele von KI im Schulkontext' on the room overview page
        When I click on the board 'Kapitel 2: Anwendungsfelder und ausgewählte Beispiele von KI im Schulkontext' on the room overview page
        Then I see that I am on a column board
        Then I see a column with title 'Links zur KI' at position '4'
        Then I see a web link with title 'Links zur KI'

        # Kapitel 3: Bedienungskompetenz - Voraussetzungen für die Nutzung von KI
        When I go to courses overview
        When I go to course 'Chancen und Risiken von KI im Schulkontext'
        Then I see the board 'Kapitel 3: Bedienungskompetenz - Voraussetzungen für die Nutzung von KI' on the room overview page
        When I click on the board 'Kapitel 3: Bedienungskompetenz - Voraussetzungen für die Nutzung von KI' on the room overview page
        Then I see that I am on a column board
        Then I see a column with title 'KI in der Schulpraxis mit Regina Schulz' at position '3'
        Then I see a web link with title 'KI in der Schulpraxis mit Regina Schulz'

        # Kapitel 4: Auswirkung von KI im Schulkontext
        When I go to courses overview
        When I go to course 'Chancen und Risiken von KI im Schulkontext'
        Then I see the board 'Kapitel 4: Auswirkung von KI im Schulkontext' on the room overview page
        When I click on the board 'Kapitel 4: Auswirkung von KI im Schulkontext' on the room overview page
        Then I see that I am on a column board
        Then I see a rich text element with pattern 'Über die Auswirkungen von KI in der Schule wurde zuletzt viel geschrieben und spekuliert.' at position '0' '0'
        Then I see a rich text element with pattern 'Der Traum wohl eines jeden Schülers bzw. einer jeden Schülerin ist es, Hausaufgaben in Sekundenschnelle erledigt zu bekommen oder in Prüfungen immer die richtige Antwort zu wissen.' at position '1' '0'

        # Kapitel 5: KI und Desinformation am Beispiel
        When I go to courses overview
        When I go to course 'Chancen und Risiken von KI im Schulkontext'
        Then I see the board 'Kapitel 5: KI und Desinformation am Beispiel' on the room overview page
        When I click on the board 'Kapitel 5: KI und Desinformation am Beispiel' on the room overview page
        Then I see that I am on a column board
        Then I see a rich text element with pattern 'Neben den genannten Potenzialen Künstlicher Intelligenz' at position '0' '0'
        Then I see a rich text element with pattern 'Digitale, kreative Inhalte können heute leicht und in großen Mengen erstellt werden.' at position '1' '0'
        Then I see a rich text element with pattern 'Eine ganze Menge!' at position '2' '0'

        # Dateien zur künstliche Intelligenz
        When I go to courses overview
        When I go to course 'Chancen und Risiken von KI im Schulkontext'
        Then I see the board 'Dateien zur künstliche Intelligenz' on the room overview page
        When I click on the board 'Dateien zur künstliche Intelligenz' on the room overview page
        Then I see that I am on a column board
        Then I see a column with title 'HTML' at position '0'
        Then I see a file element with title 'HTML'
        Then I see a column with title 'PDF' at position '1'
        Then I see a file element with title 'file-example_pdf_1mb.pdf'
        Then I see a column with title 'MP3' at position '2'
        Then I see the file type Audio in the card
        Then I see a column with title 'MP4' at position '3'
        Then I see the file type Video in the card
        Then I see a column with title 'XML' at position '4'
        Then I see a file element with title 'file_example_xml_24kb.xml'
        Then I see a column with title 'GIF' at position '5'
        Then I see the file type Image in the card
        Then I see a column with title 'PNG' at position '6'
        Then I see the file type Image in the card
        Then I see a column with title 'PowerPoint' at position '7'
        Then I see a file element with title 'file_example_ppt_500kb.ppt'
        Then I see a column with title 'JPEG' at position '8'
        Then I see the file type Image in the card
        # Quellen Urheberrechte & Lizenzen
        When I go to courses overview
        When I go to course 'Chancen und Risiken von KI im Schulkontext'
        Then I see the board 'Quellen Urheberrechte & Lizenzen' on the room overview page
        When I click on the board 'Quellen Urheberrechte & Lizenzen' on the room overview page
        Then I see that I am on a column board
        Then I see a column with title 'Urheber' at position '1'
        Then I see a rich text element with pattern 'Schulcloud-Verbund mit den Verbundparteien Brandenburg, Niedersachen, Thüringen' at position '1' '0'

        # @staging_test
        # Examples:
        #     | teacher      | namespace |
        #     | teacher1_dbc | dbc       |

        @school_api_test
        Examples:
            | teacher      | namespace |
            | teacher1_dbc | dbc       |
