Feature: Temp flows

    Scenario Outline: Admin can edit students user information
    Given I am logged in as '<admin>' on '<env>'
    And Created student 'John' 'Student' with email 'john.student@mail.tld' on '<env>'
    When I am editing student 'john.student@mail.tld' on '<env>'


    Examples:
        | env | admin      |
        | brb | admin1_brb |