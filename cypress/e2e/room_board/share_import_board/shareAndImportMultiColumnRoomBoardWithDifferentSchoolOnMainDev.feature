@unstable_test

# Note: This feature can not be currently executed using the school API, as creating two different school within the same scenario is not possible.
#And creating them in two different scenarios results in separate sessions, which prevents the copied board URL from the first scenario from being used in the second scenario.

Feature: Room Board - Share multi-column board in the rooms with the teacher from different school

    As a teacher, I want to share a multi-column board with another teacher from a different school so that I can collaborate effectively.

    Scenario Outline: Share a multi-column board with a teacher from differentschool

        # pre-condition: creating teacher accounts for two different schools
        Given I am logged in as a '<teacherExt_1>' at '<namespace>'
        Given I am logged in as a '<teacher1>' at '<namespace>'

        # pre-condition: room and multi-column board are available in the first school
        Given a room named '<room_name_source>' exists
        Given a multi-column board named '<board_title>' exists in the room

        # first teacher from the first school allows sharing the multi-column board with another teacher from a different school
        Then I see the page board details
        When I click on the three dot menu in room board title
        When I select the three dot menu action 'share'
        Then I see the Share settings dialog
        Then I see the title in the share modal
        Then I see the information box in share modal
        Then I see modal 'share' with information on '<copyright_data_protection>, <content_etherpad>, <content_whiteboard>, <external_tools_info>, <external_tools_protected_parameter_info>'
        Then I see the button Cancel in the share modal
        Then I see the checkbox Link valid for the same school is by default checked
        Then I click to uncheck Link valid for the same school
        Then I see the checkbox Link valid for 21 days is by default checked
        When I click on the button Continue
        Then I see the Share via modal
        Then I see the result url text box in the modal
        Then I see the option Share via Email
        Then I see the option Copy link
        Then I see the option Scan QR Code
        Then I copy the board URL
        Then I see the alert message

        # pre-condition: second teacher logged into the application, and a room exists
        Given I am logged in as a '<teacherExt_1>' at '<namespace>'
        Given a room named '<room_name_target>' exists

        # second teacher from the second school can access the shared URL and import the multi-column board
        When I open the shared URL for board
        Then I see the Dialog to import
        Then I see the title in the share modal
        When I select the room from the room list in the modal
        When I click on the Continue button in the modal
        When I enter a new name for the imported board '<import_board_title>' in the modal
        When I click on the button Confirm in the share modal
        When I click on the button Open on multi-column board in the room detail page
        Then I see the page board details
        Then I see the chip Draft

        # first teacher from the first school does not allow sharing the multi-column board with another teacher from a different school
        Given I am logged in as a '<teacher1>' at '<namespace>'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name_source>' at position '0'
        Then I see the detail page of room '<room_name_source>'
        When I click on the button Open on multi-column board in the room detail page
        Then I see the page board details
        When I click on the three dot menu in room board title
        When I select the three dot menu action 'share'
        Then I see the Share settings dialog
        Then I see modal 'share' with information on '<copyright_data_protection>, <content_etherpad>, <content_whiteboard>, <external_tools_info>, <external_tools_protected_parameter_info>'
        Then I see the checkbox Link valid for the same school is by default checked
        When I click on the button Continue
        Then I see the Share via modal
        Then I see the option Copy link
        Then I copy the board URL

        # second teacher from the second school can not access the shared board URL and sees the 'Not Allowed' alert
        Given I am logged in as a '<teacherExt_1>' at '<namespace>'
        When I open the shared URL for board
        Then I see an alert that importing the board is not allowed

        # post-condition: rooms created by both teachers are deleted
        Given I am logged in as a '<teacher1>' at '<namespace>'
        Given the room '<room_name_source>' at position '0' is deleted
        Given I am logged in as a '<teacherExt_1>' at '<namespace>'
        Given the room '<room_name_target>' at position '0' is deleted

        @school_api_test
        Examples:
            | teacher1     | teacherExt_1    | namespace | room_name_source    | room_name_target    | board_title    | import_board_title    | copyright_data_protection | content_etherpad | content_whiteboard | external_tools_info | external_tools_protected_parameter_info |
            | teacher1_brb | teacherExt1_brb | brb       | Cypress Room Name-1 | Cypress Room Name-2 | Board Cy Title | Board Cy Import Title | Copyright data protection | Content etherpad | Content whiteboard | External tools info | External tools protected parameter info |

