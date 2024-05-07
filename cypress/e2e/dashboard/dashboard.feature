@release
Feature: Dashboard - To check contents on the dashboard

  As a student and a teacher I want to see important information on the dashboard so that I can be updated start working

	@stable_test
	# This scenario is to create the users using api needed for this feature file.
	Scenario: as a pre-condition admin, teacher and student log in to create their account in a same school
		Given I am logged in as a 'admin1_brb' at 'brb'
		Given I am logged in as a 'teacher1_brb' at 'brb'
		Given I am logged in as a 'student1_brb' at 'brb'


	#@stable_test
	#Scenario: Admin enables student visiblity for a teacher as a pre-condition
	#Given I am logged in as a 'admin1_brb' at 'brb'
	#When I go to administration page
	#When I go to school administration
	#remove the following line if old admin page is hidden
	#When I go to new school administration page  --> //Currently admin page is not opening due to the issue on admin user created by using api.
	#When I click on general settings panel
	#When I click the toggle switch to enable student visibility for teachers
	#When I click on button Save admin settings

	@stable_test
	Scenario: as a pre-condition admin creates a course and assign teacher and student to the course as a pre-condition
		Given I am logged in as a 'admin1_brb' at 'brb'
		When I go to rooms overview
		When I click on FAB to create a new room
		When I click on new course create button in sub menu
		Then I see section one area on the course create page
		When I enter the course title 'CypressAut Test Dashboard Course'
		When I select room colour as red
		Then I select teacher 'cypress teacher_1' is selected by default
		Then I see substitute teacher selection box
		Then I see date pickers to start and end the course as per school year
		Then I see button to create a course time table container
		When I click on button Next Steps after entering the room detail in section one
		Then I see section two area on the course create page
		Then I see class selection box to select the class for the room
		Then I see student selection box to select the student for the room
		When I select the student 'cypress student_1' in the list
		When I click on button Next Steps after selecting room participant details
		Then I see the section three as the finish page
		When I click on button To Course Overview on the finish page
	#Then I see the course 'CypressAut Test Creation and Deletion' on the room overview page  //Not applicable for the admin user


	@stable_test
	Scenario: as a pre-condition teacher creates task and a task draft
		Given I am logged in as a 'teacher1_brb' at 'brb'
		When I go to rooms overview
		When I go to room 'CypressAut Test Dashboard Course'
		When I click on FAB to create new content
		When I click on New Task FAB
		Then I can see create task page
		When I enter title 'CypressAut Dashboard Task Published'
		When I enter task description 'Dies ist Deine Aufgabe.'
		When I click on button Submit
		Then I see detail page for task 'CypressAut Dashboard Task Published'
		When I go to rooms overview
		When I go to room 'CypressAut Test Dashboard Course'
		When I click on FAB to create new content
		When I click on New Task FAB
		Then I can see create task page
		When I enter title 'CypressAut Dashboard Task Draft'
		When I click on Draft Checkbox
		When I enter task description 'Dies ist Deine Aufgabe.'
		When I click on button Submit
		Then I see detail page for task 'CypressAut Dashboard Task Draft'

  @stable_test
  Scenario: as a pre-condition teacher creates school news
    Given I am logged in as a 'teacher1_brb' at 'brb'
    When I go to news overview
    And I click on add news button
    Then I see news creation page
    And I enter news title 'CypressAut Dashboard - school news'
    And I enter news description 'test school news description'
    And I see date input field
    And I see time input field
    And I click on save button
    Then I see news is created successfully with title 'CypressAut Dashboard - school news' and with description 'test school news description'

  @stable_test
  Scenario: as a pre-condition teacher creates a team
    When I go to teams overview
    When I click on button Add Team on the teams overview page
    Then I see new team creation page
    When I enter in the title 'CypressAut - News Team'
    When I click on button Create Team on the team creation page

  @stable_test
  Scenario: as a pre-condition teacher creates a team news
    When I go to teams overview
    When I go to a team 'CypressAut - News Team'
    When I click on news tab on the team detail page
    And I click on create news button
    Then I see news creation page
    And I enter news title 'CypressAut Dashboard - team news'
    And I enter news description 'test team news description'
    And I see date input field
    And I see time input field
    And I click on save button
    Then I see news is created successfully with title 'CypressAut Dashboard - team news' and with description 'test team news description'

  @stable_test
  #Scenario: as a pre-condition teacher creates a task
   # When I go to teams overview
    #When I click on button Add Team on the teams overview page
   # Then I see new team creation page
   # When I enter in the title 'CypressAut - News Team'
   # When I click on button Create Team on the team creation page

  @stable_test
  Scenario: as a pre-condition teacher adds student as team member
    When I go to teams overview
    When I go to a team 'CypressAut - News Team'
    When I click on three dot menu on the team title
    And I click on manage team members option
    Then I see team participants overview page
    And I click on add internal attendees button
    And new dialog opens to select student 'student_1, cypress' from the drop down list
    And I click on add user button
    Then I see the student named 'student_1, cypress' on the team members table

  @stable_test
  Scenario: student arrives on dashboard
    Given I am logged in as a 'student1_brb' at 'brb'
    When I arrive on the dashboard
    Then I see the welcome message 'Hallo cypress student_1!'
    Then I see school news with title 'CypressAut Dashboard - school news' and description 'test school news description'
    Then I see teams news with title 'CypressAut Dashboard - team news' and description 'test team news description'
    Then I can see the assigned task 'CypressAut Dashboard Task Published' of course 'CypressAut Test Dashboard Course'

  @stable_test
  Scenario: teacher arrives on dashboard
    Given I am logged in as a 'teacher1_brb' at 'brb'
    When I arrive on the dashboard
    Then I see the welcome message 'Hallo cypress teacher_1!'
    Then I see school news with title 'CypressAut Dashboard - school news' and description 'test school news description'
    Then I see teams news with title 'CypressAut Dashboard - team news' and description 'test team news description'
    Then I can see the assigned task 'CypressAut Dashboard Task Published' of course 'CypressAut Test Dashboard Course'
    Then I can see the draft task 'CypressAut Dashboard Task Draft' of course 'CypressAut Test Dashboard Course'

  @stable_test
  Scenario: as a post-condition teacher deletes the school news
    When I arrive on the dashboard
    And I click on the news teaser 'CypressAut Dashboard - school news'
    When I click on delete button
    And I confirm the deletion on confirmation dialog box
    Then I do not see the news 'CypressAut Dashboard - school news'

  @stable_test
  Scenario: as a post-condition teacher deletes the team news
    When I arrive on the dashboard
    And I click on the news teaser 'CypressAut Dashboard - team news'
    When I click on delete button
    And I confirm the deletion on confirmation dialog box
    Then I do not see the news 'CypressAut Dashboard - team news'

  @stable_test
  Scenario: student does not see news anymore on dashboard
    Given I am logged in as a 'student1_brb' at 'brb'
    When I arrive on the dashboard
    Then I do not see school news with title 'CypressAut Dashboard - school news'
    Then I do not see teams news with title 'CypressAut Dashboard - team news'

  @stable_test
  Scenario: as a post-condition teacher deletes the student as a  team member
    Given I am logged in as a 'teacher1_brb' at 'brb'
    When I go to teams overview
    When I go to a team 'CypressAut - News Team'
    When I click on three dot menu on the team title
    And I click on manage team members option
    Then I see team participants overview page
    When I select the student 'cypress student_1' and click on delete icon
    Then I see 'cypress student_1' is not visible on the table