@regression_test
@stable_test
Feature: TLDraw - Test tldraw on board

    Scenario: I can create a whiteboard element and draw on it
        # pre-condition: creating accounts
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition admin creates a course
        Given a course with name '<course_name>' exists with '<teacher_fullname>' as teacher and '<student_fullname>' as student

        # pre-condition: teacher creates a board with column and a card
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a multi-column board named '<board_name>' exists in the course '<course_name>'
        Given the multi-column board has a column with a card

        # teacher creates a whiteboard element in the card and draws on it
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        When I select 'drawing-element' from the element selection dialog box
        When I click on the whiteboard element
        When I click on the icon Pencil tool
        When I draw a line on the canvas with startpoint '300', '200' and endpoint '400', '300'
        When I click on the icon Text tool
        When I type text '<text_to_write>' on the canvas on position '350', '350'
        Then I should see the line drawn
        Then I should see the text '<text_to_write>' drawn

        # student can access the whiteboard element and see the drawing
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on the board
        When I click on the whiteboard element
        Then I should see the line drawn
        Then I should see the text '<text_to_write>' drawn
        When I click on the text '<text_to_write>'
        When I click on icon delete
        Then I do not see the text '<text_to_write>'
        When I click the icon Undo
        Then I should see the text '<text_to_write>' drawn
        When I click the icon Redo
        Then I do not see the text '<text_to_write>'

        # teacher does not see the deleted element anymore
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on the board
        When I click on the whiteboard element
        Then I should see the line drawn
        Then I do not see the text '<text_to_write>'

        # post-condition: clean up the created course
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given course with name '<course_name>' is deleted

        @school_api_test
        Examples:
            | namespace | admin      | teacher      | teacher_fullname  | student      | student_fullname  | course_name              | board_name              | text_to_write |
            | dbc       | admin1_dbc | teacher1_dbc | cypress teacher_1 | student1_dbc | cypress student_1 | CypressAut TLDraw Course | CypressAut TLDraw Board | Hello World!  |

        @staging_test
        Examples:
            | namespace | admin      | teacher      | teacher_fullname | student      | student_fullname | course_name              | board_name              | text_to_write |
            | brb       | admin1_brb | teacher1_brb | Karl Herzog      | student1_brb | Herbert Kraft    | CypressAut TLDraw Course | CypressAut TLDraw Board | Hello World!  |
