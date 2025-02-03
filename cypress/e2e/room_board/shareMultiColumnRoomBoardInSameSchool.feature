@regression_test
@stable_test
Feature: Rooms - Share Multi-Column Boards in the Rooms

	As a teacher, I want to share multi-column boards with teachers within the same school and from different schools so that they can collaborate effectively.

	Scenario: Share a Multi-Column Board with a Teacher within the Same School

		# pre-condition: Creating teacher accounts
		Given I am logged in as a '<teacher2>' at '<namespace>'
		Given I am logged in as a '<teacher1>' at '<namespace>'

		# pre-condition: Room and multi-column board exist
		Given a room named '<room_name_source>' exists
		Given a multi-column board named '<board_title>' exists in the room

		# first teacher shares the multi-column board with another teacher in the same school via copied URL
		Then I see the page board details
		When I click on the three dot menu in room board
		When I select the three dot menu action 'share'
		Then I see the Share settings dialog
		Then I see the checkbox Link valid for the same school is checked
		Then I see the checkbox Link valid for 21 days is checked
		When I click on the button Continue
		Then I see the Share via modal
		Then I see the option Share via Email
		Then I see the option Copy link
		Then I see the option Scan QR Code
		Then I copy the board URL
		#Then I see the alrert success message

		# pre-condition: Second teacher is logged into the application and a room exists
		Given I am logged in as a '<teacher2>' at '<namespace>'
		Given a room named '<room_name_target>' exists

		# second teacher within the same school imports the multi-column board
		When I open the shared URL
		Then I see the modal to import the shared board into the room
		When I select the room '<room_name_target>' from the room list in the modal
		When I click on the Continue button in the modal
		When I enter a new name for the imported board '<import_board_title>' in the modal
		When I click on the button Import in the modal
		Then I see the shared board tile as a draft on the room details page

		# post-condition: Rooms created by both teachers are deleted
		Given I am logged in as a '<teacher1>' at '<namespace>'
		Given the room named '<room_name_source>' is deleted
		Given I am logged in as a '<teacher2>' at '<namespace>'
		Given the room named '<room_name_target>' is deleted

		@school_api_test
		Examples:
			| teacher1     | teacher2     | namespace | room_name_source    | room_name_target    | board_title    | import_board_title    |
			| teacher1_brb | teacher2_brb | brb       | Cypress Room Name-1 | Cypress Room Name-2 | Board Cy Title | Board Cy Import Title |

		@staging_test
		Examples:
			| teacher1     | teacher2     | namespace | room_name           | room_name_target    | board_title    | import_board_title    |
			| teacher1_brb | teacher2_brb | brb       | Cypress Room Name-1 | Cypress Room Name-2 | Board Cy Title | Board Cy Import Title |

