@regression_test
@stable_test
@schedule_run
@group-B
@prio_0_staging
Feature: Room Board - Upload, download and delete video & audio files type in the room board

    As a teacher, I want to upload, download and delete video & audio files in the room board so that I can easily share and manage the board contents.

    Scenario Outline: Upload, download and delete video & audio files in the room board

        # pre-condition: creating accounts
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: room, board and card are existing
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card

        # ------------------------- VIDEO FILE ------------------------------------

        # teacher uploads a video file in the multi-column room board
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        Then I see the dialog Add Element in the card
        When I click on the button Close in the dialog Add Element
        Then I do not see the dialog Add Element in the card
        When I click on icon Plus to add content into card
        Then I see the dialog Add Element in the card
        When I select 'file' from the element selection dialog box
        When I upload a file '<video_file_name>'
        When I enter text in the textbox Caption '<video_caption_text>'
        When I click outside of the card to save it
        Then I see the file type Video in the card

        # student can see the video file in the multi-column board
        # NOTE: this scenario can not be defined as adding a student into the room is not yet implemented.

        # teacher downloads the video file in the multi-column room board
        When I click on the icon Download file
        Then file '<video_file_name>' is saved in folder downloads

        # teacher deletes the element File with video in the multi-column room board
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on the three dot in the element File
        When I click on the option Delete in the three dot menu
        Then I see the dialog Confirm deletion
        When I click on the button Delete in the confirmation dialog
        Then I do not see the element File

        # student can not see the video file in the multi-column board
        # NOTE: this scenario can not be defined as adding a student into the room is not yet implemented.

        # ------------------------- AUDIO FILE --------------------------------------

        # teacher uploads a audio file in the multi-column room board
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        Then I see the dialog Add Element in the card
        When I click on the button Close in the dialog Add Element
        Then I do not see the dialog Add Element in the card
        When I click on icon Plus to add content into card
        Then I see the dialog Add Element in the card
        When I select 'file' from the element selection dialog box
        When I upload a file '<audio_file_name>'
        When I enter text in the textbox Caption '<audio_caption_text>'
        When I click outside of the card to save it
        Then I see the file type Audio in the card

        # student can see the audio file in the multi-column board
        # NOTE: this scenario can not be defined as adding a student into the room is not yet implemented.

        # teacher downloads the audio file in the multi-column room board
        When I click on the icon Download file
        Then file '<audio_file_name>' is saved in folder downloads

        # teacher deletes the audio file in the multi-column room board
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on the three dot in the element File
        When I click on the option Delete in the three dot menu
        Then I see the dialog Confirm deletion
        When I click on the button Delete in the confirmation dialog
        Then I do not see the element File

        # student can not see the file in the multi-column board
        # NOTE: this scenario can not be defined as adding a student into the room is not yet implemented.

        # post-condition: delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        @staging_test
        Examples:
            | teacher      | namespace | room_name            | board_title            | video_file_name          | video_caption_text         | audio_file_name            | audio_caption_text         |
            | teacher1_dbc | dbc       | CypressAut Room Name | CypressAut Board Title | sample_video_1mb_mp4.mp4 | CypressAut video test file | sample_audio_0.4mb_mp3.mp3 | CypressAut audio test file |
