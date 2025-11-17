# Note: This feature should only be executed in the staging environment due to the school API limitation,
#       which prevents creating two separate schools in the same feature and scenario.

@regression_test
@stable_test
@prio_0_staging
@group-E
Feature: Room Administration - Add external room and members with visibility on rooms administration page

    As a school admin I want to see the created external rooms with correct information visible on rooms administration page.

    Scenario: Admin sees external room with internal members, including pre-conditions
        # Felix Mendelssohn-Gymnasium
        Given I am logged in as a '<admin>' at '<namespace>'
        # Goethe-Gymnasium
        Given I am logged in as a '<teacherExt>' at '<namespace>'
        # Felix Mendelssohn-Gymnasium
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: origin teacher activates visibility in central directory in origin school (Felix Mendelssohn-Gymnasium)
        When I go to my account settings
        Then I see the checkbox Activate visibility in the central directory is unchecked
        When I click on the checkbox Activate visibility in the central directory
        When I click on the button Save Visibility Settings
        Then I see the checkbox Activate visibility in the central directory is checked

        # pre-condition: external teacher creating a new room in the external school (Goethe-Gymnasium), becoming the owner and invite origin teacher from the origin school (Felix Mendelssohn-Gymnasium) to the room
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

        # newly added origin teacher can see the room (Felix Mendelssohn-Gymnasium)
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        Then I see '<room_name>' on room overview page

        # admin (Felix Mendelssohn-Gymnasium) can see the room with correct stats in rooms administration page
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to rooms administration page via the submenu
        Then I see the rooms administration page
        Then I see the room '<room_name>' on the rooms administration page
        Then I see the room '<room_name>' has correct internal members count '<internal_members_count>'
        Then I see the room '<room_name>' has correct external members count '<external_members_count>'
        Then I see the room '<room_name>' has correct total members count '<total_members_count>'

        # admin (Felix Mendelssohn-Gymnasium) can access member management for room and see external and internal user
        When I click on three dot menu in the room admin page for room '<room_name>'
        When I click on manage room members in the three dot menu
        Then I see the admin page Edit participants of room '<room_name>'
        Then I see '<participant_external_name>' in the admin room participants list
        Then I see '<participant_origin_name>' in the admin room participants list

        # external teacher (Goethe-Gymnasium) deletes the room and can not see it anymore
        Given I am logged in as a '<teacherExt>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name>'
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'delete'
        Then I see confirmation modal for deleting the room
        When I click on delete button in confirmation modal
        Then I do not see '<room_name>' on room overview page

        # admin (Felix Mendelssohn-Gymnasium) can not see the room anymore
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to rooms administration page via the submenu
        Then I see the rooms administration page
        Then I do not see the room '<room_name>' on the rooms administration page

        # origin teacher (Felix Mendelssohn-Gymnasium) can not see the room anymore
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        Then I do not see '<room_name>' on room overview page

        @staging_test
        Examples:
            | admin      | teacher      | teacherExt      | namespace | room_name         | participant_origin_school   | role_name      | participant_origin_name | participant_external_name | internal_members_count | external_members_count | total_members_count |
            | admin1_brb | teacher1_brb | teacherExt1_brb | brb       | Cypress Room Name | Felix Mendelssohn-Gymnasium | Lernbegleitend | Herzog                  | Carlo                     | 1                      | 1                      | 2                   |
