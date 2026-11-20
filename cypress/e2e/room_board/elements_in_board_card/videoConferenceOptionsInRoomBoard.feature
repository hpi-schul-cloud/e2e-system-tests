@regression_test
@mikroorm_v7
Feature: Room Board - Video conference options are persisted

    As a teacher, I want the options of a video conference in a room board to be stored
    so that they are applied when participants join and offered again on the next start.

    Scenario Outline: Teacher starts a room board video conference with changed options and student joins

        # pre-condition: creating accounts
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin enables student visibility and the video conference in school settings page
        Given student visibility for teachers in school management is 'enabled'
        Given admin enables video conference for the school in the school settings page

        # pre-condition: room, board, card and video conference element are existing
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a room named '<room_name>' with a multi-column board named '<board_title>' exists
        Given the multi-column board has a column with a card
        Given multi column board is published to not to be in a draft mode
        Given '<student_name>' added in the room '<room_name>' at position '0' with role '<role_name_student>' and default read permission
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        Then I see the dialog Add Element in the card
        When I select 'video-conference' from the element selection dialog box
        When I enter the video conference title '<video_conference_title>'
        When I click outside of the card to save it
        Then I see the title '<video_conference_title>' in the video conference element

        # teacher starts the video conference with non-default options
        When I click on the video conference element in the card
        Then I see the modal to start the video conference
        Then I see the video conference options muted 'off', waiting room 'on' and all moderators 'off'
        When I set the video conference options muted 'on', waiting room 'off' and all moderators 'on'
        When I start the video conference from the configuration dialog
        Then the video conference is 'RUNNING' with stored options muted 'on', waiting room 'off' and all moderators 'on'

        # student joins with moderator role because everybody joins as moderator
        Given I am logged in as a '<student>' at '<namespace>'
        Then joining the video conference via API gives me the role 'MODERATOR'

        # nobody entered the conference, it expires on its own; stored options are offered again after reload
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I wait until the video conference without participants has expired
        Then the video conference is 'NOT_STARTED' with stored options muted 'on', waiting room 'off' and all moderators 'on'
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        When I reload the board page and wait for the cards
        When I click on the video conference element in the card
        Then I see the modal to start the video conference
        Then I see the video conference options muted 'on', waiting room 'off' and all moderators 'on'

        # teacher restarts the video conference with options switched back
        When I set the video conference options muted 'off', waiting room 'on' and all moderators 'off'
        When I start the video conference from the configuration dialog
        Then the video conference is 'RUNNING' with stored options muted 'off', waiting room 'on' and all moderators 'off'

        # student joins as viewer again, the removed moderator option is not applied anymore
        Given I am logged in as a '<student>' at '<namespace>'
        Then joining the video conference via API gives me the role 'VIEWER'

        # post-condition: teacher deletes the room
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given the room '<room_name>' at position '0' is deleted

        @school_api_test
        Examples:
            | teacher      | admin      | student      | namespace | room_name               | student_name | role_name_student | board_title             | video_conference_title  |
            | teacher1_nbc | admin1_nbc | student1_nbc | nbc       | CypressAut Room VC Opts | student_1    | Lernend           | CypressAut Board VC Opt | CypressAut BBB Options  |
