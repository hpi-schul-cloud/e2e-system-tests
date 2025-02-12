@regression_test
@unstable_test
Feature: Course Board - To share a board card link

    As a teacher I want to share a link to a board card.

    @stable_test
    Scenario: Teacher shares a link to a board card
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'

        # pre-condition: first teacher creates a course
        When I go to courses overview
        When I click on FAB to create a new course depending on sub menu
        Then I see section one area on the course create page
        When I enter the course title '<course_name>'
        Then I see teacher '<fullname_teacher_1>' is selected by default
        When I select '<fullname_teacher_2>' from field teacher
        When I click on button Next Steps after entering the course detail in section one
        Then I see section two area on the course create page
        When I click on button Next Steps after selecting course participant details
        Then I see the section three area as the finish page
        When I click on button To Course Overview on the finish page
        Then I see the course '<course_name>' on the course overview page
        # first teacher adds a board with a card to the course
        When I go to course '<course_name>'
        Then I see course page '<course_name>'
        When I click on FAB to create new content
        When I click on the button FAB New Column Board
        Then I see a dialog box for column board
        Then I see in dialog box option for multi-column board
        Then I see in dialog box option for single-column board
        When I choose multi-column board in the dialog box
        Then I see the page Course Board details
        Then I see the chip Draft in the course board
        When I click on three dot menu in the board header
        When I click on the option Publish in three dot menu in course board
        Then I do not see the chip Draft in the course board
        When I click on the button Add column in the course board
        When I click on the page outside of the column
        When I click on plus icon to add card in column
        When I click on the page outside of the card
        Then I see a board card

        # first teacher copies link to board card
        When I click on three dot menu in the card
        When I select the option Copy link to card in three dot menu on the card

        # second teacher opens link to board card
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I open the link to a board card
        Then I see the page Course Board details
        Then I see the focused board card

        # post-condition: second teacher deletes course
        When I go to courses overview
        When I go to course '<course_name>'
        When I open page Edit course
        When I click on the button delete course
        Then I see the modal to confirm the deletion
        When I click on the button delete on the modal to confirm the course deletion
        Then I do not see the course '<course_name>' on the course overview page

        @staging_test
        Examples:
            | teacher_1    | teacher_2    | namespace | fullname_teacher_1 | fullname_teacher_2 | course_name         |
            | teacher1_nbc | teacher2_nbc | nbc       | Karl Herzog        | Lara Hande         | Cypress Test Course |

        @school_api_test
        Examples:
            | teacher_1    | teacher_2    | namespace | fullname_teacher_1 | fullname_teacher_2 | course_name         |
            | teacher1_nbc | teacher2_nbc | nbc       | cypress teacher_1  | cypress teacher_2  | Cypress Test Course |
