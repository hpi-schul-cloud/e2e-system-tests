@regression_test
@stable_test
@schedule_run
@group-E
@prio_0_staging
Feature: Room Board - Share multi-column room board in the rooms with teacher from the same school

    As a teacher, I want to share a multi-column board with another teacher within the same school so that I can collaborate effectively.

    Scenario Outline: Share a multi-column board with a Teacher within the same school

        # pre-condition: creating teacher accounts
        Given I am logged in as a '<teacher2>' at '<namespace>'
        Given I am logged in as a '<teacher1>' at '<namespace>'

        # pre-condition: room and multi-column board exist
        Given a room named '<room_name_source>' exists
        Given a multi-column board named '<board_title>' exists in the room

        # first teacher shares the multi-column board with another teacher in the same school using the copied URL
        Then I see the page board details
        When I click on the three dot menu in room board title
        When I select the three dot menu action 'share'
        Then Then I see the Share or move settings dialog
        Then I see the title in the share or move modal
        Then I see the information box in share modal
        Then I see modal 'share' with information on '<copyright_data_protection>, <content_etherpad>, <content_whiteboard>, <external_tools_info>, <external_tools_protected_parameter_info>'
        Then I see the button Cancel in the share modal
        Then I see the checkbox Link valid for the same school is by default checked
        Then I see the checkbox Link valid for 21 days is by default checked
        When I click on the button Continue
        Then I see the Share via modal
        Then I see the result url text box in the modal
        Then I see the option Share via Email
        Then I see the option Copy link
        Then I see the option Scan QR Code
        Then I copy the board URL
        Then I see the alert message

        # pre-condition: second teacher is logged into the application, and a room exists
        Given I am logged in as a '<teacher2>' at '<namespace>'
        Given a room named '<room_name_target>' exists

        # second teacher within the same school imports the multi-column board
        When I open the shared URL for board
        Then I see the Dialog to import
        Then I see the title in the share or move modal
        When I select the room from the room list in the modal
        When I click on the Continue button in the modal
        When I enter a new name for the imported board '<import_board_title>' in the modal
        When I click on the button Confirm in the share or move modal
        Then I see the detail page of room '<room_name_target>'
        When I click on the button Open on multi-column board in the room detail page
        Then I see the page board details
        Then I see the chip Draft

        # post-condition: rooms created by both teachers are deleted
        Given I am logged in as a '<teacher2>' at '<namespace>'
        Given the room '<room_name_target>' at position '0' is deleted
        Given I am logged in as a '<teacher1>' at '<namespace>'
        Given the room '<room_name_source>' at position '0' is deleted

        @school_api_test
        @staging_test
        Examples:
            | teacher1     | teacher2     | namespace | room_name_source       | room_name_target       | board_title            | import_board_title            | copyright_data_protection | content_etherpad | content_whiteboard | external_tools_info | external_tools_protected_parameter_info |
            | teacher1_brb | teacher2_brb | brb       | CypressAut Room Name-1 | CypressAut Room Name-2 | CypressAut Board Title | CypressAut Board Import Title | Copyright data protection | Content etherpad | Content whiteboard | External tools info | External tools protected parameter info |
