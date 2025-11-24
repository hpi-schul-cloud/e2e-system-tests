@regression_test
@stable_test

Feature: Health Check - To check the presences of modules in the dBildungscloud on staging / ref.

    As a user, I want to see all modules and important pages are present so I can check the health of every instance.

    Scenario Outline: User sees dashboard with all expected contents

        # student checks dashboard
        Given I am logged in as a '<student>' at '<namespace>'
        When I arrive on the dashboard
        Then I see the welcome message 'Hallo <fullname_student>!'
        Then I see school news with title 'Herzlichen Willkommen in der Cypress Health School' and description 'DIes ist ein beispielhafter News-Text'
        Then I see teams news with title 'Team HC AG nimmt Arbeit auf' and description 'Lorem ipsum'
        #Then I can see the assigned task 'Aufgabe Health Check' of course 'HC Kurs'

        # student check rooms, roomboard and content
        When I go to rooms overview
        When I click on button Open to go to room 'Health Check' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        When I click on the folder 'Bereichsdateien' in the card
        Then I see page Folder content for 'Bereichsdateien'
        Then I see files 'mario_animiert.gif, beispiel3_10userQA.csv, NoR_Aalregatta_2020_WebNoR_Aalregatta_2020_Web-1NoR_Aalregatta_2020_Web-1-1.pdf' in file list
        When I check the checkbox in the table header for all elements
        Then I see displayed number of checked files is '6'
        When I click on breadcrumb element 'Bereich HC'
        Then I see the element H5P 'Software Health Check' in the card
        #Then I see a card with element Whiteboard
        Then I see the video conference element added in the card

        # student checks grading of task via task overview
        When I go to tasks overview
        When I click completed task tab
        Then I see task 'Aufgabe Health Check' in the list as student
        When I click on task 'Aufgabe Health Check' in tasks overview
        Then I see submission text 'Hier kommt die Antwort, siehe Datei.'
        When I click on feedback tab
        Then I see feedback text 'Das war schon mal gut.'
        Then I see grade is '74'

        # teacher checks Course and content task
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course 'HC Kurs'
        Then I see task card info submitted contains '1/1' for task 'Aufgabe Health Check'
        Then Task card info graded contains '1/1' for task 'Aufgabe Health Check'
        When I click on task 'Aufgabe Health Check'
        When I click on submissions tab
        Then there is a tick in column delivered for '<student_last_name>'
        When I click on submission of '<student_last_name>'
        Then I see submission text 'Hier kommt die Antwort, siehe Datei.'

        # teacher checks Course and content course board
        When I go to courses overview
        When I go to course 'HC Kurs'

        @staging_test
        Examples:
            | namespace | teacher        | student        | fullname_student | student_last_name |
            | dbc       | teacher_hc_dbc | student_hc_dbc | Adam Schmitt     | Schmitt           |
#| nbc       | teacher_hc_nbc | student_hc_nbc | Adam Schmitt     | Schmitt           |
#| brb       | teacher_hc_brb | student_hc_brb | Adam Schmitt     | Schmitt           |
