@regression_test
@stable_test
Feature: Room - Upload, download and delete video & audio files type in the Room Board

    As a teacher, I want to upload, download and delete video & audio files in the room board so that I can easily share and manage the board contents.

    Scenario: Upload, download and delete video & audio files in the room board, including pre & post conditions

        # pre-condition: creating accounts
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: room, board and card are existing
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card

        # ------------------------- VIDEO FILE ------------------------------------

        # teacher uploads a video file in the multi-column room board
        When I click on the three dot on the card
        When I click on the option edit in the three dot menu on the card
        When I click on plus icon to add content into card
        Then I see the dialog box to select element for the card
        When I click on the button Close on the element selection dialogue box
        Then I do not see the element selection dialogue box
        When I click on plus icon to add content into card
        Then I see the dialog box to select element for the card
        When I select 'file' from the element selection dialog box
        When I upload a file '<video_file_name>'
        Then I enter caption text '<video_caption_text>'
        Then I click outside of the card to save it
        Then I see the video file is in the card

        # student can see the video file in the multi-column board
        # note: this scenario can not be defined as adding the student to the room feature is not yet implementred.

        # teacher downloads the video file in the multi-column room board
        When I click on the icon download file
        Then file '<video_file_name>' is saved in folder downloads

        # teacher deletes the video file in the multi-column room board
        When I click on the three dot on the card
        When I click on the option edit in the three dot menu on the card
        When I click on the three-dot menu in the File element
        When I click on the option Delete in the three-dot menu
        Then I see the dialog delete confirmation
        When I click on the button Delete in the confirmation dialog
        Then I do not see the element File

        # student can not see the video file in the multi-column board
        # note: this scenario can not be defined as adding the student to the room feature is not yet implementred.

        # ------------------------- AUDIO FILE --------------------------------------

        # teacher uploads a audio file in the multi-column room board
        When I click on plus icon to add content into card
        Then I see the dialog box to select element for the card
        When I click on the button Close on the element selection dialogue box
        Then I do not see the element selection dialogue box
        When I click on plus icon to add content into card
        Then I see the dialog box to select element for the card
        When I select 'file' from the element selection dialog box
        When I upload a file '<audio_file_name>'
        Then I enter caption text '<audio_caption_text>'
        Then I click outside of the card to save it
        Then I see the audio file is in the card

        # student can see the audio file in the multi-column board
        # note: this scenario can not be defined as adding the student to the room feature is not yet implementred.

        # teacher downloads the audio file in the multi-column room board
        When I click on the icon download file
        Then file '<audio_file_name>' is saved in folder downloads

        # teacher deletes the audio file in the multi-column room board
        When I click on the three dot on the card
        When I click on the option edit in the three dot menu on the card
        When I click on the three-dot menu in the File element
        When I click on the option Delete in the three-dot menu
        Then I see the dialog delete confirmation
        When I click on the button Delete in the confirmation dialog
        Then I do not see the element File

        # student can not see the file in the multi-column board
        # note: this scenario can not be defined as adding the student to the room feature is not yet implementred.

        # post-condition: delete the room
        Given I navigate to the room detail page from the board page
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | teacher      | namespace | room_name         | board_title    | video_file_name          | video_caption_text | audio_file_name            | audio_caption_text |
            | teacher1_dbc | dbc       | Cypress Room Name | Board Cy Title | sample_video_1mb_mp4.mp4 | CY video test file | sample_audio_0.4mb_mp3.mp3 | CY audio test file |

        @staging_test
        Examples:
            | teacher      | namespace | room_name         | board_title    | video_file_name          | video_caption_text | audio_file_name            | audio_caption_text |
            | teacher1_dbc | dbc       | Cypress Room Name | Board Cy Title | sample_video_1mb_mp4.mp4 | CY video test file | sample_audio_0.4mb_mp3.mp3 | CY audio test file |