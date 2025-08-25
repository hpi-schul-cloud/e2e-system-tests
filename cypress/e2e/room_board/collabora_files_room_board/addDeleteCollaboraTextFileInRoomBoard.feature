@regression_test
@stable_test
@group-V
Feature: Collabora - Add collabora files in the room board

    As a teacher I want to add collabora files in a room board

    Scenario Outline:  Teacher is able to add collabora files in a board

        # pre-condition: creating accounts, room with board and add docx file
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card
        Given the file '<docx_file_name>' is added to the room board

        # teacher opens the file in collabora editor
        When I click on the collabora file '<docx_file_name>'
        When I click on the button cursive writer in Collabora docx file
        When I type text '<text_1>' in Collabora editor
        Then I click on the button save in Collabora editor
        Then I go back to the page room board
        Then

        # post-condition: delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | namespace | teacher_1    | room_name      | board_title     | docx_file_name   | text_1      |
            | dbc       | teacher1_dbc | Collabora Room | Collabora Board | sample-docx.docx | Hello World |

        @staging_test
        Examples:
            | namespace | teacher_1    | room_name      | board_title     | docx_file_name   | text_1      |
            | dbc       | teacher1_dbc | Collabora Room | Collabora Board | sample-docx.docx | Hello World |
