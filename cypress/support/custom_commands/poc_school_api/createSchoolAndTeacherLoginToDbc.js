Cypress.Commands.add("createSchoolAndUsersToLoginToNbc", () => {
  const apiKey = Cypress.env("API_KEY");
  const schoolApiEndpoint = Cypress.env("API_SCHOOL_ENDPOINT");
  const userApiEndpoint = Cypress.env("API_USERS_ENDPOINT");
  const baseUrl = Cypress.env("NBC");
  const nbcLoginWithEmailOptionButton = '[data-testid="submit-cloud-site"]';
  const emailInputFieldElement = '[data-testid="username-email"]';
  const passwordInputFieldElement = '[data-testid="password-email"]';
  const submitLoginButton = '[data-testid="submit-login-email"]';
  const nextButtonOnFirstLoginPages = '[id="nextSection"]';
  const skipToDashboardButtonOnfirstLoginPage =
    '[data-testid="btn_schul-cloud_erkunden"]';

  //POST first api call to create a new school
  cy.request({
    method: "POST",
    url: schoolApiEndpoint,
    body: {
      name: "cypress-tests-school",
      federalStateName: "Brandenburg",
    },
    headers: {
      "x-api-key": apiKey,
    },
  }).then((firstResponse) => {
    expect(firstResponse.status).to.eq(201);
    expect(firstResponse.body).to.have.property("id");

    //Save the school id from the first response
    const schoolIdResponse = firstResponse.body.id;

    //Function to generate random unique Email
    function generateRandomUserEmail() {
      const randomString = Math.random().toString(30).substring(5);
      const emailDomain = "cypress-mail.de";
      return `teacher_${randomString}@${emailDomain}`;
    }

    const apiRequestBody = {
      schoolId: schoolIdResponse,
      firstName: "firstname",
      lastName: "lastname",
      email: generateRandomUserEmail(),
      roleNames: ["teacher"],
    };

    //POST a second api call using the school id from the first response to create a teacher user (["teacher" or "student" or "administrator"])
    cy.request({
      method: "POST",
      url: userApiEndpoint,
      body: apiRequestBody,
      headers: {
        "x-api-key": apiKey,
      },
    }).then((secondResponse) => {
      expect(secondResponse.status).to.eq(201);
      expect(secondResponse.body).to.have.property("username");
      expect(secondResponse.body).to.have.property("initialPassword");

      //Save the user email and intial password from the second response
      const userEmail = secondResponse.body.username;
      const userInitialPassword = secondResponse.body.initialPassword;

      //Login to the application using the created test data above
      cy.clearCookies();
      cy.visit(baseUrl);
      cy.get(nbcLoginWithEmailOptionButton).click({ multiple: true });
      cy.get(emailInputFieldElement).type(userEmail);
      cy.get(passwordInputFieldElement).type(userInitialPassword);
      cy.get(submitLoginButton).click();
      //Below clicks are for the fisrt login steps
      cy.get(nextButtonOnFirstLoginPages).click();
      cy.get(nextButtonOnFirstLoginPages).click();
      cy.get(skipToDashboardButtonOnfirstLoginPage).click();
    });
  });
});
