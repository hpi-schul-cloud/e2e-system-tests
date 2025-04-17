@regression_test
@stable_test
Feature: Room - Change room permission (Viewer - Owner)

    As a teacher, I want to change a participant’s room permission from viewer to owner, so that other users can access the room and leave it as needed

    Scenario: Teacher change room permission of other participants, including pre-conditions
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'

        # pre-condition: first teacher creating a new room
        When I go to room overview
        When I click on FAB to create new room
        Then I see room creation page
        When I enter the room name '<room_name>'
        When I click on the button to save the room
        Then I see the detail page of room '<room_name>'

        # first teacher is able to add participants
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the edit participants page of room '<room_name>'
        When I click on FAB to add participants
        Then I see add participants modal
        Then I see school '<school_name>' in school dropdown
        Then I see role '<role_name>' in role dropdown
        When I enter '<participant_name>' in name dropdown
        When I select the first name from the dropdown
        When I click on the button to add the participant
        Then I see '<participant_name>' in the room participants list

        # first teacher changes role for other user
        When I click on button Three Dot Menu to add participant '<participant_name>'
        Then I see button Change Role Permission is visible
        When I click on button 'Change-Permission' in the sub-menu
        Then I see dialog box Change Role Permission is visible
        When I change second user role to 'owner'
        Then I see Role changed to 'owner' for second user
        Then I click on button 'Confirm' in the 'Role' action menu
        Then I click on button 'Confirm' in the 'Owner' action menu

        # second user logs in, accesses the room, verifies that restricted functionalities are not visible to them, and then leaves the room
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I go to room overview
        Then I see '<room_name>' on room overview page
        When I go to room '<room_name>'
        Then I see the detail page of room '<room_name>'
        Then I see button Fab Create Room Board
        When I click on three dot menu in room page
        When I select the three dot menu action 'edit'
        When I enter the room name '<room_name_edited>'
        When I click on the button to save the room
        Then I see the detail page of room '<room_name_edited>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the edit participants page of room '<room_name_edited>'
        Then I see button Fab Add Member
        Then I see info text
        Then I see first checkbox column in the table
        Then I see last actions column in the table
        When I go to room overview
        Then I see '<room_name_edited>' on room overview page
        When I go to room '<room_name_edited>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'leave-room'
        Then I see dialog box to leave the room
        Then I see info text for admin before leaving the room

        # first teacher logged in and assert second user is in the table
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to room overview
        Then I see '<room_name_edited>' on room overview page
        When I go to room '<room_name_edited>'
        Then I see the detail page of room '<room_name_edited>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the edit participants page of room '<room_name_edited>'
        Then I see teacher '<participant_name>' is visible in the table

        # post-condition: second teacher deletes the room
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I go to room overview
        When I go to room '<room_name_edited>'
        Then I see the detail page of room '<room_name_edited>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'delete'
        Then I see confirmation modal for deleting the room
        When I click on delete button in confirmation modal
        Then I do not see '<room_name_edited>' on room overview page

        @school_api_test
        Examples:
            | teacher_1    | teacher_2    | namespace | room_name         | room_name_edited         | school_name             | role_name | participant_name |
            | teacher1_brb | teacher2_brb | brb       | Cypress Room Name | Cypress Edited Room Name | cypress-automated-tests | Lehrkraft | teacher_2        |

        @staging_test
        Examples:
            | teacher_1    | teacher_2    | namespace | room_name         | room_name_edited         | school_name                 | role_name | participant_name |
            | teacher1_brb | teacher2_brb | brb       | Cypress Room Name | Cypress Edited Room Name | Felix Mendelssohn-Gymnasium | Lehrkraft | Hande            |