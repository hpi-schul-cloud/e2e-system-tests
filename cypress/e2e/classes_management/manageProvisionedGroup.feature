# Note: To set this test to stable, the school needs groups from moin.schule
@unstable_test
Feature: Class Management - To manage a provisioned group on NBC

    As a teacher I want to manage a provisioned group

    Scenario Outline: Teacher manages a provisioned group
        Given I am logged in as a '<student>' at '<namespace>'
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin activates student visibility
        When I click on administration in menu
        When I navigate to new school admin page via sub menu
        When I click on general settings panel
        When I click the toggle switch to enable student visibility for teachers
        When I click on button Save admin settings

        # teacher manages group
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I click on administration in menu
        When I navigate to class administration page via sub menu
        Then I see the new class administration page
        Then I see the group '<group_name>' with source '<source_name>'
        When I click on the manage button of group '<group_name>'
        Then I see the manage group page
        Then I see the infobox on manage group page
        Then I see the '<role_teacher>' with name '<lastname_teacher>' '<firstname_teacher>' in the group member table
        Then I see the '<role_student>' with name '<lastname_student>' '<firstname_student>' in the group member table

        @staging_test
        Examples:
            | namespace | admin      | teacher      | student      | group_name         | source_name | lastname_teacher | firstname_teacher | lastname_student | firstname_student | role_teacher | role_student |
            | nbc       | admin1_nbc | teacher1_nbc | student1_nbc | Cypress-Test-Group | moin.schule | Herzog           | Karl              | Kraft            | Herbert           | Lehrkraft    | Schüler:in   |

# Note: This test runs with moin.schule groups from the seed data
# @school_api_test
# Examples:
#   | namespace | admin      | teacher      | student      | group_name         | source_name | lastname_teacher | firstname_teacher | lastname_student | firstname_student | role_teacher | role_student |
#   | nbc       | admin1_nbc | teacher1_nbc | student1_nbc | Cypress-Test-Group | moin.schule | teacher_1        | cypress           | student_1        | cypress           | Lehrkraft    | Schüler:in   |
