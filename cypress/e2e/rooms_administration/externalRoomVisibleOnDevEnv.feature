@unstable_test

# Note: This feature can not be currently executed using the school API, as creating two different school within the same scenario is not possible/limited.

Feature: Room Administration - Add external room and members with visibility on rooms administration page

    As a school admin I want to see the created external rooms with correct information visible on rooms administration page.

    Scenario: Admin sees external room with internal members, including pre-conditions
        # cypress-test-school-1
        Given I am logged in as a '<admin>' at '<namespace>'
        # cypress-test-school-2
        Given I am logged in as a '<teacherExt>' at '<namespace>'
        # cypress-test-school-1
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: origin teacher activates visibility in central directory in origin school (cypress-test-school-1)
        When I go to my account settings
        Then I see the checkbox Activate visibility in the central directory is unchecked
        When I click on the checkbox Activate visibility in the central directory
        When I click on the button Save Visibility Settings
        Then I see the checkbox Activate visibility in the central directory is checked

        # pre-condition: external teacher creating a new room in the external school (cypress-test-school-2), becoming the owner and invite origin teacher from the origin school (cypress-test-school-1) to the room
        Given I am logged in as a '<teacherExt>' at '<namespace>'
        When I go to rooms overview
        When I click on FAB to create new room
        Then I see room creation page
        When I enter the room name '<room_name>'
        When I click on the button Save room
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'
        When I click on FAB to add participants
        Then I see modal Add participants
        When I enter '<participant_origin_school>' in dropdown School
        When I select the first school from the dropdown
        Then I see school '<participant_origin_school>' in dropdown School
        When I select '<role_name>' in dropdown Role
        Then I see role '<role_name>' in dropdown Role
        When I enter '<participant_origin_name>' in dropdown Name
        When I select the first name from the dropdown
        When I click on the button Add participant
        Then I see '<participant_origin_name>' in the room participants list

        # newly added origin teacher can see the room (cypress-test-school-1)
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        Then I see '<room_name>' on room overview page

        # admin (cypress-test-school-1) can see the room with correct stats in rooms administration page
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to rooms administration page via the submenu
        Then I see the rooms administration page
        Then I see the room '<room_name>' on the rooms administration page
        Then I see the room '<room_name>' has correct internal members count '<internal_members_count>'
        Then I see the room '<room_name>' has correct external members count '<external_members_count>'
        Then I see the room '<room_name>' has correct total members count '<total_members_count>'

        # admin (cypress-test-school-1) can access member management for room and see external and internal user
        When I click on three dot menu in the room admin page for room '<room_name>'
        When I click on manage room members in the three dot menu
        Then I see the admin page Edit participants of room '<room_name>'
        Then I see '<participant_external_name>' in the admin room participants list
        Then I see '<participant_origin_name>' in the admin room participants list

        # external teacher (cypress-test-school-2) deletes the room and can not see it anymore
        Given I am logged in as a '<teacherExt>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name>'
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'delete'
        Then I see confirmation modal for deleting the room
        When I click on delete button in confirmation modal
        Then I do not see '<room_name>' on room overview page

        # admin (cypress-test-school-1) can not see the room anymore
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to rooms administration page via the submenu
        Then I see the rooms administration page
        Then I do not see the room '<room_name>' on the rooms administration page

        # origin teacher (cypress-test-school-1) can not see the room anymore
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        Then I do not see '<room_name>' on room overview page

        @school_api_test
        Examples:
            | admin      | teacher      | teacherExt      | namespace | room_name         | participant_origin_school | role_name      | participant_origin_name  | participant_external_name  | internal_members_count | external_members_count | total_members_count |
            | admin1_brb | teacher1_brb | teacherExt1_brb | brb       | Cypress Room Name | cypress-test-school-1     | Lernbegleitend | XYZ                      | cypressExt                 | 1                      | 1                      | 2                   |
