@stable_test
@regression_test

# NOTE: This feature is only for staging due to a limitation in the admin API: it cannot create a new room without an owner.
# NOTE: Room named 'cypress-room-without-teacher (please do not delete)' has no owner (teacher_1), but has three users with different roles (student_1 (role -Read), student_2 (role-Edit), teacher_2 (role-Administrator)) assigned to it on the staging environment.
# NOTE: Room admin page for school administrator is currently not active on staging.

Feature: Admin sees rooms without assigned owners in room management page and student cannot access these rooms

    As a school admin
    I want to see which rooms do not have an owner assigned
    So that I can easily manage and update room assignments

    As a user with the role “Read” in a room
    I want to see a lock icon on rooms without assigned owners
    So that I know which rooms I cannot access

    As a user with the role “Edit” in a room
    I want to see a lock icon on rooms without assigned owners
    So that I know which rooms I cannot access

    As a user with the role “Administrator” in a room
    I want to see a lock icon on rooms without assigned owners
    So that I know which rooms I cannot access

    Scenario Outline: Room without an assigned owner is visible to the school admin but inaccessible to other users in the room

        # pre-condition: creating users and logging in
        # student_1 with role 'Read' in room
        Given I am logged in as a '<student_1>' at '<namespace>'
        # student_2 with role 'Edit' in room
        Given I am logged in as a '<student_2>' at '<namespace>'
        # teacher_2 with role 'administrator' in room
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        # school admin user
        Given I am logged in as a '<admin>' at '<namespace>'

        # admin sees the room without an owner assigned in room administrator page
        When I click on administration in menu
        When I navigate to room administration page via the submenu
        Then I see the room administration page
        Then I see the room '<room_without_owner>' on the new room administration page
        Then I see the icon Alert in the column Room owner for the room '<room_without_owner>'

        # student-1 with the role 'Read' cannot access the room without an owner assigned
        Given I am logged in as a '<student_1>' at '<namespace>'
        When I go to room overview
        Then I see the icon Lock in the room '<room_without_owner>'
        When I click on the locked room '<room_without_owner>'
        Then I see a message that the room is not accessible

        # student-2 with role the 'Edit' cannot access the room without an owner assigned
        Given I am logged in as a '<student_2>' at '<namespace>'
        When I go to room overview
        Then I see the icon Lock in the room '<room_without_owner>'
        When I click on the locked room '<room_without_owner>'
        Then I see a message that the room is not accessible

        # teacher-2 with role 'Administrator' cannot access the room without an owner assigned
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I go to room overview
        Then I see the icon Lock in the room '<room_without_owner>'
        When I click on the locked room '<room_without_owner>'
        Then I see a message that the room is not accessible

        @staging_test
        Examples:
            | admin      | student_1    | student_2    | teacher_2    | namespace | room_without_owner                                  |
            | admin1_nbc | student1_nbc | student2_nbc | teacher2_nbc | nbc       | cypress-room-without-teacher (please do not delete) |
