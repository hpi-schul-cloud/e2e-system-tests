const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import VideoConference from "../../pages/common_helper/pageVideoConference";

const videoConference = new VideoConference();

When(
	"I set the video conference options muted {string}, waiting room {string} and all moderators {string}",
	(muted, waitingRoom, allModerators) => {
		videoConference.setOptionsInConfigDialog(
			VideoConference.parseOptions(muted, waitingRoom, allModerators)
		);
	}
);

Then(
	"I see the video conference options muted {string}, waiting room {string} and all moderators {string}",
	(muted, waitingRoom, allModerators) => {
		videoConference.verifyOptionsInConfigDialog(
			VideoConference.parseOptions(muted, waitingRoom, allModerators)
		);
	}
);

When("I start the video conference from the configuration dialog", () => {
	videoConference.startVideoConferenceFromConfigDialog();
});

Then(
	"the video conference is {string} with stored options muted {string}, waiting room {string} and all moderators {string}",
	(state, muted, waitingRoom, allModerators) => {
		videoConference.verifyStoredOptionsViaApi(
			VideoConference.parseOptions(muted, waitingRoom, allModerators),
			state
		);
	}
);

Then("joining the video conference via API gives me the role {string}", (role) => {
	videoConference.verifyJoinRoleViaApi(role);
});

When("I wait until the video conference without participants has expired", () => {
	videoConference.waitUntilVideoConferenceHasExpired();
});
