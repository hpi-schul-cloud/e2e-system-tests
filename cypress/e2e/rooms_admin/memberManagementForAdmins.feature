@regression_test
@stable_test
@group-D
@prio_0_staging
Feature: Room Administration - Add room and manage its members via rooms administration page

    As a school admin, I want to see the created rooms and edit its members via rooms administration page.

    Scenario: Admin sees room with owner, adding new members

        # pre-condition: admin and teacher logged in
        Given I am logged in as a '<admin>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: teacher creating a new room
        When I go to rooms overview
        When I click on FAB to create new room
        Then I see room creation page
        When I enter the room name '<room_name>'
        When I click on the button Save room
        Then I see the detail page of room '<room_name>'

        # pre-condition: admin can see the room with correct stats in rooms administration page
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to rooms administration page via the submenu
        Then I see the rooms administration page
        Then I see the room '<room_name>' on the rooms administration page
        Then I see the room '<room_name>' has correct internal members count '<internal_members_count>'
        Then I see the room '<room_name>' has correct external members count '<external_members_count>'
        Then I see the room '<room_name>' has correct total members count '<total_members_count>'

        # admin accesses rooms member management via room administration page
        When I click on three dot menu in the room admin page for room '<room_name>'
        When I click on manage room members in the three dot menu
        Then I see the admin page Edit participants of room '<room_name>'
        # TODO: Implement steps for managing room members after BC-10043 is merged

        # post-condition: admin deletes the room
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

        # post-condition: teacher can not see the room anymore
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        Then I do not see '<room_name>' on room overview page

        @school_api_test
        Examples:
            | admin      | teacher      | namespace | room_name            | school_name           | role_name      | participant_name | internal_members_count | external_members_count | total_members_count |
            | admin1_brb | teacher1_brb | brb       | CypressAut Room Name | cypress-test-school-1 | Lernbegleitend | teacher_2        | 1                      | 0                      | 1                   |

        @staging_test
        Examples:
            | admin      | teacher      | namespace | room_name            | school_name                 | role_name      | participant_name | internal_members_count | external_members_count | total_members_count |
            | admin1_brb | teacher1_brb | brb       | CypressAut Room Name | Felix Mendelssohn-Gymnasium | Lernbegleitend | Hande            | 1                      | 0                      | 1                   |
