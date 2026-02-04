@regression_test
@stable_test
@group-F
@prio_0_staging
Feature: Room Board - Collabora presentation file view access (add, view, delete) with view permission

    As a teacher with view permission, I want to open, view and delete the collabora presentation file

    Scenario Outline:  Teacher is able to open, view and delete collabora presentation file in a board

        # pre-condition: creating accounts, room with board, adding participant teacher in the room
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card
        Given participant '<teacher_2_name>' is added to the room '<room_name>' at position '0'

        # first teacher creates the collabora presentation file using the collabora creation element dialog box
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        When I select '<create_collabora_document>' from the element selection dialog box
        Then I see the dialog box for create collabora document
        When I select document type '<document_type_pptx>' from the dialog box create collabora document
        When I enter filename '<pptx_file_name>' in the dialog box create collabora document
        When I click on button Create in dialog create document
        When I click on the page outside of the column
        Then I see the file type PPTX is uploaded in the card

        # first teacher opens the collabora presentation file editor in the same tab, adds content and saves it
        When I click on the collabora file '<pptx_file_name>'
        Then I see collabora text editor
        When I type text '<value_1>' in collabora editor on position '400', '300'
        When I click on the button Save in Collabora editor

        # first teacher downloads the presentation document as pdf from collabora editor
        When I click on the icon File in collabora editor top toolbar
        When I click on the button Download in collabora editor
        When I download by clicking on the option PDF download in collabora editor

        # first teacher publishes the room board
        When I arrive on the dashboard
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        Then I see the file type PPTX is uploaded in the card
        Given multi column board is published to not to be in a draft mode

        # second teacher opens the PPTX file in view mode and cannot add content to it
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        Then I see the file type PPTX is uploaded in the card
        When I click on the collabora file '<pptx_file_name>'
        Then I cannot type text '<value_2>' in collabora editor on position '500', '500'

        # second teacher in view mode, downloads the pptx document as pdf from collabora editor
        When I click on the icon File in collabora editor top toolbar
        When I click on the button Download in collabora editor
        When I download by clicking on the option PDF download in collabora editor
        When I arrive on the dashboard
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        Then I see the file type PPTX is uploaded in the card

        # first teacher deletes the collabora pptx document from room board
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given the card file is deleted from room '<room_name>' at position '0'

        # post-condition: delete the room
        Given the room '<room_name>' at position '0' is deleted

        @school_api_test
        Examples:
            | namespace | teacher_1    | teacher_2    | teacher_2_name | room_name                 | board_title                | pptx_file_name   | value_1  | value_2  | create_collabora_document | document_type_pptx   |
            | dbc       | teacher1_dbc | teacher2_dbc | teacher_2      | CypressAut Collabora Room | CypressAut Collabora Board | sample-pptx.pptx | Teacher1 | Teacher2 | file-with-collabora       | .pptx (Präsentation) |

        @staging_test
        Examples:
            | namespace | teacher_1    | teacher_2    | teacher_2_name | room_name                 | board_title                | pptx_file_name   | value_1  | value_2  | create_collabora_document | document_type_pptx   |
            | dbc       | teacher1_dbc | teacher2_dbc | Hande          | CypressAut Collabora Room | CypressAut Collabora Board | sample-pptx.pptx | Teacher1 | Teacher2 | file-with-collabora       | .pptx (Präsentation) |


