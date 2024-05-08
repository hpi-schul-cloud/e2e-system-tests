@api_migrated
@release
Feature:  To access the H5P editor as a teacher.

	As a teacher, I want to be able to access the H5P Editor for a topic in my course to create learning content

	@stable_test
	# This scenario is to create the users using api needed for this feature file.
	Scenario: Admin and teacher log in to create their account in a same school as a pre-condition
		Given I am logged in as a 'teacher1_brb' at 'brb'
		Given I am logged in as a 'admin1_brb' at 'brb'

	@stable_test
	Scenario: Admin creates a course and assign teacher to the course as a pre-condition
		Given I am logged in as a 'admin1_brb' at 'brb'
		When I go to rooms overview
		When I click on FAB to create a new room
		When I click on new course create button in sub menu
		Then I see section one area on the course create page
		When I enter the course title 'CypressAut Test Creation and Deletion'
		When I select room colour as red
		Then I select teacher 'cypress teacher_1' is selected by default
		Then I see substitute teacher selection box
		Then I see date pickers to start and end the course as per school year
		Then I see button to create a course time table container
		When I click on button Next Steps after entering the room detail in section one
		Then I see section two area on the course create page
		Then I see class selection box to select the class for the room
		Then I see student selection box to select the student for the room
		#Note: student user is not needed in this feature so this step is commented out
		#When I select the student 'cypress student_1' in the list
		When I click on button Next Steps after selecting room participant details
		Then I see the section three as the finish page
		When I click on button To Course Overview on the finish page
	#Note: Not applicable for the admin user so this step is commented out
	#Then I see the course 'CypressAut Test Creation and Deletion' on the room overview page

	@stable_test
	Scenario: Teacher creates topic in the course as a pre-condition
		Given I am logged in as a 'teacher1_brb' at 'brb'
		When I go to rooms overview
		When I go to room 'CypressAut Test Creation and Deletion'
		And I click on FAB to create new content
		And I click on New Topic FAB
		Then I can see edit topic page '-'
		When I enter topic title 'Cy Topic Creating and Deleting Test'
		When I click on button Add Text to topic
		Then I can see form element Text on position '0'
		When I enter title 'Cy Title for Text Element in Topic' into element Text in element position '0'
		When I enter description 'Cy this is the description of the topic. It is used for automated Cypress tests.' into element Text in element position '0'
		When I click on button Add GeoGebra to topic
		When I enter title "Cy Title for GeoGebra Element in Topic" into element GeoGebra
		When I enter GeoGebra material ID 'kEBfU7AR'
		When I click on button Add Learning Material to topic
		When I enter title 'Cy Title for Learning Material Element in Topic' into element Learning Material
		Then I see second learning material button in the content area
		# currently step for adding material is excluded because this process is via new browser window
		When I click on button Add Etherpad to topic
		When I enter title 'Cy Title for Etherpad Element in Topic' into element Etherpad in element position '3'
		When I enter description for the ether pad 'this is my epad description' in element position '3'
		When I click on button Add Task to topic
		When I enter title 'Cy Title for Task Element in Topic' into element Task
		When I enter URL of the task from the another course for task id '59cce3f6c6abf042248e888d'
		When I click on create button to create topic
		Then I can see edit topic page 'Cy Topic Creating and Deleting Test'
		When I click on save button to save changes
		Then I see topic detail page "Cy Topic Creating and Deleting Test" with content elements "Cy Title for Text Element in Topic", "Cy Title for GeoGebra Element in Topic", "Cy Title for Learning Material Element in Topic", "Cy Title for Etherpad Element in Topic" and "Cy Title for Task Element in Topic"
		When I click on last breadcrump element in topbar navigation
		Then I can see topic 'Cy Topic Creating and Deleting Test' on course page

	@stable_test
	Scenario: Access H5P Editor
		Given I am logged in as a 'teacher1_brb' at 'brb'
		When I go to rooms overview
		When I go to room 'CypressAut Test Creation and Deletion'
		When I click on topic 'Cy Topic Creating and Deleting Test' on course page
		When I click on the button Edit on topic page
		When I click on the Add Content H5P button
		Then I can click on the Create H5P button