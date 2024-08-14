@stable_test
@regression_test
Feature: Calendar - create a simple event in the calendar

  As a user, I want to be able to create a simple event in the calendar without course/team and check if it's displayed properly.


  Scenario Outline: create an event in the calendar as an admin, teacher and student
    Given I am logged in as a '<user>' at '<namespace>'
    When I go to calendar overview
    Then I see calendar page
    When I click on icon Next
    When I click on day '<event_start_day>'
    Then I see modal for creating an event
    When I enter event title '<event_title>'
    When I enter start time with time '<event_start_time>'
    When I enter end time with time '<event_end_time>'
    When I enter event description '<event_description>'
    When I enter event location '<event_location>'
    When I click button Add event
    Then I see calendar page
    When I click on icon Next
    # Then I see an event on day '<event_start_day>' with start time '<event_start_time>' and event title '<event_title>'
    # has to be deleted in the end

    @school_api_test
    @staging_test
    Examples:
      | user         | namespace | event_start_day | event_start_time | event_end_day | event_end_time | event_title                | event_description | event_location     |
      | student1_brb | brb       | 18              | 15:00            | 18            | 18:00          | CypressAut Videospiele-AG  | Zocken!           | Bei euch zuhause.  |
    # | teacher1_nbc | nbc       | 13              | 08:00            | 23            | 20:00          | CypressAut Es sind Ferien  | Wir haben frei!   | Eure vier Wände?   |
    # | admin1_dbc   | dbc       | 12              | 09:00            | 12            | 19:00          | CypressAut Schulfrei       | Schule fällt aus! | Bei euch am PC!    |


    #   Feature: Set of tests to create a simple event in the calendar

    # Background: User opens Schul-cloud homepage Website
    #     Given user arrives on the Schul-Cloud homepage


    # Scenario Outline: As a user, I want to be able to create a simple event in the calendar without course/team and check if it's displayed properly.
    #     Given <userRole> logs in with email '<username>' and password '<password>'
    #     And <userRole> clicks left navigation item 'calendar'
    #     Then <userRole> should see monthly calendar
    #     And <userRole> clicks inside event table
    #     When <userRole> clicks create event button
    #     #Then <userRole> can see the notification message
    #     When <userRole> adds title '<eventTitle>' in calendar
    #     When <userRole> adds start date in calendar: today, 09:00
    #     When <userRole> adds end date in calendar: today +14 days, 08:00
    #     When <userRole> adds content '<eventContent>' in calendar
    #     When <userRole> adds location '<eventLocation>' in calendar
    #     When <userRole> clicks create event button
    #     And <userRole> should see that event with title '<eventTitle>' is displayed in the calendar
    #     Examples:
    #         | userRole | username                         | password       | eventTitle     | eventContent      | eventLocation      |
    #         | admin    | kai.admin.qa@schul-cloud.org     | Schulcloud1qa! | Schulfrei      | Schule fällt aus! | Bei euch am PC!    |
    #         | teacher  | karl.teacher.qa@schul-cloud.org  | Schulcloud1qa! | Es sind Ferien | Wir haben frei!   | Eure vier Wände?   |
    #         | student  | amelia.strobl.qa@schul-cloud.org | Schulcloud1qa! | Videospiele-AG | Zocken!           | Bei euch zuhause.  |