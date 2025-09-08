# @pr
# @regression_test
# @stable_test
Feature: Course Board - To import a course from common cartridge 1.1

    As a teacher I want to import a course from a common cartridge file which was exported from Moodle

    Scenario Outline: Teacher imports course from Moodle
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
        Then I see a column with title 'Anleitung'
        Then I see a rich text element with pattern 'Erstellt mit Microsoft Bing Image Creator'

        # Kapitel 1: Grundlagen- Was ist KI
        When I go to courses overview
        When I go to course 'Chancen und Risiken von KI im Schulkontext'
        Then I see the board 'Kapitel 1: Grundlagen- Was ist KI' on the room overview page
        When I click on the board 'Kapitel 1: Grundlagen- Was ist KI' on the room overview page
        Then I see that I am on a column board
        Then I see a column with title 'Was ist eigentlich KI?'
        Then I see a rich text element with pattern '“KI” ist natürlich nur eine Abkürzung und steht für “Künstliche Intelligenz”.'
        Then I see a column with title 'Wie funktioniert eine KI?'
        Then I see a rich text element with pattern 'Es gibt verschiedene Möglichkeiten, eine KI zu entwickeln.'
        Then I see a column with title 'Grundlagen als PDF'
        Then I see a file element with title 'Grundlagen als PDF'

        # Kapitel 2: Anwendungsfelder und ausgewählte Beispiele von KI im Schulkontext
        When I go to courses overview
        When I go to course 'Chancen und Risiken von KI im Schulkontext'
        Then I see the board 'Kapitel 2: Anwendungsfelder und ausgewählte Beispiele von KI im Schulkontext' on the room overview page
        When I click on the board 'Kapitel 2: Anwendungsfelder und ausgewählte Beispiele von KI im Schulkontext' on the room overview page
        Then I see that I am on a column board
        Then I see a column with title 'Links zur KI'
        Then I see a web link with title 'Links zur KI'

        # Kapitel 3: Bedienungskompetenz - Voraussetzungen für die Nutzung von KI
        When I go to courses overview
        When I go to course 'Chancen und Risiken von KI im Schulkontext'
        Then I see the board 'Kapitel 3: Bedienungskompetenz - Voraussetzungen für die Nutzung von KI' on the room overview page
        When I click on the board 'Kapitel 3: Bedienungskompetenz - Voraussetzungen für die Nutzung von KI' on the room overview page
        Then I see that I am on a column board
        Then I see a column with title 'KI in der Schulpraxis mit Regina Schulz'
        Then I see a web link with title 'KI in der Schulpraxis mit Regina Schulz'

        # Kapitel 4: Auswirkung von KI im Schulkontext
        When I go to courses overview
        When I go to course 'Chancen und Risiken von KI im Schulkontext'
        Then I see the board 'Kapitel 4: Auswirkung von KI im Schulkontext' on the room overview page
        When I click on the board 'Kapitel 4: Auswirkung von KI im Schulkontext' on the room overview page
        Then I see that I am on a column board
        Then I see a rich text element with pattern 'Über die Auswirkungen von KI in der Schule wurde zuletzt viel geschrieben und spekuliert.'
        Then I see a rich text element with pattern 'Der Traum wohl eines jeden Schülers bzw. einer jeden Schülerin ist es, Hausaufgaben in Sekundenschnelle erledigt zu bekommen oder in Prüfungen immer die richtige Antwort zu wissen.'

        # Kapitel 5: KI und Desinformation am Beispiel
        When I go to courses overview
        When I go to course 'Chancen und Risiken von KI im Schulkontext'
        Then I see the board 'Kapitel 5: KI und Desinformation am Beispiel' on the room overview page
        When I click on the board 'Kapitel 5: KI und Desinformation am Beispiel' on the room overview page
        Then I see that I am on a column board
        Then I see a rich text element with pattern 'Neben den genannten Potenzialen Künstlicher Intelligenz'
        Then I see a rich text element with pattern 'Digitale, kreative Inhalte können heute leicht und in großen Mengen erstellt werden.'
        Then I see a rich text element with pattern 'Eine ganze Menge!'

        # Dateien zur künstliche Intelligenz
        When I go to courses overview
        When I go to course 'Chancen und Risiken von KI im Schulkontext'
        Then I see the board 'Dateien zur künstliche Intelligenz' on the room overview page
        When I click on the board 'Dateien zur künstliche Intelligenz' on the room overview page
        Then I see that I am on a column board
        Then I see a column with title 'HTML'
        Then I see a rich text element with pattern 'Was ist KI?'
        Then I see a column with title 'PDF'
        Then I see a file element with title 'PDF'
        Then I see a column with title 'MP3'
        Then I see a file element with title 'MP3'
        Then I see a column with title 'MP4'
        Then I see a file element with title 'MP4'
        Then I see a column with title 'XML'
        Then I see a file element with title 'XML'
        Then I see a column with title 'GIF'
        Then I see a file element with title 'GIF'
        Then I see a column with title 'PNG'
        Then I see a file element with title 'PNG'
        Then I see a column with title 'PowerPoint'
        Then I see a file element with title 'PowerPoint'
        Then I see a column with title 'JPEG'
        Then I see a file element with title 'JPEG'

        # Quellen Urheberrechte & Lizenzen
        When I go to courses overview
        When I go to course 'Chancen und Risiken von KI im Schulkontext'
        Then I see the board 'Quellen Urheberrechte & Lizenzen' on the room overview page
        When I click on the board 'Quellen Urheberrechte & Lizenzen' on the room overview page
        Then I see that I am on a column board
        Then I see a column with title 'Urheber'
        Then I see a rich text element with pattern 'Schulcloud-Verbund mit den Verbundparteien Brandenburg, Niedersachen, Thüringen'

        # @staging_test
        # Examples:
        #     | teacher      | namespace |
        #     | teacher1_dbc | dbc       |

        @school_api_test
        Examples:
            | teacher      | namespace |
            | teacher1_dbc | dbc       |
