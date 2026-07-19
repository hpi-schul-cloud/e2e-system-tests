@regression_test
@stable_test
@schedule_run
@group-F
@prio_0_staging
Feature: Room Board - Add and delete an empty ctl tool element in a room board

    As a teacher, I want to add and delete an empty ctl tool element in a room board

    Scenario Outline: Teacher adds and deletes empty tool element in a room board

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

        # teacher adds a tool element without adding a tool in the room board
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        Then I see the dialog Add Element in the card
        When I select 'external-tool-container' from the element selection dialog box
        When I click on the button Cancel in external tool dialog
        When I click outside of the card to save it
        Then I see an empty external tool element in the card

        # student can't see the empty tool element in the room board
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        Then I do not see an empty external tool element in the card

        # teacher deletes empty tool element from board
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on three dot menu of external tool element '<ctl_tool_optional_param>'
        When I click the delete button in three dot menu on the element
        Then I see the dialog Confirm deletion
        When I click on the button Delete in the confirmation dialog
        Then I do not see an empty external tool element in the card

        # post-condition: teacher deletes room
        Given the room '<room_name>' at position '0' is deleted

        @staging_test
        Examples:
            | admin        | teacher      | student      | namespace | room_name                       | student_name | role_name_student | board_title            | ctl_tool_optional_param |
            | admin1_nbc   | teacher1_nbc | student1_nbc | nbc       | CypressAut Board With Ctl Tools | Kraft        | Lernend           | CypressAut Board Title | ...                     |

        @school_api_test
        Examples:
            | admin      | teacher      | student      | namespace | room_name                       | student_name | role_name_student | board_title            | ctl_tool_optional_param |
            | admin1_nbc | teacher1_nbc | student1_nbc | nbc       | CypressAut Board With Ctl Tools | student_1    | Lernend           | CypressAut Board Title |...                     |
