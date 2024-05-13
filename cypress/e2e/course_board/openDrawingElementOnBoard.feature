@pr
@release
@stable_test
Feature: Course Board - Opening a drawing element on a course page

    As a teacher and student I want to open already created drawing element on a course page

    Scenario: Pre-test: Creating all users
        Given I am logged in as a 'admin1_nbc' at 'nbc'
        Given I am logged in as a 'teacher1_nbc' at 'nbc'
        Given I am logged in as a 'student1_nbc' at 'nbc'

    Scenario: Pre-test: Creating new course
        Given I am logged in as a 'admin1_nbc' at 'nbc'
        When I go to rooms overview
        When I click on FAB to create a new room
        When I click on new course create button in sub menu
        Then I see section one area on the course create page
        When I enter the course title 'German'
        When I select room colour as red
        Then I select 'cypress teacher_1' from field teacher
        Then I see substitute teacher selection box
        Then I see button to create a course time table container
        When I click on button Next Steps after entering the room detail in section one
        Then I see section two area on the course create page
        When I select 'cypress student_1' from field student
        When I click on button Next Steps after selecting room participant details
        Then I see the section three area as the finish page
        When I click on button To Course Overview on the finish page
    Scenario: Pre-Test: Teacher create course board, add whiteboard and publish the board
        Given I am logged in as a 'teacher1_nbc' at 'nbc'
        When I go to rooms overview
        When I go to room 'German'
        When I go to the tab contents in course detail page
        When I click on FAB to create new content
        When I click on the button FAB New Column Board
        Then I see the page Course Board detail
        When I click on the button three dot menu in course board
        When I click on the option Edit in three dot menu in course board
        Then I enter the course board title 'Board Cy Title'
        When I click on the page outside of the column
        Then I see the chip Draft in the course board
        When I click on the button three dot menu in course board
        Then I click on the option Publish in three dot menu in course board

        # Teacher adds a new column ---
        When I click on the button Add column in the course board
        When I click on the page outside of the column
        When I click on plus icon to add card in column
        When I click on plus icon to add content into card
        Then I select whiteboard from the menu

    Scenario:  Teacher is able to open a drawing element to the course board
        # Teacher open the drawing element to the course column
        Given I am logged in as a 'teacher1_nbc' at 'nbc'
        When I go to rooms overview
        When I go to room 'German'
        When I click on card Course Board
        When I click on open Drawing Element

    Scenario:  Student is able to open a drawing element to the course board
        # Student open the drawing element to the course column
        Given I am logged in as a 'student1_nbc' at 'nbc'
        When I go to rooms overview
        When I go to room 'German'
        When I click on card Course Board
        When I click on open Drawing Element
