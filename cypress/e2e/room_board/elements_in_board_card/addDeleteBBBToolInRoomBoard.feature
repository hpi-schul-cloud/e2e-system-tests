@regression_test
@stable_test
@schedule_run
@group-K
Feature: Room Board - Add BBB Tool in the Room Board

    As a teacher, I want to add a BBB (BigBlueButton) Tool to the room board so that I can manage video conferencing effectively.

    Scenario: Add BBB Tool to the Room Board, including pre & post conditions

        # pre-condition: creating accounts
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin enable the video conference in school settings page
        Given admin enables video conference for the school in the school settings page

        # pre-condition: room and boards are existing
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card

        # teacher adds BBB Tool to the multi-column board
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        Then I see the dialog Add Element in the card
        When I click on the button Close in the dialog Add Element
        Then I do not see the dialog Add Element in the card
        When I click on icon Plus to add content into card
        Then I see the dialog Add Element in the card
        When I select 'video-conference' from the element selection dialog box
        When I enter the video conference title '<video_conference_title>'
        When I click on the save button or press the button enter key
        Then I see the video conference element added in the card
        When I click on the video conference element in the card
        Then I see the modal to start the video conference
        Then I see the moderator approval checkbox is checked in the video conference start modal
        Then I see the button create in the video conference creation modal to start the call
        Then I click on the button cancel in the video conference creation modal to go back to the card

        # student can see the video conference in the multi-column board
        # note: this scenario can not be defined as adding a student into the room is not yet implemented.

        # teacher deletes the BBB Tool from the multi-column board card
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on the three-dot menu in the video conference element
        When I click on the option Delete in the three-dot menu
        Then I see the dialog Confirm deletion
        When I click on the button Delete in the confirmation dialog
        Then I do not see the video conference element

        # post-condition: delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | teacher      | admin      | namespace | room_name         | board_title    | video_conference_title |
            | teacher1_dbc | admin1_dbc | dbc       | Cypress Room Name | Board Cy Title | Cy BBB Tool            |

        @staging_test
        Examples:
            | teacher      | admin      | namespace | room_name         | board_title    | video_conference_title |
            | teacher1_dbc | admin1_dbc | dbc       | Cypress Room Name | Board Cy Title | Cy BBB Tool            |
