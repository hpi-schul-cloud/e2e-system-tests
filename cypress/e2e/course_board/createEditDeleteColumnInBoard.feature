@release
Feature: To create, edit and delete column in the course board

As a teacher I want to create, edit and delete the column in the course board so that I can manage the column in the board.

@stable_test
Scenario Outline:  Teacher is able to create, edit and delete a column in the course board

# Teacher adds a course
Given I am logged in as a '<user>' at '<namespace>'
When I go to rooms overview
When I click on FAB to create a new room
When I enter the course title '<course-title>'
When I click on button Next Steps after entering the room detail in section one
Then I see section two area on the course create page
When I click on button Next Steps after selecting room participant details
Then I see the section three area as the finish page
When I click on button To Course Overview on the finish page
Then I see the course '<course-title>' on the room overview page

# teacher adds course board to the course
When I go to room '<course-title>'
#When I go to the tab contents in course detail page
When I click on FAB to create new content
When I click on FAB option New board
Then I see the course board title is '<default-board-title>'
When I click on 3-dot-menu for Board title
When I select the option Edit for board title
When I enter new board title '<new-board-title>'
Then I see the course board title is '<new-board-title>'


# Teacher adds a new column
When I click on the button Add column
When I enter the column title name 'my test cycycycy column' on position '0'
When I click on the page outside of the column
#Then I see my column named 'my test cycycycycyc column'
#Then I click on the button with the Icon Plus to add a new card in the column

#When I click on card Course Board
#Then I see the page title in Course Board page
#Then I see the existing card with welcome message in the existing column
#When I click on the button Add column
#When I enter the title name 'my test cycycycy column'
#When I click on the page outside of the column
#Then I see my column named 'my test cycycycycyc column'
#Then I click on the button with the Icon Plus to add a new card in the column

# Teacher edits the column
#When I click on three dot menu in the column
#When I select the Edit option in the drop down menu
#When I enter the column title name 'edit test cycycycycyc column' on position '0'
#When I click on the page outside of the column
#Then I see my column named 'edit test cycycycycyc column'

# Teacher deletes the column
#When I click on three dot menu in the column
#When I select the Delete option in the drop down
#Then I see the confirmation Modal
#When I click on the button Remove on the Modal
#Then I do not see the column

# Teacher deletes the course
When I go to rooms overview
When I go to room '<course-title>'
When I open page Edit course
When I click on the button delete course
Then I see the modal to confirm the deletion
When I click on the button delete on the modal to confirm the course deletion
Then I do not see the course '<course-title>' on the room overview page





    Examples:
      | user         | namespace | course-title      | default-board-title | new-board-title        |
      | teacher1_brb | brb       | CY-Course         | Kurs-Board          | Cy Test board          |