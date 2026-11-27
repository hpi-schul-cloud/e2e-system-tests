@unstable_test
@group-A
Feature: Security - Cookie-credentialed UI actions keep working with the CSRF protection

    As a teacher, I want all actions in the cloud to keep working with the CSRF protection enabled, so that only foreign websites are blocked and not the cloud itself.

    # The nuxt client authenticates with the session cookie (jwt). Every state-changing request of the UI
    # therefore passes the CSRF protection of the schulcloud-server and the file-storage. This scenario uses
    # all endpoint kinds the protection covers: unsafe methods on both services and the protected GET
    # endpoints for Etherpad and Collabora. No API request may be rejected by the CSRF protection.

    Scenario Outline: Teacher creates a room board with Etherpad and Collabora file and opens them, including pre & post conditions

        # pre-condition: creating account and observing all API responses
        Given I am logged in as a '<teacher>' at '<namespace>'
        Given API responses are observed for CSRF rejections

        # teacher creates room, board and card (schulcloud-server POST and PATCH)
        Given a room named '<room_name>' with a multi-column board named '<board_title>' exists
        Given the multi-column board has a column with a card

        # teacher uploads a docx file into the card (file-storage POST)
        Given the file with filename '<docx_file_name>' and caption '<docx_caption_text>' is added to the room board
        Then I see a successful 'POST' API request to '/api/v3/file/upload/'

        # teacher adds an Etherpad and opens it (protected schulcloud-server GET)
        When I go to rooms overview
        When I click on button Open to go to room '<room_name>' at position '0'
        When I click on the button Open on multi-column board in the room detail page
        Then I see the file type DOCX is uploaded in the card
        When I click on the three dot on the card
        When I click on the option Edit in the three dot menu on the card
        When I click on icon Plus to add content into card
        Then I see the dialog Add Element in the card
        When I select 'collaborative-text-editor' from the element selection dialog box
        When I click outside of the card to save it
        Then I see the element Etherpad in the card
        Then I verify the element Etherpad is clickable
        Then I see a successful 'GET' API request to '/api/v3/collaborative-text-editor/'

        # teacher opens the docx file in Collabora (protected file-storage GET)
        When I click on the collabora file '<docx_file_name>'
        Then I see collabora text editor
        Then I see a successful 'GET' API request to '/api/v3/wopi/authorized-collabora-document-url'

        # teacher reads the release notes (reading releases is unaffected by the change of /releases/fetch to POST)
        When I arrive on the dashboard
        When I go to rooms overview
        When I click on element with data-testid 'sidebar-system'
        Then I see element with data-testid 'sidebar-system-releases'
        When I click on element with data-testid 'sidebar-system-releases'
        Then I see element with data-testid 'Release Notes'

        # post-condition: delete the room (schulcloud-server DELETE)
        # next step is to load sidebar in vue
        When I go to dashboard
        Given the room '<room_name>' at position '0' is deleted

        # no request of the whole flow was rejected by the CSRF protection
        Then no API request was rejected by the CSRF protection

        @school_api_test
        Examples:
            | namespace | teacher      | room_name                 | board_title                | docx_file_name   | docx_caption_text       |
            | nbc       | teacher1_nbc | CypressAut CSRF Room      | CypressAut CSRF Board      | sample-docx.docx | CypressAut CSRF Caption |

        @staging_test
        Examples:
            | namespace | teacher      | room_name                 | board_title                | docx_file_name   | docx_caption_text       |
            | nbc       | teacher1_nbc | CypressAut CSRF Room      | CypressAut CSRF Board      | sample-docx.docx | CypressAut CSRF Caption |
