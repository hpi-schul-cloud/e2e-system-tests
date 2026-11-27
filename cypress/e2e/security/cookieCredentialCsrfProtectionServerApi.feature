@unstable_test
@group-A
Feature: Security - Cookie-credential CSRF protection of the schulcloud-server API

    As a user, I want state-changing requests that are authenticated with my session cookie to be accepted only when they come from the cloud itself, so that foreign websites cannot act on my behalf.

    # Requests are sent with cy.request(), which attaches the session cookie (jwt) of the logged-in user
    # but none of the browser headers Sec-Fetch-Site, Origin or Referer, unless a step sets them explicitly.
    # ':unknownId' is replaced by an id that does not exist, so allowed requests do not change any data.

    Scenario Outline: Server rejects cross-site cookie requests and accepts same-origin cookie requests

        Given I am logged in as a '<teacher>' at '<namespace>'

        # unsafe methods from a foreign or sibling site are rejected
        When I send a cookie-authenticated 'POST' request to '/api/v3/authentication/refresh-session' with Sec-Fetch-Site 'cross-site'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'POST' request to '/api/v3/authentication/refresh-session' with Sec-Fetch-Site 'same-site'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'PATCH' request to '/api/v3/rooms/:unknownId' with Sec-Fetch-Site 'cross-site'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'PUT' request to '/api/v3/rooms/:unknownId' with Sec-Fetch-Site 'cross-site'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'DELETE' request to '/api/v3/rooms/:unknownId' with Sec-Fetch-Site 'cross-site'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'POST' request to '/api/v3/authentication/refresh-session' with Sec-Fetch-Site 'unknown-value'
        Then the request is rejected by the CSRF protection

        # unsafe methods from the cloud itself or a user-initiated navigation are accepted
        When I send a cookie-authenticated 'POST' request to '/api/v3/authentication/refresh-session' with Sec-Fetch-Site 'same-origin'
        Then the request is not rejected by the CSRF protection
        Then I see the response status 200
        When I send a cookie-authenticated 'POST' request to '/api/v3/authentication/refresh-session' with Sec-Fetch-Site 'none'
        Then the request is not rejected by the CSRF protection
        Then I see the response status 200
        When I send a cookie-authenticated 'PATCH' request to '/api/v3/rooms/:unknownId' with Sec-Fetch-Site 'same-origin'
        Then the request is not rejected by the CSRF protection
        When I send a cookie-authenticated 'DELETE' request to '/api/v3/rooms/:unknownId' with Sec-Fetch-Site 'same-origin'
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

    Scenario Outline: Server falls back to Origin and Referer of the public cloud URL when Sec-Fetch-Site is missing

        Given I am logged in as a '<teacher>' at '<namespace>'

        # TLS terminates at the ingress, so the public HTTPS origin must be accepted although the app is reached via HTTP
        When I send a cookie-authenticated 'POST' request to '/api/v3/authentication/refresh-session' with Origin 'public'
        Then the request is not rejected by the CSRF protection
        Then I see the response status 200
        When I send a cookie-authenticated 'POST' request to '/api/v3/authentication/refresh-session' with Referer 'public'
        Then the request is not rejected by the CSRF protection
        Then I see the response status 200

        # any other origin is rejected
        When I send a cookie-authenticated 'POST' request to '/api/v3/authentication/refresh-session' with Origin 'foreign'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'POST' request to '/api/v3/authentication/refresh-session' with Origin 'public-over-http'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'POST' request to '/api/v3/authentication/refresh-session' with Origin 'public-with-other-port'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'POST' request to '/api/v3/authentication/refresh-session' with Origin 'null'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'POST' request to '/api/v3/authentication/refresh-session' with Referer 'foreign'
        Then the request is rejected by the CSRF protection

        # a matching Referer does not override a foreign Origin, and forwarded headers are not trusted
        When I send a cookie-authenticated 'POST' request to '/api/v3/authentication/refresh-session' with a foreign Origin and a public Referer
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'POST' request to '/api/v3/authentication/refresh-session' with a foreign Origin and forwarded headers
        Then the request is rejected by the CSRF protection

        # without any browser origin information the request is rejected
        When I send a cookie-authenticated 'POST' request to '/api/v3/authentication/refresh-session' without browser origin headers
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

    Scenario Outline: Server does not check bearer requests and ordinary cookie reads

        Given I am logged in as a '<teacher>' at '<namespace>'

        # a bearer token cannot be attached by a foreign site, so cross-site bearer requests are accepted
        When I send a bearer-authenticated 'POST' request to '/api/v3/authentication/refresh-session' with Sec-Fetch-Site 'cross-site'
        Then the request is not rejected by the CSRF protection
        Then I see the response status 200

        # ordinary reads with the session cookie are accepted from anywhere
        When I send a cookie-authenticated 'GET' request to '/api/v3/me' with Sec-Fetch-Site 'cross-site'
        Then the request is not rejected by the CSRF protection
        Then I see the response status 200
        When I send a cookie-authenticated 'GET' request to '/api/v3/me' without browser origin headers
        Then the request is not rejected by the CSRF protection
        Then I see the response status 200

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

    Scenario Outline: Server protects GET endpoints that create or persist state

        Given I am logged in as a '<teacher>' at '<namespace>'

        # collaborative text editor (Etherpad) is created on GET
        When I send a cookie-authenticated 'GET' request to '/api/v3/collaborative-text-editor/content-element/:unknownId' with Sec-Fetch-Site 'cross-site'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'HEAD' request to '/api/v3/collaborative-text-editor/content-element/:unknownId' with Sec-Fetch-Site 'cross-site'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'GET' request to '/api/v3/COLLABORATIVE-TEXT-EDITOR/content-element/:unknownId' with Sec-Fetch-Site 'cross-site'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'GET' request to '/api/v3/collaborative-text-editor/content-element/:unknownId' without browser origin headers
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'GET' request to '/api/v3/collaborative-text-editor/content-element/:unknownId' with Sec-Fetch-Site 'same-origin'
        Then the request is not rejected by the CSRF protection
        When I send a cookie-authenticated 'GET' request to '/api/v3/collaborative-text-editor/content-element/:unknownId' with Origin 'public'
        Then the request is not rejected by the CSRF protection

        # CTL tool launch may persist an LTI pseudonym on GET
        When I send a cookie-authenticated 'GET' request to '/api/v3/tools/context/:unknownId/launch' with Sec-Fetch-Site 'cross-site'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'HEAD' request to '/api/v3/tools/context/:unknownId/launch' with Sec-Fetch-Site 'cross-site'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'GET' request to '/api/v3/tools/context/:unknownId/launch' with Origin 'foreign'
        Then the request is rejected by the CSRF protection
        When I send a cookie-authenticated 'GET' request to '/api/v3/tools/context/:unknownId/launch' with Sec-Fetch-Site 'same-origin'
        Then the request is not rejected by the CSRF protection

        # a bearer token is still accepted cross-site for the protected GET endpoints
        When I send a bearer-authenticated 'GET' request to '/api/v3/tools/context/:unknownId/launch' with Sec-Fetch-Site 'cross-site'
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

    Scenario Outline: Fetching releases is only possible with POST and is CSRF protected

        Given I am logged in as a '<teacher>' at '<namespace>'

        # GET /releases/fetch was replaced by POST, because it changes state
        When I send a cookie-authenticated 'GET' request to '/api/v3/releases/fetch' with Sec-Fetch-Site 'same-origin'
        Then I see the response status 404
        When I send a cookie-authenticated 'POST' request to '/api/v3/releases/fetch' with Sec-Fetch-Site 'cross-site'
        Then the request is rejected by the CSRF protection

        # same-origin POST passes the CSRF protection and is then denied, because only superheroes may fetch releases
        When I send a cookie-authenticated 'POST' request to '/api/v3/releases/fetch' with Sec-Fetch-Site 'same-origin'
        Then the request is not rejected by the CSRF protection
        Then I see the response status 403

        # reading the release notes is still possible
        When I send a cookie-authenticated 'GET' request to '/api/v3/releases' with Sec-Fetch-Site 'same-origin'
        Then the request is not rejected by the CSRF protection
        Then I see the response status 200

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
