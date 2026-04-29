@regression_test
@stable_test
@schedule_run
@group-C
@prio_0_staging
Feature: Rooms - External Person Invitation via Link with Immediate Access

    As a room owner, I want to invite external persons to the room through an invitation link with immediate access, so that they don't need manual approval.

    Scenario Outline: Room owner creates auto-join link, external person joins with limited permissions, leaves, and owner verifies removal

        # pre-condition: users (teacher & external person) logged in
        Given I am logged in as a '<external_person_1>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'

        # pre-condition: teacher creates a new room
        Given a room named '<room_name>' exists

        # teacher create a no-confirmation link
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'
        When I click on tab Invitations
        When I click on the fab button to create an invitation link
        Then I see the modal Create Invitation Link
        When I enter '<invitation_description>' into the Field Invitation Link Description
        When I uncheck the Checkbox to require confirmation
        When I select the radio button for 'all-schools'
        When I "check" the checkbox to allow external persons to use the invitation link
        When I see the checkbox Link Expiration as "uncheck"
        When I save the invitation link
        Then I see the Link URL in the Modal
        Then I see the result url text box in the modal
        Then I see the option Share via Email
        Then I see the option Copy link
        Then I see the option Scan QR Code
        Then I copy the URL from the modal
        Then I see the alert message
        Then I see '<invitation_description>' in the list of invitation links

        # external person uses the no-confirmation invitation link to join the room
        Given I am logged in as a '<external_person_1>' at '<namespace>'
        When I navigate to the shared URL
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

        @staging_test
        Examples:
            | teacher_1    | external_person_1   | namespace | room_name                     | invitation_description | external_person_last_name |
            | teacher1_dbc | externalPerson1_dbc | dbc       | CypressAut EP Invite AutoJoin | test invitation link   | Ol                        |
