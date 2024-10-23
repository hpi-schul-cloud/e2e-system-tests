@unstable_test
Feature: Course - To launch a ctl tool in a course

    As a teacher I want to launch a ctl tool in my course.

    #  @stable_test
    #  Scenario: Pre-test: Creating all users and creating course
    #    Given I am logged in as a 'admin1_nbc' at 'nbc'
    #    Given I am logged in as a 'teacher1_nbc' at 'nbc'
    #    Given I am logged in as a 'student1_nbc' at 'nbc'

    # @unstable_test
    # Scenario: Pre-test: Admin creates a course and adds external tools to school
    #     Given I am logged in as a 'admin1_nbc' at 'nbc'
    #     When I go to courses overview

        #    Admin creates a course
        # When I click on FAB to create a new course depending on sub menu
        # Then I see section one area on the course create page
        # When I enter the course title 'LTI Cypress Test Course - Launch Tools'
        # When I select 'Karl Herzog' from field teacher
        # When I click on button Next Steps after entering the course detail in section one
        # Then I see section two area on the course create page
        # When I select 'Amelia Strobl' from field student
        # When I click on button Next Steps after selecting course participant details
        # Then I see the section three area as the finish page
        # When I click on button To Course Overview on the finish page

        # #   Admin adds tools via selection
        # When I click on administration in menu
        # When I navigate to new school admin page via sub menu
        # When I click on external tools panel
        # When I click the add external tool button
        # When I select the tool 'CY LTI1.1 Test Tool' from available tools
        # When I click on save external tool button
        # Then I see the tool 'CY LTI1.1 Test Tool' in external tools table
        # When I click the add external tool button

    @unstable_test
    Scenario: Teacher adds and launches a tool
        Given I am logged in as a 'teacher1_nbc' at 'nbc'
        When I go to courses overview
        When I go to course 'LTI Cypress Test Course - Launch Tools'
        Then I see course page 'LTI Cypress Test Course - Launch Tools'
        When I click on the tools tab
        Then I see the button to add a tool

        #    Teacher adds a LTI1.1 tool
        # When I click on the button to add a tool
        # Then I see the tool configuration page title
        # When I click on the tool configuration selection
        # When I select the tool 'CY LTI1.1 Test Tool' from available tools
        # Then I see tool 'CY LTI1.1 Test Tool' is selected
        # When I click on save external tool button
        # Then I see the tool 'CY LTI1.1 Test Tool' in the tool overview

        #    Teacher tries to launch  tool
        When I launch tool 'CY LTI1.1 Test Tool'
        # Then I see the browser navigates to external tool url

    # @unstable_test
    # Scenario: Post-test: Teacher deletes course, admin deletes external tools
    #     Given I am logged in as a 'teacher1_nbc' at 'nbc'
        # When I go to courses overview
        # When I go to course 'LTI Cypress Test Course - Launch Tools'
        # When I open page Edit course
        # When I click on the button delete course
        # Then I see the modal to confirm the deletion
        # When I click on the button delete on the modal to confirm the course deletion
        # Then I do not see the course 'LTI Cypress Test Course - Launch Tools' on the course overview page

        #     Admin deletes external tools
        # Given I am logged in as a 'admin1_nbc' at 'nbc'
        # When I click on administration in menu
        # When I navigate to new school admin page via sub menu
        # When I click on external tools panel
        # Then I see the external tools table

        # When I click on delete button of tool 'CY LTI1.1 Test Tool'
        # When I confirm deletion on deletion dialog
