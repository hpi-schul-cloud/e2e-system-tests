import { getUserCredentials } from "../../custom_commands/login.helper";
("use strict");

class Login_Management {
  static #passwordRecoveryButton = '[data-testid="forgot-password"]';
  static #usernameLabel = '[data-testid="username-label"]';
  static #emailInput = '[data-testid="username"]';
  static #infoMessage = '[data-testid="info-message"]';
  static #submitButton = '[data-testid="submit-btn-password-recovery-modal"]';
  static #cancelButton = '[data-testid="btn-cancel"]';
  static #emailInputBox = '[data-testid="username-email"]';
  static #passwordField = '[data-testid = "password-email"]';
  static #notificationBannerField = '[data-testid="notification"]';
  static #loginFormSelector = '[data-testid = "login-loginform-standard"]';
  static #inputFieldInvalidPseudoSelector = "input:invalid";
  static #userSettingsCurrentPasswordField = '[data-testid="settings_password_current"]';
  static #userSettingsNewPasswordField = '[data-testid="settings_password_new"]';
  static #userSettingsNewPasswordRepeatField =
    '[data-testid="settings_password_control"]';
  static #userSettingsSubmitBtn = '[data-testid="submit_new_password_btn"]';
  static #pageTitle = "#page-title";
  static #userSettingsNameInitials = '[data-testid="initials"]';
  static #logoutBtn = '[data-testid="logout"]';
  static #loginSubmitBtn = '[data-testid="submit-login-email"]';
  static #openLoginButtonDBC = '[data-testid="login-btn"]';
  static #testData = {
    usernameText:
      "Fugiat consectetur deserunt officia velit. Dolore laboris incididunt consequat pariatur officia.",
    emailText: "robot.test+.exe@@@@@@@gmx.de",
    invalidPassword:
      "sc9lwOX#Z!ImcKVp66SP9ag$RvEX00nhR&Vn@dIW@hhREU||Zhbhbhu&&&$)Uhbwhbdbb|||",
    errorMessageText: "Login fehlgeschlagen.",
  };
  static #buttonLoginViaLdapOption = '[data-testid="submit-ldap-site"]';
  static #toggleLdapProvider = '[data-testid="login-more-options"]'; //old selector can be used to run until new selector deployed on the staging : "button[class*='btn-toggle-providers']"
  static #dropDownLdapSchoolList = "div[id='school_chosen']";
  static #userNameForLdapSchool = '[data-testid="username-ldap"]';
  static #passwordForLdapSchool = '[data-testid="password-ldap"]';
  static #loginButtonForLdapSchool = '[data-testid="submit-login-ldap"';
  static #buttonLoginViaEmailNbc = '[data-testid="submit-cloud-site"]';
  static #titleForgotPasswordDialog = '[data-testid="popup-title"]';
  static #forgotPasswordDialog = '[data-testid="modal_content" ]';
  static #classEmailLoginSection = ".email-login-section";

  // info about checkValidity: https://www.w3schools.com/js/js_validation_api.asp
  // info about inputFieldInvalidPseudoSelector: https://glebbahmutov.com/blog/form-validation-in-cypress/

  clickOnLdapLoginOption() {
    cy.get("body").then((body) => {
      if (body.find(Login_Management.#buttonLoginViaLdapOption).length) {
        //On NBC
        cy.get(Login_Management.#buttonLoginViaLdapOption).click();
      } else {
        //On BRB/dBC
        cy.get(Login_Management.#toggleLdapProvider).click();
      }
    });
  }

  selectLdapSchoolOnLoginPage(ldapSchoolName) {
    cy.get(Login_Management.#dropDownLdapSchoolList)
      .click()
      .contains("li", ldapSchoolName, { matchCase: false })
      .click();
  }

  enterLdapUserName(user, namespace) {
    const env = Cypress.env();
    const [username] = getUserCredentials(user);
    if (namespace === "nbc") {
      cy.get(Login_Management.#userNameForLdapSchool).type(env[username], {
        log: false,
      });
    } else {
      cy.get(Login_Management.#emailInputBox).type(env[username], {
        log: false,
      });
    }
  }

  enterLdapUserPassword(user, namespace) {
    const env = Cypress.env();
    const [, password] = getUserCredentials(user); // it fetches/stores only password from the helper function as a second element in the array.
    if (namespace === "nbc") {
      cy.get(Login_Management.#passwordForLdapSchool).type(env[password], {
        log: false,
      });
    } else {
      cy.get(Login_Management.#passwordField).type(env[password], {
        log: false,
      });
    }
  }

  clickOnLdapLoginButton(namespace) {
    cy.get("body").then((body) => {
      if (namespace === "nbc") {
        cy.get(Login_Management.#loginButtonForLdapSchool).click();
      } else {
        cy.get(Login_Management.#loginSubmitBtn).click();
      }
    });
  }

  assertEmailFieldIsVisibleAndEmpty() {
    cy.get(Login_Management.#loginFormSelector).within(() => {
      cy.get(Login_Management.#emailInputBox)
        .should("be.visible")
        .should("have.value", "")
        .then((el) => {
          expect(el[0].checkValidity()).to.be.false;
        });
      cy.get(Login_Management.#inputFieldInvalidPseudoSelector).should("have.length", 2);
    });
  }

  enterInvalidEmailOrUsername(usernameOrEmail) {
    let usernameOrEmailText;
    /*
        @params: Boolean
        if parameter is TRUE ---> it types Email
        else -----> it type Username
    */
    if (usernameOrEmail) {
      console.log(usernameOrEmail);
      usernameOrEmailText = Login_Management.#testData.emailText; // value is email, since logic is true
    } else {
      usernameOrEmailText = Login_Management.#testData.usernameText; // value is username, since logic is false
    }
    this.typeEmailIntoField(Login_Management.#emailInputBox, usernameOrEmailText);
  }

  enterInvalidPassword() {
    this.typePasswordIntoField(
      Login_Management.#passwordField,
      Login_Management.#testData.invalidPassword
    );
  }

  clickOnSubmitButton() {
    cy.get(Login_Management.#loginFormSelector).should("be.visible").submit().wait(8000);
  }

  assertErrorMessageDisplay() {
    cy.get(Login_Management.#notificationBannerField)
      .should("be.visible")
      .and("have.class", "notification-content")
      .contains(Login_Management.#testData.errorMessageText);
  }

  assertPasswordFieldIsVisibleAndEmpty() {
    cy.get(Login_Management.#loginFormSelector).within(() => {
      cy.get(Login_Management.#passwordField)
        .should("be.visible")
        .should("have.value", "")
        .then((el) => {
          expect(el[0].checkValidity()).to.be.false;
        });
      cy.get(Login_Management.#inputFieldInvalidPseudoSelector).should("have.length", 1);
    });
  }

  assertFormValidationMessageDisplay() {
    cy.get(Login_Management.#loginFormSelector).within(() => {
      cy.get(Login_Management.#inputFieldInvalidPseudoSelector).then((el) => {
        expect(el[0].checkValidity()).to.be.false;
      });
      cy.get(Login_Management.#inputFieldInvalidPseudoSelector).should("have.length", 2);
    });
  }

  visitLoginPage(namespace) {
    Cypress.config("baseUrl", Cypress.env(namespace.toUpperCase()));
    cy.visit("login");
  }

  clickOnForgotPassword() {
    cy.get("body").then((body) => {
      if (body.find(Login_Management.#buttonLoginViaEmailNbc).length) {
        cy.get(Login_Management.#buttonLoginViaEmailNbc).first().click();
      }
      cy.get(Login_Management.#passwordRecoveryButton).first().click();
    });
  }

  showUpElementsOnDialog() {
    cy.get(Login_Management.#forgotPasswordDialog).should("be.visible");
  }

  checkUsernameLabel() {
    cy.get(Login_Management.#usernameLabel).should("be.visible");
  }

  checkEmailInput() {
    cy.get(Login_Management.#emailInput).should("be.visible");
  }

  checkInfoMessage() {
    cy.get(Login_Management.#infoMessage).should("be.visible");
  }

  checkSubmitButton() {
    cy.get(Login_Management.#submitButton).should("be.visible");
  }

  checkCancelButton() {
    cy.get(Login_Management.#cancelButton).should("be.visible");
  }

  checkTitleOfDialog() {
    cy.get(Login_Management.#titleForgotPasswordDialog).should("be.visible");
  }

  submitRequestWithoutEmail() {
    cy.get(Login_Management.#emailInput).clear();
    cy.get(Login_Management.#submitButton).click();
  }

  seeEmailInputOnSubmittingRequestWithoutEnteringEmail() {
    cy.get(Login_Management.#emailInput).should("be.visible");
  }

  typeEmailIntoField(sel, email) {
    cy.get(sel).type(email, { log: false, timeout: 120000 }).should("have.value", email);
  }

  typePasswordIntoField(sel, password) {
    cy.get(sel).type(password, { log: false }).should("have.length", 1);
  }

  assertEmptyAndVisibleField(sel) {
    cy.get(sel).should((fieldIsVisibleAndEmpty) => {
      expect(fieldIsVisibleAndEmpty).to.be.empty;
      expect(fieldIsVisibleAndEmpty).to.be.visible;
    });
  }

  enterEmail() {
    let userEmail = Cypress.env("STUDENT_DBC_PASSWORD_CHANGE_EMAIL");
    this.typeEmailIntoField(Login_Management.#emailInputBox, userEmail);
  }

  enterPassword() {
    let userPwd = Cypress.env("STUDENT_DBC_PASSWORD_CHANGE_OLD_PWD");
    this.typePasswordIntoField(Login_Management.#passwordField, userPwd);
  }

  assertCurrentPwdFieldVisibleAndEmpty() {
    this.assertEmptyAndVisibleField(Login_Management.#userSettingsCurrentPasswordField);
  }

  assertNewAndRepeatPasswordFieldVisibleAndEmpty() {
    this.assertEmptyAndVisibleField(Login_Management.#userSettingsNewPasswordField);
    this.assertEmptyAndVisibleField(Login_Management.#userSettingsNewPasswordRepeatField);
  }

  enterCurrentPassword() {
    let userPwd = Cypress.env("STUDENT_DBC_PASSWORD_CHANGE_OLD_PWD");
    this.typePasswordIntoField(
      Login_Management.#userSettingsCurrentPasswordField,
      userPwd
    );
  }

  enterNewPasswordInAllFields() {
    let userPwd = Cypress.env("STUDENT_DBC_PASSWORD_CHANGE_NEW_PWD");
    this.typePasswordIntoField(Login_Management.#userSettingsNewPasswordField, userPwd);
    this.typePasswordIntoField(
      Login_Management.#userSettingsNewPasswordRepeatField,
      userPwd
    );
  }

  clickOnSubmitButtonInUserSettings() {
    cy.get(Login_Management.#userSettingsSubmitBtn)
      .should("be.visible")
      .click()
      .wait(500)
      .then(() => {
        cy.get(Login_Management.#notificationBannerField).should("be.visible");
        cy.get(Login_Management.#pageTitle).should("be.visible");
      });
  }

  assertSuccessMessageIsDisplay() {
    cy.get(Login_Management.#notificationBannerField).should("be.visible");
  }

  clickOnInitials() {
    cy.get(Login_Management.#userSettingsNameInitials)
      .should("be.visible")
      .click()
      .wait(500);
  }

  clickOnLogoutBtn() {
    cy.get(Login_Management.#logoutBtn).should("be.visible").click().wait(500);
  }

  enterNewPassword() {
    let userPwd = Cypress.env("STUDENT_DBC_PASSWORD_CHANGE_NEW_PWD");
    this.typePasswordIntoField(Login_Management.#passwordField, userPwd);
  }

  enterNewPasswordInUserSettings() {
    let userPwd = Cypress.env("STUDENT_DBC_PASSWORD_CHANGE_NEW_PWD");
    this.typePasswordIntoField(
      Login_Management.#userSettingsCurrentPasswordField,
      userPwd
    );
  }

  enterOldPasswordInUserSettings() {
    let userPwd = Cypress.env("STUDENT_DBC_PASSWORD_CHANGE_OLD_PWD");
    this.typePasswordIntoField(Login_Management.#userSettingsNewPasswordField, userPwd);
    this.typePasswordIntoField(
      Login_Management.#userSettingsNewPasswordRepeatField,
      userPwd
    );
  }

  waitFor15Seconds() {
    cy.wait(15000);
    cy.get(Login_Management.#loginSubmitBtn).then(($btn) => {
      if ($btn.is(":disabled")) {
        cy.log("Button exists and is disabled!");
        return;
      } else {
        cy.log("Button exists and is enabled!");
      }
    });
  }

  assertLoginFormIsVisible(namespace) {
    const loginFormSelectorMap = {
      nbc: Login_Management.#buttonLoginViaEmailNbc,
      dbc: Login_Management.#openLoginButtonDBC,
      brb: Login_Management.#loginFormSelector,
    };
    const selectorForLoginForm =
      loginFormSelectorMap[namespace] || loginFormSelectorMap.brb;
    cy.get(selectorForLoginForm).should("be.visible");
  }
}
export default Login_Management;
