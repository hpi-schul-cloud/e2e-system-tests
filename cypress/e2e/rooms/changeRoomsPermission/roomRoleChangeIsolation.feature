@regression_test
@mikroorm_v7
Feature: Rooms - Role change only affects the selected room

    As a teacher, I want a changed room role to be stored only for the selected room, so that the participant keeps their previous permissions in all other rooms

    Scenario Outline: Teacher changes the role of a viewer in one of two rooms

        # pre-condition: teachers logged in
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'

        # pre-condition: first teacher creates two rooms and adds the second teacher as viewer to both
        Given a room named '<room_name_a>' exists
        When I remember the current room as 'room_a'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name_a>'
        When I click on FAB to add participants
        When I click on button 'select-from-directory' from speed dial option
        Then I see modal Add participants
        Then I see school '<school_name>' in dropdown School
        When I select '<role_name>' in dropdown Role
        When I enter '<participant_name>' in dropdown Name
        When I select the first name from the dropdown
        When I click on the button Add participant
        Then I see '<participant_name>' in the room participants list

        Given a room named '<room_name_b>' exists
        When I remember the current room as 'room_b'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name_b>'
        When I click on FAB to add participants
        When I click on button 'select-from-directory' from speed dial option
        Then I see modal Add participants
        Then I see school '<school_name>' in dropdown School
        When I select '<role_name>' in dropdown Role
        When I enter '<participant_name>' in dropdown Name
        When I select the first name from the dropdown
        When I click on the button Add participant
        Then I see '<participant_name>' in the room participants list

        # second teacher is viewer in both rooms: no board creation in the UI and via API
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I open the remembered room 'room_a'
        Then I see the detail page of room '<room_name_a>'
        Then I do not see button Fab Create Room Board
        Then creating a board in the remembered room 'room_a' via API returns status 403
        When I open the remembered room 'room_b'
        Then I see the detail page of room '<room_name_b>'
        Then I do not see button Fab Create Room Board
        Then creating a board in the remembered room 'room_b' via API returns status 403

        # first teacher changes the role of the second teacher in room A only
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I open the remembered room 'room_a'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name_a>'
        When I click on button Three Dot Menu to edit participant '<participant_name>'
        When I click on button 'Change-Permission' in the sub-menu
        Then I see dialog box Change Role Permission is visible
        When I change second user role to 'editor'
        When I confirm the role change and wait for the update

        # role in room B is still viewer after reload
        When I open the remembered room 'room_b'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name_b>'
        When I reload the current page
        Then I see '<participant_name>' in the room participants list
        When I click on button Three Dot Menu to edit participant '<participant_name>'
        When I click on button 'Change-Permission' in the sub-menu
        Then I see dialog box Change Role Permission is visible
        Then I see Role changed to 'viewer' for second user
        When I click on button 'Cancel' in the 'Role' action menu

        # second teacher can create boards in room A only
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I open the remembered room 'room_a'
        Then I see the detail page of room '<room_name_a>'
        Then I see button Fab Create Room Board
        Then creating a board in the remembered room 'room_a' via API returns status 201
        When I open the remembered room 'room_b'
        Then I see the detail page of room '<room_name_b>'
        Then I do not see button Fab Create Room Board
        Then creating a board in the remembered room 'room_b' via API returns status 403

        # post-condition: first teacher deletes both rooms
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I delete the remembered room 'room_a' via API
        When I delete the remembered room 'room_b' via API

        @school_api_test
        Examples:
            | teacher_1    | teacher_2    | namespace | room_name_a                 | room_name_b                 | school_name           | role_name      | participant_name |
            | teacher1_brb | teacher2_brb | brb       | CypressAut Role Room Edited | CypressAut Role Room Stable | cypress-test-school-1 | Lernbegleitend | teacher_2        |
