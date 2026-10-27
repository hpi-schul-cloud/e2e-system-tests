@regression_test
@mikroorm_v7
Feature: Course - Video conference options are persisted

    As a teacher, I want the options of a course video conference to be stored
    so that they are applied when students join and offered again on the next start.

    Scenario Outline: Teacher starts a course video conference with changed options and student joins

        # pre-condition: creating accounts in the same school
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin enables the video conference for the school and creates the course
        Given admin enables video conference for the school in the school settings page
        Given a course with name '<course_name>' exists with '<fullname_teacher>' as teacher and '<fullname_student>' as student

        # pre-condition: teacher activates video conferences in the course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to courses overview
        When I go to course '<course_name>'
        When I open page Edit course
        Then I see page Edit course
        When I click on checkbox Activate video conferences in page Edit course to enable the BigBlueButton tool
        When I click on button Save changes in page Edit course

        # teacher starts the course video conference with non-default options
        When I click on tab Tools
        Then I see the Video Conference BigBlueButton in the course
        When I click on the tool BigBlueButton in the course
        Then I see the modal to start the BigBlueButton video conference
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
        When I go to courses overview
        When I go to course '<course_name>'
        When I reload the current page
        When I click on tab Tools
        When I click on the tool BigBlueButton in the course
        Then I see the modal to start the BigBlueButton video conference
        Then I see the video conference options muted 'on', waiting room 'off' and all moderators 'on'

        # teacher restarts the video conference with options switched back
        When I set the video conference options muted 'off', waiting room 'on' and all moderators 'off'
        When I start the video conference from the configuration dialog
        Then the video conference is 'RUNNING' with stored options muted 'off', waiting room 'on' and all moderators 'off'

        # student joins as viewer again, the removed moderator option is not applied anymore
        Given I am logged in as a '<student>' at '<namespace>'
        Then joining the video conference via API gives me the role 'VIEWER'

        # post-condition: teacher deletes the course
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given course with name '<course_name>' is deleted

        @school_api_test
        Examples:
            | admin      | teacher      | student      | namespace | course_name                 | fullname_teacher  | fullname_student  |
            | admin1_nbc | teacher1_nbc | student1_nbc | nbc       | CypressAut Course VC Options | cypress teacher_1 | cypress student_1 |
