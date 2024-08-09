@release
@unstable_test
Feature: Self Service

    As as user, I can change my own user information

    IMPORTANT: This test is higly unstable, because it changes the user credentials temporary
    and reverts them. If no completed successfully, other tests will be heavily affected and will most likely fail.
    So only trigger this test manually and with caution.

    Scenario: User updates their own user information
        Given I am logged in as '<user>' on '<env>'
        And I am on the account settings page
        When I am changing my email to '<email>'
        And I '<user>' am changing my password to 'Password1!'
        And I am saving the changes
        Then Saving was successful

    Examples:
        | env | user         | email                      |
        | dbc | admin1_dbc   | temporary.admin@mail.tld   |
        | dbc | teacher1_dbc | temporary.teacher@mail.tld |
        | dbc | student1_dbc | temporary.student@mail.tld |


    Scenario: User reverts their own user information
        Given I am logged in as '<user>' on '<env>'
        And I am on the account settings page
        When I '<user>' am reverting my email back
        And I '<user>' reverting my password back from 'Password1!'
        And I am saving the changes
        Then Saving was successful

    Examples:
        | env | user         |
        | dbc | admin1_dbc   |
        | dbc | teacher1_dbc |
        | dbc | student1_dbc |
