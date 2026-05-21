@stable_test
@regression_test
@group-D
@prio_0_staging

#---NEW TEAM CAN NOT BE CREATED IN GUI, SO PLEASE USE THE EXISTING TEAM AND DO NOT DELETE IT---#

Feature: Calendar - Create an event in a team and check in calendar

    As a user, I want to create, edit, and delete team events and verify their display to manage my team's schedule.

    Scenario Outline: Create, edit and delete a team event and verify its display in the calendar

        # pre-condition: teacher and student login
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'

        # pre-condition: teacher adds student as an internal team member
        When I go to teams overview
        When I go to a team '<team>'
        When I click on three dot menu on the team title
        When I click on manage team members option
        When I click on add internal attendees button
        When new dialog opens to select student '<student_last_name>' from the drop down list
        When I click on add user button
        Then I see the student named '<student_fullname>' on the team members table

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

        # student logs in and sees event in team calendar page
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to teams overview
        When I go to a team '<team>'
        When I go to tab Calendar
        Then I am in calendar tab on team detail page and title '<event_title>' is visible

        # teacher edits team event and check in calendar
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to teams overview
        When I go to a team '<team>'
        When I go to tab Calendar
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

        # student logs in and sees edited event in team calendar page
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to teams overview
        When I go to a team '<team>'
        When I go to tab Calendar
        Then I am in calendar tab on team detail page and title '<event_title_1>' is visible

        # teacher deletes team event and check in calendar
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to teams overview
        When I go to a team '<team>'
        When I go to tab Calendar
        When I click on icon Edit event
        When I click on Delete team event in modal
        Then I am in calendar tab on team detail page and title is NOT visible

        # student logs in and checks event is not visible anymore
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to teams overview
        When I go to a team '<team>'
        When I go to tab Calendar
        Then I am in calendar tab on team detail page and title is NOT visible

        # post-condition: teacher deletes the student as a team member
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to teams overview
        When I go to a team '<team>'
        When I click on three dot menu on the team title
        When I click on manage team members option
        When I select the student '<student_fullname>' and click on delete icon
        Then I see '<student_fullname>' is not visible on the table

        @staging_test
        Examples:
            | teacher      | student      | namespace | student_last_name | student_fullname | team                   | event_title | event_start_time | event_start_text | event_end_time | event_start_time_1 | event_start_text_1 | event_end_time_1 | event_description         | event_place  | event_title_1 | event_description_1            | event_place_1      |
            | teacher1_brb | student1_brb | brb       | Kraft, Herbert    | Herbert Kraft    | QA_01 - do not delete! | cy Event    | 10:00            | 10 Uhr           | 11:00          | 12:00              | 12 Uhr             | 13:00            | cy team event description | cy TestPlace | edit cy title | edit cy team event description | edit cy test place |
