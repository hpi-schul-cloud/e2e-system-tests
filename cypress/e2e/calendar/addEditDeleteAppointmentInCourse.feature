@stable_test
@regression_test
@group-C
@prio_0_staging
Feature: Calendar - Add, edit and delete an appointment from a course

    As a user, I want to create, edit, and delete appointments in course to manage the course schedule

    Scenario Outline: Create, edit and delete an appointment in a course

        # pre-condition: creating teacher account and adding a course
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given a course named '<course>' exists

        # teacher adds an appointment in the course
        When I go to courses overview
        When I go to course '<course>'
        When I open page Edit course
        Then I see page Edit course
        When I click on the button Add new appointment in course
        Then I see the section Course appointment
        Then I see the weekday '<weekday_1>' in the course appointment
        When I enter the time '<time_input>' in the course appointment
        When I enter the duration '<duration>' in the course appointment
        When I enter the classroom '<room_name>' in the course appointment
        When I click on button Save changes in page Edit course

        # teacher verifies the course appointment in the calendar
        When I go to calendar overview
        Then I see an event with start time '<event_time_display>' and event title '<course>'
        When I click on event with start time '<event_time_display>' and event title '<course>'
        Then I see course page '<course>'

        # teacher edits the day and the start time in the course appointment
        When I open page Edit course
        Then I see page Edit course
        Then I see the section Course appointment
        When I click on the option weekday
        When I select the weekday '<weekday_2>' in the course appointment
        When I enter the time '<time_input_edited>' in the course appointment
        When I click on button Save changes in page Edit course

        # teacher verifies the edited appointment in the calendar
        When I go to calendar overview
        Then I see an event with start time '<event_time_display_edited>' and event title '<course>'
        When I click on event with start time '<event_time_display_edited>' and event title '<course>'
        Then I see course page '<course>'

        # teacher deletes the appointment from the course
        When I open page Edit course
        Then I see page Edit course
        When I click on the button Delete appointment in the course

        # teacher verifies that the deleted course appointment is not available in the calendar
        When I go to calendar overview
        Then I do not see an event with event title '<course>'

        # post-condition: teacher deletes the course
        Given course with name '<course>' is deleted

        @school_api_test
        @staging_test
        Examples:
            | teacher      | student      | namespace | course            | weekday_1 | time_input | duration | room_name        | event_time_display | weekday_2 | time_input_edited | event_time_display_edited |
            | teacher1_dbc | student1_dbc | dbc       | CypressAut Course | Montag    | 10:00      | 60       | CypressAut Room1 | 10 Uhr             | Dienstag  | 11:00             | 11 Uhr                    |
