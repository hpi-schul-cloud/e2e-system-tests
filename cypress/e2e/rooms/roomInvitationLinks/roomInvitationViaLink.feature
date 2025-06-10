@regression_test
@stable_test
Feature: Room - Invite User to room via Invitationlink

As a room owner, I want to invite a user to the room through an invitation link, so that I dont have to add every user manually.

Scenario Outline: Room Owner creates an invitation link, another teacher uses it, including pre-conditions
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
        When I click on the fab button to create an invitationlink
        Then I see the modal Create Invitation Link
        When I enter '<invitation_description>' into the Invitation Link Description field
        When I uncheck the Checkbox to require confirmation
        When I save the invitation link
        Then I see the Link URL in the Modal
        When I remember the invitation link URL in the Modal
        When I close the invitation modal
        Then I see '<invitation_description>' in the list of invitation links

        # second user uses the invitation link to join the room
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I use the remembered invitation link URL
        Then I see the detail page of room '<room_name>'


        @school_api_test
        Examples:
            | teacher_1    | teacher_2    | namespace | room_name         | invitation_description |
            | teacher1_brb | teacher2_brb | brb       | Cypress Room Name | testinvitationlink   |

        @staging_test
        Examples:
            | teacher_1    | teacher_2    | namespace | room_name         | invitation_description |
            | teacher1_brb | teacher2_brb | brb       | Cypress Room Name | testinvitationlink   |
