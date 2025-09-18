@regression_test
@stable_test
@group-E
@prio_0_staging
Feature: Room Board - Add H5P learning element in the board

    As a content editor I want to add H5P learning elements in a room board

    Scenario Outline:  Content editor is able to add H5P learning elements in a board

        # pre-condition: creating accounts and room with board
        Given I am logged in as a '<content_editor>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card

        # content editor creates H5P element in the card
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        Then I select 'h5p' from the element selection dialog box
        Then I see the element H5P '<h5p_title>' in the card

        # content editor deletes H5P element on board page
        When I click on the three dot menu in the H5P element
        When I click on the option Delete in the three dot menu
        When I click on the button Delete in the confirmation dialog
        Then I do not see the element H5P

        # post-condition: delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | namespace | content_editor | room_name              | board_title             | h5p_title                |
            | nbc       | teacher1_nbc   | CypressAut Folder Room | CypressAut Folder Board | Lernelement erstellen... |

        @staging_test
        Examples:
            | namespace | content_editor | room_name              | board_title             | h5p_title                |
            | nbc       | teacher1_nbc   | CypressAut Folder Room | CypressAut Folder Board | Lernelement erstellen... |


