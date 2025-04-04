@regression_test
@stable_test
Feature: Room - Change room permission

    As a teacher, I want to change room permission (roomViewer to roomEditor) of other participant in the room, other user can access the room and leave the room.

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
        Then I see Change Role Permission button is visible
        When I click on button 'Change-Permission' in the sub-menu
        Then I see Change Role Permission dialog box is visible
        When I change second user role to 'editor'
        Then I see Role changed to 'editor' for second user
        Then I click on button 'Confirm' in the action menu

        # second user logged in, access the room and left the room
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I go to room overview
        Then I see '<room_name>' on room overview page
        When I go to room '<room_name>'
        Then I see the detail page of room '<room_name>'
        Then I see button Fab Create Room Board
        When I click on three dot menu in room page
        Then I don't see 'edit, delete' options in the menu
        When I select the three dot menu action 'room-members'
        Then I see the edit participants page of room '<room_name>'
        Then I don't see button Fab Add Member
        Then I don't see info text
        Then I don't see first checkbox column in the table
        Then I don't see last actions column in the table
        When I go to room overview
        Then I see '<room_name>' on room overview page
        When I go to room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'leave-room'
        Then I see dialog box to leave the room
        Then I click on button 'Confirm' to leave the room

        # first teacher logged in and assert second user is not in the table
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to room overview
        Then I see '<room_name>' on room overview page
        When I go to room '<room_name>'
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the edit participants page of room '<room_name>'
        Then I see teacher '<participant_name>' not visible in the table


        # post-condition: first teacher deletes the room
        When I go to room overview
        When I go to room '<room_name>'
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'delete'
        Then I see confirmation modal for deleting the room
        When I click on delete button in confirmation modal
        Then I do not see '<room_name>' on room overview page

        @only
        @school_api_test
        Examples:
            | teacher_1    | teacher_2    | namespace | room_name         | school_name             | role_name | participant_name |
            | teacher1_brb | teacher2_brb | brb       | Cypress Room Name | cypress-automated-tests | Lehrkraft | teacher_2        |

        @staging_test
        Examples:
            | teacher_1    | teacher_2    | namespace | room_name         | school_name                 | role_name | participant_name |
            | teacher1_brb | teacher2_brb | brb       | Cypress Room Name | Felix Mendelssohn-Gymnasium | Lehrkraft | Hande            |