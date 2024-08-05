@pr
@release
@stable_test
Feature: Register an already existing teacher with the registration link

    As a teacher, I want to register in the SVS

    Scenario Outline: Setup
        Given I am logged in as '<user>' on '<env>'
        When Created teacher 'John' 'Teacher' with email 'john.teacher@mail.tld'
        Then I am on the teachers management page

    Examples:
        | env | user       |
        | dbc | admin1_dbc |
        | brb | admin1_brb |
        | nbc | admin1_nbc |

    Scenario Outline: Teacher can registers in the SVS with the registration link
        Given I am logged in as '<user>' on '<env>'
        And I am on the teachers management page
        When Going to teacher edit page for 'John' with email 'john.teacher@mail.tld'
        And Going to teacher registration page
        And I am registering as teacher with email 'john.teacher@mail.tld' and password 'Password1!' on '<env>'
        Then I am able to logout

    Examples:
        | env | user       |
        | dbc | admin1_dbc |
        | brb | admin1_brb |
        | nbc | admin1_nbc |

    Scenario Outline: Teardown
        Given I am logged in as '<user>' on '<env>'
        And I am on the teachers management page
        And Going to teacher edit page for 'John' with email 'john.teacher@mail.tld'
        When Deleting the user
        Then I am on the teachers management page

    Examples:
        | env | user       |
        | dbc | admin1_dbc |
        | brb | admin1_brb |
        | nbc | admin1_nbc |