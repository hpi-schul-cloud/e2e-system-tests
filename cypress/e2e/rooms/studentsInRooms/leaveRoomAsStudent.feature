@regression_test
@stable_test
@group-U

Feature: Room - Leave room as a Student

    As a student, I should be able to leave a room that I have been invited to, and after leaving, I should not see the room in my room overview.

    Scenario Outline: Student leaves a room after being invited by a teacher, including pre-conditions
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
        Given I am logged in as a '<student_1>' at '<namespace>'
        When I go to rooms overview
        Then I see '<room_name>' on room overview page

        # student can leave the room
        When I go to room '<room_name>'
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'leave-room'
        Then I see dialog box to leave the room
        Then I click on button 'Confirm' to leave the room

        # student does not see the room
        When I go to rooms overview
        Then I do not see '<room_name>' on room overview page

        # post-condition: teacher deletes the room
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to rooms overview
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
            | teacher1_dbc | student1_dbc | admin1_dbc | dbc       | Cypress Room Name | cypress-test-school-1 | Lernend   | student_1        |

        @staging_test
        Examples:
            | teacher_1    | student_1    | admin_1    | namespace | room_name         | school_name                 | role_name | participant_name |
            | teacher1_dbc | student1_dbc | admin1_dbc | dbc       | Cypress Room Name | Felix Mendelssohn-Gymnasium | Lernend   | Herbert          |
