@regression_test
@stable_test
Feature: Room - Add, edit and delete board in room

    As a teacher I want to add, edit and delete board in the room.

    Scenario: Teacher add, edit, and delete board in the room, including pre-conditions
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: first teacher creating a new room
        When I go to room overview
        When I click on FAB to create new room
        Then I see room creation page
        When I enter the room name '<room_name>'
        When I click on the button to save the room
        Then I see the detail page of room '<room_name>'

        # teacher creates a new multi column board
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to room overview
        When I go to room '<room_name>'
        When I click on the add content button to see the creation button
        Then I see the button to add board
        When I click on the fab button to add a Board
        Then I see the column board dialog box
        When I click on button to add multi column board
        Then I see the page room board details

        # teacher edites title of the new multi column board
        When I click on the button three dot menu in room board
        When I click on edit in board menu
        Then I enter the course board title '<edited_board_title>'
        When I click on the page outside of the title of the board
        Then I see my room board is named '<edited_board_title>'

        # cancel delete-process
        When I click on the button three dot menu in room board
        When I click on delete in board menu
        Then I see the button to cancel the dialog
        When I click on the button to cancel the deletion
        Then I see the page room board details
        Then I see the board '<edited_board_title>' on the room overview page

        # confirm delete-process
        When I click on the button three dot menu in room board
        When I click on delete in board menu
        Then I see the button to cancel the dialog
        Then I click on the button to confirm the deletion
        Then I do not see the board '<edited_board_title>' in the room

        # post-condition: delete room
        When I click on three dot menu in room page
        When I click on delete option in room menu
        Then I see confirmation modal for deleting the room
        When I click on delete button in confirmation modal



        @school_api_test
        Examples:
            | teacher      | namespace | room_name          |   board_name         | edited_board_title    | school_name             | role_name | participant_name |
            | teacher1_brb | brb       | Cypress Room Name  |   Cypress Board Name | Board Cy Title | cypress-automated-tests | Lehrkraft | teacher_2        |

        # @staging_test
        # Examples:
        #     | teacher_1    | teacher_2    | namespace | room_name         | school_name                 | role_name | participant_name |
        #     | teacher1_brb | teacher2_brb | brb       | Cypress Room Name | Felix Mendelssohn-Gymnasium | Lehrkraft | Hande            |