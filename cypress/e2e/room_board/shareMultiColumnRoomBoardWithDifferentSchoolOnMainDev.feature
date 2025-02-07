@unstable_test

# Note: This feature is currently not executable using school api, as two new schools can not be created in a same scenarion in the feature file, and creating in a two different scenrios creates two different session that does not allow to use the copy board url from the first scenrio to the second scenrio

Feature: Rooms - Share multi-column boards in the rooms with the teacher from different school

    As a teacher, I want to share multi-column boards with teachers from different schools so that I can collaborate effectively.

    Scenario: Share a multi-column board with a teacher from different School

        # school api would create a second teacher also in the same school in this step
        Given I am logged in as a '<teacherExt1>' at '<namespace>'
        # pre-condition: Creating teacher accounts
        Given I am logged in as a '<teacher1>' at '<namespace>'

        # pre-condition: Room and multi-column board exist
        Given a room named '<room_name_source>' exists
        Given a multi-column board named '<board_title>' exists in the room

        # first teacher shares the multi-column board with another teacher from different school
        Then I see the page board details
        When I click on the three dot menu in room board
        When I select the three dot menu action 'share'
        Then I see the Share settings dialog
        Then I see the title in the share modal
        Then I see the information box in share modal
        Then I see the button Cancel in the share modal
        Then I see the checkbox Link valid for the same school is by default checked
        Then I click to uncheck Link valid for the same school
        Then I see the checkbox Link valid for 21 days is checked
        When I click on the button Continue
        Then I see the Share via modal
        Then I see the result url text box in the modal
        Then I see the option Share via Email
        Then I see the option Copy link
        Then I see the option Scan QR Code
        Then I copy the board URL
        #Then I see the alrert success message  -> there is always time delay to handle this step

        # pre-condition: Second teacher is logged into the application and a room exists
        Given I am logged in as a '<teacherExt1>' at '<namespace>'
        Given a room named '<room_name_target>' exists

        # second teacher from different school imports the shared multi-column board
        When I open the shared URL
        Then I see the modal to import the shared board into the room
        Then I see the title in the share modal
        When I select the target room from the room list in the modal
        When I click on the Continue button in the modal
        When I enter a new name for the imported board '<import_board_title>' in the modal
        When I click on the button Import in the modal
        When I click on the multi-column board in the room detail page
        Then I see the page board details
        Then I see the chip Draft


        # first teacher shared the board only within the same school and secomd teacher from different school should see the not allowed alert
        Given I am logged in as a '<teacher1>' at '<namespace>'
        When I go to room overview
        When I go to room '<room_name_source>'
        Then I see the detail page of room '<room_name_source>'
        When I click on the multi-column board in the room detail page
        Then I see the page board details
        When I click on the three dot menu in room board
        When I select the three dot menu action 'share'
        Then I see the Share settings dialog
        Then I see the checkbox Link valid for the same school is by default checked
        When I click on the button Continue
        Then I see the Share via modal
        Then I see the option Copy link
        Then I copy the board URL

        # second teacher from different school can not import the shared board sees the alert not allowed
        Given I am logged in as a '<teacherExt1>' at '<namespace>'
        When I open the shared URL
        Then I see the altert to import board is not allowed

        # post-condition: Rooms created by both teachers are deleted
        Given I am logged in as a '<teacher1>' at '<namespace>'
        Given the room named '<room_name_source>' is deleted
        Given I am logged in as a '<teacherExt1>' at '<namespace>'
        Given the room named '<room_name_target>' is deleted

        @school_api_test
        Examples:
            | teacher1     | teacherExt1     | namespace | room_name_source    | room_name_target    | board_title    | import_board_title    |
            | teacher1_brb | teacherExt1_brb | brb       | Cypress Room Name-1 | Cypress Room Name-2 | Board Cy Title | Board Cy Import Title |

