@regression_test
@stable_test
@schedule_run
@group-I
Feature: Room Board - Add, edit and delete board in room

    As a teacher I want to add, edit and delete board in the room.

    Scenario: Teacher add, edit, and delete board in the room, including pre-conditions
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: teacher creating a new room
        When I go to rooms overview
        When I click on FAB to create new room
        Then I see room creation page
        When I enter the room name '<room_name>'
        When I click on the button Save room
        Then I see the detail page of room '<room_name>'

        # teacher creates a new multi-column board in the room
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name>'
        When I click on the button add content
        Then I see the button to add board
        When I click on the fab button to add a Board
        Then I see the dialog box to select the Board type
        When I click on button to add multi-column board
        Then I see the page board details

        # teacher edits the default title of the new multi-column board
        When I click on the three dot menu in room board title
        When I select the three dot menu action 'rename'
        Then I change the default room board title to '<board_title>'
        When I click on the page outside of the title of the board
        Then I see my room board is named '<board_title>'

        # cancel delete-process of the new multi-column board
        When I click on the three dot menu in room board title
        When I select the three dot menu action 'delete'
        Then I see the button to cancel the dialog
        When I click on the button to cancel the deletion
        Then I see the page board details
        Then I see the board '<board_title>' on the room overview page

        # confirm delete-process of the new multi-column board
        When I click on the three dot menu in room board title
        When I select the three dot menu action 'delete'
        Then I see the button to confirm the dialog
        Then I click on the button to confirm the deletion
        Then I do not see the board '<board_title>' in the room

        # teacher creates a new single-column board in the room
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name>'
        When I click on the button add content
        Then I see the button to add board
        When I click on the fab button to add a Board
        Then I see the dialog box to select the Board type
        When I click on button to add single-column board
        Then I see the page board details

        # teacher edits the default title of the new single-column board
        When I click on the three dot menu in room board title
        When I select the three dot menu action 'rename'
        Then I change the default room board title to '<board_title>'
        When I click on the page outside of the title of the board
        Then I see my room board is named '<board_title>'

        # confirm delete-process of single-column board
        When I click on the three dot menu in room board title
        When I click on delete in board menu
        Then I see the button to confirm the dialog
        Then I click on the button to confirm the deletion
        Then I do not see the page board details

        # post-condition: teacher deletes room
        When I click on three dot menu in room page
        When I select the three dot menu action 'delete'
        Then I see confirmation modal for deleting the room
        When I click on delete button in confirmation modal
        Then I do not see '<room_name>' on room overview page


        @school_api_test
        Examples:
            | teacher      | namespace | room_name         | board_title    |
            | teacher1_brb | brb       | Cypress Room Name | Board Cy Title |

        @staging_test
        Examples:
            | teacher      | namespace | room_name         | board_title    |
            | teacher1_brb | brb       | Cypress Room Name | Board Cy Title |
