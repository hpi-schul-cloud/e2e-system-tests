@regression_test
@stable_test
@schedule_run
@group-Q
Feature: Course Board - To create, edit and delete column in the course board

    As a teacher I want to create, edit and delete the column in the course board so that I can manage the column in the board.

    Scenario Outline: user creation, course creation, and creating, editing, deleting a column board in the course

        # pre-condition: teacher and admin log in to create their account in a same school
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin creates a course and assign teacher to the course
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        Then I see section one area on the course create page
        When I enter the course title '<course_name>'
        When I select course colour as red
        Then I select teacher '<fullname_teacher>' is selected by default
        Then I see substitute teacher selection box
        Then I see date pickers to start and end the course as per school year
        Then I see button to create a course time table container
        When I click on button Next Steps after entering the course detail in section one
        Then I see section two area on the course create page
        Then I see class selection box to select the class for the course
        Then I see student selection box to select the student for the course
        # Note: student user is not needed in this feature so this step is commented out
        #When I select the student '<fullname_student>' in the list
        When I click on button Next Steps after selecting course participant details
        Then I see the section three as the finish page
        When I click on button To Course Overview on the finish page
        # Note: this step is not applicable for the admin user
        #Then I see the course 'CypressAut Test Creation and Deletion' on the course overview page

        # teacher adds a new Board
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I go to the tab contents in course detail page
        When I click on FAB to create new content
        When I click on the button FAB New Column Board
        Then I see a dialog box for column board
        Then I see in dialog box option for multi-column board
        Then I see in dialog box option for single-column board
        When I choose multi-column board in the dialog box
        Then I see the page Course Board details
        When I click on the button three dot menu in course board
        When I select the three dot menu action 'rename'
        Then I enter the course board title '<board_title>'
        When I click on the page outside of the column
        #Then I see the course Board name 'Board Cy Title'
        Then I see the chip Draft in the course board

        # teacher adds a new column in the Board
        When I click on the button Add column in the course board
        When I enter the title name '<column_board_title>' in the column
        When I click on the page outside of the column
        Then I see my column named '<column_board_title>'
        Then I click on the button with the Icon Plus to add a new card in the column

        # teacher edits the column in the Board
        When I click on three dot menu in the column
        When I select the three dot menu action 'rename'
        Then I enter the title name '<edited_column_board_title>' in the column
        When I click on the page outside of the column
        Then I see my column named '<edited_column_board_title>'

        # teacher deletes the column in the Board
        When I click on three dot menu in the column
        When I select the option Delete in three dot menu in the column
        Then I see the modal Confirmation
        When I click on the button Remove on the Modal
        Then I do not see the column

        # post-condition: teacher deletes the course
        When I go to courses overview
        When I go to course '<course_name>'
        When I open page Edit course
        When I click on the button delete course
        Then I see the modal to confirm the deletion
        When I click on the button delete on the modal to confirm the course deletion
        Then I do not see the course '<course_name>' on the course overview page

        @pre_check_test
        @school_api_test
        Examples:
            | teacher      | admin      | namespace | fullname_teacher  | course_name                    | board_title    | column_board_title     | edited_column_board_title |
            | teacher1_brb | admin1_brb | brb       | cypress teacher_1 | CypressAut Column Board Course | Board Cy Title | My Cypress Test Column | Edit Cypress Test Column  |

        @staging_test
        Examples:
            | teacher      | admin      | namespace | fullname_teacher | course_name                    | board_title    | column_board_title     | edited_column_board_title |
            | teacher1_brb | admin1_brb | brb       | Karl Herzog      | CypressAut Column Board Course | Board Cy Title | My Cypress Test Column | Edit Cypress Test Column  |
