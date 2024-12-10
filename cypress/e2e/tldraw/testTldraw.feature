@regression_test
@stable_test
Feature: Test tldraw on board

    Scenario: I can create a whiteboard element and draw on it
        # pre-condition: creating accounts
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # admin creates a course
        Given a course with name '<course_name>' exists with '<teacher_fullname>' as teacher and '<student_fullname>' as student

        # teacher a board with a whiteboard element and draws on it
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a board exists in course '<course_name>'
        Given the board has a column with a card
        When I click on plus icon to add content into card
        When I select whiteboard from the menu
        When I click on the whiteboard element
        When I click on the pencil tool
        When I draw a line on the canvas
        When I click on the text tool
        When I type text on the canvas
        Then I should see the line drawn
        Then I should see the text drawn

        # student can access the whiteboard element and see the drawing
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on the board
        When I click on the whiteboard element
        Then I should see the line drawn
        Then I should see the text drawn

        # clean up the created course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I open page Edit course
        When I click on the button delete course
        When I click on the button delete on the modal to confirm the course deletion

        @school_api_test
        Examples:
		    | namespace | admin      | teacher      | teacher_fullname  | student      | student_fullname  | course_name              | board_name              |
		    | dbc       | admin1_dbc | teacher1_dbc | cypress teacher_1 | student1_dbc | cypress student_1 | CypressAut TLDraw Course | CypressAut TLDraw Board |

        @staging_test
        Examples:
		    | namespace | admin      | teacher      | teacher_fullname  | student      | student_fullname  | course_name              | board_name              |
		    | brb       | admin1_brb | teacher1_brb | Karl Herzog       | student1_brb | Herbert Kraft     | CypressAut TLDraw Course | CypressAut TLDraw Board |
