Feature: Admin creates, reads, updates and deletes students

    As an admin, I want to perform the 4 CRUD operations on students

    Scenario Outline: Admin creates a student
        Given I am logged in as '<user>' on '<env>'
        When Created student 'John' 'Student' with email 'john.student@mail.tld' and send link
        And I am on the students management page
        And Going to student edit page for 'John' with email 'john.student@mail.tld'
        And Going to student registration page for 'John' with email 'john.student@mail.tld' on '<env>'

    Examples:
        | env | user       |
        | dbc | admin1_dbc |

    # Scenario Outline: Student can register in the SVS
    #     Given I am on the login page on '<env>'
    #     When I am logging in with 'john.student@mail.tld' and ''

    # Examples:
    #     | env | user       |
    #     | dbc | admin1_dbc |

