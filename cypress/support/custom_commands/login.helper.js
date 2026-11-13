const externalUsernameInputFieldElement = '[id="Username"]';
const externalPasswordInputFieldElement = '[id="Password"]';
const oauth_url =
	"https://idm-default-main.cd.dbildungscloud.dev/realms/default/protocol/openid-connect/auth?client_id=dbildungscloud-server&redirect_uri=https://default-main.cd.dbildungscloud.dev/api/v3/sso/oauth/62c7f233f35a554ba3ed42f1&response_type=code&scope=openid%20profile%20email&kc_idp_hint=oidcmock";

const emailInputFieldElement = '[data-testid="username-email"]';
const passwordInputFieldElement = '[data-testid="password-email"]';
const submitButton = '[data-testid="submit-login-email"]';
const nextButtonOnFirstLoginPages = '[id="nextSection"]';
const skipToDashboardButtonOnFirstLoginPage = '[data-testid="btn_schul-cloud_erkunden"]';
const nbcLoginWithEmailOptionButton = '[data-testid="submit-cloud-site"]';
const studentAgeSelectRadioBtn = '[id="reg-16"]';
const nextButtonAfterAgeSelection = "#showExistingLoginForm";
const datePickerSelectorForDOB = '[data-testid="form-date-input-studentBirthdate"]';
const studentUpdatePassword = '[data-testid="firstlogin_password"]';
const studentConfirmPassword = '[data-testid="firstlogin_password_control"]';
const privacyConsentCheckbox = 'input[name="privacyConsent"]';
const termsOfUseCheckbox = 'input[name="termsOfUseConsent"]';

const env = Cypress.env();
let environmentUpperCased;

export const getUserCredentials = (username) => {
	switch (username) {
		case "admin1_brb":
			return ["ADMIN_1_BRB_EMAIL", "ADMIN_1_BRB_PASSWORD"];
		case "admin_hc_brb":
			return ["ADMIN_HC_BRB_EMAIL", "ADMIN_HC_BRB_PASSWORD"];
		case "teacher1_brb":
			return ["TEACHER_1_BRB_EMAIL", "TEACHER_1_BRB_PASSWORD"];
		case "teacher2_brb":
			return ["TEACHER_2_BRB_EMAIL", "TEACHER_2_BRB_PASSWORD"];
		case "teacher_hc_brb":
			return ["TEACHER_HC_BRB_EMAIL", "TEACHER_HC_BRB_PASSWORD"];
		case "student1_brb":
			return ["STUDENT_1_BRB_EMAIL", "STUDENT_1_BRB_PASSWORD"];
		case "student2_brb":
			return ["STUDENT_2_BRB_EMAIL", "STUDENT_2_BRB_PASSWORD"];
		case "student3_brb":
			return ["STUDENT_3_BRB_EMAIL", "STUDENT_3_BRB_PASSWORD"];
		case "student_hc_brb":
			return ["STUDENT_HC_BRB_EMAIL", "STUDENT_HC_BRB_PASSWORD"];
		case "student_ldap_brb":
			return ["STUDENT_LDAP_BRB", "STUDENT_LDAP_BRB_PASSWORD"];
		case "teacher_ldap_brb":
			return ["TEACHER_LDAP_BRB", "TEACHER_LDAP_BRB_PASSWORD"];
		case "admin_ldap_brb":
			return ["ADMIN_LDAP_BRB", "ADMIN_LDAP_BRB_PASSWORD"];
		case "teacherExt1_brb":
			return ["TEACHER_EXT_1_BRB_EMAIL", "TEACHER_EXT_1_BRB_PASSWORD"];
		case "adminExt1_brb":
			return ["ADMIN_EXT_1_BRB_EMAIL", "ADMIN_EXT_1_BRB_PASSWORD"];
		case "studentExt1_brb":
			return ["STUDENT_EXT_1_BRB_EMAIL", "STUDENT_EXT_1_BRB_PASSWORD"];
		case "teacherExt2_brb":
			return ["TEACHER_EXT_2_BRB_EMAIL", "TEACHER_EXT_2_BRB_PASSWORD"];
		case "studentExt2_brb":
			return ["STUDENT_EXT_2_BRB_EMAIL", "STUDENT_EXT_2_BRB_PASSWORD"];
		case "admin1_double_role_brb":
			return ["ADMIN_1_DOUBLE_ROLE_BRB_EMAIL", "ADMIN_1_DOUBLE_ROLE_BRB_PASSWORD"];
		case "student_1_hcs_brb":
			return ["STUDENT_1_HCS_BRB_EMAIL", "STUDENT_1_HCS_BRB_PASSWORD"];
		case "teacher_1_hcs_brb":
			return ["TEACHER_1_HCS_BRB_EMAIL", "TEACHER_1_HCS_BRB_PASSWORD"];
		case "teacher_2_hcs_brb":
			return ["TEACHER_2_HCS_BRB_EMAIL", "TEACHER_2_HCS_BRB_PASSWORD"];
		case "admin_1_hcs_brb":
			return ["ADMIN_1_HCS_BRB_EMAIL", "ADMIN_1_HCS_BRB_PASSWORD"];
		case "externalPerson1_brb":
			return ["EXTERNAL_PERSON_1_BRB_EMAIL", "EXTERNAL_PERSON_1_BRB_PASSWORD"];

		case "admin1_nbc":
			return ["ADMIN_1_NBC_EMAIL", "ADMIN_1_NBC_PASSWORD"];
		case "admin_hc_nbc":
			return ["ADMIN_HC_NBC_EMAIL", "ADMIN_HC_NBC_PASSWORD"];
		case "teacher1_nbc":
			return ["TEACHER_1_NBC_EMAIL", "TEACHER_1_NBC_PASSWORD"];
		case "teacher2_nbc":
			return ["TEACHER_2_NBC_EMAIL", "TEACHER_2_NBC_PASSWORD"];
		case "teacher_hc_nbc":
			return ["TEACHER_HC_NBC_EMAIL", "TEACHER_HC_NBC_PASSWORD"];
		case "student1_nbc":
			return ["STUDENT_1_NBC_EMAIL", "STUDENT_1_NBC_PASSWORD"];
		case "student2_nbc":
			return ["STUDENT_2_NBC_EMAIL", "STUDENT_2_NBC_PASSWORD"];
		case "student_hc_nbc":
			return ["STUDENT_HC_NBC_EMAIL", "STUDENT_HC_NBC_PASSWORD"];
		case "student_ldap_nbc":
			return ["STUDENT_LDAP_NBC", "STUDENT_LDAP_NBC_PASSWORD"];
		case "teacher_ldap_nbc":
			return ["TEACHER_LDAP_NBC", "TEACHER_LDAP_NBC_PASSWORD"];
		case "admin_ldap_nbc":
			return ["ADMIN_LDAP_NBC", "ADMIN_LDAP_NBC_PASSWORD"];
		case "teacherExt1_nbc":
			return ["TEACHER_EXT_1_NBC_EMAIL", "TEACHER_EXT_1_NBC_PASSWORD"];
		case "adminExt1_nbc":
			return ["ADMIN_EXT_1_NBC_EMAIL", "ADMIN_EXT_1_NBC_PASSWORD"];
		case "studentExt1_nbc":
			return ["STUDENT_EXT_1_NBC_EMAIL", "STUDENT_EXT_1_NBC_PASSWORD"];
		case "teacherExt2_nbc":
			return ["TEACHER_EXT_2_NBC_EMAIL", "TEACHER_EXT_2_NBC_PASSWORD"];
		case "studentExt2_nbc":
			return ["STUDENT_EXT_2_NBC_EMAIL", "STUDENT_EXT_2_NBC_PASSWORD"];
		case "admin1_double_role_nbc":
			return ["ADMIN_1_DOUBLE_ROLE_NBC_EMAIL", "ADMIN_1_DOUBLE_ROLE_NBC_PASSWORD"];
		case "student_1_hcs_nbc":
			return ["STUDENT_1_HCS_NBC_EMAIL", "STUDENT_1_HCS_NBC_PASSWORD"];
		case "teacher_1_hcs_nbc":
			return ["TEACHER_1_HCS_NBC_EMAIL", "TEACHER_1_HCS_NBC_PASSWORD"];
		case "teacher_2_hcs_nbc":
			return ["TEACHER_2_HCS_NBC_EMAIL", "TEACHER_2_HCS_NBC_PASSWORD"];
		case "admin_1_hcs_nbc":
			return ["ADMIN_1_HCS_NBC_EMAIL", "ADMIN_1_HCS_NBC_PASSWORD"];
		case "externalPerson1_nbc":
			return ["EXTERNAL_PERSON_1_NBC_EMAIL", "EXTERNAL_PERSON_1_NBC_PASSWORD"];

		case "teacher1_lh":
			return ["TEACHER_1_LH_EMAIL", "TEACHER_1_LH_PASSWORD"];
		case "teacher2_lh":
			return ["TEACHER_2_LH_EMAIL", "TEACHER_2_LH_PASSWORD"];
		case "student1_lh":
			return ["STUDENT_1_LH_EMAIL", "STUDENT_1_LH_PASSWORD"];
		case "student2_lh":
			return ["STUDENT_2_LH_EMAIL", "STUDENT_2_LH_PASSWORD"];
		case "admin1_lh":
			return ["ADMIN_1_LH_EMAIL", "ADMIN_1_LH_PASSWORD"];

		default:
			return [null, null];
	}
};

// const performExternalLogin = async () => {
// 	const resp = await cy.request('GET', oauth_url);
// 	const oAuthUrl = resp.requestHeaders.path
// 	  cy.intercept(oAuthUrl).as('oauth_url');
// 	  const window = await cy.visit(oAuthUrl);
// 	  expect(window.location.pathname).to.include('/Account/Login');
// 	  const respOAuth = await cy.get('@oauth_url');
// 	  expect(respOAuth.response.statusCode).to.equal(308);
// 	  cy.get(externalUsernameInputFieldElement).should('be.visible');
// 	  cy.get(externalUsernameInputFieldElement)
// 	      .type(env[userEmail], { log: false });
// 	  cy.get(externalPasswordInputFieldElement)
// 	      .type(env[userPassword], { log: false })
// 	      .type('{enter}');
// };

// performExternalLogin method needs to update. One suggestion is from Uwe mentioned above but its upto the dev how he needs to handle this situation.

const performExternalLogin = (username, password) => {
	cy.request("GET", oauth_url).then((resp) => {
		cy.intercept(resp.requestHeaders.referer).as("oauth_url");
		cy.visit(resp.requestHeaders.referer).then((window) => {
			expect(window.location.pathname).to.include("/Account/Login");
			cy.get("@oauth_url").then((resp) => {
				expect(resp.response.statusCode).to.equal(308);
				cy.get(externalUsernameInputFieldElement).should("be.visible");
				cy.get(externalUsernameInputFieldElement).type(username, {
					log: false,
				});
				cy.get(externalPasswordInputFieldElement)
					.type(password, { log: false })
					.type("{enter}");
			});
		});
	});
};

const fillLoginForm = (username, password) => {
	return (
		cy.get(emailInputFieldElement).type(username, { log: false }),
		cy.get(passwordInputFieldElement).type(password, { log: false }),
		cy.get(submitButton).click()
	);
};

const studentFirstLogin = () => {
	Cypress.env("password", Cypress.env("SET_NEW_PWD_BY_STUDENT"));
	cy.get(studentAgeSelectRadioBtn).check();
	cy.get(nextButtonAfterAgeSelection).click();
	cy.get(nextButtonOnFirstLoginPages).click();
	cy.get(nextButtonOnFirstLoginPages).click();
	cy.get(datePickerSelectorForDOB).type("2000-03-21");
	cy.get(nextButtonOnFirstLoginPages).click();
	cy.get(studentUpdatePassword).type(env["password"], { log: false });
	cy.get(studentConfirmPassword).type(env["password"], { log: false });
	cy.get(nextButtonOnFirstLoginPages).click();
	cy.get(skipToDashboardButtonOnFirstLoginPage).click();
};

const nonStudentUsersFirstLogin = (environment, username) => {
	cy.get(nextButtonOnFirstLoginPages).click();
	cy.get(nextButtonOnFirstLoginPages).click();
	if (
		(environment === "brb" || environment === "nbc") &&
		username.includes("externalPerson")
	) {
		cy.get(privacyConsentCheckbox).check();
		cy.get(termsOfUseCheckbox).check();
		cy.get(nextButtonOnFirstLoginPages).click();
	}
	cy.get(skipToDashboardButtonOnFirstLoginPage).click();
};

export const loginWithoutSchoolApi = (username, environment) => {
	visitLoginPage(environment);

	environmentUpperCased === "NBC" && cy.get(nbcLoginWithEmailOptionButton).click();

	let doExternalLogin;

	doExternalLogin = /(?:^|_)extern(?:_|$)/.test(username);

	const [userEmail, userPassword] = getUserCredentials(username);

	doExternalLogin
		? performExternalLogin(env[userEmail], env[userPassword])
		: fillLoginForm(env[userEmail], env[userPassword]);
};

export const loginViaSchoolApi = async (username, environment) => {
	try {
		visitLoginPage(environment);
		const link = Cypress.config("baseUrl");

		await cy
			.task(
				"loginViaSchoolApi",
				{
					url: link,
					apiKey: Cypress.env(`apiKey-${environment}`),
					schoolId: Cypress.env(`schoolId-${environment}`),
					userType: username,
				},
				{ log: false }
			)
			.as("school_api_response");

		await cy.get("@school_api_response").then((res) => {
			Cypress.env(`schoolId-${environment}`, res.schoolId);
			Cypress.env("username", res.username);
			Cypress.env("password", res.initialPassword);
			if (environment.includes("nbc")) {
				cy.get(nbcLoginWithEmailOptionButton).click();
			}

			fillLoginForm(env["username"], env["password"]);
			username.includes("student")
				? studentFirstLogin()
				: nonStudentUsersFirstLogin(environment, username);
		});
	} catch (error) {
		console.error("Error in loginViaSchoolApi:", error);
		throw error;
	}
};

const visitLoginPage = (environment) => {
	environmentUpperCased = environment.toUpperCase();
	const link = Cypress.config("baseUrl", env[environmentUpperCased]);
	cy.log(link);
	cy.visit("/login");
};

// Timing test: create the user via admin API (as before), then log in, complete the
// first login and set the language via API instead of the UI, and set the same
// cookies the client sets after a form login.
export const loginViaApiOnly = (username, environment) => {
	const baseUrl = Cypress.config("baseUrl").replace(/\/$/, "");
	const domain = new URL(baseUrl).hostname;
	const isStudent = username.includes("student");

	cy.task(
		"loginViaSchoolApi",
		{
			url: baseUrl,
			apiKey: Cypress.env(`apiKey-${environment}`),
			schoolId: Cypress.env(`schoolId-${environment}`),
			userType: username,
		},
		{ log: false }
	).then((res) => {
		Cypress.env(`schoolId-${environment}`, res.schoolId);
		Cypress.env("username", res.username);
		const newPassword = isStudent
			? Cypress.env("SET_NEW_PWD_BY_STUDENT")
			: res.initialPassword;
		Cypress.env("password", newPassword);

		cy.request({
			method: "POST",
			url: `${baseUrl}/api/v3/authentication/local`,
			body: { username: res.username, password: res.initialPassword },
			log: false,
		}).then(({ body }) => {
			const token = body.accessToken;
			const headers = { Authorization: `Bearer ${token}` };

			const firstLoginBody = isStudent
				? {
						"password-1": newPassword,
						"password-2": newPassword,
						studentBirthdate: "2000-03-21",
					}
				: {};
			if (/(?:^|_)externalPerson/.test(username)) {
				firstLoginBody.privacyConsent = true;
				firstLoginBody.termsOfUseConsent = true;
			}

			cy.setCookie("jwt", token, { domain, log: false });
			cy.setCookie("isLoggedIn", "true", { domain, log: false });
			cy.request({
				method: "PATCH",
				url: `${baseUrl}/api/v3/user/language`,
				headers,
				body: { language: "de" },
				log: false,
			});
			// The v1 firstLogin service is not exposed publicly; the legacy client's
			// form route forwards to it. It is CSRF-protected, so read the token first.
			cy.request({ url: `${baseUrl}/firstLogin`, log: false }).then((page) => {
				const match = page.body.match(/name="_csrf" value="([^"]+)"/);
				expect(match, "csrf token on /firstLogin").to.not.equal(null);
				cy.request({
					method: "POST",
					url: `${baseUrl}/firstLogin/submit`,
					form: true,
					body: { _csrf: match[1], ...firstLoginBody },
					log: false,
				});
			});
		});
	});
};
