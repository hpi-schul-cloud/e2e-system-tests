@regression_test
@stable_test
@schedule_run
@group-C
@prio_0_staging
Feature: Rooms - External Person Invitation via Link with Approval Required

    As a room owner, I want to create an invitation link with approval workflow so external persons must request access and await my confirmation before joining.

    Scenario Outline: Room owner creates confirmation-required link, external person applies, owner approves, access is granted

        # pre-condition: users (teacher & external person) logged in
        Given I am logged in as a '<external_person_1>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'

        # pre-condition: teacher creates a new room
        Given a room named '<room_name>' exists

        # teacher creates a confirmation required invitation link
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'
        When I click on tab Invitations
        When I click on the fab button to create an invitation link
        Then I see the modal Create Invitation Link
        When I enter '<invitation_description>' into the Field Invitation Link Description
        When I select the radio button for 'all-schools'
        When I "check" the checkbox to allow external persons to use the invitation link
        When I see the checkbox Link Expiration as "uncheck"
        When I check the Checkbox to require confirmation
        When I save the invitation link
        Then I see the Link URL in the Modal
        Then I see the result url text box in the modal
        Then I see the option Share via Email
        Then I see the option Copy link
        Then I see the option Scan QR Code
        Then I copy the URL from the modal
        Then I see the alert message
        Then I see '<invitation_description>' in the list of invitation links

        # external person uses the invitation link to join the room
        Given I am logged in as a '<external_person_1>' at '<namespace>'
        When I navigate to the shared URL
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
        When I click on three dot menu for user '<external_person_last_name>' in Confirmations table
        When I click on button Confirm in the three dot menu
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
            | teacher_1    | external_person_1   | namespace | room_name                     | invitation_description | external_person_last_name |
            | teacher1_dbc | externalPerson1_dbc | dbc       | CypressAut EP Invite Approval | test invitation link   | external_person_1         |

        @staging_test
        Examples:
            | teacher_1    | external_person_1   | namespace | room_name                     | invitation_description | external_person_last_name |
            | teacher1_dbc | externalPerson1_dbc | dbc       | CypressAut EP Invite Approval | test invitation link   | Ol                        |

