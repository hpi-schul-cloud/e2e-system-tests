@regression_test
@stable_test
@schedule_run
@group-C
@prio_0_dev
Feature: Rooms - Room invitations via link without confirmation for external persons

    As a room owner, I want to invite a user to the room through an invitation link, so that I don't have to add every user manually.

    Scenario Outline: Room Owner creates no-confirmation link; external person joins, rights are limited, leaves; owner verifies removal

        # pre-condition: users (teacher & external person) logged in
        Given I am logged in as a '<external_person_1>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'

        # pre-condition: teacher creating a new room
        Given a room named '<room_name>' exists

        # teacher create a no-confirmation link
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

        # external person uses the no-confirmation invitation link to join the room
        Given I am logged in as a '<external_person_1>' at '<namespace>'
        When I use the remembered invitation link URL
        Then I see the detail page of room '<room_name>'

        # external person should only allow to leave the room
        When I click on three dot menu in room page
        Then I don't see 'edit, copy, share, delete' options in the menu
        Then I don't see 'room-copy, room-members' options in the menu
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'leave-room'
        Then I see dialog box to leave the room
        Then I click on button 'Confirm' to leave the room

        # teacher logged in and verifies external person is not shown in the table
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to rooms overview
        Then I see '<room_name>' on room overview page
        When I click on button Open to go to room '<room_name>' at position '0'
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'
        Then I see teacher '<external_person_last_name>' not visible in the table

        # post-condition: teacher deletes the room
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given the room '<room_name>' at position '0' is deleted

        @school_api_test
        Examples:
            | teacher_1    | external_person_1   | namespace | room_name                     | invitation_description | external_person_last_name |
            | teacher1_dbc | externalPerson1_dbc | dbc       | CypressAut EP Invite AutoJoin | test invitation link   | external_person_1         |

