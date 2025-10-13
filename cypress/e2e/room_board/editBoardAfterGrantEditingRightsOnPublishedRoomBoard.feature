# NOTE: This test case is not executable in staging as it is not active there.

@regression_test
@stable_test
@schedule_run
@prio_0_dev
@group-B
Feature: Room Board - Editing permissions for room boards

    As an admin of the room, I want to allow/restrict edit permissions on room board for all members of the room provided room board is already published

    Scenario Outline: Admin can allow/restrict edit permission for published room board

        # pre-condition: teacher creating a new room, publishing a board and adding students to the room with "read" and "admin" permissions
        Given I am logged in as a '<student_1>' at '<namespace>'
        Given I am logged in as a '<student_2>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'
        Given student visibility for teachers in school management is 'enabled'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a room named '<room_name_source>' with a multi-column board named '<board_title>' exists and published
        Given '<student_1_name>' added in the room named '<room_name_source>' with role '<role_name>' and default read permission
        Given '<student_2_name>' added in the room named '<room_name_source>' with role '<role_name>' and granted 'admin' permission

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
        Then I see the first option has Default setting label
        Then I see the button 'Cancel' in the editing settings modal
        Then I see the button 'Save' in the editing settings modal
        Then I see the option '<edit_with_restriction>' is selected
        When I click the option '<editable_for_all>'
        Then I see the option '<editable_for_all>' is selected
        When I click on the button 'Save' in Editing settings modal
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
        Then I see the first option has Default setting label
        Then I see the option '<editable_for_all>' is selected
        When I click the option '<edit_with_restriction>'
        Then I see the option '<edit_with_restriction>' is selected
        When I click on the button 'Save' in Editing settings modal
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
        Given student visibility for teachers in school management is 'disabled'


        @school_api_test
        Examples:
            | admin      | teacher      | student_1    | student_2    | namespace | room_name_source       | board_title               | student_1_name | student_2_name | role_name | edit_with_restriction        | editable_for_all              |
            | admin1_dbc | teacher1_dbc | student1_dbc | student2_dbc | dbc       | CypressAut Room Name-1 | CypressAut Board Cy Title | student_1      | student_2      | Lernend   | not editable by read members | also editable by read members |

#        @staging_test
#        Examples:
#            | admin      | teacher      | student_1    | student_2    | namespace | room_name_source       | board_title               | student_1_name | student_2_name | role_name | edit_with_restriction         | editable_for_all              |
#            | admin1_dbc | teacher1_dbc | student1_dbc | student2_dbc | dbc       | CypressAut Room Name-1 | CypressAut Board Cy Title | Kraft         | Strobl        | Lernend   | not editable by read members  | also editable by read members |

