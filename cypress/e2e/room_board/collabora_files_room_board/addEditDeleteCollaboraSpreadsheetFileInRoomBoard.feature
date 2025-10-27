@regression_test
@stable_test
@group-F
@prio_0_staging
Feature: Room Board - Collabora spreadsheet file type with full file access (add, edit, delete) with editor permission

    As a teacher with edit permission, I want to add collabora spreadsheet file, add content and delete the file in a room board

    Scenario Outline:  Teacher is able to create, add content and delete collabora spreadsheet file type in a board

        # pre-condition: creating accounts, room with board, adding participant teacher in the room and upload xlsx file
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card
        Given the file with filename '<xlsx_file_name>' and caption '<xlsx_caption_text>' is added to the room board
        Given participant with participant name '<teacher_2_name>' is added to the room '<room_name>'
        Given participant '<teacher_2_name>' is having room role permission '<teacher_2_role>'

        # first teacher edits caption of the collabora xlsx file in the multi-column room board
        When I go to rooms overview
        When I go to room '<room_name>'
        When I click on the multi-column board in the room detail page
        Then I see the file type XLSX is uploaded in the card
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I enter text in the textbox Caption '<xlsx_caption_text_rename>'
        When I click outside of the card to save it
        Then I see the file type XLSX is uploaded in the card

        # first teacher removes the xlsx filename, verifies validation message and renames filename in the multi-column room board
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on the three dot in the element File
        When I clear file name from the file
        Then I see a validation error message '<error_message>' below the name field for file card
        When I enter name '<xlsx_file_name_rename>' for file in card
        When I click outside of the card to save it
        Then I see the file type XLSX is uploaded in the card

        # first teacher opens the collabora xlsx file editor in the same tab, adds content and saves it
        When I click on the collabora file '<xlsx_file_name_rename>'
        Then I see collabora text editor
        When I type text '<value_1>' in collabora editor on position '200', '100'
        When I click on the button Save in Collabora editor

        # first teacher downloads the xlsx document as pdf from collabora editor
        When I click on the icon File in collabora editor top toolbar
        When I click on the button Download in collabora editor
        When I download by clicking on the option PDF download in collabora editor

        # first teacher publishes the room board
        When I go back to the previous page
        Then I see the file type XLSX is uploaded in the card
        Given multi column board is published to not to be in a draft mode


        # second teacher edits the xlsx file in collabora editor in edit mode, adds text content and saves it
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name>'
        When I click on the multi-column board in the room detail page
        Then I see the file type XLSX is uploaded in the card
        When I click on the collabora file '<xlsx_file_name_rename>'
        When I type text '<value_2>' in collabora editor on position '300', '100'
        When I click on the button Save in Collabora editor

        # second teacher downloads the xlsx document as pdf from collabora editor
        When I click on the icon File in collabora editor top toolbar
        When I click on the button Download in collabora editor
        When I download by clicking on the option PDF download in collabora editor
        When I go back to the previous page
        Then I see the file type XLSX is uploaded in the card

        # first teacher deletes the collabora xlsx document from room board
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given the card file is deleted from room '<room_name>'

        # post-condition: delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | namespace | teacher_1    | teacher_2    | teacher_2_name | teacher_2_role | room_name                 | board_title                | xlsx_file_name   | value_1            | value_2            | xlsx_caption_text        | xlsx_caption_text_rename         | error_message               | xlsx_file_name_rename   |
            | dbc       | teacher1_dbc | teacher2_dbc | teacher_2      | editor         | CypressAut Collabora Room | CypressAut Collabora Board | sample-xlsx.xlsx | Collabora Teacher1 | Collabora Teacher2 | CypressAut Excel Caption | CypressAut Excel Caption Renamed | Bitte fülle dieses Feld aus | sample-xlsx-rename.xlsx |

        @staging_test
        Examples:
            | namespace | teacher_1    | teacher_2    | teacher_2_name | teacher_2_role | room_name                 | board_title                | xlsx_file_name   | value_1            | value_2            | xlsx_caption_text        | xlsx_caption_text_rename         | error_message               | xlsx_file_name_rename   |
            | brb       | teacher1_brb | teacher2_brb | Hande          | editor         | CypressAut Collabora Room | CypressAut Collabora Board | sample-xlsx.xlsx | Collabora Teacher1 | Collabora Teacher2 | CypressAut Excel Caption | CypressAut Excel Caption Renamed | Bitte fülle dieses Feld aus | sample-xlsx-rename.xlsx |
