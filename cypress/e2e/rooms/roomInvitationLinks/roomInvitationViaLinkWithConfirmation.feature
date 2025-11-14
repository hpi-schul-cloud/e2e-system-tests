@regression_test
@stable_test
@schedule_run
@group-C
@prio_0_dev
Feature: Rooms - Invite User to room via Invitation link

    As a room owner, when I invite a user through an invitation link, I want to confirm his application before he can join the room.

    Scenario Outline: Room Owner creates an invitation link with confirmation, another teacher uses it, the first user confirms

        # pre-condition: teachers logged in
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'

        # pre-condition: first user creating a new room, becoming the owner
        Given a room named '<room_name>' exists

        # the owner can create an invitation link
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'

        When I click on tab Invitations
        When I click on the fab button to create an invitation link
        Then I see the modal Create Invitation Link
        When I enter '<invitation_description>' into the Invitation Link Description field
        When I check the Checkbox to require confirmation
        When I save the invitation link
        Then I see the Link URL in the Modal
        When I remember the invitation link URL in the Modal
        When I close the invitation modal
        Then I see '<invitation_description>' in the list of invitation links

        # second user uses the invitation link to join the room
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I use the remembered invitation link URL
        Then I see a link invitation status message

        # first user confirms the invitation
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to rooms overview
        Then I see '<room_name>' on room overview page
        When I click on button Open to go to room '<room_name>' at position '0'
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'
        Then I see teacher '<teacher_2_name>' not visible in the table

        When I click on tab Confirmations
        Then I see user '<teacher_2_name>' in the confirmations table
        When I click on button Three Dot Menu in Confirmations table for user '<teacher_2_name>'
        When I click on confirm button in the three dot menu
        Then I do not see user '<teacher_2_name>' in the confirmations table
        When I click on tab Members
        Then I see '<teacher_2_name>' in the room participants list

        # second user can now access the room
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I go to rooms overview
        Then I see '<room_name>' on room overview page
        When I click on button Open to go to room '<room_name>' at position '0'
        Then I see the detail page of room '<room_name>'

        # post-condition: first teacher deletes the room
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given the room named '<room_name>' at position '0' is deleted

        @school_api_test
        Examples:
            | teacher_1    | teacher_2    | teacher_2_name | namespace | room_name            | invitation_description |
            | teacher1_brb | teacher2_brb | teacher_2      | brb       | CypressAut Room Name | test invitation link   |
