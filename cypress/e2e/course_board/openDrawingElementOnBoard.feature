@pr
@release
@stable_test
@api-migrated
Feature: Course Board - Opening a drawing element on a course page

    As a teacher and student I want to open already created drawing element on a course page

    Scenario Outline: Users (admin, teacher, student), create a course with board and open TLDraw.
        Given I am logged in as a '<admin>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'

        # Pre-Condition: Creating new course
        Given I am logged in as a '<admin>' at '<namespace>'
        When I go to rooms overview
        When I click on FAB to create a new room
        When I click on new course create button in sub menu
        Then I see section one area on the course create page
        When I enter the course title '<course_name>'
        When I select room colour as red
        Then I select '<fullname_teacher>' from field teacher
        Then I see substitute teacher selection box
        Then I see button to create a course time table container
        When I click on button Next Steps after entering the room detail in section one
        Then I see section two area on the course create page
        When I select '<fullname_student>' from field student
        When I click on button Next Steps after selecting room participant details
        Then I see the section three area as the finish page
        When I click on button To Course Overview on the finish page

        # Pre-Condition: Teacher create course board, add whiteboard and publish the board
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<course_name>'
        When I go to the tab contents in course detail page
        When I click on FAB to create new content
        When I click on the button FAB New Column Board
        Then I see the page Course Board detail
        When I click on the button three dot menu in course board
        When I click on the option Edit in three dot menu in course board
        Then I enter the course board title '<board_title>'
        When I click on the page outside of the column
        Then I see the chip Draft in the course board
        When I click on the button three dot menu in course board
        Then I click on the option Publish in three dot menu in course board

        # Pre-Condition: Teacher adds a new column
        When I click on the button Add column in the course board
        When I click on the page outside of the column
        When I click on plus icon to add card in column
        When I click on plus icon to add content into card
        Then I select whiteboard from the menu

        # Teacher is able to open a drawing element to the course board
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<course_name>'
        When I click on card Course Board
        When I click on open Drawing Element

        # Student is able to open a drawing element to the course board
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<course_name>'
        When I click on card Course Board
        When I click on open Drawing Element

        Examples:
            | admin      | teacher      | student      | namespace | course_name | fullname_teacher  | fullname_student  | board_title    |
            | admin1_nbc | teacher1_nbc | student1_nbc | nbc       | German      | cypress teacher_1 | cypress student_1 | Board Cy Title |
