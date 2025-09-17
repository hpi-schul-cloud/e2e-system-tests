@stable_test
@regression_test
@schedule_run
@group-E
Feature: Calendar - create an event in a team and check in calendar

        As a user, I want to be able to create, edit and delete an event in a team and check if it's displayed properly after each action.

        # Precondition
        Given I am logged in as a '<user>' at '<state>'
        Given team with name '<team>' is created

        # Add team event and check in calendary
        When I go to teams overview
        When I go to a team '<team>'
        When I go to calendar tab
        When I click on Add date
        Then I see event creation modal
        When I enter the title '<event_title>'
        When I select the team event start date and time
        #I think there should be definite data here, such as date and time or the fields should be left by default.
        When I select the team event end date and time
        #I think there should be definite data here, such as date and time or the fields should be left by default..
        When I enter the description '<event_description>'
        When I enable the video conference toggle on the modal
        When I enter the event place '<event_place>'
        When I click on Save team event button
        When I go to calendar tab
        Then I am in calendar tab on team detail page and title '<event_title>' is visible


        # When I go to calendar overview
        # Then I see event '<event_title>'
        # When I click event '<event_title>'
        # Then I see the team page '<team>' with open calendar tab

        @school_api_test
        @staging_test
        Examples:
            | user         | state | team                     | event_title | event_description         | event_place  | event_title_1 | event_description_1            | event_place_1      |
            | teacher1_brb | brb   | CypressAut Team Calendar | cy title    | cy team event description | cy TestPlace | edit cy title | edit cy team event description | edit cy test place |
