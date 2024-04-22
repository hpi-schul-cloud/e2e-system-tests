@release
Feature: Course Board - Opening a drawing element on a course page

    As a teacher and student I want to open already created drawing element on a course page

    @stable_test
    Scenario Outline:  Teacher is able to open a drawing element to the course board

        # Teacher add the drawing element to the course column
        Given I am logged in as a 'teacher1_nbc' at 'nbc'
        When I go to rooms overview
        When I go to room 'German'
        When I click on card Course Board
        When I click on open Drawing Element

    @stable_test
    Scenario Outline:  Student is able to open a drawing element to the course board
        Given I am logged in as a 'student2_nbc' at 'nbc'
        When I go to rooms overview
        When I go to room 'German'
        When I click on card Course Board
        When I click on open Drawing Element
