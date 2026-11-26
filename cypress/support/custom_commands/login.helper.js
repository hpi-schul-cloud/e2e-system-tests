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

		await getStoredSchoolId(environment).then((storedSchoolId) =>
			cy
				.task(
					"loginViaSchoolApi",
					{
						url: link,
						apiKey: Cypress.env(`apiKey-${environment}`),
						schoolId:
							storedSchoolId || Cypress.env(`schoolId-${environment}`),
						userType: username,
					},
					{ log: false }
				)
				.as("school_api_response")
		);

		await cy.get("@school_api_response").then((res) => {
			Cypress.env(`schoolId-${environment}`, res.schoolId);
			storeSchoolId(environment, res.schoolId);
			Cypress.env("username", res.username);
			Cypress.env("password", res.initialPassword);
			storePassword(
				username,
				environment,
				username.includes("student")
					? Cypress.env("SET_NEW_PWD_BY_STUDENT")
					: res.initialPassword
			);
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

// Cypress clears Cypress.env when it re-runs a test after its first visit to a new domain.
// The school ID per test file and the password per user are therefore also kept in the
// Node process (tasks setRuntimeValue / getRuntimeValue in cypress.config.js).
const schoolIdKey = (environment) => `schoolId-${environment}-${Cypress.spec.relative}`;
const passwordKey = (username, environment) =>
	`password-${environment}-${username}-${Cypress.spec.relative}`;

const getStoredSchoolId = (environment) =>
	cy.task("getRuntimeValue", schoolIdKey(environment), { log: false });

const storeSchoolId = (environment, schoolId) =>
	cy.task(
		"setRuntimeValue",
		{ key: schoolIdKey(environment), value: schoolId },
		{ log: false }
	);

export const getStoredPassword = (username, environment) =>
	cy.task("getRuntimeValue", passwordKey(username, environment), { log: false });

const storePassword = (username, environment, password) =>
	cy.task(
		"setRuntimeValue",
		{ key: passwordKey(username, environment), value: password },
		{ log: false }
	);

// Creates the user through the admin API like loginViaSchoolApi, then logs in, completes the
// first login and sets the language through the API instead of the UI. Sets the same
// host-only cookies the client sets after a login through the form.
export const loginViaApi = (username, environment) => {
	const baseUrl = Cypress.config("baseUrl").replace(/\/$/, "");
	const domain = new URL(baseUrl).hostname;
	const isStudent = username.includes("student");

	getStoredSchoolId(environment).then((storedSchoolId) => {
		cy.task(
			"loginViaSchoolApi",
			{
				url: baseUrl,
				apiKey: Cypress.env(`apiKey-${environment}`),
				schoolId: storedSchoolId || Cypress.env(`schoolId-${environment}`),
				userType: username,
			},
			{ log: false }
		).then((res) => {
			// Students set a new password in their first login, as in studentFirstLogin.
			const password = isStudent
				? Cypress.env("SET_NEW_PWD_BY_STUDENT")
				: res.initialPassword;
			Cypress.env(`schoolId-${environment}`, res.schoolId);
			storeSchoolId(environment, res.schoolId);
			Cypress.env("username", res.username);
			Cypress.env("password", password);
			storePassword(username, environment, password);

			cy.request({
				method: "POST",
				url: `${baseUrl}/api/v3/authentication/local`,
				body: { username: res.username, password: res.initialPassword },
				log: false,
			}).then(({ body }) => {
				const token = body.accessToken;

				cy.setCookie("jwt", token, { domain, hostOnly: true, log: false });
				cy.setCookie("isLoggedIn", "true", {
					domain,
					hostOnly: true,
					log: false,
				});
				cy.request({
					method: "PATCH",
					url: `${baseUrl}/api/v3/user/language`,
					headers: { Authorization: `Bearer ${token}` },
					body: { language: "de" },
					log: false,
				});
				completeFirstLoginViaClientRoute(baseUrl, isStudent, password);
			});
		});
	});
};

// The first login is a Feathers service that is not reachable publicly on branch
// environments; the legacy client's form route forwards to it. The route is CSRF-protected,
// so the token is read from the first-login page first. Students without a birthday get an
// age selection first; like studentFirstLogin, this picks "16 or older" (?ue16=true).
const completeFirstLoginViaClientRoute = (baseUrl, isStudent, password) => {
	const body = isStudent
		? {
				"password-1": password,
				"password-2": password,
				studentBirthdate: "2000-03-21",
			}
		: {};

	cy.request({
		url: `${baseUrl}/firstLogin${isStudent ? "?ue16=true" : ""}`,
		log: false,
	}).then((page) => {
		const match = page.body.match(/name="_csrf" value="([^"]+)"/);
		expect(match, "CSRF token on /firstLogin").to.not.equal(null);
		cy.request({
			method: "POST",
			url: `${baseUrl}/firstLogin/submit`,
			form: true,
			body: { _csrf: match[1], ...body },
			log: false,
		});
	});
};
