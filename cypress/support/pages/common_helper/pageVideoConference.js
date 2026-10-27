"use strict";

// scope and scope id of the last started video conference, shared between user sessions of one scenario
const startedVideoConference = { scope: undefined, scopeId: undefined };

const maxSecondsUntilExpired = 600;

const optionCheckboxes = {
	everyAttendeeJoinsMuted: '[data-testid="every-attendee-joins-muted"]',
	moderatorMustApproveJoinRequests:
		'[data-testid="moderator-must-approve-join-requests"]',
	everybodyJoinsAsModerator: '[data-testid="everybody-joins-as-moderator"]',
};

class VideoConference {
	static #configDialog = '[data-testid="video-conference-config-dialog"]';
	static #configDialogConfirmButton =
		'[data-testid="video-conference-config-dialog-confirm"]';

	static parseOptions(muted, waitingRoom, allModerators) {
		return {
			everyAttendeeJoinsMuted: muted === "on",
			moderatorMustApproveJoinRequests: waitingRoom === "on",
			everybodyJoinsAsModerator: allModerators === "on",
		};
	}

	getApiPath(action) {
		return cy.wrap(startedVideoConference).then(({ scope, scopeId }) => {
			expect(scope, "started video conference scope").to.be.a("string");
			return `/api/v3/videoconference2/${scope}/${scopeId}/${action}`;
		});
	}

	setOptionsInConfigDialog(expectedOptions) {
		cy.get(VideoConference.#configDialog).should("be.visible");
		Object.entries(expectedOptions).forEach(([option, enabled]) => {
			cy.get(optionCheckboxes[option])
				.find('input[type="checkbox"]')
				.then(($input) => {
					if ($input.prop("checked") !== enabled) {
						cy.wrap($input).click();
					}
				});
			cy.get(optionCheckboxes[option])
				.find('input[type="checkbox"]')
				.should(enabled ? "be.checked" : "not.be.checked");
		});
	}

	verifyOptionsInConfigDialog(expectedOptions) {
		cy.get(VideoConference.#configDialog).should("be.visible");
		Object.entries(expectedOptions).forEach(([option, enabled]) => {
			cy.get(optionCheckboxes[option])
				.find('input[type="checkbox"]')
				.should(enabled ? "be.checked" : "not.be.checked");
		});
	}

	startVideoConferenceFromConfigDialog() {
		cy.intercept("PUT", "**/api/v3/videoconference2/*/*/start").as(
			"startVideoConference"
		);
		// the client opens the BigBlueButton join url in a new or the same window, keep the test on the page
		cy.window().then((win) => {
			cy.stub(win, "open").returns({ location: "" });
		});
		cy.get(VideoConference.#configDialogConfirmButton).click();
		cy.wait("@startVideoConference").then(({ request, response }) => {
			expect(response.statusCode, "start video conference").to.eq(200);
			const [, scope, scopeId] = new URL(request.url).pathname.match(
				/\/videoconference2\/([^/]+)\/([0-9a-f]{24})\/start$/
			);
			startedVideoConference.scope = scope;
			startedVideoConference.scopeId = scopeId;
		});
	}

	verifyStoredOptionsViaApi(expectedOptions, expectedState) {
		this.getApiPath("info").then((url) => {
			cy.request({ method: "GET", url }).then((response) => {
				expect(response.status).to.eq(200);
				expect(response.body.state).to.eq(expectedState);
				expect(response.body.options).to.deep.include(expectedOptions);
			});
		});
	}

	verifyJoinRoleViaApi(expectedRole) {
		this.getApiPath("join").then((url) => {
			cy.request({ method: "GET", url }).then((response) => {
				expect(response.status).to.eq(200);
				const joinUrl = new URL(response.body.url);
				expect(joinUrl.searchParams.get("role")).to.eq(expectedRole);
			});
		});
	}

	waitUntilVideoConferenceHasExpired() {
		// the end endpoints currently address the meeting without its salt and can not end it,
		// so wait until BigBlueButton closes the meeting nobody has entered
		const startedAt = Date.now();
		this.getApiPath("info").then((url) => {
			this.pollUntilVideoConferenceIsNotRunning(url, startedAt);
		});
	}

	pollUntilVideoConferenceIsNotRunning(url, startedAt) {
		cy.request({ method: "GET", url }).then((response) => {
			const elapsedSeconds = Math.round((Date.now() - startedAt) / 1000);
			if (response.body.state === "NOT_STARTED") {
				cy.log(`video conference expired after ${elapsedSeconds}s`);
				return;
			}
			expect(
				elapsedSeconds,
				"seconds waited for the video conference to expire"
			).to.be.lessThan(maxSecondsUntilExpired);
			cy.wait(15000, { log: false });
			this.pollUntilVideoConferenceIsNotRunning(url, startedAt);
		});
	}
}

export default VideoConference;
