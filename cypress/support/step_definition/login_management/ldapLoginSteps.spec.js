const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Login_Management from "../../pages/login_management/pageLoginManagement";

const loginManagement = new Login_Management();

When("I click on the option button for the login via LDAP", () => {
	loginManagement.clickOnLdapLoginOption();
});

When("I select the LDAP school {string}", (ldapSchoolName) => {
	loginManagement.selectLdapSchoolOnLoginPage(ldapSchoolName);
});

When("I enter LDAP user name for {string} on {string}", (user, namespace) => {
	loginManagement.enterLdapUserName(user, namespace);
});

When("I enter LDAP password {string} on {string}", (user, namespace) => {
	loginManagement.enterLdapUserPassword(user, namespace);
});

When("I click on the button LDAP login on {string}", (namespace) => {
	loginManagement.clickOnLdapLoginButton(namespace);
});
