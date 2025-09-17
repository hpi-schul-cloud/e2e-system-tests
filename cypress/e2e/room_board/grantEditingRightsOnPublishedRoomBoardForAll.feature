@regression_test
@stable_test
@schedule_run
@group-F
Feature: Editing permissions for boards

    As a User with permission Administer, I want to grant/revoke edit permissions on room board for all members of the room only if the room board is published

    Scenario Outline: Grant/Revoke edit permission for published room board with a user having administer permission

        # pre-condition: teacher creating a new room, publishing a board and adding students to the room with "read" and "admin" permissions
        Given I am logged in as a '<student_1>' at '<namespace>'
        Given I am logged in as a '<student_2>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'
        Given student visibility for teachers is enabled
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a room named '<room_name_source>' with a multi-column board named '<board_title>' exists and published
        Given '<student1name>' added in the room named '<room_name_source>' with role '<role_name>'
        Given '<student2name>' added in the room named '<room_name_source>' with role '<role_name>' and granted 'admin' permission
        Given I am logged in as a '<student_2>' at '<namespace>'

        # Administer student grant the read permission of the room board user to edit permission of the roomboard
        When I go to rooms overview
        When I go to room '<room_name>'
        When I click on the multi-column board in the room detail page
        Then I see the page board details
        When I click on the three dot menu in room board title
        Then I see the option Editing Settings
        When I select the three dot menu action 'Editing Settings'
        Then I see the Edit settings dialog
        Then I see the title in the edit modal
        Then I see the two options in edit modal
        Then I see the button Cancel in the edit modal
        Then I see the option This board is not editable for members with room role Read is by default selected
        When I click the option All members can edit this board
        Then I see the option All members can edit this board is by default selected
        When I click on the button Save
        Then I see the chip Editable for all

        # student checks that he has edit permission wrt board
        Given I am logged in as a '<student_1>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name>'
        When I click on the multi-column board in the room detail page
        Then I see the page board details
        Then I see the chip Editable for all
        Then I see the button Add column in the course board

        # Administer student revoke the edit permission of the room board user to read permission of the roomboard
        When I go to rooms overview
        When I go to room '<room_name>'
        When I click on the multi-column board in the room detail page
        Then I see the page board details
        When I click on the three dot menu in room board title
        Then I see the option Editing Settings
        When I select the three dot menu action 'Editing Settings'
        Then I see the Edit settings dialog
        Then I see the title in the edit modal
        Then I see the two options in edit modal
        Then I see the button Cancel in the edit modal
        When I click the option This board is not editable for members with room role Read
        Then I see the option This board is not editable for members with room role Read is by default selected
        When I click on the button Save
        Then I do not see the chip Editable for all

        # student checks that he didnot have edit permission wrt board
        Given I am logged in as a '<student_1>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<room_name>'
        When I click on the multi-column board in the room detail page
        Then I see the page board details
        Then I see the chip Editable for all
        Then I see the button Add column in the course board is not visible

        # post-condition: teacher deletes room and admin disables student visibility for teachers
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given the room named '<room_name>' is deleted
        Given I am logged in as a '<admin>' at '<namespace>'
        Given student visibility for teachers is disabled


        @school_api_test
        Examples:
            | admin      | teacher      | student_1    | student_2    | namespace | room_name_source    | board_title    | student1name | student2name | role_name |
            | admin1_brb | teacher1_brb | student1_brb | student2_brb | brb       | Cypress Room Name-1 | Board Cy Title | student_1    | student_2    | Lernend   |

        @staging_test
        Examples:
            | admin      | teacher      | student_1    | student_2    | namespace | room_name_source    | board_title    | student1name | student2name | role_name |
            | admin1_brb | teacher1_brb | student1_brb | student2_brb | brb       | Cypress Room Name-1 | Board Cy Title | Kraft        | Strobl       | Lernend   |
