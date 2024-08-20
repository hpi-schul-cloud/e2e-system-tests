@stable_test
@regression_test
@pr
@schedule_run
Feature: Course - To add and delete a course by the teacher

    As a teacher I want to create a new course and want to delete the newly created test course/room so that list of courses/rooms can be cleaned and not full with the newly created test courses/rooms.


    Scenario: Create, edit and delete course
        # pre-conditions: creating users
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<student>' at '<namespace>'

        # teacher creates course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        When I click on FAB to create a new room depending on sub menu
        Then I see section one area on the course create page
        When I enter the course title '<course_title>'
        When I select room colour as red
        Then I see teacher '<fullname_teacher>' is selected by default
        Then I see substitute teacher selection box
        Then I see date pickers to start and end the course as per school year
        Then I see button to create a course time table container
        When I click on button Next Steps after entering the room detail in section one
        Then I see section two area on the course create page
        Then I see class selection box to select the class for the room
        Then I see student selection box to select the class for the room
        When I select the student '<student_listname>' in the list
        When I click on button Next Steps after selecting room participant details
        Then I see the section three area as the finish page
        When I click on button To Course Overview on the finish page
        Then I see the course '<course_title>' on the room overview page

        # teacher edits the course
        When I go to room '<course_title>'
        When I open page Edit course
        Then I see page Edit course
        When I edit the title of the room to '<course_title_edited>'
        When I edit the room description to '<course_description>'
        When I click on button Save changes in page Edit course
        Then I see the course '<course_title_edited>' on the room overview page

        # student sees the course
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to rooms overview
        Then I see the course '<course_title_edited>' on the room overview page
        When I go to room '<course_title_edited>'
        Then I see room page '<course_title_edited>'

        # Deleting the course/room created in this feature test
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        When I go to room '<course_title_edited>'
        When I open page Edit course
        When I click on the button delete course
        Then I see the modal to confirm the deletion
        When I click on the button delete on the modal to confirm the course deletion
        Then I do not see the course '<course_title_edited>' on the room overview page

        # student does not see the course anymore
        Given I am logged in as a '<student>' at '<namespace>'
        When I go to rooms overview
        Then I do not see the course '<course_title_edited>' on the room overview page

        @staging_test
        Examples:
            | namespace | teacher      | fullname_teacher | student      | student_listname | course_title                          | course_title_edited      | course_description               |
            | brb       | teacher1_brb | Karl Herzog      | student1_brb | Herbert Kraft    | CypressAut Test Creation and Deletion | CypressAut Testkurs Edit | cy edit this is test description |

        # Note: This can not be run against BRB/NBC because student visibility is forbidden for Teacher while creating a new course.
        @school_api_test
        Examples:
            | namespace | teacher      | fullname_teacher  | student      | student_listname  | course_title                          | course_title_edited      | course_description               |
            | dbc       | teacher1_dbc | cypress teacher_1 | student1_dbc | cypress student_1 | CypressAut Test Creation and Deletion | CypressAut Testkurs Edit | cy edit this is test description |


# Note: Need to confirm below scenarios can be removed or on purppose kept and commented?
#Scenario: Create, edit and delete course - for staging

# teacher creates course
#Given I am logged in as a '<teacher>' at '<namespace>'
# When I go to rooms overview
#When I click on FAB to create a new room depending on sub menu
#Then I see section one area on the course create page
#When I enter the course title '<course_title>'
#When I select room colour as red
#Then I see teacher '<fullname_teacher>' is selected by default
#Then I see substitute teacher selection box
#Then I see date pickers to start and end the course as per school year
#Then I see button to create a course time table container
#When I click on button Next Steps after entering the room detail in section one
#Then I see section two area on the course create page
# Then I see class selection box to select the class for the room
# Then I see student selection box to select the class for the room
# When I select the student '<student_listname>' in the list
#When I click on button Next Steps after selecting room participant details
#Then I see the section three area as the finish page
#When I click on button To Course Overview on the finish page
#Then I see the course '<course_title>' on the room overview page

# teacher edits the course
#When I go to room '<course_title>'
# When I open page Edit course
#Then I see page Edit course
#When I edit the title of the room to '<course_title_edited>'
#When I edit the room description to '<course_description>'
# When I click on button Save changes in page Edit course
#Then I see the course '<course_title_edited>' on the room overview page

# # student sees the course
#   Given I am logged in as a '<student>' at '<namespace>'
#   When I go to rooms overview
#   Then I see the course '<course_title_edited>' on the room overview page
#   When I go to room '<course_title_edited>'
#   Then I see room page '<course_title_edited>'

# Deleting the course/room created in this feature test
#Given I am logged in as a '<teacher>' at '<namespace>'
#When I go to rooms overview
#When I go to room '<course_title_edited>'
#When I open page Edit course
#When I click on the button delete course
#Then I see the modal to confirm the deletion
#When I click on the button delete on the modal to confirm the course deletion
#Then I do not see the course '<course_title_edited>' on the room overview page

# # student does not see the course anymore
#   Given I am logged in as a '<student>' at '<namespace>'
#   When I go to rooms overview
#   Then I do not see the course '<course_title_edited>' on the room overview page

#@staging_test
#Examples:
#| namespace | teacher      | fullname_teacher | student      | student_listname | course_title                          | course_title_edited      | course_description               |
#| brb       | teacher1_brb | Karl Herzog      | student1_brb | Kraft, Herbert   | CypressAut Test Creation and Deletion | CypressAut Testkurs Edit | cy edit this is test description |



#   Scenario: Create, edit and delete course - for staging environments
#   # pre-conditions: creating users
#     Given I am logged in as a '<teacher>' at '<namespace>'
#     # When I go to rooms overview
#     # When I delete all courses named 'Cypress Test Creation and Deletion' -> do we need this for staging?
#     # Then I do not see the course 'Cypress Test Creation and Deletion' on the room overview page -> do we need this for staging?
#     # When I delete all courses named 'Cypress Testkurs Edit' -> do we need this for staging?
#     # Then I do not see the course 'Cypress Testkurs Edit' on the room overview page -> do we need this for staging?

# # teacher creates course
#     When I go to rooms overview
#     When I click on FAB to create a new room depending on sub menu
#     Then I see section one area on the course create page
#     When I enter the course title '<course_title>'
#     When I select room colour as red
#     Then I see teacher '<fullname_teacher>' is selected by default
#     Then I see substitute teacher selection box
#     Then I see date pickers to start and end the course as per school year
#     Then I see button to create a course time table container
#     When I click on button Next Steps after entering the room detail in section one
#     Then I see section two area on the course create page
#   #  Then I see class selection box to select the class for the room
#   #  Then I see student selection box to select the class for the room
#     When I click on button Next Steps after selecting room participant details
#     Then I see the section three area as the finish page
#     When I click on button To Course Overview on the finish page
#     Then I see the course '<course_title>' on the room overview page

#   # teacher edits the course
#     When I go to room '<course_title>'
#     When I open page Edit course
#     Then I see page Edit course
#     When I edit the title of the room to '<course_title_edited>'
#     When I edit the room description to '<course_description>'
#     When I click on button Save changes in page Edit course
#     Then I see the course '<course_title_edited>' on the room overview page

#   # Deleting the course/room created in this feature test
#     When I open page Edit course
#     When I click on the button delete course
#     Then I see the modal to confirm the deletion
#     When I click on the button delete on the modal to confirm the course deletion
#     Then I do not see the course '<course_title_edited>' on the room overview page

#     @staging_test
#     Examples:
#       | namespace | teacher      | fullname_teacher | course_title                          | course_title_edited      | course_description               |
#       | brb       | teacher1_brb | Karl Herzog      | CypressAut Test Creation and Deletion | CypressAut Testkurs Edit | cy edit this is test description |