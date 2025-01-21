@regression_test
@stable_test
Feature: Room - Add BBB Tool in the Room Board

	As a teacher, I want to add a BBB (BigBlueButton) Tool to the room board so that I can manage video conferencing effectively.


	Scenario: Add BBB Tool to the Room Board, including pre & post conditions

		# pre-condition: room and boards are existing
		Given I am logged in as a '<teacher>' at '<namespace>'
		Given a room named '<room_name>' exists
		Given a multi-column board named '<new_board_title>' exists in the room
		#Give column exist in the multi-column board in the toom
		#Given Card exist in the column in the multi-column board in the room
		#Given Admin enable video ocnference for the school in school seting page

		# teacher adds BBB Tool to the multi-column board
		When I click on the multi-column board in the room detail page
		When I see the page board details
		When I double-click on the card '<card_name>' in the column '<column_name>' of the board '<board_title>'
		When I click on the plus add button
		Then I see the card element pop-up dialog
		When I select the card element "Video Conference"
		When I enter the video conference title '<video_conference_title>'
		When I click on the save button
		Then I see the video conference element added in the card '<card_name>'
		When I click on the video conference element in the card '<card_name>'
		Then I see the modal to create or start the video conference
		When I click on the create button in the video conference creation modal
		Then I see the BBB call opens in a new tab with the URL "https://bbb-2.bbb.schule/"

		# teacher deletes the BBB Tool from the multi-column board
		When I double-click on the card '<card_name>' in the column '<column_name>' of the board '<board_title>'
		When I click on the three-dot menu in the video conference element
		When I click on the delete option in the three-dot menu
		Then I see the delete confirmation dialog
		When I click on the delete button in the confirmation dialog
		Then I do not see the video conference element '<video_conference_title>' in the card '<card_name>'


		# post-condition: delete the room
		Given the room named '<room_name>' is deleted

		@school_api_test
		Examples:
			| teacher      | namespace | room_name         | new_board_title |
			| teacher1_brb | brb       | Cypress Room Name | Board Cy Title  |

		@staging_test
		Examples:
			| teacher      | namespace | room_name         | new_board_title |
			| teacher1_brb | brb       | Cypress Room Name | Board Cy Title  |

