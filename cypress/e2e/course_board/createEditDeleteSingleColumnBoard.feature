@regression_test
@stable_test
@schedule_run
@group-E
Feature: Course Board - To create, edit and delete a single-column course board

    As a teacher I want to create, edit and delete a single-column course board so that I can use this option.

    Scenario Outline: user creation, course creation, and creating single-column board, adding a card with text and whiteboard, deleting the single-column board in the course

        # pre-condition: teacher and admin log in to create their account in a same school
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin creates a course and assign teacher to the course
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        When I enter the course title '<course_name>'
        When I select course colour as red
        Then I select teacher '<fullname_teacher>' is selected by default
        When I click on button Next Steps after entering the course detail in section one
        When I select the student '<fullname_student>' in the list
        When I click on button Next Steps after selecting course participant details
        When I click on button To Course Overview on the finish page
        # Note: this step is not applicable for the admin user
        #Then I see the course 'CypressAut Test Creation and Deletion' on the course overview page

        # teacher adds a new single-column Board
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I go to the tab contents in course detail page
        When I click on FAB to create new content
        When I click on the button FAB New Column Board
        Then I see a dialog box for column board
        Then I see in dialog box option for multi-column board
        Then I see in dialog box option for single-column board
        When I choose single-column board in the dialog box
        Then I see the page Course Board details
        When I click on the button three dot menu in course board
        When I select the three dot menu action 'rename'
        Then I enter the course board title '<board_title>'
        When I click on the page outside of the column
        # Then I see the course Board name '<board_title>'
        Then I see the chip Draft in the course board

        # student does not see the single-column board
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I can not see content '<board_title>'

        # teacher publishes the column board
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on card Course Board
        When I click on the button three dot menu in course board
        When I click on the option Publish in three dot menu in course board
        Then I do not see the chip Draft in the course board

        # teacher adds a new column with text and whiteboard in the column board
        When I click on the button Add column in the course board
        When I enter the title name '<column_board_title>' in the column
        When I click on the page outside of the column
        Then I see my column named '<column_board_title>'
        Then I click on the button with the Icon Plus to add a new card in the column
        When I enter '<card_text_content>' to board card text element
        When I click on icon Plus to add content into card
        When I select 'drawing-element' from the element selection dialog box
        Then I see a whiteboard on the board
        Then I see '<card_text_content>' in board card text element

        # teacher edits the column in the single-column board
        When I click on three dot menu in the column
        When I select the three dot menu action 'rename'
        Then I enter the title name '<edited_column_board_title>' in the column
        When I click on the page outside of the column
        Then I see my column named '<edited_column_board_title>'

        # student sees the single-column board
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        Then I can see board '<board_title>' on course page
        When I click on card Course Board
        Then I see a whiteboard on the board
        Then I see '<card_text_content>' in board card text element

        # # teacher deletes the column in the single-column board
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on card Course Board
        When I click on three dot menu in the column
        When I select the three dot menu action 'delete'
        Then I see the modal Confirmation
        When I click on the button Remove on the Modal
        Then I do not see the column

        # post-condition: Teacher deletes the course
        When I go to courses overview
        When I go to course '<course_name>'
        When I open page Edit course
        When I click on the button delete course
        Then I see the modal to confirm the deletion
        When I click on the button delete on the modal to confirm the course deletion
        Then I do not see the course '<course_name>' on the course overview page


        @school_api_test
        Examples:
            | teacher      | admin      | student      | namespace | fullname_teacher  | fullname_student  | course_name                           | board_title                    | column_board_title     | edited_column_board_title | card_text_content |
            | teacher1_brb | admin1_brb | student1_brb | brb       | cypress teacher_1 | cypress student_1 | CypressAut Single Column Board Course | CypressAut Single Column Board | My Cypress Test Column | Edit Cypress Test Column  | Lorem ipsum ...   |

        @staging_test
        Examples:
            | teacher      | admin      | student      | namespace | fullname_teacher | fullname_student | course_name                           | board_title      | column_board_title     | edited_column_board_title | card_text_content |
            | teacher1_brb | admin1_brb | student1_brb | brb       | Karl Herzog      | Herbert Kraft    | CypressAut Single Column Board Course | CypressAut Board | My Cypress Test Column | Edit Cypress Test Column  | Lorem ipsum ...   |
