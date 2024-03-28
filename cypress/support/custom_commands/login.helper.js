const externalUsernameInputFieldElement = '[id="Username"]'
const externalPasswordInputFieldElement = '[id="Password"]'
const oauth_url =
	'https://idm-default-main.cd.dbildungscloud.dev/realms/default/protocol/openid-connect/auth?client_id=dbildungscloud-server&redirect_uri=https://default-main.cd.dbildungscloud.dev/api/v3/sso/oauth/62c7f233f35a554ba3ed42f1&response_type=code&scope=openid%20profile%20email&kc_idp_hint=oidcmock'
const defaultLoginViaExternalBroker =
	'[data-testid="submit-oauth-login"], [data-provider="oauth"]'

const emailInputFieldElement = '[data-testid="username-email"]'
const passwordInputFieldElement = '[data-testid="password-email"]'
const submitButton = '[data-testid="submit-login-email"]'
const nextButtonOnFirstLoginPages = '[id="nextSection"]'
const skipToDashboardButtonOnFirstLoginPage =
	'[data-testid="btn_schul-cloud_erkunden"]'
const nbcLoginWithEmailOptionButton = '[data-testid="submit-cloud-site"]'
const studentAgeSelectRadioBtn = '[id="reg-16"]'
const nextButtonAfterAgeSelection = '#showExistingLoginForm'
const datePickerSelectorForDOB =
	'[data-testid="form-date-input-studentBirthdate"]'
const studentUpdatePassword = '[data-testid="firstlogin_password"]'
const studentConfirmPassword = '[data-testid="firstlogin_password_control"]'

const env = Cypress.env()
let environmentUpperCased

const getUserCredentials = username => {
	switch (username) {
		case 'teacher1_brb':
			return ['TEACHER_1_BRB_EMAIL', 'TEACHER_1_BRB_PASSWORD']
		case 'teacher2_brb':
			return ['TEACHER_2_BRB_EMAIL', 'TEACHER_2_BRB_PASSWORD']
		case 'teacher1_dbc':
			return ['TEACHER_1_DBC_EMAIL', 'TEACHER_1_DBC_PASSWORD']
		case 'student1_brb':
			return ['STUDENT_1_BRB_EMAIL', 'STUDENT_1_BRB_PASSWORD']
		case 'student1_dbc':
			return ['STUDENT_1_DBC_EMAIL', 'STUDENT_1_DBC_PASSWORD']
		case 'admin1_brb':
			return ['ADMIN_1_BRB_EMAIL', 'ADMIN_1_BRB_PASSWORD']
		case 'teacher1_nbc':
			return ['TEACHER_1_NBC_EMAIL', 'TEACHER_1_NBC_PASSWORD']
		case 'student2_nbc':
			return ['STUDENT_2_NBC_EMAIL', 'STUDENT_2_NBC_PASSWORD']
		case 'admin1_nbc':
			return ['ADMIN_1_NBC_EMAIL', 'ADMIN_1_NBC_PASSWORD']
		case 'admin1_dbc':
			return ['ADMIN_1_DBC_EMAIL', 'ADMIN_1_DBC_PASSWORD']
		case 'student_extern_dbc':
			return ['STUDENT_DBC_EXTERN', 'STUDENT_DBC_EXTERN_PASSWORD']
		default:
			return [null, null]
	}
}


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
	cy.request('GET', oauth_url).then(resp => {
		cy.intercept(resp.requestHeaders.referer).as('oauth_url')
		cy.visit(resp.requestHeaders.referer).then(window => {
			expect(window.location.pathname).to.include('/Account/Login')
			cy.get('@oauth_url').then(resp => {
				expect(resp.response.statusCode).to.equal(308)
				cy.get(externalUsernameInputFieldElement).should('be.visible')
				cy.get(externalUsernameInputFieldElement).type(username, {
					log: false,
				})
				cy.get(externalPasswordInputFieldElement)
					.type(password, { log: false })
					.type('{enter}')
			})
		})
	})
}

const fillLoginForm = (username, password) => {
	return (
		cy.get(emailInputFieldElement).type(username, { log: false }),
		cy.get(passwordInputFieldElement).type(password, { log: false }),
		cy.get(submitButton).click()
	)
}

const shuffleString = str => {
	const characters = str.split('')
	let currentIndex = characters.length
	let randomIndex

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--
		;[characters[currentIndex], characters[randomIndex]] = [
			characters[randomIndex],
			characters[currentIndex],
		]
	}

	return characters.join('')
}
const generateStrongPassword = length => {
	const lowercase = 'abcdefghijklmnopqrstuvwxyz'
	const uppercase = lowercase.toUpperCase()
	const numbers = '0123456789'
	const symbols = '!@#$%^&*'

	const allChars = lowercase + uppercase + numbers + symbols

	let password = ''
	for (let i = 0; i < length; i++) {
		const charSet = allChars[Math.floor(Math.random() * allChars.length)]
		const randomIndex = Math.floor(Math.random() * charSet.length)
		password += charSet[randomIndex]
	}

	return shuffleString(password)
}

const studentFirstLogin = () => {
	const newPassword = generateStrongPassword(12)
	Cypress.env('password', newPassword)
	cy.get(studentAgeSelectRadioBtn).check()
	cy.get(nextButtonAfterAgeSelection).click()
	cy.get(nextButtonOnFirstLoginPages).click()
	cy.get(nextButtonOnFirstLoginPages).click()
	cy.get(datePickerSelectorForDOB).type('21').type('03').type('2000')
	cy.get(nextButtonOnFirstLoginPages).click()
	cy.get(studentUpdatePassword).type(env['password'])
	cy.get(studentConfirmPassword).type(env['password'])
	cy.get(nextButtonOnFirstLoginPages).click()
	cy.get(skipToDashboardButtonOnFirstLoginPage).click()
}

const nonStudentUsersFirstLogin = () => {
	cy.get(nextButtonOnFirstLoginPages).click()
	cy.get(nextButtonOnFirstLoginPages).click()
	cy.get(skipToDashboardButtonOnFirstLoginPage).click()
}

const loginWithoutSchoolApi = (username, environment) => {
	visitLoginPage(environment)

	environmentUpperCased === 'NBC' &&
		cy.get(nbcLoginWithEmailOptionButton).click()

	let doExternalLogin

	username.includes('extern') ? doExternalLogin = true : doExternalLogin = false

	const [userEmail, userPassword] = getUserCredentials(username)

	doExternalLogin
		? performExternalLogin(env[userEmail], env[userPassword])
		: fillLoginForm(env[userEmail], env[userPassword])
}

const loginViaSchoolApi = async (username, environment) => {
	try {
		visitLoginPage(environment)
		const link = Cypress.config('baseUrl')

		await cy
			.task(
				'loginViaSchoolApi',
				{
					url: link,
					apiKey: Cypress.env('apiKey'),
					schoolId: Cypress.env('schoolId'),
					userType: username,
				},
				{ log: true }
			)
			.as('school_api_response')

		await cy.get('@school_api_response').then(res => {
			Cypress.env('schoolId', res.schoolId)
			Cypress.env('username', res.username)
			Cypress.env('password', res.initialPassword)
			cy.get(nbcLoginWithEmailOptionButton).click()

			fillLoginForm(env['username'], env['password'])
			username.includes('student')
				? studentFirstLogin()
				: nonStudentUsersFirstLogin()
		})
	} catch (error) {
		console.error('Error in loginViaSchoolApi:', error)
		throw error
	}
}

const visitLoginPage = environment => {
	environmentUpperCased = environment.toUpperCase()
	const link = Cypress.config('baseUrl', env[environmentUpperCased])
	cy.log(link)
	cy.visit('/login')
}

module.exports = { loginWithoutSchoolApi, loginViaSchoolApi }
