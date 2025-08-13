@stable_test
@regression_test

# NOTE: This feature is only for staging due to a limitation in the admin API: it cannot create a new room without an owner.
# NOTE: Room without an owner and with assigned student should preexist in the staging environment.
# NOTE: Room admin page is currently not active on staging

Feature: Admin sees rooms without assigned owners in room management page and student cannot access these rooms

    As an admin
    I want to see which rooms do not have an owner assigned
    So that I can easily manage and update room assignments

    As a student
    I want to see a lock icon on rooms without assigned owners
    So that I know which rooms I cannot access

    Scenario Outline: Room without owner is visible to admin but inaccessible to student

        # Pre-condition: creating users and logging in
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # Admin sees the room without an owner assigned
        When I click on administration in menu
        When I navigate to room administration page via the submenu
        Then I see the room administration page
        Then I see the room '<room_without_owner>' on the new room administration page
        Then I see the icon Alert in the column Room owner for the room '<room_without_owner>'

        # Student cannot access the room without an owner assigned
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to room overview
        Then I see the icon Lock in the room '<room_without_owner>'
        When I click on the locked room '<room_without_owner>'
        Then I see a message that the room is not accessible

        @school_api_test
        Examples:
            | admin      | student      | namespace | room_without_owner                                   |
            | admin1_nbc | student1_nbc | nbc       | cypreee-room-withoout-teacher (please do not delete) |
