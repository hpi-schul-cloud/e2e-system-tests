# NOTE: This test case is not executable in staging as it is not active there.

@regression_test
@stable_test
@schedule_run
@prio_0_dev
@group-F
Feature: Room Board : Editing permissions for boards

    As admin user of the room, I want to grant/revoke edit permissions on room board for all members of the room if and only if the room board is published

    Scenario Outline: Grant/Revoke edit permission for published room board with a user having administer permission

        # pre-condition: teacher creating a new room, publishing a board and adding students to the room with "read" and "admin" permissions
        Given I am logged in as a '<student_1>' at '<namespace>'
        Given I am logged in as a '<student_2>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'
        Given student visibility for teachers in school management is enabled
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a room named '<room_name_source>' with a multi-column board named '<board_title>' exists and published
        Given '<student1_name>' added in the room named '<room_name_source>' with role '<role_name>' and default permission
        Given '<student2_name>' added in the room named '<room_name_source>' with role '<role_name>' and granted 'admin' permission

        # administrator student grant the read permission of the room board user to edit permission of the roomboard
        Given I am logged in as a '<student_2>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name_source>'
        When I click on the multi-column board in the room detail page
        Then I see the page board details
        When I click on the three dot menu in room board title
        Then I see the option Editing settings
        When I click on editing setting in board menu
        Then I see the Editing settings dialog
        Then I see the two options in editing settings modal
        Then I see the button Cancel in the editing settings modal
        Then I see the option '<edit_with_restriction>' is by 'default' selected
        When I click the option All members can edit this board
        Then I see the option '<editable_for_all>' is by 'default' selected
        When I click on the button Save in Editing settings modal
        Then I see the chip Editable for all

        # viewer student checks that he has edit permission with respect to board
        Given I am logged in as a '<student_1>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name_source>'
        When I click on the multi-column board in the room detail page
        Then I see the page board details
        Then I see the chip Editable for all
        Then I see the button Add column in the course board

        # administrator student revoke the edit permission of the room board user to read permission of the roomboard
        Given I am logged in as a '<student_2>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name_source>'
        When I click on the multi-column board in the room detail page
        Then I see the page board details
        When I click on the three dot menu in room board title
        Then I see the option Editing settings
        When I click on editing setting in board menu
        Then I see the Editing settings dialog
        Then I see the two options in editing settings modal
        Then I see the button Cancel in the editing settings modal
        When I click the option This board is not editable for members with room role Read
        Then I see the option '<edit_with_restriction>' is by 'default' selected
        When I click on the button Save in Editing settings modal
        Then I do not see the chip Editable for all

        # viewer student checks that he did not have edit permission with respect to board
        Given I am logged in as a '<student_1>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name_source>'
        When I click on the multi-column board in the room detail page
        Then I see the page board details
        Then I do not see the chip Editable for all
        Then I see the button Add column in the course board is not visible

        # post-condition: teacher deletes room and admin disables student visibility for teachers
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given the room named '<room_name_source>' is deleted
        Given I am logged in as a '<admin>' at '<namespace>'
        Given student visibility for teachers in school management is disabled


        @school_api_test
        Examples:
            | admin      | teacher      | student_1    | student_2    | namespace | room_name_source       | board_title               | student1_name | student2_name | role_name | edit_with_restriction                       | editable_for_all                |
            | admin1_nbc | teacher1_nbc | student1_nbc | student2_nbc | nbc       | CypressAut Room Name-1 | CypressAut Board Cy Title | student_1     | student_2     | Lernend   | This board is not editable for Read members | All members can edit this board |

#        @staging_test
#        Examples:
#            | admin      | teacher      | student_1    | student_2    | namespace | room_name_source       | board_title               | student1_name | student2_name | role_name | edit_with_restriction                       | editable_for_all                |
#            | admin1_brb | teacher1_brb | student1_brb | student2_brb | brb       | CypressAut Room Name-1 | CypressAut Board Cy Title | Kraft         | Strobl       | Lernend   | This board is not editable for Read members | All members can edit this board |

