@only
Feature: Admin creates, reads, updates and deletes students

    As an admin, I want to perform the 4 CRUD operations on students

    Scenario Outline: Admin creates a student
        Given I am logged in as '<user>' on '<env>'
        When Created student 'John' 'Student' with email 'john.student@mail.tld'
        Then I am on the students management page
        And Student 'John' with email 'john.student@mail.tld' was created

    Examples:
        | env | user       |
        | dbc | admin1_dbc |
        | brb | admin1_brb |
        | nbc | admin1_nbc |

    Scenario Outline: Admin manually registers student
        Given I am logged in as '<user>' on '<env>'
        And I am on the students management page
        When Registering student 'John' with email 'john.student@mail.tld'
        Then I am on the students management page
        And Going to student edit page for 'John' with email 'john.student@mail.tld'
        Then I am able to set a new password

    Examples:
        | env | user       |
        | dbc | admin1_dbc |
        | brb | admin1_brb |
        | nbc | admin1_nbc |

    Scenario Outline: Admin changes students user information
        Given I am logged in as '<user>' on '<env>'
        And I am on the students management page
        And Going to student edit page for 'John' with email 'john.student@mail.tld'
        When Changing the password to 'Password1!'
        And Changing the name to 'Jane' 'Doe'
        And Changing the email to 'jane.doe@mail.tld'
        And Changing parents and students consent
        Then I can save the changes

    Examples:
        | env | user       |
        | dbc | admin1_dbc |
        | brb | admin1_brb |
        | nbc | admin1_nbc |

    Scenario Outline: Admin reverts student user information
        Given I am logged in as '<user>' on '<env>'
        And I am on the students management page
        And Going to student edit page for 'Jane' with email 'jane.doe@mail.tld'
        When Changing the name to 'John' 'Student'
        And Changing the email to 'john.student@mail.tld'
        Then I can save the changes

    Examples:
        | env | user       |
        | dbc | admin1_dbc |
        | brb | admin1_brb |
        | nbc | admin1_nbc |

    Scenario Outline: Admin deletes a student
        Given I am logged in as '<user>' on '<env>'
        And I am on the students management page
        And Going to student edit page for 'John' with email 'john.student@mail.tld'
        When Deleting the user
        Then I am on the students management page
        And 'John' with email 'john.student@mail.tld' was deleted

    Examples:
        | env | user       |
        | dbc | admin1_dbc |
        | brb | admin1_brb |
        | nbc | admin1_nbc |
