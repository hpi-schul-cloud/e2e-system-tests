@release
@stable_test
Feature: Force Password Change - user must set a new password during login

    As a user, I have to set a new password during login

    Scenario Outline: Admin sets new password for student
        Given I am logged in as '<user>' on '<env>'
        And I am on the students management page
        And Going to student edit page for 'Amelia' with email 'amelia.strobl.qa@schul-cloud.org'
        When I am able to set a new password
        Then Changing the password to 'Password1!'

    Examples:
        | env | user       |
        | dbc | admin1_dbc |
        | brb | admin1_brb |
        | nbc | admin1_nbc |

    Scenario Outline: Student must set a new password
        Given I am on the login page on '<env>'
        And I am logging with email 'amelia.strobl.qa@schul-cloud.org' and password 'Password1!'
        When I am changing my password back for '<user>'
        Then I am on the dashboard page

    Examples:
        | env | user         |
        | dbc | student2_dbc |
        | brb | student2_brb |
        | nbc | student2_nbc |

    Scenario Outline: Admin sets new password for teacher
        Given I am logged in as '<user>' on '<env>'
        And I am on the teachers management page
        And Going to teacher edit page for 'Lara' with email 'lara.teacher.qa@schul-cloud.org'
        When I am able to set a new password
        Then Changing the password to 'Password1!'

    Examples:
        | env | user       |
        | dbc | admin1_dbc |
        | brb | admin1_brb |
        | nbc | admin1_nbc |

    Scenario Outline: Teacher must set a new password
        Given I am on the login page on '<env>'
        And I am logging with email 'lara.teacher.qa@schul-cloud.org' and password 'Password1!'
        When I am changing my password back for '<user>'
        Then I am on the dashboard page

    Examples:
        | env | user         |
        | dbc | teacher2_dbc |
        | brb | teacher2_brb |
        | nbc | teacher2_nbc |
