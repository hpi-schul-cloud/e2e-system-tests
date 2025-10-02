@regression_test
@stable_test
@group-E
@prio_0_staging
Feature: Rooms - Student can access room content after being added to room via Add Members Dialog

    As a room owner, when I add a student through the Add Members Dialog, the user should see the room in the room overview and access its content.

    Scenario Outline: Room Owner adds a student to the room, the student can access the room and its content

        # pre-condition: users (admin, teacher and student) logged in
        Given I am logged in as a '<student_1>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given I am logged in as a '<admin_1>' at '<namespace>'

        # pre-condition: admin activates student visibility
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        When I click the toggle switch to enable student visibility for teachers
        When I click on button Save admin settings

        # pre-condition: teacher creates a new room with multi and draft single column board in it
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given multi column board is published to not to be in a draft mode
        Given the multi-column board has a column with a card
        Given link element is added in the card
        Given I navigate to the room detail page via Breadcrumb
        Given a single-column board named '<board_title>' exists in the room
        Given I navigate to the room detail page via Breadcrumb

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
        When I go to rooms overview
        Then I see '<room_name>' on room overview page

        # student is able to access the room content according to visibility
        When I go to room '<room_name>'
        Then I see multi-column board tile in the rooms details page
        Then I do not see single-column board tile in the room details page
        When I click on the multi-column board in the room detail page
        Then I see the element Link on the card

        # teacher is able to delete participants
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to rooms overview
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
            | teacher_1    | student_1    | admin_1    | namespace | room_name            | school_name           | role_name | participant_name | board_title            |
            | teacher1_dbc | student1_dbc | admin1_dbc | dbc       | CypressAut Room Name | cypress-test-school-1 | Lernend   | student_1        | CypressAut Board Title |

        @staging_test
        Examples:
            | teacher_1    | student_1    | admin_1    | namespace | room_name            | school_name                 | role_name | participant_name | board_title            |
            | teacher1_dbc | student1_dbc | admin1_dbc | dbc       | CypressAut Room Name | Felix Mendelssohn-Gymnasium | Lernend   | Herbert          | CypressAut Board Title |
