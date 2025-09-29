@regression_test
@stable_test
@group-F
Feature: Room Board - Collabora spreadsheet file read access (add, view, delete) with viewer permission

    As a teacher with viewer permission I want to open and view the existing collabora spreadsheet file

    Scenario Outline:  Teacher is able to open and view collabora spreadsheet file in a board

        # pre-condition: creating accounts, room with board, adding participant teacher in the room and upload xlsx file
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card
        Given the file '<xlsx_file_name>' is added to the room board
        Given participant with participant name '<teacher_2_name>' is added to the room '<room_name>'

        # first teacher opens the collabora xlsx file editor in the same tab, adds content and saves it
        When I go to rooms overview
        When I go to room '<room_name>'
        When I click on the multi-column board in the room detail page
        Then I see the file type XLSX is uploaded in the card
        When I click on the collabora file '<xlsx_file_name>'
        Then I see collabora text editor
        When I type text '<value_1>' in collabora editor on position '200', '100'
        When I click on the button Save in Collabora editor

        # first teacher downloads the xlsx document as pdf from collabora editor
        When I click on the icon File in collabora editor top toolbar
        When I click on the button Download in collabora editor
        When I download by clicking on the option PDF download in collabora editor

        #first teacher publishes the room board
        When I go back to the previous page
        Then I see the file type XLSX is uploaded in the card
        Given multi column board is published to not to be in a draft mode

        # second teacher opens the xlsx file in collabora editor in view mode and cannot edit
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name>'
        When I click on the multi-column board in the room detail page
        Then I see the file type XLSX is uploaded in the card
        When I click on the collabora file '<xlsx_file_name>'
        Then I cannot type text '<value_2>' in collabora editor on position '300', '100'

        #second teacher downloads the xlsx document as pdf from collabora editor
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
            | namespace | teacher_1    | teacher_2    | teacher_2_name | room_name                 | board_title                | xlsx_file_name   | value_1            | value_2            |
            | dbc       | teacher1_dbc | teacher2_dbc | teacher_2      | CypressAut Collabora Room | CypressAut Collabora Board | sample-xlsx.xlsx | Collabora Teacher1 | Collabora Teacher2 |

        @staging_test
        Examples:
            | namespace | teacher_1    | teacher_2    | teacher_2_name | room_name                 | board_title                | xlsx_file_name   | value_1            | value_2            |
            | brb       | teacher1_brb | teacher2_brb | Hande          | CypressAut Collabora Room | CypressAut Collabora Board | sample-xlsx.xlsx | Collabora Teacher1 | Collabora Teacher2 |


