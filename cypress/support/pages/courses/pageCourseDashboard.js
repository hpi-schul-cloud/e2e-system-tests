"use strict";

// course ids and remembered dashboard are shared between the steps of one scenario
const dashboardState = { courseIds: {}, rememberedGrid: undefined };

class CourseDashboard {
	getCsrfTokenFromLegacyPage(url) {
		return cy.request(url).then((response) => {
			const csrfToken = /<meta name="csrfToken" content="([^"]+)"/.exec(
				response.body
			)?.[1];
			expect(csrfToken, `csrf token of ${url}`).to.be.a("string");
			return csrfToken;
		});
	}

	createCoursesViaApi(names) {
		names.forEach((name) => {
			cy.request({ method: "POST", url: "/api/v3/courses", body: { name } }).then(
				(response) => {
					expect(response.status).to.eq(201);
					dashboardState.courseIds[name] = response.body.courseId;
				}
			);
		});
	}

	deleteCoursesViaLegacyClient(names) {
		names.forEach((name) => {
			cy.then(() => {
				const courseId = dashboardState.courseIds[name];
				expect(courseId, `id of course '${name}'`).to.be.a("string");
				this.getCsrfTokenFromLegacyPage(`/courses/${courseId}/edit`).then(
					(csrfToken) => {
						cy.request({
							method: "DELETE",
							url: `/courses/${courseId}`,
							headers: { "csrf-token": csrfToken },
						})
							.its("status")
							.should("eq", 200);
					}
				);
			});
		});
	}

	getDashboard() {
		return cy.request("/api/v3/dashboard").then((response) => {
			expect(response.status).to.eq(200);
			return response.body;
		});
	}

	courseId(name) {
		const courseId = dashboardState.courseIds[name];
		expect(courseId, `id of course '${name}'`).to.be.a("string");
		return courseId;
	}

	findPosition(dashboard, name) {
		const courseId = this.courseId(name);
		for (const element of dashboard.gridElements) {
			if (element.id === courseId) {
				return { x: element.xPosition, y: element.yPosition };
			}
			const groupIndex = (element.groupElements ?? []).findIndex(
				(course) => course.id === courseId
			);
			if (groupIndex >= 0) {
				return { x: element.xPosition, y: element.yPosition, groupIndex };
			}
		}
		throw new Error(`course '${name}' not found on dashboard`);
	}

	moveElement(dashboard, from, to) {
		return cy
			.request({
				method: "PATCH",
				url: `/api/v3/dashboard/${dashboard.id}/moveElement`,
				body: { from, to },
			})
			.then((response) => {
				expect(response.status).to.eq(200);
				return response.body;
			});
	}

	moveCourseOntoCourse(movedName, targetName) {
		this.getDashboard().then((dashboard) => {
			const from = this.findPosition(dashboard, movedName);
			const { x, y } = this.findPosition(dashboard, targetName);
			this.moveElement(dashboard, from, { x, y });
		});
	}

	moveCourseToFreePosition(name, x, y) {
		this.getDashboard().then((dashboard) => {
			const occupied = dashboard.gridElements.some(
				(element) => element.xPosition === x && element.yPosition === y
			);
			expect(occupied, `position ${x}/${y} is occupied`).to.eq(false);
			const from = this.findPosition(dashboard, name);
			this.moveElement(dashboard, from, { x, y });
		});
	}

	renameGroupOfCourse(name, title) {
		this.getDashboard().then((dashboard) => {
			const { x, y, groupIndex } = this.findPosition(dashboard, name);
			expect(groupIndex, `course '${name}' is in a group`).to.be.a("number");
			cy.request({
				method: "PATCH",
				url: `/api/v3/dashboard/${dashboard.id}/element`,
				qs: { x, y },
				body: { title },
			})
				.its("status")
				.should("eq", 200);
		});
	}

	verifyGroup(title, names) {
		this.getDashboard().then((dashboard) => {
			const groups = dashboard.gridElements.filter((element) => element.groupId);
			const group = groups.find((element) => element.title === title);
			expect(group, `group '${title}' in ${JSON.stringify(groups)}`).to.exist;
			expect(group.groupElements.map((course) => course.id)).to.deep.equal(
				names.map((name) => this.courseId(name))
			);
			expect(group.groupElements.map((course) => course.title)).to.deep.equal(
				names
			);
		});
	}

	verifySingleCourseAtPosition(name, x, y) {
		this.getDashboard().then((dashboard) => {
			const element = dashboard.gridElements.find(
				(gridElement) => gridElement.id === this.courseId(name)
			);
			expect(element, `single element of course '${name}'`).to.exist;
			expect(element.groupElements, `course '${name}' is not grouped`).to.be
				.undefined;
			expect(element.title).to.eq(name);
			expect({ x: element.xPosition, y: element.yPosition }).to.deep.equal({
				x,
				y,
			});
		});
	}

	verifyNoGroups() {
		this.getDashboard().then((dashboard) => {
			const groups = dashboard.gridElements.filter((element) => element.groupId);
			expect(groups, "groups on dashboard").to.have.length(0);
		});
	}

	rememberDashboardGrid() {
		this.getDashboard().then((dashboard) => {
			dashboardState.rememberedGrid = dashboard.gridElements;
		});
	}

	verifyRememberedDashboardGrid() {
		this.getDashboard().then((dashboard) => {
			expect(dashboardState.rememberedGrid, "remembered dashboard").to.exist;
			expect(dashboard.gridElements).to.deep.equal(dashboardState.rememberedGrid);
		});
	}

	visitCourseOverviewAndWaitForDashboard() {
		cy.intercept("GET", "**/api/v3/dashboard").as("dashboard_api");
		cy.visit("/rooms/courses-overview");
		cy.wait("@dashboard_api").its("response.statusCode").should("eq", 200);
	}

	seeGroupTitleOnCourseOverview(title) {
		cy.get(".group-avatar").should("exist");
		cy.contains(title).should("be.visible");
	}

	doNotSeeGroupOnCourseOverview(title) {
		cy.get('[data-testid="course-title"]').should("exist");
		cy.get(".group-avatar").should("not.exist");
		cy.contains(title).should("not.exist");
	}

	doNotSeeTextOnCourseOverview(text) {
		cy.contains(text).should("not.exist");
	}

	seeCourseOnCourseOverview(name) {
		cy.contains('[data-testid="course-title"]', name).should("be.visible");
	}
}

export default CourseDashboard;
