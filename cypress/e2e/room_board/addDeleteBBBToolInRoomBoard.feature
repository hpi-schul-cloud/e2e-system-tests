@regression_test
@stable_test
Feature: Room - Add BBB Tool in the Room Board

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
        Given a multi-column board named '<new_board_title>' exists in the room
        Given the multi-column board has a column with a card

        # teacher adds BBB Tool to the multi-column board
        When I click on plus icon to add content into card
        Then I see the dialogue box foe element selection
        When I click on the button Close on the element selection dialogue box
        Then I do not see the element selection dialogue box#
        When I click on plus icon to add content into card
        Then I see the dialogue box foe element selection
        When I select 'video conference' from the menu
        When I enter the video conference title '<video_conference_title>'
        When I click on the save button or press the button enter key
        Then I see the video conference element added in the card
        When I click on the video conference element in the card
        Then I see the modal to start the video conference
        When I click on the create button in the video conference creation modal to start the call
        Then I see the BBB call opens in a new tab with the URL "https://bbb-2.bbb.schule/"
        Then I see green pulsating dot in the video confercne element after satrting the call

        # student can see and participant in the video confernce from the multi-column board
        # note: adding student to the room feature is not yet implementred.

        # teacher deletes the BBB Tool from the multi-column board card
        When I double-click on the card
        When I click on the three-dot menu in the video conference element
        When I click on the delete option in the three-dot menu
        Then I see the delete confirmation dialog
        When I click on the delete button in the confirmation dialog
        Then I do not see the video conference element '<video_conference_title>'

        # post-condition: delete the room
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | teacher      | admin      | namespace | room_name         | new_board_title | video_conference_title |
            | teacher1_brb | admin1_brb | brb       | Cypress Room Name | Board Cy Title  | Cy BBB Tool            |

        @staging_test
        Examples:
            | teacher      | admin      | namespace | room_name         | new_board_title | video_conference_title |
            | teacher1_brb | admin1_brb | brb       | Cypress Room Name | Board Cy Title  | Cy BBB Tool            |

