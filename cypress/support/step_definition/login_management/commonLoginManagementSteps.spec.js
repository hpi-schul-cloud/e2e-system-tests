const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Login_Management from "../../pages/login_management/pageLoginManagement";

const loginManagement = new Login_Management();

Given("I am on the {string} login page", (namespace) => {
	loginManagement.visitLoginPage(namespace);
});

When("I click on Forgot Password", () => {
	loginManagement.clickOnForgotPassword();
});

Then("I see the login form on {string}", (namespace) => {
	loginManagement.assertLoginFormIsVisible(namespace);
});

When("I remember my access token", () => {
	loginManagement.rememberAccessToken();
});

Then("my access token cookie is removed", () => {
	loginManagement.assertJwtCookieIsRemoved();
});

Then("the remembered access token is rejected by the API after server logout", () => {
	loginManagement.assertRememberedAccessTokenIsRejectedAfterServerLogout();
});

Then(
	"I see the login form on {string} when I open the dashboard directly",
	(namespace) => {
		loginManagement.visitDashboardAndSeeLoginForm(namespace);
	}
);
