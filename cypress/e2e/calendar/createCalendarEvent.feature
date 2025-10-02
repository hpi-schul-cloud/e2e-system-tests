@stable_test
@regression_test
@schedule_run
@group-C
@prio_0_staging
Feature: Calendar - Create a simple event in the calendar

    As a user, I want to create a simple event in the calendar and verify its display

    Scenario Outline: Create, view, and delete a calendar event as admin, teacher, or student

        Given I am logged in as a '<user>' at '<namespace>'
        When I go to calendar overview
        Then I see calendar page
        # next step is to change to the next month to ensure that the chosen day is not in the past.
        When I click on icon Next to go to next month
        When I click on day '<event_start_day>'
        Then I see modal for creating an event
        When I enter event title '<event_title>'
        When I enter start time with time '<event_start_time>'
        When I enter end time with time '<event_end_time>'
        When I enter event description '<event_description>'
        When I enter event location '<event_location>'
        When I click button Add event
        Then I see calendar page
        # next step is to change to the next month to ensure that the chosen day is not in the past.
        When I click on icon Next to go to next month
        Then I see an event with start time '<event_start_text>' and event title '<event_title>'
        When I click on event with start time '<event_start_text>' and event title '<event_title>'
        Then I see modal for editing an event
        When I click on button Delete event
        Then I do not see an event with event title '<event_title>'

        @school_api_test
        @staging_test
        Examples:
            | user         | namespace | event_start_day | event_start_time | event_start_text | event_end_day | event_end_time | event_title               | event_description | event_location    |
            | student1_dbc | dbc       | 18              | 15:00            | 15 Uhr           | 18            | 18:00          | CypressAut Videospiele-AG | Zocken!           | Bei euch zuhause. |
# | teacher1_dbc | dbc       | 13              | 08:00            | event_start_time | 23            | 20:00          | CypressAut Es sind Ferien  | Wir haben frei!   | Eure vier Wände?   |
# | admin1_dbc   | dbc       | 12              | 09:00            | event_start_time | 12            | 19:00          | CypressAut Schulfrei       | Schule fällt aus! | Bei euch am PC!    |
