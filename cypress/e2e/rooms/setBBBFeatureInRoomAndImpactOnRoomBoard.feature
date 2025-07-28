@regression_test
@stable_test

Feature: Room Board - Room BBB Feature Checkbox Impact on Adding BBB Tool

    As a teacher, I want to verify the impact of enabling the feature checkbox in the room edit page on the ability to add the BBB Tool to room boards.

    Scenario: Enable feature checkbox in room edit page and check BBB Tool availability in room board

        # pre-condition: teacher and admin accounts exist
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin enables video conference for the school
        Given admin enables video conference for the school in the school settings page

        # pre-condition: room with unchecked feature checkbox exists
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given a room named '<room_name>' exists
        When I click on three dot menu in room page
        When I select the three dot menu action 'edit'
        Then I see edit page of room '<room_name>'
        Then I see the video conference checkbox is unchecked
        When I click on the button Save room
        Then I see the detail page of room '<room_name>'

        # pre-condition: first teacher adds another user to the room
        Then I see the detail page of room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'room-members'
        Then I see the page Edit participants of room '<room_name>'
        When I click on FAB to add participants
        Then I see modal Add participants
        Then I see school '<school_name>' in dropdown School
        When I select '<role_name>' in dropdown Role
        Then I see role '<role_name>' in dropdown Role
        When I enter '<participant_name>' in dropdown Name
        When I select the first name from the dropdown
        When I click on the button Add participant
        Then I see '<participant_name>' in the room participants list

        # pre-condition: first teacher changes role for other user
        When I click on button Three Dot Menu to edit participant '<participant_name>'
        Then I see button Change role permission is visible
        When I click on button 'Change-Permission' in the sub-menu
        Then I see dialog box Change Role Permission is visible
        When I change second user role to 'editor'
        Then I see Role changed to 'editor' for second user
        Then I click on button 'Confirm' in the 'Role' action menu

        # pre-condition: first teacher adds board to the room
        When I go to room overview
        Then I see '<room_name>' on room overview page
        When I go to room '<room_name>'
        Then I see the detail page of room '<room_name>'
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card

        # second user tries to add BBB Tool to the board card but does not see the option BBB Tool in Add Element Dialog
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I go to room overview
        Then I see '<room_name>' on room overview page
        When I go to room '<room_name>'
        When I click on the multi-column board in the room detail page
        Then I see the page board details
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        Then I see the dialog Add Element in the card
        Then I do not see 'video-conference' in the element selection dialog box

        # first teacher enables the feature checkbox in the room edit page
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to room overview
        When I go to room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'edit'
        Then I see edit page of room '<room_name>'
        Then I see the video conference checkbox is unchecked
        When I check the video conference checkbox
        Then I see the video conference checkbox is checked
        When I click on the button Save room
        Then I see the detail page of room '<room_name>'

        # second user adds BBB tool to the board card
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I go to room overview
        Then I see '<room_name>' on room overview page
        When I go to room '<room_name>'
        When I click on the multi-column board in the room detail page
        Then I see the page board details
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
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

        # first teacher deactivates the feature checkbox in the room edit page
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        When I go to room overview
        When I go to room '<room_name>'
        When I click on three dot menu in room page
        When I select the three dot menu action 'edit'
        Then I see edit page of room '<room_name>'
        Then I see the video conference checkbox is checked
        When I uncheck the video conference checkbox
        Then I see the video conference checkbox is unchecked
        When I click on the button Save room
        Then I see the detail page of room '<room_name>'

        # second user tries to access the BBB tool again in the board card but can not start the video conference anymore
        Given I am logged in as a '<teacher_2>' at '<namespace>'
        When I go to room overview
        Then I see '<room_name>' on room overview page
        When I go to room '<room_name>'
        When I click on the multi-column board in the room detail page
        Then I see the page board details
        When I click on the page outside of the column
        When I click on the video conference element in the card
        Then I do not see the modal to start the video conference

        # post-condition: delete the room
        Given I am logged in as a '<teacher_1>' at '<namespace>'
        Given the room named '<room_name>' is deleted

        @school_api_test
        Examples:
            | teacher_1    | teacher_2    | admin      | namespace | room_name         | school_name           | role_name      | participant_name | board_title | video_conference_title |
            | teacher1_brb | teacher2_brb | admin1_brb | brb       | Cypress Room Name | cypress-test-school-1 | Lernbegleitend | teacher_2        | Board Title | Cy BBB Tool |

        @staging_test
        Examples:
            | teacher_1    | teacher_2    | admin      | namespace | room_name         | school_name                 | role_name      | participant_name | board_title | video_conference_title |
            | teacher1_brb | teacher2_brb | admin1_brb | brb       | Cypress Room Name | Felix Mendelssohn-Gymnasium | Lernbegleitend | Hande            | Board Title | Cy BBB Tool |
