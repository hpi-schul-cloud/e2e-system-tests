Feature: Admin creates, reads, updates and deletes students

    As an admin, I want to perform the 4 CRUD operations on students

    Scenario Outline: Admin creates a student
        Given I am logged in as '<user>' on '<env>'
        When Created student 'John' 'Student' with email 'john.student@mail.tld'
        Then I am on the students management page
        And Student 'John' with email 'john.student@mail.tld' was created
        When Register 'john.student@mail.tld' with link

    Examples:
        | env | user       |
        | dbc | admin1_dbc |

    # Scenario Outline: Student can register in the SVS
    #     Given I am on the login page on '<env>'
