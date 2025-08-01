# @pr
# @regression_test
# @stable_test
Feature: Course Board - To export a course as common cartridge

    As a teacher I want to export a course as a common cartridge file

    Scenario: Teacher exports course
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

        # export the course
        When I go to courses overview
        When I go to course 'CC_Test_Kurs'
        Then I see course page 'CC_Test_Kurs'
        When I click on export course button
        When I click on dialog next button
        When I click on dialog export button
        Then I have a file exported with pattern 'CC_Test_Kurs-.+\.imscc' and rename it

        # Further validation on file
        Given the exported file is an archive and extracted
        Then a manifest exists in the common cartridge file with version '1.1.0' and title 'CC_Test_Kurs'

        # Topic without task
        Then an organization exists on level 0 with title 'Thema Ohne Aufgabe' as 't1'
        Then the 't1' organization has child with title 'Text Inhalt' as 'ti'
        Then the 'ti' organization has child with title '' as 'tic'
        Then the 'tic' organization has child with title 'text ' as 'tict'
        Then the 'tict' organization has a webcontent resource with pattern '\.html'

        Then the 't1' organization has child with title 'GeoGebra Inhalt' as 'geo'
        Then the 'geo' organization has child with title '' as 'geoCard'
        Then the 'geoCard' organization has child with title 'GeoGebra Inhalt' as 'geoLink'
        Then the 'geoLink' organization has a weblink resource with url 'https://geogebra.org/m/ddmw3cwq' and title 'GeoGebra Inhalt'

        Then the 't1' organization has child with title 'Etherpad Inhalt - Etherpad Beschreibung Nach Geo' as 'te'

        Then the 't1' organization has child with title 'Lern-Material Inhalt' as 'lmi'
        Then the 'lmi' organization has child with title '' as 'bwCard'
        Then the 'bwCard' organization has child with title 'Blauwal' as 'bw'
        Then the 'bw' organization has a weblink resource with url 'https://klexikon.zum.de/wiki/Blauwal' and title 'Blauwal'

        Then the 't1' organization has child with title 'Geo Nach Etherpad und Lern-Material' as 'geo2'
        Then the 't1' organization has child with title 'Text Inhalt 2' as 'ti2'
        Then the 't1' organization has child with title 'Geo Letztes Abschnitt' as 'geo3'

        # Topic with task
        Then an organization exists on level 0 with title 'Thema 1 Mit Aufgabe ' as 't2'
        Then the 't2' organization has child with title 'Aufgabe zum Thema 1' as 'ttaskColumn'
        Then the 'ttaskColumn' organization has child with title '' as 'ttaskCard'
        Then the 'ttaskCard' organization has child with title 'Aufgabe zum Thema 1H' as 'ttaskText'
        Then the 'ttaskText' organization has a webcontent resource with pattern '\.html'

        # Board
        Then an organization exists on level 0 with title 'Mehrspaltiger Bereich' as 'b1'
        # Column 1
        Then the 'b1' organization has child with title 'Spalte 1' as 's1'
        Then the 's1' organization has child with title 'Spalte 1 Karte 1' as 'sk1'
        Then the 'sk1' organization has child with title 'Text 1 ' as 'skt1'
        Then the 'skt1' organization has a webcontent resource with pattern '\.html'
        Then the 'sk1' organization has child with title '2te text dann kommt ' as 'skt2'
        Then the 'skt2' organization has a webcontent resource with pattern '\.html'
        Then the 'sk1' organization has child with title 'Wikipedia – Die freie Enzyklopädie' as 'skt3'
        Then the 'skt3' organization has a weblink resource with url 'https://de.wikipedia.org/wiki/Wikipedia:Hauptseite' and title 'Wikipedia – Die freie Enzyklopädie'
        Then the 'sk1' organization has child with title 'Google' as 'skt3'
        Then the 'skt3' organization has a weblink resource with url 'https://www.google.com/' and title 'Google'
        Then the 'sk1' organization has child with title 'text 3 dann noch ein' as 'skt4'
        Then the 'skt4' organization has a webcontent resource with pattern '\.html'
        Then the 'sk1' organization has child with title 'Text und dann kommt ' as 'skt5'
        Then the 'skt5' organization has a webcontent resource with pattern '\.html'
        Then the 'sk1' organization has child with title 'das letzte Text dana' as 'skt6'
        Then the 'skt6' organization has a webcontent resource with pattern '\.html'
        # Column 2
        Then the 'b1' organization has child with title 'Spalte 2' as 's2'
        Then the 's2' organization has child with title 'Spalte 2 Karte 1' as 'sk21'
        Then the 'sk21' organization has child with title 'Link 3 Mal und White' as 'skt21'
        Then the 'skt21' organization has a webcontent resource with pattern '\.html'
        Then the 'sk21' organization has child with title 'Google' as 'skt22'
        Then the 'skt22' organization has a weblink resource with url 'https://www.google.com/' and title 'Google'
        Then the 's2' organization has child with title 'Spalte 2 Karte 3 ohne Inhalt ' as 'sk22'

        # post-condition: File is deleted & closed
        Given extracted content and files are deleted

        @staging_test
        Examples:
            | teacher      | namespace |
            | teacher1_dbc | dbc       |

        @school_api_test
        Examples:
            | teacher      | namespace |
            | teacher1_dbc | dbc       |
