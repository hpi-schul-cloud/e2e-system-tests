@stable_test
@regression_test
@schedule_run
@group-F
Feature: Calendar - create an event in a team and check in calendar

    As a user, I want to be able to create, edit and delete an event in a team and check if it's displayed properly after each action.

    Scenario Outline: create, edit and delete an event in the calendar and check in calendar
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
        When I enter start time with time '<event_start_time>'
        When I enter end time with time '<event_end_time>'
        When I enter the description '<event_description>'
        When I enter the event place '<event_place>'
        When I click on Save team event button
        When I go to calendar tab
        Then I am in calendar tab on team detail page and title '<event_title>' is visible
        When I go to calendar overview
        Then I see an event with start time '<event_start_text>' and event title '<event_title>'
        When I click on event with start time '<event_start_text>' and event title '<event_title>'
        Then I am in calendar tab on team detail page and title '<event_title>' is visible



        # Edit team event and check in calendary
        When I click on edit icon
        Then I see event creation modal
        When I change the title to '<event_title_1>'
        When I change the description to '<event_description_1>'
        When I change start time to '<event_start_time_1>'
        When I change end time to '<event_end_time_1>'
        When I change the event place to '<event_place_1>'
        When I click on button Save team event changes
        When I go to calendar tab
        Then I am in calendar tab on team detail page and title '<event_title_1>' is visible
        When I go to calendar overview
        Then I see an event with start time '<event_start_text_1>' and event title '<event_title_1>'
        When I click on event with start time '<event_start_text_1>' and event title '<event_title_1>'
        Then I am in calendar tab on team detail page and title '<event_title_1>' is visible

        # Delete team event and check in calendary
        When I click on edit icon
        When I click on Delete team event in modal
        Then I am in calendar tab on team detail page and title is NOT visible

        # Postcondition
        Given team with name '<team>' is deleted

        @school_api_test
        @staging_test
        Examples:
            | user         | state | team                     | event_title | event_start_time | event_start_text | event_end_time | event_start_time_1 | event_start_text_1 | event_end_time_1 | event_description         | event_place  | event_title_1 | event_description_1            | event_place_1      |
            | teacher1_brb | brb   | CypressAut Calendar Team | cy title    | 15:00            | 15 Uhr           | 16:00          | 18:00              | 18 Uhr             | 19:00            | cy team event description | cy TestPlace | edit cy title | edit cy team event description | edit cy test place |
