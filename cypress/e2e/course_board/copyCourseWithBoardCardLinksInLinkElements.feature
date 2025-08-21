@regression_test
@stable_test
@group-V
@schedule_run
Feature: Course Board - Copy course with a board which contains link elements with board card links

    As a teacher, I want to be able to copy course with links elements in a board, when the link elements contain board card links

    Scenario Outline: Teacher copies a course with a board that has links elements

        # pre-condition: teacher create courses
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a course named '<course_name_1>, <course_name_2>' exists

        # teacher creates a board and adds a card
        When I go to courses overview
        When I go to course '<course_name_1>'
        Then I see course page '<course_name_1>'
        When I click on FAB to create new content
        When I click on the button FAB New Column Board
        Then I see a dialog box for column board
        When I choose multi-column board in the dialog box
        Then I see the page Course Board details
        When I click on the button three dot menu in course board
        When I select the three dot menu action 'rename'
        When I enter the course board title '<board_title_1>'
        When I click on the page outside of the column
        Then I see the course Board name '<board_title_1>'
        When I click on the button Add column in the course board
        When I click on the page outside of the column
        When I click on icon Plus to add card in column
        When I enter the board card title '<card_title_1>'
        When I click on the page outside of the card
        Then I see a board card with title '<card_title_1>'

        # teacher copies board card link and adds it to a link element
        When I click on three dot menu in the card
        When I select the option Copy link to card in three dot menu on the card
        When I click on icon Plus to add card in column
        When I click on icon Plus to add content into card
        When I select "link" from the element selection dialog box
        When I enter the copied board card link in the link element
        Then I see link element with title '<card_title_1>'

        # teacher creates a second board with a card in the same course
        When I go to courses overview
        When I go to course '<course_name_1>'
        Then I see course page '<course_name_1>'
        When I click on FAB to create new content
        When I click on the button FAB New Column Board
        Then I see a dialog box for column board
        When I choose multi-column board in the dialog box
        Then I see the page Course Board details
        When I click on the button three dot menu in course board
        When I select the three dot menu action 'rename'
        When I enter the course board title '<board_title_2>'
        When I click on the page outside of the column
        Then I see the course Board name '<board_title_2>'
        When I click on the button Add column in the course board
        When I click on the page outside of the column
        When I click on icon Plus to add card in column
        When I enter the board card title '<card_title_2>'
        When I click on the page outside of the card
        Then I see a board card with title '<card_title_2>'

        # teacher copies board card link and adds it to a link element in the first board
        When I click on three dot menu in the card
        When I select the option Copy link to card in three dot menu on the card
        When I go to courses overview
        When I go to course '<course_name_1>'
        Then I see course page '<course_name_1>'
        When I open column board '<board_title_1>'
        Then I see the page Course Board details
        Then I see the course Board name '<board_title_1>'
        When I click on icon Plus to add card in column
        When I click on icon Plus to add content into card
        When I select "link" from the element selection dialog box
        When I enter the copied board card link in the link element
        Then I see link element with title '<card_title_2>'

        # teacher creates a third board in the second course
        When I go to courses overview
        When I go to course '<course_name_2>'
        Then I see course page '<course_name_2>'
        When I click on FAB to create new content
        When I click on the button FAB New Column Board
        Then I see a dialog box for column board
        When I choose multi-column board in the dialog box
        Then I see the page Course Board details
        When I click on the button three dot menu in course board
        When I select the three dot menu action 'rename'
        When I enter the course board title '<board_title_3>'
        When I click on the page outside of the column
        Then I see the course Board name '<board_title_3>'
        When I click on the button Add column in the course board
        When I click on the page outside of the column
        When I click on icon Plus to add card in column
        When I enter the board card title '<card_title_3>'
        When I click on the page outside of the card
        Then I see a board card with title '<card_title_3>'

        # teacher copies board card link and adds it to a link element in the first board
        When I click on three dot menu in the card
        When I select the option Copy link to card in three dot menu on the card
        When I go to courses overview
        When I go to course '<course_name_1>'
        Then I see course page '<course_name_1>'
        When I open column board '<board_title_1>'
        Then I see the page Course Board details
        Then I see the course Board name '<board_title_1>'
        When I click on icon Plus to add card in column
        When I click on icon Plus to add content into card
        When I select "link" from the element selection dialog box
        When I enter the copied board card link in the link element
        Then I see link element with title '<card_title_3>'

        # teacher copies the first course
        When I go to courses overview
        When I go to course '<course_name_1>'
        Then I see course page '<course_name_1>'
        When I click on button copy course
        Then I see the copy result notification
        When I close the dialog
        When I go to courses overview
        When I go to course '<course_name_1_copy>'
        Then I see course page '<course_name_1_copy>'
        When I open column board '<board_title_1>'
        Then I see the page Course Board details
        Then I see the course Board name '<board_title_1>'
        Then I see link element with title '<card_title_1>'
        Then I see link element with title '<card_title_2>'
        Then I see link element with title '<card_title_3>'

        # teacher opens link to first board
        When I click on link element with title '<card_title_1>'
        Then I see breadcrumb contains course name '<course_name_1_copy>'
        Then I see the course Board name '<board_title_1>'
        Then I see the page Course Board details

        # teacher opens link to second board
        When I click on link element with title '<card_title_2>'
        Then I see breadcrumb contains course name '<course_name_1_copy>'
        Then I see the course Board name '<board_title_2>'
        Then I see the page Course Board details
        Then I see the focused board card

        # teacher opens link to third board
        When I go to courses overview
        When I go to course '<course_name_1_copy>'
        Then I see course page '<course_name_1_copy>'
        When I open column board '<board_title_1>'
        Then I see the page Course Board details
        Then I see the course Board name '<board_title_1>'
        When I click on link element with title '<card_title_3>'
        Then I see breadcrumb contains course name '<course_name_2>'
        Then I see the course Board name '<board_title_3>'
        Then I see the page Course Board details
        Then I see the focused board card

        # post-condition: teacher deletes courses
        Given course with name '<course_name_1>' is deleted
        Given course with name '<course_name_2>' is deleted
        Given course with name '<course_name_1_copy>' is deleted

        @staging_test
        Examples:
            | admin      | teacher      | namespace | course_name_1         | course_name_1_copy        | course_name_2         | fullname_teacher | board_title_1 | board_title_2 | board_title_3 | card_title_1 | card_title_2 | card_title_3 |
            | admin1_nbc | teacher1_nbc | nbc       | Cypress Test Course 1 | Cypress Test Course 1 (1) | Cypress Test Course 2 | Karl Herzog      | Board 1       | Board 2       | Board 3       | Card Link 1  | Card Link 2  | Card Link 3  |

        @school_api_test
        Examples:
            | admin      | teacher      | namespace | course_name_1         | course_name_1_copy        | course_name_2         | fullname_teacher  | board_title_1 | board_title_2 | board_title_3 | card_title_1 | card_title_2 | card_title_3 |
            | admin1_nbc | teacher1_nbc | nbc       | Cypress Test Course 1 | Cypress Test Course 1 (1) | Cypress Test Course 2 | cypress teacher_1 | Board 1       | Board 2       | Board 3       | Card Link 1  | Card Link 2  | Card Link 3  |
