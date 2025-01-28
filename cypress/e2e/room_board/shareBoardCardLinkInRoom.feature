# @regression_test
# @stable_test
# Note: the test can be set to stable when the feature is on staging
@unstable
Feature: Room Board - To share a board card link

    As a teacher I want to share a link to a board card.

    # @stable_test
    @unstable
    Scenario: Teacher shares a link to a board card
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given I am logged in as a '<teacher_1>' at '<namespace>'

        # pre-condition: first teacher creates a room
        When I go to room overview
        When I click on FAB to create new room
        Then I see room creation page
        When I enter the room name '<room_name>'
        When I click on the button to save the room
        When I click on three dot menu in room page
        When I click on participants option in room menu
        When I click on FAB to add participants
        Then I see add participants modal
        Then I see school '<school_name>' in school dropdown
        Then I see role '<role_name>' in role dropdown
        When I enter '<name_teacher_2>' in name dropdown
        When I select the first name from the dropdown
        When I click on the button to add the participant
        Then I see '<name_teacher_1>' in the room participants list
        Then I see '<name_teacher_2>' in the room participants list
        # first teacher adds a board with a card to the room
        When I go to room overview
        When I go to room '<room_name>'
        When I click on the button add content
        Then I see the button to add board
        When I click on the fab button to add a Board
        Then I see the dialog box to select the Board type
        When I click on button to add multi-column board
        Then I see the page board details
        Then I see the chip Draft in the course board
        When I click on three dot menu in the board header
        When I click on the option Publish in three dot menu in course board
        Then I do not see the chip Draft in the course board
        When I click on the button Add column in the course board
        When I click on the page outside of the column
        When I click on plus icon to add card in column
        When I click on the page outside of the card
        Then I see a board card

        # first teacher copies link to board card
        When I click on three dot menu in the card
        When I select the option Copy link to card in three dot menu on the card

        # second teacher opens link to board card
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I open the link to a board card
        Then I see the page Course Board details
        Then I see the focused board card

        # post-condition: first teacher deletes the room
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to room overview
        When I go to room '<room_name>'
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I click on delete option in room menu
        Then I see confirmation modal for deleting the room
        When I click on delete button in confirmation modal
        Then I do not see '<room_name>' on room overview page

        @school_api_test
        Examples:
            | teacher_1    | teacher_2    | namespace | name_teacher_1 | name_teacher_2 | room_name         | role_name | school_name             |
            | teacher1_nbc | teacher2_nbc | nbc       | teacher_1      | teacher_2      | Cypress Test Room | Lehrkraft | cypress-automated-tests |

        @staging_test
        Examples:
            | teacher_1    | teacher_2    | namespace | name_teacher_1 | name_teacher_2 | room_name         | role_name | school_name                 |
            | teacher1_nbc | teacher2_nbc | nbc       | Herzog         | Hande          | Cypress Test Room | Lehrkraft | Felix Mendelssohn-Gymnasium |








