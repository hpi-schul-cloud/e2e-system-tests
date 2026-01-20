@regression_test
@stable_test
@schedule_run
@group-B
@prio_0_staging
Feature: Room Board - Add, edit and delete element text in the room board

    As a teacher, I want to add, edit and delete an element Text on the room board, so that I can manage and update important notes efficiently.

    Scenario Outline: Add, edit and delete element Text in the room the room board, including pre & post conditions

        # pre-condition: creating accounts
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: room, board and card are existing
        Given a room named '<room_name>' with a multi-column board named '<board_title>' exists
        Given the multi-column board has a column with a card
        Given multi column board is published to not to be in a draft mode
        Given '<student_name>' added in the room '<room_name>' at position '0' with role '<role_name_student>' and default read permission

        # teacher adds element Text in the multi-column room board
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        Then I see the dialog Add Element in the card
        When I click on the button Close in the dialog Add Element
        Then I do not see the dialog Add Element in the card
        Then I enter the text '<example_text>' in the element Text with the visible inline CKEditor toolbar
        When I click outside of the card to save it
        Then I see the element Text '<example_text>' in the card
        When I click outside of the card to save it

        # student can see the element Text in the multi-column board
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        Then I see the element Text '<example_text>' in the card

        # teacher edits the element Text in the multi-column board
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        Then I re enter the text '<edit_example_text>' in the element Text
        When I click outside of the card to save it
        Then I see the element Text '<edit_example_text>' in the card

        # teacher deletes the element Text in the multi-column board
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I remove the text '<edit_example_text>' in the element Text
        When I click outside of the card to save it
        Then I do not see the element Text in the card

        # student can not see the element Text in the multi-column board
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        Then I do not see the element Text in the card

        # post-condition: delete the room
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given the room '<room_name>' at position '0' is deleted

        @school_api_test
        @staging_test
        Examples:
            | teacher      | student      | namespace | room_name            | student_name | role_name_student | board_title            | example_text            | edit_example_text            |
            | teacher1_dbc | student1_dbc | dbc       | CypressAut Room Name | student_1    | Lernend           | CypressAut Board Title | CypressAut example text | CypressAut edit example text |
