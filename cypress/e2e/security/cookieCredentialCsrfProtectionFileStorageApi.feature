@unstable_test
@group-A
Feature: Security - Cookie-credential CSRF protection of the file-storage API

    As a user, I want file operations that are authenticated with my session cookie to be accepted only when they come from the cloud itself, so that foreign websites cannot change my files or open documents on my behalf.

    # Requests are sent with cy.request(), which attaches the session cookie (jwt) of the logged-in user
    # but none of the browser headers Sec-Fetch-Site, Origin or Referer, unless a step sets them explicitly.
    # ':unknownId' is replaced by an id that does not exist, so allowed requests do not change any data.

    Scenario Outline: File-storage rejects cross-site cookie requests and accepts same-origin cookie requests

        Given I am logged in as a '<teacher>' at '<namespace>'

        # unsafe methods from a foreign or sibling site are rejected
        When I send a cookie-authenticated 'PATCH' request to '/api/v3/file/rename/:unknownId' with Sec-Fetch-Site 'cross-site'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'PATCH' request to '/api/v3/file/rename/:unknownId' with Sec-Fetch-Site 'same-site'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'POST' request to '/api/v3/file/copy/:unknownId' with Sec-Fetch-Site 'cross-site'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'DELETE' request to '/api/v3/file/delete/:unknownId' with Sec-Fetch-Site 'cross-site'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'PATCH' request to '/api/v3/file/rename/:unknownId' with Sec-Fetch-Site 'unknown-value'
        Then the request is rejected by the CSRF protection

        # unsafe methods from the cloud itself or a user-initiated navigation are accepted
        When I send a cookie-authenticated 'PATCH' request to '/api/v3/file/rename/:unknownId' with Sec-Fetch-Site 'same-origin'
        Then the request is not rejected by the CSRF protection
        When I send a cookie-authenticated 'PATCH' request to '/api/v3/file/rename/:unknownId' with Sec-Fetch-Site 'none'
        Then the request is not rejected by the CSRF protection
        When I send a cookie-authenticated 'DELETE' request to '/api/v3/file/delete/:unknownId' with Sec-Fetch-Site 'same-origin'
        Then the request is not rejected by the CSRF protection

        @school_api_test
        Examples:
            | namespace | teacher      |
            | nbc       | teacher1_nbc |
            | brb       | teacher1_brb |

        @staging_test
        Examples:
            | namespace | teacher      |
            | nbc       | teacher1_nbc |
            | brb       | teacher1_brb |

    Scenario Outline: File-storage falls back to Origin and Referer of the configured public origin (HOST) when Sec-Fetch-Site is missing

        Given I am logged in as a '<teacher>' at '<namespace>'

        # TLS terminates at the ingress, so the public HTTPS origin must be accepted although the app is reached via HTTP
        When I send a cookie-authenticated 'PATCH' request to '/api/v3/file/rename/:unknownId' with Origin 'public'
        Then the request is not rejected by the CSRF protection
        When I send a cookie-authenticated 'PATCH' request to '/api/v3/file/rename/:unknownId' with Referer 'public'
        Then the request is not rejected by the CSRF protection

        # any other origin is rejected
        When I send a cookie-authenticated 'PATCH' request to '/api/v3/file/rename/:unknownId' with Origin 'foreign'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'PATCH' request to '/api/v3/file/rename/:unknownId' with Origin 'public-over-http'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'PATCH' request to '/api/v3/file/rename/:unknownId' with Origin 'public-with-other-port'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'PATCH' request to '/api/v3/file/rename/:unknownId' with Origin 'null'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'PATCH' request to '/api/v3/file/rename/:unknownId' with Referer 'foreign'
        Then the request is rejected by the CSRF protection

        # a matching Referer does not override a foreign Origin, and forwarded headers are not trusted
        When I send a cookie-authenticated 'PATCH' request to '/api/v3/file/rename/:unknownId' with a foreign Origin and a public Referer
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'PATCH' request to '/api/v3/file/rename/:unknownId' with a foreign Origin and forwarded headers
        Then the request is rejected by the CSRF protection

        # without any browser origin information the request is rejected
        When I send a cookie-authenticated 'PATCH' request to '/api/v3/file/rename/:unknownId' without browser origin headers
        Then the request is rejected by the CSRF protection

        @school_api_test
        Examples:
            | namespace | teacher      |
            | nbc       | teacher1_nbc |
            | brb       | teacher1_brb |

        @staging_test
        Examples:
            | namespace | teacher      |
            | nbc       | teacher1_nbc |
            | brb       | teacher1_brb |

    Scenario Outline: File-storage does not check bearer requests and ordinary cookie reads

        Given I am logged in as a '<teacher>' at '<namespace>'

        # a bearer token cannot be attached by a foreign site, so cross-site bearer requests are accepted
        When I send a bearer-authenticated 'PATCH' request to '/api/v3/file/rename/:unknownId' with Sec-Fetch-Site 'cross-site'
        Then the request is not rejected by the CSRF protection

        # ordinary reads with the session cookie are accepted from anywhere
        When I send a cookie-authenticated 'GET' request to '/api/v3/file/stats/rooms/:unknownId' with Sec-Fetch-Site 'cross-site'
        Then the request is not rejected by the CSRF protection
        When I send a cookie-authenticated 'GET' request to '/api/v3/file/stats/rooms/:unknownId' without browser origin headers
        Then the request is not rejected by the CSRF protection

        @school_api_test
        Examples:
            | namespace | teacher      |
            | nbc       | teacher1_nbc |
            | brb       | teacher1_brb |

        @staging_test
        Examples:
            | namespace | teacher      |
            | nbc       | teacher1_nbc |
            | brb       | teacher1_brb |

    Scenario Outline: File-storage protects the GET endpoint that creates a Collabora access token

        Given I am logged in as a '<teacher>' at '<namespace>'

        # cross-site and header-less requests are rejected, also for HEAD
        When I send a cookie-authenticated 'GET' request to '/api/v3/wopi/authorized-collabora-document-url?fileRecordId=:unknownId&editorMode=edit&userDisplayName=Cypress' with Sec-Fetch-Site 'cross-site'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'HEAD' request to '/api/v3/wopi/authorized-collabora-document-url?fileRecordId=:unknownId&editorMode=edit&userDisplayName=Cypress' with Sec-Fetch-Site 'cross-site'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'GET' request to '/api/v3/wopi/authorized-collabora-document-url?fileRecordId=:unknownId&editorMode=edit&userDisplayName=Cypress' with Origin 'foreign'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'GET' request to '/api/v3/wopi/authorized-collabora-document-url?fileRecordId=:unknownId&editorMode=edit&userDisplayName=Cypress' without browser origin headers
        Then the request is rejected by the CSRF protection

        # requests from the cloud itself are accepted
        When I send a cookie-authenticated 'GET' request to '/api/v3/wopi/authorized-collabora-document-url?fileRecordId=:unknownId&editorMode=edit&userDisplayName=Cypress' with Sec-Fetch-Site 'same-origin'
        Then the request is not rejected by the CSRF protection
        When I send a cookie-authenticated 'GET' request to '/api/v3/wopi/authorized-collabora-document-url?fileRecordId=:unknownId&editorMode=edit&userDisplayName=Cypress' with Origin 'public'
        Then the request is not rejected by the CSRF protection

        # a bearer token is still accepted cross-site
        When I send a bearer-authenticated 'GET' request to '/api/v3/wopi/authorized-collabora-document-url?fileRecordId=:unknownId&editorMode=edit&userDisplayName=Cypress' with Sec-Fetch-Site 'cross-site'
        Then the request is not rejected by the CSRF protection

        # other WOPI endpoints are not affected by the cookie CSRF protection
        When I send a cookie-authenticated 'GET' request to '/api/v3/wopi/files/:unknownId' with Sec-Fetch-Site 'cross-site'
        Then the request is not rejected by the CSRF protection

        @school_api_test
        Examples:
            | namespace | teacher      |
            | nbc       | teacher1_nbc |
            | brb       | teacher1_brb |

        @staging_test
        Examples:
            | namespace | teacher      |
            | nbc       | teacher1_nbc |
            | brb       | teacher1_brb |
