@regression_test
@stable_test
Feature: Test tldraw on board

    Scenario: I can create a whiteboard element and draw on it
        # pre-condition: creating student account
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'

        # teacher creates a course, a board with a whiteboard element and draws on it
        Given a course with name '<course_name>' exists with me as teacher and '<student_listname>' as student
        Given a board exists in course '<course_name>'
        Given the board has a column with a card
        When I click on plus icon to add content into card
        When I select whiteboard from the menu
        When I click on the whiteboard element
        When I click on the pencil tool
        When I draw a line on the canvas
        When I click on the text tool
        When I type text on the canvas

        # student can access the whiteboard element and see the drawing
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I click on the board
        When I click on the whiteboard element
        Then I should see the line drawn by the teacher
        Then I should see the text drawn by the teacher

        # clean up the created course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I open page Edit course
        When I click on the button delete course
        When I click on the button delete on the modal to confirm the course deletion

        @school_api_test
        Examples:
		    | namespace | teacher      | student      | student_listname  | course_name              | board_name              |
		    | dbc       | teacher1_dbc | student1_dbc | cypress student_1 | CypressAut TLDraw Course | CypressAut TLDraw Board |

        @staging_test
        Examples:
		    | namespace | teacher      | student      | student_listname  | course_name              | board_name              |
		    | brb       | teacher1_brb | student1_brb | Herbert Kraft     | CypressAut TLDraw Course | CypressAut TLDraw Board |
