@stable_test
@regression_test
@schedule_run
@group-F
@prio_0_staging
Feature: Calendar - Create an event in a team and check in calendar

    As a user, I want to create, edit, and delete team events and verify their display to manage my team's schedule.

    Scenario Outline: Create, edit and delete a team event and verify its display in the calendar

        # pre-condition: teacher logs in to their account and create a team
        Given I am logged in as a '<user>' at '<namespace>'
        Given team with name '<team>' is created

        # add team event and check in calendar
        When I go to teams overview
        When I go to a team '<team>'
        When I go to tab Calendar
        When I click on Add date
        Then I see event creation modal
        When I enter the title '<event_title>'
        When I enter start time with time '<event_start_time>'
        When I enter end time with time '<event_end_time>'
        When I enter the description '<event_description>'
        When I enter the event place '<event_place>'
        When I click on Save team event button
        When I go to tab Calendar
        Then I am in calendar tab on team detail page and title '<event_title>' is visible
        When I go to calendar overview
        Then I see an event with start time '<event_start_text>' and event title '<event_title>'
        When I click on event with start time '<event_start_text>' and event title '<event_title>'
        Then I am in calendar tab on team detail page and title '<event_title>' is visible

        # edit team event and check in calendar
        When I click on icon Edit event
        Then I see event creation modal
        When I change the title to '<event_title_1>'
        When I change the description to '<event_description_1>'
        When I change start time to '<event_start_time_1>'
        When I change end time to '<event_end_time_1>'
        When I change the event place to '<event_place_1>'
        When I click on button Save team event changes
        When I go to tab Calendar
        Then I am in calendar tab on team detail page and title '<event_title_1>' is visible
        When I go to calendar overview
        Then I see an event with start time '<event_start_text_1>' and event title '<event_title_1>'
        When I click on event with start time '<event_start_text_1>' and event title '<event_title_1>'
        Then I am in calendar tab on team detail page and title '<event_title_1>' is visible

        # delete team event and check in calendar
        When I click on icon Edit event
        When I click on Delete team event in modal
        Then I am in calendar tab on team detail page and title is NOT visible

        # post-condition: teacher deletes the team
        Given team with name '<team>' is deleted

        @school_api_test
        @staging_test
        Examples:
            | user         | namespace | team                     | event_title | event_start_time | event_start_text | event_end_time | event_start_time_1 | event_start_text_1 | event_end_time_1 | event_description         | event_place  | event_title_1 | event_description_1            | event_place_1      |
            | teacher1_dbc | dbc       | CypressAut Calendar Team | cy title    | 15:00            | 15 Uhr           | 16:00          | 18:00              | 18 Uhr             | 19:00            | cy team event description | cy TestPlace | edit cy title | edit cy team event description | edit cy test place |
