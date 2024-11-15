const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Login_Management from "../../pages/login_management/pageLoginManagement";
const loginManagement = new Login_Management();

When("I am logging in with ldap as {string} on {string}", (user, instance) => {
	loginManagement.performLdapLogin(user, instance);
});
