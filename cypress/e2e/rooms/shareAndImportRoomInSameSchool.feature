@regression_test
@stable_test
@schedule_run
@group-A
@prio_0_staging
Feature: Rooms - Share and import room with a teacher from the same school

    As a teacher, I want to Share and import a rooms board with another teacher within the same school so that I can collaborate effectively.

    Scenario Outline: Share and import a room with a teacher within the same school

        # pre-condition: creating teacher accounts
        Given I am logged in as a '<teacher2>' at '<namespace>'
        Given I am logged in as a '<teacher1>' at '<namespace>'

        # pre-condition: room and room exist
        Given a room named '<room_name_source>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given multi column board is published to not to be in a draft mode
        Given the multi-column board has a column with a card
        Given link element is added in the card
        Given I navigate to the room detail page via Breadcrumb

        # first teacher shares the room with another teacher in the same school using the copied URL
        When I click on three dot menu in room page
        When I select the three dot menu action 'share'
        Then I see the Share settings dialog
        Then I see the title in the share modal
        Then I see the information box in share modal
        Then I see the info box indicating that the content cannot be copied or shared
        Then I see modal 'share' with information on '<copyright_data_protection>, <room_member_permission>, <content_etherpad>, <content_whiteboard>, <external_tools_info>, <external_tools_protected_parameter_info>'
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

        # pre-condition: the second teacher is logged into the application, and a room exists
        Given I am logged in as a '<teacher2>' at '<namespace>'

        # second teacher within the same school imports the room
        When I open the shared URL
        Then I see the modal to import the shared board into the room
        Then I see the title in the share modal
        When I see the source room name in the modal room import
        Then I enter a new room name '<room_name_target>'
        When I click on the button Import Confirm in the modal
        Then I see the success message Alert
        Then I see '<room_name_target>' on room overview page
        When I go to room '<room_name_target>'
        Then I see the detail page of room '<room_name_target>'
        Then I see copied multi-column board tile in the rooms details page
        When I click on the button Open on multi-column board in the room detail page
        Then I see the chip Draft
        Then I see the element Link on the card

        # post-condition: rooms are deleted
        Given I am logged in as a '<teacher1>' at '<namespace>'
        Given the room named '<room_name_source>' is deleted
        Given I am logged in as a '<teacher2>' at '<namespace>'
        Given the room named '<room_name_target>' is deleted

        @school_api_test
        @staging_test
        Examples:
            | teacher1     | teacher2     | namespace | room_name_source       | room_name_target       | board_title            | copyright_data_protection | room_member_permission | content_etherpad | content_whiteboard | external_tools_info | external_tools_protected_parameter_info |
            | teacher1_dbc | teacher2_dbc | dbc       | CypressAut Room Name-1 | CypressAut Room Name-2 | CypressAut Board Title | Copyright data protection | room member permission | Content etherpad | Content whiteboard | External tools info | External tools protected parameter info |
