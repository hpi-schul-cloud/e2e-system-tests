@regression_test
@mikroorm_v7
Feature: Course overview - Grouping and order of courses are persisted

    As a teacher, I want my course groups, their titles and the order of my courses to be kept after a reload and a new login.

    Scenario Outline: Teacher groups, renames, moves and dissolves courses on the course overview

        # pre-condition: teacher logs in and creates three courses
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I create the courses '<course_a>, <course_b>, <course_c>' via API

        # teacher groups two courses and renames the group
        When I move course '<course_b>' onto course '<course_a>' on the course overview via API
        When I rename the group of course '<course_a>' to '<group_title_old>' via API
        Then I see the course group '<group_title_old>' with the courses '<course_a>, <course_b>' via API
        When I rename the group of course '<course_b>' to '<group_title>' via API
        Then I see the course group '<group_title>' with the courses '<course_a>, <course_b>' via API

        # teacher moves a third course into the group and another one to a free position
        When I move course '<course_c>' onto course '<course_a>' on the course overview via API
        Then I see the course group '<group_title>' with the courses '<course_a>, <course_b>, <course_c>' via API
        When I move course '<course_b>' to the free position 3 5 on the course overview via API
        Then I see the course group '<group_title>' with the courses '<course_a>, <course_c>' via API
        Then I see course '<course_b>' ungrouped at position 3 5 via API

        # group title, group members and order are kept after a reload and a new login
        When I remember the course overview layout via API
        When I reload the course overview and wait for the dashboard
        Then I see the course group '<group_title>' on the course overview
        Then I do not see the text '<group_title_old>' on the course overview
        Then I see course '<course_b>' on the course overview
        Given I am logged in as a '<admin>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Then I see the remembered course overview layout via API

        # teacher dissolves the group by moving one of the last two courses out
        When I move course '<course_c>' to the free position 2 5 on the course overview via API
        Then I see no course groups via API
        Then I see course '<course_c>' ungrouped at position 2 5 via API
        Then I see course '<course_b>' ungrouped at position 3 5 via API
        When I remember the course overview layout via API
        When I reload the course overview and wait for the dashboard
        Then I do not see the course group '<group_title>' on the course overview
        Then I see course '<course_a>' on the course overview
        Then I see course '<course_c>' on the course overview
        Then I see the remembered course overview layout via API

        # post-condition: teacher deletes the courses
        When I delete the courses '<course_a>, <course_b>, <course_c>' via the course page
        Then I see no course groups via API

        @school_api_test
        Examples:
            | namespace | admin      | teacher      | course_a            | course_b            | course_c            | group_title_old             | group_title             |
            | brb       | admin1_brb | teacher1_brb | CypressAut Course A | CypressAut Course B | CypressAut Course C | CypressAut Course Group Old | CypressAut Course Group |
