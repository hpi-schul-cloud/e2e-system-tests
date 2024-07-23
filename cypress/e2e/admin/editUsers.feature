Feature: Editing Users - Editing user information in the SVS

    As a user, I want to edit other users account information

    Scenario Outline: An admin can edit teacher user informa
        Given I am logged in as '<admin>' on '<env>'
        And Opened management page for teachers on '<env>'
        And Created teacher 'John' 'Teacher' with email 'john.teacher@mail.tld'
        And Created student 'John' 'Student' with email ''
        Then I can edit teacher with 'john.teacher@mail.tld'
        Then I can update firstname with 'Jane'
        Then I can update lastname with 'Doe'
        Then I can update email with 'jane.doe@mail.tld'
        Then I can save the user changes
        Then I will be able to logout

        Examples:
            | env | admin      |
            | brb | admin1_brb |
            # | dbc | admin1_dbc |
            # | nbc | admin1_nbc |


