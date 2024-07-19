Feature: Editing users - Administrative users can edit other users

    As an admin, I want to edit teachers and students

    Scenario Outline: Edit something on users
        Given I am logged in as '<user>' on '<env>'

    Examples:
        | env | user       |
        | brb | admin1_brb |