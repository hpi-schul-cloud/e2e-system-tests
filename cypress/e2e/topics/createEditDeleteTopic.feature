@regression_test
@pr
@stable_test
@schedule_run
Feature: Topics - To create, edit and delete topics by the teacher.

    As a teacher I want to create, edit and delete a new topic so that the student can see it

    Scenario: Teacher creates, edits and deletes a topic in the course, including pre-conditions

        # pre-condition: admin, teacher and student log in to create their account in a same school
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given I am logged in as a '<admin>' at '<namespace>'

        # pre-condition: admin creates a course and assign teacher to the course
        When I go to rooms overview
        When I click on FAB to create a new room depending on sub menu
        Then I see section one area on the course create page
        When I enter the course title 'CypressAut Test Creation and Deletion'
        When I select room colour as red
        Then I select teacher '<fullname_teacher>' is selected by default
        Then I see substitute teacher selection box
        Then I see date pickers to start and end the course as per school year
        Then I see button to create a course time table container
        When I click on button Next Steps after entering the room detail in section one
        Then I see section two area on the course create page
        Then I see class selection box to select the class for the room
        Then I see student selection box to select the student for the room
        # Note: student user is not needed in this feature so this step is commented out
        #When I select the student 'cypress student_1' in the list
        When I click on button Next Steps after selecting room participant details
        Then I see the section three as the finish page
        When I click on button To Course Overview on the finish page
        # Note: this step is not applicable for the admin user
        #Then I see the course 'CypressAut Test Creation and Deletion' on the room overview page

        # teacher creates topic in a course
        Given I am logged in as a '<teacher>' at '<namespace>'
        When I go to rooms overview
        When I go to room 'CypressAut Test Creation and Deletion'
        And I click on FAB to create new content
        And I click on New Topic FAB
        Then I can see edit topic page '-'
        When I enter topic title 'CypressAut Topic Creating and Deleting Test'
        When I click on button Add Text to topic
        Then I can see form element Text on position '0'
        When I enter title 'CypressAut Title for Text Element in Topic' into element Text in element position '0'
        When I enter description 'CypressAut this is the description of the topic. It is used for automated Cypress tests.' into element Text in element position '0'
        When I click on button Add GeoGebra to topic
        When I enter title "CypressAut Title for GeoGebra Element in Topic" into element GeoGebra
        When I enter GeoGebra material ID 'kEBfU7AR'
        When I click on button Add Learning Material to topic
        When I enter title 'CypressAut Title for Learning Material Element in Topic' into element Learning Material
        Then I see second learning material button in the content area
        # Note: currently step for adding material is excluded because this process is via new browser window
        When I click on button Add Etherpad to topic
        When I enter title 'CypressAut Title for Etherpad Element in Topic' into element Etherpad in element position '3'
        When I enter description for the ether pad 'this is my epad description' in element position '3'
        When I click on button Add Task to topic
        When I enter title 'CypressAut Title for Task Element in Topic' into element Task
        When I enter URL of the task from the another course for task id '59cce3f6c6abf042248e888d'
        When I click on create button to create topic
        Then I can see edit topic page 'CypressAut Topic Creating and Deleting Test'
        When I click on save button to save changes
        Then I see topic detail page "CypressAut Topic Creating and Deleting Test" with content elements "CypressAut Title for Text Element in Topic", "CypressAut Title for GeoGebra Element in Topic", "CypressAut Title for Learning Material Element in Topic", "CypressAut Title for Etherpad Element in Topic" and "CypressAut Title for Task Element in Topic"
        When I navigate back to course detail page via breadcrump menu
        Then I can see topic 'CypressAut Topic Creating and Deleting Test' on course page

        # teacher edits the topic
        When I go to rooms overview
        When I go to room 'CypressAut Test Creation and Deletion'
        When I click on three dot menu of topic 'CypressAut Topic Creating and Deleting Test'
        When I click on Edit in dot menu of topic
        Then I can see edit topic page 'CypressAut Topic Creating and Deleting Test'
        When I enter topic title 'CypressAut Topic Creating and Deleting Test - Edited topic'
        When I click on save button to save changes
        Then I can see topic 'CypressAut Topic Creating and Deleting Test - Edited topic' on course page
        When I click on topic 'CypressAut Topic Creating and Deleting Test - Edited topic' on course page
        Then I see topic detail page "CypressAut Topic Creating and Deleting Test - Edited topic" with content elements "CypressAut Title for Text Element in Topic", "CypressAut Title for GeoGebra Element in Topic", "CypressAut Title for Learning Material Element in Topic", "CypressAut Title for Etherpad Element in Topic" and "CypressAut Title for Task Element in Topic"
        When I click on icon Pen on topic page
        Then I can see edit topic page 'CypressAut Topic Creating and Deleting Test - Edited topic'
        When I click on settings and remove option of element '0'
        When I click on save button to save changes
        Then I can see content 'CypressAut Topic Creating and Deleting Test - Edited topic' on topic page
        Then I can not see content 'CypressAut Title for Text Element in Topic' on current page
        When I click on button Edit on topic page
        Then I can see edit topic page 'CypressAut Topic Creating and Deleting Test - Edited topic'
        When I click on button Add Text to topic
        Then I can see form element Text on position '4'
        When I enter title 'CypressAut New text element Title' into element Text in element position '4'
        When I enter description 'CypressAut New this is the description of the topic. It is used for automated Cypress tests.' into element Text in element position '4'
        # Note: steps for later implementation are commented out
        # When I load up a file 'example_jpg.jpg' to the description of form element Text on position '4'
        # When I move Text element on position '4' to position '3'
        # Then I can see form element Text on position '3'
        # Then I can see form element Task on position '4'
        When I enter title 'CypressAut Title for Etherpad Element in Topic Changed' into element Etherpad in element position '2'
        When I enter description for the ether pad 'changed etherpad description' in element position '2'
        When I click on save button to save changes
        Then I see topic detail page "CypressAut Topic Creating and Deleting Test - Edited topic" with content elements "CypressAut Title for GeoGebra Element in Topic", "CypressAut Title for Learning Material Element in Topic", "CypressAut Title for Etherpad Element in Topic Changed", "CypressAut Title for Task Element in Topic" and "CypressAut New text element Title"
        # Note: steps for later implementation are commented out
        # Then I see file 'example_jpg.jpg' on topic page
        # When I click on button Edit on topic page
        # Then I can see form element Text on position '3'
        # Then I can see form element Task on position '4'
        # When I click button Cancel
        # Then I see topic detail page "CypressAut Topic Creating and Deleting Test - Edited topic" with content elements "CypressAut Title for GeoGebra Element in Topic", "CypressAut Title for Learning Material Element in Topic", "CypressAut Title for Etherpad Element in Topic Changed", "CypressAut Title for Task Element in Topic" and "CypressAut New text element Title"
        When I navigate back to course detail page via breadcrump menu
        Then I can see topic 'CypressAut Topic Creating and Deleting Test - Edited topic' on course page

        # teacher deletes the topic
        When I go to rooms overview
        When I go to room 'CypressAut Test Creation and Deletion'
        When I click on three dot menu of topic 'CypressAut Topic Creating and Deleting Test - Edited topic'
        When I click on Delete in dot menu of topic
        When I click on Cancel in confirmation window
        Then I can see topic 'CypressAut Topic Creating and Deleting Test - Edited topic' on course page
        When I click on three dot menu of topic 'CypressAut Topic Creating and Deleting Test - Edited topic'
        When I click on Delete in dot menu of topic
        When I click on Delete in confirmation window
        Then I can not see topic 'CypressAut Topic Creating and Deleting Test - Edited topic' on course page

        @school_api_test
        Examples:
            | namespace | admin      | teacher      | fullname_teacher  |
            | brb       | admin1_brb | teacher1_brb | cypress teacher_1 |

        @staging_test
        Examples:
            | namespace | admin      | teacher      | fullname_teacher |
            | brb       | admin1_brb | teacher1_brb | Karl Herzog      |