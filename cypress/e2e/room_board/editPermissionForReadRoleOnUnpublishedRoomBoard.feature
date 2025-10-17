# NOTE: This test case is not executable in staging as it is not active there.

@regression_test
@stable_test
@schedule_run
@prio_0_dev
@group-B
Feature: Room Board - Edit permission for unpublished room boards

    As an admin, I cannot allow/restrict edit permissions on room board for read role members of the unpublished room board

    Scenario Outline: Admin cannot allow/restrict edit permission for unpublished room board

        # pre-condition: teacher creating a new room, publishing a board and adding students to the room with "read" and "admin" permissions
        Given I am logged in as a '<student_1>' at '<namespace>'
        Given I am logged in as a '<student_2>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'
        Given student visibility for teachers in school management is 'enabled'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a room named '<room_name>' with a multi-column board named '<board_title>' exists
        Given '<student_1_name>' added in the room named '<room_name>' with role '<role_name>' and default read permission
        Given '<student_2_name>' added in the room named '<room_name>' with role '<role_name>' and 'change permission' to 'admin' permission

        # administrator student cannot grant the edit permission of the room board if unpublished the room board.
        Given I am logged in as a '<student_2>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name>'
        When I click on the multi-column board in the room detail page
        Then I see the page board details
        When I click on the three dot menu in room board title
        Then I see the option 'edit-setting'
        When I select the three dot menu action 'edit-setting'
        Then I see the Editing settings dialog
        Then I see a warning modal for the board must first be published
        Then I see the button 'Close' in the editing settings modal
        When I click on the button 'Close' in the editing settings modal
        Then I see the chip Draft in the course board

        # administrator student publishes and allows all the room board users to edit the room board
        When I click on the three dot menu in room board title
        When I select the three dot menu action 'Publish'
        When I click on the three dot menu in room board title
        Then I see the option 'edit-setting'
        When I select the three dot menu action 'edit-setting'
        Then I see the Editing settings dialog
        Then I see the two options in the editing settings modal
        Then I see the button 'Cancel' in the editing settings modal
        Then I see the button 'Save' in the editing settings modal
        Then I see the option '<not_editable_by_read_role>' is selected
        When I click the option '<editable_by_read_role>'
        Then I see the option '<editable_by_read_role>' is selected
        When I click on the button 'Save' in the editing settings modal
        Then I see the chip Editable for all

        # viewer student checks that he has edit permission with respect to board
        Given I am logged in as a '<student_1>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name>'
        When I click on the multi-column board in the room detail page
        Then I see the page board details
        Then I see the chip Editable for all
        Then I see the button Add column in the course board

        # room board returns to default permissions after unpublished and administrator student cannot allow/restrict edit permission
        Given I am logged in as a '<student_2>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name>'
        When I click on the multi-column board in the room detail page
        Then I see the page board details
        When I click on the three dot menu in room board title
        When I select the three dot menu action 'Revert'
        Then I see the chip Draft in the course board
        Then I do not see the chip Editable for all
        When I click on the three dot menu in room board title
        Then I see the option 'edit-setting'
        When I select the three dot menu action 'edit-setting'
        Then I see a warning modal for the board must first be published
        When I click on the button 'Cancel' in the editing settings modal
        Then I see the chip Draft in the course board

        # student checks that he cannot access unpublish board
        Given I am logged in as a '<student_1>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name>'
        Then I do not see the board '<board_title>' in the room

        # post-condition: teacher deletes room and admin disables student visibility for teachers
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given the room named '<room_name>' is deleted
        Given I am logged in as a '<admin>' at '<namespace>'
        Given student visibility for teachers in school management is 'disabled'

        @school_api_test
        Examples:
            | admin      | teacher      | student_1    | student_2    | namespace | room_name              | board_title               | student_1_name | student_2_name | role_name | not_editable_by_read_role | editable_by_read_role |
            | admin1_dbc | teacher1_dbc | student1_dbc | student2_dbc | dbc       | CypressAut Room Name-1 | CypressAut Board Cy Title | student_1      | student_2      | Lernend   | noneditable               | editable              |

#       @staging_test
#       Examples:
#            | admin      | teacher      | student_1    | student_2    | namespace | room_name               | board_title               | student_1_name | student_2_name | role_name | not_editable_by_read_role | editable_by_read_role |
#            | admin1_dbc | teacher1_dbc | student1_dbc | student2_dbc | dbc       | CypressAut  Room Name-1 | CypressAut Board Cy Title | Kraft          | Strobl         | Lernend   |  noneditable              | editable              |
