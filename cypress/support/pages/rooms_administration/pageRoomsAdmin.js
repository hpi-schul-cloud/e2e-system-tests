class RoomsAdmin {
	static #submenuRoomAdminLink = '[data-testid="sidebar-management-rooms"]';
	static #roomTable = '[data-testid="room-admin-table"]';
	static #roomOwnerAlertIcon = '[data-testid="room-admin-table-owner-not-existing"]';
	static #roomsTableName = '[data-testid="room-admin-table"]';

	navigateToRoomsAdministrationPageViaSubmenu() {
		cy.get(RoomsAdmin.#submenuRoomAdminLink).should("be.visible").click();
	}

	isRoomsAdministrationPage() {
		cy.url().should("include", "/administration/rooms/manage");
	}

	seeAlertIconInRoomOwnerColumn(roomName) {
		cy.get(RoomsAdmin.#roomTable)
			// find the row containing the room
			.contains("tr", roomName)
			.within(() => {
				// find the row containing the alert icon
				cy.get(RoomsAdmin.#roomOwnerAlertIcon)
					// second column (Room Owner)
					.should("be.visible");
			});
	}

	seeRoomInRoomsTable(roomName) {
		cy.get(RoomsAdmin.#roomsTableName).should("contain", roomName);
	}
}

export default RoomsAdmin;
