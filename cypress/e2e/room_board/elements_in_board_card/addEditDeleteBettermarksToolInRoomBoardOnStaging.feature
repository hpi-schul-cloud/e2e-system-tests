@regression_test
@stable_test
@schedule_run
@group-F
@prio_0_staging
Feature: Room Board - Add bettermarks Tool in the Room Board

    As a teacher, I want to integrate the bettermarks external CTL tool into the room board so that I can seamlessly assign and track learning tasks with students.

    Scenario Outline: Add, edit, delete bettermarks Tool to the Room Board, including pre & post conditions

        # pre-condition: creating accounts
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin adds bettermarks tool in school settings page as an External Tool
        Given the school has external tool '<bettermarks_title>'

        # pre-condition: teacher adds student and room and boards are existing
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a room named '<room_name>' exists
        Given student '<student_name>' with role '<student_role>' from school '<student_school>' added to the room '<room_name>'
        Given I navigate to the room detail page via Breadcrumb
        Given a multi-column board named '<board_title>' exists in the room
        Given the multi-column board has a column with a card

        # teacher adds bettermarks Tool to the multi-column board
        When I click on the page outside of the column
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        Then I see the dialog Add Element in the card
        When I click on the button Close in the dialog Add Element
        Then I do not see the dialog Add Element in the card
        When I click on icon Plus to add content into card
        Then I see the dialog Add Element in the card
        When I select external tools from the element selection dialog box
        When I select the tool '<external_tool_name>' from available tools
        When I enter the tool display name '<bettermarks_title>'
        When I click on button Add in the modal to add an external tool
        Then I see the Title '<bettermarks_title>' and the Domain URL '<bettermarks_domain_url>' of bettermarks in the card
        # clicking on the bettermarks tool even with stubbing causing unstable error, so this step is commented out and is for manual testing part.
        # Then I click on the bettermarks element in the card

        # teacher publishes the room board for student to access the bettermarks tool
        When I click on the three dot menu in room board title
        When I select the three dot menu action 'publish'
        Then I do not see the chip Draft

        # student can see the bettermarks tool in the multi-column board
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to rooms overview
        Then I see '<room_name>' on room overview page
        When I click on button Open to go to room '<room_name>' at position '0'
        Then I see the detail page of room '<room_name>'
        When I click on the button Open on multi-column board in the room detail page
        Then I see the page board details
        Then I see the Title '<bettermarks_title>' and the Domain URL '<bettermarks_domain_url>' of bettermarks in the card

        # teacher edits the bettermarks tool
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        Then I see '<room_name>' on room overview page
        When I click on button Open to go to room '<room_name>' at position '0'
        Then I see the detail page of room '<room_name>'
        When I click on the button Open on multi-column board in the room detail page
        Then I see the page board details
        Then I see the Title '<bettermarks_title>' and the Domain URL '<bettermarks_domain_url>' of bettermarks in the card
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on the three dot in the element external tool bettermarks
        When I click on the option Settings in the three dot menu of the external tool bettermarks
        When I enter the tool display name '<bettermarks_edit_title>'
        When I click on button Add in the modal to add an external tool
        Then I see the Title '<bettermarks_edit_title>' and the Domain URL '<bettermarks_domain_url>' of bettermarks in the card

        # teacher deletes the bettermarks Tool from the multi-column board card
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on the three dot in the element external tool bettermarks
        When I click on the option Delete in the three dot menu
        Then I see the dialog Confirm deletion
        When I click on the button Delete in the confirmation dialog
        Then I do not see the tool bettermarks in the card

        # student can not see the bettermarks tool in the multi-column board
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to rooms overview
        Then I see '<room_name>' on room overview page
        When I click on button Open to go to room '<room_name>' at position '0'
        Then I see the detail page of room '<room_name>'
        When I click on the button Open on multi-column board in the room detail page
        Then I see the page board details
        Then I do not see the tool bettermarks in the card

        # post-condition: delete the room
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given the room '<room_name>' at position '0' is deleted

        # @school_api_test
        # currently, the Bettermarks tool is not configurable on dev clusters for the admin API schools.
        # there are separate URLs dedicated to testing Bettermarks on the dev cluster.

        @staging_test
        Examples:
            | teacher      | admin      | student      | namespace | room_name            | board_title            | bettermarks_title | bettermarks_edit_title | student_name | student_role | student_school              | external_tool_name | bettermarks_domain_url                                      |
            | teacher1_nbc | admin1_nbc | student1_nbc | nbc       | CypressAut Room Name | CypressAut Board Title | bettermarks       | bettermarks edited     | Herbert      | Lernend      | Felix Mendelssohn-Gymnasium | bettermarks        | school.bettermarks.staging.niedersachsen.dbildungscloud.org |

