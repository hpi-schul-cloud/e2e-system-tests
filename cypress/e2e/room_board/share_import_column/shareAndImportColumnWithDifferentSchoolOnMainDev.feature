@unstable_test

# Note: This feature cannot be currently executed using the school API, as creating two different
# schools within the same scenario is not possible. And creating them in two different scenarios
# results in separate sessions, which prevents the copied column URL from the first scenario
# from being used in the second scenario.

Feature: Room Board - Share and import a column in rooms with a teacher from a different school

    As a teacher,
    I want to share a column from a board with another teacher from a different school
    so that the other teacher can import and use this column in their own room's board.

    Scenario Outline: Share and import a column with a Teacher from a different school

        # pre-condition: creating teacher accounts
        Given I am logged in as a '<teacherExt_1>' at '<namespace>'
        Given I am logged in as a '<teacher1>' at '<namespace>'

        # pre-condition: source room and board with a column exist
        Given a room named '<room_name_source>' exists
        Given a multi-column board named '<board_title_source>' exists in the room
        Given the multi-column board has a column titled '<column_title>' with a card

        # first teacher shares the column via the column header menu and copies the URL
        Then I see the page board details
        When I click on the three dot menu in the column header at position '0'
        When I select the three dot menu action 'share' on the column
        Then I see the Share settings dialog
        Then I see the title in the share modal
        Then I see the information box in share modal
        Then I see the button Cancel in the share modal
        Then I see the checkbox Link valid for the same school is by default checked
        Then I see the checkbox Link valid for 21 days is by default checked
        Then I click to uncheck Link valid for the same school
        When I click on the button Continue
        Then I see the Share via modal
        Then I see the result url text box in the modal
        Then I see the option Share via Email
        Then I see the option Copy link
        Then I see the option Scan QR Code
        Then I copy the column URL
        Then I see the success alert message

        # pre-condition: second teacher from a different school is logged in; target room and board exist
        Given I am logged in as a '<teacherExt_1>' at '<namespace>'
        Given a room named '<room_name_target>' exists
        Given a multi-column board named '<board_title_target>' exists in the room

        # second teacher from a different school imports the shared column into a board
        When I open the shared URL for column
        Then I see the import column dialog
        When I select the room '<room_name_target>' from the room list in the column import modal
        When I select the board '<board_title_target>' from the board list in the column import modal
        When I click on the button Import in the import column modal
        Then I see the page board details
        Then I see a column with title '<column_title>' at position '0'

        # post-condition: rooms created by both teachers are deleted
        Given I am logged in as a '<teacherExt_1>' at '<namespace>'
        Given the room named '<room_name_target>' is deleted
        Given I am logged in as a '<teacher1>' at '<namespace>'
        Given the room named '<room_name_source>' is deleted

        @school_api_test
        Examples:
            | teacher1     | teacherExt_1    | namespace | room_name_source       | room_name_target       | board_title_source    | board_title_target    | column_title            |
            | teacher1_brb | teacherExt1_brb | brb       | CypressAut Room Name-1 | CypressAut Room Name-2 | CypressAut Column Src | CypressAut Column Tgt | CypressAut Column Title |
