@regression_test
@stable_test
@group-V
Feature: Room Board - Add collabora files in the room board

    As a teacher I want to add collabora files in a room board

    Scenario Outline:  Teacher is able to add collabora files in a board

        # pre-condition: creating accounts, room with board
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card
        Given teacher adds the file '<docx_file_name>' to the room board

        # teacher opens the file in collabora editor
        When I click on the collabora file '<docx_file_name>'

        # post-condition: delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | namespace | teacher_1    | room_name      | board_title     | docx_file_name   |
            | dbc       | teacher1_dbc | Collabora Room | Collabora Board | sample-docx.docx |

        @staging_test
        Examples:
            | namespace | teacher_1    | room_name      | board_title     | docx_file_name   |
            | dbc       | teacher1_dbc | Collabora Room | Collabora Board | sample-docx.docx |
