@regression_test
@stable_test
@schedule_run
Feature: Room Board - Add, delete element Link in the room board

    As a teacher, I want to add and delete link element in the room board, so that I can link an important resouces efficiently.

    Scenario Outline: Add, delete link element in the room the room board, including pre & post conditions

        # pre-condition: creating accounts
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: room, board and card are existing
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card

        # teacher adds element Link in the multi-column room board
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        Then I see the dialog Add Element in the card
        When I select 'link' from the element selection dialog box
        Then I enter link URL '<example_link>'
        When I click on the button Save link
        Then I see the element Link on the card
        When I click outside of the card to save it
        Then I verify the element Link is clickable

        # student can see the element Link in the multi-column board
        # note: this scenario can not be defined as adding a student into the room is not yet implemented.

        # teacher deletes the element Link in the multi-column board
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on the three-dot in the element Link
        When I click on the option Delete in the three-dot menu
        Then I see the dialog Confirm deletion
        When I click on the button Delete in the confirmation dialog
        Then I do not see the element Link

        # student can not see the element Link in the multi-column board
        # note: this scenario can not be defined as adding a student into the room is not yet implemented.

        # post-condition: delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | teacher      | namespace | room_name         | board_title    | example_link                        |
            | teacher1_brb | brb       | Cypress Room Name | Board Cy Title | https://main.dbc.dbildungscloud.dev |

        @staging_test
        Examples:
            | teacher      | namespace | room_name         | board_title    | example_link                        |
            | teacher1_brb | brb       | Cypress Room Name | Board Cy Title | https://main.dbc.dbildungscloud.dev |
