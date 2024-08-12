@release
@stable_test
Feature: Student registration with registration link send by admin

    As a student, I want to register in the SVS

    Scenario Outline: Setup
        Given I am logged in as '<user>' on '<env>'
        When Created student 'John' 'Student' with email 'john.student@mail.tld'
        Then I am on the students management page

    Examples:
        | env | user       |
        | dbc | admin1_dbc |

    Scenario Outline: Student can registers in the SVS with the registration link
        Given I am logged in as '<user>' on '<env>'
        And I am on the students management page
        Given Going to student edit page for 'John' with email 'john.student@mail.tld'
        And Going to student registration page
        And I am registering as student with email 'john.student@mail.tld' on '<env>'
        Then I am able to logout

    Examples:
        | env | user       |
        | dbc | admin1_dbc |

    Scenario Outline: Teardown
        Given I am logged in as '<user>' on '<env>'
        And I am on the students management page
        And Going to student edit page for 'John' with email 'john.student@mail.tld'
        When Deleting the user
        Then I am on the students management page

    Examples:
        | env | user       |
        | dbc | admin1_dbc |

