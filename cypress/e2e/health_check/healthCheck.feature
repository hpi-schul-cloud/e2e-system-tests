@regression_test
@stable_test

Feature: Health Check - To check the presences of modules in the dBildungscloud on staging / ref.

    As a user, I want to see all modules and important pages are present so I can check the health of every instance.

    Scenario Outline: User sees dashboard with all expected contents

        # check dashboard
        Given I am logged in as a '<user>' at '<namespace>'
        When I arrive on the dashboard
        Then I see the welcome message 'Hallo <fullname_user>!'
        Then I see school news with title 'Herzlichen Willkommen in der Cypress Health School' and description 'DIes ist ein beispielhafter News-Text'
        Then I see teams news with title 'Team HC AG nimmt Arbeit auf' and description 'Lorem ipsum'
        #Then I can see the assigned task 'Aufgabe Health Check' of course 'HC Kurs'

        # check rooms, roomboard and content
        When I go to rooms overview
        When I go to room 'Health Check'
        When I click on the multi-column board in the room detail page
        When I click on the folder 'Bereichsdateien' in the card
        Then I see page Folder content for 'Bereichsdateien'
        Then I see files 'mario_animiert.gif, beispiel3_10userQA.csv, NoR_Aalregatta_2020_WebNoR_Aalregatta_2020_Web-1NoR_Aalregatta_2020_Web-1-1.pdf' in file list
        When I check the checkbox in the table header for all elements
        Then I see displayed number of checked files is '6'
        When I click on breadcrumb element 'Bereich HC'
        Then I see the element H5P 'Software Health Check' in the card
        #Then I see a card with element Whiteboard
        Then I see the video conference element added in the card

        @staging_test
        Examples:
            | namespace | user           | fullname_user |
            | dbc       | student_hc_dbc | Adam Schmitt  |
