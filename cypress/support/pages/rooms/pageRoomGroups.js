"use strict";

class RoomGroups {
	static #ungroupedSection = '[data-testid="room-group-ungrouped"]';
	static #namedSection = "[data-group-id]";
	static #groupTitle = '[data-testid="room-group-title"]';
	static #groupToggle = '[data-testid="room-group-toggle"]';
	static #groupCount = '[data-testid="room-group-count"]';
	static #groupDragHandle = '[data-testid="room-group-drag-handle"]';
	static #groupMenu = '[data-testid="room-group-menu"]';
	static #groupGrid = '[data-testid="room-group-grid"]';
	static #groupEmptyHint = '[data-testid="room-group-empty"]';
	static #addGroupButton = '[data-testid="room-group-add"]';
	static #nameInput = '[data-testid="room-group-name-input"]';
	static #nameDialogConfirm = '[data-testid="room-group-name-dialog-confirm"]';
	static #nameDialogCancel = '[data-testid="room-group-name-dialog-cancel"]';
	static #deleteDialog = '[data-testid="room-group-delete-dialog"]';
	static #deleteDontAsk = '[data-testid="room-group-delete-dont-ask"]';
	static #deleteConfirm = '[data-testid="room-group-delete-confirm"]';
	static #deleteCancel = '[data-testid="room-group-delete-cancel"]';
	static #roomCard = '[data-testid^="board-grid-item-"]';
	static #roomCardMenu = '[data-testid="room-card-menu"]';
	static #moveDialogConfirm = '[data-testid="room-move-dialog-confirm"]';
	static #roomsMenu = '[data-testid="rooms-menu"]';
	static #restoreConfirmation =
		'[data-testid="rooms-menu-restore-group-delete-confirmation"]';
	static #alertMessage = '[data-testid="alert-text"]';

	getGroupSection(groupName) {
		return cy
			.contains(
				`${RoomGroups.#namedSection} ${RoomGroups.#groupTitle}`,
				new RegExp(`^\\s*${Cypress._.escapeRegExp(groupName)}\\s*$`)
			)
			.closest(RoomGroups.#namedSection);
	}

	getSection(sectionName) {
		return sectionName === "Ungrouped"
			? cy.get(RoomGroups.#ungroupedSection)
			: this.getGroupSection(sectionName);
	}

	getRoomCard(roomName) {
		return cy.contains(RoomGroups.#roomCard, roomName);
	}

	clickAddGroup() {
		// While no group exists, the first-run line offers the add action instead of the bottom row.
		cy.get(
			`${RoomGroups.#addGroupButton}, [data-testid="room-groups-onboarding-add"]`
		)
			.filter(":visible")
			.first()
			.click();
	}

	enterGroupName(groupName) {
		cy.get(RoomGroups.#nameInput).find("input").should("be.visible").clear();
		if (groupName.length > 0) {
			cy.get(RoomGroups.#nameInput).find("input").type(groupName, { delay: 0 });
		}
	}

	confirmGroupNameDialog() {
		cy.get(RoomGroups.#nameDialogConfirm).click();
	}

	cancelGroupNameDialog() {
		cy.get(RoomGroups.#nameDialogCancel).click();
	}

	confirmIsRejectedWithError() {
		cy.get(RoomGroups.#nameDialogConfirm).click();
		this.seeGroupNameError();
	}

	seeGroupNameError() {
		cy.get(RoomGroups.#nameInput)
			.find(".v-messages")
			.invoke("text")
			.should("not.be.empty");
		cy.get(RoomGroups.#nameDialogConfirm).should("be.visible");
	}

	seeNameDialogClosed() {
		cy.get(RoomGroups.#nameInput).should("not.exist");
	}

	seeGroup(groupName) {
		this.getGroupSection(groupName).should("be.visible");
	}

	doNotSeeGroup(groupName) {
		cy.get("body").then(($body) => {
			const titles = $body
				.find(`${RoomGroups.#namedSection} ${RoomGroups.#groupTitle}`)
				.toArray();
			const names = titles.map((title) => title.textContent.trim());
			expect(names).not.to.include(groupName);
		});
	}

	seeGroupIsEmpty(groupName) {
		this.getGroupSection(groupName).find(RoomGroups.#roomCard).should("not.exist");
		this.getGroupSection(groupName).find(RoomGroups.#groupEmptyHint).should("exist");
	}

	seeGroupAtPosition(groupName, position) {
		cy.get(`[data-testid="room-group-${position}"]`)
			.find(RoomGroups.#groupTitle)
			.should("have.text", groupName);
	}

	seeUngroupedBeforeAllGroups() {
		cy.get(`${RoomGroups.#ungroupedSection}, ${RoomGroups.#namedSection}`)
			.first()
			.should("have.attr", "data-testid", "room-group-ungrouped");
	}

	openGroupMenu(groupName) {
		this.getGroupSection(groupName).find(RoomGroups.#groupMenu).first().click();
	}

	clickGroupMenuAction(action) {
		cy.get(`[data-testid="room-group-menu-${action}"]`).should("be.visible").click();
	}

	seeDeleteDialog() {
		cy.get(RoomGroups.#deleteDialog).should("be.visible");
	}

	doNotSeeDeleteDialog() {
		cy.wait(500);
		cy.get(RoomGroups.#deleteDialog).should("not.exist");
	}

	checkDoNotAskAgain() {
		cy.get(RoomGroups.#deleteDontAsk).find("input").check({ force: true });
	}

	confirmDeleteDialog() {
		cy.get(RoomGroups.#deleteConfirm).click();
	}

	cancelDeleteDialog() {
		cy.get(RoomGroups.#deleteCancel).click();
	}

	toggleGroup(groupName) {
		this.getGroupSection(groupName).find(RoomGroups.#groupToggle).click();
	}

	seeGroupCollapsed(groupName) {
		this.getGroupSection(groupName)
			.find(RoomGroups.#groupToggle)
			.should("have.attr", "aria-expanded", "false");
		this.getGroupSection(groupName).should(($section) => {
			const visibleCards = $section.find(RoomGroups.#roomCard).filter(":visible");
			expect(visibleCards).to.have.length(0);
		});
	}

	seeGroupExpanded(groupName) {
		this.getGroupSection(groupName)
			.find(RoomGroups.#groupToggle)
			.should("have.attr", "aria-expanded", "true");
	}

	seeGroupRoomCount(groupName, count) {
		this.getGroupSection(groupName)
			.find(RoomGroups.#groupCount)
			.should("contain.text", count);
	}

	seeRoomInSection(roomName, sectionName) {
		this.getSection(sectionName)
			.find(RoomGroups.#roomCard)
			.should("contain.text", roomName);
	}

	doNotSeeRoomInSection(roomName, sectionName) {
		this.getSection(sectionName).then(($section) => {
			const cards = $section.find(RoomGroups.#roomCard).toArray();
			expect(cards.some((card) => card.textContent.includes(roomName))).to.equal(
				false
			);
		});
	}

	seeRoomExactlyOnce(roomName) {
		cy.get(RoomGroups.#roomCard).then(($cards) => {
			const matches = $cards
				.toArray()
				.filter((card) => card.textContent.includes(roomName));
			expect(matches).to.have.length(1);
		});
	}

	seeRoomAtPositionInSection(roomName, position, sectionName) {
		this.getSection(sectionName)
			.find(RoomGroups.#roomCard)
			.eq(Number(position))
			.should("contain.text", roomName);
	}

	openRoomCardMenu(roomName) {
		this.getRoomCard(roomName).find(RoomGroups.#roomCardMenu).click();
	}

	clickRoomCardMenuAction(action) {
		cy.get(`[data-testid="room-card-menu-${action}"]`).should("be.visible").click();
	}

	chooseMoveTarget(sectionName) {
		const target =
			sectionName === "Ungrouped"
				? cy.get('[data-testid="room-move-target-ungrouped"]')
				: cy.contains('[data-testid^="room-move-target-"]', sectionName);
		target.find("input").check({ force: true });
	}

	confirmMoveDialog() {
		cy.get(RoomGroups.#moveDialogConfirm).click();
	}

	// SortableJS runs with forceFallback, so the drop needs a real pointer sequence that ends with pointerup.
	pointerDrag(source, getTarget) {
		const options = {
			button: 0,
			pointerId: 1,
			isPrimary: true,
			pointerType: "mouse",
			force: true,
		};

		getTarget().scrollIntoView({ block: "center" });
		source.then(($source) => {
			cy.wrap($source).trigger("pointerdown", "top", options);
			cy.wrap($source).trigger("pointermove", "center", options);
			getTarget().then(($target) => {
				cy.wrap($target).trigger("pointermove", "center", options);
				cy.wait(400);
				cy.wrap($target).trigger("pointermove", "center", options);
				cy.wait(400);
				cy.wrap($target).trigger("pointerup", "center", options);
			});
		});
		cy.wait(1000);
	}

	dragRoomToSection(roomName, sectionName) {
		this.pointerDrag(this.getRoomCard(roomName), () =>
			this.getSection(sectionName).find(RoomGroups.#groupGrid)
		);
	}

	dragRoomOntoCollapsedGroup(roomName, groupName) {
		this.pointerDrag(this.getRoomCard(roomName), () =>
			this.getGroupSection(groupName).find(
				'[data-testid="room-group-collapsed-drop"]'
			)
		);
	}

	dragRoomOntoRoom(roomName, targetRoomName) {
		this.pointerDrag(this.getRoomCard(roomName), () =>
			this.getRoomCard(targetRoomName)
		);
	}

	dragGroupOntoGroup(groupName, targetGroupName) {
		this.pointerDrag(
			this.getGroupSection(groupName).find(RoomGroups.#groupDragHandle),
			() => this.getGroupSection(targetGroupName).find(RoomGroups.#groupDragHandle)
		);
	}

	restoreDeleteConfirmations() {
		cy.get(RoomGroups.#roomsMenu).click();
		cy.get(RoomGroups.#restoreConfirmation).should("be.visible").click();
	}

	reloadRoomsOverview() {
		cy.reload();
		cy.get('[data-testid="room-grouped-overview"]').should("be.visible");
	}

	seeChangedElsewhereNotice() {
		cy.get(".v-alert.text-error")
			.find(RoomGroups.#alertMessage)
			.should("be.visible")
			.and("contain.text", "zwischenzeitlich");
	}

	seeOnboardingHint() {
		cy.get('[data-testid="room-groups-onboarding-add"]').should("be.visible");
	}

	doNotSeeOnboardingHint() {
		cy.get('[data-testid="room-groups-onboarding-add"]').should("not.exist");
	}

	clickOnboardingAddGroup() {
		cy.get('[data-testid="room-groups-onboarding-add"]').click();
	}

	chooseRoomsMenuAction(testId) {
		cy.get(RoomGroups.#roomsMenu).click();
		cy.get(`[data-testid="${testId}"]`).should("be.visible").click();
	}

	selectRoom(roomName) {
		this.getRoomCard(roomName)
			.find('[data-testid="room-card-select"] input')
			.check({ force: true });
	}

	seeSelectionCount(count) {
		cy.get('[data-testid="room-selection-bar"]')
			.should("be.visible")
			.and("contain.text", count);
	}

	moveSelectionTo(sectionName) {
		cy.get('[data-testid="room-selection-move"]').click();
		this.chooseMoveTarget(sectionName);
		this.confirmMoveDialog();
	}

	doNotSeeSelectionBar() {
		cy.get('[data-testid="room-selection-bar"]').should("not.exist");
	}

	undoLastChange() {
		// Undo is the action of the shared success notification (the same one archiving uses).
		cy.get('[data-testid="alert-action"]').first().should("be.visible").click();
		cy.wait(1000);
	}

	verifyNoErrorAlert() {
		// Success notifications (e.g. a move with undo) are expected; only error alerts count.
		cy.get(".v-alert.text-error").should("not.exist");
	}
}

export default RoomGroups;
