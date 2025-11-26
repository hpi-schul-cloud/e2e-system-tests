@regression_test
@stable_test

Feature: Health Check - To check the presences of modules in the dBildungscloud on staging / ref.

    As a user, I want to see all modules and important pages are present so I can check the health of every instance.

    Scenario Outline: Teacher and student see SVS with all expected content modules and content on staging / ref.

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
        Then I see the board 'K-Bereich HC' on the room overview page
        When I click on the board 'K-Bereich HC' on the room overview page
        When I click on the folder 'K-Bereichsdateien' in the card
        Then I see page Folder content for 'K-Bereichsdateien'
        Then I see files 'mario_animiert.gif' in file list
        When I check the checkbox in the table header for all elements
        Then I see displayed number of checked files is '2'
        When I click on breadcrumb element 'K-Bereich HC'
        Then I see a whiteboard element

        # teacher checks Course and content topic
        When I go to courses overview
        When I go to course 'HC Kurs mit Thema'
        When I click on topic 'Thema Health Check' on course page
        Then I see topic detail page "Thema Health Check" with content elements "Was ist das?", "Externe Informationen", "Gemeinsame Notizen", "Aufgabe HC" and "Epilog"

        # teacher checks team
        When I go to teams overview
        When I go to a team 'HC AG'
        When I click on team settings
        When I click on edit option
        Then I see team edit page
        When I go to teams overview
        Then I see team title 'HC AG' is visible
        When I go to a team 'HC AG'
        Then I see the uploaded file 'Gadget.jpg' in the file list
        When I go to tab Calendar
        Then I am in calendar tab on team detail page and title 'Brainstorming' is visible
        Then I see the start video conference button
        When I click on news tab on the team detail page
        Then I can read the news 'Team HC AG nimmt Arbeit auf' with description 'Lorem ipsum'

        # teacher checks news
        When I go to news overview
        Then I can read the news 'Herzlichen Willkommen in der Cypress Health School' with description 'DIes ist ein beispielhafter News-Text'
        When I click on the news teaser 'Herzlichen Willkommen in der Cypress Health School'
        Then I can read the news 'Herzlichen Willkommen in der Cypress Health School' with description 'DIes ist ein beispielhafter News-Text' on news detail page
        When I go to news overview
        Then I can read the news 'Team HC AG nimmt Arbeit auf' with description 'Lorem ipsum'

        # teacher checks files > course files
        When I click on Files in menu
        Then I go to course files overview
        Then I see the folder title 'HC Kurs' in course files
        When I click on the folder 'HC Kurs' in files module
        Then I see the uploaded file 'sample-pdf-file.pdf' in the file list
        #When I click on the uploaded file '<image_file_name>' in course files
        #Then I can see the preview of file '<image_file_name>'
        #When I close the preview by clicking on the file preview

        # teacher checks files > personal files
        When I go to personal files overview
        When I click on the folder 'Marks Dateien' in files module
        Then I see the uploaded file 'giphy.gif' in the file list
        When I click on the uploaded file 'giphy.gif' in course files
        Then I can see the preview of file 'giphy.gif'
        When I close the preview by clicking on the file preview

        # teacher checks files > team files
        When I go to team files overview
        When I click on the folder 'HC AG' in files module
        Then I see the uploaded file 'Gadget.jpg' in the file list

        # teacher checks files > shared files
        When I go to shared files overview
        Then I see the uploaded file 'sunflower_animiert.gif' in the file list

        # teacher checks media shelf
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to media shelf
        Then I see the media shelf page title
        Then I see the available media line
        Then I see tool '<mediashelf_tool>' in the available media line

        # teacher checks calendar
        When I go to calendar overview
        Then I see calendar page

        # teacher checks learning store
        When I go to Learning Store overview
        When I write 'Wurzeln' in search container and wait for search result
        Then I see website Learning Store with search result
        When I click on first card of search result
        Then I see card details
        When I click on icon Close Learning Store card details
        Then I see website Learning Store with search result

        @staging_test
        Examples:
            | namespace | teacher        | student        | fullname_student | student_last_name | mediashelf_tool                          |
            | dbc       | teacher_hc_dbc | student_hc_dbc | Adam Schmitt     | Schmitt           | learn app                                |
            | nbc       | teacher_hc_nbc | student_hc_nbc | Adam Schmitt     | Schmitt           | Online-Diagnose Grundschule - Mathematik |
            | brb       | teacher_hc_brb | student_hc_brb | Adam Schmitt     | Schmitt           | bettermarks                              |

    Scenario Outline: admin sees all expected management pages and content on staging / ref.

        Given I am logged in as a '<admin>' at '<namespace>'

        # admin sees student in student administration page
        When I click on administration in menu
        When I go to 'student' administration
        Then I can see the user with email 'adam.schmitt.qa@schul-cloud.org' in the table
        When I click edit 'student' button for 'adam.schmitt.qa@schul-cloud.org'
        Then I see page Edit student

        # admin sees teacher in teacher administration page
        When I go to 'teacher' administration
        Then I can see the user with email 'mark.boll.qa@schul-cloud.org' in the table
        Then I click edit 'teacher' button for 'mark.boll.qa@schul-cloud.org'
        Then I see page Edit teacher

        # admin sees teacher and student room administration page
        When I navigate to rooms administration page via the submenu
        Then I see the rooms administration page
        Then I see the room 'Health Check' on the rooms administration page
        When I click on three dot menu in the room admin page for room 'Health Check'
        When I click on manage room members in the three dot menu
        Then I see the admin page Edit participants of room 'Health Check'
        Then I see 'Schmitt' in the admin room participants list
        Then I see 'Boll' in the admin room participants list

        # admin sees course administration page
        When I navigate to course administration page via the submenu
        Then I see the new course administration page
        Then I see the course 'HC Kurs' on the new course administration page
        Then I see the course 'HC Kurs mit Thema' on the new course administration page
        When I click on the edit button of course 'HC Kurs'
        Then I see page Edit course

        # admin sees school administration page
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on external tools panel
        Then I see the tool '<external_tool>' in external tools table
        When I click on general settings panel
        Then I see toggle switch to enable students access to learning store is checked

        # admin sees class administration page
        When I navigate to class administration page via sub menu
        Then I see the class '1b' has '1' students
        When I click on the button Edit to edit the class '1b'
        Then I see the edit classes page

        @staging_test
        Examples:
            | namespace | admin        | external_tool                            |
            | dbc       | admin_hc_dbc | learn app                                |
            | nbc       | admin_hc_nbc | Online-Diagnose Grundschule - Mathematik |
            | brb       | admin_hc_brb | bettermarks                              |

    Scenario Outline: teacher sees help content on staging / ref.

        Given I am logged in as a '<teacher>' at '<namespace>'

        # teacher sees help articles and contact page
        When I click on Help Section in sidebar
        Then I see element with data-testid 'sidebar-helpsection-trainings'
        When I click on Help articles in sidebar
        Then I see the help articles page
        When I click on Contact in sidebar
        Then I see the help contact page

        @staging_test
        Examples:
            | namespace | teacher        |
            | dbc       | teacher_hc_dbc |
            | nbc       | teacher_hc_nbc |
            | brb       | teacher_hc_brb |

    Scenario Outline: teacher sees system content on staging / ref dbc.

        Given I am logged in as a '<teacher>' at '<namespace>'
        When I click on element with data-testid 'sidebar-system'
        Then I see element with data-testid 'sidebar-system-status'
        Then I see element with data-testid 'sidebar-system-releases'
        Then I see element with data-testid 'sidebar-system-github'
        Then I see element with data-testid 'sidebar-system-security'
        When I click on element with data-testid 'sidebar-system-releases'
        Then I see element with data-testid 'Release Notes'
        When I click on element with data-testid 'sidebar-system-security'
        Then I see content page title 'Sicherheit'

        @staging_test
        Examples:
            | namespace | teacher        |
            | dbc       | teacher_hc_dbc |

    Scenario Outline: teacher sees system content on staging / ref nbc.

        Given I am logged in as a '<teacher>' at '<namespace>'
        When I click on element with data-testid 'sidebar-system'
        Then I see element with data-testid 'sidebar-system-status'
        Then I see element with data-testid 'sidebar-system-releases'
        When I click on element with data-testid 'sidebar-system-releases'
        Then I see element with data-testid 'Release Notes'

        @staging_test
        Examples:
            | namespace | teacher        |
            | nbc       | teacher_hc_nbc |

    Scenario Outline: teacher sees system content on staging / ref brb.

        Given I am logged in as a '<teacher>' at '<namespace>'
        When I click on element with data-testid 'sidebar-system'
        Then I see element with data-testid 'sidebar-system-status'
        Then I see element with data-testid 'sidebar-system-releases'
        Then I see element with data-testid 'sidebar-system-github'
        When I click on element with data-testid 'sidebar-system-releases'
        Then I see element with data-testid 'Release Notes'

        @staging_test
        Examples:
            | namespace | teacher        |
            | brb       | teacher_hc_brb |
