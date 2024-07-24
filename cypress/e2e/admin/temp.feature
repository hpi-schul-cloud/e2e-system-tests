Feature: Temp flows

    Scenario Outline: Admin can edit teachers user infromation
        Given I am logged in as '<user>' on '<env>'
        When Created teacher 'John' 'Teacher' with email 'john.teacher@mail.tld'
        Then Going to teacher edit page for 'John' with email 'john.teacher@mail.tld'

    Examples:
        | env | user       |
        | dbc | admin1_dbc |

    Scenario: Admin changes teachers user information
        Given I am logged in as '<user>' on '<env>'
        And Going to teacher edit page for 'John' with email 'john.teacher@mail.tld'
        When Changing the name to 'Jane' 'Doe'
        And Changing the email to 'jane.doe@mail.tld'
        Then I can save the changes

    Examples:
        | env | user       |
        | dbc | admin1_dbc |

    Scenario Outline: Admin reverts teacher user information changes
        Given I am logged in as '<user>' on '<env>'
        And Going to teacher edit page for 'Jane' with email 'jane.doe@mail.tld'
        When Changing the name to 'John' 'Teacher'
        And Changing the email to 'john.teacher@mail.tld'
        Then I can save the changes

    Examples:
        | env | user       |
        | dbc | admin1_dbc |

    # Scenario Outline: Admin can edit students user information
    # Given I am logged in as '<user>' on '<env>'
    # And Created student 'John' 'Student' with email 'john.student@mail.tld' on '<env>'

    # Examples:
    #     | env | user       |
    #     | dbc | admin1_dbc |