"use strict";

// the student id and the admin view of the student are shared between the user sessions of one scenario
const consentState = { studentId: undefined, studentSnapshot: undefined };

const consentCases = {
	"partially given": {
		userConsent: { form: "digital", privacyConsent: true, termsOfUseConsent: false },
		parentConsents: [
			{ form: "analog", privacyConsent: false, termsOfUseConsent: true },
		],
	},
	"fully given": {
		userConsent: { form: "digital", privacyConsent: true, termsOfUseConsent: true },
		parentConsents: [
			{ form: "analog", privacyConsent: true, termsOfUseConsent: true },
		],
	},
	"without parent consents": {
		userConsent: { form: "digital", privacyConsent: true, termsOfUseConsent: true },
		parentConsents: [],
	},
};

class UserConsent {
	authorizedRequest(options) {
		// the legacy api only accepts the jwt as bearer token
		return cy.getCookie("jwt").then((cookie) => {
			expect(cookie, "jwt cookie").to.exist;
			return cy.request({
				...options,
				headers: { Authorization: `Bearer ${cookie.value}` },
			});
		});
	}

	rememberOwnUserIdAsStudent() {
		this.authorizedRequest({ method: "GET", url: "/api/v3/me" }).then((response) => {
			expect(response.status).to.eq(200);
			consentState.studentId = response.body.user.id;
		});
	}

	setStudentConsentAsAdmin(caseName) {
		const consent = consentCases[caseName];
		expect(consent, `consent case '${caseName}'`).to.exist;
		cy.wrap(consentState).its("studentId").should("be.a", "string");
		cy.then(() => {
			const studentUrl = `/administration/students/${consentState.studentId}`;
			// the legacy student edit form writes the consents via the feathers user service
			cy.request(`${studentUrl}/edit`).then((editPage) => {
				const csrfToken = /name="_csrf" value="([^"]+)"/.exec(editPage.body)?.[1];
				expect(csrfToken, "csrf token of the student edit form").to.be.a(
					"string"
				);
				const body = {
					_csrf: csrfToken,
					student_form: consent.userConsent.form,
					student_privacyConsent: String(consent.userConsent.privacyConsent),
					student_termsOfUseConsent: String(
						consent.userConsent.termsOfUseConsent
					),
				};
				const [parentConsent] = consent.parentConsents;
				if (parentConsent) {
					body.parent_form = parentConsent.form;
					body.parent_privacyConsent = String(parentConsent.privacyConsent);
					body.parent_termsOfUseConsent = String(
						parentConsent.termsOfUseConsent
					);
				}
				cy.request({
					method: "POST",
					url: studentUrl,
					form: true,
					body,
					headers: {
						Referer: `${Cypress.config("baseUrl")}${studentUrl}/edit`,
					},
					followRedirect: false,
				})
					.its("status")
					.should("eq", 302);
			});
		});
	}

	changeOwnLanguageAsStudent(language) {
		this.authorizedRequest({
			method: "PATCH",
			url: "/api/v3/user/language",
			body: { language },
		}).then((response) => {
			expect(response.status).to.eq(200);
			expect(response.body.successful).to.eq(true);
		});
	}

	getStudentAsAdmin() {
		cy.wrap(consentState).its("studentId").should("be.a", "string");
		return cy.then(() =>
			this.authorizedRequest({
				method: "GET",
				url: `/api/v3/users/admin/students/${consentState.studentId}`,
			}).then((response) => {
				expect(response.status).to.eq(200);
				return response.body;
			})
		);
	}

	verifyStudentConsentAsAdmin(caseName, expectedStatus) {
		const expected = consentCases[caseName];
		this.getStudentAsAdmin().then((student) => {
			const consentDescription = `consent ${JSON.stringify(student.consent)}`;
			expect(
				student.consentStatus,
				`consent status of ${consentDescription}`
			).to.eq(expectedStatus);
			expect(student.consent?.userConsent, consentDescription).to.deep.include(
				expected.userConsent
			);
			// false values must be returned as false and not be dropped as missing values
			const parentConsents = student.consent.parentConsents ?? [];
			expect(
				parentConsents,
				`parent consents of ${consentDescription}`
			).to.have.length(expected.parentConsents.length);
			expected.parentConsents.forEach((parentConsent, index) => {
				expect(parentConsents[index], consentDescription).to.deep.include(
					parentConsent
				);
			});
		});
		this.verifyStudentConsentStatusInAdminList(expectedStatus);
	}

	verifyStudentConsentStatusInAdminList(expectedStatus) {
		this.authorizedRequest({
			method: "GET",
			url: "/api/v3/users/admin/students",
			qs: { $limit: 100 },
		}).then((response) => {
			expect(response.status).to.eq(200);
			const student = response.body.data.find(
				(user) => user._id === consentState.studentId
			);
			expect(student, "student in admin list").to.exist;
			expect(student.consentStatus, "consent status in admin list").to.eq(
				expectedStatus
			);
		});
	}

	rememberStudentAsAdmin() {
		this.getStudentAsAdmin().then((student) => {
			consentState.studentSnapshot = student;
		});
	}

	verifyStudentUnchangedAsAdmin() {
		this.getStudentAsAdmin().then((student) => {
			expect(consentState.studentSnapshot, "remembered student").to.exist;
			expect(student).to.deep.equal(consentState.studentSnapshot);
		});
	}
}

export default UserConsent;
