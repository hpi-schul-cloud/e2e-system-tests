@regression_test
@stable_test
@schedule_run
@group-M
Feature: Room - Change room permission (Viewer - Admin)

    As a teacher, I want to change a participant’s room permission from viewer to admin, so that other users can access the room and leave it as needed

    Scenario Outline: Teacher change room permission of other participants, including pre-conditions
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'

        # pre-condition: first teacher creating a new room
        Given a room named '<room_name>' exists

        # first teacher is able to add participants
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

        # first teacher changes role for other user
        When I click on button Three Dot Menu to add participant '<participant_name>'
        Then I see button Change role permission is visible
        When I click on button 'Change-Permission' in the sub-menu
        Then I see dialog box Change Role Permission is visible
        When I change second user role to 'admin'
        Then I see Role changed to 'admin' for second user
        Then I click on button 'Confirm' in the 'Role' action menu

        # second user logs in, accesses the room, verifies that restricted functionalities are not visible to them, and then leaves the room
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I go to room overview
        Then I see '<room_name>' on room overview page
        When I go to room '<room_name>'
        Then I see the detail page of room '<room_name>'
        Then I see button Fab Create Room Board
        When I click on three dot menu in room page
        Then I don't see 'delete' options in the menu
        When I select the three dot menu action 'edit'
        When I enter the room name '<room_name_edited>'
        When I click on the button Save room
        Then I see the detail page of room '<room_name_edited>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name_edited>'
        Then I see button Fab Add Member
        Then I see the banner explaining member addition, including other schools
        Then I see first checkbox column in the table
        Then I see last actions column in the table
        When I go to room overview
        Then I see '<room_name_edited>' on room overview page
        When I go to room '<room_name_edited>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'leave-room'
        Then I see dialog box to leave the room
        Then I click on button 'Confirm' to leave the room

        # first teacher logged in and assert second user is not in the table
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to room overview
        Then I see '<room_name_edited>' on room overview page
        When I go to room '<room_name_edited>'
        Then I see the detail page of room '<room_name_edited>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name_edited>'
        Then I see teacher '<participant_name>' not visible in the table

        # post-condition: first teacher deletes the room
        Given the room named '<room_name_edited>' is deleted

        @school_api_test
        Examples:
            | teacher_1    | teacher_2    | namespace | room_name         | room_name_edited         | school_name             | role_name      | participant_name |
            | teacher1_brb | teacher2_brb | brb       | Cypress Room Name | Cypress Edited Room Name | cypress-automated-tests | Lernbegleitend | teacher_2        |

        @staging_test
        Examples:
            | teacher_1    | teacher_2    | namespace | room_name         | room_name_edited         | school_name                 | role_name      | participant_name |
            | teacher1_brb | teacher2_brb | brb       | Cypress Room Name | Cypress Edited Room Name | Felix Mendelssohn-Gymnasium | Lernbegleitend | Hande            |
