@regression_test
@stable_test
# note: this feature is only for the staging environment

Feature: Rooms - Share Multi-Column Boards in the Rooms

    As a teacher, I want to share multi-column boards with teachers within the same school and from different schools so that they can collaborate effectively.

    Scenario: Share a Multi-Column Board with a Teacher within the Same School

        # pre-condition: Creating teacher accounts
        Given I am logged in as a '<teacher1>' at '<namespace>'
        Given I am logged in as a '<teacherExt1>' at '<namespace>'

        # pre-condition: Room and multi-column board exist
        Given a room named '<room_name_source>' exists
        Given a multi-column board named '<board_title>' exists in the room

        # for Invalid Shared URL
        # first teacher shares the multi-column board with another teacher in the same school via copied URL
        Then I see the board details page
        When I click on the three-dot menu in the room board
        When I select the three-dot menu action 'share'
        Then I see the Share settings dialog
        Then I check the checkbox Link valid for the same school is checked
        Then I uncheck the the box Link valid for the same school
        Then I check the checkbox Link valid for 21 days is checked
        When I click on the button Continue
        Then I see the Share via modal
        Then I see the option Share via Email
        Then I see the option Copy link
        Then I see the option Scan QR Code
        Then I copy the board URL
        Then I click on the Close button in the modal

        # pre-condition: Second teacher is logged into the application and a room exists
        Given I am logged in as a '<teacherExt1>' at '<namespace>'
        Given a room named '<room_name_target>' exists

        # second teacher within the same school imports the multi-column board and sees NOT ALLOWED alert
        When I open the shared URL
        Then I see the altert import not allowed

        # first teacher allowed the checkbox to be shared with different school
        Given I am logged in as a '<teacher1>' at '<namespace>'


        # second teacher within the same school imports the multi-column board succesfully
        When I open the shared URL
        Then I see the modal to import the shared board into the room
        When I select the room from the room list in the modal
        When I click on the Continue button in the modal
        When I enter a new name for the imported board in the modal
        When I click on the button Import in the modal
        Then I see the shared board tile as a draft on the room details page

        # second teacher within the same school imports the multi-column board and sees NOT ALLOWED alert

        # post-condition: Rooms created by both teachers are deleted
        Given I am logged in as a '<teacher1>' at '<namespace>'
        Given the room named '<room_name_source>' is deleted
        Given I am logged in as a '<teacher2>' at '<namespace>'
        Given the room named '<room_name_target>' is deleted


        @staging_test
        Examples:
            | teacher1     | teacherExt1     | namespace | room_name         | board_title    |
            | teacher1_brb | teacherExt1_brb | brb       | Cypress Room Name | Board Cy Title |

