@regression_test
@stable_test
Feature: Rooms - Share Multi-Column Boards Across Different Schools

    As a teacher, I want to share multi-column boards with teachers from different schools so that they can collaborate effectively.

    Scenario: share a Multi-Column Board with a Teacher from a Different School

        # pre-condition: Creating teacher accounts
        Given I am logged in as a '<teacher1>' at '<namespace>' schule 1

        # pre-condition: Room and multi-column board exist
        Given a room named '<room_name>' exists
        Given a multi-column board named '<board_title>' exists in the room
        Given board copy url is copied

        #@school_api_test
        # Examples:
        # | teacher1     | teacher2     | namespace | room_name         | board_title    |
        #| teacher1_brb | teacher2_brb | brb       | Cypress Room Name | Board Cy Title |

        @staging_test
        Examples:
            | teacher1     | teacher2     | namespace | room_name         | board_title    |
            | teacher1_brb | teacher2_brb | brb       | Cypress Room Name | Board Cy Title |

        #Scenario: second teacher from a different school imports the board via copied URL

        # pre-condition: Creating teacher accounts
        Given I am logged in as a '<teacher2>' at '<namespace>'  schule 2

        #pre-condition: Room exists
        Given a room named '<room_name>' exists

        # second teacher perform importing
        When I open the shared URL
        Then I see the modal to import the shared board into the room
        When I select the room from the room list in the modal
        When I click on the Continue button in the modal
        When I enter a new name for the imported board in the modal
        When I click on the button Import in the modal
        Then I see the shared board tile as a draft on the room details page

        # Post-condition: Rooms created by both teachers are deleted
        Given I am logged in as a '<teacher1>' at '<namespace>'
        Given the room named '<room_name_souce>' is deleted
        Given I am logged in as a '<teacher2>' at '<different_namespace>'
        Given the room named '<room_name_target>' is deleted


        #@school_api_test
        #Examples:
        #| teacher1     | teacher2     | namespace | room_name         | board_title    |
        #| teacher1_brb | teacher2_brb | brb       | Cypress Room Name | Board Cy Title |

        @staging_test
        Examples:
            | teacher1     | teacher2     | namespace | room_name         | board_title    |
            | teacher1_brb | teacher2_brb | brb       | Cypress Room Name | Board Cy Title |