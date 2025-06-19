@regression_test
@stable_test
@only
Feature: Room - Student can access room content after being invited

As a student being invited to a room, I should be able to access the content of the room.

Scenario Outline: Student can access room content after being invited, including pre-conditions
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: admin activates student visibility
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        When I click the toggle switch to enable student visibility for teachers
        When I click on button Save admin settings

        # pre-condition: teacher creates a new room with multi and draft single column board in it
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given multi column board is published to not to be in a draft mode
        Given the multi-column board has a column with a card
        Given link element is added in the card
        Given I navigate to the room detail page via Breadcrumb from the board page
        Given a single-column board named '<board_title>' exists in the room
        Given I navigate to the room detail page via Breadcrumb from the board page

        # pre-condition: the owner invites a student to the room
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'
        When I click on FAB to add participants
        Then I see modal Add participants
        Then I see school '<school_name>' in dropdown School
        When I select '<role_name>' in dropdown Role
        Then I see role '<role_name>' in dropdown Role
        When I enter '<participant_name>' in dropdown Name
        When I select the first name from the dropdown
        When I click on the button Add participant
        Then I see '<participant_name>' in the room participants list

        # newly added student can see the room
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to room overview
        Then I see '<room_name>' on room overview page

        # student is able to access the room content according to visiblity
        When I go to room '<room_name>'
        Then I see multi-column board tile in the rooms details page
        Then I do not see single-column board tile in the room details page
        When I click on the multi-column board in the room detail page
        Then I see the element Link on the card

        # post-condition: teacher deletes the room
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to room overview
        When I go to room '<room_name>'
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'delete'
        Then I see confirmation modal for deleting the room
        When I click on delete button in confirmation modal
        Then I do not see '<room_name>' on room overview page


        @school_api_test
        Examples:
            | teacher      | student      | admin      | namespace | room_name         | school_name             | role_name      | participant_name | board_title    |
            | teacher1_brb | student1_brb | admin1_brb | brb       | Cypress Room Name | cypress-automated-tests | Lernend        | student_1        | Board Cy Title |

        @staging_test
        Examples:
            | teacher      | student      | admin      | namespace | room_name         | school_name                 | role_name      | participant_name | board_title    |
            | teacher1_brb | student1_brb | admin1_brb | brb       | Cypress Room Name | Felix Mendelssohn-Gymnasium | Lernend        | herbert          | Board Cy Title |
