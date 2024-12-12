const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Login_Management from "../../pages/login_management/pageLoginManagement";

const loginManagement = new Login_Management();

Given("I am on the {string} login page", (namespace) => {
	loginManagement.visitLoginPage(namespace);
});

When("I click on Forgot Password", () => {
	loginManagement.clickOnForgotPassword();
});
