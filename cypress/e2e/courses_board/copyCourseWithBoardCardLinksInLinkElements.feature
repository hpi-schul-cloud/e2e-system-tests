@regression_test
@stable_test
@group-D
@schedule_run
@prio_0_staging
Feature: Course Board - Copy course with a board which contains link elements with board card links

    As a teacher, I want to be able to copy course with links elements in a board, when the link elements contain board card links

    Scenario Outline: Teacher copies a course with a board that has links elements

        # pre-condition: teacher create courses
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a course named '<course_name_1>' exists
        Given a course named '<course_name_2>' exists

        # teacher create multi-column boards with renamed titles and initial cards in both courses
        Given a course '<course_name_1>' contains a 'multi-column' board and 'rename' board title to '<board_title_1>' with card '<card_title_1>'
        Given a course '<course_name_1>' contains a 'multi-column' board and 'rename' board title to '<board_title_2>' with card '<card_title_2>'
        Given a course '<course_name_2>' contains a 'multi-column' board and 'rename' board title to '<board_title_3>' with card '<card_title_3>'

        # teacher copies board card link and adds it to a link element
        When I go to courses overview
        When I go to course '<course_name_1>'
        Then I see course page '<course_name_1>'
        When I open column board '<board_title_1>'
        When I click on three dot menu in the card
        When I select the option Copy link to card in three dot menu on the card
        When I click on icon Plus to add card in column
        When I click on icon Plus to add content into card
        When I select "link" from the element selection dialog box
        When I enter the copied board card link in the link element
        Then I see link element with title '<card_title_1>'

        # teacher copies board card link and adds it to a link element in the first board
        When I go to courses overview
        When I go to course '<course_name_1>'
        Then I see course page '<course_name_1>'
        When I open column board '<board_title_2>'
        When I click on three dot menu in the card
        When I select the option Copy link to card in three dot menu on the card
        When I go to courses overview
        When I go to course '<course_name_1>'
        Then I see course page '<course_name_1>'
        When I open column board '<board_title_1>'
        Then I see the page Course Board details
        Then I see the course Board name '<board_title_1>'
        When I click on the page outside of the column
        When I click on icon Plus to add card in column
        When I click on icon Plus to add content into card
        When I select "link" from the element selection dialog box
        When I enter the copied board card link in the link element
        Then I see link element with title '<card_title_2>'

        # teacher copies board card link and adds it to a link element in the first board
        When I go to courses overview
        When I go to course '<course_name_2>'
        Then I see course page '<course_name_2>'
        When I open column board '<board_title_3>'
        When I click on three dot menu in the card
        When I select the option Copy link to card in three dot menu on the card
        When I go to courses overview
        When I go to course '<course_name_1>'
        Then I see course page '<course_name_1>'
        When I open column board '<board_title_1>'
        Then I see the page Course Board details
        Then I see the course Board name '<board_title_1>'
        When I click on the page outside of the column
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
        Then I see modal 'copy' with information on '<copyright_data_protection>, <course_member_permission>, <course_data>'
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
            | admin      | teacher      | namespace | course_name_1            | course_name_1_copy           | course_name_2            | fullname_teacher | board_title_1      | board_title_2      | board_title_3      | card_title_1 | card_title_2 | card_title_3 | copyright_data_protection | course_member_permission | course_data |
            | admin1_nbc | teacher1_nbc | nbc       | CypressAut Test Course 1 | CypressAut Test Course 1 (1) | CypressAut Test Course 2 | Karl Herzog      | CypressAut Board 1 | CypressAut Board 2 | CypressAut Board 3 | Card Link 1  | Card Link 2  | Card Link 3  | Copyright data protection | Course member permission | Course data |

        @school_api_test
        Examples:
            | admin      | teacher      | namespace | course_name_1            | course_name_1_copy           | course_name_2            | fullname_teacher  | board_title_1      | board_title_2      | board_title_3      | card_title_1 | card_title_2 | card_title_3 | copyright_data_protection | course_member_permission | course_data |
            | admin1_nbc | teacher1_nbc | nbc       | CypressAut Test Course 1 | CypressAut Test Course 1 (1) | CypressAut Test Course 2 | cypress teacher_1 | CypressAut Board 1 | CypressAut Board 2 | CypressAut Board 3 | Card Link 1  | Card Link 2  | Card Link 3  | Copyright data protection | Course member permission | Course data |
