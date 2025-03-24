@regression_test
@stable_test
Feature: Class Management - To manage a provisioned group on NBC

  As a teacher I want to manage a provisioned group

  Scenario: Teacher manages a provisioned group
    Given I am logged in as a '<student>' at '<namespace>'
    Given I am logged in as a '<teacher>' at '<namespace>'

    # teacher manages group
    When I click on administration in menu
    When I navigate to new administration page via sub menu
    Then I see the new class administration page
    Then I see the group '<group_name>' with source '<source_name>'
    When I click on the manage button of group '<group_name>'
    Then I see the manage group page
    Then I see the infobox on manage group page
    Then I see the '<role_teacher>' with name '<fullname_teacher>' in the group member table
    Then I see the '<role_student>' with name '<fullname_student>' in the group member table

    @staging_test
    Examples:
      | namespace | teacher      | student      | group_name         | source_name | fullname_teacher | fullname_student | role_teacher | role_student |
      | nbc       | teacher1_nbc | student1_nbc | Cypress-Test-Group | moin.schule | HerHerbert Kraft | Karl Herzog      | Lehrkraft    | Schüler:in   |

    # @school_api_test
    # Examples:
    #   | namespace | teacher      | student      | group_name         | source_name | fullname_teacher  | fullname_student  | role_teacher | role_student |
    #   | nbc       | teacher1_nbc | student1_nbc | Cypress-Test-Group | moin.schule | cypress teacher_1 | cypress student_1 | Lehrkraft    | Schüler:in   |
