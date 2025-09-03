@stable_test
@regression_test
@group-F

# NOTE: This feature is only for staging due to a limitation in the admin API: it cannot create a new course without a teacher.
# NOTE: The course without a teacher but with student should pre-exist in the staging environment.

Feature: Course Management - Visibility of courses without a teacher assigned

    As an admin
    I want to see which courses do not have a teacher assigned
    So that I can easily manage and update course assignments

    As a student
    I want to see a lock icon on courses without assigned teachers
    So that I know which courses I cannot access

    Scenario Outline: Course without teacher is visible to admin but inaccessible to student

        # pre-condition: creating a user and logging in
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # admin sees the course without a teacher assigned
        When I click on administration in menu
        When I navigate to course administration page via the submenu
        Then I see the new course administration page
        Then I see 2 tabs
        When I click on the tab Current
        Then I see the course '<course_without_teacher>' on the new course administration page
        Then I see the icon Alert in the column Teacher
        When I click on the toggle Only show courses without teachers
        Then I see the course '<course_without_teacher>' on the new course administration page

        # student can not access the course without a teacher assigned
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to courses overview
        Then I see the icon Lock in the course '<course_without_teacher>'
        When I click on the locked course '<course_without_teacher>'
        Then I see a message that the course is not accessible

        @staging_test
        Examples:
            | admin      | student      | namespace | course_without_teacher         |
            | admin1_nbc | student1_nbc | nbc       | cypress-course-without-teacher |
