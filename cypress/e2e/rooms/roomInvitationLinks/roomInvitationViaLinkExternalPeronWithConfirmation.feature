@regression_test
@stable_test
@schedule_run
@group-C
@prio_0_staging
Feature: Rooms - Invite User to room via Invitation link for External Person with Confirmation

    As a room owner, when I invite an expert user through an invitation link, I want to confirm his application before he can join the room.

    Scenario Outline: Room Owner creates an invitation link with confirmation, another expert uses it, the first user confirms

        # pre-condition: teachers logged in
        Given I am logged in as a '<expert_2>' at '<namespace>'
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
        When I uncheck the Checkbox to restrict for creator school
        When I check the Checkbox to valid for external persons
        When I save the invitation link
        Then I see the Link URL in the Modal
        When I remember the invitation link URL in the Modal
        When I close the invitation modal
        Then I see '<invitation_description>' in the list of invitation links

        # second user uses the invitation link to join the room
        Given I am logged in as a '<expert_2>' at '<namespace>'
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
        Then I see teacher '<expert_2_name>' not visible in the table

        When I click on tab Confirmations
        Then I see user '<expert_2_name>' in the confirmations table
        When I click on button Three Dot Menu in Confirmations table for user '<expert_2_name>'
        When I click on confirm button in the three dot menu
        Then I do not see user '<expert_2_name>' in the confirmations table
        When I click on tab Members
        Then I see '<expert_2_name>' in the room participants list

        # second user can now access the room
        Given I am logged in as a '<expert_2>' at '<namespace>'
        When I go to rooms overview
        Then I see '<room_name>' on room overview page
        When I click on button Open to go to room '<room_name>' at position '0'
        Then I see the detail page of room '<room_name>'

        # post-condition: first teacher deletes the room
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given the room '<room_name>' at position '0' is deleted

        @school_api_test
        @staging_test
        Examples:
            | teacher_1    | expert_2    | expert_2_name | namespace | room_name         | invitation_description |
            | teacher1_dbc | expert2_dbc | expert_2      | dbc       | CypressAut Expert | test invitation link   |
