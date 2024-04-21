@release
Feature: Course Board - To add a new drawing element on board

    As a teacher I want to create, drawing element on board.

    @stable_test
    Scenario Outline:  Teacher is able to create a drawing element to the course board

        # Teacher add the drawing element to the course column
        Given I am logged in as a 'teacher1_nbc' at 'nbc'
        When I go to rooms overview
        When I go to room 'German'
        When I click on card Course Board
        When I click on open Drawing Element