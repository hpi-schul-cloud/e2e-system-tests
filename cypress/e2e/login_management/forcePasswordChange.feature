Feature: Admin initiates a password change for a user

    As an admin, I want to perform the 4 CRUD operations on students

    Scenario Outline: Admin creates a student and forces a password change
        Given I am logged in as '<user>' on '<env>'
        And Created student 'John' 'Student' with email 'john.student@mail.tld'
        And Student 'John' with email 'john.student@mail.tld' was created
        And Registering student 'John' with email 'john.student@mail.tld'
        And I am on the students management page
        When Going to student edit page for 'John' with email 'john.student@mail.tld'
        Then Changing the password to 'Password1!'
        And Clear session

    Examples:
        | env | user       |
        | dbc | admin1_dbc |


    Scenario Outline: Student changes password after forced password change
        Given I am on the login page on '<env>'
        Given 'john.student@mail.tld' 'Password1!' force password change

    Examples:
        | env |
        | dbc |

    Scenario Outline: Admin creates a teacher and forces a password change
        Given I am logged in as '<user>' on '<env>'
        And Created teacher 'John' 'Teacher' with email 'john.teacher@mail.tld'
        And Teacher 'John' with email 'john.teacher@mail.tld' was created
        And Registering teacher 'John' with email 'john.teacher@mail.tld'
        And I am on the teachers management page
        When Going to teacher edit page for 'John' with email 'john.teacher@mail.tld'
        Then Changing the password to 'Password1!'
        And Clear session

    Examples:
        | env | user       |
        | dbc | admin1_dbc |


    Scenario Outline: Teacher changes password after forced password change
        Given I am on the login page on '<env>'
        Given 'john.teacher@mail.tld' 'Password1!' force password change

    Examples:
        | env |
        | dbc |