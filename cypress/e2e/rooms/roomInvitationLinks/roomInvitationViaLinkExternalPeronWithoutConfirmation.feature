@regression_test
@stable_test
@schedule_run
@group-C
@prio_0_dev
Feature: Rooms - Invite User to room via Invitation link

    As a room owner, I want to invite a user to the room through an invitation link, so that I don't have to add every user manually.

    Scenario Outline: Room Owner creates an invitation link, another teacher uses it

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
        When I uncheck the Checkbox to require confirmation
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
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        Then I don't see 'edit, copy, share, delete' options in the menu
        Then I don't see 'room-copy, room-members' options in the menu
        When I select the three dot menu action 'leave-room'

        # post-condition: first teacher deletes the room
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | teacher_1    | expert_2    | namespace | room_name         | invitation_description |
            | teacher1_dbc | expert2_dbc | dbc       | CypressAut Expert | test invitation link   |

