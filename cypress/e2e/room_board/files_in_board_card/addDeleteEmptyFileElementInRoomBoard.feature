@regression_test
@stable_test
@schedule_run
@group-E
@prio_0_staging
Feature: Room Board - Add and delete empty file element in the Room Board

    As a teacher, I want to be able to upload later and see the empty file element in the room board so that I can easily share and manage the board contents.

    Scenario Outline: Add and delete empty file element in the room board, including pre & post conditions

        # pre-condition: creating accounts, student visibility for teachers in school management is enabled
        Given I am logged in as a '<admin>' at '<namespace>'
        Given student visibility for teachers in school management is 'enabled'
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: room, board and card are existing
        Given a room named '<room_name>' with a multi-column board named '<board_title>' exists
        Given the multi-column board has a column with a card
        Given multi column board is published to not to be in a draft mode
        Given '<student_name>' added in the room '<room_name>' at position '0' with role '<role_name_student>' and default read permission

        # teacher adds file element without uploading a file in the multi-column room board
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        Then I see the dialog Add Element in the card
        When I select 'file' from the element selection dialog box
        When I click outside of the card to save it
        Then I see the empty file element in the card

        # student can't see the empty file element in the multi-column board
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        Then I do not see the empty file element in the card

        # teacher deletes the empty file element in the multi-column room board
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on the three dot in the upload file element
        When I click on the option Delete in the three dot menu
        Then I see the dialog Confirm deletion
        When I click on the button Delete in the confirmation dialog
        Then I do not see the element File
        Then I do not see the empty file element in the card

        # post-condition: delete the room
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given the room '<room_name>' at position '0' is deleted

        @staging_test
        Examples:
            | admin      | teacher      | student      | namespace | room_name            | student_name | role_name_student | board_title            |
            | admin1_nbc | teacher1_nbc | student1_nbc | nbc       | CypressAut Room Name | Kraft        | Lernend           | CypressAut Board Title |

        @school_api_test
        Examples:
            | admin      | teacher      | student      | namespace | room_name            | student_name | role_name_student | board_title            |
            | admin1_nbc | teacher1_nbc | student1_nbc | nbc       | CypressAut Room Name | student_1    | Lernend           | CypressAut Board Title |
