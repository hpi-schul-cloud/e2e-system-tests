@regression_test
@stable_test
@group-F
@prio_0_dev
Feature: Room Administration - Add room and internal members with visibility on rooms administration page

    As a school admin, I want to see the created rooms with correct information visible on rooms administration page.

    Scenario: Admin sees room with internal members

        # pre-condition: users (admin and teachers) logged in
        Given I am logged in as a '<admin>' at '<namespace>'
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'

        # pre-condition: teacher creating a new room with internal members
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
        Then I see school '<school_name>' in dropdown School
        When I select '<role_name>' in dropdown Role
        Then I see role '<role_name>' in dropdown Role
        When I enter '<participant_name>' in dropdown Name
        When I select the first name from the dropdown
        When I click on the button Add participant
        Then I see '<participant_name>' in the room participants list

        # admin can see the room with correct stats in rooms administration page
        Given I am logged in as a '<admin>' at '<namespace>'
        When I click on administration in menu
        When I navigate to rooms administration page via the submenu
        Then I see the rooms administration page
        Then I see the room '<room_name>' on the rooms administration page
        Then I see the room '<room_name>' has correct internal members count '<internal_members_count>'
        Then I see the room '<room_name>' has correct external members count '<external_members_count>'
        Then I see the room '<room_name>' has correct total members count '<total_members_count>'

        # admin can access member management for room and see internal user
        When I click on three dot menu in the room admin page for room '<room_name>'
        When I click on manage room members in the three dot menu
        Then I see the admin page Edit participants of room '<room_name>'
        Then I see '<participant_name>' in the admin room participants list

        # admin deletes the room and can not see it anymore
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

        # teacher can not see the room anymore
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to rooms overview
        Then I do not see '<room_name>' on room overview page

        @school_api_test
        Examples:
            | admin      | teacher_1    | teacher_2    | namespace | room_name            | school_name           | role_name      | participant_name | internal_members_count | external_members_count | total_members_count |
            | admin1_dbc | teacher1_dbc | teacher2_dbc | dbc       | CypressAut Room Name | cypress-test-school-1 | Lernbegleitend | teacher_2        | 2                      | 0                      | 2                   |

# @staging_test
# Examples:
#     | admin      | teacher_1    | teacher_2    | namespace | room_name         | school_name                 | role_name      | participant_name | internal_members_count | external_members_count | total_members_count |
#     | admin1_dbc | teacher1_dbc | teacher2_dbc | dbc       | CypressAut Room Name | Felix Mendelssohn-Gymnasium | Lernbegleitend | Hande            | 2                      | 0                      | 2                   |
