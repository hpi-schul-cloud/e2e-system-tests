@api_migrated
@release
@unstable_test
Feature:  To access the H5P editor as a teacher.

	As a teacher, I want to be able to access the H5P Editor for a topic in my course to create learning content

	Scenario: Teacher sees and clicks on HP5 button in a topic, including pre-conditions

		# pre-condition: admin, teacher and student log in to create their account in a same school
		Given I am logged in as a '<teacher>' at '<namespace>'
		Given I am logged in as a '<admin>' at '<namespace>'

		# pre-condition: admin creates a course and assign teacher to the course
		When I go to rooms overview
		When I click on FAB to create a new room
		When I click on new course create button in sub menu
		Then I see section one area on the course create page
		When I enter the course title '<course_name>'
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
		# Note: This step is not applicable for the admin user
		#Then I see the course '<course_name>' on the room overview page

		# pre-condition: teacher creates topic in the course
		Given I am logged in as a '<teacher>' at '<namespace>'
		When I go to rooms overview
		When I go to room '<course_name>'
		And I click on FAB to create new content
		And I click on New Topic FAB
		Then I can see edit topic page '-'
		When I enter topic title '<topic_title>'
		When I click on button Add Text to topic
		Then I can see form element Text on position '<topic_text_element_position>'
		When I enter title '<topic_text_element_title>' into element Text in element position '<topic_text_element_position>'
		When I enter description '<topic_text_element_description>' into element Text in element position '<topic_text_element_position>'
		When I click on button Add GeoGebra to topic
		When I enter title '<topic_geogebra_title>' into element GeoGebra
		When I enter GeoGebra material ID '<topic_geogebra_id>'
		When I click on button Add Learning Material to topic
		When I enter title '<topic_learning_store_title>' into element Learning Material
		Then I see second learning material button in the content area
		# Note: currently step for adding material is excluded because this process is via new browser window
		When I click on button Add Etherpad to topic
		When I enter title '<topic_etherpad_title>' into element Etherpad in element position '<topic_etherpad_position>'
		When I enter description for the ether pad '<topic_etherpad_description>' in element position '<topic_etherpad_position>'
		When I click on button Add Task to topic
		When I enter title '<topic_task_title>' into element Task
		When I enter URL of the task from the another course for task id '<topic_task_id>'
		When I click on create button to create topic
		Then I can see edit topic page '<topic_title>'
		When I click on save button to save changes
		Then I see topic detail page '<topic_title>' with content elements '<topic_text_element_title>', '<topic_geogebra_title>', '<topic_learning_store_title>', '<topic_etherpad_title>' and '<topic_task_title>'
		# Note: Below step will not work in dev environments due to new side menu. This needs to adapt in future.
		# When I click on last breadcrump element in topbar navigation
		# Then I can see topic '<topic_title>' on course page

		# teacher can access H5P editor
		When I go to rooms overview
		When I go to room '<course_name>'
		When I click on topic '<topic_title>' on course page
		When I click on the button Edit on topic page
		When I click on the Add Content H5P button
		Then I can click on the Create H5P button

		@school_api_test
		Examples:
			| admin      | teacher      | namespace | fullname_teacher  | course_name                           | topic_title                         | topic_text_element_title           | topic_text_element_position | topic_text_element_description                                                   | topic_geogebra_title                   | topic_geogebra_id | topic_learning_store_title                      | topic_etherpad_title                   | topic_etherpad_description  | topic_etherpad_position | topic_task_title                   | topic_task_id            |
			| admin1_brb | teacher1_brb | brb       | cypress teacher_1 | CypressAut Test Creation and Deletion | Cy Topic Creating and Deleting Test | Cy Title for Text Element in Topic | 0                           | Cy this is the description of the topic. It is used for automated Cypress tests. | Cy Title for GeoGebra Element in Topic | kEBfU7AR          | Cy Title for Learning Material Element in Topic | Cy Title for Etherpad Element in Topic | this is my epad description | 3                       | Cy Title for Task Element in Topic | 59cce3f6c6abf042248e888d |

		@staging_test
		Examples:
			| admin      | teacher      | namespace | fullname_teacher | course_name                           | topic_title                         | topic_text_element_title           | topic_text_element_position | topic_text_element_description                                                   | topic_geogebra_title                   | topic_geogebra_id | topic_learning_store_title                      | topic_etherpad_title                   | topic_etherpad_description  | topic_etherpad_position | topic_task_title                   | topic_task_id            |
			| admin1_brb | teacher1_brb | brb       | Karl Herzog      | CypressAut Test Creation and Deletion | Cy Topic Creating and Deleting Test | Cy Title for Text Element in Topic | 0                           | Cy this is the description of the topic. It is used for automated Cypress tests. | Cy Title for GeoGebra Element in Topic | kEBfU7AR          | Cy Title for Learning Material Element in Topic | Cy Title for Etherpad Element in Topic | this is my epad description | 3                       | Cy Title for Task Element in Topic | 59cce3f6c6abf042248e888d |