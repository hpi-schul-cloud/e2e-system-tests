@regression_test
@stable_test
@group-F

# Note: This feature should only be executed in the staging environment due to the school API limitation, which prevents creating two separate schools in the same feature and scenario.

Feature: Room Administration - Add room and external members with visibility on rooms administration page

    As a school admin I want to see the created rooms with correct information visible on rooms administration page.

    Scenario: Admin sees room with external members, including pre-conditions
        # Felix Mendelssohn-Gymnasium
        Given I am logged in as a '<admin>' at '<namespace>'
        # Felix Mendelssohn-Gymnasium
        Given I am logged in as a '<teacher>' at '<namespace>'
        # Goethe-Gymnasium
        Given I am logged in as a '<teacherExt>' at '<namespace>'

        # pre-condition: external teacher activates visibility in central directory in different school (Goethe-Gymnasium)
        When I go to my account settings
        Then I see the checkbox Activate visibility in the central directory is unchecked
        When I click on the checkbox Activate visibility in the central directory
        When I click on the button Save Visibility Settings
        Then I see the checkbox Activate visibility in the central directory is checked

        # pre-condition: teacher creating a new room in the origin school (Felix Mendelssohn-Gymnasium), becoming the owner and invite external teacher from the different school (Goethe-Gymnasium) to the room
        Given I am logged in as a '<teacher>' at '<namespace>'
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
        When I enter '<participant_external_school>' in dropdown School
        When I select the first school from the dropdown
        Then I see school '<participant_external_school>' in dropdown School
        When I select '<role_name>' in dropdown Role
        Then I see role '<role_name>' in dropdown Role
        When I enter '<participant_external_name>' in dropdown Name
        When I select the first name from the dropdown
        When I click on the button Add participant
        Then I see '<participant_external_name>' in the room participants list

        # newly added external teacher can see the room (Goethe-Gymnasium)
        Given I am logged in as a '<teacherExt>' at '<namespace>'
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

        # admin (Felix Mendelssohn-Gymnasium) can access member management for room and see external user
        When I click on three dot menu in the room admin page for room '<room_name>'
        When I click on manage room members in the three dot menu
        Then I see the admin page Edit participants of room '<room_name>'
        Then I see '<anonymized_name>' in the admin room participants list

        # admin (Felix Mendelssohn-Gymnasium) deletes the room and can not see it anymore
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to rooms administration page via the submenu
        Then I see the rooms administration page
        When I click on three dot menu in the room admin page for room '<room_name>'
        When I click on delete in the three dot menu
        Then I see confirmation modal for deleting the room in admin page
        When I click on delete button in confirmation modal in room admin page
        Then I see the rooms administration page
        Then I do not see the room '<room_name>' on the rooms administration page

        # external teacher (Goethe-Gymnasium) can not see the room anymore
        Given I am logged in as a '<teacherExt>' at '<namespace>'
        When I go to rooms overview
        Then I do not see '<room_name>' on room overview page

        # teacher (Felix Mendelssohn-Gymnasium) can not see the room anymore
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        Then I do not see '<room_name>' on room overview page

# @staging_test
# Examples:
#     | admin      | teacher      | teacherExt      | namespace | room_name         | participant_external_school | role_name      | participant_external_name  | anonymized_name  | internal_members_count | external_members_count | total_members_count |
#     | admin1_brb | teacher1_brb | teacherExt1_brb | brb       | Cypress Room Name | Goethe-Gymnasium            | Lernbegleitend | Carlo                      | anonymisiert     | 1                      | 1                      | 2                   |
