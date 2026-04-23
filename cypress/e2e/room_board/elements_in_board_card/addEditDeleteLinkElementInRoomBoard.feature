@regression_test
@stable_test
@schedule_run
@group-B
@prio_0_staging
@only
Feature: Room Board - Add, edit, delete element Link in the room board

    As a teacher, I want to add, edit and delete link element in the room board, so that I can link an important resources efficiently.

    Scenario Outline: Add, edit, delete link element in the room the room board, including pre & post conditions

        # pre-condition: creating accounts
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: room, board and card are existing
        Given a room named '<room_name>' with a multi-column board named '<board_title>' exists
        Given the multi-column board has a column with a card
        Given multi column board is published to not to be in a draft mode
        Given '<student_name>' added in the room '<room_name>' at position '0' with role '<role_name_student>' and default read permission

        # teacher adds element Link in the multi-column room board
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        Then I see the dialog Add Element in the card
        When I select 'link' from the element selection dialog box
        Then I enter link URL '<example_link>'
        When I click outside of the card to save it
        Then I see the element Link on the card
        Then I see the URL '<example_link>' in the element Link
        Then I verify the element Link is clickable

        # student can see the element Link in the multi-column board
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        #Then I see the element Link on the card
        #Then I verify the element Link is clickable

        # teacher edits the element Link in the multi-column board
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        Then I edit link URL to '<example_link_edited>'
        When I click outside of the card to save it
        Then I see the element Link on the card
        Then I see the URL '<example_link_edited>' in the element Link
        Then I verify the element Link is clickable

        # teacher deletes the element Link in the multi-column board
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on the three dot in the element Link
        When I click on the option Delete in the three dot menu
        Then I see the dialog Confirm deletion
        When I click on the button Delete in the confirmation dialog
        Then I do not see the element Link

        # student can not see the element Link in the multi-column board
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        Then I do not see the element Link

        # post-condition: delete the room
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given the room '<room_name>' at position '0' is deleted

        #@staging_test
        #Examples:
        #    | teacher      | student      | namespace | room_name            | student_name | role_name_student | board_title            | example_link                        | example_link_edited                        |
        #    | teacher1_dbc | student1_dbc | dbc       | CypressAut Room Name | Kraft        | Lernend           | CypressAut Board Title | https://main.dbc.dbildungscloud.dev/ | https://main.dbc.dbildungscloud.dev/edited/ |

        @school_api_test
        Examples:
            | teacher      | student      | namespace | room_name            | student_name | role_name_student | board_title            | example_link                        | example_link_edited                        |
            | teacher1_dbc | student1_dbc | dbc       | CypressAut Room Name5 | student_1    | Lernend           | CypressAut Board Title5 | https://main.dbc.dbildungscloud.dev/ | https://main.dbc.dbildungscloud.dev/edited/ |
