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
        Given a board exists in course '<course_name>'
        Given the board has a column with a card

        # teacher creates a whiteboard element in the card and draws on it
        When I click on plus icon to add content into card
        When I select whiteboard from the menu
        When I click on the whiteboard element
        When I click on the pencil tool
        When I draw a line on the canvas with startpoint '100', '100' and endpoint '300', '300'
        When I click on the text tool
        When I type text '<text_to_write>' on the canvas on position '200', '500'
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

        # post-condition: clean up the created course
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given course with name '<course_name>' is deleted

        @school_api_test
        Examples:
		    | namespace | admin      | teacher      | teacher_fullname  | student      | student_fullname  | course_name              | board_name              | text_to_write |
		    | dbc       | admin1_dbc | teacher1_dbc | cypress teacher_1 | student1_dbc | cypress student_1 | CypressAut TLDraw Course | CypressAut TLDraw Board | Hello World!  |

        @staging_test
        Examples:
		    | namespace | admin      | teacher      | teacher_fullname  | student      | student_fullname  | course_name              | board_name              | text_to_write |
		    | brb       | admin1_brb | teacher1_brb | Karl Herzog       | student1_brb | Herbert Kraft     | CypressAut TLDraw Course | CypressAut TLDraw Board | Hello World!  |
