const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");
import RoomGroups from "../../pages/rooms/pageRoomGroups";

const roomGroups = new RoomGroups();

const longName = (length) => "G".repeat(Number(length));

When("I click on Add group on the rooms overview", () => {
	roomGroups.clickAddGroup();
});

When("I enter the group name {string}", (groupName) => {
	roomGroups.enterGroupName(groupName);
});

When("I enter a group name with {string} characters", (length) => {
	roomGroups.enterGroupName(longName(length));
});

When("I confirm the group name dialog", () => {
	roomGroups.confirmGroupNameDialog();
});

When("I cancel the group name dialog", () => {
	roomGroups.cancelGroupNameDialog();
});

Then("I cannot confirm the group name dialog", () => {
	roomGroups.confirmIsRejectedWithError();
});

Then("I see an error for the group name", () => {
	roomGroups.seeGroupNameError();
});

Then("the group name dialog is closed", () => {
	roomGroups.seeNameDialogClosed();
});

Given("a room group named {string} exists", (groupName) => {
	roomGroups.clickAddGroup();
	roomGroups.enterGroupName(groupName);
	roomGroups.confirmGroupNameDialog();
	roomGroups.seeGroup(groupName);
});

Then("I see the room group {string}", (groupName) => {
	roomGroups.seeGroup(groupName);
});

Then("I see a room group with {string} characters", (length) => {
	roomGroups.seeGroup(longName(length));
});

Then("I do not see the room group {string}", (groupName) => {
	roomGroups.doNotSeeGroup(groupName);
});

Then("I see the room group {string} is empty", (groupName) => {
	roomGroups.seeGroupIsEmpty(groupName);
});

Then(
	"I see the room group {string} at group position {string}",
	(groupName, position) => {
		roomGroups.seeGroupAtPosition(groupName, position);
	}
);

Then("I see the ungrouped rooms above all groups", () => {
	roomGroups.seeUngroupedBeforeAllGroups();
});

When(
	"I choose {string} in the menu of the room group with {string} characters",
	(action, length) => {
		roomGroups.openGroupMenu(longName(length));
		roomGroups.clickGroupMenuAction(action);
	}
);

Then("I do not see a room group with {string} characters", (length) => {
	roomGroups.doNotSeeGroup(longName(length));
});

When("I choose {string} in the menu of room group {string}", (action, groupName) => {
	roomGroups.openGroupMenu(groupName);
	roomGroups.clickGroupMenuAction(action);
});

Then("I see the dialog to delete a room group", () => {
	roomGroups.seeDeleteDialog();
});

Then("I do not see the dialog to delete a room group", () => {
	roomGroups.doNotSeeDeleteDialog();
});

When("I check do not ask again in the delete group dialog", () => {
	roomGroups.checkDoNotAskAgain();
});

When("I confirm the delete group dialog", () => {
	roomGroups.confirmDeleteDialog();
});

When("I cancel the delete group dialog", () => {
	roomGroups.cancelDeleteDialog();
});

When("I toggle the room group {string}", (groupName) => {
	roomGroups.toggleGroup(groupName);
});

Then("I see the room group {string} is collapsed", (groupName) => {
	roomGroups.seeGroupCollapsed(groupName);
});

Then("I see the room group {string} is expanded", (groupName) => {
	roomGroups.seeGroupExpanded(groupName);
});

Then("I see the room group {string} shows {string} rooms", (groupName, count) => {
	roomGroups.seeGroupRoomCount(groupName, count);
});

Then("I see the room {string} in section {string}", (roomName, sectionName) => {
	roomGroups.seeRoomInSection(roomName, sectionName);
});

Then("I do not see the room {string} in section {string}", (roomName, sectionName) => {
	roomGroups.doNotSeeRoomInSection(roomName, sectionName);
});

Then("I see the room {string} exactly once on the rooms overview", (roomName) => {
	roomGroups.seeRoomExactlyOnce(roomName);
});

Then(
	"I see the room {string} at position {string} in section {string}",
	(roomName, position, sectionName) => {
		roomGroups.seeRoomAtPositionInSection(roomName, position, sectionName);
	}
);

When(
	"I move the room {string} to section {string} using the room menu",
	(roomName, sectionName) => {
		roomGroups.openRoomCardMenu(roomName);
		roomGroups.clickRoomCardMenuAction("move-to-group");
		roomGroups.chooseMoveTarget(sectionName);
		roomGroups.confirmMoveDialog();
	}
);

When("I choose {string} in the menu of room {string}", (action, roomName) => {
	roomGroups.openRoomCardMenu(roomName);
	roomGroups.clickRoomCardMenuAction(action);
});

When("I drag the room {string} into section {string}", (roomName, sectionName) => {
	roomGroups.dragRoomToSection(roomName, sectionName);
});

When(
	"I drag the room {string} onto the collapsed room group {string}",
	(roomName, groupName) => {
		roomGroups.dragRoomOntoCollapsedGroup(roomName, groupName);
	}
);

When("I drag the room {string} onto the room {string}", (roomName, targetRoomName) => {
	roomGroups.dragRoomOntoRoom(roomName, targetRoomName);
});

When(
	"I drag the room group {string} onto the room group {string}",
	(groupName, targetGroupName) => {
		roomGroups.dragGroupOntoGroup(groupName, targetGroupName);
	}
);

When("I restore the confirmation for deleting room groups", () => {
	roomGroups.restoreDeleteConfirmations();
});

When("I reload the rooms overview", () => {
	roomGroups.reloadRoomsOverview();
});

Then("I do not see an error alert on the rooms overview", () => {
	roomGroups.verifyNoErrorAlert();
});

// Simulates a change from another device: a separate API client with its own (fresh) revision changes the group
// while the open page still holds the older revision.
When(
	"on another device the room group {string} is renamed to {string}",
	(groupName, newName) => {
		cy.getCookie("jwt").then((cookie) => {
			const headers = { Authorization: `Bearer ${cookie.value}` };

			cy.request({ url: "/api/v3/room-arrangements/me", headers }).then(
				({ body }) => {
					const group = body.groups.find((g) => g.name === groupName);

					cy.request({
						method: "PATCH",
						url: `/api/v3/room-arrangements/me/groups/${group.id}`,
						headers,
						body: { expectedRevision: body.revision, name: newName },
					});
				}
			);
		});
	}
);

Then("I see a notice that the room groups were changed in the meantime", () => {
	roomGroups.seeChangedElsewhereNotice();
});

Then("I see the hint to start grouping rooms", () => {
	roomGroups.seeOnboardingHint();
});

Then("I do not see the hint to start grouping rooms", () => {
	roomGroups.doNotSeeOnboardingHint();
});

When("I add a group from the hint to start grouping rooms", () => {
	roomGroups.clickOnboardingAddGroup();
});

When("I collapse all room groups from the rooms menu", () => {
	roomGroups.chooseRoomsMenuAction("rooms-menu-collapse-all-groups");
});

When("I expand all room groups from the rooms menu", () => {
	roomGroups.chooseRoomsMenuAction("rooms-menu-expand-all-groups");
});

When("I start selecting rooms from the rooms menu", () => {
	roomGroups.chooseRoomsMenuAction("rooms-menu-select-rooms");
});

When("I select the room {string}", (roomName) => {
	roomGroups.selectRoom(roomName);
});

Then("I see {string} selected rooms", (count) => {
	roomGroups.seeSelectionCount(count);
});

When("I move the selected rooms to section {string}", (sectionName) => {
	roomGroups.moveSelectionTo(sectionName);
});

Then("I do not see the room selection", () => {
	roomGroups.doNotSeeSelectionBar();
});

When("I undo the last change on the rooms overview", () => {
	roomGroups.undoLastChange();
});

When("I watch for changes to the room arrangement", () => {
	cy.intercept({
		method: /^(POST|PATCH|PUT|DELETE)$/,
		url: "**/api/v3/room-arrangements/**",
	}).as("arrangementWrite");
	cy.intercept({ method: "PATCH", url: "**/api/v3/rooms" }).as("legacyRoomMove");
});

Then("no change to the room arrangement was sent", () => {
	cy.wait(500);
	cy.get("@arrangementWrite.all").should("have.length", 0);
	cy.get("@legacyRoomMove.all").should("have.length", 0);
});

When("I scroll through the rooms overview", () => {
	cy.scrollTo("bottom", { duration: 400, ensureScrollable: false });
	cy.scrollTo("top", { duration: 400, ensureScrollable: false });
});

When("I open and close the menu of room group {string}", (groupName) => {
	roomGroups.openGroupMenu(groupName);
	cy.get("body").type("{esc}");
});

When("I open and cancel the move dialog of room {string}", (roomName) => {
	roomGroups.openRoomCardMenu(roomName);
	roomGroups.clickRoomCardMenuAction("move-to-group");
	cy.get('[data-testid="room-move-dialog-cancel"]').click();
});

When("I select and deselect the room {string}", (roomName) => {
	roomGroups.selectRoom(roomName);
	roomGroups
		.getRoomCard(roomName)
		.find('[data-testid="room-card-select"] input')
		.uncheck({ force: true });
});

When("I leave the room selection", () => {
	cy.get('[data-testid="room-selection-cancel"]').click();
});
