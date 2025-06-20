@regression_test
@stable_test
Feature: Room - Invite Student to room via Add Members Dialog

    As a room owner, when I invite a student through the Add Members Dialog, the user should see the room in the room overview.

    Scenario Outline: Room Owner invites a student to the room, the student can access the room, including pre-conditions
        Given I am logged in as a '<student_1>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given I am logged in as a '<admin_1>' at '<namespace>'

        # pre-condition: admin activates student visibility
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        When I click the toggle switch to enable student visibility for teachers
        When I click on button Save admin settings

        # pre-condition: teacher creating a new room, becoming the owner
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given a room named '<room_name>' exists

        # the owner can invite a student to the room
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
        Given I am logged in as a '<student_1>' at '<namespace>'
        When I go to room overview
        Then I see '<room_name>' on room overview page

        # teacher is able to delete participants
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to room overview
        When I go to room '<room_name>'
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'
        Then I see '<participant_name>' in the room participants list
        When I click on 'remove-member' button in the participant list for participant '<participant_name>'
        When I click on delete button in confirmation modal
        Then I see the participant '<participant_name>' is removed from the room participants list

        # student does not see the room
        Given I am logged in as a '<student_1>' at '<namespace>'
        When I go to room overview
        Then I do not see '<room_name>' on room overview page

        # post-condition: teacher deletes the room
        Given I am logged in as a '<teacher_1>' at '<namespace>'
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
            | teacher_1    | student_1    | admin_1    | namespace | room_name         | school_name           | role_name | participant_name |
            | teacher1_brb | student1_brb | admin1_brb | brb       | Cypress Room Name | cypress-test-school-1 | Lernend   | student_1        |

        @staging_test
        Examples:
            | teacher_1    | student_1    | admin_1    | namespace | room_name         | school_name                 | role_name | participant_name |
            | teacher1_brb | student1_brb | admin1_brb | brb       | Cypress Room Name | Felix Mendelssohn-Gymnasium | Lernend   | herbert          |
