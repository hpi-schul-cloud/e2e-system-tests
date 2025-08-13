class RoomAdmin {
	static #submenuRoomAdminLink = '[data-testid="sidebar-management-rooms"]';
	static #roomTable = '[data-testid="room-admin-table"]';
	//data-testid is to be defined?
	static #roomOwnerAlertIcon = "td span";
	static #roomTableName = '[data-testid="room-admin-table"]';

	navigateToRoomAdministrationPageViaSubmenu() {
		cy.get(RoomAdmin.#submenuRoomAdminLink).should("be.visible").click();
	}

	isRoomAdministrationPage() {
		cy.url().should("include", "/administration/rooms/manage");
	}

	seeAlertIconInRoomOwnerColumn(roomName) {
		cy.get(RoomAdmin.#roomTable)
			// find the row containing the room
			.contains("tr", roomName)
			.within(() => {
				// find the row containing the alert icon
				cy.get(RoomAdmin.#roomOwnerAlertIcon)
					// second column (Room Owner)
					.should("be.visible");
			});
	}

	seeRoomInRoomTable(roomName) {
		cy.get(RoomAdmin.#roomTableName).should("contain", roomName);
	}
}

export default RoomAdmin;
