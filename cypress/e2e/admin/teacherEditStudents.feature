Feature: Teacher can edit an existing student

    As a teacher, I want to edit existing students

    Scenario: Admin creates and registers a student
        Given I am logged in as '<user>' on '<env>'
        When Created student 'John' 'Student' with email 'john.student@mail.tld'
        Then I am on the students management page
        And Student 'John' with email 'john.student@mail.tld' was created
        And Registering student 'John' with email 'john.student@mail.tld'

    Examples:
        | env | user       |
        | dbc | admin1_dbc |
        # | brb | admin1_brb |
        # | nbc | admin1_nbc |

    Scenario: Teacher changes students user information
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
        # | brb | admin1_brb |
        # | nbc | admin1_nbc |

    Scenario: Teacher reverts student user information
        Given I am logged in as '<user>' on '<env>'
        And I am on the students management page
        And Going to student edit page for 'Jane' with email 'jane.doe@mail.tld'
        When Changing the name to 'John' 'Student'
        And Changing the email to 'john.student@mail.tld'
        Then I can save the changes

    Examples:
        | env | user       |
        | dbc | admin1_dbc |
        # | brb | admin1_brb |
        # | nbc | admin1_nbc |

    Scenario: Admin deletes a student
        Given I am logged in as '<user>' on '<env>'
        And I am on the students management page
        And Going to student edit page for 'John' with email 'john.student@mail.tld'
        When Deleting the user
        Then I am on the students management page
        And 'John' with email 'john.student@mail.tld' was deleted

    Examples:
        | env | user       |
        | dbc | admin1_dbc |
        # | brb | admin1_brb |
        # | nbc | admin1_nbc |
