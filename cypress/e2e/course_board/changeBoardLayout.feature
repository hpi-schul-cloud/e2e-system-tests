@regression_test
@stable_test
Feature: Course Board - To change the board layout

    As a teacher I want to change the board layout

    Scenario: Teacher changes board layout
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: teacher creates a course
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        Then I see section one area on the course create page
        When I enter the course title '<course_name>'
        Then I see teacher '<fullname_teacher>' is selected by default
        When I click on button Next Steps after entering the course detail in section one
        Then I see section two area on the course create page
        When I click on button Next Steps after selecting course participant details
        Then I see the section three area as the finish page
        When I click on button To Course Overview on the finish page
        Then I see the course '<course_name>' on the course overview page

        # teacher adds a board with multiple columns and cards to the course
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        When I click on FAB to create new content
        When I click on the button FAB New Column Board
        Then I see a dialog box for column board
        Then I see in dialog box option for multi-column board
        Then I see in dialog box option for single-column board
        When I choose multi-column board in the dialog box
        Then I see the page Course Board details
        When I click on the button Add column in the course board
        When I click on the page outside of the column
        When I click on the button Add column in the course board
        When I click on the page outside of the column
        When I click on icon Plus to add card in column
        When I click on the page outside of the card
        Then I see a board card

        # teacher changes board layout to single column
        When I click on three dot menu in the board header
        When I click on the option Change layout in three dot menu in course board
        Then I see a dialog box for column board
        Then I see in dialog box option for multi-column board
        Then I see in dialog box option for single-column board
        When I choose single-column board in the dialog box
        Then I see the single-column board

        # teacher changes board layout to multi column
        When I click on three dot menu in the board header
        When I click on the option Change layout in three dot menu in course board
        Then I see a dialog box for column board
        Then I see in dialog box option for multi-column board
        Then I see in dialog box option for single-column board
        When I choose multi-column board in the dialog box
        Then I see the multi-column board

        # post-condition: teacher deletes course
        When I go to courses overview
        When I go to course '<course_name>'
        When I open page Edit course
        When I click on the button delete course
        Then I see the modal to confirm the deletion
        When I click on the button delete on the modal to confirm the course deletion
        Then I do not see the course '<course_name>' on the course overview page

        @staging_test
        Examples:
            | teacher      | namespace | course_name         | fullname_teacher |
            | teacher1_nbc | nbc       | Cypress Test Course | Karl Herzog      |

        @school_api_test
        Examples:
            | teacher      | namespace | course_name         | fullname_teacher  |
            | teacher1_nbc | nbc       | Cypress Test Course | cypress teacher_1 |
