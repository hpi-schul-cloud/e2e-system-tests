Feature: Admin creates, reads, updates and delete teachers

    As an admin, I want to perform the 4 CRUD operations on teachers

    Scenario Outline: Admin creates a teacher
        Given I am logged in as '<user>' on '<env>'
        When Created teacher 'John' 'Teacher' with email 'john.teacher@mail.tld'
        Then I am on the teachers management page
        And Teacher 'John' with email 'john.teacher@mail.tld' was created

    Examples:
        | env | user       |
        | dbc | admin1_dbc |

    Scenario: Admin changes teachers user information
        Given I am on the teachers management page
        And Going to teacher edit page for 'John' with email 'john.teacher@mail.tld'
        When Changing the name to 'Jane' 'Doe'
        And Changing the email to 'jane.doe@mail.tld'
        And Changing consent for the teacher
        Then I can save the changes

    Scenario: Admin reverts teacher user information
        Given I am on the teachers management page
        And Going to teacher edit page for 'Jane' with email 'jane.doe@mail.tld'
        When Changing the name to 'John' 'Teacher'
        And Changing the email to 'john.teacher@mail.tld'
        Then I can save the changes

    Scenario: Admin deletes a teacher
        Given I am on the teachers management page
        And Going to teacher edit page for 'John' with email 'john.teacher@mail.tld'
        When Deleting the user
        Then I am on the teachers management page
        And 'John' with email 'john.teacher@mail.tld' was deleted
