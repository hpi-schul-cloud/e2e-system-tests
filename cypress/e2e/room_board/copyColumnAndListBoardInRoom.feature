#@regression_test
#@stable_test
Feature: Room - Add, remove BBB tool in the room board

    As a teacher I want to add and remove BBB tool in the room board so that I can manage video confernce.

    Scenario: Teacher add and remove BBB tool in the room board, including pre-conditions
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a room with name '<room_name>' exist
        Given a multicolumn board with the name '<edited_board_title>' exists in the room
        Given a list board with the name '<edited_board_title>' exists in the room

        # teacher copies multi column board

        # teacher copies list board

        # post-condition: teacher deletes room
        Given room with name '<room_name>' is deleted



        @school_api_test
        Examples:
            | teacher      | namespace | room_name         | edited_board_title |
            | teacher1_brb | brb       | Cypress Room Name | Board Cy Title     |

        @staging_test
        Examples:
            | teacher      | namespace | room_name         | edited_board_title |
            | teacher1_brb | brb       | Cypress Room Name | Board Cy Title     |
