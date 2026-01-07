@regression_test
@stable_test
@schedule_run
@group-C
@prio_0_dev
Feature: Rooms - Room invitations via link with confirmation for external persons

    As a room owner, I create an invitation link that requires confirmation; external persons request access via the link and must be approved before joining.

    Scenario Outline: Room Owner creates confirmation required link, external person applies, owner approves, access is granted

        # pre-condition: users (teacher & external person) logged in
        Given I am logged in as a '<external_person_1>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'

        # pre-condition: teacher creates a new room
        Given a room named '<room_name>' exists

        # teacher creates an confirmation required invitation link
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

        # external person uses the invitation link to join the room
        Given I am logged in as a '<external_person_1>' at '<namespace>'
        When I use the remembered invitation link URL
        Then I see a link invitation status message

        # teacher confirms the invitation
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to rooms overview
        Then I see '<room_name>' on room overview page
        When I click on button Open to go to room '<room_name>' at position '0'
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'
        Then I see teacher '<external_person_last_name>' not visible in the table

        When I click on tab Confirmations
        Then I see user '<external_person_last_name>' in the confirmations table
        When I click on button Three Dot Menu in Confirmations table for user '<external_person_last_name>'
        When I click on confirm button in the three dot menu
        Then I do not see user '<external_person_last_name>' in the confirmations table
        When I click on tab Members
        Then I see '<external_person_last_name>' in the room participants list

        # external person can now access the room
        Given I am logged in as a '<external_person_1>' at '<namespace>'
        When I go to rooms overview
        Then I see '<room_name>' on room overview page
        When I click on button Open to go to room '<room_name>' at position '0'
        Then I see the detail page of room '<room_name>'

        # post-condition: teacher deletes the room
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given the room '<room_name>' at position '0' is deleted

        @school_api_test
        Examples:
            | teacher_1    | external_person_1   | external_person_last_name | namespace | room_name                     | invitation_description |
            | teacher1_dbc | externalPerson1_dbc | external_person_1         | dbc       | CypressAut EP Invite Approval | test invitation link   |
