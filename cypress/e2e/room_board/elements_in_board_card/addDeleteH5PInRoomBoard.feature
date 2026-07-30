@regression_test
@stable_test
@group-E
@prio_0_staging
Feature: Room Board - Add H5P learning element in the board

    As a content editor, I want to add H5P learning elements in a room board

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
        Given the room '<room_name>' at position '0' is deleted

        @school_api_test
        @staging_test
        Examples:
            | namespace | content_editor | room_name              | board_title             | h5p_title                |
            | nbc       | teacher1_nbc   | CypressAut Folder Room | CypressAut Folder Board | Lernelement erstellen... |

    Scenario Outline: Content editor adds empty H5P element and student does not see the empty element

        # pre-condition: creating accounts, student visibility for teachers in school management is enabled
        Given I am logged in as a '<admin>' at '<namespace>'
        Given student visibility for teachers in school management is 'enabled'
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<content_editor>' at '<namespace>'
        Given a room named '<room_name>' with a multi-column board named '<board_title>' exists
        Given the multi-column board has a column with a card
        Given multi column board is published to not to be in a draft mode
        Given '<student_name>' added in the room '<room_name>' at position '0' with role '<role_name_student>' and default read permission

        # content editor creates H5P element and sees empty state on the card
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        Then I select 'h5p' from the element selection dialog box
        When I click outside of the card to save it
        Then I see the empty H5P element

        # student does not see empty H5P element in the multi-column board
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        Then I do not see the empty H5P element

        # content editor deletes H5P element on board page
        Given I am logged in as a '<content_editor>' at '<namespace>'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on the three dot menu in the H5P element
        When I click on the option Delete in the three dot menu
        When I click on the button Delete in the confirmation dialog
        Then I do not see the element H5P
        Then I do not see the empty H5P element

        # post-condition: delete the room
        Given I am logged in as a '<content_editor>' at '<namespace>'
        Given the room '<room_name>' at position '0' is deleted

        @school_api_test
        Examples:
            | admin      | content_editor | student      | namespace | room_name                 | student_name | role_name_student | board_title            |
            | admin1_nbc | teacher1_nbc   | student1_nbc | nbc       | CypressAut H5P Room Empty | student_1    | Lernend           | CypressAut Board Title |

        @staging_test
        Examples:
            | admin      | content_editor | student      | namespace | room_name                 | student_name | role_name_student | board_title            |
            | admin1_nbc | teacher1_nbc   | student1_nbc | nbc       | CypressAut H5P Room Empty | Kraft        | Lernend           | CypressAut Board Title |
