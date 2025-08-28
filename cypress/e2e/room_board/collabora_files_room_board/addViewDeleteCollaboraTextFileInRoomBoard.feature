@regression_test
@stable_test
@group-V
Feature: Collabora - Add, view and delete collabora text file in the room board

    As a teacher with view permission I want to open and view the existing collabora text file

    Scenario Outline:  Teacher is able to open and view collabora files in a board

        # pre-condition: creating accounts, room with board, adding participant teacher in the room and upload docx file
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card
        Given the file '<docx_file_name>' is added to the room board
        Given participant with participant name '<teacher_2_name>' is added to the room '<room_name>'

        # first teacher opens the collabora text file editor in the same tab, adds text content and saves it
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name>'
        When I click on the multi-column board in the room detail page
        Then I see the file type DOCX is uploaded in the card
        When I click on the collabora file '<docx_file_name>'
        Then I see collabora text editor
        When I type text '<text_1>' in collabora editor on position '200', '400'
        When I click on the button Save in Collabora editor

        # first teacher downloads the document as pdf from collabora editor
        When I click on the icon File in collabora editor top toolbar
        When I click on the button Download in collabora editor
        When I download by clicking on the option PDF download in collabora editor

        #first teacher publishes the room board
        When I go back to the previous page
        Then I see the file type DOCX is uploaded in the card
        Given multi column board is published to not to be in a draft mode

        # second teacher opens the text file in collabora editor in view mode and cannot edit
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name>'
        When I click on the multi-column board in the room detail page
        Then I see the file type DOCX is uploaded in the card
        When I click on the collabora file '<docx_file_name>'
        Then I cannot type text '<text_2>' in collabora editor on position '600', '500'

        #second teacher downloads the document as pdf from collabora editor
        When I click on the icon File in collabora editor top toolbar
        When I click on the button Download in collabora editor
        When I download by clicking on the option PDF download in collabora editor
        When I go back to the previous page
        Then I see the file type DOCX is uploaded in the card

        # first teacher can delete the collabora text document from room board
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given the card file is deleted from room '<room_name>'

        # post-condition: delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | namespace | teacher_1    | teacher_2    | teacher_2_name | room_name      | board_title     | docx_file_name   | text_1             | text_2             |
            | brb       | teacher1_brb | teacher2_brb | teacher_2      | Collabora Room | Collabora Board | sample-docx.docx | Collabora Teacher1 | Collabora Teacher2 |

#@staging_test
#Examples:
#| namespace | teacher_1    | teacher_2    | teacher_2_name | room_name      | board_title     | docx_file_name   | text_1    | text_2       |
#| brb       | teacher1_brb | teacher2_brb | Hande          | Collabora Room | Collabora Board | sample-docx.docx | Collabora | Cypress Test |


