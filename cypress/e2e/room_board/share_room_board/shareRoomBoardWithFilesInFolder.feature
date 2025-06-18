@regression_test
@stable_test
@schedule_run
Feature: Share room board copy with files in file folder

    As a content editor I want to copy a room board with files in file folder, so that the file folder and also the files inside are available in the new room board

    Scenario Outline:  Content editor is able to create, edit and delete a folder in a board
        # pre-condition: creating accounts and 2 rooms, one with board and folder in a card (name of second room has to be after first room in room list)
        Given I am logged in as a '<content_editor>' at '<namespace>'
        Given a room named '<second_room_name>' exists
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card
        Given the card has a folder named '<folder_name>'
        Given the folder '<folder_name>' contains files '<video_file_name>, <audio_file_name>, <image_file_name>'

        # content editor copies share room board copy link
        When I click on breadcrumb element '<board_title>'
        Then I see a folder with name '<folder_name>' in the card
        When I click on the three dot menu in room board title
        When I select the three dot menu action 'share'
        Then I see the Share settings dialog
        Then I see the checkbox Link valid for the same school is by default checked
        When I click on the button Continue
        Then I see the Share via modal
        Then I see the option Copy link
        Then I copy the board URL

        # content editor copies room board to second room
        When I open the shared URL
        Then I see the modal to import the shared board into the room
        Then I see the title in the share modal
        When I select the room from the room list in the modal
        When I click on the Continue button in the modal
        When I enter a new name for the imported board '<import_board_title>' in the modal
        When I click on the button Import in the modal
        When I click on the multi-column board in the room detail page
        Then I see my room board is named '<import_board_title>'
        Then I see a folder with name '<folder_name>' in the card
        When I click on the folder '<folder_name>' in the card
        Then I see files '<video_file_name>, <audio_file_name>, <image_file_name>' in file list

        # post-condition: delete the rooms
        Given the room named '<room_name>' is deleted
        Given the room named '<second_room_name>' is deleted

        @school_api_test
        Examples:
            | namespace | content_editor | room_name              | second_room_name       | board_title                      | import_board_title               | folder_name        | video_file_name          | audio_file_name            | image_file_name |
            | dbc       | teacher1_dbc   | CypressAut Room Source | CypressAut Room Second | CypressAut Folder Board Original | CypressAut Folder Board Imported | Cypress Test Files | sample_video_1mb_mp4.mp4 | sample_audio_0.4mb_mp3.mp3 | example_jpg.jpg |


