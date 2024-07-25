Feature: Self Service

    As as user, I can change my own user information

    Scenario: Updating my own information
        Given I am logged in as '<user>' on '<env>'
        Then I am opening the settings

    Examples:
        | env | user         |
        | dbc | admin1_dbc   |
        | dbc | teacher1_dbc |
        | dbc | student1_dbc |