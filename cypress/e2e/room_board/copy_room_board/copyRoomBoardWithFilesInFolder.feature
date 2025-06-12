@regression_test
@stable_test
Feature: Copying room board with files in a file folder

As a teacher I want to copy a room board with files in file folder, so that in the new room board there are the files of the original board available.

Scenario Outline:  Content editor is able to create, edit and delete a folder in a board
        # pre-condition: creating accounts and room with board and a folder in a card
        Given I am logged in as a '<content_editor>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card
        Given the card has a folder named '<folder_name>'
        Given the folder '<folder_name>' contains files '<video_file_name>, <audio_file_name>, <image_file_name>'

        # content editor copies room board on board page
        When I click on breadcrumb element '<board_title>'
        Then I see a folder with name '<folder_name>' in the card
        When I click on the three dot menu in room board title
        When I select the three dot menu action 'copy'
        Then I see my room board is named '<board_title> (1)'
        Then I see a folder with name '<folder_name>' in the card
        When I click on the folder '<folder_name>' in the card
        Then I see files '<video_file_name>, <audio_file_name>, <image_file_name>' in file list

        # post-condition: delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | namespace | content_editor | room_name              | board_title                      | folder_name        | video_file_name          | audio_file_name            | image_file_name |
            | dbc       | teacher1_dbc   | CypressAut Folder Room | CypressAut Folder Board Original | Cypress Test Files | sample_video_1mb_mp4.mp4 | sample_audio_0.4mb_mp3.mp3 | example_jpg.jpg |


