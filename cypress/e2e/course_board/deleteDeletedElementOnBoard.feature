@unstable_test
Feature: Course Board - Deleting a placeholder element for deleted content

    Scenario Outline: Student can see outdated dialog for outdated tool
        Given I am logged in as a 'student2_nbc' at 'nbc'
        When I go to courses overview
        When I go to course 'German'
        When I click on card Course Board
        Then I cannot see any deleted elements

    Scenario Outline: Teacher deletes a placeholder element for deleted content
        Given I am logged in as a 'teacher1_nbc' at 'nbc'
        When I go to courses overview
        When I go to course 'German'
        When I click on card Course Board
        When I click on three dot menu in the card
        When I select the option Edit in three dot menu on the card
        When I click on three dot menu on the deleted element
        When I select the option Delete in three dot menu on the card
        When I click on the button Remove on the Modal
        Then I cannot see any deleted elements

